const orderButton = document.getElementById('orderButton');
const orderMessage = document.getElementById('orderMessage');
orderButton.addEventListener('click', function () {
  const customerName = document.getElementById('customerName').value.trim(); // string
  const drink = document.getElementById('drink');
  const quantity = Number(document.getElementById('quantity').value); // number
  const price = Number(drink.value);
  const total = price * quantity; // multiplication operator
  const isValid = customerName !== '' && quantity > 0; // boolean
 
  if (isValid) {
    const drinkName = drink.options[drink.selectedIndex].text.split(' — ')[0];
    
    const discountRate = 0.10; // 10%
    const discount = (quantity >= 3) ? total * discountRate : 0; 
    const finalTotal = total - discount; 

    orderMessage.textContent =
      `Thank you, ${customerName}! You ordered ${quantity} ${drinkName}. ` +
      `Original total: K${total.toFixed(2)}. ` +
      `Discount: K${discount.toFixed(2)}. ` +
      `Final total: K${finalTotal.toFixed(2)}.`;

    console.log(`New order: ${customerName}, total K${total}, final K${finalTotal}`);
  } else {
    orderMessage.textContent = 'Please enter your name and a quantity of at least 1.';
  }
});
