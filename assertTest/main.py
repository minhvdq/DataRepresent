import json
import requests

# Open and read the JSON files
with open('Candle.JSON', 'r') as file:
    data = json.load(file)

with open('Line.JSON', 'r') as file:
    dataLine = json.load(file)

with open('Bar.json', 'r') as file:
    dataBar = json.load(file)

with open('Pie.json', 'r') as file:
    dataPie = json.load(file)

print('line ', dataLine["datasets"][0]["label"])

# Function to post chart data
def testAssertChart(arr, ep): 
    for d in arr:
        label = d["label"]
        data = d["data"]

        url = f"http://127.0.0.1:8000/api/{ep}/"
        myobj = {
            "label": label,
            "data": data
        }

        x = requests.post(url, json=myobj)
        
        # Print the response for debugging
        print(f"POST {url} | Status Code: {x.status_code}")
        print(x.text)

# Function to post candlestick data
def testAssert(arr):
    for d in arr:
        name = "x"
        date = d["x"]  # Assuming the date is stored in 'x'
        open_price = d["open"]
        high = d["high"]
        low = d["low"]
        close = d["close"]

        url = "http://127.0.0.1:8000/api/candlestick_data/"
        myobj = {
            "name": name,
            "date": date,
            "open": open_price,
            "high": high,
            "low": low,
            "close": close
        }

        x = requests.post(url, json=myobj)
        
        # Print the response for debugging
        print(f"POST {url} | Status Code: {x.status_code}")
        print(x.text)

# Function to delete candlestick data by ID range
def deleteAssert(i, j, ep):
    for p in range(i, j):
        url = f"http://127.0.0.1:8000/api/{ep}/{p}/"
        x = requests.delete(url)
        print(f"DELETE {url} | Status Code: {x.status_code}")
        print(x.text)

# Call testAssertChart for different datasets
testAssertChart(dataLine["datasets"], "line_data")
testAssertChart(dataBar["datasets"], "bar_data")
testAssertChart(dataPie["datasets"], "pie_data")

# deleteAssert(0, 26, "line_data")
# deleteAssert(0, 26, "bar_data")
# deleteAssert(23, 63, "candlestick_data")

# Call testAssert to post candlestick data
testAssert(data["data"])  # Uncomment when needed
