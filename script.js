document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("Discover");
    const cards = document.querySelectorAll(".travel-card");
    
    function revealCards() {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (sectionPosition < screenPosition) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, index * 200);
            });
            window.removeEventListener("scroll", revealCards);
        }
    }
    
    window.addEventListener("scroll", revealCards);
});
document.addEventListener("DOMContentLoaded", function () {
    // Select all "Book package" buttons
    const bookButtons = document.querySelectorAll(".book-package");

    // Add click event to each button
    bookButtons.forEach(button => {
        button.addEventListener("click", function () {
            const packageName = button.getAttribute("data-package");
            alert(`${packageName} has been added to your cart!`);
            
            // Add package to cart (assuming a cart array)
            addToCart(packageName);
        });
    });

    // Function to handle cart logic
    function addToCart(packageName) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(packageName);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Cart updated:", cart);
    }
});
function openBookingPage() {
    window.open('book.html', '_blank', 'width=800,height=600');
  }
  function opencartpage() {
    window.open('cart.html', '_blank', 'width=800,height=600');
  }
/*document.addEventListener("DOMContentLoaded", function () {
    const bookButtons = document.querySelectorAll(".book-package");
    const popupContainer = document.getElementById("popup-container");
    const popupTitle = document.getElementById("popup-title");
    const popupPrice = document.getElementById("popup-price");
    const closePopup = document.getElementById("close-popup");

    bookButtons.forEach(button => {
        button.addEventListener("click", function () {
            const packageName = this.getAttribute("data-package"); // Get the package name
            popupTitle.textContent = `Package: ${packageName}`;
            popupPrice.textContent = "Price: $299";
            popupContainer.style.display = "flex";
        });
    });

    closePopup.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });

    popupContainer.addEventListener("click", function (event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });
});*/