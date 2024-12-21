// Dom events
let button = document.querySelector("button")
let txt = document.querySelector("h2")
button.addEventListener("click", () =>{
button.style.padding = "20px 40px"
button.style.fontSize = "25px"
button.style.color = "red";
button.style.background = "pink";
button.style.borderRadius = "5px";
button.style.border = "none";
button.style.marginTop = "100px"
})
txt.addEventListener("mouseover", () =>{
    txt.style.color = "yellow"
    txt.style.fontSize = "30px"
    button.style.color = "red"
    button.style.fontSize = "20px"
})
txt.addEventListener("mouseout", () => {
    txt.style.color = "blue"
})

let lll = document.querySelector(".lll");
let crd = document.querySelector(".burch");
lll.style.padding = "20px 40px"
lll.style.fontSize = "25px"
lll.style.color = "red";
lll.style.background = "pink";
lll.style.borderRadius = "5px";
lll.style.border = "none";
lll.style.marginTop = "100px"
lll.style.margin = "20px"
crd.style.width = "160px";
crd.style.height = "100px";
crd.style.background = "red";
crd.style.display = "none"
crd.style.margin = "20px"
lll.addEventListener("click", () => {
  if (crd.style.display === "none") {
    crd.style.display = "block"
  }else{
    crd.style.display = "none"
  }
});

let num = document.querySelector("h1")
let btn1 = document.querySelector(".plus")
let btn2 = document.querySelector(".minus")
btn1.style.padding = "20px"
btn1.style.fontSize = "30px"
btn1.style.background = "green"
btn1.style.borderRadius = "5px"
btn1.style.border = "none"
btn1.style.color = "white"
btn2.style.padding = "20px"
btn2.style.fontSize = "40px"
btn2.style.background = "green"
btn2.style.color = "white"
btn2.style.borderRadius = "5px"
btn2.style.border = "none"
let count = 0
num.append(count)
btn1.addEventListener("click", () =>{
    num.innerHTML = count += 1
})
btn2.addEventListener("click", () =>{
    if (count) {
    count--
    }
    num.innerHTML = count
})


let aaa = document.querySelector(".bbb");
let rd = document.querySelector(".ch");
aaa.style.padding = "20px 40px"
aaa.style.fontSize = "25px"
aaa.style.color = "red";
aaa.style.background = "pink";
aaa.style.borderRadius = "5px";
aaa.style.border = "none";
aaa.style.marginTop = "100px"
aaa.style.margin = "20px"
rd.style.width = "180px";
rd.style.height = "100px";
rd.style.background = "red";
rd.style.opacity = "0"
rd.style.margin = "20px"
rd.style.transition = "2s"
aaa.addEventListener("click", () => {
  if (rd.style.opacity === "0") {
    rd.style.opacity = "1"
    rd.style.transform = "scale(0)"
  }else{
    rd.style.opacity = "0"
      rd.style.transform = "scale(1)"
}
});