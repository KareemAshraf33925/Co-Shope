// open -close Basket and nav
// identifcation of variable
const Basket=document.querySelector(".basket");
const bottom_nav = document.querySelector(".bottom-nav");

function open_cart(){
    Basket.classList.toggle("active")
}
/*-----------------------------------------------*/
function opennav(){
    bottom_nav.classList.add("active");
}
/*----------------------------------------------*/
function closenav(){
    bottom_nav.classList.remove("active");
}
/*----------------------------------------------*/
// add product to basket
// identifcation of varaible
const carts = document.querySelector(".carts");
let basketProducts = JSON.parse(localStorage.getItem("basket")) || [] ;

fetch("../products/products.json").then(respond => respond.json()).then( product =>{
    const Add = document.querySelectorAll(".add");
    Add.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            let currentId = e.target.getAttribute("data-id");
            let currenProduct = product.find( pro => pro.id == currentId);
            addTocart(currenProduct);
        })
    })
    Add.forEach(btn=>{
        btn.addEventListener("click",()=>{
            btn.classList.add("active");
        })
    }) 

});

const addTocart = (currenProduct)=>{
    basketProducts.push({...currenProduct ,quantity: 1});
    localStorage.setItem("basket",JSON.stringify(basketProducts));
    update()
}
 function update(){
    // total items in basket
    const shop_num = document.querySelector(".shop-num");
    const num_items = document.querySelector(".num-items");
    // total price
    const total=document.querySelector(".total");
   
    let totalItems = 0; 
    let totalprice = 0;
    carts.innerHTML = "";
    const cart_selected_ptoduct =document.querySelector(".cart-selected-ptoduct");
    if(cart_selected_ptoduct){
        cart_selected_ptoduct.innerHTML ="";
    }
    basketProducts.forEach((item , index)=>{
        totalItems += item.quantity;
        let totalpriceitem = item.price * item.quantity;
        totalprice += totalpriceitem;
        carts.innerHTML +=`<div class="cart-select">
                    <div class="content-cart">
                      <img src="${item.img}" alt="1.png">
                      <p class="name">${item.name}</p>
                      <p class="salarye">$${totalpriceitem}</p>
                      <div class="buttons-inc-dec">
                        <button class="decreas" data-index="${index}" >-</button>
                        <p class="num-product">${item.quantity}</p>
                        <button class="increase" data-index="${index}" >+</button>
                      </div>
                    </div>
                    <span class="delete" data-index="${index}" ><i class="bi bi-trash3-fill"></i></span>
                  </div>`
                  if(cart_selected_ptoduct){
                    cart_selected_ptoduct.innerHTML +=` <div class="cart-select">
                                    <div class="content-cart">
                                      <img src="${item.img}" alt="1.png">
                                      <p class="name">${item.name}</p>
                                      <p class="salarye">$${totalpriceitem}</p>
                                      <div class="buttons-inc-dec">
                                        <button class="decreas" data-index="${index}" >-</button>
                                        <p class="num-product">${item.quantity}</p>
                                        <button class="increase" data-index="${index}" >+</button>
                                      </div>
                                    </div>
                                    <span class="delete"  data-index="${index}"><i class="bi bi-trash3-fill"></i></span>
                                  </div>`
                  }
    });
    // total items
    shop_num.innerHTML = totalItems;
    num_items.innerHTML = totalItems;
    // total price
    total.innerHTML =`$${totalprice}`;
     // salary sub  salary-shop salary-total in check page
    if(cart_selected_ptoduct){
        const salary_sub = document.querySelector(".salary-sub");
        const salary_shop = document.querySelector(".salary-shop");
        const salary_total = document.querySelector(".salary-total");
    salary_sub.innerHTML =`$${totalprice}`;
    salary_shop.innerHTML =`$20`;
    salary_total.innerHTML =`$${totalprice + 20}`;
    }
    const increase=document.querySelectorAll(".increase");
    increase.forEach((incr)=>{
        incr.addEventListener("click",(e)=>{
            let curentIndex = e.target.getAttribute("data-index");
            increasequantity(curentIndex);
         
        })
    });
    const decreas=document.querySelectorAll(".decreas");
    decreas.forEach((decr)=>{
        decr.addEventListener("click",(e)=>{
            let curentIndex = e.target.getAttribute("data-index");
            decreasquantity(curentIndex);
        })
    });
    const Delete=document.querySelectorAll(".delete");
    Delete.forEach((del)=>{
        del.addEventListener("click",(e)=>{
            let curentIndex = e.target.getAttribute("data-index");
            deleteitem(curentIndex);
        })
    })

 };
 update();
//  increase quantity
const increasequantity = function(curentIndex){
    basketProducts[curentIndex].quantity +=1;
    update();
}
// decrease quantity
const  decreasquantity = function(curentIndex){
    if (basketProducts[curentIndex].quantity > 1){
    basketProducts[curentIndex].quantity -=1;
    }
    update();
}
// delete product
function deleteitem(curentIndex){
    let currentremov = basketProducts.splice(curentIndex ,1)[0];
    localStorage.setItem("basket",JSON.stringify(basketProducts));
    update();
    remActive(currentremov.id);
   
}
// remove active class
function remActive(proId){
   const Add = document.querySelectorAll(`.add[data-id="${proId}"]`);
   Add.forEach(btn =>{
        btn.classList.remove("active");
   })

    
    
}
