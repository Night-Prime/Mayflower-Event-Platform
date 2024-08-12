## Event Management and Booking Service System

### Overview

This project is a comprehensive Event Management and Booking Service System designed to provide a seamless experience for users to explore event details, view available dates, book events, and request quotes. It features a frontend built with React, a backend powered by Node.js and Express, and a PostgreSQL database. The system integrates with a calendar API to display event availability and offers secure payment processing for bookings.

### Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Setup and Installation](#setup-and-installation)
4. [Project Structure](#project-structure)
5. [Environment Variables](#environment-variables)
6. [API Endpoints](#api-endpoints)
7. [Frontend](#frontend)
8. [Backend](#backend)
9. [Database Schema](#database-schema)
10. [Deployment](#deployment)
11. [Contributing](#contributing)
12. [License](#license)

### Features

- **Informational Content**: Detailed information about Mayflower, including history, mission, vision, and core values.
- **Media Gallery**: Images and videos showcasing past events.
- **Interactive Calendar**: Displays available, booked, and tentative dates for events, including public events.
- **Service Packages**: Detailed descriptions of various service packages and additional services.
- **Quote Request**: Users can request a personalized quote based on selected packages and services.
- **Booking Management**: Booking creation, modification, and cancellation.
- **Admin Dashboard**: Manage website content, bookings, and user accounts.
- **Notifications**: Email and SMS notifications for confirmations, reminders, and promotions.
- **Secure Payments**: Integration with payment gateways for processing transactions.

### Technology Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Authentication**: OAuth
- **Payment Gateway**: Stripe (or other chosen gateway)
- **Other**: Calendar API integration, Redis (for caching).

### Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Night-Prime/Mayflower-Event-Platform
   cd event-booking-system
   ```

2. **Frontend Setup:**

   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Backend Setup:**

   ```bash
   cd backend
   npm install
   npm start
   ```

4. **Database Setup:**
   - Ensure PostgreSQL is installed and running.
   - Create a database and update the `.env` file with your database credentials.

### Project Structure

```
Mayflower-Event-Platform/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── ...
└── README.md
```

### Environment Variables

Create a `.env` file in the root of the `backend` directory and specify the following environment variables:

```
PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### API Endpoints

#### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login an existing user.

#### Events and Bookings

- **GET /api/events**: Get a list of events.
- **GET /api/events/:id**: Get details of a specific event.
- **POST /api/bookings**: Create a new booking.
- **GET /api/bookings/:id**: Get details of a specific booking.
- **PUT /api/bookings/:id**: Update a booking.
- **DELETE /api/bookings/:id**: Cancel a booking.

#### Admin

- **GET /api/admin/bookings**: Get all bookings (admin only).
- **POST /api/admin/events**: Create a new event (admin only).
- **PUT /api/admin/events/:id**: Update an event (admin only).
- **DELETE /api/admin/events/:id**: Delete an event (admin only).

### Frontend

The frontend is built with React and includes components for displaying event details, managing bookings, and interacting with the calendar. Key components include:

- **EventDetails**: Displays detailed information about a specific event.
- **BookingForm**: A form for users to book events and request quotes.
- **Calendar**: An interactive calendar showing event availability.
- **UserDashboard**: A dashboard for users to manage their profile and bookings.

### Backend

The backend is powered by Node.js and Express, providing RESTful APIs for the frontend to interact with. Key components include:

- **Controllers**: Handle the business logic for different endpoints.
- **Models**: Define the data schema and interact with the PostgreSQL database.
- **Routes**: Define the API routes and their corresponding controllers.
- **Middleware**: Includes authentication and error handling.

### Database Schema

The PostgreSQL database includes tables for users, events, bookings, and more. Key tables include:

- **Users**: Stores user information and credentials.
- **Events**: Stores event details, including date, location, and description.
- **Bookings**: Stores booking details, including user ID, event ID, status, and payment information.

### Deployment

To deploy the system, consider using a cloud provider such as AWS, Azure, or Heroku. The project can be containerized using Docker for easier deployment and scalability.

### Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.
