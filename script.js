// =======================
// Smooth Scroll for Buttons
// =======================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// =======================
// Active nav link on scroll
// =======================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// =======================
// Translations Object
// =======================
const translations = {
  en: {
    logo: "Yara Store",
    nav: { home: "Home", shop: "Product", contact: "Contact" },
    home: { title: "Define Your Style", shopBtn: "Shop Now" },
    features: [
      { title: "Fast Delivery", desc: "Got your clothes delivered quickly and right on time" },
      { title: "24/7 Support", desc: "Got a question? Support team stays on, 24/7" },
      { title: "Easy Return", desc: "If it doesn’t hit right, send it back — easy and fast" }
    ],
    categories: { shopTitle: "Shop", howToBuyTitle: "How To Buy?", howToBuyDesc: "Screenshot a product and send it to us on WhatsApp with your address and phone number." },
    contact: { title: "Contact Us" },
    footer: { copyright: "© 2026 Yara Store. All rights reserved.", designedBy: "Designed by Yara Store" },
    products: [
      { name: "Purple Dress", price: "10,000 iqd" },
      { name: "Black Dress", price: "10,000 iqd" },
      { name: "Brown Dress", price: "10,000 iqd" },
      { name: "Orange Dress", price: "10,000 iqd" },
      { name: "Pink Dress", price: "10,000 iqd" }
    ]
  },
  ku: {
    logo: "Yara Store",
    nav: { home: "Home", shop: "Product", contact: "Contact" },
    home: { title: "ستایلەکەت پێناسە بکە", shopBtn: "کڕین" },
    features: [
      { title: "ناردنی خێرا", desc: "جلەکانت بە خێرایی و بەکاتی خۆیان دەگەیەنرێن" },
      { title: "پشتیوانی 24/7", desc: "پرسیارێکتان هەیە؟ تیمی پشتگیری دەمێنێتەوە، ٢٤/٧" },
      { title: "گەڕاندنەوەی ئاسان", desc: "ئەگەر بەرهەمه‌كه‌ هه‌له بوو، بینێرەوه‌ — ئاسان و خێرا" }
    ],
    categories: { shopTitle: "بەرهەم", howToBuyTitle: "چۆنیەتی کڕین؟", howToBuyDesc: "سکرین شۆت بۆ بەرهەمێک بکە و لە واتسئەپ بۆمان بنێرە لەگەڵ ناونیشان و ژمارەی تەلەفۆنەکەت." },
    contact: { title: "پەیوەندیمان پێوە بكه‌" },
    footer: { copyright: "© 2026 Yara Store. All rights reserved.", designedBy: "Designed by Yara Store" },
    products: [
      { name: "مۆر", price: "10,000 دینار" },
      { name: "ڕەش", price: "10,000 دینار" },
      { name: "قاوەیی", price: "10,000 دینار" },
      { name: "نارنجی", price: "10,000 دینار" },
      { name: "په‌مه‌یی", price: "10,000 دینار" }
    ]
  },
  ar: {
    logo: "Yara Store",
    nav: { home: "Home", shop: "Product", contact: "Contact" },
    home: { title: "حدد أسلوبك", shopBtn: "تسوق الآن" },
    features: [
      { title: "توصيل سريع", desc: "استلم ملابسك بسرعة وفي الوقت المحدد" },
      { title: "دعم 24/7", desc: "لديك سؤال؟ فريق الدعم متاح على مدار الساعة" },
      { title: "إرجاع سهل", desc: "إذا لم يكن مناسبًا، أعده — سهل وسريع" }
    ],
    categories: { shopTitle: "المتجر", howToBuyTitle: "كيفية الشراء؟", howToBuyDesc: "قم بالتقاط صورة للمنتج وأرسلها إلينا على WhatsApp مع عنوانك ورقم هاتفك." },
    contact: { title: "اتصل بنا" },
    footer: { copyright: "© 2026 Yara Store. All rights reserved.", designedBy: "Designed by Yara Store" },
    products: [
      { name: "أرجواني", price: "10,000 ع.د" },
      { name: "أسود", price: "10,000 ع.د" },
      { name: "بني", price: "10,000 ع.د" },
      { name: "برتقالي", price: "10,000 ع.د" },
      { name: "وردي", price: "10,000 ع.د" }
    ]
  }
};

// =======================
// Change Language Function
// =======================
function changeLanguage(lang) {
  const t = translations[lang];

  // RTL support
  if (lang === "ar" || lang === "ku") {
    document.body.style.direction = "ltr";
    document.body.style.textAlign = "right";
  } else {
    document.body.style.direction = "ltr";
    document.body.style.textAlign = "left";
  }

  document.querySelector(".logo").textContent = t.logo;

  document.querySelectorAll(".nav-link")[0].textContent = t.nav.home;
  document.querySelectorAll(".nav-link")[1].textContent = t.nav.shop;
  document.querySelectorAll(".nav-link")[2].textContent = t.nav.contact;

  document.querySelector("#home-section h1").textContent = t.home.title;
  document.querySelector("#home-section .shop-btn").textContent = t.home.shopBtn;

  document.querySelectorAll(".features .feature").forEach((el, i) => {
    el.querySelector("h3").textContent = t.features[i].title;
    el.querySelector("p").textContent = t.features[i].desc;
  });

  document.querySelector("#categories-section h2").textContent = t.categories.shopTitle;
  document.querySelector("#categories-section .buy-feature h2").textContent = t.categories.howToBuyTitle;
  document.querySelector("#categories-section .buy-feature p").textContent = t.categories.howToBuyDesc;

  document.querySelectorAll(".product-card").forEach((el, i) => {
    el.querySelector("p").textContent = t.products[i].name;
    el.querySelector(".price").textContent = t.products[i].price;
  });

  document.querySelector("#contact-section h2").textContent = t.contact.title;

  document.querySelector(".footer p:first-child").textContent = t.footer.copyright;
  document.querySelector(".footer .made-by").textContent = t.footer.designedBy;

  // Save language
  localStorage.setItem("lang", lang);
}

// =======================
// Floating Flag Logic
// =======================
document.addEventListener("DOMContentLoaded", function () {

  const langToggle = document.getElementById("langToggle");
  const langOptions = document.getElementById("langOptions");
  const flags = document.querySelectorAll("#langOptions img");
  const mainFlag = document.getElementById("currentFlag");

  // Show / hide dropdown
  langToggle.addEventListener("click", () => {
    langOptions.classList.toggle("show");

    mainFlag.classList.add("jump", "wave");
    setTimeout(() => {
      mainFlag.classList.remove("jump", "wave");
    }, 600);
  });

  // Change language
  flags.forEach(flag => {
    flag.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      changeLanguage(lang);
      mainFlag.src = this.src;
      langOptions.classList.remove("show");
    });
  });

  // Close if clicked outside
  document.addEventListener("click", function(e) {
    if (!document.querySelector(".lang-float").contains(e.target)) {
      langOptions.classList.remove("show");
    }
  });

  // Auto load saved language
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    changeLanguage(savedLang);
    mainFlag.src = document.querySelector(`#langOptions img[data-lang="${savedLang}"]`).src;
  }
});


const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".product-card");
const nextBtn = document.querySelector(".slider-btn.right");
const prevBtn = document.querySelector(".slider-btn.left");

let index = 0;

function updateSlider() {
  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");

  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(${-index * cardWidth + 120}px)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= cards.length) index = 0;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = cards.length - 1;
  updateSlider();
});

// Auto slide
setInterval(() => {
  nextBtn.click();
}, 4000);

// Start
updateSlider();
