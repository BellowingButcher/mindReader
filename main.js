//add event to the next button for changing page state
//declare variable as element with id nextBtn
const nextBtn = document.getElementById('nextBtn');
//declare header text
const headText = document.getElementById('hdrText');
//decalre helper text
const helpText = document.getElementById('hlpText');
//declare direction text
const directText = document.getElementById('dirText');
//declare variable for go button
const goBtn = document.getElementById('goBtn');
//declare array of page objects
const page1 = {
    headerText:'I can read your mind!',
    nextBtn:/*(hidden)*/,
    helpText:''/*(hidden)*/,
    directText:''/*(hidden)*/,
    goBtn: /*nextPage functionality*/,
}
const page2 = {
    headerText: 'Pick a number from 01-99',
    nextBtn: /*the nextPage functionality*/,
    helpText:'when you have your number',
    directText:'click next',
    goBtn: /*previousPage*/,
}
const page3 = {
    headerText:'Add both digits together to get a new number',
    nextBtn:/*nextPage functionality*/,
    helpText:'ex: 14 is 1 + 4 = 5',
    directText:'click next to proceed',
    goBtn:/* previousPage functionality*/
}
const page4 = {
    headerText:'Subtract your new number from the original number',
    nextBtn:/*nextPage functionality*/,
    helpText:'Ex: 14 - 5 = 9',
    directText:'click next to proceed',
    goBtn:/*previousPage functionality*/
}
const page5 = {
    headerText:/*array of randomized symbols with matched numbers*/,
    nextBtn:/*nextPage functionality*/,
    helpText:'Find your new number.',
    directText:'Note the symbol beside the number then click reveal',
    goBtn:/*previousPage functionality*/
}
const page6 = {
    headerText:/*the & symbol*/,
    nextBtn:/*hidden*/
    helpText:'Your symbol is:'
    directText:'&'
    goBtn: /*previousPage functionality*/
}




//declare array of pages with page objects
const pages = [page1, page2, page3, page4, page5];
//function for updateing page
function nextPage () {
    //I need this to change the current page to the next pages state


    //change text of h1
    headText.textContent = 'changed header text';
    //change text of helperText
    helpText.textContent = 'changed help text';
    //change text of directionText
    directText.textContent = 'changed direction text';
}
function previousPage () {
    //change state of page to the previous state
    headText.textContent = 'previous text';
    helpText.textContent = 'previous text';
    directText.textContent = 'previous text';
}
//add eventlistener to nextBtn
nextBtn.addEventListener('click', nextPage);
//add eventlistener to goBtn
goBtn.addEventListener('click', previousPage);
