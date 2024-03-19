let message = document.querySelector("#message");
let font_size = document.querySelector("#font-size");
let txt_color = document.querySelector("#txt-color");
let bg_color = document.querySelector("#bg-color");
let img = document.querySelector("#img-url");
let button = document.querySelector("#button")
let container = document.querySelector(".container")
let generated_card = document.querySelector(".generated-card")
let error = document.querySelector(".error")


generated_card.classList.toggle("hide")
button.addEventListener("click", function () {
    let message_value = message.value
    let font_size_value = font_size.value
    let txt_color_value = txt_color.value
    let bg_color_value = bg_color.value
    let img_value = img.value
    
    

    if (message_value.trim() !== "" || font_size_value.trim() != "" || txt_color_value.trim() != "" || bg_color_value.trim() != "" || img_value.trim() != "")
    {
        container.classList.toggle("hide")
        generated_card.classList.toggle("hide")
        generated_card.innerHTML =
            `<img class = "img" src="${img_value}" alt="img">
            <h4>${message_value}</h1>`
        generated_card.style.color = txt_color_value
        generated_card.style.backgroundColor = bg_color_value

        if(font_size_value == "petit")
        {
            generated_card.style.fontSize =("10px")
        }
        else if(font_size_value == "moyen")
        {
            generated_card.style.fontSize =("15px")
        }
        else 
        {
            generated_card.style.fontSize =("22px")
        }
    }


})