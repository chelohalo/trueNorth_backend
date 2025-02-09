TrueNorth Operations
Overview
TrueNorth Operations is a web application that allows users to perform various mathematical operations, including addition, subtraction, 
multiplication, division, square root, and random string generation. Each operation costs a certain number of credits, and users can manage 
their credit balance within the application.

Features
Perform basic mathematical operations: Addition, Subtraction, Multiplication, and Division.
Calculate the square root of a number.
Generate a random string using the RANDOM.ORG API.
User authentication and authorization.
Credit management system where each operation costs credits.
Responsive design for a seamless user experience across devices.

Technologies Used
Frontend
React.js: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for styling.
Axios: For making HTTP requests.
Backend
Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing user and operation data.
JWT: JSON Web Tokens for authentication.
bcrypt: Library for hashing passwords.
Setup Instructions
Prerequisites
Node.js (v14 or higher)
MongoDB
Git

Clone the Repository
backend
git clone https://github.com/chelohalo/trueNorth_backend.git
frontend
git clone https://github.com/chelohalo/trueNorth_frontend.git

Install dependencies and run the application
npm install
npm run dev


Important: To run the application properly, you need to turn on a local MongoDB instance. Additionally, set up the environment variables in a .env file within the backend folder. You can use the .env.example file as a template. Make sure to provide your own JWT_SECRET and MONGODB_URI.
