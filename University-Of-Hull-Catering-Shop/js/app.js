function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
window.onload = function () {

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
};

// get all elements with this class
let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: 'Apple Juice',
    tag: 'apple-juice',
    price: 1.00,
    inCart: 0
  },
  {
    name: 'Orange Juice',
    tag: 'orange-juice',
    price: 1.00,
    inCart: 0
  },
  {
    name: '7-Up',
    tag: '7-up',
    price: 1.20,
    inCart: 0
  },
  {
    name: 'Coca Cola',
    tag: 'coca-cola',
    price: 1.20,
    inCart: 0
  },
  {
    name: 'Sparkling Water',
    tag: 'sparkling-water',
    price: 0.85,
    inCart: 0
  },
  {
    name: 'Still Water',
    tag: 'still-water',
    price: 0.85,
    inCart: 0
  },

  {
    name: 'Tea',
    tag: 'tea',
    price: 1.85,
    inCart: 0
  },
  {
    name: 'Black Coffee',
    tag: 'black-coffee',
    price: 1.85,
    inCart: 0
  },
  {
    name: 'Caramel Macchiato',
    tag: 'caramel-macchiato',
    price: 2.15,
    inCart: 0
  },


  {
    name: 'Brownie',
    tag: 'brownie',
    price: 1.85,
    inCart: 0
  },
  {
    name: 'Chocolate Mousse',
    tag: 'chocolate-mousse',
    price: 2.85,
    inCart: 0
  },
  {
    name: 'Cookies',
    tag: 'cookies',
    price: 0.85,
    inCart: 0
  },

  {
    name: 'Cheese and Onion Sandwich',
    tag: 'co-sand',
    price: 2.95,
    inCart: 0
  },
  {
    name: 'Eggs and Cress Sandwich',
    tag: 'ec-sand',
    price: 2.95,
    inCart: 0
  },
  {
    name: 'Mozarella, Tomato and Pesto Sandwich',
    tag: 'mtp-sand',
    price: 2.95,
    inCart: 0
  },

  {
    name: 'Crisps',
    tag: 'crisps',
    price: 0.65,
    inCart: 0
  },
]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    //alert('Succesfully added to cart!');
    console.log('Succesfully added to cart!' + products[i].name);
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumber() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;

  }
}
function cartNumbers(product) {
  console.log('The product clicked: ', product);
  let productNumbers = localStorage.getItem('cartNumbers');


  productNumbers = parseInt(productNumbers);
  console.log("Local Storage Key: " + productNumbers);
  console.log("Type: " + typeof productNumbers);
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    // if there is none
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  console.log("My cartItems are", cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems, // get whats already in the cart
        [product.tag]: product // add new product
      }
    }
    cartItems[product.tag].inCart += 1;
  }
  else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }

  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
  //console.log("PRICE IS", product.price);
  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseFloat(cartCost);// because when getting it from lcoal storage, it's a string by default
    product.price = parseFloat(product.price);
    var newCost = cartCost + product.price;
    newCost = newCost.toFixed(2);
    localStorage.setItem('totalCost', newCost);
  } else {
    localStorage.setItem('totalCost', product.price);
  }

}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems) // when object comes from localstoragei ts json so we convert it to js
  let productContainer = document.querySelector(".products-container"); //checks if products-container exists on page
  let cartCost = localStorage.getItem('totalCost');
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => { // cheks values of cartItems
      productContainer.innerHTML += `
        <div class="product" style="float: left">
          <ion-icon name="close-circle-outline"></ion-icon>
          <img style="width: 100px; height: 100px;" src="./gallery/${item.tag}.jpg">
          <span>${item.name}</span>
        </div>
        <div class="price" style="float: left">£ ${item.price}</div>
        <div class="quantity" style="float: left">
          <ion-icon name="remove-circle-outline"></ion-icon>
            <span>${item.inCart}</span>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        <div class="total" style="float: left">
          £ ${item.inCart * item.price}
        </div>
        <br/>
      `;
    });
    productContainer.innerHTML += `
      <div class="cartTotalContainer">
        <h4 class="cartTotalTitle">
          Cart Total: </h4>
        <h4 class="cartTotal"> 
            £ ${cartCost}
        </h4>
      </div>

    <center>
      <div class="checkoutContainer">
        <button class="cartCheckoutButtons" onclick="window.location.href='index.html'">
          <h4>Continue Shopping</h4>
        </button>
        <button class="cartCheckoutButtons" onclick="window.location.href='payment.html'">
          <h4>Proceed to Payment</h4>
        </button>
      </div>
    
    </center>


    `;
  }
}

onLoadCartNumber();
displayCart();
