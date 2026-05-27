const products = [
{
id:1,
name:"Laptop",
price:50000,
image:"https://via.placeholder.com/250x180?text=Laptop"
},
{
id:2,
name:"Mobile",
price:20000,
image:"https://via.placeholder.com/250x180?text=Mobile"
},
{
id:3,
name:"Headphones",
price:3000,
image:"https://via.placeholder.com/250x180?text=Headphones"
},
{
id:4,
name:"Smart Watch",
price:5000,
image:"https://via.placeholder.com/250x180?text=Watch"
}
];

let cart=[];

const productContainer =
document.getElementById("productContainer");

function displayProducts(){

productContainer.innerHTML="";

products.forEach(product=>{

productContainer.innerHTML += `
<div class="product">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">
Add To Cart
</button>
</div>
`;
});
}

function addToCart(id){

const product =
products.find(p=>p.id===id);

cart.push(product);

updateCart();
}

function updateCart(){

const cartItems =
document.getElementById("cartItems");

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">
<span>
${item.name} - ₹${item.price}
</span>

<button
class="remove-btn"
onclick="removeItem(${index})">
Remove
</button>
</div>
`;
});

document.getElementById("cartCount")
.innerText=cart.length;

document.getElementById("totalPrice")
.innerText=total;
}

function removeItem(index){

cart.splice(index,1);

updateCart();
}

function checkout(){

if(cart.length===0){
alert("Cart is empty");
return;
}

alert("Order placed successfully!");

cart=[];

updateCart();
}

function login(){

const username=
document.getElementById("username").value;

const role=
document.getElementById("role").value;

if(username===""){
alert("Enter username");
return;
}

localStorage.setItem("user",username);
localStorage.setItem("role",role);

document.getElementById("welcome")
.innerText =
`Welcome ${username} (${role})`;
}

window.onload=()=>{

displayProducts();

const user=
localStorage.getItem("user");

const role=
localStorage.getItem("role");

if(user){

document.getElementById("welcome")
.innerText=
`Welcome ${user} (${role})`;
}
};