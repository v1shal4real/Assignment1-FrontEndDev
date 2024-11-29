// Update cart badge dynamically
const cartBadge = document.querySelector('.cart-badge');
let cartCount = 0;

// Simulate adding items to cart
function addToCart() {
    cartCount++;
    cartBadge.textContent = cartCount;
}

// Attach event to buttons (if any)
// Example: Add items to cart
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', addToCart);
});
// Smooth Page Transitions
document.addEventListener("DOMContentLoaded", () => {
  const transitionOverlay = document.getElementById("transition-overlay");
  const links = document.querySelectorAll("a[href]");

  // Fade-in effect when the page loads
  setTimeout(() => {
      transitionOverlay.classList.remove("active");
  }, 500);

  // Attach event listeners to all navigation links
  links.forEach((link) => {
      link.addEventListener("click", (event) => {
          const target = link.getAttribute("href");

          // Ignore external links or anchor links
          if (target.startsWith("#") || target.includes("http")) return;

          event.preventDefault(); // Prevent the default navigation
          transitionOverlay.classList.add("active");

          // Wait for fade-out, then navigate
          setTimeout(() => {
              window.location.href = target;
          }, 500); // Match the transition time in CSS
      });
  });
});
// Add interactivity to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
        const productName = event.target.parentElement.querySelector('h3').innerText;
        alert(`${productName} has been added to your cart!`);
    });
});

// Animate elements on scroll (basic scroll reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
});

document.querySelectorAll('.product-card').forEach((card) => observer.observe(card));
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields!');
        return;
    }
    
    alert('Message sent successfully!');
    this.reset(); // Reset form fields
});
