//masa search bar gede2 ga bisa ngapa2in

const searchButton = document.querySelector(".search-icon")
const searchBar = document.querySelector(".search-input")

function searchOnShopee() {
    let wantedProduct = searchBar.value
    window.open("https://shopee.co.id/search?keyword=" + wantedProduct)
}

searchButton.addEventListener("click", searchOnShopee)

//popup randomiser aja ini, aslinya mau timeoutnya 1 detik tapi kasian usernya entar

const popuplinks = ["https://games.shopee.co.id/farm/index.html", "https://shopee.co.id/m/shopee-live-id", "https://games.shopee.co.id/luckydraw-v2/?game=box&activity=59d3cc7d5e5f7ab8"]
document.querySelector(".itsy-bitsy-x-button").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none"
    let randNum = Math.floor(Math.random() * popuplinks.length)
    setTimeout(() => {
        document.querySelector(".popup a").href = popuplinks[randNum]
        document.querySelector(".popup img").src = "imgassets/gif_" + randNum + ".gif"
        document.querySelector(".popup").style.display = "block"
    }, 10000)
})

// Big thanks to FrontendTips on youtube for the inspiration of the cycling carousel! 

const prevp = document.querySelector(".prevp")
const nextp = document.querySelector(".nextp")
const track = document.querySelector(".carousel-track")
var pdir = 1

function nextinfpage() {
    pdir = 1
    track.style.transform = "translate(-" + 100/7 + "%)";
}

function previnfpage() {
    pdir = -1
    track.style.justifyContent = "flex-end"
    track.style.transform = "translate(" + 100/7 + "%)";
}

nextp.addEventListener("click", nextinfpage)   

prevp.addEventListener("click", previnfpage)

track.addEventListener("transitionend", () => {
    if(pdir === 1) {
        track.appendChild(track.firstElementChild)
    }
    else if (pdir === -1) {
        track.prepend(track.lastElementChild)
    }
    track.style.transition = "none"
    track.style.transform = "translate(0)"
    setTimeout(() => {
        track.style.transition = "all 0.5s"
    }, 10)
})

window.onload = () => {setInterval(nextinfpage, 5000)}

//agak mirip tapi yg ini ga cycling

const prevcat = document.querySelector(".prevcat")
const nextcat = document.querySelector(".nextcat")
const slider = document.querySelector(".categories")
var cdir = -1

nextcat.addEventListener("click", () => {
    cdir = 1
    slider.style.transform = "translate(-" + 300/13 + "%)"
})   

prevcat.addEventListener("click", () => {
    cdir = -1
    slider.style.transform = "translate(0)"
})

slider.addEventListener("transitionend", () => {
    if(cdir === 1) {
        prevcat.style.display = "flex"
        nextcat.style.display = "none"
    }
    else if (cdir === -1) {
        prevcat.style.display = "none"
        nextcat.style.display = "flex"
    }
})