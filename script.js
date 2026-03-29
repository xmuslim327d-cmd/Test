// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
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

});


// =======================
// Language translations
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
    categories: {
      shopTitle: "Shop",
      howToBuyTitle: "How To Buy?",
      howToBuyDesc: "Screenshot a product and send it to us on WhatsApp with your address and phone number."
    },
    contact: { title: "Contact Us" },
    footer: {
      copyright: "© 2026 Yara Store. All rights reserved.",
      designedBy: "Designed by Yara Store"
    },
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
      { title: "پشتیوانی 24/7", desc: "پرسیارێکتان هەیە؟ تیمی پشتگیری ٢٤/٧" },
      { title: "گەڕاندنەوەی ئاسان", desc: "ئەگەر بەرهەمەکە گونجاو نەبوو، بینێرەوە — ئاسان و خێرا" }
    ],
    categories: {
      shopTitle: "بەرهەم",
      howToBuyTitle: "چۆنیەتی کڕین؟",
      howToBuyDesc: "سکرین شۆت بۆ بەرهەمێک بکە و لە واتسئەپ بۆمان بنێرە."
    },
    contact: { title: "پەیوەندیمان پێوە بکە" },
    footer: {
      copyright: "© 2026 Yara Store. All rights reserved.",
      designedBy: "Designed by Yara Store"
    },
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
    nav: { home: "الرئيسية", shop: "المنتجات", contact: "اتصل بنا" },
    home: { title: "حدد أسلوبك", shopBtn: "تسوق الآن" },
    features: [
      { title: "توصيل سريع", desc: "استلم ملابسك بسرعة وفي الوقت المحدد" },
      { title: "دعم 24/7", desc: "فريق الدعم متاح على مدار الساعة" },
      { title: "إرجاع سهل", desc: "إذا لم يكن مناسبًا، أعده بسهولة" }
    ],
    categories: {
      shopTitle: "المتجر",
      howToBuyTitle: "كيفية الشراء؟",
      howToBuyDesc: "قم بتصوير المنتج وأرسله لنا على واتساب."
    },
    contact: { title: "اتصل بنا" },
    footer: {
      copyright: "© 2026 Yara Store. جميع الحقوق محفوظة.",
      designedBy: "تصميم متجر يارا"
    },
    products: [
      { name: "بنفسجي", price: "10,000 د.ع" },
      { name: "أسود", price: "10,000 د.ع" },
      { name: "بني", price: "10,000 د.ع" },
      { name: "برتقالي", price: "10,000 د.ع" },
      { name: "وردي", price: "10,000 د.ع" }
    ]
  }
};


// =======================
// Change Language
// =======================
function changeLanguage(lang) {
  const t = translations[lang];

  // RTL support
  if (lang === "ar" || lang === "ku") {
    document.body.style.direction = "rtl";
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
// Flag Click Animation
// =======================
const flags = document.querySelectorAll('.lang-dropdown-card img');
const mainFlag = document.getElementById("currentFlag");

flags.forEach(flag => {
  flag.addEventListener('click', (e) => {
    const lang = e.target.dataset.lang;
    changeLanguage(lang);

    mainFlag.src = e.target.src;

    mainFlag.classList.add("jump");
    setTimeout(() => {
      mainFlag.classList.remove("jump");
    }, 500);
  });
});


// =======================
// Auto language on load
// =======================
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang");

  if (savedLang) {
    changeLanguage(savedLang);
  } else {
    const userLang = navigator.language;

    if (userLang.includes("ar")) {
      changeLanguage("ar");
    } else if (userLang.includes("ku")) {
      changeLanguage("ku");
    } else {
      changeLanguage("en");
    }
  }
});
