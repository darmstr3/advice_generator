const adviceBtn = document.getElementById("advice-btn");
const adviceDiv = document.getElementById("advice");
const adviceNum = document.getElementById("advice_number");

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            adviceDiv.innerText = data.slip.advice;

            adviceNum.innerText = `Advice # ${data.slip.id}`;
        })
        .catch(error => console.error(error));

}

document.addEventListener('DOMContentLoaded', getAdvice);
adviceBtn.addEventListener('click', getAdvice);



// adviceBtn.addEventListener("click", function () {
//     fetch("https://api.adviceslip.com/advice")
//         .then(response => response.json())
//         .then(data => {
//             adviceDiv.innerText = data.slip.advice;

//             adviceNum.innerText = `Advice # ${data.slip.id}`;
//         })
//         .catch(error => console.error(error));
// });


