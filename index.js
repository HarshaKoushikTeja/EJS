const express = require('express')
const path = require('path')

const app = express()

const students = [
    {
        id : 1,
        name : "Yuvaraj Goud",
        branch : "CSE"
    },
    {
        id : 2,
        name : "Vinay Teja",
        branch : "ECE"
    },
    {
        id : 3,
        name : "Varsha Karne",
        branch : "CIV"
    },
    {
        id : 4,
        name : "Bindu Amulya",
        branch : "MECH"
    },
]

app.set("view engine" , "ejs");
app.set("views" , path.resolve('./views'))

app.get('/students',(req,res) => {
    res.render("students" , {
        students : students
    })
})

app.get('/students/:id' , (req,res) => {
    const id = parseInt(req.params.id);

    const student = students.find(std => std.id === id);

    student ? 

    res.render("student",{
        student : student
    })

    :

    res.render("ErrorPage")
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})
