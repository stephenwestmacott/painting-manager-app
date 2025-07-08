# Painting Manager Web App

A full-stack CRUD application for managing paintings in an art gallery. Built with Node.js, Express, MongoDB, and vanilla JavaScript.

## Features
- View a list of paintings
- Edit painting details (title, artist, description)
- Update records in MongoDB via RESTful API
- Simple, responsive user interface

## Tech Stack
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Frontend:** HTML, CSS, JavaScript
- **Other:** CORS, dotenv

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or remote)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/painting-manager.git
   cd painting-manager
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   ```bash
   touch .env
   ```
   Add the following to `.env`:
   ```
   DATABASE_URL=mongodb://localhost:27017/paintings
   ```

4. **Start MongoDB locally**
   ```bash
   mongod
   ```

5. **Start the Node server**
   ```bash
   node server.js
   ```

6. **Open the frontend**
   Open `public/index.html` in your browser directly, or use a local server like Live Server in VSCode.

## Folder Structure
```
├── models/
│   └── painting.js
├── routes/
│   └── paintings.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server.js
└── .env
```

## Author
Stephen Westmacott  
[LinkedIn](https://linkedin.com/in/stephenwestmacott)  
[GitHub](https://github.com/stephenwestmacott)
