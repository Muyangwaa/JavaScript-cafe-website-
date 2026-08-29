const orderButton = document.getElementById('orderButton');
const orderMessage = document.getElementById('orderMessage');
orderButton.addEventListener('click', function () {
  const customerName = document.getElementById('customerName').value.trim(); // string
  const drink = document.getElementById('drink');
  const quantity = Number(document.getElementById('quantity').value); // number
  const price = Number(drink.value);
  const total = price * quantity; // multiplication operator
  const isValid = customerName !== '' && quantity > 0; // boolean
  let discount = 0;   
  let finalTotal = 0; 
  if (isValid) {
    const drinkName = drink.options[drink.selectedIndex].text.split(' — ')[0];
    if (quantity >= 3) {
      discount = total * 0.10; 
    } else {
      discount = 0;
    }
    finalTotal = total - discount;
    orderMessage.textContent =
      `Thank you, ${customerName}! You ordered ${quantity} ${drinkName}. ` +
      `Original total: K${total.toFixed(2)}. ` +
      `Discount: K${discount.toFixed(2)}. ` +
      `Final total: K${finalTotal.toFixed(2)}.`;
    console.log(`New order: ${customerName}, original K${total}, final K${finalTotal}`);
  } else {
    orderMessage.textContent = 'Please enter your name and a quantity of at least 1.';
  }
})
