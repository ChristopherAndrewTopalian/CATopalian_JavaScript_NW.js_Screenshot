// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    mainDiv.append(subDiv);

    //-//

    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_NW.js_Screenshot';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian JavaScript NW.js Screenshot';
    theTitle.style.margin = '4px';
    theTitle.style.fontSize = '14px';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.color = 'rgb(140, 140, 140)';
    theTitle.style.textAlign = 'right';
    theTitle.style.textDecoration = 'none';
    theTitle.style.display = 'block';
    theTitle.style.marginLeft = 'auto';
    subDiv.append(theTitle);

    //-//

    subDiv.append(ce('hr'));

    //-//

    let screenshotButton = ce('button');
    screenshotButton.textContent = 'Take Screenshot';
    screenshotButton.onmouseover = function()
    {
        hoverSound();
    };
    screenshotButton.onclick = function()
    {
        clickSound();

        takeScreenshot();
    };
    subDiv.append(screenshotButton);

    //-//

    let saveButton = ce('button');
    saveButton.textContent = 'Save As...';
    saveButton.onmouseover = function()
    {
        hoverSound();
    };
    saveButton.onclick = function()
    {
        clickSound();

        if (ge('theImg'))
        {
            // use the native browser save dialog
            let link = ce('a');
            link.href = ge('theImg').src;
            // set download filename to be last part of image src path
            link.download = ge('theImg').src.split('/').pop();
            link.click();
        }
        else
        {
            alert('No screenshot available to save yet!');
        }
    };
    subDiv.append(saveButton);

    //-//

    subDiv.append(ce('hr'));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

