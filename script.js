const hamburgerToggle = document.querySelector(".hamburger-toggle input");
const nav = document.querySelector("navbar2 nav ul");
var prevScrollpos; // variabel utk simpan data posisi scrolling terakhir

// fungsi cekidot layar
function checkwindowSize() {
  if (window.innerWidth > 1011) {
    // lebih dari 1011 px slide hamburger menu ilang
    document.body.classList.remove("stopScroll");
  } else if (nav.classList.contains("slideMenu")) {
    document.body.classList.add("stopScroll");
  }
}

//panggil fungsi ini terus
checkwindowSize();

//panggil fungsi ini terus kondisi resize layar
window.addEventListener("resize", checkwindowSize);

function toggleAnimHamburgerMenu() {
  // untuk memunculkan fungsi jika klik dari hamburgerToggle
  nav.classList.toggle("slideMenu");
  // berhenti scrolling (target ke body karena yang dimasukkin ke body yaitu navbar2/hamburger menu)
  document.body.classList.toggle("stopScroll");
  checkwindowSize();
}

// toggle hamburger menu
hamburgerToggle.addEventListener("click", toggleAnimHamburgerMenu);

// hilangin navbar ketika scroll down & munculin lagi ketika scroll up
window.addEventListener("scroll", function () {
  // untuk memunculkan fungsi jika scroll dari window a.k.a screen/layar kita
  var currentScrollpos =
    window.pageYOffset || document.documentElement.scrollTop; // scroll position saat sedang dijalankan
  if (!nav.classList.contains("slideMenu")) {
    //kondisi ini dijalanin kalo lagi gak munculin hamburgermenu/slidemenu
    if (prevScrollpos > currentScrollpos) {
      document.querySelector("navbar1 nav").style.top = "0";
      document.querySelector("navbar2 nav").style.top = "0";
    } else {
      document.querySelector("navbar1 nav").style.top = "-500px";
      document.querySelector("navbar2 nav").style.top = "-500px";
    }
  }
  prevScrollpos = currentScrollpos; // auto simpan data lokasi scrollingan terakhir
});

// window.onscroll = function () {
//   var currentScrollpos = window.pageYOffset;
//   if (prevScrollpos > currentScrollpos) {
//     document.querySelector("navbar1").style.top = "0";
//     document.querySelector("navbar2").style.top = "0";
//   } else {
//     document.querySelector("navbar").style.top = "-500px";
//     document.querySelector("navbar2").style.top = "-500px";
//   }
//   prevScrollpos = currentScrollpos;
// };

// // kondisi load
// function hamburgerlist_icononlywhensmalldisplay() {
//   // kondisi mau hapus text tanpa ilangin logo
//   // kasih variabel untuk select semua tag "li"
//   var listitems = nav.getElementsByTagName("li");
//   //setiap li yang ada a-nya masuk ke kondisi IF
//   for (var i = 0; i < listitems.length; i++) {
//     var link = listitems[i].getElementsByTagName("a")[0];
//     // jika ukuran layar (window innerheight) itu kurang atau sama dgn 560 px
//     if (window.innerHeight <= 400) {
//       // jika a memiliki object maka yang dihapus hanya text saja (TEXT NODE), nggak sama iconnya
//       if (link.getElementsByTagName("object").length > 0) {
//         Array.from(link.childNodes).forEach((node) => {
//           if (node.nodeType === Node.TEXT_NODE) {
//             link.removeChild(node);
//           }
//           window.location.reload(true);
//         });
//       }
//     }
//   }
// }

//berubah liat kondisi tanpa reload
// var observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     console.log("mutation observed:", mutation);
//   });
//   hamburgerlist_icononlywhensmalldisplay();
// });

// var config = { childList: true, subtree: true };

// observer.observe(document, config);
// hamburgerlist_icononlywhensmalldisplay();

// // window.addEventListener("DOMContentLoaded", (event) => {
// //   var linknotext = document.querySelector("navbar2 nav ul a");
// //   if (window.innerHeight <= 560) {
// //     linknotext.textContent = "hahadadsad";
// //   }
// // });

// if (window.innerWidth > 1011) {
//   document.body.classList.remove("stopScroll");
// } else if

// window.addEventListener("resize", function () {
//   if (
//     window.getComputedStyle(document.querySelector("navbar1 nav")).display ===
//     "flex" || window.getComputedStyle(document.querySelector("navbar2 nav")).display === "none" || !nav.classList.contains('slideMenu')
//   ) {
//     // nav.classList.remove("slideMenu");
//     document.body.classList.remove("stopScroll");
//   }
//   else {
//     // document.body.classList.add("stopScroll");
//     hamburgerToggle.addEventListener("click", toggleAnimHamburgerMenu);
//   }
// });
// hamburgerToggle.removeEventListener("click", function () {});
// } else if (
//   window.getComputedStyle(document.querySelector("navbar2 nav")).display ===
//   "none"
//     // ) {
//     //   hamburgerToggle.removeEventListener("click", function () {});
//   }
//   // if (document.querySelector.contains(".navbar1 nav")) {
//   //   nav.classList.remove("slideMenu");
//   //   document.body.classList.remove("stopScroll");
//   // }
// });
