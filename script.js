let btn1 = document.querySelector("#myBtn");
let btn2 = document.querySelector("#myBtn2");
let copyDiv = document.querySelector(".copyCode");

let rgb1 = "#00473"
let rgb2 = "#54d542"

let hexValues = () =>{
    let myHexaValues = "0123456789abcdef";
    let color = "#"
    for (let i =0; i < 6; i++){
        color = color + myHexaValues[Math.floor(Math.random() *16)]
    }
    return color;
}

let handleBtn1 = () => {
    rgb1 = hexValues();
    btn1.style.backgroundColor = rgb1;
    btn1.innerText = rgb1.toUpperCase();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`
    copyDiv.innerHTML = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`
}

let handleBtn2 = () => {
    rgb2 = hexValues();
    btn2.style.backgroundColor = rgb2;
    btn2.innerText = rgb2.toUpperCase();
    document.body.style.backgroundImage = `linear-gradient(to left, ${rgb1},${rgb2})`
    copyDiv.innerHTML = `background-image:linear-gradient(to left, ${rgb1},${rgb2})`
}

copyDiv.addEventListener("click",() => {
    navigator.clipboard.writeText(copyDiv.innerText)
    alert("BackGround Image Link Copied")
} )

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);