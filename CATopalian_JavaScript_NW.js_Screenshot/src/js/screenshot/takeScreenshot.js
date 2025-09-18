// takeScreenshot.js

// npm install -g screenshot-desktop

// let screenshot = require('screenshot-desktop');

//----//

function takeScreenshot()
{
    // generate a unique date time string
    let now = new Date();

    let year = now.getFullYear();

    let month = (now.getMonth() + 1).toString().padStart(2, '0');

    let day = now.getDate().toString().padStart(2, '0');

    let hours = now.getHours().toString().padStart(2, '0');

    let minutes = now.getMinutes().toString().padStart(2, '0');

    let seconds = now.getSeconds().toString().padStart(2, '0');

    let fileName = 'screenshots/' + year + '-' + month + '-' + day + '_' + hours + '-' + minutes + '-' + seconds + '.png';

    //----//

    // take the screenshot
    screenshot({ filename: fileName })
    .then(function(imgPath) 
    {
        console.log('saved screenshot to', imgPath);

        // remove previous image if it exists
        if (ge('theImg'))
        {
            ge('theImg').remove();
        }

        //-//

        // create img element to display screenshot
        let theImg = ce('img');
        theImg.id = 'theImg';
        theImg.src = fileName;
        theImg.style.width = '300px';
        ba(theImg);
    })
    .catch(function(err) 
    {
        console.error(err);
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

