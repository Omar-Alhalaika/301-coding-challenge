'use strict'

let userNumbers = [];
function Numbers(First, Second, Third, Fourth, Fifth) {
    this.First = First;
    this.Second = Second;
    this.Third = Third;
    this.Fourth = Fourth;
    this.Fifth = Fifth;
    userNumbers.push(this);

}
let getDiv = document.getElementById('challenge-2');
let submit = document.getElementById('submit');

submit.addEventListener('submit', resultHandler);

function resultHandler(event) {
    event.preventDefulte();
    let First = event.target.First.value;
    let Second = event.target.Second.value;
    let Third = event.target.Third.value;
    let Fourth = event.target.Fourth.value;
    let Fifth = event.target.Fifth.value;
    let userArray = new Numbers(First, Second, Third, Fourth, Fifth);
    console.log(userArray);
    render();

}
let result = document.getElementById('result');
function render() {
    let pMin = document.createElement('p');
    pMin.textContent = 'Min = ' + Math.min(userArray);
    let pMax = document.createElement('p');
    pMax.textContent = 'Max = ' + Math.max(userArray);
    result.appendChild(pMin);
    result.appendChild(pMax);



}