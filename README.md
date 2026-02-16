#  PrintHub Go - Smart Printing MVP

> **Print in 30 seconds. No queues. No hassle.**

A premium, app-first MVP demonstrating a smart printing vending machine ecosystem for college campuses.


---

##  What is PrintHub Go?

PrintHub Go is the **digital brain** of a smart printing kiosk system. Students upload documents via the app, pay digitally, and collect prints from a secure smart locker—all without human interaction.

This MVP validates the user experience **before** building expensive hardware.

---

##  Features

###  Smart Dashboard
- Real-time kiosk status (Online/Busy/Maintenance)
- Nearest kiosk location
- Quick-start print job button

###  Document Upload
- PDF & image support
- Live preview
- B&W or Color selection
- Dynamic pricing calculator

###  Digital Payments
- UPI integration (simulated)
- Campus wallet support
- Secure transaction flow

###  Hardware Simulation
Animated visualization of the printing process:
1. **Processing** - File sent to kiosk
2. **Printing** - Documents being printed
3. **Storing** - Robot arm placing in locker
4. **Ready** - Waiting for pickup

###  Secure Pickup
- QR code generation
- Single-use OTP
- Auto-expiring locker access
- 30-second pickup window

---

##  Design Philosophy

### Premium Aesthetics
- Curated color palette (warm oranges, cream backgrounds)
- Custom typography (Yeseva One, Source Serif 4)
- Micro-interactions on every element
- Glassmorphism effects
- Smooth animations

### Mobile-First
- Optimized for phone/tablet
- Touch-friendly UI
- Responsive layouts
- Fast load times

---

##  Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation


# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

### Access the App
Open your browser and navigate to:
```
http://localhost:5173
```

---

##  User Flow

```
Home → Upload → Payment → Status → Locker → Complete
  ↓       ↓        ↓         ↓        ↓         ↓
Status  File    Choose    Watch    Unlock   Return
Check   Select  Payment   Print    Locker   Home
```

---

##  Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 |
| Build Tool | Vite |
| Routing | React Router v6 |
| Styling | CSS Modules |
| Icons | Lucide React |
| State | SessionStorage |
| Fonts | Google Fonts |

---

##  Project Structure

```
printhub-go/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Layout/       # Main app wrapper
│   │   └── StatusBadge/  # Kiosk status indicator
│   ├── pages/            # Route pages
│   │   ├── Home.jsx
│   │   ├── Upload.jsx
│   │   ├── Payment.jsx
│   │   ├── Status.jsx
│   │   └── Locker.jsx
│   ├── styles/           # Global styles
│   │   └── variables.css # Design tokens
│   ├── App.jsx           # Router configuration
│   ├── main.jsx          # Entry point
│   └── index.css         # Global CSS
├── index.html            # HTML template
├── package.json          # Dependencies
├── EXECUTION_GUIDE.md    # Detailed setup guide
└── AI_HANDOFF.md         # Technical documentation
```

---



### Simulated Components

| Component | MVP Implementation |
|-----------|-------------------|
| Printer | On-screen status animation |
| Smart Locker | QR/OTP + countdown timer |
| IoT Sensors | Mock kiosk status |
| Payment Gateway | 2-second delay simulation |

---

##  Security Features

-  Single-use QR codes
-  Time-limited OTP
-  Auto-expiring locker access
-  Encrypted document handling (conceptual)
-  No staff access to documents

---

##  Roadmap

### Phase 1: MVP (Current)
- [x] Core user flow
- [x] Hardware simulation
- [x] Premium UI/UX

### Phase 2: Backend Integration
- [ ] Firebase Authentication
- [ ] Firestore database
- [ ] Real payment gateway
- [ ] Cloud storage for documents

### Phase 3: Hardware
- [ ] Thermal printer integration
- [ ] Smart locker system
- [ ] IoT sensors
- [ ] Raspberry Pi controller

### Phase 4: Scale
- [ ] Multi-campus support
- [ ] Admin dashboard
- [ ] Analytics & reporting
- [ ] Mobile app (React Native)

---

##  Pricing Model

| Service | Price |
|---------|-------|
| B&W Print | ₹2/page |
| Color Print | ₹5/page |
| Binding | ₹10/set |
| Lamination | ₹20/sheet |

---



---

##  Acknowledgments

- **Design Inspiration**: Modern fintech apps (Razorpay, PhonePe)
- **Fonts**: Google Fonts
- **Icons**: Lucide Icons
- **Color Palette**: Custom curated

---



---

##  Demo

The app is currently running at:
```
http://localhost:5173
```


---

### Home Screen
- Kiosk status indicator
- Quick-start button
- Recent activity

### Upload Screen
- Drag-and-drop file upload
- Live pricing calculator
- Print settings

### Status Screen
- Animated progress indicator
- Real-time updates
- Locker assignment

### Locker Screen
- QR code display
- OTP backup
- Countdown timer

---
