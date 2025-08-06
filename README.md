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
cd UserManagment
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

> Made with ❤️ by Om Lathiya


# Modern React Authentication App 🚀

A beautiful, modern React authentication application with a stunning UI built using Tailwind CSS, featuring glass morphism effects, smooth animations, and an intuitive user experience.

---

## ✨ Features

### 🎨 Modern UI Design
- **Glass Morphism Effects** - Beautiful frosted glass cards and components
- **Gradient Backgrounds** - Dynamic animated backgrounds with floating orbs
- **Smooth Animations** - Fade-in, slide-up, and hover animations throughout
- **Responsive Design** - Fully responsive across all device sizes
- **Modern Typography** - Inter font family for clean, readable text

### 🔐 Authentication Features
- **JWT Token Authentication** - Secure login/logout with JWT tokens
- **User Registration** - Complete registration flow with validation
- **Password Visibility Toggle** - Show/hide password functionality
- **Form Validation** - Real-time password strength and matching validation
- **Error Handling** - Beautiful error notifications and feedback

### 📊 Dashboard Features
- **Statistics Cards** - Beautiful stats display with icons and trends
- **Recent Activity Feed** - Real-time activity tracking
- **Quick Actions** - Easy access to common tasks
- **User Profile** - Account management and settings
- **Modern Header** - Sticky navigation with user info

### 🎯 User Experience
- **Loading States** - Beautiful loading spinners and states
- **Notifications** - Toast notifications for success/error messages
- **Hover Effects** - Interactive hover animations on cards and buttons
- **Focus States** - Accessible focus indicators
- **Smooth Transitions** - Fluid page transitions and animations

---

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks and modern patterns
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Framer Motion** - Production-ready motion library
- **Chakra UI** - Accessible component library
- **Custom CSS** - Custom animations and glass effects

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontedgithub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── LoadingSpinner.jsx    # Modern loading component
│   │   └── Notification.jsx      # Toast notifications
│   └── auth/                     # Authentication components
├── contexts/
│   └── AuthContext.jsx          # Authentication state management
├── pages/
│   ├── LoginPage.jsx            # Modern login interface
│   ├── RegisterPage.jsx         # Registration with validation
│   └── DashboardPage.jsx        # Feature-rich dashboard
├── api/
│   └── auth.js                  # API integration
├── App.js                       # Main app component
├── index.js                     # App entry point
└── index.css                    # Global styles and animations
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Success**: Green (#10B981)
- **Error**: Red (#EF4444)
- **Warning**: Orange (#F59E0B)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive**: Scales appropriately across devices

### Components
- **Glass Effect**: `glass-effect` class for frosted glass appearance
- **Gradient Text**: `gradient-text` class for gradient text effects
- **Button Styles**: `button-primary` and `button-secondary` classes
- **Input Fields**: `input-field` class for consistent form inputs

---

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add routing logic in `App.js`
3. Follow the existing design patterns

### Styling Components
- Use Tailwind CSS classes for styling
- Apply glass morphism with `glass-effect` class
- Add animations with custom CSS classes
- Maintain consistent spacing and typography

### Adding Animations
- Use existing animation classes: `animate-fade-in-down`, `animate-slide-in-up`
- Create custom animations in `src/index.css`
- Add keyframes to `tailwind.config.js`

---

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 🔐 Security Features

- JWT token-based authentication
- Secure password handling
- Form validation and sanitization
- Protected routes
- Token refresh mechanism

---

## 🎯 Performance Optimizations

- Lazy loading of components
- Optimized animations
- Efficient re-renders
- Minimal bundle size
- Fast loading times

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

---

## 🐳 Docker Support

Easily run your React app in a containerized environment using Docker and Docker Compose.

### 📄 Dockerfile

```Dockerfile
# STEP 1: Build React App using Node.js
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# STEP 2: Serve React app using Nginx
FROM nginx:alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy React build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 in container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
```

### 📄 docker-compose.yml

```yaml
version: '3.8'

services:
  react-frontend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: react-frontend
    ports:
      - "3000:80"
```

### 🧪 Run in Docker

```bash
docker-compose up --build
```

Open your browser and visit 👉 `http://localhost:3000`

### 🧹 Stop & Remove Containers

```bash
docker-compose down
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first framework
- **Lucide** for the beautiful icons
- **Inter Font** for the modern typography
- **React Community** for the excellent ecosystem

---

**Built with ❤️ and modern web technologies**
