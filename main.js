//add event to the next button for changing page state
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
//make that var = arr
let arr = [];
//repeat simpleSymbolArray 11 times
for(let i=1;i<=11;i++){
    //every loop i want to add simpleSymbolArray to the end of simpleSymbolArray
    arr = arr.concat(simpleSymbolArray);
    //
}

//use arr to do the number loop
let numberSymbolArr = [];
//for every simbol in arr
for (let i=1;i<=arr.length;i++) {
    numberSymbolArr.push(i + ':' + arr[i]);
    //return (`${n}:${arr[n]}`);
    //display a number beside each symbol
    //the number needs to start at 01 and go through 99
    //each number is paired to the next symbol
    //i.e 
        //1-~
        //2-!
        //3-@

}


//declare array of page objects
let state = {
    currentPage: 0,
    pages: [
        {
            headerText:'I can read your mind!',
            nextBtn: ''/*(hidden)*/,
            helpText:''/*(hidden)*/,
            directText:''/*(hidden)*/,
            goBtn: 'Go'/*nextPage functionality*/,
            resetButton: 'reset'
        },
        {
            headerText: 'Pick a number from 01-99',
            nextBtn: 'Next' /*the nextPage functionality*/,
            helpText:'when you have your number',
            directText:'click next',
            goBtn: 'reverse'/*reset icon*/,
            resetButton: 'reset'
        },
        {
            headerText:'Add both digits together to get a new number',
            nextBtn: 'Next' /*nextPage functionality*/,
            helpText:'ex: 14 is 1 + 4 = 5',
            directText:'click next to proceed',
            goBtn: 'reverse'/*reset icon*/,
            resetButton: 'reset'
        },
        {
            headerText:'Subtract your new number from the original number',
            nextBtn: 'Next'/*nextPage functionality*/,
            helpText:'Ex: 14 - 5 = 9',
            directText:'click next to proceed',
            goBtn: 'reverse'/*reset icon*/,
            resetButton: 'reset'
        },
        {
            headerText: numberSymbolArr/*array of randomized symbols with matched numbers*/,
            nextBtn: 'Reveal' /*nextPage functionality*/,
            helpText:'Find your new number.',
            directText:'Note the symbol beside the number then click reveal',
            goBtn: 'reverse'/*reset icon*/,
            reset: 'reset'
        },
        {
            headerText: '' /*the & symbol*/,
            nextBtn: ''/*hidden*/,
            helpText:'Your symbol is:',
            directText: arr[9],
            goBtn: 'reverse'/*reset icon*/,
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
    nextButton.textContent = state.pages[pageNumber].nextBtn;
     // Set helpText to state.pages[0].helpText
    helperText.textContent = state.pages[pageNumber].helpText;
     // Set directText to state.pages[0].helpText
    directerText.textContent = state.pages[pageNumber].directText;
     // Set goBtn text to state.pages[0].goBtn text
    goButton.textContent = state.pages[pageNumber].goBtn;
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
    nextButton.textContent = state.pages[state.currentPage].nextBtn;
    // Set helpText to state.pages[0].helpText
    helperText.textContent = state.pages[state.currentPage].helpText;
    // Set directText to state.pages[0].helpText
    directerText.textContent = state.pages[state.currentPage].directText;
    // Set goBtn text to state.pages[0].goBtn text
    goButton.textContent = state.pages[state.currentPage].goBtn;

    }
    function previousPage () {
        state.currentPage -= 1;
            // Set textcontent of headerText to state.pages[0].headerText
    headText.textContent = state.pages[state.currentPage].headerText;
    // Set nextBtn text to state.pages[0].nextBtn text
    nextButton.textContent = state.pages[state.currentPage].nextBtn;
    // Set helpText to state.pages[0].helpText
    helperText.textContent = state.pages[state.currentPage].helpText;
    // Set directText to state.pages[0].helpText
    directerText.textContent = state.pages[state.currentPage].directText;
    // Set goBtn text to state.pages[0].goBtn text
    goButton.textContent = state.pages[state.currentPage].goBtn;

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