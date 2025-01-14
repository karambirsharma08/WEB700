const fs = require('fs');

// Define the Data class
class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

// Declare the dataCollection variable
let dataCollection = null;

// Function to initialize the data
function initialize() {
    return new Promise((resolve, reject) => {
        // Read students.json file
        fs.readFile('./data/students.json', 'utf8', (err, studentData) => {
            if (err) {
                reject("unable to read students.json");
                return;
            }

            // Parse student data
            let students = JSON.parse(studentData);

            // Read courses.json file after reading students.json
            fs.readFile('./data/courses.json', 'utf8', (err, courseData) => {
                if (err) {
                    reject("unable to read courses.json");
                    return;
                }

                // Parse course data
                let courses = JSON.parse(courseData);

                // Create a new instance of Data
                dataCollection = new Data(students, courses);

                // Resolve the promise when both files are successfully read
                resolve();
            });
        });
    });
}

// Function to get all students
function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("no results returned");
        }
    });
}

// Function to get all Teaching Assistants (TAs)
function getTAs() {
    return new Promise((resolve, reject) => {
        const TAs = dataCollection.students.filter(student => student.TA === true);
        if (TAs.length > 0) {
            resolve(TAs);
        } else {
            reject("no results returned");
        }
    });
}

// Function to get all courses
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("no results returned");
        }
    });
}

// Export the functions
module.exports = { initialize, getAllStudents, getTAs, getCourses };
