const menu2Btn = document.getElementById("menu2Btn")
const menu3Btn = document.getElementById("menu3Btn")
const menu4Btn = document.getElementById("menu4Btn")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")

menu2Btn.addEventListener("mouseover", function () {
  removeMarginClass()
  img2.classList.add("-ml-100%")
  img2.classList.remove("opacity-0")
})

menu3Btn.addEventListener("mouseover", function () {
  removeMarginClass()
  img3.classList.add("-ml-200%")
  img3.classList.remove("opacity-0")
})

menu4Btn.addEventListener("mouseover", function () {
  removeMarginClass()
  img4.classList.add("-ml-300%")
  img4.classList.remove("opacity-0")
})

function removeMarginClass() {
  img2.classList.remove("-ml-100%")
  img2.classList.add("-opacity-0")
  img3.classList.remove("-ml-200%")
  img3.classList.add("-opacity-0")
  img4.classList.remove("-ml-300%")
  img4.classList.add("-opacity-0")
}
