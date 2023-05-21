function formHandler(){
    console.log('running formHandler');
    const form = document.querySelector("form");
    const messageError = document.querySelector("#message + span.error");
    const message = document.getElementById("message");
    
    const showError = () => {
        if (message.validity.valueMissing) {
            messageError.textContent = "You need to enter a message address";
        } else if (message.validity.valueMissing) {
            messageError.textContent = "Entered value needs to be a message address.";
        } else if (message.validity.tooShort) {
            messageError.textContent = "message should be at least ${message.minLength} characters";
        }
        messageError.className = "error active";
    }
    message.addEventListener("input", (event)=>{
        console.log('input fired');
    })
    form.addEventListener("submit", (event) => {
        if (!message.validity.valid) {
            showError();
            event.preventDefault();
        }
    })
}

function onLoadHandler(params) {
    console.log("onLoadHandler called");
    const form = document.querySelector("form");
    console.log("form:", form)
}
// window.onload = () => {
//     console.log("page is fully loaded onload");
// }

// window.addEventListener("load", onLoadHandler);

// window.removeEventListener("load", onLoadHandler);

if (document.readyState === "loading") {
    //Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", formHandler);
} else {
    //DOM ContentLoaded has already fire
    formHandler();
}