//declare variable as element with id nextBtn
const nextButton = document.getElementById('nextBtn');
//declare header text
const headText = document.getElementById('hdrText');
//decalre helper text
const helperText = document.getElementById('hlpText');
//declare direction text
const directerText = document.getElementById('dirText');
//declare variable for go button
const goButton = document.getElementById('goBtn');
//declare reset button
const resetButton = document.getElementById('resetButton');
//declare symbol array
let simpleSymbolArray =   [
                    '~',
                    '!',
                    '@',
                    '#',
                    '$',
                    '%',
                    '^',
                    '&',
                    '*',
                    ];
//declare empty array for building the full array of 99
let arr = [];
//repeat simpleSymbolArray 11 times
for(let i=1;i<=11;i++){
    //every loop i want to add simpleSymbolArray to the end of arr
    arr = arr.concat(simpleSymbolArray);
}

//use arr to do the number loop
//declare empty array for pushing the symbols array plus numbers
let numberSymbolArr = [];
//for loop to count every symbol in arr and then add the number next to its corresponding symbol
//i starts at 0
//it incriments by one until i is less than or equal to the length of array arr
for (let i=0;i<=arr.length;i++) {
    //use my empty array to push my new array to
    //this was my attempt to make the list look good
    numberSymbolArr.push('|' + i + '-' + arr[i] + '|');
    //display a number beside each symbol
    //each number is paired to the next symbol
    //i.e 
        //1-~
        //2-!
        //3-@

}


//declare array of page objects
//gonna use state as main trunk
let state = {
    //current page of the main display of our program
    currentPage: 0,
    //this is an array of objects
    //I want my objects to be the different states of each page that will be displayed
    //each page should have the same key value pairs
    pages: [
        //page 1
        {
            headerText:'I can read your mind!',
            nextBtn: ''/*(hidden)*/,
            helpText:''/*(hidden)*/,
            directText:''/*(hidden)*/,
            goBtn: '<i class="bi bi-youtube"></i>Start Here!',
            resetButton: 'reset'
        },
        //page 2
        {
            headerText: 'Pick a number from 01-99',
            nextBtn: '<i class="bi bi-forward"></i>',//insert icon for button
            helpText:'when you have your number',
            directText:'click forward arrow. If you wish to go back, press the counterclockwise icon',
            goBtn: '<i class="bi bi-arrow-counterclockwise"></i>',//insert icon for button
            resetButton: 'reset'
        },
        //page 3
        {
            headerText:'Add both digits together to get a new number',
            nextBtn: '<i class="bi bi-forward"></i>',//insert icon for button
            helpText:'ex: 14 is 1 + 4 = 5',
            directText:'click forward arrow. If you wish to go back, press the counterclockwise icon',
            goBtn: '<i class="bi bi-arrow-counterclockwise"></i>',//insert icon for button
            resetButton: 'reset'
        },
        //page 4
        {
            headerText:'Subtract your new number from the original number',
            nextBtn: '<i class="bi bi-forward"></i>',//insert icon for button
            helpText:'Ex: 14 - 5 = 9',
            directText:'click forward arrow. If you wish to go back, press the counterclockwise icon',
            goBtn: '<i class="bi bi-arrow-counterclockwise"></i>',//insert icon for button
            resetButton: 'reset'
        },
        //page 5
        {
            headerText: numberSymbolArr/*array of randomized symbols with matched numbers*/,
            nextBtn: 'Reveal',//insert icon for button
            helpText:'Find your new number.',
            directText:'Note the symbol beside the number then click reveal',
            goBtn: '<i class="bi bi-arrow-counterclockwise"></i>',//insert icon for button
            reset: 'reset'
        },
        //page 6
        {
            headerText: 'Your symbol is ' + arr[9] ,
            nextBtn: '',//insert icon for button
            helpText:'',
            directText:'' ,
            goBtn: '<i class="bi bi-arrow-counterclockwise"></i>',//insert icon for button
            resetButton: 'reset'
        }
    ],
}


//declare currentPage as variable
let pageNumber = state.currentPage;
//declare array of pages with page objects
// const pages = [page1, page2, page3, page4, page5];
// pages[0] => page1
// pages[1] => page2
//function for original page
function ogPage () {
    state.currentPage = 0;
     // Set textcontent of headerText to state.pages[0].headerText
    headText.textContent = state.pages[pageNumber].headerText;
     // Set nextBtn text to state.pages[0].nextBtn text
    nextButton.innerHTML = state.pages[pageNumber].nextBtn;
     // Set helpText to state.pages[0].helpText
    helperText.textContent = state.pages[pageNumber].helpText;
     // Set directText to state.pages[0].helpText
    directerText.textContent = state.pages[pageNumber].directText;
     // Set goBtn text to state.pages[0].goBtn text
    goButton.innerHTML = state.pages[pageNumber].goBtn;
}
//function for updateing page
function nextPage () {
    //I need this to change the current page to the next pages state
    // Take state.pages[state.currentPage] incremented by 1
    state.currentPage += 1;

    // =========
    // FROM JOSH: you could (in the local scope of this function) define
    // a variable like let pageNumber = state.currentPage after you increment state.pageNumber above
    // then use that pageNumber like you're already doing.
    // OR
    // Just change all the pageNumbers here to state.currentPage
    // =========
    // Decided to just replace all pageNumbers



    // Set textcontent of headerText to state.pages[0].headerText
    headText.textContent = state.pages[state.currentPage].headerText;
    // Set nextBtn text to state.pages[0].nextBtn text
    nextButton.innerHTML = state.pages[state.currentPage].nextBtn;
    // Set helpText to state.pages[0].helpText
    helperText.textContent = state.pages[state.currentPage].helpText;
    // Set directText to state.pages[0].helpText
    directerText.textContent = state.pages[state.currentPage].directText;
    // Set goBtn text to state.pages[0].goBtn text
    goButton.innerHTML = state.pages[state.currentPage].goBtn;

    }
    function previousPage () {
        state.currentPage -= 1;
            // Set textcontent of headerText to state.pages[0].headerText
    headText.textContent = state.pages[state.currentPage].headerText;
    // Set nextBtn text to state.pages[0].nextBtn text
    nextButton.innerHTML = state.pages[state.currentPage].nextBtn;
    // Set helpText to state.pages[0].helpText
    helperText.textContent = state.pages[state.currentPage].helpText;
    // Set directText to state.pages[0].helpText
    directerText.textContent = state.pages[state.currentPage].directText;
    // Set goBtn text to state.pages[0].goBtn text
    goButton.innerHTML = state.pages[state.currentPage].goBtn;

    }
    //eventlistener to initialize page[0]
    document.addEventListener('DOMContentLoaded', () => {ogPage()});
    //add eventlistener to nextBtn
    nextButton.addEventListener('click', nextPage);
    //add eventlistener to goBtn
    goButton.addEventListener('click', () => {
        console.log(state.currentPage);
        //if page number is 0 'first on in the array'
        if (state.currentPage === 0) {
            //run function next page
            nextPage();
            return;
        };
        // if pageNumber is greater than 0
        if (state.currentPage > 0) {
            //run function previousPage
            previousPage();
            return;
        }
    });
    resetButton.addEventListener('click', ogPage);