# Krugla Shafa App
This is a **web application** about a company that produces handmade furniture. The application will provide an elegant, user-friendly experience, allowing users to browse, filter, and purchase high-quality handmade furniture. 

 As a fake products I going to use this API:
https://furniture-api.fly.dev/

- **Color Palette:** Earthy, neutral tones such as **beige, brown, cream, and muted greens** to reflect natural materials.
- **Design Principles:** Minimalistic, clean, and easy-to-navigate UI with high emphasis on usability and aesthetics.

## Features 
### 🏆 **Must-Have **
- **Multi-Page Navigation**: Home, Store, Catalogue, Purchased (Cart), Contact, About pages.
- **Product Listing Page (Store)**: Fetch and display furniture products from an API.
- **Product Filtering**: Filter products based on category (kitchen, bedroom, etc.).
- **Product Detail Page**: View detailed information, including images, price, and description.
- **Shopping Cart (Context API)**: Users can add/remove products and see total cost.
- **Contact Page**: A working form where customers can send inquiries.
- **Responsive Design**
- **Global Navigation & Footer**: Easy navigation across all pages.

###  **Nice-to-Have Features**
- **Search Functionality**: Allow users to search for furniture by name.
- **Wishlist Feature**: Users can save products they like.
- **Instagram Gallery Integration**: Display latest Instagram posts from the company.
- **Multi-Language Support**
- **Smooth Animations & Transitions**
- **User Reviews & Ratings**

## Tech Stack
- **React.js, React Context API, React Router, Netlify**
---
#  **My development plan:**

## 1. Define Routing for Pages
- Create routes for **Home, Store, Catalogue, Purchased, Contact, About** in `AppRouter.jsx`.
- Test navigation between pages with `<Link>` components.

## 2. Build Common UI Components
### Header (Navigation Bar)
- Add a **logo**, **search bar**, **purchased button**, and **language switcher**.
- Include links to all pages.

### Footer
- Include **company logo, social media links, address, and navigation links**.

## 3. Apply Global Styling
- Set up **CSS structure** (`globals.css`, component-specific styles)\

## 4. Home Page Development
- Add a **hero section** with **Project 1 (photos + text)**.
- Implement a **slider** with **3-4 project examples**.
- Fetch and display **6-8 images from Instagram** in a responsive layout.

## 5. Build Store Page (Product Cards Grid)
- Fetch product data from the **API**.
- Display products in a **grid format with images, names, and prices**.
- Implement **filtering** (e.g., by price, category).
- Enable **infinite scrolling**.

## 6. Build Catalogue Page (Product Categories)
- Create sections for **kitchen, bedroom, living room, etc.**
- Allow users to browse by **category**.
- Ensure clicking on a **category** shows relevant products.

## 7. Build Purchased Page
- Implement a **shopping cart feature** using React Context API.
- Show a **list of selected products** with total price.
- Include a **checkout button** (for now, just display an alert or confirmation).

## 8. Build Contact Page
- Add a **contact form** with **name, email, and message fields**.
- Include **validation** (ensure all fields are filled correctly).
- Add a **submit button** (store data in state for now).

## 9. Build About Page
- Add a section with **company info, mission, and team photos**.

## 10. Implement Language Switching
- Create a **button** to switch between **two languages** (e.g., English and Ukrainian).
- Store the **selected language in state** and update text accordingly.

## 11. Add Search Functionality
- Implement a **search bar** that allows users to find products by name.
- **Highlight results** dynamically as the user types.

## 12. Optimize Responsiveness

## 13. Test & Fix Bugs
- Debug any **navigation issues, API errors, or UI problems**.
- Ensure **smooth functionality** across all pages.

## 14. Write a README File
- Include **project description, features, setup instructions, and usage guide**.

## 15. Deploy the Website
- Perform final **testing** on different devices and browsers.
- Fix any **remaining issues** before launch

## 16. Final Testing & Bug Fixing
- Deploy using **Netlify**.


