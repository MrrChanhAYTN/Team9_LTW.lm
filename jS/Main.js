// Dynamic
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    if(offset > 50){
        this.document.getElementById("header").style.backgroundColor = "black";
        this.document.getElementById("header").style.color = "white";
        this.document.getElementById("user--login-signup").style.backgroundColor = "black";
        const a = document.querySelectorAll("#header a")
        a.forEach(element => {
            element.style.color = 'white';
        });
    }
    if(offset <= 50){
        this.document.getElementById("header").style.backgroundColor = "transparent";
        this.document.getElementById("header").style.color = "black";
        this.document.getElementById("user--login-signup").style.backgroundColor = "white";
        const a = document.querySelectorAll("#header a")
        a.forEach(element => {
            element.style.color = 'black';
        });
    }
})

function regEventShowScroll(e){
    var locationE = e.getClientRects()[0]
    var heightScreen = window.innerHeight;
    if(!(locationE.bottom < 0 || locationE.top > heightScreen)){
        e.classList.add("open");
    }else{
        e.classList.remove("open");
    }
}
var ElementAnimation = document.querySelectorAll(".show-when-sroll");
function checkAnimation(){
    ElementAnimation.forEach(element => { 
        regEventShowScroll(element)
    });
}
window.onscroll = checkAnimation

var listProduct = [
    {
        id: 1,
        image: "image/render1.jpeg",
        name: "Tranmisu",
        price: 300,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"
    },
    {
        id: 2,
        image: "image/render2.webp",
        name: "Cheese Cake",
        price: 260,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"        
    },
    {
        id: 3,
        image: "image/render3.webp",
        name: "Milted Chocolate",
        price: 200,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"        
    },
    {
        id: 4,
        image: "image/render4.jpeg",
        name: "Cake On White Tray",
        price: 109,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"        
    },
    {
        id: 5,
        image: "image/render5.jpeg",
        name: "Blue Cupcakes",
        price: 110,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"        
    },
    {
        id: 6,
        image: "image/render1.jpeg",
        name: "Tranmisu",
        price: 300,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"        
    },
    {
        id: 7,
        image: "image/render2.webp",
        name: "Cheese Cake",
        price: 260,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"        
    },
    {
        id: 8,
        image: "image/render6.webp",
        name: "Chocolate CupcakeS",
        price: 106,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"    
    },
    {
        id: 9,
        image: "image/render7.jpeg",
        name: "Brown Cake",
        price: 190,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"        
    },
    {
        id: 10,
        image: "image/render8.jpeg",
        name: "Ice Cream Dish",
        price: 103,
        type: "Cake",
        amount: 100,
        title: "Product infomation snippet"        
    },
    {
        id: 11,
        image:  "image/render9.webp",
        name:   "dinosaur egg candy",
        price:  80,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 12,
        image:  "image/render10.jpeg",
        name:   "fruits candy",
        price:  100,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 13,
        image:  "image/render11.webp",
        name:   "Heart Shaped Candy",
        price:  90,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 14,
        image:  "image/render12.webp",
        name:   "organge candy",
        price:  50,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 15,
        image:  "image/render13.webp",
        name:   "Pumpkin candy",
        price:  46,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 16,
        image:  "image/render14.webp",
        name:   "socola candy",
        price:  30,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 17,
        image:  "image/render15.jpeg",
        name:   "apple candy",
        price:  20,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 18,
        image:  "image/render11.webp",
        name:   "Heart Shaped Candy",
        price:  90,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 19,
        image:  "image/render12.webp",
        name:   "organge candy",
        price:  50,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 20,
        image:  "image/render16.webp",
        name:   "soft candy",
        price:  10,
        type: "Candy",
        amount: 70,
        title: "Product infomation snippet"
    },
    {
        id: 21,
        image:  "image/render17.jpg",
        name:   "pretzels",
        price:  100,
        type: "Cookie",
        amount:70, 
        title: "Product infomation snippet"
    },
    {
        id: 22,
        image:  "image/render18.jpg",
        name:   "nut crackers",
        price:  100,
        type: "Cookie",
        amount:70, 
        title: "product infomation snippet",
    },
    {
        id: 23,
        image:  "image/render19.jpg",
        name:   "jam biscuits",
        price:  100,
        type: "Cookie",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 24,
        image:  "image/render20.jpg",
        name:   "almond cookie",
        price:  100,
        type: "Cookie",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 25,
        image:  "image/render21.jpeg",
        name:   "Croissants tapioca pearls",
        price:  100,
        type: "Croissants",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 26,
        image:  "image/render22.jpg",
        name:   "Croissants ",
        price:  90,
        type: "Croissants",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 27,
        image:  "image/render23.jpg",
        name:   "Croissants core seed ",
        price:  70,
        type: "Croissants",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 28,
        image:  "image/render24.jpg",
        name:   "Chocolate Croissants  ",
        price:  200,
        type: "Croissants",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 29,
        image:  "image/render25.jpg",
        name:   "Christmas Lollipop  ",
        price:  50,
        type: "Lollipop",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 30,
        image:  "image/render26.jpg",
        name:   "Suger Lollipop  ",
        price:  30,
        type: "Lollipop",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 31,
        image:  "image/render27.jpg",
        name:   "rainbow Lollipop  ",
        price:  20,
        type: "Lollipop",
        amount:70, 
        title: "product infomation snippet",},
    {
        id: 32,
        image:  "image/render28.jpg",
        name:   "Apple Lollipop  ",
        price:  20,
        type: "Lollipop",
        amount:70,
        title: "product infomation snippet"
    }
];
// Name Currenr User
window.onload = function(){
    JSON.parse(localStorage.getItem("listProduct")) == null ? localStorage.setItem("listProduct", JSON.stringify(listProduct)) : ""
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser)
    if(currentUser.name == "ADMINADMIN" && currentUser.pass == "08102003"){
        document.querySelector(".setting").style.display = "block";
    }
    if(currentUser != null){
        document.getElementById("nameUser").innerText = currentUser.name;
    }else{
        document.getElementById("nameUser").innerText = '';
    }
}

// 
function openSubmenu(){
    document.querySelector(".submenu--close").classList.toggle("open");
}
function logOut(){
    localStorage.removeItem("currentUser");
}