# 🎬 MovieExplorer

A modern, responsive movie browsing application built with **React**, **Tailwind CSS**, and **React Router**, powered by the **TVMaze API**.

---

## 🚀 Features

* **Landing Hero Section**: Eye-catching dynamic homepage with custom gradients.
* **Movie Discovery**: Browses popular TV shows and movies on initial load.
* **Dynamic Search**: Instant, debounced search filtering by movie/show title.
* **Interactive Modal**: View detailed movie metadata (storyline, rating, release year, language, genres) in a polished glassmorphic overlay.
* **Responsive Layout**: Designed for seamless viewports across mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite)
* **Routing**: React Router (`react-router`)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React (`lucide-react`)
* **Data Source**: [TVMaze API](https://www.tvmaze.com/api)

---

## 📂 Project Structure

```text
src/
├── actions/
│   └── Movie.js
├── assets/
│   ├── images/
│   │   ├── Hero_Image.png
│   │   └── logo.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── MovieModal.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
├── Layout/
│   └── RootLayout.jsx
├── pages/
│   ├── Homepage/
│   │   └── Hero.jsx
│   └── MoviePage/
│       └── MoviePage.jsx
├── router/
│   └── Router.jsx
├── index.css
└── main.jsx 
```
---

## ⚙️ Installation & Setup Guide

Follow these steps to run the project locally on your machine:

1. Prerequisites
Ensure you have the following installed:

Node.js (v18.0.0 or higher recommended)

npm or yarn

2. Clone the Repository
```text
git clone https://github.com/fardinfaruk-bd/Movie_Explorer.git
cd movie-explorer
```
3. Install Dependencies
Run the following command to install all required packages (including react-router, lucide-react, and tailwindcss):

Bash
npm install
4. Run Development Server
Start the Vite local development server:

Bash
npm run dev
Open your browser and navigate to the printed local URL (typically http://localhost:5173).

## 🌐 API Endpoints Used

Fetch Default Shows: GET https://api.tvmaze.com/shows

Search Shows: GET https://api.tvmaze.com/search/shows?q=:query

📄 License
This project is licensed under the MIT License.