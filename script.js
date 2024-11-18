// AOS Initialization
AOS.init();

// Testimoni Slider
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-slider blockquote');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Fungsi untuk menampilkan testimoni aktif
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

// Fungsi untuk mengubah testimoni
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Tampilkan testimoni pertama
showTestimonial(currentIndex);

// Ganti testimoni setiap 5 detik
setInterval(nextTestimonial, 5000);

// Tambahkan event listener untuk tombol
nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

// Smooth scroll untuk menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Validasi form kontak
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Pesan Anda telah dikirim! Terima kasih telah menghubungi kami.');
        contactForm.reset();
    } else {
        alert('Silakan lengkapi semua kolom!');
    }
});
