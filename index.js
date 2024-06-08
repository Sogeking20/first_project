const btn_more = document.getElementById("btn_more_read")
const text_content_hiddan = document.getElementById("text_content_hiddan")

btn_more.onclick = function(){
    if (text_content_hiddan.style.display === 'none'){
        text_content_hiddan.style.display ='inline'
        btn_more.innerHTML = `
            <img src="images/expand.svg" alt="">
            <p>Свернуть</p>`
    } else{
        text_content_hiddan.style.display ='none'
        btn_more.innerHTML = `
            <img src="images/expand.svg" alt="">
            <p>Читать&nbspдалее</p>`
    }
}