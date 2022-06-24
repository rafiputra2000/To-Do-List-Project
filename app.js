const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy food", "Cook food", "Eat food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    let day = today.toLocaleDateString("id-ID", options);

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
    res.render("list", {
        kindOfDay: day,
        listNewItem: items
    
    });
    
});

app.post('/', function (req,res){
    let item = req.body.listItem;

    items.push(item);

    res.redirect('/');

});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});