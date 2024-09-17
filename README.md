# Chart World

## Description

* Data Visualization: Use Chart.js to create line charts, bar charts, pie charts, and for candlestick charts used ApexChart.
* Data Management: Use Django REST Framework to manage and interact with data through REST APIs.
* Testing: Python scripts to test the APIs with different data inputs and manage data entries.

## Setup

### Prerequisites

* Python 3.x
* Django
* Django REST Framework

* npm and Node.js

### Implementation

#### For Backend:

1. Access to the Backend folder and apply Migrations
```sh
    cd dashboard
    python3 manage.py migrate
```

2. Run the Development Server
```sh
    python3 manage.py runserver
```

#### For Frontend:
1. Direct to the front-end directory
```sh
    cd ../dashboardfe
```

2. Install the required externality
```sh
    npm install
```

3. Run the Front-end server
```sh
    npm run dev
```

## Test Data

The project includes a Test Folder with four JSON files corresponding to different chart data types: Candlestick Chart, Line Chart, Bar Chart, and Pie Chart. The folder also contains main.py, a Python script to loop through each JSON file and insert data into the appropriate Django API endpoints.

To run the test script
```sh
    python3 run main.py
```

## URIs and Endpoints

Both frontend and backend services should be running simultaneously.

* Frontend URI: http://localhost:3000/
* Backend URI: http://localhost:8000/

### Endpoints
The backend has separate endpoints for each type of chart data:
* Line Data: /api/line_data/
* Bar Data: /api/bar_data/
* Pie Data: /api/pie_data/
* Candlestick Data: /api/candlestick_data/

## Explanation

The frontend services fetch data from Django endpoints each time the user reloads the page. The fetched data is then formatted into elements that Chart.js or ApexCharts can read. After formatting, the data is passed into Chart components to be displayed in a visually appealing manner.