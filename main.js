//add event to the next button for changing page state
//declare variable as element with id nextBtn
const nextBtn = document.getElementById('nextBtn');
//declare header text
const headText = document.getElementById('hdrText');
//decalre helper text
const helpText = document.getElementById('hlpText');
//declare direction text
const directText = document.getElementById('dirText');
//function for updateing page
function updatePage () {
    //change text of h1
    headText.textContent = 'changed header text';
    //change text of helperText
    helpText.textContent = 'changed help text';
    //change text of directionText
    directText.textContent = 'changed direction text';
}
nextBtn.addEventListener('click', updatePage);
