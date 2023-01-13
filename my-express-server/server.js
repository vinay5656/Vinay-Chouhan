
const express = require("express");

const app = express();

app.get("/",function(request,response){
    // response.send("Hi, Guy's");
    response.send("<h1>Hi, Guy's</h1> <p>My name is vinay singh chouhan. Thanks for visiting</p>")
})

app.get("/contact",function(request,response){
    response.send("Contact me at : vinaysinghchauhan5656@gmail.com");
})

app.get("/about",function(request,response){
    response.send("<p>Sir, My name is Vinay Singh Chouhan.<br>I did my BE in Computer Engineering from Thapar Institute of Engineering & Technology, Patiala.<br>I have done a few projects of which one is the smart surveillance system using OpenCV and YOLO.<br>I have done some certifications courses like Data Structure And Algorithm in C++ from Coding Ninjas, Object-oriented Analysis and design from NPTEL, and java from Udemy.<br>I am good at frontend like HTML, CSS , Javascript, Bootstrap, and Reactjs.<br>I am also good at SQL.<br>I have done an internship from wipro.<br>I am good at coding and solved over 500 problems on the code studio.<br>I am having 2ed rank at the CampusLeader board on the codestudio.<br>I have a strong interest in learnig new technology.<br></p>");
})

app.get("/hobbies",function(request,response){
    response.send("<h3>Hobbies</h3><ol><li>Coding</li><li>Food</li><li>Reading</li></ol>")

})
app.listen(3020,function(){
    console.log("Server started on the port 3020");
})

