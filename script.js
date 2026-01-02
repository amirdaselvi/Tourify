function addPackageToCart(btn) {
  const name = btn.dataset.name;
  const price = Number(btn.dataset.price);
  const persons = btn.dataset.persons;

  let cart = JSON.parse(localStorage.getItem("tourCart")) || [];
  cart.push({ name, price, persons });
  localStorage.setItem("tourCart", JSON.stringify(cart));

  alert("🛫 " + name + " has been added to your cart!");
  location.href = "cart.html"; // redirect in same tab
}

// Remove package from cart
function removePkg(i) {
  let cart = JSON.parse(localStorage.getItem("tourCart")) || [];
  cart.splice(i, 1);
  localStorage.setItem("tourCart", JSON.stringify(cart));
  renderCart();
}

// Render cart items + calculate bill
function renderCart() {
  let cart = JSON.parse(localStorage.getItem("tourCart")) || [];
  let total = 0;

  const box = document.getElementById("cart-items");
  const bill = document.getElementById("totalBill");

  if (!box || !bill) return; // prevents errors if IDs not found

  box.innerHTML = "";

  cart.forEach((pkg, i) => {
    total += pkg.price;
    box.innerHTML += `
      <div class="cart-item">
        <b>${pkg.name}</b><br>
        👥 ${pkg.persons} Persons | 💰 $${pkg.price}
        <button class="remove-btn" onclick="removePkg(${i})">Remove</button>
      </div>`;
  });

  bill.innerHTML = " Total Amount: $" + total;
}
function openAbout(){
    window.open('about.html','_blank');
}
function goHomeSite() {
    window.location.href = "index.html";
}

// When DOM loads, display cart
document.addEventListener("DOMContentLoaded", function () {
  renderCart();
});


window.onbeforeunload = () => {
  location.href = "index.html"; 
};
