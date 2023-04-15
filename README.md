#Hobbly 

Hobbly is a social web application, based on the users hobbies.

Deployed at:

## Hobbly site features the following: 
* Create post, read post, and delete posts
* User can Like and unlike a post
* User can comment on post, delete a comment, user is also able to reply to another persons
  comment instead of commenting directly under the post
* Direct messaging is avaliable to users
* View profiles of other users, able to browse through their posts, liked posts and comments
* User can have bio that can be viewed by other users that go onto their page
* Post can be found if user utilizes the search button to filter between their interest 

## Installation and usage
1) Clone this repository  
```
git clone https://github.com/ihtasham42/social-media-app.git
```
2) Install dependencies  
```
cd social-media-app  
npm install
cd client
npm install
```
3) Create .env in root directory
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd social-media-app
cd client
npm start
```



