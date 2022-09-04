// var headerContent = document.getElementById("header");
// var textToAdd = ("JavaScript Made This!!");
// //body.header(textToAdd);
// function addHeader(){
//      document.querySelector("#header").textContent = textToAdd.value
// }
// addHeader()

const header = document.getElementById("header")
header.textContent += "Javascript Made This"
header.style.textAlign = "center"

const headerFive = document.createElement("h5")
headerFive.innerHTML = '<span style="color: lime">Travis</span> made this'
headerFive.style.color = "pink"
header.append(headerFive)



const dropDown = document.querySelector('#theme-drop-down');
const leftMessage = document.querySelectorAll(".left");
const rightMessage = document.querySelectorAll(".right");


dropDown.addEventListener("change", function(){
    if (dropDown.value === "theme-one"){
        for ( i = 0 ; i < leftMessage.length; i++ ){
            leftMessage[i].style.backgroundColor = "burlywood"
            leftMessage[i].style.color = "black"
        }
    }
})

dropDown.addEventListener("change", function(){
    if (dropDown.value === "theme-two"){
        for ( i = 0 ; i < leftMessage.length; i++ ){
            leftMessage[i].style.backgroundColor = "black"
            leftMessage[i].style.color = "white"
        }
    }
})

const clearB = document.querySelector('#clear-button');
const allMessages = document.querySelector('.messages');


clearB.addEventListener("click", function(){
    allMessages.innerHTML=""
})

document.createElement("input")

const textBox = document.querySelector('#input')
const sendButton = document.querySelector('#send-button')
const messagesDiv = document.querySelector(".messages")
const test = document.getElementsByClassName('message')

sendButton.addEventListener("click", function(e){
    e.preventDefault();
    console.log(test.length)
    const newMessage = document.createElement('div')
    newMessage.textContent = textBox.value
    messagesDiv.append(newMessage)
    if (test.length % 2 === 0){
        newMessage.classList.add('message', 'left');
    } else {
        newMessage.classList.add('message', 'right')
    }
})


// const userInput=document.getElementById("input");
// const form=document.message;
// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     //console.log(e.target[0].value);
//     document.getElementsByClassName("#messages").innerHTML += "<div> test </div>"
//     userInput.value = '';
//     //figure out how to clear input after posting it (set default to null string?)
//     //figure out how to post it on sender side (look at the classes and give whichever 
//     // side it's on, assign left or right, but always alternate)
//     //Forms Part 1, 15:24 onward
// })



//         } else if (dropDown.value === "theme-two"){
//             for ( i = 0; i < leftMessage.length; i++ ){
//                 leftMessage[i].style.backgroundColor = "black"
//                 leftMessage[i].style.color = "white"
//             }
//         }        
//     }
// })
    

 

// const themeOne = getElement
// if (ourDropDown.value = "theme-one") {
//     console.log
// }




// var optionsToSelect = ['blue/brown', 'red/black']
// var currentSelect = document.getElementById('theme-drop-down')


// function pickColors() {

// }

// // function seriousToFun() {
//     var html = document.querySelector('html');
//     var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
//     var node;
//     while (node = walker.nextNode()) {
//         node.nodeValue = node.nodeValue.replace(/serious/, 'fun')
//     }
//     document.innerHTML = newHtml1;
// }

// const parElement = document.getElementById("header");
// const textToAdd = document.createTextNode("Travis wrote the Java");

// let headSub = document.querySelector('#header');
// headSub.append("by Travis")

// var headSub = document.createElement("P");

// parentNode.append()
// document.getElementById("header").appendChild(textToAdd);

// function inserAfter(lineTwo)

// function insertAfter(referenceNode, newNode) {
//     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
//   }

//   var el = document.createElement("span");
//   el.innerHTML = "Travis made this";
//   var div = document.getElementById("header");
//   insertAfter(div, el);

// const headCallCard = document.createElement('p')
// elem.style.cssText =