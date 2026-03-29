// Smooth scroll from button
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Active nav link on scroll (for index.html)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
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


// Language translations
const translations = {
  en: {
    logo: "Yara Store",
    nav: { home: "Home", shop: "Shop", contact: "Contact" },
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
    home: { title: "شێوەی خۆت دیاری بکە", shopBtn: "کڕین" },
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
    logo: "يـارا ستور",
    nav: { home: "الرئيسية", shop: "المتجر", contact: "اتصل بنا" },
    home: { title: "حدد أسلوبك", shopBtn: "تسوق الآن" },
    features: [
      { title: "توصيل سريع", desc: "استلم ملابسك بسرعة وفي الوقت المحدد" },
      { title: "دعم 24/7", desc: "لديك سؤال؟ فريق الدعم متاح على مدار الساعة" },
      { title: "إرجاع سهل", desc: "إذا لم يكن مناسبًا، أعده — سهل وسريع" }
    ],
    categories: { shopTitle: "المتجر", howToBuyTitle: "كيفية الشراء؟", howToBuyDesc: "قم بالتقاط صورة للمنتج وأرسلها إلينا على WhatsApp مع عنوانك ورقم هاتفك." },
    contact: { title: "اتصل بنا" },
    footer: { copyright: "© 2026 يارا ستور. جميع الحقوق محفوظة.", designedBy: "تم التصميم بواسطة يارا ستور" },
    products: [
      { name: "فستان بنفسجي", price: "10,000 ع.د" },
      { name: "فستان أسود", price: "10,000 ع.د" },
      { name: "فستان بني", price: "10,000 ع.د" },
      { name: "فستان برتقالي", price: "10,000 ع.د" },
      { name: "فستان وردي", price: "10,000 ع.د" }
    ]
  }
};

// Function to change language
function changeLanguage(lang) {
  const t = translations[lang];

  // Logo
  document.querySelector(".logo").textContent = t.logo;

  // Nav links
  document.querySelectorAll(".nav-link")[0].textContent = t.nav.home;
  document.querySelectorAll(".nav-link")[1].textContent = t.nav.shop;
  document.querySelectorAll(".nav-link")[2].textContent = t.nav.contact;

  // Home section
  document.querySelector("#home-section h1").textContent = t.home.title;
  document.querySelector("#home-section .shop-btn").textContent = t.home.shopBtn;

  // Features
  document.querySelectorAll(".features .feature").forEach((el, i) => {
    el.querySelector("h3").textContent = t.features[i].title;
    el.querySelector("p").textContent = t.features[i].desc;
  });

  // Categories Section
  document.querySelector("#categories-section h2").textContent = t.categories.shopTitle;
  document.querySelector("#categories-section .buy-feature h2").textContent = t.categories.howToBuyTitle;
  document.querySelector("#categories-section .buy-feature p").textContent = t.categories.howToBuyDesc;

  // Products
  document.querySelectorAll(".product-card").forEach((el, i) => {
    el.querySelector("p").textContent = t.products[i].name;
    el.querySelector(".price").textContent = t.products[i].price;
  });

  // Contact Section
  document.querySelector("#contact-section h2").textContent = t.contact.title;

  // Footer
  document.querySelector(".footer p:first-child").textContent = t.footer.copyright;
  document.querySelector(".footer .made-by").textContent = t.footer.designedBy;
}
// Toggle language menu open/close
function toggleLangMenu() {
  const menu = document.querySelector('.lang-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Close language menu
function closeLangMenu() {
  document.querySelector('.lang-menu').style.display = 'none';
}
