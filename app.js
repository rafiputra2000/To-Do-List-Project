const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + ("/date.js"));

const app = express();

const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

console.log(date);


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){

    const day = date.getDate();
    
    res.render("list", {
        titleOfList: day,
        listNewItem: items
    });

    // let currentToday = today.getDay();
    // let day = "";

    // // res.send("this day " + currentToday);
    // switch (currentToday) {
    //     case 0:
    //         day="Minggu"
    //         break;
    //     case 1:
    //         day="Senin"
    //         break;
    //     case 2:
    //         day="Selasa"
    //         break;
    //     case 3:
    //         day="Rabu"
    //         break;
    //     case 4:
    //         day="Kamis"
    //         break;
    //     case 5:
    //         day="Jumat"
    //         break;
    //     case 6:
    //         day="Sabtu"
    //         break;
    
    //     default:
    //         console.log("Error: This current day is equal to " + currentToday)
    //         break;
    // }

    // if(currentToday === 6 || currentToday === 0){
    //     // res.send("yeay this a weekend");
    //     day ="weekend";
    // } else {
    //     // res.send("This day for work");
    //     day="weekday"
    // }
    

});

app.post('/', function (req,res){
    let item = req.body.listItem;

    console.log(req.body);

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect('/work');

    } else {
        items.push(item);
        res.redirect('/');

    }
    
    
});

app.get('/work', function (req,res){
    res.render("list", {
        titleOfList: "Work List",
        listNewItem: workItems
    });
});

app.get('/about', function(req,res){
    res.render("about");

});

// app.post('/work', function (req,res){
//     let item = req.body.listItem;
//     workItems.push(item);
//     res.redirect('/work');

// });

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});