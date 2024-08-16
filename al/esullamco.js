// Function to update the price
function updatePrice() {
  // Add your code to fetch the latest price from the server or API
  // For example:
  let latestPrice = fetchLatestPrice();
  
  // Update the price on the webpage
  document.getElementById('price').innerHTML = latestPrice;
}

// Set interval to update price every 15 seconds
setInterval(updatePrice, 15000); // 15 seconds = 15000 milliseconds
