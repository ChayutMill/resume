
//1:add skill
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}

function addListAfterClick() {
    if (inputLength() > 0){
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);


//2:edit name
document.getElementById('name').innerHTML = localStorage['title'] || 'Chayut Rodjanakitjarak';

setInterval(function() {
    localStorage['title'] = document.getElementById('name').innerHTML;
}, 1000);

//3:change bgColor

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');


btn1.addEventListener('click', function() {
    bgHead.style.backgroundColor = "black";
});

btn2.addEventListener('click', function() {
    bgHead.style.backgroundColor = "gray";
});

btn3.addEventListener('click', function() {
    bgHead.style.backgroundColor = "white";
});

