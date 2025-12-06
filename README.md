## Currency Converter — ALX FE Capstone Project

A simple and functional currency converter built with React, Vite, and Tailwind CSS. It fetches live exchange rates from a public API and lets users convert any amount between two currencies. The goal of this project is to demonstrate core frontend development skills: API integration, state management, UI design, and deployment.

# Features

Fetches real-time exchange rates

Convert an amount from one currency to another

Clean UI for selecting currencies

Swap button for quick switching

Responsive layout built with Tailwind CSS

Error handling for failed network requests

Mobile-friendly interface


# Tech Stack

React (Vite)

Tailwind CSS

Fetch/Axios

ExchangeRate API (or any reliable currency API)

Netlify / Vercel (for deployment)


# Getting Started
1. Clone the Repository
git clone https://github.com/Kamisky1-Design/currency-converter.git

cd currency-converter

2. Install Dependencies
npm install

3. Add Your API Key

Create a .env file:
VITE_EXCHANGE_API_KEY=your_api_key_here

4. Run the App
npm run dev

# Project Structure
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── utils/
 ├── App.jsx
 └── main.jsx

# How It Works

The app loads available currencies from the API

User selects the “from” and “to” currencies

User enters the amount

The app calculates the converted value using stored rates

UI updates instantly

Everything runs on client-side logic. No backend needed.


# Future Improvements

Show historical trends

Save favorite currency pairs

Convert a single amount into multiple currencies

Dark mode

Rate alerts


# Deployment

You can deploy this app easily on:

Netlify

Vercel

GitHub Pages

Each platform works smoothly with Vite.


# Author

Komla Sanussi (Kamisky)
ALX Front-End Development Student