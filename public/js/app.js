
let buttonContinueOne = document.getElementById("buttonContinueOne");

let nombre = document.querySelector(".name");
let email = document.querySelector(".email");
let infoDiv = document.querySelector("#inputs-container");

//get 'p' to add error messages
let errorName = document.getElementById("error-name")
let errorEmail = document.getElementById("error-email")

buttonContinueOne.addEventListener("click", firstStep);

//events
//Remove "error" class from inputs when you click on them
nombre.addEventListener("click", removeErrorNameClass)
email.addEventListener("click", removeErrorEmailClass)

let nameForm;
let correo;
let options = []



function firstStep(event) {
    //Add event listener to first continue btn that checks for empty fields before allowing the user to progress.
    event.preventDefault();
    if (nombre.value == "") {
        nombre.classList.add("error")
        errorName.innerText = "❌ Type your name to continue!"
        errorName.classList.add("error")
    }
    if (email.value == "") {
        email.classList.add("error")
        errorEmail.innerText = "❌ Type your Email to continue!"
        errorEmail.classList.add("error")
    }
    if (!email.value.includes("@")) {
        errorEmail.innerText = "❌ Type valid email!"
        errorEmail.classList.add("error")
        email.classList.add("error")
    }
    if (nombre.value != "" && email.value != "" && email.value.includes("@")) {
        nameForm = nombre.value;
        correo = email.value 
        const listaHtml = `
        <span>Which topics you are interested in?</span>
            <ul class="list-topics">
                <li class="software" name="Software Development">Software Development</li>
                <li class="user" name="User Experience">User Experience</li>
                <li class="graphicDesign" name="Graphic Design">Graphic Design</li>
            </ul>
    `;
        buttonContinueOne.id = "buttonContinueTwo"
        infoDiv.innerHTML = listaHtml;

        const elementosLi = document.querySelectorAll("#inputs-container ul li");
        


        // Añadir evento al hacer clic en cada elemento li
        //falta el boton de finish
        elementosLi.forEach(li => {
            li.addEventListener("click", function() {
                options.push(li.textContent)
                li.classList.toggle("purple");
            });
        });
        let buttonContinueTwo = document.getElementById("buttonContinueTwo");
        buttonContinueTwo.addEventListener("click", secondStep);
        
    }


}
function secondStep(event) {
    event.preventDefault();
    const summary = `
        <span>Summary</span>
        <p class="content-summary">Name: <span class="info-summ">${nameForm}<span></p>
        <p class="content-summary">Email: <span class="info-summ">${correo}<span></p>
        <br>
        <ul class="summary-list">Topics:
            <li class="topic">${options[0]}</li>
            <li class="topic">${options[1]}</li>
            <li class="topic">${options[2]}</li>
        </ul>
    `;
    infoDiv.innerHTML = summary;
    const topics = document.querySelectorAll(".topic");
    topics.forEach((li) => {
        if(li.textContent == "undefined" || li.textContent == undefined){
            li.innerHTML = null;
            li.style.display = "none";
        }
    })
    buttonContinueTwo.id = "confirmButton"
    const confirmButton = document.querySelector("#confirmButton")
    confirmButton.innerText = "Confirm"
    confirmButton.addEventListener("click", (event) =>{
        alert("Registration Complete!!")
    })
}

function removeErrorNameClass(event) {
    event.target.classList.remove("error")
    errorName.innerText = "";
}
function removeErrorEmailClass(event) {
    event.target.classList.remove("error")
    errorEmail.innerText = "";
}