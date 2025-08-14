<template>
  <div :class="['json-node', `level-${node.level}`]">
    <!-- Node Header -->
    <div :class="['node-header', {
      expandable: isExpandable,
      expanded: node.expanded,
      highlighted: isHighlighted
    }]" @click="handleHeaderClick">
      <!-- Indentation -->
      <div class="indentation" :style="{ width: `${node.level * 20}px` }"></div>

      <!-- Expand/Collapse Icon -->
      <div class="expand-icon" v-if="isExpandable">
        <ChevronRightIcon v-if="!node.expanded" />
        <ChevronDownIcon v-else />
      </div>
      <div v-else class="expand-placeholder"></div>

      <!-- Node Key -->
      <span class="node-key" :class="{ editable: editable && isKeyEditable }">
        <input v-if="editingKey" v-model="editKey" @blur="saveKey" @keydown.enter="saveKey" @keydown.escape="cancelEditKey" class="key-input" ref="keyInput" />
        <span v-else @dblclick="startEditKey">{{ displayKey }}</span>
      </span>

      <!-- Colon -->
      <span class="colon">:</span>

      <!-- Node Value -->
      <div class="node-value">
        <!-- Primitive Values -->
        <template v-if="!isExpandable">
          <input v-if="editingValue" v-model="editValue" :type="getInputType()" @blur="saveValue" @keydown.enter="saveValue" @keydown.escape="cancelEditValue" class="value-input" :class="`value-${node.type}`" ref="valueInput" />
          <span v-else :class="['value-display', `value-${node.type}`, { editable: editable }]" @dblclick="startEditValue">
            {{ formatValue(node.value) }}
          </span>
        </template>

        <!-- Object/Array Summary -->
        <template v-else>
          <span :class="['value-summary', `value-${node.type}`]">
            {{ getTypeSummary() }}
          </span>
        </template>
      </div>

      <!-- Controls -->
      <div v-if="editable" class="node-controls">
        <!-- Expand/Collapse for current node -->
        <button v-if="isExpandable" @click.stop="toggleExpand" class="control-icon" :title="node.expanded ? 'Collapse' : 'Expand'">
          <CollapseIcon v-if="node.expanded" />
          <ExpandIcon v-else />
        </button>

        <!-- Add Child -->
        <button v-if="node.type === 'object' || node.type === 'array'" @click.stop="showAddDialog" class="control-icon add-icon" title="Add Item">
          <PlusIcon />
        </button>

        <!-- Delete Node -->
        <button @click.stop="deleteNode" class="control-icon delete-icon" title="Delete">
          <TrashIcon />
        </button>
      </div>
    </div>

    <!-- Children -->
    <div v-if="isExpandable && node.expanded && node.children" class="children">
      <JsonNode v-for="(child, index) in filteredChildren" :key="`${child.path.join('.')}-${index}`" :node="child" :editable="editable" :search-query="searchQuery" @node-click="$emit('node-click', $event)" @node-expand="$emit('node-expand', $event)" @node-collapse="$emit('node-collapse', $event)" @value-change="$emit('value-change', $event)" @node-delete="$emit('node-delete', $event)" @node-add="$emit('node-add', $event)" />

      <!-- Add New Item UI -->
      <div v-if="showingAddForm" class="add-form">
        <div class="indentation" :style="{ width: `${(node.level + 1) * 20}px` }"></div>
        <div class="expand-placeholder"></div>

        <!-- Key input for objects -->
        <input v-if="node.type === 'object'" v-model="newItemKey" placeholder="Key" class="key-input" @keydown.enter="addNewItem" @keydown.escape="cancelAdd" />

        <span v-if="node.type === 'object'" class="colon">:</span>

        <!-- Value input -->
        <input v-model="newItemValue" placeholder="Value" class="value-input" @keydown.enter="addNewItem" @keydown.escape="cancelAdd" />

        <!-- Add/Cancel buttons -->
        <div class="add-controls">
          <button @click="addNewItem" class="add-btn" title="Add">
            <CheckIcon />
          </button>
          <button @click="cancelAdd" class="cancel-btn" title="Cancel">
            <XIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch } from "vue";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  ExpandIcon,
  CollapseIcon,
  PlusIcon,
  TrashIcon,
  CheckIcon,
  XIcon,
} from "./icons";

// Types
interface JsonNodeType {
  key: string;
  value: any;
  type: "string" | "number" | "boolean" | "object" | "array" | "null";
  path: string[];
  level: number;
  expanded?: boolean;
  children?: JsonNodeType[];
}

interface Props {
  node: JsonNodeType;
  editable?: boolean;
  searchQuery?: string;
}

interface Emits {
  "node-click": [node: JsonNodeType];
  "node-expand": [node: JsonNodeType];
  "node-collapse": [node: JsonNodeType];
  "value-change": [event: { node: JsonNodeType; value: any }];
  "node-delete": [node: JsonNodeType];
  "node-add": [event: { parent: JsonNodeType; key: string; value: any }];
}

// Props and Emits
const props = withDefaults(defineProps<Props>(), {
  editable: false,
  searchQuery: "",
});

const emit = defineEmits<Emits>();

// Reactive State
const editingKey = ref(false);
const editingValue = ref(false);
const editKey = ref("");
const editValue = ref("");
const showingAddForm = ref(false);
const newItemKey = ref("");
const newItemValue = ref("");

// Template refs
const keyInput = ref<HTMLInputElement>();
const valueInput = ref<HTMLInputElement>();

// Computed Properties
const isExpandable = computed(() => {
  return props.node.type === "object" || props.node.type === "array";
});

const isKeyEditable = computed(() => {
  return props.node.level > 0; // Don't allow editing root keys
});

const displayKey = computed(() => {
  if (props.node.level === 0) {
    return props.node.type === "array" ? "Array" : "Object";
  }

  // Add quotes for object keys, show index for arrays
  const parent = getParentType();
  if (parent === "array") {
    return `[${props.node.key}]`;
  }
  return `"${props.node.key}"`;
});

const isHighlighted = computed(() => {
  if (!props.searchQuery) return false;

  const query = props.searchQuery.toLowerCase();
  const keyMatch = props.node.key.toLowerCase().includes(query);
  const valueMatch = typeof props.node.value === "string" &&
    props.node.value.toLowerCase().includes(query);

  return keyMatch || valueMatch;
});

const filteredChildren = computed(() => {
  if (!props.node.children || !props.searchQuery) {
    return props.node.children || [];
  }

  // Filter children based on search query
  return props.node.children.filter(child => {
    const query = props.searchQuery.toLowerCase();
    const keyMatch = child.key.toLowerCase().includes(query);
    const valueMatch = typeof child.value === "string" &&
      child.value.toLowerCase().includes(query);
    const hasMatchingDescendants = hasMatchingChildren(child, query);

    return keyMatch || valueMatch || hasMatchingDescendants;
  });
});

// Methods
const getParentType = (): "object" | "array" | null => {
  if (props.node.path.length <= 1) return null;
  // This would need to be passed from parent or computed from path
  return "object"; // Simplified for now
};

const getTypeSummary = (): string => {
  if (props.node.type === "array") {
    const length = Array.isArray(props.node.value) ? props.node.value.length : 0;
    return `Array[${length}]`;
  }

  if (props.node.type === "object") {
    const keys = props.node.value && typeof props.node.value === "object"
      ? Object.keys(props.node.value).length
      : 0;
    return `Object{${keys}}`;
  }

  return "";
};

const formatValue = (value: any): string => {
  if (value === null) return "null";
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "boolean") return value.toString();
  if (typeof value === "number") return value.toString();
  return String(value);
};

const getInputType = (): string => {
  switch (props.node.type) {
    case "number":
      return "number";
    case "boolean":
      return "checkbox";
    default:
      return "text";
  }
};

const hasMatchingChildren = (node: JsonNodeType, query: string): boolean => {
  if (!node.children) return false;

  return node.children.some(child => {
    const keyMatch = child.key.toLowerCase().includes(query);
    const valueMatch = typeof child.value === "string" &&
      child.value.toLowerCase().includes(query);
    const childMatch = hasMatchingChildren(child, query);

    return keyMatch || valueMatch || childMatch;
  });
};

const handleHeaderClick = () => {
  if (isExpandable.value) {
    toggleExpand();
  }
  emit("node-click", props.node);
};

const toggleExpand = () => {
  if (props.node.expanded) {
    emit("node-collapse", props.node);
  } else {
    emit("node-expand", props.node);
  }
};

const startEditKey = () => {
  if (!props.editable || !isKeyEditable.value) return;

  editKey.value = props.node.key;
  editingKey.value = true;

  nextTick(() => {
    keyInput.value?.focus();
    keyInput.value?.select();
  });
};

const saveKey = () => {
  if (editKey.value !== props.node.key) {
    // Emit key change event
    emit("value-change", {
      node: { ...props.node, key: editKey.value },
      value: props.node.value
    });
  }
  cancelEditKey();
};

const cancelEditKey = () => {
  editingKey.value = false;
  editKey.value = "";
};

const startEditValue = () => {
  if (!props.editable || isExpandable.value) return;

  if (props.node.type === "boolean") {
    // Toggle boolean directly
    emit("value-change", {
      node: props.node,
      value: !props.node.value
    });
    return;
  }

  editValue.value = props.node.type === "string"
    ? props.node.value
    : String(props.node.value);
  editingValue.value = true;

  nextTick(() => {
    valueInput.value?.focus();
    valueInput.value?.select();
  });
};

const saveValue = () => {
  let newValue: any = editValue.value;

  // Convert value based on type
  try {
    switch (props.node.type) {
      case "number":
        newValue = parseFloat(editValue.value);
        if (isNaN(newValue)) {
          alert("Invalid number format");
          return;
        }
        break;
      case "boolean":
        newValue = editValue.value === "true";
        break;
      case "string":
        newValue = editValue.value;
        break;
      default:
        // Try to parse as JSON for complex types
        newValue = JSON.parse(editValue.value);
    }

    emit("value-change", { node: props.node, value: newValue });
  } catch (error) {
    alert("Invalid value format");
    return;
  }

  cancelEditValue();
};

const cancelEditValue = () => {
  editingValue.value = false;
  editValue.value = "";
};

const deleteNode = () => {
  if (confirm("Are you sure you want to delete this item?")) {
    emit("node-delete", props.node);
  }
};

const showAddDialog = () => {
  showingAddForm.value = true;
  newItemKey.value = "";
  newItemValue.value = "";

  if (props.node.type === "array") {
    // For arrays, focus on value input
    nextTick(() => {
      const valueInput = document.querySelector(".add-form .value-input") as HTMLInputElement;
      valueInput?.focus();
    });
  } else {
    // For objects, focus on key input
    nextTick(() => {
      const keyInput = document.querySelector(".add-form .key-input") as HTMLInputElement;
      keyInput?.focus();
    });
  }
};

const addNewItem = () => {
  try {
    let key = newItemKey.value;
    let value: any = newItemValue.value;

    if (props.node.type === "object" && !key.trim()) {
      alert("Key is required for object properties");
      return;
    }

    if (props.node.type === "array") {
      key = (props.node.children?.length || 0).toString();
    }

    // Try to parse value as JSON, fallback to string
    try {
      value = JSON.parse(newItemValue.value);
    } catch {
      // If JSON parse fails, treat as string unless it looks like a primitive
      if (newItemValue.value === "true" || newItemValue.value === "false") {
        value = newItemValue.value === "true";
      } else if (!isNaN(Number(newItemValue.value)) && newItemValue.value.trim() !== "") {
        value = Number(newItemValue.value);
      } else if (newItemValue.value === "null") {
        value = null;
      } else {
        value = newItemValue.value;
      }
    }

    emit("node-add", { parent: props.node, key, value });
    cancelAdd();
  } catch (error) {
    alert("Invalid value format");
  }
};

const cancelAdd = () => {
  showingAddForm.value = false;
  newItemKey.value = "";
  newItemValue.value = "";
};

// Watchers
watch(() => props.searchQuery, (newQuery) => {
  // Auto-expand nodes that contain search matches
  if (newQuery && isExpandable.value && hasMatchingChildren(props.node, newQuery.toLowerCase())) {
    emit("node-expand", props.node);
  }
});
</script>

<style scoped>
.json-node {
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.node-header {
  display: flex;
  align-items: center;
  padding: 2px 0;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
}

.node-header:hover {
  background-color: var(--hover-color);
}

.node-header.highlighted {
  background-color: rgba(255, 235, 59, 0.2);
}

.node-header.expandable {
  cursor: pointer;
}

.indentation {
  flex-shrink: 0;
}

.expand-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  color: var(--text-secondary);
  transition: transform 0.2s ease;
}

.expand-placeholder {
  width: 20px;
  flex-shrink: 0;
}

.node-key {
  color: var(--accent-color);
  font-weight: 600;
  margin-right: 4px;
  min-width: 0;
}

.node-key.editable:hover {
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 2px;
}

.colon {
  color: var(--text-secondary);
  margin-right: 8px;
}

.node-value {
  flex: 1;
  min-width: 0;
}

.value-display {
  word-break: break-word;
}

.value-display.editable:hover {
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 2px;
  cursor: text;
}

/* Value Type Styling */
.value-string {
  color: var(--success-color);
}

.value-number {
  color: #0550ae;
  font-weight: 500;
}

.value-boolean {
  color: var(--warning-color);
  font-weight: 500;
}

.value-null {
  color: var(--text-secondary);
  font-style: italic;
}

.value-summary {
  color: var(--text-secondary);
  font-style: italic;
}

.theme-dark .value-number {
  color: #79c0ff;
}

/* Input Styling */
.key-input,
.value-input {
  border: 1px solid var(--accent-color);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  min-width: 60px;
}

.key-input:focus,
.value-input:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

/* Node Controls */
.node-controls {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.node-header:hover .node-controls {
  opacity: 1;
}

.control-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s ease;
}

.control-icon:hover {
  background-color: var(--hover-color);
  color: var(--text-primary);
}

.add-icon:hover {
  color: var(--success-color);
}

.delete-icon:hover {
  color: var(--error-color);
}

/* Children */
.children {
  border-left: 1px solid var(--border-color);
  margin-left: 10px;
  padding-left: 0;
}

/* Add Form */
.add-form {
  display: flex;
  align-items: center;
  padding: 4px 0;
  margin: 2px 0;
  background-color: rgba(59, 130, 246, 0.05);
  border-radius: 4px;
}

.add-controls {
  display: flex;
  gap: 4px;
  margin-left: 8px;
}

.add-btn,
.cancel-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-btn {
  background-color: var(--success-color);
  color: white;
}

.add-btn:hover {
  background-color: #059669;
}

.cancel-btn {
  background-color: var(--error-color);
  color: white;
}

.cancel-btn:hover {
  background-color: #dc2626;
}

/* Level-based indentation styling */
.level-0 .node-header {
  font-weight: 600;
  font-size: 15px;
}

.level-1 .node-key {
  font-weight: 500;
}

/* Animation for expand/collapse */
.expand-icon {
  transition: transform 0.2s ease;
}

.node-header.expanded .expand-icon {
  transform: rotate(90deg);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .json-node {
    font-size: 13px;
  }

  .node-controls {
    opacity: 1;
    /* Always show on mobile */
  }

  .indentation {
    width: 16px !important;
  }
}
</style>
