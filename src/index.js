const express = require("express");
const app = express();
const morgan = require("morgan");
const expressLayouts = require('express-ejs-layouts');
const path = require("path");
const port = 3000;
const methodOverride = require('method-override');
const route = require("./routes/index")
const db = require("./config/db");
const bodyParser = require('body-parser');
const { type } = require("express/lib/response");
Object.assign(app.locals, {
    checkLength: function (length) {
        if (length > 0) {
            return true;
        }
        return false;
    },
    sum: function (a, b) {
        return a + b;
    },
    sort: function (field, sort) {
        const typeIcon=(sort.column===field?sort.type:"default");
        const icons={
            default:'oi oi-elevator text-primary',
            asc:'oi oi-sort-descending text-primary ',
            desc:'oi oi-sort-ascending text-primary'
        }
        const types={
            default:"desc",
            asc:"desc",
            desc:"asc"
        }
        const type=types[sort.type];
        const icon=icons[typeIcon];
        return `
            <span class="${icon} icon-sort-column" data-column=${field} data-type=${type}></span>
        `           
    }
}) //function ejs
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, ("resources/views")));
app.use(expressLayouts);
// app.use(morgan('combined')); xem thông tin của request 
app.set('layout', 'layouts/main'); //layout của ejs
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
db.connect();
route(app);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
})
