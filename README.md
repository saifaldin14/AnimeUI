# AnimeUI

AnimeUI is a unique frontend component library specifically made for React applications. Designed with a bold manga-inspired aesthetic, AnimeUI brings the charm and dynamic energy of anime into your applications through inked panel surfaces, playful screentone textures, and expressive decorative accents. Whether you're building a portfolio, a gaming platform, or any application, AnimeUI provides the perfect set of tools to infuse your project with a pretty dang cool anime vibe.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Theme System](#theme-system)
- [Components](#components)
  - [Data Display](#data-display)
  - [Disclosure](#disclosure)
  - [Display](#display)
  - [Feedback](#feedback)
  - [Form](#form)
  - [Layout](#layout)
  - [Navigation](#navigation)
  - [Overlay](#overlay)
  - [Typography](#typography)
- [Key Features](#key-features)
- [Development](#development)

## Installation

Install AnimeUI via npm:

```bash
npm install anime-ui
```

Or with yarn:

```bash
yarn add anime-ui
```

### Peer Dependencies

AnimeUI requires the following peer dependencies:

```bash
npm install react react-dom react-icons
```

### TailwindCSS Setup

AnimeUI uses TailwindCSS for styling. Make sure you have TailwindCSS configured in your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then add AnimeUI to your `tailwind.config.js` content paths:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/anime-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Quick Start

```tsx
import { Button, Input, AnimeThemeProvider } from "anime-ui";

function App() {
  return (
    <AnimeThemeProvider>
      <div>
        <Button text="Click me!" onClick={() => alert("Kawaii!")} />
        <Input
          value=""
          onChange={(val) => console.log(val)}
          placeholder="Type something..."
        />
      </div>
    </AnimeThemeProvider>
  );
}

export default App;
```

## Theme System

AnimeUI includes a built-in theme system with 5 pre-built themes. Wrap your application in `AnimeThemeProvider` and use the `useAnimeTheme` hook to switch themes at runtime.

```tsx
import { AnimeThemeProvider, useAnimeTheme } from "anime-ui";

// Available themes: default, sakura, ocean, neon, sunset
function ThemeSwitcher() {
  const { themeName, setTheme } = useAnimeTheme();

  return (
    <select value={themeName} onChange={(e) => setTheme(e.target.value)}>
      <option value="default">Default</option>
      <option value="sakura">Sakura</option>
      <option value="ocean">Ocean</option>
      <option value="neon">Neon</option>
      <option value="sunset">Sunset</option>
    </select>
  );
}

function App() {
  return (
    <AnimeThemeProvider>
      <ThemeSwitcher />
      {/* Your app content */}
    </AnimeThemeProvider>
  );
}
```

## Components

### Data Display

#### Avatar
Displays user avatars with gradient borders, status indicators (online/offline/busy), fallback initials, and optional image. Supports multiple sizes (xs–xl) and shapes (circle/square).

```tsx
<Avatar src="https://example.com/photo.jpg" name="Jane Doe" size="lg" status="online" />
```

#### Badge
Compact labels with variants (solid, outline, glow). Supports animation and optional dot indicator for status displays.

```tsx
<Badge variant="glow" animated dot>New</Badge>
```

#### Tag
Removable tags/chips for categorization. Includes optional close button with smooth interactions.

```tsx
<Tag onRemove={() => console.log("removed")}>React</Tag>
```

#### Tooltip
Information popup shown on hover/focus. Uses a manga-panel surface with inked borders, screentone texture, and an animated arrow. Supports 4 positions (top, bottom, left, right).

```tsx
<Tooltip content="Hello!" position="top">
  <span>Hover me</span>
</Tooltip>
```

### Disclosure

#### Accordion
Collapsible sections with smooth expand/collapse animations. Displays each title as a manga-style action bar with ink borders and comic-panel content below. One section open at a time.

![Accordion](https://github.com/user-attachments/assets/11b7ba07-c6b6-4acd-b55b-dd65c961b708)

```tsx
<Accordion
  items={[
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
  ]}
/>
```

#### Tabs
Tabbed content switcher with manga-chip tab buttons, panel-framed content, and decorative floating elements (stars, sparkles, hearts).

![Tabs](https://github.com/user-attachments/assets/e0d7c3d5-5760-4950-8f42-2bda43c2e6b7)

```tsx
<Tabs
  tabs={[
    { label: "One", content: <p>Tab One</p> },
    { label: "Two", content: <p>Tab Two</p> },
  ]}
/>
```

### Display

#### List
Stylized list with clickable items, optional icons, and anime decorations. Uses "Press Start 2P" font by default for a retro feel.

![List](https://github.com/user-attachments/assets/49345ba7-d586-4fb2-9d0c-b1edd91f3a55)

```tsx
<List
  items={[
    { text: "Home", icon: <FaHome />, onClick: () => {} },
    { text: "Profile", icon: <FaUser />, onClick: () => {} },
  ]}
/>
```

#### Table
Data table with striped/hoverable rows, gradient header, and anime decorations. Responsive design for displaying structured data.

![Table](https://github.com/user-attachments/assets/553dea8c-9403-4f85-a613-fae15513b051)

```tsx
<Table
  headers={["Name", "Age", "Email"]}
  data={[
    { Name: "Alice", Age: 25, Email: "alice@example.com" },
    { Name: "Bob", Age: 30, Email: "bob@example.com" },
  ]}
  striped
  hoverable
/>
```

### Feedback

#### Alert
Alert messages with 4 types (success, error, warning, info). Rendered on a manga-paper surface with ink borders, status accents, optional close button, and custom color support.

![Alert](https://github.com/user-attachments/assets/bdf8886c-4ea3-4b1f-a966-a9e2e4710fd2)

```tsx
<Alert message="Hey this is a warning!" type="warning" onClose={() => {}} />
```

#### CircularProgress
Circular progress indicator with gradient stroke and optional percentage display. SVG-based with smooth animations.

![CircularProgress](https://github.com/user-attachments/assets/face9aba-b051-463c-a179-5dc8a1f82a5e)

```tsx
<CircularProgress progress={57} size={150} showPercentage />
```

#### ProgressBar
Linear progress bar with gradient fill. Shows percentage text when progress is above 5%.

![ProgressBar](https://github.com/user-attachments/assets/aa97f184-3cd3-4898-9014-836ce3b43303)

```tsx
<ProgressBar progress={57} height={20} showPercentage />
```

#### Skeleton
Loading placeholder with a kawaii anime face. Displays animated skeleton with configurable text line count.

![Skeleton](https://github.com/user-attachments/assets/376c518c-f0ed-4dd7-bdea-2cecda0cd21d)

```tsx
<Skeleton lines={3} />
```

#### Toast
Temporary notification shown at bottom-right. Uses a manga-panel surface with status accents, auto-dismisses after a duration, and supports 4 types with icons.

```tsx
<Toast message="Success!" type="success" onClose={() => {}} duration={3000} />
```

### Form

#### Button
Pressable manga-panel button with thick ink borders, offset comic shadow, and animated hover/press states.

![Button](https://github.com/user-attachments/assets/5b62359e-57a5-4608-8e72-7277e044b4cf)

```tsx
<Button text="Click me!" onClick={() => {}} />
```

#### Checkbox
Custom checkbox with a sharp manga-style frame, paper surface, checked-state accent fill, optional label, and animated decorations.

![Checkbox](https://github.com/user-attachments/assets/c7b5051d-06ef-4dba-9a43-ddeaea4bf210)

```tsx
<Checkbox checked={true} onChange={(checked) => {}} label="Default Checkbox" />
```

#### Editable
Click-to-edit text field. Shows expressive anime text in display mode, switches to an input on click, and saves on blur or Enter key.

```tsx
<Editable value="Click to edit" onChange={(val) => {}} />
```

#### Input
Text input on a manga-paper surface with ink borders, optional error state with message, and animated corner decorations.

![Input](https://github.com/user-attachments/assets/ac3dbc20-fba6-414a-9ab8-1b79fe9fe41f)

```tsx
<Input value="" onChange={(val) => {}} placeholder="Enter text" />
```

#### Radio
Radio button group with manga-paper options and clear selected-state accents. Only one option selectable at a time. Supports disabled options.

![Radio](https://github.com/user-attachments/assets/227e6df5-fa0a-401e-bda4-399aa9aefe3e)

```tsx
<Radio
  name="options"
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ]}
  selectedValue="1"
  onChange={(val) => {}}
/>
```

#### Select
Dropdown select component with a manga-paper trigger and matching comic-panel menu. Includes floating anime decorations.

![Select](https://github.com/user-attachments/assets/4f2785e3-21d0-467e-bab5-c3c3d8acd7b3)

```tsx
<Select
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ]}
  value=""
  onChange={(val) => {}}
  placeholder="Select an option"
/>
```

#### Slider
Range slider with colorful track fill and animated floating decorations (sparkle and heart).

![Slider](https://github.com/user-attachments/assets/e0a44f73-d075-4183-bea9-e496088d73cb)

```tsx
<Slider value={50} onChange={(val) => {}} min={0} max={100} />
```

#### SpeechBubbleButton
Button styled as a speech bubble with optional tail (pointer) on left, right, or none.

![SpeechBubbleButton](https://github.com/user-attachments/assets/c10e0240-c07b-4edf-9019-a18987e68f15)

```tsx
<SpeechBubbleButton text="From the left" tailPosition="left" />
```

### Layout

#### Card
Container component with manga-panel and manga-paper variants plus configurable `default`, `glass`, `neon`, and `flat` treatments. Supports title, footer, and optional decorations.

```tsx
<Card title="My Card" variant="glass" hoverable decorations>
  <p>Card content goes here</p>
</Card>
```

#### Container
Responsive layout wrapper with max-width constraint, padding, optional background, and pattern overlays (dots or grid).

```tsx
<Container maxWidth="lg" padded background pattern="dots">
  <p>Wrapped content</p>
</Container>
```

#### Divider
Horizontal or vertical line separator with variants (solid, dashed, sparkle) and optional decorative icons (star, heart, diamond).

```tsx
<Divider variant="sparkle" decoration="star" />
```

#### Grid
Responsive grid layout with configurable columns and gap. Auto-responsive from mobile to desktop.

```tsx
<Grid columns={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Navigation

#### Breadcrumb
Breadcrumb navigation showing page hierarchy. Supports links and current page indicator with gradient text. Uses a star separator by default.

```tsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Details", active: true },
  ]}
/>
```

#### Navbar
Top navigation bar with brand name, menu items, action buttons, and mobile responsive hamburger menu. Uses manga panel/chip styling and supports fixed positioning with backdrop blur.

```tsx
<Navbar
  brand="AnimeUI"
  items={[
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/about" },
  ]}
  actions={<Button text="Sign Up" />}
/>
```

#### Pagination
Page navigation with prev/next buttons and page numbers. Shows ellipsis for large page ranges and manages disabled states intelligently.

```tsx
<Pagination currentPage={1} totalPages={10} onPageChange={(page) => {}} />
```

### Overlay

#### AlertDialog
Confirmation dialog with title, message, and two action buttons (Cancel, Confirm). Features a cute anime character at the top.

```tsx
<AlertDialog
  title="Confirm"
  message="Are you sure?"
  show={true}
  onConfirm={() => {}}
  onCancel={() => {}}
/>
```

#### Drawer
Side panel that slides in from the right. Dismissible with close button, backdrop click, or Escape key.

![Drawer](https://github.com/user-attachments/assets/82ff4a85-7999-4501-abd6-9edd9039813d)

```tsx
<Drawer isOpen={true} onClose={() => {}}>
  <p>Drawer content</p>
</Drawer>
```

#### Menu
Dropdown menu component with gradient background and menu items. Each item supports icon and click handler.

```tsx
<Menu
  items={[
    { label: "Edit", onClick: () => {}, icon: <FaEdit /> },
    { label: "Delete", onClick: () => {}, icon: <FaTrash /> },
  ]}
/>
```

#### Modal
Centered modal dialog with a dark overlay and manga-panel framing. Includes close button, keyboard Escape support, and floating anime decorations.

![Modal](https://github.com/user-attachments/assets/aace128d-dca3-4710-bb51-23bf0309d73c)

```tsx
<Modal isOpen={true} onClose={() => {}}>
  <p>Modal content</p>
</Modal>
```

#### Popover
Flexible popover component triggered by click or hover. Renders as a manga panel above the trigger with a chevron pointer and floating decorations.

```tsx
<Popover content="Popover content" trigger="click">
  <button>Click me</button>
</Popover>
```

### Typography

#### Heading
Semantic heading element (h1–h6) with optional gradient text, glow, and sparkle effects. Responsive sizing by level.

```tsx
<Heading level={1} gradient glow sparkle>Welcome to AnimeUI</Heading>
```

#### Text
Flexible text component that can render as `p`, `span`, or `div`. Supports gradient, glow, and custom colors with configurable size and weight.

```tsx
<Text size="lg" weight="bold" gradient>Styled anime text</Text>
```

## Key Features

### Anime-Inspired Aesthetics
- **Manga Panel Surfaces** — Inked borders, offset shadows, and comic-panel framing give core primitives a punchy anime feel
- **Screentone & Sparkles** — Halftone-like paper textures, stars, hearts, and sparkles add playful motion and visual depth
- **Custom Fonts** — Anime-inspired fonts like "Press Start 2P" to enhance the thematic consistency across your application

### Customization & Flexibility
- **Color Schemes** — Easily customize panel colors (`fromColor`/`toColor`), text colors, and other stylistic elements to match your palette
- **Size Adjustments** — Modify component sizes to fit various design requirements without compromising the anime aesthetic
- **Animation Control** — Toggle animations on or off and adjust their intensity to suit the desired user experience
- **Accessibility** — Components are built with accessibility in mind, ensuring they are usable and navigable for all users

### Seamless Integration with TailwindCSS
- **Utility-First Approach** — AnimeUI leverages TailwindCSS utility classes, allowing for rapid and efficient styling
- **Responsive Design** — All components are fully responsive, ensuring a consistent look and feel across devices of all sizes
- **Performance Optimized** — TailwindCSS's optimized build process ensures that AnimeUI components are lightweight and performant

### Storybook Documentation
- **Interactive Demos** — Each component is accompanied by comprehensive Storybook stories, showcasing various states and customization options
- **Ease of Use** — Developers can explore and experiment with components in isolation, facilitating faster development and prototyping

## Development

### Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Run Storybook
npm run storybook

# Build the library
npm run build

# Build Storybook static site
npm run build-storybook
```

### Project Structure

```
lib/
├── DataDisplay/      # Avatar, Badge, Tag, Tooltip
├── Disclosure/       # Accordion, Tabs
├── Display/          # List, Table
├── Feedback/         # Alert, CircularProgress, ProgressBar, Skeleton, Toast
├── Form/             # Button, Checkbox, Editable, Input, Radio, Select, Slider, SpeechBubbleButton
├── Layout/           # Card, Container, Divider, Grid
├── Navigation/       # Breadcrumb, Navbar, Pagination
├── Overlay/          # AlertDialog, Drawer, Menu, Modal, Popover
├── Theme/            # AnimeThemeProvider, design tokens
├── Typography/       # Heading, Text
├── shared/           # Decorations, animations, and manga surface utilities
├── main.ts           # Library entry point
└── tailwind.css      # Styling
```

## License

See [LICENSE](LICENSE) for details.
