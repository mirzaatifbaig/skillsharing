# 🎓 SkillSharing App

A real-time skill-sharing platform built using vanilla JavaScript and an Express-based backend API — deployed as serverless functions on Vercel.

Users can:
- Set their name
- Post talks with a title and summary
- Comment on existing talks
- Delete talks they created

---

# 👉 **[Try the Live App Here](https://skillsharing-mi5s.vercel.app/)**

---

### 🚀 Features

- 🧠 In-memory data model (fast, simple)
- 📡 Real-time updates with long-polling
- ✨ Minimal frontend in pure JavaScript (no framework)
- 📦 Serverless API via Vercel's Express + Node.js support
- 🔒 RESTful routes with proper status codes and headers

---

### 📁 Project Structure

skillsharing/
├── api/
│ └── server.js # Express API for talks/comments
├── public/
│ └── index.html # Frontend UI (pure JS)
├── vercel.json # Vercel routing config
├── package.json # Dependencies and script config

yaml
Copy
Edit

---

### 🧪 API Routes

| Method | Endpoint                        | Description               |
|--------|----------------------------------|---------------------------|
| GET    | `/talks`                         | Get all talks             |
| PUT    | `/talks/:title`                 | Create/update a talk      |
| DELETE | `/talks/:title`                 | Delete a talk             |
| POST   | `/talks/:title/comments`        | Add a comment to a talk   |

---

### 🛠 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run locally (optional)
vercel dev
⚙️ Tech Stack
Express.js

Vercel Serverless Functions

Vanilla JS DOM Manipulation

HTML5, ETag caching, localStorage

