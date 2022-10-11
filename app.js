const Menu = document.querySelector(".menu")
const Sidebar = document.querySelector(".sidebar")
const showmore = document.querySelector(".showmore")
const ShowmoreBtn = document.querySelector(".showmorebtn")
const Like = document.querySelector(".link1")
const NoLike = document.querySelector(".nolike")
// const Main = document.querySelector(".Main_sid")
// const Black = document.querySelector(".black")
let Open = false;

const openClose = () => {
    if (Open === false) {
        Open = true
        Sidebar.style.transform = "translateX(0)"
    } else {
        Open = false
        Sidebar.style.transform = "translateX(-400px)"
    }
    console.log(Open);
}

showmore.style.display = "none"

const ochiq = () => {
    showmore.style.display = "block"
    ShowmoreBtn.style.display = "none"
}
const Close = () => {
    showmore.style.display = "none"
    ShowmoreBtn.style.display = "block"
}

// Like.addEventListener("click", like)
// NoLike.addEventListener("click", nolike)


const like = () => {
    Like.style.background = "black"
}
const nolike = () => {
    NoLike.style.color = "#000"
}
