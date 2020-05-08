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

/////////////////////////////////////////////////////////////////////////////////////////

let currentUser = document.getElementById("displayUsername").innerHTML;
console.log(currentUser)

let productsContainer = document.querySelector(".products-table");
if (currentUser == 'admin') {

    productsContainer.innerHTML = `
      <table>
      <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>&nbsp;</th>
      </tr>
      <tr>
          <td>Apple Juice</td>
          <td>Soft Drinks</td>
          <td>£ 1.00</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Orange Juice</td>
          <td>Soft Drinks</td>
          <td>£ 1.00</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>7-Up</td>
          <td>Soft Drinks</td>
          <td>£ 1.20</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Coca Cola</td>
          <td>Soft Drinks</td>
          <td>£ 1.20</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Sparkling Water</td>
          <td>Soft Drinks</td>
          <td>£ 0.85</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Still Water</td>
          <td>Soft Drinks</td>
          <td>£ 0.85</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Tea</td>
          <td>Hot Drinks</td>
          <td>£ 1.85</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Black Coffee</td>
          <td>Hot Drinks</td>
          <td>£ 1.85</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Caramel Macchiato</td>
          <td>Hot Drinks</td>
          <td>£ 2.15</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Brownie</td>
          <td>Desserts</td>
          <td>£ 1.85</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Chocolate Mousse</td>
          <td>Desserts</td>
          <td>£ 2.85</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Cookies</td>
          <td>Desserts</td>
          <td>£ 0.85</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>C&O Sandwich</td>
          <td>Sandwiches</td>
          <td>£ 2.95</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>E&C Sandwich</td>
          <td>Sandwiches</td>
          <td>£ 2.95</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>MT&P Sandwich</td>
          <td>Sandwiches</td>
          <td>£ 2.95</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
      <tr>
          <td>Crisps</td>
          <td>Snacks</td>
          <td>£ 0.65</td>
          <td><a href="comingSoon.html">Change Details</a></td>
      </tr>
  </table>
      `;
}
else {
    productsContainer.innerHTML = `<center><h1 style="color: red">You do not have access to this information.</h1></center>`
}


////////////////////////// --- STOCKS --- ////////////////////////////////////
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


let stockContainer = document.querySelector(".stock-container");
let softDrinksStockTable = document.querySelector('.softDrinks-table')
let hotDrinksStockTable = document.querySelector('.hotDrinks-table');
let dessertStockTable = document.querySelector('.desserts-table');
let sandwichesStockTable = document.querySelector('.sandwiches-table');
let snacksStockTable = document.querySelector('.snacks-table');
if (currentUser == 'admin') {

    softDrinksStockTable.innerHTML = `
      <table>
      <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Units Left</th>
      </tr>
      <tr>
          <td>Apple Juice</td>
          <td style="color: green">Available</td>
          <td>56</td>
      </tr>
      <tr>
          <td>Orange Juice</td>
          <td style="color: green">Available</td>
          <td>47</td>
      </tr>
      <tr>
          <td>7-Up</td>
          <td style="color: green">Available</td>
          <td>68</td>
      </tr>
      <tr>
          <td>Coca Cola</td>
          <td style="color: darkorange">Low on Stock</td>
          <td>18</td>
      </tr>
      <tr>
          <td>Sparkling Water</td>
          <td style="color: red">Out of Stock</td>
          <td>0</td>
      </tr>
      <tr>
          <td>Still Water</td>
          <td style="color: green">Available</td>
          <td>32</td>
      </tr>
  </table>
      `;

    hotDrinksStockTable.innerHTML = `
      <table>
      <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Units Left</th>
      </tr>
      <tr>
          <td>Tea</td>
          <td style="color: green">Available</td>
          <td>64</td>
      </tr>
      <tr>
          <td>Black Coffee</td>
          <td style="color: green">Available</td>
          <td>38</td>
      </tr>
      <tr>
          <td>Caramel Macchiato</td>
          <td style="color: green">Available</td>
          <td>51</td>
      </tr>
  </table>
  `;

    dessertStockTable.innerHTML = `
    <table>
    <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Units Left</th>
    </tr>
    <tr>
        <td>Brownies</td>
        <td style="color: darkorange">Low On Stock</td>
        <td>21</td>
    </tr>
    <tr>
        <td>Chocolate Mousse</td>
        <td style="color: green">Available</td>
        <td>34</td>
    </tr>
    <tr>
        <td>Cookies</td>
        <td style="color: red">Out of Stock</td>
        <td>0</td>
    </tr>
    </table>
    `;
    
  sandwichesStockTable.innerHTML = `
  <table>
  <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Units Left</th>
  </tr>
  <tr>
  <td>C&O Sandwich</td>
  <td style="color: red">Out of Stock</td>
  <td>0</td>
  </tr>
  <tr>
  <td>E&C Sandwich</td>
      <td style="color: green">Available</td>
      <td>34</td>
  </tr>
  <tr>
    <td>MT&P Sandwich</td>
    <td style="color: green">Available</td>
    <td>32</td>
  </tr>
</table>
`;

snacksStockTable.innerHTML = `
<table>
<tr>
    <th>Name</th>
    <th>Status</th>
    <th>Units Left</th>
</tr>
<tr>
<td>Crisps</td>
<td style="color: green">Available</td>
<td>70</td>
</tr>
`;

}

else {
    stockContainer.innerHTML = `<center><h1 style="color: red">You do not have access to this information.</h1></center>`
}


/* ///////////////////////////// ORDERS //////////////////// */

function openOrders(evt, orderState) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("v-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("v-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(orderState).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpenOrder").click();

let orderContainer = document.querySelector('.order-container')
let pendingTable = document.querySelector('.pending-table')
let beingPreparedTable = document.querySelector('.being-prepared-table')
let readyTable = document.querySelector('.ready-table')
let collectedTable = document.querySelector('.collected-table')
let cancelledTable = document.querySelector('.cancelled-table')

if (currentUser == 'admin') {

    pendingTable.innerHTML = `
      <table>
      <tr>
          <th>Order ID</th>
          <th>User ID</th>
          <th>Order Summary</th>
          <th>Total Cost</th>
          <th>Payment Type</th>
          <th>&nbsp;</th>
      </tr>
      <tr>
          <td>785412</td>
          <td style="color: green">buyer1</td>
          <td>
                x1 Black Coffee<br/>x1 Cookie
          </td>
          <td>2.70</td>
          <td>Paypal</td>
          <td><a href="#">Move to Being Prepared</a></td>
      </tr>
  </table>
      `;

      beingPreparedTable.innerHTML = `
      <table>
      <tr>
          <th>Order ID</th>
          <th>User ID</th>
          <th>Order Summary</th>
          <th>Total Cost</th>
          <th>Payment Type</th>
          <th>&nbsp;</th>
      </tr>
      <tr>
          <td>985647</td>
          <td style="color: green">buyer2</td>
          <td>
                x1 Tea<br/>x1 Brownie
          </td>
          <td>ADD COST/td>
          <td>Paypal</td>
          <td><a href="#">Move to Ready</a></td>
      </tr>
      <tr>
          <td>214563</td>
          <td style="color: green">buyer3</td>
          <td>
                x1 MT&P Sandwich<br/>x1 7-Up<br/>x1 Crisps
          </td>
          <td>4.15</td>
          <td>Cash</td>
          <td><a href="#">Move to Ready</a></td>
      </tr>
  </table>
      `;

      readyTable.innerHTML = `
      <table>
      <tr>
          <th>Order ID</th>
          <th>User ID</th>
          <th>Order Summary</th>
          <th>Total Cost</th>
          <th>Payment Type</th>
          <th></th>
      </tr>
      <tr>
          <td>213325</td>
          <td style="color: green">buyer8</td>
          <td>
                x1 Chocolate Mousse<br/>
                x1 Black Coffee
          </td>
          <td>4.70</td>
          <td>Paypal</td>
          <td><a href='#'>Move to Collected</a></td>
      </tr>
  </table>
      `;

      collectedTable.innerHTML = `
      <table>
      <tr>
          <th>Order ID</th>
          <th>User ID</th>
          <th>Order Summary</th>
          <th>Total Cost</th>
          <th>Payment Type</th>
      </tr>
      <tr>
          <td>985476</td>
          <td style="color: green">buyer10</td>
          <td>
                x1 Chocolate Mousse<br/>
                x1 Black Coffee
          </td>
          <td>4.70</td>
          <td>Paypal</td>
      </tr>
      <tr>
          <td>456325</td>
          <td style="color: green">buyer7</td>
          <td>
                x1 Black Coffee
          </td>
          <td>1.20</td>
          <td>Cash</td>
      </tr>
  </table>
      `;

      cancelledTable.innerHTML = `
      <table>
      <tr>
          <th>Order ID</th>
          <th>User ID</th>
          <th>Order Summary</th>
          <th>Total Cost</th>
          <th>Payment Type</th>
      </tr>
      <tr>
          <td>214232</td>
          <td style="color: green">buyer50</td>
          <td>
                x1 Chocolate Mousse<br/>
                x1 Black Coffee
          </td>
          <td>4.70</td>
          <td>Paypal</td>
      </tr>
  </table>
      `;
}

else {
    orderContainer.innerHTML = `<center><h1 style="color: red">You do not have access to this information.</h1></center>`
}