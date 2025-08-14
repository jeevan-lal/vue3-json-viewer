# Vue 3 JSON Viewer

A modern, sleek Vue 3 component for viewing, editing, and manipulating JSON data with two view modes: Tree Mode and Text Mode.]

[Demo Page](https://vue3-json-viewer-seven.vercel.app/)

## ✨ Features

- 🌳 **Tree Mode**: Hierarchical display with expandable/collapsible nodes
- 📝 **Text Mode**: Raw JSON text display with syntax highlighting
- ✏️ **Inline Editing**: Edit values directly in the tree view
- 🔑 **Key Editing**: Rename object keys by double-clicking on them
- ➕ **Add/Remove Nodes**: Add new key-value pairs or remove existing ones
- 🔍 **Search & Filter**: Search across all JSON keys and values
- 📋 **Copy to Clipboard**: Easy copying of JSON content with visual feedback
- 💾 **Download JSON**: Save current JSON to file
- 🎨 **Dark/Light Theme**: Support for both themes with dynamic icons
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⌨️ **Keyboard Navigation**: Full keyboard support
- ♿ **Accessibility**: Screen reader support with proper ARIA labels
- 🎯 **Icon-Only Mode**: Option to hide button text labels for compact interface
- 🎛️ **Customizable UI**: Hide specific buttons, sections, or entire header/footer
- 🚀 **Dual Build System**: Library build for npm + Demo build for preview

## 🚀 Installation

This component is now available on npm as `@ctechhindi/vue3-json-viewer`

[@ctechhindi/vue3-json-viewer](https://www.npmjs.com/package/@ctechhindi/vue3-json-viewer)

```bash
npm install @ctechhindi/vue3-json-viewer
```

Or with yarn:

```bash
yarn add @ctechhindi/vue3-json-viewer
```

## 📖 Usage

### CSS Import (Required)

**Important:** You need to import the CSS file to see the styles. Choose one of these options:

```typescript
// Option 1: Direct CSS import (recommended)
import "@ctechhindi/vue3-json-viewer/dist/index.css";

// Option 2: Using the styles export
import "@ctechhindi/vue3-json-viewer/styles";

// Option 3: Using the css export
import "@ctechhindi/vue3-json-viewer/css";

// Option 4: In your main.ts or main.js
import "@ctechhindi/vue3-json-viewer/dist/index.css";
```

### Basic Usage

```vue
<template>
  <div>
    <JsonViewer
      v-model:data="jsonData"
      :editable="true"
      theme="light"
      default-mode="tree"
      @update:data="handleDataUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import JsonViewer from "@ctechhindi/vue3-json-viewer";

const jsonData = ref({
  name: "John Doe",
  age: 30,
  active: true,
  hobbies: ["reading", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
});

const handleDataUpdate = (newData: any) => {
  console.log("Data updated:", newData);
};
</script>
```

### Advanced Usage

```vue
<template>
  <JsonViewer
    v-model:data="complexData"
    :editable="true"
    :theme="currentTheme"
    default-mode="tree"
    :show-line-numbers="true"
    :max-depth="3"
    :hide-action-text="false"
    @update:data="handleDataUpdate"
    @node-click="handleNodeClick"
    @node-expand="handleNodeExpand"
    @node-collapse="handleNodeCollapse"
    @edit-start="handleEditStart"
    @edit-save="handleEditSave"
    @edit-cancel="handleEditCancel"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import JsonViewer from "@ctechhindi/vue3-json-viewer";

const complexData = ref({
  // Your complex JSON data
});

const currentTheme = ref<"light" | "dark">("light");

// Event handlers
const handleDataUpdate = (newData: any) => {
  console.log("Data updated:", newData);
};

const handleNodeClick = (node: any) => {
  console.log("Node clicked:", node);
};

const handleNodeExpand = (node: any) => {
  console.log("Node expanded:", node);
};

const handleNodeCollapse = (node: any) => {
  console.log("Node collapsed:", node);
};

const handleEditStart = () => {
  console.log("Edit mode started");
};

const handleEditSave = (data: any) => {
  console.log("Changes saved:", data);
};

const handleEditCancel = () => {
  console.log("Edit cancelled");
};
</script>
```

### Customizing UI Elements

You can hide specific UI elements using the visibility props:

```vue
<template>
  <JsonViewer
    v-model:data="jsonData"
    :hide-header="false"
    :hide-footer="true"
    :hide-mode-switcher="false"
    :hide-tree-controls="false"
    :hide-edit-controls="false"
    :hide-search-button="true"
    :hide-copy-button="false"
    :hide-download-button="true"
    :hide-theme-button="false"
  />
</template>
```

### Minimal Configuration

For a minimal, read-only viewer:

```vue
<template>
  <JsonViewer
    v-model:data="jsonData"
    :editable="false"
    :hide-header="false"
    :hide-footer="true"
    :hide-edit-controls="true"
    :hide-search-button="true"
    :hide-copy-button="false"
    :hide-download-button="true"
    :hide-theme-button="false"
  />
</template>
```

## 📋 Props

| Prop              | Type                | Default   | Description                          |
| ----------------- | ------------------- | --------- | ------------------------------------ |
| `data`            | `any`               | `{}`      | JSON data to display                 |
| `editable`        | `boolean`           | `true`    | Enable editing capabilities          |
| `theme`           | `'light' \| 'dark'` | `'light'` | Theme preference                     |
| `defaultMode`     | `'tree' \| 'text'`  | `'tree'`  | Default view mode                    |
| `showLineNumbers` | `boolean`           | `false`   | Show line numbers in text mode       |
| `maxDepth`        | `number`            | `3`       | Maximum depth to expand by default   |
| `hideActionText`  | `boolean`           | `false`   | Hide button text labels (icons only) |

### UI Visibility Props

| Prop                 | Type      | Default | Description                              |
| -------------------- | --------- | ------- | ---------------------------------------- |
| `hideHeader`         | `boolean` | `false` | Hide the entire menu bar (header)        |
| `hideFooter`         | `boolean` | `false` | Hide the entire footer                   |
| `hideModeSwitcher`   | `boolean` | `false` | Hide the Tree/Text mode switcher         |
| `hideTreeControls`   | `boolean` | `false` | Hide the Expand All/Collapse All buttons |
| `hideEditControls`   | `boolean` | `false` | Hide the Edit/Save/Cancel buttons        |
| `hideSearchButton`   | `boolean` | `false` | Hide the Search button                   |
| `hideCopyButton`     | `boolean` | `false` | Hide the Copy button                     |
| `hideDownloadButton` | `boolean` | `false` | Hide the Download button                 |
| `hideThemeButton`    | `boolean` | `false` | Hide the Theme toggle button             |

## 🎭 Events

| Event           | Payload                                                     | Description          |
| --------------- | ----------------------------------------------------------- | -------------------- |
| `update:data`   | `newData: any`                                              | Data changed event   |
| `node-click`    | `node: JsonNode`                                            | Node clicked event   |
| `node-expand`   | `node: JsonNode`                                            | Node expanded event  |
| `node-collapse` | `node: JsonNode`                                            | Node collapsed event |
| `edit-start`    | -                                                           | Edit mode started    |
| `edit-save`     | `data: any`                                                 | Changes saved        |
| `edit-cancel`   | -                                                           | Edit mode cancelled  |
| `key-change`    | `event: { node: JsonNode, oldKey: string, newKey: string }` | Key name changed     |
| `theme-change`  | `theme: 'light' \| 'dark'`                                  | Theme changed        |

## 🏗️ Data Structure

```typescript
interface JsonNode {
  key: string;
  value: any;
  type: "string" | "number" | "boolean" | "object" | "array" | "null";
  path: string[];
  level: number;
  expanded?: boolean;
  children?: JsonNode[];
}
```

## 🎨 Styling & Theming

The component uses **component-scoped CSS custom properties** for theming, ensuring that theme changes only affect the JsonViewer component and do not interfere with your parent application's styling.

### Component-Only Theming

The theme is completely self-contained within the component:

**Dynamic Theme Icons**: The theme button automatically shows:
- 🌙 **Moon icon** when in light theme (click to switch to dark)
- ☀️ **Sun icon** when in dark theme (click to switch to light)

```vue
<template>
  <JsonViewer 
    :theme="'dark'"  <!-- Theme only affects this component -->
    v-model:data="jsonData" 
  />
</template>
```

### CSS Custom Properties

You can customize the appearance by overriding these CSS variables within the component scope:

```css
.json-viewer {
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
```

### Using in Other Projects

When you use this component in other projects, the theme will **only affect the component itself**:

```vue
<template>
  <div>
    <!-- This header won't be affected by theme changes -->
    <header class="my-app-header">
      <h1>My Application</h1>
    </header>
    
    <!-- Only this component will change theme -->
    <JsonViewer 
      :theme="componentTheme"
      v-model:data="jsonData"
      @theme-change="handleThemeChange"
    />
    
    <!-- This footer also won't be affected -->
    <footer class="my-app-footer">
      <p>My Application Footer</p>
    </footer>
  </div>
</template>

<script setup>
const componentTheme = ref('light');

const handleThemeChange = (newTheme) => {
  componentTheme.value = newTheme;
  // Theme only affects the JsonViewer component
  // Your app's global styling remains unchanged
};
</script>
```

**Benefits:**
- ✅ **No Global Side Effects** - Theme changes only affect the component
- ✅ **Better Encapsulation** - Component manages its own appearance
- ✅ **Easier Integration** - No conflicts with parent project's theme system
- ✅ **Reusable** - Can be used in any project without affecting global styles

## 🛠️ Development

### Setup

```bash
# Clone the repository
git clone https://github.com/jeevan-lal/vue3-json-viewer.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build Options

```bash
# Build the library component (for npm publishing)
npm run build

# Build the demo app to ./preview folder
npm run build:demo

# Preview the built demo app
npm run preview
```

### Build Outputs

- **`npm run build`** → Creates `dist/` folder with library files:

  - `json-viewer.umd.js` - UMD bundle
  - `json-viewer.mjs` - ES module bundle
  - `style.css` - Component styles

- **`npm run build:demo`** → Creates `preview/` folder with demo app:
  - `index.html` - Demo page
  - `assets/` - Bundled CSS and JavaScript

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Lint

```bash
# Run ESLint
npm run lint

# Type check
npm run type-check
```

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

## 📱 Browser Support

- Chrome ≥ 87
- Firefox ≥ 78
- Safari ≥ 14
- Edge ≥ 88

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [Heroicons](https://heroicons.com/)
- Font families: [Inter](https://rsms.me/inter/) and [Fira Code](https://github.com/tonsky/FiraCode)
- Built with [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/)

## 🔧 Troubleshooting

### Theme Not Working?

**Problem**: Theme changes not visible in your project

**Solution**: The component now uses component-only theming. Make sure you're passing the theme prop correctly:

```vue
<!-- ✅ Correct - Theme will work -->
<JsonViewer :theme="'dark'" v-model:data="jsonData" />

<!-- ❌ Incorrect - No theme prop -->
<JsonViewer v-model:data="jsonData" />
```

### Theme Affecting Other Elements?

**Problem**: Theme changes affecting your entire application

**Solution**: This shouldn't happen anymore! The component is now completely self-contained. If you're still experiencing issues, make sure you're using the latest version.

## 📞 Support

If you have any questions or need help, please:

1. Check the [documentation](#-usage)
2. Search [existing issues](https://github.com/jeevan-lal/vue3-json-viewer/issues)
3. Create a [new issue](https://github.com/jeevan-lal/vue3-json-viewer/issues/new)

---

Made with ❤️ and Vue 3
