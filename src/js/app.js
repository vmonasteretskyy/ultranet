import $ from "jquery";
import "../bootstrap/js/bootstrap.min.js";
import IMask from 'imask';

function initMap() {
  // 51.4916588,31.3032475
  const uluru = { lat: 51.4916388, lng: 31.3037690 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19,
    center: uluru,
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Интернет-провайдер "Ультранет"'
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,

  });
  infowindow.open(map, marker);
}
initMap() 

let element = document.getElementById('mask-phone');
let maskOptions = {
  mask: '+{38}(000)000-00-00'
};
let mask = IMask(element, maskOptions);


    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu_button', '.burger-menu_lines');
        let links = menu.find('.burger-menu_link');
        let overlay = menu.find('.burger-menu_overlay');
    
        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
    
        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());
    
        function toggleMenu() {
            menu.toggleClass('burger-menu_active');
    
        }
    }
    burgerMenu('.burger-menu');
//select
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-selects2");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
 
document.addEventListener("click", closeAllSelect);




//online-chat
$(document).ready(function () {
  $('.svg-support').click(function () {
      $(".container-chat").fadeIn();
  });
  $('.close-chat').click(function () {
    $(".container-chat").fadeOut();
});



});
//popup  Заявка на підключення домашнього інтернету
$.fn.toggleClick = function (funcArray) {
  return this.click(function () {
      var elem = $(this);
      var index = elem.data('index') || 0;

      funcArray[index]();
      elem.data('index', (index + 1) % funcArray.length);
  });
};
$('.connect-dropt').toggleClick([
  function () {
   $('.box-show-check').slideDown( "slow" );
   $('.svg-dropt').css("transform","rotate(180deg)");

   
  },
  function () {
    $('.box-show-check').slideUp();
   $('.svg-dropt').css("transform","rotate(0deg)");

  }
]);
$('.action-txt').toggleClick([
  function () {
   $('.show-actions').slideDown( "slow" );
   $('.show-actions').css("display","flex");

   $('.svg-actions').css("transform","rotate(180deg)");
  },
  function () {
    $('.show-actions').slideUp();
   $('.svg-actions').css("transform","rotate(0deg)");

  }
]);
$('.tv-text').toggleClick([
  function () {
    // $('.tv-text-hide').css("display","none");
    
   $('.tv-show').slideDown( "slow" );
   $('.tv-show').css("display","block");

   $('.svg-show').css("transform","rotate(180deg)");
  },
  function () {
    // $('.tv-text-hide').css("display","block");

    $('.tv-show').slideUp();
   $('.svg-show').css("transform","rotate(0deg)");

  }
]);

$('.check1').click(function () {
  $(".dropt-1").css("display","inline");
  $(".dropt-3").css("display","none");
  $(".dropt-2").css("display","none");
  $(".dropt-4").css("display","none");
});
$('.check2').click(function () {
  $(".dropt-2").css("display","inline");
  $(".dropt-1").css("display","none");
  $(".dropt-3").css("display","none");
  $(".dropt-4").css("display","none");
});
$('.check3').click(function () {
  $(".dropt-3").css("display","inline");
  $(".dropt-1").css("display","none");
  $(".dropt-2").css("display","none");
  $(".dropt-4").css("display","none");

});
$('.check4').click(function () {
  $(".dropt-4").css("display","inline");
  $(".dropt-1").css("display","none");
  $(".dropt-2").css("display","none");
  $(".dropt-3").css("display","none");
});

//
$('.mask-phone').mask('+7 (999) 999-99-99');


//map
