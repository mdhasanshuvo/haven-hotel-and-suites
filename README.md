
# 🏨 Haven Hotel & Suites  

Welcome to the **Haven Hotel & Suites** project! This is a **MERN Stack** (MongoDB, Express.js, React.js, Node.js) based **responsive and interactive** hotel booking website designed to provide a seamless and luxurious online experience for potential guests.  

With an intuitive interface, dynamic booking system, and secure payment integration, our platform enhances the way users explore and book hotel stays.  

## 🌐 Live Demo  
🔗 **[Visit Haven Hotel & Suites](https://haven-hotel-and-suites.web.app)**  

---

## 📖 Project Overview  

The **Haven Hotel & Suites** website is crafted to offer a premium digital experience for visitors by allowing them to:  

✅ **Explore** hotel rooms, amenities, and services through an intuitive and visually rich interface.  
✅ **Book** rooms effortlessly using a **dynamic reservation system** with real-time availability.  
✅ **Pay Securely** via **Stripe Payment Gateway** integration.  
✅ **Authenticate Securely** with **JWT-based authentication** for enhanced security.  
✅ **Engage** with features like interactive galleries, guest reviews, and location maps.  

---

## ✨ Features  

### 🎯 Core Features  
- 📱 **Fully Responsive Design** – Optimized for desktops, tablets, and mobile devices.  
- 🛎️ **Dynamic Booking System** – Book, manage, and update reservations seamlessly.  
- 🖼️ **Interactive Gallery** – Professional gallery showcasing hotel rooms, amenities, and events.  
- 🗺️ **Integrated Maps** – View hotel location and nearby attractions using **Leaflet.js**.  
- ⭐ **Guest Reviews & Ratings** – Share and read feedback from previous guests.  
- 🎥 **Smooth Animations** – Enhanced user experience with **Framer Motion**.  
- 📅 **Calendar Integration** – Effortless date selection for booking with a **date-picker component**.  
- 💳 **Stripe Payment Integration** – Secure and fast online payments.  
- 🔐 **JWT Authentication** – Secure user authentication with **JSON Web Token (JWT)**.  
- 🛠️ **Admin Dashboard** – Manage bookings, users, and rooms from a secure admin panel.  
- 🌍 **RESTful API** – Backend built with Express.js & Node.js, following REST principles.  

---

## 🛠️ Tech Stack & Dependencies  

### 💻 Core Technologies  
#### 🌐 Frontend:  
- ⚛️ **React.js** – Component-based UI development.  
- 🎨 **Tailwind CSS + DaisyUI** – Modern styling for an elegant UI.  
- 📍 **React-Leaflet** – Interactive map integration.  
- 🎭 **Framer Motion** – Smooth animations and transitions.  
- 🔄 **React Query/Axios** – Efficient data fetching and caching.  

#### ⚙️ Backend:  
- 🚀 **Node.js** – Server-side JavaScript runtime.  
- ⚡ **Express.js** – Fast and scalable backend framework.  
- 🛢️ **MongoDB + Mongoose** – NoSQL database for storing users, bookings, and room data.  
- 🔐 **JWT (JSON Web Token)** – Secure authentication and authorization.  
- 💳 **Stripe API** – Secure payment processing.  

---

### 📦 Notable NPM Packages  

| Package | Purpose |  
|---------|---------|  
| `express` | Backend web framework |  
| `mongoose` | MongoDB object modeling |  
| `jsonwebtoken` | Secure JWT-based authentication |  
| `cors` | Enable CORS for API requests |  
| `dotenv` | Load environment variables |  
| `axios` | API handling & data fetching |  
| `framer-motion` | Animations & transitions |  
| `react-leaflet` | Interactive maps integration |  
| `react-date-picker` | User-friendly date selection |  
| `react-router-dom` | Client-side routing |  
| `react-icons` | Modern icons for UI enhancements |  
| `sweetalert2` | Elegant alerts & notifications |  
| `react-slick` & `slick-carousel` | Sleek image carousel implementation |  
| `swiper` | Advanced sliders for dynamic content |  
| `stripe` | Secure payment processing |  

---

## 🚀 Getting Started  

### 📌 Prerequisites  
Ensure you have the following installed on your system:  
- 🟢 **Node.js** (v14+ recommended)  
- 📦 **npm** or **yarn** (latest version)  
- 🛢️ **MongoDB** installed locally or using **MongoDB Atlas**  

### 🏃‍♂️ Run the Project Locally  

#### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/mdhasanshuvo/haven-hotel-and-suites.git
cd haven-hotel-and-suites
```  

#### 2️⃣ Install Dependencies  
```bash
npm install
# or
yarn install
```  

#### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the root directory and add:  

```ini
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLIC_KEY=your-stripe-public-key
VITE_API_KEY=your-firebase-api-key
VITE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_PROJECT_ID=your-firebase-project-id
VITE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_APP_ID=your-firebase-app-id
```
🔐 **Ensure you add `.env` to `.gitignore` to keep credentials secure.**  

#### 4️⃣ Start Backend Server  
```bash
npm run server
```  

#### 5️⃣ Start Frontend Client  
```bash
npm run dev
```  

---

## ❓ Troubleshooting  

If you encounter any issues:  
- 🔍 Check the **console/logs** for errors.  
- 📄 Ensure **environment variables** are correctly configured.  
- 🔄 Run `npm audit fix` to resolve package dependency issues.  
- 🔌 Ensure MongoDB is running and properly connected.  
- 📩 Reach out for support via **[GitHub Issues](#)**.  

---

### 🔥 Final Notes  

- **Security Best Practices:**  
  - **Never expose API keys** in the frontend.  
  - Use **environment variables** for sensitive information.  
  - Secure authentication with **JWT** for password hashing.  
- **Performance Optimization:**  
  - Implement **lazy loading** for images.  
  - Use **React Query** for efficient data fetching.  
  - Minify and compress assets for faster load times.  

---
