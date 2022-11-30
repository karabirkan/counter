// divs
const mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);
const textOutput = document.createElement("div");
mainDiv.appendChild(textOutput);
const buttonDiv = document.createElement("div");
mainDiv.appendChild(buttonDiv);

//header & paragragrap
const header = document.createElement("h1");
textOutput.appendChild(header);
const counter = document.createElement("p");
textOutput.appendChild(counter);





//button elements
const decrease = document.createElement("button");
buttonDiv.appendChild(decrease);
const reset = document.createElement("button");
buttonDiv.appendChild(reset);
const increase = document.createElement("button");
buttonDiv.appendChild(increase);


// text
header.textContent = "Counter";
decrease.innerHTML = "Decrease";
increase.innerHTML = "Increase";
reset.innerHTML = "Reset";
counter.innerHTML = "0";

let count = 0;

// attribute 

decrease.setAttribute("class", "button decrease");
increase.setAttribute("class", "button increase");
reset.setAttribute("class", "button reset");
counter.setAttribute("id", "value")
buttonDiv.setAttribute("class", "buttonDiv")
header.setAttribute("id" ,"header")

// all button function + count + color

const allBtn = document.querySelectorAll('.button');
allBtn.forEach(function (button) {

    button.addEventListener("click", function (e) {

        const calc = e.target.classList;

        if (calc.contains('decrease')) {
            count--;
            counter.textContent = count;
        }

        else if (calc.contains("increase")) {

            count++;
            counter.textContent = count;

        }

        if (calc.contains('reset')) {

            count = 0;
            counter.textContent = 0;


        }

        if (count < 0) {

            value.style.color = "#ff7c7c";
        }


        if (count > 0) {

            value.style.color = "#74ffbc";
        }

        if (count === 0) {

            value.style.color = "black";
        }

    })
})


