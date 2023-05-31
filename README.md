# travelopia_backend
This is the Backend for the Travel app using Node js &amp; Express js.

There are 2 rest apis here
  1. POST /submit/form - It receives data from the Travel App form (frontend) and stores it to MongoDB Atlas database.
  2. GET /forms - It fetches all the forms data stored in the MongoDB Atlas database and returns that.

The apis can be publically accessed using this url by adding the api endpoints after this url: https://travel-backend-c90r.onrender.com


## Local Setup
Follow these steps to set this project locally
1. Clone this github repo on your local
2. You must have node & npm installed (if not, follow any tutorial to install the same)
3. Go to the repo folder on your local and run npm i - this will install all the dependencies required for this project
4. After this, run `node .`
5. You can access the apis by replacing the above url by http://localhost:8080/ - this is our Travel App Backend!

You can access the frontend for this project here - https://travel-frontend-bouv.onrender.com/


## Demo
You can see demo videos here:
1. Problem statement + Backend: https://www.loom.com/share/2a09aa53a90d4fe094175b1eb0265825
2. cont. of 1 + Frontend: https://www.loom.com/share/526824ef2ea346b58243ca449829ced8
