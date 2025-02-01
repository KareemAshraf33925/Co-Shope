// start alert products in page
// identifcation of variable
const hotCarts = document.querySelector(".hot-carts");
const WomenClothes = document.querySelector(".electro-carts");
const ElectroCarts = document.querySelector(".appliances-carts");
const JeweleryCarts = document.querySelector(".mobiles-carts");


//  fetch api
fetch("https://fakestoreapi.com/products").then(respond =>{
    if(!respond.ok){
        console.log("error");
        throw new Error("field fetch api")
    }
    
    return respond.json()}).then( products =>{
    console.log(products)
   
    products.forEach((prod)=>{
        if(prod.category == "men's clothing"){
            const cartinitem = basketProducts.some(product => product.id === prod.id )
            // let discount=Math.floor((prod.old_price - prod.price) / prod.old_price * 100)
            hotCarts.innerHTML += `<div class="hot-cart">
                <img src="${prod.image}" alt="banner3_1">
                <div class="stars">
                  <i class="bi bi-star-fill star-1"></i>
                  <i class="bi bi-star-fill star-2"></i>
                  <i class="bi bi-star-fill star-3"></i>
                  <i class="bi bi-star-fill star-4"></i>
                  <i class="bi bi-star-fill star-5"></i>
              </div>
              <p class="name">${prod.title}</p>
             <div class="salayres">
              <p class="salayre">$${prod.price}</p>
             
             </div>
             <div class="buttons">
              <button class="add ${cartinitem ? "active" : ""}" data-id="${prod.id}" > add<i class="bi bi-cart-plus"></i></button>
              <button class="favourit"><i class="bi bi-suit-heart"></i></button>
             </div>
          
            </div>`
        
       
       
        }
        if(prod.category == "women's clothing"){
            const cartinitem = basketProducts.some(product => product.id === prod.id )
            // let discount=Math.floor((prod.old_price - prod.price) / prod.old_price * 100)
            WomenClothes.innerHTML += `<div class="el-cart">
                <img src="${prod.image}" alt="banner3_1">
                <div class="stars">
                  <i class="bi bi-star-fill star-1"></i>
                  <i class="bi bi-star-fill star-2"></i>
                  <i class="bi bi-star-fill star-3"></i>
                  <i class="bi bi-star-fill star-4"></i>
                  <i class="bi bi-star-fill star-5"></i>
              </div>
              <p class="name">${prod.title}</p>
             <div class="salayres">
              <p class="salayre">$${prod.price}</p>
             
             </div>
             <div class="buttons">
              <button class="add ${cartinitem ? "active" : ""}" data-id="${prod.id}" > add<i class="bi bi-cart-plus"></i></button>
              <button class="favourit"><i class="bi bi-suit-heart"></i></button>
             </div>
          
            </div>`
        
       
       
        }
        if(prod.category == "electronics"){
            const cartinitem = basketProducts.some(product => product.id === prod.id )
            // let discount=Math.floor((prod.old_price - prod.price) / prod.old_price * 100)
            ElectroCarts.innerHTML += `<div class="app-cart">
                <img src="${prod.image}" alt="banner3_1">
                <div class="stars">
                  <i class="bi bi-star-fill star-1"></i>
                  <i class="bi bi-star-fill star-2"></i>
                  <i class="bi bi-star-fill star-3"></i>
                  <i class="bi bi-star-fill star-4"></i>
                  <i class="bi bi-star-fill star-5"></i>
              </div>
              <p class="name">${prod.title}</p>
             <div class="salayres">
              <p class="salayre">$${prod.price}</p>
             
             </div>
             <div class="buttons">
              <button class="add ${cartinitem ? "active" : ""}" data-id="${prod.id}" > add<i class="bi bi-cart-plus"></i></button>
              <button class="favourit"><i class="bi bi-suit-heart"></i></button>
             </div>
          
            </div>`
        
       
       
        }
        if(prod.category == "jewelery"){
            const cartinitem = basketProducts.some(product => product.id === prod.id )
            // let discount=Math.floor((prod.old_price - prod.price) / prod.old_price * 100)
              JeweleryCarts.innerHTML += `<div class="mob-cart">
                <img src="${prod.image}" alt="banner3_1">
                <div class="stars">
                  <i class="bi bi-star-fill star-1"></i>
                  <i class="bi bi-star-fill star-2"></i>
                  <i class="bi bi-star-fill star-3"></i>
                  <i class="bi bi-star-fill star-4"></i>
                  <i class="bi bi-star-fill star-5"></i>
              </div>
              <p class="name">${prod.title}</p>
             <div class="salayres">
              <p class="salayre">$${prod.price}</p>
             
             </div>
             <div class="buttons">
              <button class="add ${cartinitem ? "active" : ""}" data-id="${prod.id}" > add<i class="bi bi-cart-plus"></i></button>
              <button class="favourit"><i class="bi bi-suit-heart"></i></button>
             </div>
          
            </div>`
        
       
       
        }
    });

});

/*-----------------------------------------end--------------------------------------------------------------*/
