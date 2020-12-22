// Adds animation to main heading

var heading = document.getElementById("main_heading");
var headingString = heading.textContent;


// Adds typing animation
var headingAnimationID;
heading.textContent = "";
function headingAnimation1() {
    setTimeout(function() {
        if (heading.textContent.length < headingString.length) {
            heading.textContent = heading.textContent + headingString.charAt(heading.textContent.length);
            headingAnimationID = requestAnimationFrame(headingAnimation1);
        } else {
            cancelAnimationFrame(headingAnimationID);
            headingAnimation2();
        }
    }, 1000 / 60);
}

// Adds cursor blinking animation if page is not in handheld mode
function headingAnimation2() {
    setTimeout(function() {
        if ((window.innerWidth || document.body.clientWidth) > 800) {
            if (heading.textContent.charAt(heading.textContent.length - 1) == "|") {
                heading.textContent = headingString;
            } else {
                heading.textContent = headingString + "|";
            }
        } else {
            if (heading.textContent.charAt(heading.textContent.length - 1) == "|") {
                heading.textContent = headingString;
            }
        }
        requestAnimationFrame(headingAnimation2);
    }, 1000 / 2);
}

headingAnimation1();