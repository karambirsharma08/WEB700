/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*   Name: Karambir Sharma 
*   Student ID: 167923234 
*   Date: 27 Sep, 2024
********************************************************************************/ 

// Require the collegeData module
const collegeData = require('./modules/collegeData');

// Call the initialize function to load students.json and courses.json
collegeData.initialize()
    .then(() => {
        console.log("Initialization successful");        // Success message indicating initialization was successful
        return collegeData.getAllStudents();        // Test the getAllStudents function
    })
    .then(students => {
        console.log(`Successfully retrieved ${students.length} students`);        // Log the number of students
        return collegeData.getCourses();        // Test the getCourses function
    })
    .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);        // Log the number of courses
        return collegeData.getTAs();        // Test the getTAs function
    })
    .then(TAs => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);        // Log the number of TAs
    })
    .catch(err => {
        console.error("Error:", err);        // Handle any errors during initialization or function calls
    });
