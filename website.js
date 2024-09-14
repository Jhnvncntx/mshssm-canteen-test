//isLoggedIn
const loggedIn = sessionStorage.getItem('loggedIn')
if (!loggedIn) {
  window.location.href = 'login.html'
}
//Constants
  const order1 = document.getElementById("product1");
  const order2 = document.getElementById("product2");
  const order3 = document.getElementById("product3");
  const order4 = document.getElementById("product4");
  const order5 = document.getElementById("product5");
  const order6 = document.getElementById("product6");
  const order7 = document.getElementById("product7");
  const order8 = document.getElementById("product8");
  const order9 = document.getElementById("product9");
  const order10 = document.getElementById("product10");
  const orderBtns = document.querySelectorAll(".orderBtns");
  const cartsys = document.querySelector(".cartsys");
  

//Buttons: log (console), mouse (in/out) effect.

  order1.addEventListener("mouseover", event => {
    order1.style.backgroundColor = "#4CAF50";
    order1.style.color = "white";
  });
  order1.addEventListener("mouseout", event => {
    order1.style.backgroundColor = "white";
    order1.style.color = "black";
  });

  order2.addEventListener("mouseover", event => {
    order2.style.backgroundColor = "#4CAF50";
    order2.style.color = "white";
  });
  order2.addEventListener("mouseout", event => {
    order2.style.backgroundColor = "white";
    order2.style.color = "black";
  });

  order3.addEventListener("mouseover", event => {
    order3.style.backgroundColor = "#4CAF50";
    order3.style.color = "white";
  });
  order3.addEventListener("mouseout", event => {
    order3.style.backgroundColor = "white";
    order3.style.color = "black";
  });

  order4.addEventListener("mouseover", event => {
    order4.style.backgroundColor = "#4CAF50";
    order4.style.color = "white";
  });
  order4.addEventListener("mouseout", event => {
    order4.style.backgroundColor = "white";
    order4.style.color = "black";
  });

  order5.addEventListener("mouseover", event => {
    order5.style.backgroundColor = "#4CAF50";
    order5.style.color = "white";
  });
  order5.addEventListener("mouseout", event => {
    order5.style.backgroundColor = "white";
    order5.style.color = "black";
  });

  order6.addEventListener("mouseover", event => {
    order6.style.backgroundColor = "#4CAF50";
    order6.style.color = "white";
  });
  order6.addEventListener("mouseout", event => {
    order6.style.backgroundColor = "white";
    order6.style.color = "black";
  });

  order7.addEventListener("mouseover", event => {
    order7.style.backgroundColor = "#4CAF50";
    order7.style.color = "white";
  });
  order7.addEventListener("mouseout", event => {
    order7.style.backgroundColor = "white";
    order7.style.color = "black";
  });

  order8.addEventListener("mouseover", event => {
    order8.style.backgroundColor = "#4CAF50";
    order8.style.color = "white";
  });
  order8.addEventListener("mouseout", event => {
    order8.style.backgroundColor = "white";
    order8.style.color = "black";
  });

  order9.addEventListener("mouseover", event => {
    order9.style.backgroundColor = "#4CAF50";
    order9.style.color = "white";
  });
  order9.addEventListener("mouseout", event => {
    order9.style.backgroundColor = "white";
    order9.style.color = "black";
  });

  order10.addEventListener("mouseover", event => {
    order10.style.backgroundColor = "#4CAF50";
    order10.style.color = "white";
  });
  order10.addEventListener("mouseout", event => {
    order10.style.backgroundColor = "white";
    order10.style.color = "black";
  });


// Function to show the notification
  function showNotification() {
    const notification = document.getElementById('notification');
    notification.className = 'notification show';
    setTimeout(() => { notification.className = notification.className.replace(' show', ''); }, 800);
  }



// Select all elements with the class 'notify-button'
  const buttons = document.querySelectorAll('.notify-button');

// Attach click event listeners to each button
  orderBtns.forEach(orderBtns => {
    orderBtns.addEventListener('click', showNotification);
  });

//Adding/Removing order to cart!

let totalPrice = 0

function updateTotal() {
  const totalPriceElement = document.getElementById("totalPrice")
  totalPriceElement.textContent = totalPrice
}

const tableBody = document.querySelector("#cartTable tbody")

order1.addEventListener("click", event => {
  console.log("Product 1 Added");
  
  const newTableRow = document.createElement("tr")
  const productCell = document.createElement("td")
  productCell.textContent = "Turon"
  newTableRow.appendChild(productCell)

  const priceCell = document.createElement("td")
  priceCell.textContent = "20"
  newTableRow.appendChild(priceCell)

  const buttonCell = document.createElement("td")
  const removeButton = document.createElement("button")
  removeButton.textContent = "Remove"
  buttonCell.appendChild(removeButton)
  newTableRow.appendChild(buttonCell)

  const price = 20
  totalPrice += (price);
  updateTotal();

  tableBody.appendChild(newTableRow)

  removeButton.addEventListener("click", () => {
    tableBody.removeChild(newTableRow);
    totalPrice -= (price);
    updateTotal();
  });
});

order2.addEventListener("click", event => {
  console.log("Product 2 Added");
  
  const newTableRow = document.createElement("tr")
  const productCell = document.createElement("td")
  productCell.textContent = "Buko Juice"
  newTableRow.appendChild(productCell)

  const priceCell = document.createElement("td")
  priceCell.textContent = "15"
  newTableRow.appendChild(priceCell)

  const buttonCell = document.createElement("td")
  const removeButton = document.createElement("button")
  removeButton.textContent = "Remove"
  buttonCell.appendChild(removeButton)
  newTableRow.appendChild(buttonCell)

  tableBody.appendChild(newTableRow)

  const price = 15
  totalPrice += (price);
  updateTotal();

  removeButton.addEventListener("click", () => {
    tableBody.removeChild(newTableRow);
    totalPrice -= (price);
    updateTotal();
    
  });
});

order3.addEventListener("click", event => {
  console.log("Product 3 Added");
  
  const newTableRow = document.createElement("tr")
  const productCell = document.createElement("td")
  productCell.textContent = "Siomai"
  newTableRow.appendChild(productCell)

  const priceCell = document.createElement("td")
  priceCell.textContent = "20"
  newTableRow.appendChild(priceCell)

  const buttonCell = document.createElement("td")
  const removeButton = document.createElement("button")
  removeButton.textContent = "Remove"
  buttonCell.appendChild(removeButton)
  newTableRow.appendChild(buttonCell)

  const price = 20
  totalPrice += (price);
  updateTotal();

  tableBody.appendChild(newTableRow)

  removeButton.addEventListener("click", () => {
    tableBody.removeChild(newTableRow);
    totalPrice -= (price);
    updateTotal();
  });
});

order4.addEventListener("click", event => {
  console.log("Product 4 Added");
  
  const newTableRow = document.createElement("tr")
  const productCell = document.createElement("td")
  productCell.textContent = "Siomai Rice"
  newTableRow.appendChild(productCell)

  const priceCell = document.createElement("td")
  priceCell.textContent = "35"
  newTableRow.appendChild(priceCell)

  const buttonCell = document.createElement("td")
  const removeButton = document.createElement("button")
  removeButton.textContent = "Remove"
  buttonCell.appendChild(removeButton)
  newTableRow.appendChild(buttonCell)

  const price = 35
  totalPrice += (price);
  updateTotal();

  tableBody.appendChild(newTableRow)

  removeButton.addEventListener("click", () => {
    tableBody.removeChild(newTableRow);
    totalPrice -= (price);
    updateTotal();
  });
});

order5.addEventListener("click", event => {
  console.log("Product 5 Added");
  
  const newTableRow = document.createElement("tr")
  const productCell = document.createElement("td")
  productCell.textContent = "Cup Noodles"
  newTableRow.appendChild(productCell)

  const priceCell = document.createElement("td")
  priceCell.textContent = "25"
  newTableRow.appendChild(priceCell)

  const buttonCell = document.createElement("td")
  const removeButton = document.createElement("button")
  removeButton.textContent = "Remove"
  buttonCell.appendChild(removeButton)
  newTableRow.appendChild(buttonCell)

  const price = 25
  totalPrice += (price);
  updateTotal();

  tableBody.appendChild(newTableRow)

  removeButton.addEventListener("click", () => {
    tableBody.removeChild(newTableRow);
    totalPrice -= (price);
    updateTotal();
  });
});

order6.addEventListener("click", event => {
  console.log("Product 6 Added");
  
  const newTableRow = document.createElement("tr")
  const productCell = document.createElement("td")
  productCell.textContent = "Biscuits"
  newTableRow.appendChild(productCell)

  const priceCell = document.createElement("td")
  priceCell.textContent = "10"
  newTableRow.appendChild(priceCell)

  const buttonCell = document.createElement("td")
  const removeButton = document.createElement("button")
  removeButton.textContent = "Remove"
  buttonCell.appendChild(removeButton)
  newTableRow.appendChild(buttonCell)

  const price = 10
  totalPrice += (price);
  updateTotal();

  tableBody.appendChild(newTableRow)

  removeButton.addEventListener("click", () => {
    tableBody.removeChild(newTableRow);
    totalPrice -= (price);
    updateTotal();
  });
});

const placeOrderBtn = document.getElementById("placeOrderBtn")

placeOrderBtn.addEventListener("click", event => {
  
  tableBody.replaceChildren()
  //Alert
  alert(`ORDER PLACED, Total Price: ${totalPrice}`)
  //Console Log
  console.log("")
  console.log("ORDER PLACED")
  console.log("")
  const userName = localStorage.getItem("loggedInUser")
  console.log(userName)
  console.log(`Total Price: ${totalPrice}`)
  console.log("")
  totalPrice = 0
  updateTotal()
})

// Hide Empty Cart Text

function clearEmptyCartText() {
  const emptyCartText = document.getElementById("emptyCartText")
  emptyCartText.textContent = ""
}

  orderBtns.forEach(orderBtns => {
    orderBtns.addEventListener('click', clearEmptyCartText);
  });
//Last UPDATE!!!


