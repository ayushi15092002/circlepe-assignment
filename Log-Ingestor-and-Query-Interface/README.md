# Log Ingester and Query Interface

## Components

- Log Ingestor: Responsible for receiving and storing logs.
- Query Interface: Facilitates querying and retrieving logs based on filters.

### Technologies Used

- Backend:
  ![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Express.js](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
  ![Mongoose](https://img.shields.io/badge/Mongoose-4EA94B?style=for-the-badge&logo=mongoose&logoColor=white)

- Frontend:
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

- Other Tools: MongoDB Compass (for database management)

### API Endpoints

- Create Log `http://localhost:3000/api/logs/create`
- Fetch Logs `http://localhost:3000/api/logs/getFilteredLogs`

### Scalability and Performance

- Database indexing
- Screenshot from MongoDB Compass

  <img width="1251" alt="Screenshot 2023-11-19 at 2 53 41 PM" src="https://github.com/PrateekSrivastava1/Log-Ingestor-and-Query-Interface/assets/65366517/f17b5429-b7f1-40d2-bba0-427fc80a77e3">

## Features

### 1. Add Logs

- Description: This feature allows users to add new logs to the system.
- Usage: Developers can use the provided API endpoint or user interface to add logs.

### 2. Get All Logs

- Description: Fetches all logs present in the system.
- Usage: Access the provided API endpoint or user interface to retrieve all logs.

### 3. Get Filtered Logs

- Description: Retrieves logs based on specified filters such as level, message, resourceId, timestamp, etc.
- Usage: Use the API endpoint with filters or the provided user interface to get logs based on filter criteria.

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:PrateekSrivastava1/Log-Ingestor-and-Query-Interface.git
```

### Navigate to 'Log-ingester' and 'query-interface' folders.

```
cd Log-ingester
```

```
npm install
```

```
cd query-interface
```

```
npm install
```

### MongoDB Configuration

- Install MongoDB Compass or use any preferred MongoDB management tool.
- Create a .env file in the 'log-ingester' folder.
- Add the MongoDB URL in the .env file.

```
DB_URL=mongodb://localhost:27017/log-ingester
```

### How to run this app?

```
cd Log-ingester
```

```
npm start
```

```
cd query-interface
```

```
npm start
```

## App Screenshots for your referrence

## Create Logs

<img width="1512" alt="Screenshot 2023-11-19 at 2 37 02 PM" src="https://github.com/PrateekSrivastava1/Log-Ingestor-and-Query-Interface/assets/65366517/53408026-4fe5-4912-9bf7-18a808421459">

## Fetch All Logs

<img width="1512" alt="Screenshot 2023-11-19 at 2 36 57 PM" src="https://github.com/PrateekSrivastava1/Log-Ingestor-and-Query-Interface/assets/65366517/1c669c05-dc49-41ad-b2fe-e58e7665915e">

## Filter Logs

<img width="1512" alt="Screenshot 2023-11-19 at 2 37 08 PM" src="https://github.com/PrateekSrivastava1/Log-Ingestor-and-Query-Interface/assets/65366517/a5fd877d-670c-48b3-85c2-bbbe4fa49843">
