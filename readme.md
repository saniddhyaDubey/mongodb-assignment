# Backend Configuration:
## Two Endpoints - 
1. "budget" - This endpoint reads the data from the mongoDB. The name of the database is stored in the connection string.
2. "add-budget-data" - This endpoint add a new data point for the chart. Using postman, select the post request, and in the body pass a json object with key as ("title", "budget", "color"). Make sure the value of the color is in hex and also a hashtag is present.
