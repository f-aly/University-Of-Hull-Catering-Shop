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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    name: 'C&O Sandwich',
    tag: 'co-sand',
    price: 2.95,
    inCart: 0
  },
  {
    name: 'E&C Sandwich',
    tag: 'ec-sand',
    price: 2.95,
    inCart: 0
  },
  {
    name: 'MT&P Sandwich',
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
    console.log('Succesfully added to cart!: ' + products[i].name);
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
      let itemTotalPrice = item.inCart * item.price;
      itemTotalPrice = parseFloat(itemTotalPrice).toFixed(2);
      productContainer.innerHTML += `
        <div class="product" style="float: left">
          <img style="width: 100px; height: 100px;" src="./gallery/${item.tag}.jpg">
          <span>${item.name}</span>
        </div>
        <div class="price" style="float: left">£ ${item.price}</div>
        <div class="quantity" style="float: left">
            <span>${item.inCart}</span>
        </div>
        <div class="total" style="float: left">
          £ ${itemTotalPrice}
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

// ==========================================
// ======= CART SUMMARY - PAYMENT PAGE ======
// ==========================================

function displayCartSummary() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems) // when object comes from localstoragei ts json so we convert it to js
  let summaryContainer = document.querySelector(".summary-container"); //checks if products-container exists on page
  let proceedToPaymentContainer = document.querySelector(".proceedToPayment");
  let cartCost = localStorage.getItem('totalCost');
  // 
  if (cartItems && summaryContainer) {
    summaryContainer.innerHTML = '';
    Object.values(cartItems).map(item => { // cheks values of cartItems
      let itemTotalPrice = item.inCart * item.price;
      itemTotalPrice = parseFloat(itemTotalPrice).toFixed(2);
      summaryContainer.innerHTML += `
        <tr>
          <td>&nbsp;</td>
          <td>x${item.inCart}</td>
          <td>${item.name}</td>
          <td>£ ${item.price}</td>
        </tr>
      `;
    });
    proceedToPaymentContainer.innerHTML = `
       <h3>
          Total to Pay:  £ ${cartCost}</h3>
      `;
  }
  else {
    summaryContainer.innerHTML += `
    <center>
       <h4>404 - Nothing to pay for.</h4>
       <h5>Please go back to the home page.</h5>
    </center>
      `;
  }
}

// ======================================================
// ======= ORDER SUMMARY - CHECKOUTSUCCESSFUL PAGE ======
// ======================================================

function displayCashOrderSummary() {
  let orderReference = localStorage.getItem('orderRef');
  orderReference = JSON.parse(orderReference);
  let orderReferenceContainer = document.querySelector('.orderReference-container')
  if (orderReference && orderReferenceContainer && payedByCashBool == true) {
    orderReferenceContainer.innerHTML = `
            <br/>
            <h2>Order Reference #${orderReference}</h2>
            <h2>Payment Method: Cash At Collection</h2>
            <hr />
            <br/>
            <h2>Order Summary</h2>
            <br/>
          `;
    displayCartSummary();
  } 
}

function displayPaypalOrderSummary() {
  let orderReference = localStorage.getItem('orderRef');
  orderReference = JSON.parse(orderReference);
  let orderReferenceContainer = document.querySelector('.orderPaypalReference-container')
  if (orderReference && orderReferenceContainer && payedByCashBool == true) {
    orderReferenceContainer.innerHTML = `
            <br/>
            <h2>Order Reference #${orderReference}</h2>
            <h2>Payment Method: Paypal</h2>
            <hr />
            <br/>
            <h2>Order Summary</h2>
            <br/>
          `;
    displayCartSummary();
  } 
}
/*
 - add order erference
 - try to use bools to make difference between paypal and cash payment
 - clear lcoalstorage and go back to main page if successful

 - implement paypal to take order elements for details
 - add paymentfailed 
*/

var payedByCashBool = true;

function payedByCash() {
  window.location.href = "cashCheckoutSuccessful.html";
  var orderRef = '';
  var characters = '98765432100123456789';
  var orderRefLength = 6;
  for (var i = 0; i < orderRefLength; i++) {
    orderRef += characters.charAt(Math.floor(Math.random() * orderRefLength));
  }
  localStorage.setItem('orderRef', orderRef);
  payedByCash = true;
}

function payedByPayPal() {
  window.location.href = "paypalCheckoutSuccessful.html";
  var orderRef = '';
  var characters = '98765432100123456789';
  var orderRefLength = 6;
  for (var i = 0; i < orderRefLength; i++) {
    orderRef += characters.charAt(Math.floor(Math.random() * orderRefLength));
  }
  localStorage.setItem('orderRef', orderRef);
  console.log(payedByCashBool);
  payedByCashBool = false;
  console.log(payedByCashBool);
}


function clearStorageAndStartAgain() {
  window.location.href = "index.html";
  localStorage.clear();
}

// ======================================================
// =============== TO RUN BEFORE PAGE LOADS =============
// ======================================================
onLoadCartNumber();
displayCart();

displayCashOrderSummary();
displayPaypalOrderSummary();
displayCartSummary();


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


paypal.Button.render({

  // Configure environment
  env: 'sandbox',
  client: {
    sandbox: 'AYbCNBxQmjqgAFsJIjQpMI30072iJoU5xDSMYrPx9SxM12zjD14_93_9xuVbJCV-8FcfBGFIEztLEZMY',
    //  production: 'demo_production_client_id'
  },
  // Customize button (optional)
  locale: 'en_GB',
  style: {
    size: 'small',
    color: 'black',
    shape: 'pill',
  },

  // Enable Pay Now checkout flow (optional)
  commit: true,

  // Set up a payment
  // Set up a payment
  payment: function (data, actions) {
    let totalCost = localStorage.getItem('totalCost');
    totalCost = parseFloat(totalCost);

    return actions.payment.create({
      transactions: [{
        amount: {
          total: totalCost,
          currency: 'GBP'
        },
      }],
      note_to_payer: 'Contact us for any questions on your order.'
    });
  },
  onAuthorize: function (data, actions) {
    return actions.payment.execute().then(function () {
      // Show a confirmation message to the buyer
      payedByCashBool = false;
      payedByPayPal();
    });
  }
}, '#paypal-button');