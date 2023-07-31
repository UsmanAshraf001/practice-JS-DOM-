// Simple function in js
// function avg (a, b){
// c= (a+b)/2;
// return c;
// }
// u1= avg(4, 6);
// u2= avg(10, 12);
// console.log(u1, u2);


//  d=[1,2,44,55,374,90]
//  console.log( d.sort());


// Let myDate = new Date();
// console.log(myDate.getday());

//                       Q=get values from input box in javascript (video 15 ali mughal)

// function getName(){
//     var name = document.getElementById("name");
//     alert(name.value)
//     name.value = ""
// }
//                    Q ==input field py default name set ho jy
// function setName(){
// var name = document.getElementById("name")
// name.value="usman";
// }
// setName()

// <!-- CALCULATOR USING JS -->
// function getNumber(num){
//     var result = document.getElementById("result");
//     result.value += (num)
// }

// function clearResult(){
//     var result=document.getElementById("result");
//     result.value="";
// }

// function getResult(){
//     var result=document.getElementById("result");
//     result.value = eval(result.value)
// }

// <!-- "DOM PRACTICE" -->

// creating html using js
// var p = document.createElement('h1')
// var text = document.createTextNode("Government College University Faislabad")
//  p.appendChild(text)
// console.log(p)

// var main = document.getElementById('main')
// main.appendChild(p)

// Another Example

// function addMessage(){
//     var val=document.getElementById('val')
//     var p=document.createElement('p')
//     var text=document.createTextNode(val.value)
//     p.appendChild(text)
//     var message=document.getElementById('message')
//     message.appendChild(p)
//     val.value=""
// }

// TODO APP PRACTICE

var list = document.getElementById("list");

function addTodo(){
var todo_item = document.getElementById("todo-item");

// Create li Tag with textNode
var li = document.createElement('li')
var liText = document.createTextNode(todo_item.value)
li.appendChild(liText)

// Create delete Button Tag with textNode
var delBtn = document.createElement("Button")
var delText = document.createTextNode("Delete")
delBtn.setAttribute("class","Btn")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)

// Create Edit Button Tag with textNode
var editBtn = document.createElement("Button")
var editText = document.createTextNode("Edit")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText)

li.appendChild(delBtn)
li.appendChild(editBtn)

list.appendChild(li)
todo_item.value = "";
}
 
// Function of Delete Button
function deleteItem(e){
e.parentNode.remove()
}

// Function of Delete Button
function editItem(e){
var val = e.parentNode.firstChild.nodeValue;
var editValue = prompt("Enter edit value",val)
e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll(){
    list.innerHTML = "";
}