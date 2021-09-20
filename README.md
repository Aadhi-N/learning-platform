<h1 align="center">
  Adis Learning Platform
</h1>

## Overview
An online learning platform. 

Link to site: 

    This site was created using:
    - NextJS for frontend framework
    - Styled Components as CSS-in-JS tool
    - Express for server
    - JSON mock data for building REST APIs

    Hosted on Heroku.


#### Run project locally:

Clone the repo to your local machine.
```
git clone 
cd ..
```
Install all dependencies:
```
npm install
```

Start the server (Express is on client side, so only 1 server needed):
```
node server/index.js
open http://localhost:3000
```


### Notes/Limitations
- cite static images author


### Routes

Route | Path
------------ | -------------
Home | `GET /`
Favourites | `GET /favourites`
Notifications | `GET /notifications`
Progress | `GET /progress/course/[course.id]-[course.title]`
Recommended | `GET "/recommended/course/[course.id]-[course.title]`
Trending | `GET "/trending/course/[course.id]-[course.title]`
Categories | `GET "/category/[category.title]`


### Dependencies

* NextJS
* React Styled Components
* Material UI Icons
* ExpressJS
* SWR