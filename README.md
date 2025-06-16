
# ✈️ Quote Request App – Full Stack (Angular + NestJS)

This is a full-stack project composed of:

- **Frontend**: Angular + Tailwind CSS
- **Backend**: NestJS API serving mock data

Great for demonstrating form-driven UI/UX and front-end/backend data flow without persistent storage.

---

## 📦 Features

### Frontend

- Responsive layout with Tailwind CSS
- Angular Standalone Components
- Mock data rendering with `*ngFor`
- Clean, modular file structure
- SVG icon support

### Backend

- NestJS mock API
- `GET /quote-request` for sample data
- `POST /quote-request/pilots` to simulate pilot creation
- CORS-enabled for frontend communication
- DTOs and interfaces with strong typing

---

## 🛠️ Tech Stack

- **Frontend**: Angular, Tailwind CSS, TypeScript, PostCSS
- **Backend**: NestJS, TypeScript, class-validator

---

## 🚀 Getting Started

### 1. Clone the Monorepo

```bash
git clone https://github.com/yourusername/quote-request-fullstack.git
cd quote-request-fullstack
```

Directory structure:
```
quote-request-fullstack/
├── frontend/
└── backend/
```

---

### 2. Run the Backend

```bash
cd backend
npm install
npm run start:dev
```

📍 API runs at: `http://localhost:3000`

---

### 3. Run the Frontend

```bash
cd ../frontend
npm install --legacy-peer-deps
ng serve
```

🌐 App runs at: `http://localhost:4200`

---

## 📁 Project Structure

### Frontend (Angular)

```
frontend/
├── src/
│   ├── app/
│   │   ├── quote-request/
│   │   └── step-section/
├── tailwind.config.js
├── postcss.config.js
└── styles.css
```

### Backend (NestJS)

```
backend/
├── src/
│   ├── quote-request/
│   │   ├── controller, service, dto, interfaces, mock data
│   └── main.ts, app.module.ts
```

---

## 📋 API Overview

### ✅ `GET /quote-request`

Returns:
```json
{
  "insured": { "name": "John Doe", "status": "complete" },
  "aircraft": [ { "id": 1, "registration": "N123AB", "model": "787-9 Dreamliner", "status": "complete" } ],
  "pilots": [
    { "id": 1, "name": "Pedro Morais", "status": "pending" },
    { "id": 2, "name": "John Doe", "status": "updated" }
  ]
}
```

### 🆕 `POST /quote-request/pilots`

Send:
```json
{
  "name": "Jane Smith",
  "status": "complete"
}
```

Response:
```json
{
  "message": "Pilot added successfully",
  "pilot": {
    "id": 3,
    "name": "Jane Smith",
    "status": "complete"
  }
}
```

---

## 🐛 Common Issues & Fixes

### Tailwind not working?

- Check `tailwind.config.js`:
```js
content: ["./src/**/*.{html,ts}"]
```

- Ensure `postcss.config.js` is present:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### API CORS issues?

NestJS enables CORS by default. Make sure the frontend is calling the correct `http://localhost:3000` endpoint.

---

## 🧪 Testing

### Frontend

```bash
ng test
```

### Backend (via curl)

```bash
curl http://localhost:3000/quote-request
curl -X POST http://localhost:3000/quote-request/pilots   -H "Content-Type: application/json"   -d '{"name": "New Pilot", "status": "pending"}'
```

---

## 📄 License

MIT — free for personal and commercial use.
