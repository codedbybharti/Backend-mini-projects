# 🚀 AlgoCode Backend

AlgoCode Backend is a **RESTful backend application** for a coding-platform–like system (similar to LeetCode / CodeChef).  
It allows users to **create, store, and retrieve coding problems** with difficulty levels and test cases using a clean, scalable backend architecture.

This project is currently **under active development**.

---

## 📌 Key Features

- ➕ Create coding problems
- 📚 Fetch all problems
- 🔍 Fetch a problem by ID
- 🎯 Difficulty levels: `easy`, `medium`, `hard`
- 🧪 Test case support
- 🧹 Markdown sanitization for descriptions
- 🏗️ Controller → Service → Repository architecture
- 🌐 MongoDB Atlas integration
- ⚙️ ES Modules (`import / export`) based setup

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| Backend | Node.js, Express.js |
| Database | MongoDB (Atlas) |
| ODM | Mongoose |
| Environment | dotenv |
| Markdown | Turndown + Sanitizer |
| Architecture | MVC + Service–Repository |

---


## 🧠 Architecture Overview
Client (Postman / Frontend)
↓
Controller (HTTP handling)
↓
Service (Business logic)
↓
Repository (Database queries)
↓
MongoDB
### Why this architecture?
- ✅ Separation of concerns
- ✅ Easy to test
- ✅ Scalable
- ✅ Industry-standard

---

## ⚙️ Environment Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com//AlgoCode-Backend.git](https://github.com/codedbybharti/Backend-mini-projects.git
cd AlgoCode-Backend
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Create .env file
```bash
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/algocode?retryWrites=true&w=majority
```
▶️ Running the Server
```bash
npm run dev
```




