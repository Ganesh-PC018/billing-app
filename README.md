
```markdown
# 🧾 Billing App — Full Stack Application

Welcome to the **Billing App** developed by **Ganesh Mane** — a powerful full-stack web application for managing bills, products, categories, image uploads, and OTP-based authentication using **Spring Boot** and **React + Vite**.

---

## 🔑 Admin Login (Demo)

- **Email:** mane.ganesh.pc@gmail.com  
- **Password:** Ganesh@26

---

## 🧠 Tech Stack

### Backend:
- Spring Boot (Java)
- Spring Security (JWT Auth)
- PostgreSQL
- SMTP (Gmail)
- Twilio (SMS OTP)
- AWS S3 (Image upload)

### Frontend:
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- React Toastify

---

## ✨ Key Features

- 🔐 User & Admin Authentication with JWT
- 📩 OTP Login via Email (SMTP) and SMS (Twilio)
- 🛍️ Product & Category Management (CRUD)
- 🧾 Bill/Order Management
- ☁️ Image Upload with AWS S3
- 🎯 Role-based Access (Admin/User)
- 📊 Dashboard & Reports (optional)
- 🌐 REST API + Responsive UI

---

## 🚀 Project Structure

```

/billing-app/
├── backend/        → Spring Boot backend
├── frontend/       → React + Vite frontend
└── README.md       → This file

````

---

## ⚙️ Environment Setup

### 1️⃣ PostgreSQL Database

Create a PostgreSQL DB named: `billing_db`

### 2️⃣ Backend Setup (Spring Boot)

#### Prerequisites:
- Java 17+
- Maven
- PostgreSQL running locally

#### Update `backend/src/main/resources/application.properties`:

```properties
# PostgreSQL DB
spring.datasource.url=jdbc:postgresql://localhost:5432/billing_db
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update

# JWT
jwt.secret=your_jwt_secret

# SMTP (Gmail)
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_email_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# Twilio (SMS OTP)
twilio.account_sid=your_twilio_sid
twilio.auth_token=your_twilio_auth_token
twilio.phone_number=your_twilio_phone_number

# AWS S3
aws.access_key=your_aws_access_key
aws.secret_key=your_aws_secret_key
aws.region=ap-south-1
aws.bucket_name=your_s3_bucket_name
````

#### Run Backend:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

App will run at: `http://localhost:8080`

---

### 3️⃣ Frontend Setup (Vite + React)

#### Prerequisites:

* Node.js (v18+)
* npm or yarn

#### Create `.env` file inside `/frontend`:

```env
VITE_API_URL=http://localhost:8080/api
```

#### Install and Start:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔐 Required Environment Variables (Safely Store)

| Key                   | Used For          |
| --------------------- | ----------------- |
| `spring.datasource.*` | PostgreSQL DB     |
| `jwt.secret`          | JWT Token Signing |
| `spring.mail.*`       | Email OTP         |
| `twilio.*`            | SMS OTP           |
| `aws.*`               | S3 Uploads        |

> ❗ Never commit `.env` or secrets to GitHub. Use environment variables in CI/CD or production.

---

## 📦 Sample REST APIs

| Method | Endpoint               | Description               |
| ------ | ---------------------- | ------------------------- |
| POST   | `/api/auth/login`      | Login with email/password |
| POST   | `/api/auth/send-otp`   | Send OTP (Email/SMS)      |
| POST   | `/api/auth/verify-otp` | Verify OTP                |
| GET    | `/api/products`        | List all products         |
| POST   | `/api/products`        | Add product (Admin only)  |
| GET    | `/api/bills`           | Get billing history       |

---

## 🧪 Testing

* Postman for API testing
* React Testing Library (Frontend)
* JUnit for backend tests
* Add Swagger UI if needed

---

## 🌐 Deployment

* Frontend: Deploy to Vercel / Netlify
* Backend: Deploy on Render / Railway / EC2
* PostgreSQL: Use Supabase or Neon DB (or self-hosted)
* Images: AWS S3
* Secrets: Manage using `.env` or secret manager (e.g., GitHub Actions, Vercel, Render)

---

## 📬 Contact

**Ganesh Mane**
🎓 BTech at SGGS Nanded
📧 Email: [mane.ganesh.pc@gmail.com](mailto:mane.ganesh.pc@gmail.com)
📱 Phone: +91-8459476752
🔗 [LinkedIn](https://linkedin.com/in/ganeshrmane)
🐙 [GitHub](https://github.com/Ganesh-PC018)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE)

---

> Developed with 💙 by Ganesh Mane | Java + React Full Stack Developer

```

---

Would you like me to:
- Add Swagger UI for APIs?
- Provide a `.env.example` file?
- Set up Docker + Docker Compose for easier running?

Let me know and I’ll help with the next steps too!
```
