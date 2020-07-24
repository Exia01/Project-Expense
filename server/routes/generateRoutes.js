const express = require('express');
const router  = express.Router();
const path    = require('path');
const fs      = require('fs');
const csvtojson = require('csvtojson');

router.get('/', (req, res) => {
    // This block of code will read from the "example.csv" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"

    // Read our test file into the buffer
    // **** ERROR reading the path of the file in ERROR ***** //
    fs.readFile('things.txt', 'utf8', function(err, data) {
        // If there is an error, Log it 
        if(err) {
            console.log("Read Failed");
            return console.log(err);
        }
        // Let's see the data
        console.log("Data: " + data);
        console.log("---------------");
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(',');

        // We will then re-display the content as an array for later use.
        console.log("Data Array: " + dataArr);
        console.log('---------------');

        console.log(dataArr);
        console.log('---------------');


        // Break the string down by comma separation and store the contents into the output array.
        var output = data.split(',')

        // Loop Through the newly created output array
        for (var i = 0; i < output.length; i++) {
            // Print each element (item) of the array/
            console.log(output[i])
        }


        // console.log(output);
        res.status(200).json({ gen: output });
    });


    // res.render('generate/index');
});


router.get('/convert', (req, res) => {

    // Need to Fix the PATH to File
    // const filePath = path.parse(__dirname + "/example.csv");
    // console.log(filePath);
    console.log(path.join(__dirname, '../../client/public/uploads/example.csv'))
    const csvFilePath = path.join(__dirname, '../../client/public/uploads/example.csv')
    csvtojson()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            // create an Array to hold the JSON data being parsed
            let dataArr = [];

            jsonObj.forEach(item => {
                // console.log("---------------------");
                // console.log(item);
                dataArr.push(item);
            })

            console.log("CSV file converted to JSON Object");

            // console.log("---------------------");
            // console.log("Data: ***********");
            // console.log(dataArr);
            
            // *** TESTING *** Parse through data
            // console.log("**********************");
            // console.log("Data: at index 0");
            // console.log(dataArr[0]);
            // console.log("Student Name: " + dataArr[0]['Student Name']);
            // console.log("Gender: " + dataArr[0]['Gender']);
            // console.log("Class Level: " + dataArr[0]['Class Level']);
            // console.log("Home State: " + dataArr[0]['Home State']);
            // console.log("Major: " + dataArr[0]['Major']);
            // console.log("Activities: " + dataArr[0]['Extracurricular Activity']);
            // console.log("**********************");
            // *** TESTING *** 

            // Send a RESPONSE
            // res.send("Convert or perish");
            res.send(dataArr)
        });
});

module.exports = router;