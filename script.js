const products = [

{
id:1,
name:"Fresh Apples",
price:120,
image:"https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
},

{
id:2,
name:"Fresh Bananas",
price:60,
image:"https://images.pexels.com/photos/5945904/pexels-photo-5945904.jpeg"
},

{
id:3,
name:"Milk",
price:80,
image:"https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg"
},

{
id:4,
name:"Bread",
price:50,
image:"https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg"
},

{
id:5,
name:"Tomatoes",
price:40,
image:"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg"
},

{
id:6,
name:"Orange Juice",
price:99,
image:"https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
}

];

const grid =
document.getElementById("productGrid");

let cart = [];

function renderProducts(data){

grid.innerHTML="";

data.forEach(product=>{

grid.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">
₹${product.price}
</p>

<button
class="add-btn"
onclick="addToCart(${product.id})">
ADD
</button>

</div>

</div>

`;

});

}

renderProducts(products);

function addToCart(id){

const item =
products.find(
p=>p.id===id
);

cart.push(item);

updateCart();

}

function updateCart(){

document.getElementById(
"count"
).innerText = cart.length;

const cartItems =
document.getElementById(
"cartItems"
);

let total = 0;

cartItems.innerHTML="";

cart.forEach(item=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">

${item.name}

- ₹${item.price}

</div>
`;

});

document.getElementById(
"total"
).innerText = total;

}

document.getElementById(
"cartBtn"
).onclick = ()=>{

document
.getElementById("cartSidebar")
.classList.add("active");

document
.getElementById("overlay")
.classList.add("active");

};

document.getElementById(
"closeCart"
).onclick = ()=>{

document
.getElementById("cartSidebar")
.classList.remove("active");

document
.getElementById("overlay")
.classList.remove("active");

};

document.getElementById(
"searchInput"
).addEventListener(
"input",
e=>{

const value =
e.target.value.toLowerCase();

const filtered =
products.filter(product=>
product.name
.toLowerCase()
.includes(value)
);

renderProducts(filtered);

});