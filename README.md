# SDE Intern Assignment- Log Ingestor and Query Interface

This project consists of a Log Ingestor and a Query Interface, providing a seamless solution for receiving, storing, and querying logs.

## Technologies Used

### Backend
- Node.js
- Express.js
- Mongoose (MongoDB ORM)

### Frontend
- React

### Database Management
- MongoDB Compass (or any preferred MongoDB management tool)

## API Endpoints

- **Create Log**
  - Endpoint: `http://localhost:3000/api/logs/create`
  - Description: Adds new logs to the system.
  - Usage: Developers can utilize the provided API endpoint or user interface to add logs.

- **Fetch Logs**
  - Endpoint: `http://localhost:3000/api/logs/getFilteredLogs`
  - Description: Retrieves logs based on specified filters such as level, message, resourceId, timestamp, etc.
  - Usage: Utilize the API endpoint with filters or use the provided user interface to get logs based on filter criteria.
    
- **Fetch All Logs**
  - Endpoint: `http://localhost:3000/api/logs/fetchAllLogs`
  - Description: Fetches all logs present in the system.
  - Usage: Access the provided API endpoint or user interface to retrieve all logs.


## Features

1. **Add Logs**
   - *Description:* Allows users to add new logs to the system.
   - *Usage:* Developers can use the provided API endpoint or user interface to add logs.

2. **Get All Logs**
   - *Description:* Fetches all logs present in the system.
   - *Usage:* Access the provided API endpoint or user interface to retrieve all logs.

3. **Get Filtered Logs**
   - *Description:* Retrieves logs based on specified filters such as level, message, resourceId, timestamp, etc.
   - *Usage:* Use the API endpoint with filters or the provided user interface to get logs based on filter criteria.

## Getting Started

1. **Clone the Repository:**
2. **Navigate to 'Log-ingester' and 'query-interface' folders:**
   - cd Log-ingester 
   - npm install
   - cd query-interface
   - npm install
3. **MongoDB Configuration:**
   - create a .env file in the 'log-ingester' folder.
   - Add the MongoDB URL in the .env file.
4. **Run the app:**
   - cd Log-ingester
   - npm start
   - cd query-interface
   - npm start

## UI of the Application

1. Create Form
  ![create from](https://github.com/ayushi15092002/circlepe-assignment/blob/main/screenshots/create%20log.png)

2. Get all Logs
  ![get_all](https://github.com/ayushi15092002/circlepe-assignment/blob/main/screenshots/fetch%20all.png)

3. Get Filtered Logs
  ![Filtered logs](https://github.com/ayushi15092002/circlepe-assignment/blob/main/screenshots/filtered%20log.png)

4. Get Filtered Logs with TimeStamp
  ![Filtered logs](https://github.com/ayushi15092002/circlepe-assignment/blob/main/screenshots/filter%20timestamp%20log.png)

 
   
