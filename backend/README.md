
# ✈️ Quote Request API (NestJS Backend)

This is a lightweight **NestJS backend** that provides mock data for a front-end quote request form. It simulates data for insured individuals, aircraft, and pilot lists. This mock API is useful for testing front-end integration and data modeling.

---

## 📦 Features

- `GET /quote-request`: Returns mock data
  - Named Insured
  - Aircraft List
  - Pilots List
- `POST /quote-request/pilots`: Adds a new pilot and returns confirmation
- CORS enabled for frontend integration (e.g., Angular app)
- TypeScript interfaces and DTOs for strong typing
- Fully structured according to NestJS standards
- No database or authentication required

---

## 🛠 Technologies

- [NestJS](https://nestjs.com/)
- TypeScript
- DTO & Class Validation (`class-validator`)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/quote-request-api.git
cd quote-request-api/backend
```

> Or if you're starting from scratch, just create a folder named `backend` and paste in the provided code.

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start the Development Server

```bash
npm run start:dev
```

Server will run on:  
**`http://localhost:3000`**

---

## 📋 API Endpoints

### ✅ `GET /quote-request`

Returns structured mock data:

```json
{
  "insured": {
    "name": "John Doe",
    "status": "complete"
  },
  "aircraft": [
    {
      "id": 1,
      "registration": "N123AB",
      "model": "787-9 Dreamliner",
      "status": "complete"
    }
  ],
  "pilots": [
    {
      "id": 1,
      "name": "Pedro Morais",
      "status": "pending"
    },
    {
      "id": 2,
      "name": "John Doe",
      "status": "updated"
    }
  ]
}
```

---

### 🆕 `POST /quote-request/pilots`

Adds a new pilot.

#### Request Body:

```json
{
  "name": "Jane Smith",
  "status": "complete"
}
```

#### Response:

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

## 🧪 Example with `curl`

```bash
curl http://localhost:3000/quote-request
```

```bash
curl -X POST http://localhost:3000/quote-request/pilots \
  -H "Content-Type: application/json" \
  -d '{"name": "New Pilot", "status": "pending"}'
```

---

## 📁 Folder Structure

```
backend/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   └── quote-request/
│       ├── quote-request.module.ts
│       ├── quote-request.controller.ts
│       ├── quote-request.service.ts
│       ├── dto/
│       │   └── create-pilot.dto.ts
│       ├── interfaces/
│       │   ├── aircraft.interface.ts
│       │   ├── insured.interface.ts
│       │   └── pilot.interface.ts
│       └── mock/
│           └── quote-request.mock.ts
├── package.json
└── tsconfig.json
```

---

## 📄 License

MIT — free for personal and commercial use.

---

## ✨ Author

Built by [Your Name] — [LinkedIn](https://linkedin.com/in/yourname) • [GitHub](https://github.com/yourusername)
