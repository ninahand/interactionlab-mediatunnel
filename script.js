document.addEventListener('DOMContentLoaded', function() {
    let desktop22Date = document.querySelector('.desktop-22-date');
    let desktopWords = document.querySelector('.desktop-words');
    let tablet22Date = document.querySelector('.tablet-22-date');
    let tabletWords = document.querySelector('.tablet-words');
    let tabletTwo22Date = document.querySelector('.tablet-two-22-date');
    let tabletTwoWords = document.querySelector('.tablet-two-words');
    let mobile22Date = document.querySelector('.mobile-22-date');
    let mobileWords = document.querySelector('.mobile-words');

    desktopWords.style.display = 'none';
    tabletWords.style.display = 'none';
    tabletTwoWords.style.display = 'none';
    mobileWords.style.display = 'none';

    desktop22Date.addEventListener('click', function() {
        if (desktopWords.style.display === 'none') {
            desktopWords.style.display = 'block';
        } else {
            desktopWords.style.display = 'none';
        }
    });

    tablet22Date.addEventListener('click', function() {
        if (tabletWords.style.display === 'none') {
            tabletWords.style.display = 'block';
        } else {
            tabletWords.style.display = 'none';
        }
    });
    tabletTwo22Date.addEventListener('click', function() {
        if (tabletTwoWords.style.display === 'none') {
            tabletTwoWords.style.display = 'block';
        } else {
            tabletTwoWords.style.display = 'none';
        }
    });

    mobile22Date.addEventListener('click', function() {
        if (mobileWords.style.display === 'none') {
            mobileWords.style.display = 'block';
        } else {
            mobileWords.style.display = 'none';
        }
    });
});

//Got some help online with this function 
//https://www.w3schools.com/jsref/prop_style_display.asp
//https://www.shecodes.io/athena/28677-how-to-hide-an-element-until-page-loads#:~:text=To%20hide%20an%20element%20until%20the%20page%20loads%2C%20you%20can,achieved%20using%20the%20DOMContentLoaded%20event.
//then troubleshooted w ChatGPT
