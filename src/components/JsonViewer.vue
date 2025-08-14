<template>
  <div :class="['json-viewer', `theme-${theme}`]">
    <!-- Menu Bar -->
    <div class="menu-bar">
      <div class="menu-section">
        <!-- Mode Switcher -->
        <div class="mode-switcher">
          <button :class="['mode-btn', { active: currentMode === 'tree' }]" @click="setMode('tree')">
            <TreeIcon />
            <span v-if="!hideActionText">Tree</span>
          </button>
          <button :class="['mode-btn', { active: currentMode === 'text' }]" @click="setMode('text')">
            <CodeIcon />
            <span v-if="!hideActionText">Text</span>
          </button>
        </div>
      </div>

      <div class="menu-section">
        <!-- Tree Controls -->
        <div v-if="currentMode === 'tree'" class="tree-controls">
          <button class="control-btn" @click="expandAll" title="Expand All">
            <ExpandIcon />
            <span v-if="!hideActionText">Expand All</span>
          </button>
          <button class="control-btn" @click="collapseAll" title="Collapse All">
            <CollapseIcon />
            <span v-if="!hideActionText">Collapse All</span>
          </button>
        </div>

        <!-- Edit Controls -->
        <div class="edit-controls">
          <button :class="['control-btn', { active: isEditMode }]" @click="toggleEditMode" title="Toggle Edit Mode">
            <EditIcon />
            <span v-if="!hideActionText">{{ isEditMode ? 'Exit Edit' : 'Edit' }}</span>
          </button>
          <template v-if="isEditMode">
            <button class="control-btn save-btn" @click="saveChanges" title="Save Changes">
              <SaveIcon />
              <span v-if="!hideActionText">Save</span>
            </button>
            <button class="control-btn cancel-btn" @click="cancelChanges" title="Cancel Changes">
              <CancelIcon />
              <span v-if="!hideActionText">Cancel</span>
            </button>
          </template>
        </div>
      </div>

      <div class="menu-section">
        <!-- Additional Controls -->
        <div class="additional-controls">
          <button class="control-btn" @click="copyToClipboard" title="Copy JSON">
            <CopyIcon />
          </button>
          <button class="control-btn" @click="downloadJson" title="Download JSON">
            <DownloadIcon />
          </button>
          <button class="control-btn" @click="toggleTheme" title="Toggle Theme">
            <ThemeIcon />
          </button>
        </div>
      </div>
    </div>

    <!-- View Area -->
    <div class="view-area">
      <!-- Search Bar -->
      <div v-if="showSearch" class="search-bar">
        <input v-model="searchQuery" type="text" placeholder="Search JSON..." class="search-input" />
        <button class="search-btn" @click="toggleSearch">
          <CloseIcon />
        </button>
      </div>

      <!-- Tree Mode -->
      <div v-if="currentMode === 'tree'" class="tree-view">
        <JsonNode v-for="(node, index) in rootNodes" :key="`${node.path.join('.')}-${index}`" :node="node" :editable="isEditMode" :search-query="searchQuery" @node-click="handleNodeClick" @node-expand="handleNodeExpand" @node-collapse="handleNodeCollapse" @value-change="handleValueChange" @node-delete="handleNodeDelete" @node-add="handleNodeAdd" />
      </div>

      <!-- Text Mode -->
      <div v-else class="text-view">
        <div class="text-editor" :class="{ 'with-line-numbers': showLineNumbers }">
          <textarea v-if="isEditMode" v-model="jsonText" class="json-textarea" :class="{ error: hasJsonError }" @input="validateJson"></textarea>
          <div v-else class="json-display-container">
            <div v-if="showLineNumbers" class="line-numbers">
              <span v-for="lineNum in lineNumbers" :key="lineNum" class="line-number">{{ lineNum }}</span>
            </div>
            <pre class="json-display"><code v-html="highlightedJson"></code></pre>
          </div>
        </div>
        <div v-if="hasJsonError" class="error-message">
          Invalid JSON: {{ jsonError }}
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-info">
        <span class="info-item">
          Mode: <strong>{{ currentMode }}</strong>
        </span>
        <span class="info-item">
          Size: <strong>{{ formatSize(jsonSize) }}</strong>
        </span>
        <span v-if="currentMode === 'tree'" class="info-item">
          Nodes: <strong>{{ totalNodes }}</strong>
        </span>
      </div>
      <div class="footer-actions">
        <button class="footer-btn" @click="toggleSearch">
          <SearchIcon />
          <span v-if="!hideActionText">Search</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import JsonNode from "./JsonNode.vue";
import {
  TreeIcon,
  CodeIcon,
  ExpandIcon,
  CollapseIcon,
  EditIcon,
  SaveIcon,
  CancelIcon,
  CopyIcon,
  DownloadIcon,
  ThemeIcon,
  SearchIcon,
  CloseIcon,
} from "./icons";

// Types
export interface JsonNodeType {
  key: string;
  value: any;
  type: "string" | "number" | "boolean" | "object" | "array" | "null";
  path: string[];
  level: number;
  expanded?: boolean;
  children?: JsonNodeType[];
}

export interface Props {
  data: any;
  editable?: boolean;
  theme?: "light" | "dark";
  defaultMode?: "tree" | "text";
  showLineNumbers?: boolean;
  maxDepth?: number;
  hideActionText?: boolean;
}

interface Emits {
  "update:data": [newData: any];
  "node-click": [node: JsonNodeType];
  "node-expand": [node: JsonNodeType];
  "node-collapse": [node: JsonNodeType];
  "edit-start": [];
  "edit-save": [data: any];
  "edit-cancel": [];
  "theme-change": [theme: "light" | "dark"];
}

// Props and Emits
const props = withDefaults(defineProps<Props>(), {
  editable: true,
  theme: "light",
  defaultMode: "tree",
  showLineNumbers: false,
  maxDepth: 3,
  hideActionText: false,
});

const emit = defineEmits<Emits>();

// Reactive State
const currentMode = ref<"tree" | "text">(props.defaultMode);
const isEditMode = ref(false);
const searchQuery = ref("");
const showSearch = ref(false);
const jsonText = ref("");
const originalData = ref(null);
const hasJsonError = ref(false);
const jsonError = ref("");
const rootNodes = ref<JsonNodeType[]>([]);

// Computed Properties
const jsonSize = computed(() => {
  return JSON.stringify(props.data).length;
});

const totalNodes = computed(() => {
  const countNodes = (nodes: JsonNodeType[]): number => {
    let count = nodes.length;
    nodes.forEach(node => {
      if (node.children) {
        count += countNodes(node.children);
      }
    });
    return count;
  };
  return countNodes(rootNodes.value);
});

const highlightedJson = computed(() => {
  if (!props.data) return "";

  const jsonString = JSON.stringify(props.data, null, 2);
  return highlightJsonSyntax(jsonString);
});

const lineNumbers = computed(() => {
  if (!props.data || !props.showLineNumbers) return [];

  const jsonString = JSON.stringify(props.data, null, 2);
  const lines = jsonString.split('\n');
  return Array.from({ length: lines.length }, (_, i) => i + 1);
});

// Methods
const setMode = (mode: "tree" | "text") => {
  currentMode.value = mode;
};

const toggleEditMode = () => {
  if (isEditMode.value) {
    cancelChanges();
  } else {
    startEdit();
  }
};

const startEdit = () => {
  originalData.value = JSON.parse(JSON.stringify(props.data));
  jsonText.value = JSON.stringify(props.data, null, 2);
  isEditMode.value = true;
  emit("edit-start");
};

const saveChanges = () => {
  if (currentMode.value === "text") {
    if (hasJsonError.value) {
      alert("Please fix JSON errors before saving");
      return;
    }
    try {
      const newData = JSON.parse(jsonText.value);
      emit("update:data", newData);
    } catch (error) {
      alert("Invalid JSON format");
      return;
    }
  }

  isEditMode.value = false;
  originalData.value = null;
  emit("edit-save", props.data);
};

const cancelChanges = () => {
  if (originalData.value) {
    emit("update:data", originalData.value);
    jsonText.value = JSON.stringify(originalData.value, null, 2);
  }
  isEditMode.value = false;
  originalData.value = null;
  hasJsonError.value = false;
  jsonError.value = "";
  emit("edit-cancel");
};

const expandAll = () => {
  const expandNodes = (nodes: JsonNodeType[]) => {
    nodes.forEach(node => {
      if (node.type === "object" || node.type === "array") {
        node.expanded = true;
        if (node.children) {
          expandNodes(node.children);
        }
      }
    });
  };
  expandNodes(rootNodes.value);
};

const collapseAll = () => {
  const collapseNodes = (nodes: JsonNodeType[]) => {
    nodes.forEach(node => {
      if (node.type === "object" || node.type === "array") {
        node.expanded = false;
        if (node.children) {
          collapseNodes(node.children);
        }
      }
    });
  };
  collapseNodes(rootNodes.value);
};

const copyToClipboard = async () => {
  try {
    const text = JSON.stringify(props.data, null, 2);
    await navigator.clipboard.writeText(text);
    // Show success notification
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const downloadJson = () => {
  const jsonString = JSON.stringify(props.data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const toggleTheme = () => {
  const newTheme = props.theme === "light" ? "dark" : "light";
  emit("theme-change", newTheme);
};

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  if (!showSearch.value) {
    searchQuery.value = "";
  }
};

const validateJson = () => {
  try {
    JSON.parse(jsonText.value);
    hasJsonError.value = false;
    jsonError.value = "";
  } catch (error) {
    hasJsonError.value = true;
    jsonError.value = (error as Error).message;
  }
};

const buildTreeNodes = (data: any, path: string[] = [], level: number = 0): JsonNodeType[] => {
  const nodes: JsonNodeType[] = [];

  if (data === null) {
    return [{
      key: "",
      value: null,
      type: "null",
      path,
      level,
    }];
  }

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      const itemPath = [...path, index.toString()];
      const itemType = getValueType(item);
      const node: JsonNodeType = {
        key: index.toString(),
        value: item,
        type: itemType,
        path: itemPath,
        level,
        expanded: level < props.maxDepth,
      };

      if (itemType === "object" || itemType === "array") {
        node.children = buildTreeNodes(item, itemPath, level + 1);
      }

      nodes.push(node);
    });
  } else if (typeof data === "object") {
    Object.entries(data).forEach(([key, value]) => {
      const itemPath = [...path, key];
      const itemType = getValueType(value);
      const node: JsonNodeType = {
        key,
        value,
        type: itemType,
        path: itemPath,
        level,
        expanded: level < props.maxDepth,
      };

      if (itemType === "object" || itemType === "array") {
        node.children = buildTreeNodes(value, itemPath, level + 1);
      }

      nodes.push(node);
    });
  }

  return nodes;
};

const getValueType = (value: any): JsonNodeType["type"] => {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (typeof value === "object") return "object";
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "boolean";
  return "string";
};

const highlightJsonSyntax = (json: string): string => {
  return json
    .replace(/("[\w\s]*")\s*:/g, '<span class="json-key">$1</span>:')
    .replace(/:\s*(".*?")/g, ': <span class="json-string">$1</span>')
    .replace(/:\s*(true|false)/g, ': <span class="json-boolean">$1</span>')
    .replace(/:\s*(null)/g, ': <span class="json-null">$1</span>')
    .replace(/:\s*(\d+\.?\d*)/g, ': <span class="json-number">$1</span>');
};

const formatSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// Event Handlers
const handleNodeClick = (node: JsonNodeType) => {
  emit("node-click", node);
};

const handleNodeExpand = (node: JsonNodeType) => {
  node.expanded = true;
  emit("node-expand", node);
};

const handleNodeCollapse = (node: JsonNodeType) => {
  node.expanded = false;
  emit("node-collapse", node);
};

const handleValueChange = (event: { node: JsonNodeType; value: any }) => {
  // Update the data and rebuild tree
  const newData = JSON.parse(JSON.stringify(props.data));
  setNestedValue(newData, event.node.path, event.value);
  emit("update:data", newData);
};

const handleNodeDelete = (node: JsonNodeType) => {
  const newData = JSON.parse(JSON.stringify(props.data));
  deleteNestedValue(newData, node.path);
  emit("update:data", newData);
};

const handleNodeAdd = (event: { parent: JsonNodeType; key: string; value: any }) => {
  const newData = JSON.parse(JSON.stringify(props.data));
  const parentPath = event.parent.path;
  const parent = getNestedValue(newData, parentPath);

  if (Array.isArray(parent)) {
    parent.push(event.value);
  } else if (typeof parent === "object") {
    parent[event.key] = event.value;
  }

  emit("update:data", newData);
};

// Helper functions
const setNestedValue = (obj: any, path: string[], value: any) => {
  const lastKey = path[path.length - 1];
  const parent = path.slice(0, -1).reduce((current, key) => current[key], obj);
  parent[lastKey] = value;
};

const deleteNestedValue = (obj: any, path: string[]) => {
  const lastKey = path[path.length - 1];
  const parent = path.slice(0, -1).reduce((current, key) => current[key], obj);

  if (Array.isArray(parent)) {
    parent.splice(parseInt(lastKey), 1);
  } else {
    delete parent[lastKey];
  }
};

const getNestedValue = (obj: any, path: string[]) => {
  return path.reduce((current, key) => current[key], obj);
};

// Watchers
watch(() => props.data, (newData) => {
  rootNodes.value = buildTreeNodes(newData);
  jsonText.value = JSON.stringify(newData, null, 2);
}, { deep: true, immediate: true });

// Lifecycle
onMounted(() => {
  rootNodes.value = buildTreeNodes(props.data);
  jsonText.value = JSON.stringify(props.data, null, 2);
});
</script>

<style scoped>
.json-viewer {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Inter', 'Roboto', system-ui, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Theme Variables */
.theme-light {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --accent-color: #3b82f6;
  --hover-color: #f1f5f9;
  --success-color: #10b981;
  --error-color: #ef4444;
  --warning-color: #f59e0b;
}

.theme-dark {
  --bg-primary: #1f2937;
  --bg-secondary: #111827;
  --bg-tertiary: #374151;
  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --border-color: #4b5563;
  --accent-color: #60a5fa;
  --hover-color: #374151;
  --success-color: #34d399;
  --error-color: #f87171;
  --warning-color: #fbbf24;
}

.json-viewer {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

/* Menu Bar */
.menu-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;
  gap: 12px;
}

.menu-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mode-switcher {
  display: flex;
  background-color: var(--bg-tertiary);
  border-radius: 6px;
  padding: 2px;
}

.mode-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.mode-btn:hover {
  background-color: var(--hover-color);
}

.mode-btn.active {
  background-color: var(--accent-color);
  color: white;
}

.tree-controls,
.edit-controls,
.additional-controls {
  display: flex;
  gap: 8px;
}

.control-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.control-btn:hover {
  background-color: var(--hover-color);
  border-color: var(--accent-color);
}

.control-btn.active {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.save-btn {
  background-color: var(--success-color);
  color: white;
  border-color: var(--success-color);
}

.save-btn:hover {
  background-color: #059669;
  color: white;
}

.cancel-btn {
  background-color: var(--error-color);
  color: white;
  border-color: var(--error-color);
}

.cancel-btn:hover {
  background-color: #dc2626;
  color: white;
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  gap: 8px;
}

.search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-btn {
  padding: 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 4px;
}

.search-btn:hover {
  background-color: var(--hover-color);
}

/* View Area */
.view-area {
  flex: 1;
  overflow: auto;
  background-color: var(--bg-primary);
}

.tree-view {
  padding: 16px;
}

.text-view {
  padding: 16px;
  height: 100%;
}

.text-editor {
  height: 100%;
  min-height: 400px;
}

.json-textarea {
  width: 100%;
  height: 100%;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  outline: none;
}

.json-textarea:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.json-textarea.error {
  border-color: var(--error-color);
}

.json-display {
  padding: 16px;
  background-color: var(--bg-secondary);
  border-radius: 6px;
  overflow: auto;
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre;
  margin: 0;
}

.error-message {
  margin-top: 8px;
  padding: 8px 12px;
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error-color);
  border-radius: 6px;
  font-size: 13px;
}

/* JSON Syntax Highlighting */
.json-key {
  color: #0969da;
  font-weight: 500;
}

.json-string {
  color: #0a3069;
}

.json-number {
  color: #0550ae;
}

.json-boolean {
  color: #8250df;
  font-weight: 500;
}

.json-null {
  color: #6f7881;
  font-style: italic;
}

.theme-dark .json-key {
  color: #79c0ff;
}

.theme-dark .json-string {
  color: #a5d6ff;
}

.theme-dark .json-number {
  color: #79c0ff;
}

.theme-dark .json-boolean {
  color: #d2a8ff;
}

.theme-dark .json-null {
  color: #8b949e;
}

/* Line Numbers */
.text-editor.with-line-numbers {
  position: relative;
}

.json-display-container {
  display: flex;
  position: relative;
}

.line-numbers {
  display: flex;
  flex-direction: column;
  padding: 12px 8px 12px 12px;
  background-color: var(--bg-tertiary);
  border-right: 1px solid var(--border-color);
  border-radius: 6px 0 0 6px;
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 14px;
  color: var(--text-secondary);
  user-select: none;
  min-width: 40px;
  text-align: right;
  line-height: 1.5;
}

.line-number {
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 4px;
}

.json-display {
  margin: 0;
  padding: 12px;
  border-radius: 0 6px 6px 0;
  flex: 1;
  line-height: 1.5;
}

.theme-dark .line-numbers {
  background-color: #1e293b;
  border-color: #374151;
  color: #64748b;
}

/* Footer */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  font-size: 12px;
}

.footer-info {
  display: flex;
  gap: 16px;
  color: var(--text-secondary);
}

.info-item strong {
  color: var(--text-primary);
}

.footer-actions {
  display: flex;
  gap: 8px;
}

.footer-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 4px;
  font-size: 12px;
}

.footer-btn:hover {
  background-color: var(--hover-color);
  color: var(--text-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .menu-section {
    justify-content: center;
  }

  .footer {
    flex-direction: column;
    gap: 8px;
  }

  .footer-info {
    justify-content: center;
  }
}
</style>
