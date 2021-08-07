//getting all required elements
const inputbox = document.querySelector(".inputfeild input");
const addbtn = document.querySelector(".inputfeild button");
const todolist  = document.querySelector(".todolist");
const clearAllbtn = document.querySelector(".footer");
// const submitBtn = document.getElementById("btn");

// submitBtn.addEventListener ("submit",  addsubmit);
//  function addsubmit(){
//    if(userinput = signupData){
//      console.log(localStorage.getItem("signupData"));
//    }
//  }

inputbox.onkeyup = ()=>{
  let userData = inputbox.value; //getting  user entered value 
if(userData.trim() != 0){ //if user values are not white spaces
    addbtn.classList.add("active"); //active the add button
}else{
  addbtn.classList.remove("active"); //unactive the add button
}
  }
  showtask();//calling showTasks function


 // if user click on add button
addbtn.onclick  = ()=>{
  let userData =inputbox.value;
  let getlocalstorage= localStorage.getItem("new todo");//getting local storage
  if(getlocalstorage==null){                          //if localstorage is null
      listArr =[];                                    //creating blank array
  }else{
    listArr =JSON.parse(getlocalstorage); //transforming json string into js object
  }
  listArr.push(userData);//pushing or adding user data
  localStorage.setItem("new todo", JSON.stringify(listArr)); //transforming js object into a json string
  showtask();//calling showTasks function
  addbtn.classList.remove("active"); //unactive the add button
}

//function to ask tasklist inside ul
function showtask(){
  let getlocalstorage= localStorage.getItem("new todo");//getting local storage
  if(getlocalstorage==null){                          //if localstorage is null
      listArr =[];                                    //creating blank array
  }else{
    listArr =JSON.parse(getlocalstorage); //transforming json string into js object
  }
  //to show the number of pendingtask 
  const pendingNumb  =document.querySelector(".pendingNumb");
  pendingNumb.textContent =listArr.length; //passing the length value pendingNumb
  if(listArr.length  > 0){ //if array lengh is greater that 0
    clearAllbtn.classList.add("active"); // active the clear button
  }else{
    clearAllbtn.classList.remove("active");// unactive the clear button
  }


  let newliTag  =""; //for our new data
  listArr.forEach((element ,index )=> {
    newliTag+=`<li>${element}<span onclick="deleteTask(${index})";><i class="bx bx-trash" ></i></span></li>` 
  });
  todolist.innerHTML  = newliTag;  //adding new li inside ul tag
  inputbox.value ="";// once task is added leave input feild blank
}

//delete task function
function deleteTask(index) {
  let getlocalstorage= localStorage.getItem("new todo");
  listArr =JSON.parse(getlocalstorage);
  listArr.splice(index,1);//delete the particular indexed li
  //after remove the li again  update the local storage
  localStorage.setItem("new todo", JSON.stringify(listArr)); //transforming js object into a json string
  showtask();//calling showTasks function
}

//clear all
clearAllbtn.onclick  = () =>{
  listArr =[];//empty an array
//after clearing all task again update the local storage
localStorage.setItem("new todo", JSON.stringify(listArr)); //transforming js object into a json string
  showtask();//calling showTasks function
}

//to store signup page on localstorage
// const signup = e => {
//   let signupData = {
//     fname:document.getElementById("fname").value,
//     lname:document.getElementById("lname").value,
//     email:document.getElementById("email").value,
//     pwd:document.getElementById("pwd").value,
//   }
//   localStorage.setItem("signupData" ,JSON.stringify(signupData));
//   console.log(localStorage.getItem("signupData"));
//   e.preventDefault();
//   addsubmit();
// }

// //to store login page on local storage
// const login = e => {
//   let loginData ={

//   }
// }
// grab the ids
  var fname =document.getElementById("fname").value;
  var lname =document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var pwd =  document.getElementById("pwd").value;

  //storing inputs from signup form
  function store() {
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("lname", lname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("pwd", pwd.value);
  }
  //check if enterd details is thesame with login details

  function check() {
    var storedEmail = localStorage.getItem("email");
    var storedPw = localStorage.getItem("pwd");
     

  //inputs from login
  var userEmail = document.getElementById("userEmail");
  var userPw = document.getElementById("userPw");
  //confirm stored details in signup is equal to details from login
  if(userEmail.value == storedEmail && userPw.value == storedPw){
    alert("you are login");
  } else{
    alert("wrong details")
  }
}