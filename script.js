function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let scrollPosition = 0;

function openModal(modalId) {
    // Capture the current scroll position
    scrollPosition = window.pageYOffset;
    // Fix body position and prevent scrolling
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    // Restore body scroll
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
}

// Close modal if user clicks outside content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.custom-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            // Restore body scroll
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
        }
    });
};

