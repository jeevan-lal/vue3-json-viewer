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
          </div>
        </div>

        <div class="json-viewer-container">
          <JsonViewer v-model:data="jsonData" :editable="true" :theme="isDarkTheme ? 'dark' : 'light'" default-mode="tree" :max-depth="2" @update:data="handleDataUpdate" @node-click="handleNodeClick" @edit-save="handleEditSave" @edit-cancel="handleEditCancel" @theme-change="handleThemeChange" />
        </div>
      </div>

      <div class="info-panel">
        <h3>Component Features</h3>
        <ul class="feature-list">
          <li>✅ Tree Mode with expandable/collapsible nodes</li>
          <li>✅ Text Mode with syntax highlighting</li>
          <li>✅ Inline editing capabilities</li>
          <li>✅ Add/Remove nodes and properties</li>
          <li>✅ Search functionality</li>
          <li>✅ Copy to clipboard</li>
          <li>✅ Download JSON file</li>
          <li>✅ Light/Dark theme support</li>
          <li>✅ Responsive design</li>
          <li>✅ Keyboard navigation</li>
        </ul>

        <div class="usage-example">
          <h4>Usage Example</h4>
          <pre><code>&lt;JsonViewer
  v-model:data="jsonData"
  :editable="true"
  theme="dark"
  default-mode="tree"
  @update:data="handleDataUpdate"
/&gt;</code></pre>
        </div>
      </div>
    </main>

    <footer class="app-footer">
      <p>Vue 3 JSON Viewer Component - Built with Composition API and TypeScript</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import JsonViewer from "./components/JsonViewer.vue";

// Reactive state
const jsonData = ref({});
const isDarkTheme = ref(false);

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
  document.body.classList.toggle("dark-theme", isDarkTheme.value);
};

const handleDataUpdate = (newData: any) => {
  console.log("Data updated:", newData);
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
  document.body.classList.toggle("dark-theme", isDarkTheme.value);
};

// Lifecycle
onMounted(() => {
  loadSample("complex");

  // Set initial theme
  if (isDarkTheme.value) {
    document.body.classList.add("dark-theme");
  }
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

body.dark-theme {
  color: #f9fafb;
  background-color: #111827;
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

body.dark-theme .demo-controls {
  background: #1f2937;
  border-color: #374151;
}

.demo-controls h3 {
  margin-bottom: 1rem;
  color: #374151;
  font-weight: 600;
}

body.dark-theme .demo-controls h3 {
  color: #f9fafb;
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

body.dark-theme .sample-btn {
  background: #374151;
  color: #f9fafb;
  border-color: #4b5563;
}

body.dark-theme .sample-btn:hover {
  background: #4b5563;
  border-color: #60a5fa;
}

.theme-controls {
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

body.dark-theme .theme-controls {
  border-color: #4b5563;
}

.theme-controls label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
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

body.dark-theme .info-panel {
  background: #1f2937;
  border-color: #374151;
}

.info-panel h3,
.info-panel h4 {
  color: #374151;
  font-weight: 600;
  margin-bottom: 1rem;
}

body.dark-theme .info-panel h3,
body.dark-theme .info-panel h4 {
  color: #f9fafb;
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

body.dark-theme .feature-list li {
  color: #9ca3af;
}

.usage-example {
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

body.dark-theme .usage-example {
  border-color: #4b5563;
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

body.dark-theme .usage-example pre {
  background: #111827;
  border-color: #374151;
  color: #f9fafb;
}

/* Footer */
.app-footer {
  background: #f1f5f9;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.875rem;
}

body.dark-theme .app-footer {
  background: #0f172a;
  border-color: #1e293b;
  color: #94a3b8;
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

/* Smooth transitions for theme switching */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
</style>
