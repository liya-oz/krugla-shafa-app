# **Krugla Shafa App**  

**Custom Handmade Furniture for Every Space**  

🌐 **Live Demo:** [Krugla Shafa App](https://resonant-empanada-860d1d.netlify.app)  


## **📌 Overview**  

Krugla Shafa App is a **modern, user-friendly e-commerce platform** specializing in **handmade furniture**. Unlike mass-produced furniture, our philosophy is:  

> "We create furniture for needs, not make you buy furniture first and then think about what to put in later."  

Our platform allows users to **browse** ready-made collections, **request custom furniture**, and **seamlessly shop online**.

---

## **🎨 Design Principles**  

- **Minimalistic & Clean UI** – Easy navigation with a fresh aesthetic.  
- **Cool, Modern Color Palette** – Deep teal, light aqua, light gray, and navy.  
- **Smooth Animations & Transitions** – Providing an enjoyable shopping experience.  

---

## **🚀 Features**  

### **🏆 Must-Have Features (Implemented)**  

✔️ **Multi-Page Navigation** – Home, Store, Catalogue, Cart (Purchased), Contact, and About pages.  
✔️ **Product Listing Page (Store)** – Fetching products from [Furniture API](https://furniture-api.fly.dev/).  
✔️ **Product Detail Page** – Displays images, price, and description.  
✔️ **Shopping Cart (Context API)** – Users can add/remove products, see total cost, and proceed to checkout.  
✔️ **Global Navigation & Footer** – Seamless navigation across all pages.  
✔️ **Responsive Design** – Works well on all devices.  

### **✨ Nice-to-Have Features (Partially Implemented or Planned)**  

✔️ **Product Filtering** – Filter by category (kitchen, bedroom, etc.).  
 **Multi-Language Support** – Toggle between languages.  
 **Wishlist Feature** – Save favorite products for later.  
✔️ **Infinite Scrolling** – Load more products dynamically.  
✔️ **User-Friendly Order Submission** – Mimics an API call for a smooth experience.  
✔️ **Shopping Cart Total Cost** – Displays total price dynamically.  
✔️ **Smooth Animations** – Enhances UI interaction.  

---

## **🛒 Shopping & Ordering Process**  

### **1️⃣ Browse & Select**  

- Users can explore **ready-made collections** or choose to **customize** furniture.  

### **2️⃣ Add to Cart**  

- The **shopping cart dynamically calculates total cost**.  

### **3️⃣ Submit Order**  

- Users **fill out a form** to place an order.  
- The app **simulates an API call** and logs the form data.  
- A **confirmation message appears** (`alert("Your order has been submitted successfully!")`).  
- The user is **redirected to the Store page** (`navigate("/store")`).  

---

## **🌍 Multi-Language Support**  

- **Toggle between English & Turkish** with a simple button click.  
- The entire **UI updates dynamically**.  

---

## **📂 Project Structure**  

```
krugla-shafa-app/
│── public/                   # Static assets
│── src/                      # Main application source code
│   ├── api/                  # API-related functions
│   ├── assets/               # Images, icons, and fonts
│   ├── components/           # Reusable UI components (buttons, cards, etc.)
│   ├── context/              # Global state management (Cart, Favorites, Language)
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Page components (Home, Store, Contact, etc.)
│   ├── styles/               # CSS and styling files
│   ├── utils/                # Utility functions
│   ├── App.css               # Global styles
│   ├── App.jsx               # Main App component
│   ├── index.css             # Base styles
│   ├── main.jsx              # Application entry point
│── index.html                # HTML template
│── LICENSE                   # License file
│── README.md                 # Project documentation

```

---

## **🛠️ Tech Stack**  

| **Technology** | **Purpose** |
|---------------|------------|
| **React.js**  | Frontend framework |
| **React Router** | Page navigation |
| **Context API** | Global state management |
| **Netlify** | Deployment |

---

## **📂 Pages & Routing**  

| **Page**        | **Route**             | **Description** |
|----------------|----------------------|----------------|
| **Home**       | `/`                  | Landing page with featured furniture. |
| **Store**      | `/store`              | View & filter furniture collections. |
| **Catalogue**  | `/catalogue`          | Browse all available furniture categories. |
| **Purchased**  | `/purchased`          | View your selected items & total cost. |
| **Contact**    | `/contact`            | Submit a custom furniture request. |
| **About**      | `/about`              | Learn more about Krugla Shafa. |
| **Product Detail** | `/products/:sku`   | View detailed info about a selected product. |

🔹 **Dynamic Routing**:  
The **Product Detail** page uses a `sku` parameter (`/products/:sku`) to display individual product details dynamically.

---

## **💻 Installation & Setup**  

Follow these steps to **run the app locally**:

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/liya-oz/krugla-shafa-app.git
cd krugla-shafa-app
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Development Server**

```sh
npm start
```

This will open **<http://localhost:3000>** in your browser.

---
The app is **deployed on Netlify** and accessible at: [Krugla Shafa App](https://resonant-empanada-860d1d.netlify.app)  

---

## **📜 License**

This project is licensed under the **MIT License**.
