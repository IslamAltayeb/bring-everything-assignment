'use strict';

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const theAge = document.querySelector('#age');
               
myForm.addEventListener('submit',onsubmit);

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (nameInput.value === ''|| emailInput.value ==='' )
    {
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';     
      setTimeout(() => {msg.remove();}, 3000);
      
    }else if(theAge.value < 18){
        msg.classList.add('error');
        msg.innerHTML = 'sorry you can not access here your age is less than 18';
        setTimeout(() => {msg.remove();}, 3000);
    }
    else{
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
     userList.appendChild(li);
  
     //clear fields
     nameInput.value ='';
     emailInput.value = '';
    }
  });

//   go to top button
var myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}