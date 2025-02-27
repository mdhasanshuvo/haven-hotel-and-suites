# 🏨 Haven Hotel & Suites  

Welcome to **Haven Hotel & Suites** – a **modern and intuitive hotel booking platform** built with the **MERN stack**. This project provides a seamless booking experience with **secure authentication, real-time availability, and interactive UI elements** to enhance user engagement.  


---

## 🌍 Live Demo  

🔗 **[Visit Haven Hotel & Suites](https://haven-hotel-and-suites.web.app) 🚀** 

![Project Screenshot](https://i.ibb.co.com/2YMhTGTf/2025-02-28-001227.png)  

---

## 📖 Project Overview  

**Haven Hotel & Suites** offers a user-friendly platform where visitors can:  

✅ **Browse** a collection of high-quality hotel rooms with images, descriptions, and pricing.  
✅ **Book** rooms instantly with real-time availability checks.  
✅ **Authenticate Securely** with email/password login or **Google authentication**.  
✅ **Manage Bookings** – View, update, and cancel reservations.  
✅ **Leave Reviews** – Share experiences by rating and reviewing booked rooms.  
✅ **Enjoy an Optimized Experience** with animations, responsive design, and interactive elements.  

---

## ✨ Features  

### 🎯 Core Features  
✔ **🌟 Fully Responsive Design** – Optimized for desktops, tablets, and mobile devices.  
✔ **🔐 Secure Authentication** – Firebase authentication with **JWT-based authorization**.  
✔ **🛎️ Dynamic Booking System** – Users can book, update, and cancel reservations.  
✔ **📅 Date Picker Integration** – Easy date selection for room booking.  
✔ **📝 Review & Rating System** – Users can submit and view ratings & reviews.  
✔ **🗺️ Integrated Maps** – View hotel locations via **Leaflet.js**.  
✔ **🎥 Smooth Animations** – Enhancing UX with **Framer Motion**.  
✔ **🌍 RESTful API** – Built with Express.js & Node.js, following REST principles.  


---

## 🛠️ Technology Stack  

| Layer         | Technology |
|--------------|-----------|
| **Frontend** | React.js, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB  |
| **Authentication** | Firebase, JWT |
| **UI Enhancements** | Framer Motion, React Icons |
| **State Management** | React Context API |
| **Mapping** | React Leaflet |


---

## 📦 Notable NPM Packages  

| Package | Purpose |  
|---------|---------|  
| `express` | Backend web framework |  
| `mongoose` | MongoDB object modeling |  
| `jsonwebtoken (JWT)` | Secure user authentication & authorization |  
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
git clone https://github.com/your-username/haven-hotel.git
cd haven-hotel
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

## 📸 Screenshots  

### 🌟 Homepage  
![Homepage Screenshot](https://i.ibb.co.com/wrgB7CJy/Home-Page.png)  

### 🛏️ Rooms Page  
![Rooms Screenshot](https://i.ibb.co.com/d8n90z1/Rooms.png)  

### 📅 Booking System  
![Booking Screenshot](https://i.ibb.co.com/84RzrNWp/Booking.png)  

### 🔐 Authentication  
![Authentication Screenshot](https://i.ibb.co.com/mC6zMvsG/Login.png)  

### ⭐ Review System  
![Review Screenshot](https://i.ibb.co.com/tpGbcsyg/Review.png)  

### ⭐ Gallery 
![Gallery Screenshot](https://i.ibb.co.com/1tHtnXYT/Gallery.png)  

### ⭐ About Us Page  
![About-us Screenshot](https://i.ibb.co.com/BHjbFyc7/About.png)  

---

## 🔥 Security & Best Practices  

- **Never expose API keys** in the frontend.  
- Use **environment variables** for sensitive information.  
- Secure authentication with **JWT**.  
- Implement **role-based access control** for admin functionalities.  
- Optimize **performance** with lazy loading, caching, and efficient database queries.  

---

## 🎯 Future Enhancements  
 
✅ **Date Range Booking** – Allow booking for multiple days.  
✅ **Promotions & Discounts** – Feature special offers and limited-time discounts.  
✅ **Admin Dashboard** – Enable admin to manage users, bookings, and rooms.  

---
