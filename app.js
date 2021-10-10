const leftIcon = document.querySelector(".fa-less-than")
const rightIcon = document.querySelector(".fa-greater-than")
const banner = document.querySelector("#banner")
rightIcon.addEventListener("click", newPick);

function newPick(e) {

    let arr = [1, 2, 3]

    for (let i = 1; i <= arr.length; i++){

    }
        banner.classList.add("images" + i)
    banner.classList.remove("images" + i - 1)
    console.log("images" + i)


    console.log(banner)
    e.preventDefault();
}

console.log(rightIcon)