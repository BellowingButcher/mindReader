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
