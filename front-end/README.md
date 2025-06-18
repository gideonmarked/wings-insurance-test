
# 🚀 Quote Request UI

A responsive Angular standalone component UI for collecting quote request information, styled with Tailwind CSS.

## 📦 Features

- Responsive layout (mobile & desktop)
- Modular and reusable components (`StepSectionComponent`)
- Clean TailwindCSS styling
- Mock data-driven rendering using `*ngFor`
- SVG-based icon support

## 🛠️ Tech Stack

- Angular (Standalone Components)
- Tailwind CSS
- TypeScript
- PostCSS

## 📁 Project Structure (Simplified)

```
src/
├── app/
│   ├── quote-request/
│   │   ├── quote-request.component.ts
│   │   ├── quote-request.component.html
│   │   └── quote-request.component.css
│   └── step-section/
│       ├── step-section.component.ts
│       ├── step-section.component.html
│       └── step-section.component.css
├── main.ts
├── styles.css
├── tailwind.config.js
└── postcss.config.js
```

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/quote-request-ui.git
cd quote-request-ui
```

### 2. Install Dependencies

Make sure you’re using **Node.js v18+**.

```bash
npm install --legacy-peer-deps
```

> If you encounter issues, try:
> ```bash
> npm install --force
> ```

### 3. Start the Development Server

```bash
ng serve
```

Then open your browser at: http://localhost:4200

## 🧪 Testing

```bash
ng test
```

## 🧱 Building for Production

```bash
ng build --configuration production
```

## 🐛 Common Issues

### Tailwind classes not applying?

- Ensure `tailwind.config.js` has:
```js
content: ["./src/**/*.{html,ts}"]
```

- And `postcss.config.js`:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Icons not showing?

Ensure SVGs are correctly embedded or loaded, or use libraries like Heroicons or FontAwesome.

## 📄 License

MIT – © Your Name or Company
