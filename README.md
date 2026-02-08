# 🏨 Hotel Booking Form

A modern, responsive **Hotel Booking Form** built using **HTML, CSS, and JavaScript**, focused on clean UI, smooth UX, and proper client-side validation.

---

## ✨ Features

- 📱 **Responsive design** (mobile & desktop friendly)
- 🎨 Modern UI with floating labels
- 🖼️ Full-screen hotel background image
- 🧠 Client-side form validation
- 📅 Smart date validation (check-out after check-in)
- 👨‍👩‍👧 Guest limit validation (max 10 guests)
- 🔔 User-friendly success & error alerts

---

## 📂 Project Structure

Hotel-Booking-Form/
│
├── Asset/
│ └── BGImage.webp
│
├── HotelForm.html
├── HotelForm.css
├── HotelForm.js
└── README.md


---

## 🛠️ Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling & layout
- **JavaScript (ES6)** – Form validation & logic

---

## 🚀 How to Run the Project

1. Download or clone the repository
2. Open the folder in **VS Code**
3. Open `HotelForm.html`
4. Run using **Live Server**  
   or  
   Double-click the HTML file to open in browser

---

## 🖼️ Background Image Setup

The background image is stored in:

Asset/BGImage.webp


Applied in CSS:

```css
body{
  background: url("Asset/BGImage.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

✅ Validation Rules

1. Full Name: Required

2. Phone Number: Valid Indian mobile number (10 digits)

3. Check-in: Cannot be before today

4. Check-out: Must be after check-in

5. Room Type: Required

6. Adults: Minimum 1

7. Total Guests: Maximum 10


💡 UX Improvements Implemented
-Floating labels for clarity

-Clear inline error messages

-Centralized alert feedback

-Clean spacing & visual hierarchy


📌 Future Enhancements
-Backend integration

-Email confirmation

-Price calculation

-Dark mode

-Glassmorphism UI



### 👨‍💻 Author
Aryan Bharadwaj
Passionate Web Developer focused on clean UI & UX

⭐ If you like this project, feel free to star it and improve it further!

