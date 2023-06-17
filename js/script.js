/*
BASIC
if (containerElement.classList.contains('hidden')) {
    containerElement.classList.remove('hidden');
} else {
 containerElement.classList.add('hidden');
}
*/

/* 
SHORTER
function myFunction() {
    let containerElement = document.getElementById('container');
containerElement.classList.toggle('hidden');
};
*/

function myFunction() {
document.getElementById('container').classList.toggle('hidden');
};