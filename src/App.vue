<template>
  <div id="app">
    <header class="app-header">
      <h1>Vue 3 JSON Viewer Demo</h1>
      <p>A modern, sleek JSON viewer component with tree and text modes</p>
    </header>

    <main class="app-main">
      <div class="demo-container">
        <div class="demo-controls">
          <h3>Sample Data</h3>
          <div class="sample-buttons">
            <button @click="loadSample('simple')" class="sample-btn">Simple Object</button>
            <button @click="loadSample('complex')" class="sample-btn">Complex Data</button>
            <button @click="loadSample('array')" class="sample-btn">Array Data</button>
            <button @click="loadSample('nested')" class="sample-btn">Deeply Nested</button>
          </div>

          <div class="theme-controls">
            <label>
              <input type="checkbox" v-model="isDarkTheme" @change="toggleTheme" />
              Dark Theme
            </label>
            <label>
              <input type="checkbox" v-model="showLineNumbers" />
              Show Line Numbers
            </label>
            <label>
              <input type="checkbox" v-model="hideActionText" />
              Hide Button Text
            </label>
          </div>

          <div class="props-controls">
            <h4>UI Visibility Controls</h4>
            <div class="props-grid">
              <label>
                <input type="checkbox" v-model="hideHeader" />
                Hide Header
              </label>
              <label>
                <input type="checkbox" v-model="hideFooter" />
                Hide Footer
              </label>
              <label>
                <input type="checkbox" v-model="hideModeSwitcher" />
                Hide Mode Switcher
              </label>
              <label>
                <input type="checkbox" v-model="hideTreeControls" />
                Hide Tree Controls
              </label>
              <label>
                <input type="checkbox" v-model="hideEditControls" />
                Hide Edit Controls
              </label>
              <label>
                <input type="checkbox" v-model="hideSearchButton" />
                Hide Search Button
              </label>
              <label>
                <input type="checkbox" v-model="hideCopyButton" />
                Hide Copy Button
              </label>
              <label>
                <input type="checkbox" v-model="hideDownloadButton" />
                Hide Download Button
              </label>
              <label>
                <input type="checkbox" v-model="hideThemeButton" />
                Hide Theme Button
              </label>
            </div>
          </div>
        </div>

        <div class="json-viewer-container">
          <JsonViewer v-model:data="jsonData" :editable="true" :theme="isDarkTheme ? 'dark' : 'light'" default-mode="tree" :max-depth="2" :show-line-numbers="showLineNumbers" :hide-action-text="hideActionText" :hide-header="hideHeader" :hide-footer="hideFooter" :hide-mode-switcher="hideModeSwitcher" :hide-tree-controls="hideTreeControls" :hide-edit-controls="hideEditControls" :hide-search-button="hideSearchButton" :hide-copy-button="hideCopyButton" :hide-download-button="hideDownloadButton" :hide-theme-button="hideThemeButton" @update:data="handleDataUpdate" @node-click="handleNodeClick" @edit-save="handleEditSave" @edit-cancel="handleEditCancel" @theme-change="handleThemeChange" />
        </div>
      </div>

      <div class="info-panel">
        <h3>Component Features</h3>
        <ul class="feature-list">
          <li>✅ Tree Mode with expandable/collapsible nodes</li>
          <li>✅ Text Mode with syntax highlighting</li>
          <li>✅ Inline editing capabilities</li>
          <li>✅ Key editing (rename object keys)</li>
          <li>✅ Add/Remove nodes and properties</li>
          <li>✅ Search functionality</li>
          <li>✅ Copy to clipboard with visual feedback</li>
          <li>✅ Download JSON file</li>
          <li>✅ Light/Dark theme support</li>
          <li>✅ Responsive design</li>
          <li>✅ Keyboard navigation</li>
          <li>✅ Customizable UI (hide buttons/sections)</li>
        </ul>

        <div class="usage-example">
          <h4>Usage Example</h4>
          <pre><code>&lt;JsonViewer
  v-model:data="jsonData"
  :editable="true"
  theme="dark"
  default-mode="tree"
  :hide-header="false"
  :hide-footer="true"
  :hide-edit-controls="false"
  :hide-search-button="true"
  @update:data="handleDataUpdate"
/&gt;</code></pre>
        </div>
      </div>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <p>Vue 3 JSON Viewer Component - Built with Composition API and TypeScript</p>
        <div class="footer-links">
          <a href="https://github.com/jeevan-lal/vue3-json-viewer" target="_blank" rel="noopener noreferrer" class="github-link">
            <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Repository
          </a>
          <a href="https://www.npmjs.com/package/@ctechhindi/vue3-json-viewer" target="_blank" rel="noopener noreferrer" class="npm-link">
            <svg class="npm-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 13.836h-3.464l.007-4.211h-3.456v4.201H5.136V5.323z" />
            </svg>
            NPM Package
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import JsonViewer from "./components/JsonViewer.vue";

// Reactive state
const jsonData = ref({});
const isDarkTheme = ref(false);
const showLineNumbers = ref(true);
const hideActionText = ref(false);

// UI Visibility props
const hideHeader = ref(false);
const hideFooter = ref(false);
const hideModeSwitcher = ref(false);
const hideTreeControls = ref(false);
const hideEditControls = ref(false);
const hideSearchButton = ref(false);
const hideCopyButton = ref(false);
const hideDownloadButton = ref(false);
const hideThemeButton = ref(false);

// Sample data sets
const sampleData = {
  simple: {
    name: "John Doe",
    age: 30,
    active: true,
    email: "john@example.com",
  },

  complex: {
    user: {
      id: 12345,
      profile: {
        firstName: "Jane",
        lastName: "Smith",
        avatar: "https://example.com/avatar.jpg",
        preferences: {
          theme: "dark",
          notifications: true,
          language: "en-US",
        },
      },
      permissions: ["read", "write", "admin"],
      metadata: {
        createdAt: "2023-01-15T10:30:00Z",
        lastLogin: "2024-01-15T08:45:00Z",
        loginCount: 127,
      },
    },
    settings: {
      api: {
        endpoint: "https://api.example.com",
        timeout: 5000,
        retries: 3,
      },
      features: {
        analytics: true,
        darkMode: false,
        betaFeatures: ["newUI", "advancedSearch"],
      },
    },
  },

  array: [
    { id: 1, name: "Apple", category: "Fruit", price: 1.2 },
    { id: 2, name: "Banana", category: "Fruit", price: 0.8 },
    { id: 3, name: "Carrot", category: "Vegetable", price: 0.5 },
    { id: 4, name: "Broccoli", category: "Vegetable", price: 1.5 },
  ],

  nested: {
    company: {
      name: "TechCorp",
      departments: {
        engineering: {
          teams: {
            frontend: {
              members: [
                { name: "Alice", role: "Senior Developer", skills: ["Vue", "React", "TypeScript"] },
                { name: "Bob", role: "Junior Developer", skills: ["JavaScript", "CSS", "HTML"] },
              ],
              projects: {
                jsonViewer: {
                  status: "active",
                  priority: "high",
                  deadline: "2024-02-01",
                  tasks: [
                    { id: 1, title: "Create tree view", completed: true },
                    { id: 2, title: "Add edit functionality", completed: false },
                    { id: 3, title: "Implement search", completed: false },
                  ],
                },
              },
            },
            backend: {
              members: [
                { name: "Charlie", role: "Tech Lead", skills: ["Node.js", "Python", "Docker"] },
              ],
              projects: {
                api: {
                  status: "maintenance",
                  priority: "medium",
                  endpoints: {
                    users: "/api/users",
                    auth: "/api/auth",
                    data: "/api/data",
                  },
                },
              },
            },
          },
        },
        design: {
          teams: {
            ux: {
              members: [
                { name: "Diana", role: "UX Designer", skills: ["Figma", "UserResearch", "Prototyping"] },
              ],
            },
          },
        },
      },
    },
  },
};

// Methods
const loadSample = (type: keyof typeof sampleData) => {
  jsonData.value = JSON.parse(JSON.stringify(sampleData[type]));
};

const toggleTheme = () => {
  // This only affects the JsonViewer component theme
};

const handleDataUpdate = (newData: any) => {
  jsonData.value = newData;
};

const handleNodeClick = (node: any) => {
  console.log("Node clicked:", node);
};

const handleEditSave = (data: any) => {
  console.log("Edit saved:", data);
};

const handleEditCancel = () => {
  console.log("Edit cancelled");
};

const handleThemeChange = (theme: "light" | "dark") => {
  isDarkTheme.value = theme === "dark";
};

// Lifecycle
onMounted(() => {
  loadSample("complex");
});
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Roboto', system-ui, sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background-color: #f8fafc;
  transition: all 0.3s ease;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.app-header {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.app-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Main Content */
.app-main {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.demo-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-controls {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}



.demo-controls h3 {
  margin-bottom: 1rem;
  color: #374151;
  font-weight: 600;
}

.sample-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.sample-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  color: #374151;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.sample-btn:hover {
  background: #f3f4f6;
  border-color: #3b82f6;
}

.theme-controls {
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.theme-controls label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
}

.props-controls {
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1rem;
}

.props-controls h4 {
  margin-bottom: 1rem;
  color: #374151;
  font-weight: 600;
  font-size: 1rem;
}

.props-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
}

.props-grid label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.props-grid label:hover {
  background-color: #f3f4f6;
}

.json-viewer-container {
  flex: 1;
  min-height: 600px;
}

/* Info Panel */
.info-panel {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  height: fit-content;
}

.info-panel h3,
.info-panel h4 {
  color: #374151;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  margin-bottom: 2rem;
}

.feature-list li {
  padding: 0.25rem 0;
  color: #4b5563;
  font-size: 0.875rem;
}

.usage-example {
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.usage-example pre {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
  font-size: 0.875rem;
  font-family: 'Fira Code', 'Monaco', monospace;
}

/* Footer */
.app-footer {
  background: #f1f5f9;
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.875rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.github-link,
.npm-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.github-link {
  color: #374151;
  background: #f8fafc;
  border-color: #e2e8f0;
}

.github-link:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.npm-link {
  color: #dc2626;
  background: #fef2f2;
  border-color: #fecaca;
}

.npm-link:hover {
  background: #fee2e2;
  border-color: #fca5a5;
  transform: translateY(-1px);
}

.github-icon,
.npm-icon {
  width: 20px;
  height: 20px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .app-main {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .info-panel {
    order: -1;
  }
}

@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }

  .app-main {
    padding: 1rem;
  }

  .sample-buttons {
    flex-direction: column;
  }

  .sample-btn {
    text-align: center;
  }
}
</style>
