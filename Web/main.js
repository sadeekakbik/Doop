// Start landing
// language gen
let langbtn = document.querySelector(".landing .header ul li.lang a");
let langBox = document.querySelector(".landing .header ul li.lang .lang-box");
langbtn.onclick = ()=>{
    langBox.classList.toggle("show")
    langbtn.classList.toggle("active")
}
document.onclick = (el)=>{
    if(el.target != langbtn){
        langBox.classList.remove("show")
        langbtn.classList.remove("active")
    }
}
//toggle menu
let linksMenu = document.querySelector(".landing .header ul");
let landing = document.querySelector(".landing .container");
let burgerMenu = document.querySelector(".landing .header .burger-icon");
burgerMenu.onclick = ()=>{
    linksMenu.classList.toggle("show")
    burgerMenu.classList.toggle("close")
}
// End landing
// Start gallery
let hiddenGallBox = document.querySelectorAll(".gallery .gall-box.hidden");
let hidImgBtn = document.querySelector(".gallery .gall-show");
hidImgBtn.onclick = () => {
    hiddenGallBox.forEach((el)=>{
        el.classList.toggle("hidden");
    })
    if(hidImgBtn.textContent != "Show Less."){
        hidImgBtn.textContent = "Show Less."
    }else{
        hidImgBtn.textContent = "Show More."
    }
}
// End gallery
// Start news
let newsNav = document.querySelector(".news .news-nav .news-cont");
let newsRbtn = document.querySelector(".news .container .arrows .right");
let newsLbtn = document.querySelector(".news .container .arrows .left");
if(window.screen.width > 1100){
    newsRbtn.onclick = ()=>{
        newsSild();
    }
    newsLbtn.onclick = ()=>{
        newsSild();
    }
    function newsSild(){
        if(newsNav.style.transform == "translateX(-1140px)"){
            newsNav.style.transform = "translateX(0)";
        }else{
            newsNav.style.transform = "translateX(-1140px)";
        }
    }
    setInterval(newsSild, 8000);
}
// End news
//functions
function addActive(parentEle,className){
    parentEle.forEach(el => {
        el.onclick = ()=>{
            parentEle.forEach(elem=>{
                elem.classList.remove(className)
            })
            el.classList.add(className)
        }
    });
}
//functions