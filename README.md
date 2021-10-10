# MySimpleBlog

One simple blog made in MERN stack.

### Steps to follow for setup:

* Clone the repo.
* Add a .env file inside the backend folder with following details :-
  * DB_CONNECTION= (mongoDB URL)
  * PORT= (Port number, prefer 9000)
* .env file for the frontend is include in the repo itself. It contains the backend URL. If you change the port no. or backend URL, make sure that it is changed in the client .env file also.
* Import the blogs.json file provide in the repo to your mongoDB collection.
* Images for the blogs are stored inside the uploads folder in backend folder. Mkae sure images are included there.
* For starting the backend server, type "npm run start-dev" for development and "npm start" for production.
* For starting the frontend, type "npm start".
