# 🧑‍💻 User Management System (Backend)

A robust backend system for user management built with **Java Spring Boot**, implementing **JWT authentication**, **role-based access**, and **clean architecture** principles.

---

## 🚀 Key Modules

### 🔐 Authentication Module
- Login with JWT
- Refresh Token support
- Logout functionality

### 👤 User Module
- Register new users
- Update user profile
- Soft delete users (logical deletion)
- Enable/Disable user account

### 🛡️ Role Module
- Roles supported: `SUPER_ADMIN`, `ADMIN`, `USER`
- Assign and Revoke roles (via Admin APIs)

### 🧑‍💼 Admin Module
- Manage all users
- Assign or revoke roles to users
- Enable/disable or soft delete users

---

## 🔒 Security

- JWT-based authentication
- Refresh token strategy
- Role-based access control (RBAC)
- Stateless, token-based authorization system

---

## 🧱 Architecture

- Follows **SOLID** principles
- Clean layered design:  
  `Controller → Service → Repository`
- DTOs using **MapStruct** for data mapping
- Centralized **Global Exception Handling**
- Modular and scalable codebase

---

## 🧰 Tech Stack

- Java 17
- Spring Boot 3.x
- Spring Security
- MySQL 8
- JWT (JSON Web Token)
- MapStruct
- Lombok
- Maven
- Docker & Docker Compose

---

## 📂 Project Structure

```
src/
├── config/             # Security config, CORS, JWT setup
├── controller/         # REST API endpoints
├── dto/                # Request/Response DTOs
├── entity/             # JPA entities
├── exception/          # Custom and global exceptions
├── repository/         # Spring Data JPA repositories
├── security/           # JWT filter, token provider, etc.
├── service/            # Service interfaces
│   └── impl/           # Service implementations
└── util/               # Utility classes
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/User-Management-System.git
cd User-Management-System/backend
```

### 2. Configure MySQL Database

Edit `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/userdb
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Ensure your local MySQL has:
- Database: `userdb`
- Username: `root`
- Password: `root`

### 3. Run the Application

#### Using Maven

```bash
mvn clean install
mvn spring-boot:run
```

#### OR Using JAR

```bash
git clone https://github.com/your-username/User-Management-System.git
cd User-Management-System/backend
```

---

## 🐳 Docker Setup (Optional)

### 1. Start with Docker Compose

```bash
docker-compose up --build
```

### 2. Docker Services

| Service         | Port |
|-----------------|------|
| MySQL Database  | 3307 |
| Spring Boot App | 8080 |

---

## 🔗 API Endpoints

### 🔐 Auth Endpoints

| Method | Endpoint                | Description            |
|--------|-------------------------|------------------------|
| POST   | `/api/auth/register`    | Register user          |
| POST   | `/api/auth/login`       | Login with credentials |
| POST   | `/api/auth/refresh-token` | Refresh JWT token    |
| POST   | `/api/auth/logout`      | Logout user            |

### 👤 User Endpoints

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| GET    | `/api/user/me`      | Get current user info   |
| PUT    | `/api/user/update`  | Update user profile     |
| DELETE | `/api/user/delete`  | Soft delete own account |
| PUT    | `/api/user/enable`  | Enable account  |
| PUT    | `/api/user/disable` | Disable account  |

### 🧑‍💼 Admin Endpoints

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| GET    | `/api/admin/users`     | Get list of all users     |
| POST   | `/api/auth/register`    | Register user          |

---

## 🧪 Testing

You can test the APIs using tools like:
- Postman

### Authorization Header Example

```http
Authorization: Bearer <access_token>
```

---

## 📝 Notes

- JWT tokens are short-lived; refresh tokens are used to get new access tokens.
- Soft delete means users are not permanently deleted; they are marked as inactive.
- Only `ADMIN` and `SUPER_ADMIN` can manage other users.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ✍️ Author

This project is maintained by **[Your Name]**

---

## 💬 Contact

Feel free to reach out for any questions or suggestions!

- GitHub: Om Lathiya
- Email: om.lathiya@exhibytesolution.com

---

> Made with ❤️ by Om Lathiya
