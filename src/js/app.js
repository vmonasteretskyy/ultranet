import $ from "jquery";
import "../bootstrap/js/bootstrap.min.js";
import IMask from 'imask';


if ($('*').is('.form-connect')) {
let element = document.getElementById('mask-phone');
let maskOptions = {
  mask: '+{38}(000)000-00-00'
};
let mask = IMask(element, maskOptions);
}

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

if ($('*').is('.contact')) {

//map
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
}

if ($('*').is('.tarif-main')) {
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
 
   $('.svg-dropt').css("transform","rotate(180deg)");
      $('.box-show-check').slideDown( "slow" )
  },
  function () {
    $('.box-show-check').slideUp( "slow" )
    $('.svg-dropt').css("transform","rotate(0deg)");
    
  }

]);
// $('.connect-dropt').click(function () {
//   if(  $('.box-show-check').slideUp()){
//    $('.svg-dropt').css("transform","rotate(180deg)");
 
//     $('.box-show-check').slideDown( "slow" )
//   }
// else{ if( $('.box-show-check').slideDown()){
  
//      $('.box-show-check').slideUp( "slow" )
//    }
//   }
// });





$('.action-txt').toggleClick([
  function () {
   $('.show-actions').slideDown( "slow" );
   $('.show-actions').css("display","flex");

   $('.svg-actions').css("transform","rotate(180deg)");
  },
  function () {
    $('.show-actions').slideUp();
   $('.svg-actions').css("transform","rotate(0deg)");
   $('.show-move-friend').slideUp();

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
  // $('.box-show-check').slideUp();
  $('.svg-dropt').css("transform","rotate(0deg)");

  
});
$('.check2').click(function () {
  $(".dropt-2").css("display","inline");
  $(".dropt-1").css("display","none");
  $(".dropt-3").css("display","none");
  $(".dropt-4").css("display","none");
  // $('.box-show-check').slideUp();
  // $('.show-move-friend').slideUp();

  $('.svg-dropt').css("transform","rotate(0deg)");
});
$('.check3').click(function () {
  $(".dropt-3").css("display","inline");
  $(".dropt-1").css("display","none");
  $(".dropt-2").css("display","none");
  $(".dropt-4").css("display","none");
  // $('.box-show-check').slideUp();
  // $('.show-move-friend').slideUp();

  $('.svg-dropt').css("transform","rotate(0deg)");

});
$('.check4').click(function () {
  $(".dropt-4").css("display","inline");
  $(".dropt-1").css("display","none");
  $(".dropt-2").css("display","none");
  $(".dropt-3").css("display","none");
  $('.box-show-check').slideUp();
  $('.svg-dropt').css("transform","rotate(0deg)");
  

  if ($("#elem4").is(":checked")) {  
    $('.show-move-friend').slideDown();
  }
  if ($('#elem4').not(':checked').length) {
    $('.show-move-friend').slideUp();
    // $('.box-show-check').slideDown();

}
});


}
//mmodal
 
$('.tarif-item1').click(function () {
  $('.block-home-internet').fadeOut();
  $('.tarif-item1').css("background","#34A0D9");
  $('.tarif-item1').css("color","white");
  $('.tarif-item2').css("color","#ABABAB");
  $('.tarif-item2').css("background","white");
  $('.privat-home').fadeOut();
  $('.block-home-internet').fadeIn();
  $('.txt-privat-home').fadeOut();
  $('.txt-business-home').fadeOut();
  $('.business').fadeOut();
  $('.tarif-item3').css("background","white");
  $('.tarif-item3').css("color","#ABABAB");
  })

$('.tarif-item2').click(function () {
  $('.block-home-internet').fadeOut();
  $('.tarif-item2').css("background","#34A0D9");
  $('.tarif-item2').css("color","white");
  $('.tarif-item1').css("color","#ABABAB");
  $('.tarif-item1').css("background","white");
  $('.privat-home').fadeIn();
  $('.txt-privat-home').fadeIn();
  $('.txt-business-home').css("display","none");
  $('.business').fadeOut();
  $('.tarif-item3').css("background","white");
  $('.tarif-item3').css("color","#ABABAB");
  
  })
  $('.tarif-item3').click(function () {
    $('.block-home-internet').fadeOut();
    $('.tarif-item2').css("background","white");
    $('.tarif-item2').css("color","#ABABAB");
    $('.tarif-item1').css("color","#ABABAB");
    $('.tarif-item1').css("background","white");
    $('.privat-home').fadeOut();
    $('.txt-privat-home').css("display","none");
    $('.txt-business-home').fadeIn();
    $('.business').fadeIn();
    $('.tarif-item3').css("background","#34A0D9");
  $('.tarif-item3').css("color","white");
    })
//change-tarif
$('.close-mod1').click(function () {
$('#change_tarif').modal('hide');
$('#change_privat-tarif').modal('hide');
$('#ch-business-law').modal('hide');
 

})
//connect tarif
$('.close-mod2').click(function () {
  $('#connect_internet').modal('hide');
  $('#connect_privat-home').modal('hide');
  $('#business-fop').modal('hide');
  $('#ch-business-fop').modal('hide');
  $('#business-law').modal('hide');
 
})

  //connect tarif
  // $('.private-change-close').click(function () {
  //   $('#change_privat-tarif"').modal('hide');
  // })
  
  // $('.connect-privat-close').click(function () {
  //   $('#connect_privat-home"').modal('hide');
  // })
  //radio input
  $('#radio-2').click(function () {
  if ($("#radio-2").is(':checked')) {
      $('.calculator-speed').slideDown();

 }
})
$('#radio-1').click(function () {
  if ($("#radio-1").is(':checked')) {
      $('.calculator-speed').slideUp();

 }
})


 $('#radio-4').click(function () {
  if ($("#radio-4").is(':checked')) {
      $('.calculator-speed').slideDown();

 }
})
$('#radio-3').click(function () {
  if ($("#radio-3").is(':checked')) {
      $('.calculator-speed').slideUp();

 }
})