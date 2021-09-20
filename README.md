<h1 align="center">
  Adis Learning Platform
</h1>

## Overview
An online learning platform. 

Link to site: [https://adis-learning-platform.herokuapp.com/](https://adis-learning-platform.herokuapp.com/)

    This site was created using:
    - NextJS for frontend framework
    - Styled Components as CSS-in-JS tool
    - Express for server
    - JSON mock data for building REST APIs

    Hosted on Heroku.
    Static assets author: [Anna Yashina](https://dribbble.com/chebarsu)


#### Run project locally:

Clone the repo to your local machine.
```
git clone 
cd learning-platform
```
Install all dependencies:
```
npm install
```

Start the server:
```
node server/index.js
open http://localhost:3000
```


### Notes/Limitations

**Project still in progress**
- implement "likes" and "notifications" feature
- add components to course detail pages
- fix navbar drop down css

**Data fetching strategy:** I "fetched" data from the API from the client side instead of server side because something like a dashboard contains data assigned to each unique user, and it's not usually pre-rendered due to its dynamic nature. This strategy first renders the page, and then displays data once fetched, using "SWR" - a React Hook that NextJS recommends.


**Front-End CSS:** It was not ideal to build only with React Styled Components, particularly for responsiveness. It would be handy to include other frameworks like Tailwind or Bulma to help with CSS grids or flexboxes. 


**Directory Structure:**
I stuck to the MVC pattern as much as possible to keep information separated from each other (e.g. server, styles and components are in different directories).

Following NextJS's project structure, I added on a few things:
- Components directory: Re-usable components that appear on all pages (e.g. Footer)
- Styles directory: Mirrors the "Components" and "pages" directory, but for styles
- Server directory: I added the custom express server within the client folder, along with mock data. That way, it's easy to develop while running only one server rather than two.



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