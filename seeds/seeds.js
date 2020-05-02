const mongoose = require("mongoose");
const db = require("../models/Employee")

mongoose.connect("mongodb://tyler.phopho:Password1%21%0A@cluster0-ucpsu.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

let employees = [
    {
        day: new Date().setDate(new Date().getDate()),
        employee: [
            {
                firstName: "Tyler",
                lastName: "Pho",
                email: "tyler.phopho@gmail.com",
                position: "Web Developer"
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()),
        employee: [
            {
                firstName: "Alec",
                lastName: "Hanley",
                email: "alec.hanley42@yahoo.com",
                position: "Seninor Engineer"
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()),
        employee: [
            {
                firstName: "Jaden",
                lastName: "Chav",
                email: "aaronchav12@gmail.com",
                position: "Data Scientist"
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()),
        employee: [
            {
                firstName: "Billy",
                lastName: "Ganbold",
                email: "billbog@gmail.com",
                position: "Full Stack Developer"
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()),
        employee: [
            {
                firstName: "Tommy",
                lastName: "Mounarath",
                email: "tommom@hotmail.com",
                position: "Engineer"
            }
        ]
    }

];

db.Employee.deleteMany({}).then(() => db.Employee.collection.insertMany(employees))
.then(data => {
    console.log(data.resukt.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});