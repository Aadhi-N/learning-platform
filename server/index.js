const express = require('express')
const next = require('next')
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/* Import in-memory DB data - used for quick development */
const progressData = require("./mock-data/in-progress.json");
const coursesData = require("./mock-data/courses") 
const categoriesData = require("./mock-data/life-stages")

app.prepare().then(() => {
    const server = express();
    
    //allow CORS
    server.use(cors());
    
    // parse application/json
    server.use(express.json());
    
    // parse application/x-www-form-urlencoded
    server.use(express.urlencoded({ extended: true }));
    
    
    /* API routes */ 
    server.get("/api/progress", cors(), (req, res) => {
        res.json(progressData);
    });

    server.get("/api/recommendations", (req, res) => {
        let recommendedCourses = coursesData.data.filter(course => {
            return course.recommended
        });
        res.json(recommendedCourses);
    });

    server.get("/api/trending", (req, res) => {
        let trendingCourses = coursesData.data.filter(course => {
            return course.trending
        });
        res.json(trendingCourses);
    });

    server.get("/api/categories", (req, res) => {
        res.json(categoriesData);
    });

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
});