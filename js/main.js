//Questions Array
const questions = [
  {question: 'Enter Your First Name'},
  {question: 'Enter Your Last Name'},
  {question: 'Enter Your Email Name', pattern: /\S+@\S+\.\S+/},
  {question: 'Create a Password', type: 'password'}
]

//Transition Times
const shakeTime = 100;
const switchTime = 200; //Transition between Questions

// Init Position At First Question
let position = 0;

//Init DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

//EVENTS

//Get Question On DOM Load
document.addEventListener('DOMContentLoaded', getQuestion);

//Next Button Click
nextBtn.addEventListener('click', validate);

//Functions

//Get Question From Array & Add to Markup

function getQuestion(){
  //Get Current Question
  inputLabel.innerHTML = questions[position].question;
  //Get Current type
  inputField.type = questions[position].type || 'text';
  //Get Current Answer
  inputField.value = questions[position].answer || '';
  //Focus
  inputField.focus();

  //Set progress Bar Width - Variable to the questions length
  progress.style.width = (position * 100)/ questions.length + '%';

  //Add User Icon Or Back Arrow Depending On question
  prevBtn.className = position ? 'fas fa-arrow-left': 'fas fa-user';

  showQuestion();
}
//Display Question To User
function showQuestion(){
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = '';
  inputProgress.style.width = '100%';
}

function hideQuestion() {
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = 'none';
  inputGroup.style.border = null;
}

//Transform to Create Shake Motion
function transform (x,y){
  formBox.style.transform = `translate(${x}px, ${y}px)`;

}

//Validate field
function validate(){
  // Make sure pattern matches if there is none
  if(!inputField.value.match(questions[position].pattern || /.+/)){
    inputFail();
  }else{
    inputPass();
  }
}

//Field Input inputFail
function inputFail(){
  formBox.className = 'error';
  // Repeat shake motion - set i number of shakes

  for(let i = 0; i < 6; i++){
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, shakeTime * 6, 0, 0);
    inputField.focus();
  }
}

// Field Input Passed

function inputPass(){

}
