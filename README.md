Chat-Based Layout Agent

An AI-inspired chat-based layout editing application that transforms design JSON layouts using natural language instructions.

This project demonstrates:

Chat interface
Layout reasoning
JSON transformation
Multi-step interaction handling
Frontend + Backend integration

The system updates layout JSON dynamically based on user instructions.

Features
Chat-Based Editing

Users can edit layouts using natural language instructions such as:

Convert this design to 9:16
Move headline to top
Make headline smaller
Move offer badge higher
Keep product large
Tech Stack
Layer	Technology
Frontend	React + Vite
Backend	Node.js + Express
Styling	CSS
State Management	React Hooks
JSON Handling	JavaScript
Project Structure
layout-agent/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.jsx
│   │   │   ├── JsonViewer.jsx
│   │   │   └── LayoutPreview.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── index.js
│   ├── layoutEngine.js
│   ├── sampleLayout.json
│   └── package.json
│
└── README.md
How It Works

The application contains:

Frontend
Chat interface
Layout preview
JSON viewer
Backend
Express server
Layout transformation engine
Rule-based instruction parser
Layout Transformation Logic

The backend detects user intent and updates the layout JSON.

Examples:

Convert to 9:16
layout.canvas.width = 1080;
layout.canvas.height = 1920;
Move headline to top
headline.y = 40;
Make headline smaller
headline.fontSize -= 10;
Installation
Prerequisites

Install:

Node.js
npm
Git
Clone Repository
git clone https://github.com/rakhi90-008/Chat-Based-Layout-Agent.git
Backend Setup
cd server
npm install
npm start

Backend runs on:

http://localhost:5000
Frontend Setup

Open another terminal:

cd client
npm install
npm run dev

Frontend runs on:

http://localhost:5173
Example Instructions

Try these commands in chat:

Move headline to top
Make headline smaller
Convert this design to 9:16
Move offer badge higher
Keep product large
API Endpoints
GET /layout

Returns current layout JSON.

POST /chat

Updates layout using user instruction.

Request
{
  "message": "Move headline to top"
}
Response
{
  "updatedLayout": {}
}
Sample Layout JSON
{
  "canvas": {
    "width": 1080,
    "height": 1080
  },
  "layers": [
    {
      "id": "headline",
      "role": "headline",
      "x": 100,
      "y": 120
    }
  ]
}
