const form = document.getElementById('expense-form');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const list = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!name || isNaN(amount) || amount <= 0) return;

  const item = document.createElement('li');
  item.innerHTML = \`\${name} - ₹\${amount.toFixed(2)} <button onclick="removeItem(this, \${amount})">❌</button>\`;
  list.appendChild(item);

  total += amount;
  updateTotal();

  nameInput.value = '';
  amountInput.value = '';
});

function updateTotal() {
  totalDisplay.textContent = total.toFixed(2);
}

function removeItem(button, amount) {
  button.parentElement.remove();
  total -= amount;
  updateTotal();
}
