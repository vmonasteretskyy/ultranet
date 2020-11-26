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
x = document.getElementsByClassName("custom-selects2");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
 
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
   
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
  
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
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
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


if ($('*').is('.suport-chat')) {
  $.fn.toggleClick = function (funcArray) {
    return this.click(function () {
      var elem = $(this);
      var index = elem.data('index') || 0;

      funcArray[index]();
      elem.data('index', (index + 1) % funcArray.length);
    });
  };
  //online-chat
  $('.close-chat').click(function () {
    $(".container-chat").fadeOut();
    $(".container-chat").css("box-shadow","none");

  });
  $('.svg-support').toggleClick([
    function () {
      $(".container-chat").fadeIn();
      $(".container-chat").css("box-shadow","0 0 0 9999px rgba(0,0,0, 0.3)");

    },
    function () {
      $(".container-chat").fadeOut();
      $(".container-chat").css("box-shadow","none");

    }
  ]);

}

 
$(".burger-menu_button").click(function () {
  $(".burger").toggleClass("shadow");
  })

if ($('*').is('.contact')) {

  //map
  function initMap() {
    // 51.4916588,31.3032475
    const uluru = { lat: 51.4916388, lng: 31.3037690 };
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

      $('.svg-dropt').css("transform", "rotate(180deg)");
      $('.box-show-check').slideDown("slow")
    },
    function () {
      $('.box-show-check').slideUp("slow")
      $('.svg-dropt').css("transform", "rotate(0deg)");

    }

  ]);

  $('.action-txt').toggleClick([
    function () {
      $('.show-actions').css("height", "auto");
      $('.show-actions').slideDown();
      $('.show-actions').css("display", "flex");
      $('.svg-actions').css("transform", "rotate(180deg)");
    },
    function () {
      $('.show-actions').slideUp();
      $('.svg-actions').css("transform", "rotate(0deg)");
      $('.show-move-friend').slideUp();

    }
  ]);
  $('.tv-text').toggleClick([
    function () {
      $('.tv-text-hide').fadeOut();
      $('.tv-text').css("position", "absolute");
      $('.tv-text').css("right", "35px");
      $('.tv-show').slideDown("slow");
      $('.tv-show').css("display", "block");
      $('.svg-show').css("transform", "rotate(180deg)");
      if (window.matchMedia('(max-width: 532px)').matches) {
        $('.tv-text').css("right", "10px");
  
        }
    },
    function () {
      $('.tv-text-hide').fadeIn()
      $('.tv-text').css("position", "relative");
      $('.tv-text').css("right", "0px");

      $('.tv-show').slideUp();
      $('.svg-show').css("transform", "rotate(0deg)");

    }
  ]);

  $('.check1').click(function () {
    $(".dropt-1").css("display", "inline");
    $(".dropt-3").css("display", "none");
    $(".dropt-2").css("display", "none");
    $(".dropt-4").css("display", "none");
  });
  $('.check2').click(function () {
    $(".dropt-2").css("display", "inline");
    $(".dropt-1").css("display", "none");
    $(".dropt-3").css("display", "none");
    $(".dropt-4").css("display", "none");

  });
  $('.check3').click(function () {
    $(".dropt-3").css("display", "inline");
    $(".dropt-1").css("display", "none");
    $(".dropt-2").css("display", "none");
    $(".dropt-4").css("display", "none");
  });
  $('.check4').click(function () {
    $(".dropt-4").css("display", "inline");
    $(".dropt-1").css("display", "none");
    $(".dropt-2").css("display", "none");
    $(".dropt-3").css("display", "none");
  });
}

$('.close').click(function () {
  $('.show-move-friend').slideUp();
  // $('.tv-show').slideUp();
  // $('.svg-show').css("transform", "rotate(0deg)");
  $('.show-actions').slideUp();
  $('.svg-actions').css("transform", "rotate(0deg)");
  $('.show-move-friend').slideUp();
  $('.box-show-check').slideUp();
  $('.svg-dropt').css("transform", "rotate(0deg)");
  // $('.calculator-speed').slideUp();
  // $("#radio-3").attr('checked','checked');
  // $("#radio-1").attr('checked','checked');

})

if ($('*').is('.box-show-check')) {
  $('.elem4').toggleClick([
    function () {
      $('.show-move-friend').slideDown();

    },
    function () {
      $('.show-move-friend').slideUp();
    }
  ]);
}

//mmodal
$('.tarif-item1').click(function () {
  $('.block-home-internet').fadeOut();
  $('.tarif-item1').css("background", "#34A0D9");
  $('.tarif-item1').css("color", "white");
  $('.tarif-item2').css("color", "#ABABAB");
  $('.tarif-item2').css("background", "white");
  $('.privat-home').fadeOut();
  $('.block-home-internet').fadeIn();
  $('.txt-privat-home').fadeOut();
  $('.txt-business-home').fadeOut();
  $('.business').fadeOut();
  $('.tarif-item3').css("background", "white");
  $('.tarif-item3').css("color", "#ABABAB");
})

$('.tarif-item2').click(function () {
  $('.block-home-internet').fadeOut();
  $('.tarif-item2').css("background", "#34A0D9");
  $('.tarif-item2').css("color", "white");
  $('.tarif-item1').css("color", "#ABABAB");
  $('.tarif-item1').css("background", "white");
  $('.privat-home').fadeIn();
  $('.txt-privat-home').fadeIn();
  $('.txt-business-home').css("display", "none");
  $('.business').fadeOut();
  $('.tarif-item3').css("background", "white");
  $('.tarif-item3').css("color", "#ABABAB");

})
$('.tarif-item3').click(function () {
  $('.block-home-internet').fadeOut();
  $('.tarif-item2').css("background", "white");
  $('.tarif-item2').css("color", "#ABABAB");
  $('.tarif-item1').css("color", "#ABABAB");
  $('.tarif-item1').css("background", "white");
  $('.privat-home').fadeOut();
  $('.txt-privat-home').css("display", "none");
  $('.txt-business-home').fadeIn();
  $('.business').fadeIn();
  $('.tarif-item3').css("background", "#34A0D9");
  $('.tarif-item3').css("color", "white");
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
  $('#connect_tv').modal('hide');
  $('#connect_tv196').modal('hide');
  $('#connect_tv204').modal('hide');
  $('#connect_mob').modal('hide');

})
$('.datail_btn').click(function () {
  $('#connect_mob').modal('hide');
  $('#details').modal('hide');
})
//radio input
if ($('*').is('.change_privat-tarif')) {

  $('#radio-2').click(function () {
  
    if ($("#radio-2").is(':checked')) {
    $('.calculator-speed').css("animation-name","highlite");
      $('.calculator-speed').slideDown();    
    }
  })
  $('#radio-1').click(function () {
    if ($("#radio-1").is(':checked')) {
      $('.calculator-speed').slideUp();
      $('#rezultat').html('180');
    }
  })

  $('#radio-4').click(function () {
    if ($("#radio-4").is(':checked')) {
        $('.calculator-speed').slideDown();
        $('.calculator-speed').css("animation-name","highlite");
    }
  })
  $('#radio-3').click(function () {
    if ($("#radio-3").is(':checked')) {
      $('.calculator-speed').slideUp();
      $('#rezultat2').html('180');

    }
  })
}


$('#collapseOne').on('hidden.bs.collapse', function () {
  $('.arr-accord1').css("transform", "rotate(0deg)")

})
$('#collapseOne').on('shown.bs.collapse', function () {
  $('.arr-accord1').css("transform", "rotate(180deg)")

})
//
$('#collapseTwo').on('hidden.bs.collapse', function () {
  $('.arr-accord2').css("transform", "rotate(0deg)")

})

$('#collapseTwo').on('shown.bs.collapse', function () {
  $('.arr-accord2').css("transform", "rotate(180deg)")


})
//
$('#collapseThree').on('hidden.bs.collapse', function () {
  $('.arr-accord3').css("transform", "rotate(0deg)")

})

$('#collapseThree').on('shown.bs.collapse', function () {
  $('.arr-accord3').css("transform", "rotate(180deg)")
})
//
$('#collapseFour').on('hidden.bs.collapse', function () {
  $('.arr-accord4').css("transform", "rotate(0deg)")

})
$('#collapseFour').on('shown.bs.collapse', function () {
  $('.arr-accord4').css("transform", "rotate(180deg)")
})
//news
$('.txt-show-more').click(function () {
  $('.disappear-box').css("display", "flex");
})
//tabs
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function () {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

if ($('*').is('.main-privacy')) {
  $('.change_taruf').click(function () {
    $('.tab_elem1').fadeOut();
    $('.appear-taruf').fadeIn();
    $('.tarif-list').fadeIn();

  })
  $('.tab').click(function () {
    $('.magazine-block').css("display", "none");
    $('.appear-taruf').fadeOut();
    $('.appear_passoword').fadeOut();
    $('.appear_pease').fadeOut();
    $('.tab_content').fadeIn();
    $('.datail-list').fadeOut();
    $('.tarif-list').fadeOut();
    $('.pass-list').fadeOut();
    $('.peause-list').fadeOut();
    $('.tv-list').css("display", "none");
    $('.mob-list').css("display", "none");
    $('.pay-list').css("display", "none");
    $('.appear_table').fadeOut();
    $('.mag-list').css("display", "none");
    $('.rec-list').fadeOut();
    $('.receipt-block').css("display", "none");
    $('.ip-list').css("display", "none");
    $('.net-list').css("display", "none");
    $('.appear_instruct').css("display", "none");
    $('.instr-list').css("display", "none");
    $('.appear_set_dir').css("display", "none");
    $('.dir-list').css("display", "none");
    $('.tenda-list').css("display", "none");
    $('.appear_tenda').css("display", "none");
    $('.appear_windows7').css("display", "none");
    $('.appear_windows10').css("display", "none");
    $('.glass-list').css("display", "none");
    $('.wind-list').css("display", "none");
    $('.windows-list').css("display", "none");
    $('.windows-list').css("display", "none");
    $('.looking_glass').css("display", "none");
    $('.magazine-block0').css("display", "none");

  })
  $('.come-back').click(function () {
    $('.tab_elem1').fadeIn();
    $('.appear-taruf').fadeOut();
    $('.appear_passoword').fadeOut();
    $('.appear_pease').fadeOut();
    $('.appear_table').fadeOut();
    $('.datail-list').fadeOut();
    $('.tarif-list').fadeOut();
    $('.pass-list').fadeOut();
    $('.peause-list').fadeOut();
    $('.magazine-block0').fadeOut();
    $('.pay-list').fadeOut();
    $('.mag-list').fadeOut();
    $('.tab_general').addClass('active');
    $('.tab-pay').removeClass('active');
    

  })

  $('.close-back-tele').click(function () {
    $('.tab_content').fadeOut();

  })

  $('.close_tab').click(function () {
    $('.tab_content').fadeOut();
  })
  $('.change-pass').click(function () {
    $('.appear_passoword').fadeIn();
    $('.tab_elem1').fadeOut();
    $('.tab_elem1').fadeOut();
    $('.pass-list').fadeIn();

  })
  $('.pause').click(function () {
    $('.appear_pease').animate({
      scrollTop: 0
  }, 500);
 
    $('.appear_pease').fadeIn();
    $('.tab_elem1').fadeOut();
    $('.peause-list').fadeIn();

  })
 
  
 
  $('.peause-modal').click(function () {
    $('#peause_modal').modal('hide');
    $('#ip-order_modal').modal('hide');
    $('.peause_b').css("display", "none");
    $('.restore').css("display", "block");
    $(".serv-not").html("Послуга замовлена");
    $(".static-ip").html("10.128.2.20");
    $(".active_txt").html("Призупинений");
  })
  $('.peause-modal2').click(function () {
    $('#restore_modal').modal('hide');
    $('.peause_b').css("display", "block");
    $('.restore').css("display", "none");
    $('#ip-cansel_modal').modal('hide');
    $(".serv-not").html("Послуга не замовлена");
    $(".static-ip").html("Послуга не замовлена");
    $(".active_txt").html("Активний");

  })
  $('.cansel').click(function () {
    $('#peause_modal').modal('hide');
    $('#restore_modal').modal('hide');
  })
  $('.table_trafic tr').click(function () {
    $('.table_trafic').css("display", "none");
    $('.table_day').fadeIn();
    $('.day_txt').fadeIn();
    $('.day-num').css("box-shadow", "0px 1px black");
    $('.month').css("box-shadow", "0px 1px white");
    $(".month").mouseover(function () {
      $(".month").css("border-bottom", "1px solid black")
    });
    $(".month").mouseout(function () {
      $(".month").css("border-bottom", "1px solid transparent");
    });
  })
  $('.month').click(function () {
    $('.table_trafic').fadeIn();
    $('.table_day').css("display", "none");
    $('.day_txt').fadeOut();
    $('.month').css("box-shadow", "0px 1px black");
    $(".month").mouseover(function () {
      $(".month").css("border-bottom", "none")
    });
    $(".month").mouseout(function () {
      $(".month").css("border-bottom", "none");
    });
  })
  $('.table_year tr').click(function () {
    $('.table_year').css("display", "none");
    $('.month').fadeIn();
    $('.txt_slash').fadeIn();
    $('.table_trafic').fadeIn();
    $('.txt_year').css("box-shadow", "0px 1px white");
    $(".txt_year").mouseover(function () {
      $(".txt_year").css("border-bottom", "1px solid black")
    });
    $(".txt_year").mouseout(function () {
      $(".txt_year").css("border-bottom", "1px solid transparent");
    });
  })

  $('.txt_year').click(function () {
    $('.table_year').fadeIn();
    $('.table_day').css("display", "none");
    $('.table_trafic').css("display", "none");
    $('.month').fadeOut();
    $('.txt_year').css("box-shadow", "0px 1px black");
    $('.day_txt').fadeOut();
    $('.txt_slash').fadeOut();
    $(".txt_year").mouseover(function () {
      $(".txt_year").css("border-bottom", "none")
    });
    $(".txt_year").mouseout(function () {
      $(".txt_year").css("border-bottom", "none");
    });

  })


  $('.all-years').click(function () {
    $('.txt_year').fadeOut();
    $('.table_year').css("display", "none");
    $('.table_all-years').fadeIn();
    $('.table_day').fadeOut();
    $('.table_trafic').fadeOut();
    $('.month').fadeOut();
    $('.all-years').css("box-shadow", "0px 1px black");
    $('.day_txt').fadeOut();
    $('.txt_slash2').fadeOut();
    $('.txt_slash').fadeOut();
    $(".all-years").mouseover(function () {
      $(".all-years").css("border-bottom", "none");
    });
    $(".all-years").mouseout(function () {
      $(".all-years").css("border-bottom", "none");
    });
  })

  $('.table_all-years tr').click(function () {
    $('.table_year').fadeIn();
    $('.table_all-years').fadeOut();
    $('.txt_slash2').fadeIn();
    $('.txt_year').fadeIn();
    $('.txt_year').css("box-shadow", "0px 1px black");
    $('.all-years').css("box-shadow", "none");

    $(".all-years").mouseover(function () {
      $(".all-years").css("border-bottom", "1px solid black");
    });
    $(".all-years").mouseout(function () {
      $(".all-years").css("border-bottom", "1px solid transparent");
    });
  })
  $('.open-table').click(function () {
    $('.appear_table').animate({
      scrollTop: 0
  }, 500);
  $('.appear_table').fadeIn();
    $('.datail-list').fadeIn();

    $('.tab_elem1').css("display", "none");

  })
  $('.tab-tele').click(function () {
    $('.tv-list').fadeIn();
  })
  $('.tab-mobile').click(function () {
    $('.mob-list').fadeIn();
  })
  $('.tab-pay').click(function () {
    $('.pay-list').fadeIn();
  })

  $('.magazine').click(function () {
    $('.magazine-block').fadeIn();
    $('.tab_item').css("display", "none");
    $('.mag-list').fadeIn();
  })
  $('.close-pay').click(function () {
    $('.magazine-block').fadeOut();
    $('.tab_pay').fadeIn();
    $('.mag-list').css("display", "none");
    $('.rec-list').fadeOut();
    $('.receipt-block').css("display", "none");
    $('.appear_instruct').css("display", "none");

  })


  $('.payments').click(function () {
    $('.receipt-block').fadeIn();
    $('.rec-list').fadeIn();

    $('.tab_item').css("display", "none");
    $('.receipt-list').fadeIn();
  })

  $('.tab_ip-ad').click(function () {
    $('.ip-list').fadeIn();
  })
  $('.tab_net').click(function () {
    $('.net-list').fadeIn();
  })

  $('.print').click(function () {
    window.print();
  });
  //instructiob
  $('.instruction').click(function () {
    $('.appear_instruct').fadeIn();
    $('.network_set').css("display", "none");
    $('.instr-list').fadeIn();


  })
  $('.close-inst').click(function () {
    $('.appear_instruct').css("display", "none");
    $('.instr-list').css("display", "none");
    $('.network_set').fadeIn();

  })

  $('.setting-dir').click(function () {
    $('.appear_instruct').css("display", "none");
    $('.appear_set_dir').fadeIn();
    $('.dir-list').fadeIn();

  })

  $('.close-setting').click(function () {
    $('.appear_instruct').fadeIn();
    $('.appear_set_dir').css("display", "none");
    $('.dir-list').css("display", "none");
    $('.tenda-list').css("display", "none");
    $('.appear_tenda').css("display", "none");
    $('.appear_windows7').css("display", "none");
    $('.wind-list').css("display", "none");
    $('.appear_windows10').css("display", "none");
    $('.windows-list').css("display", "none");
    $('.glass-list').css("display", "none");

    $('.looking_glass').css("display", "none");
  })

  $('.setting-tenda').click(function () {
    $('.appear_instruct').css("display", "none");
    $('.appear_tenda').fadeIn();
    $('.tenda-list').fadeIn();

  })
  $('.setting-wind7').click(function () {
    $('.appear_instruct').css("display", "none");
    $('.appear_windows7').fadeIn();
    $('.wind-list').fadeIn();

  })
  $('.setting-wind10').click(function () {
    $('.appear_instruct').css("display", "none");
    $('.appear_windows10').fadeIn();
    $('.windows-list').fadeIn();

  })
  $('.look-glass').click(function () {
    $('.appear_instruct').css("display", "none");
    $('.looking_glass').fadeIn();
    $('.glass-list').fadeIn();

  })
  $('.magazine-check').click(function () {
    $('.magazine-block0').fadeIn();
    $('.tab_elem1').css("display", "none");
    $('.pay-list').fadeIn();
    $('.mag-list').fadeIn();
    $('.tab-pay').addClass('active');
    $('.tab_general').removeClass('active');

    
    
  })

  if ($('*').is('.looking_glass')) {
    $('#radio-2').click(function () {
      if ($("#radio-2").is(':checked')) {
        $('.look-li1').css("display", "none");
        $('.look-li2').html("Запити відправляються з нашого сервера, що дозволяє перевірити якість зв'язку, а також локалізувати можливі несправності абонентів.");
      }
    })
    $('#radio-1').click(function () {
      if ($("#radio-1").is(':checked')) {
        $('.look-li1').fadeIn();
        $('.look-li2').html("Велике час відгуку шлюзу може не відображати його фактичної пропускної здатності.");
      }
    })
  }

}
 

 
//adapt table

if (window.matchMedia('(max-width: 767px)').matches) {
  $('.tab').click(function () {
    $('#header').fadeOut();
  })
  $('.close-tab-menu').click(function () {
    $('#header').fadeIn();
  
  })
  $('.close-back-tele').click(function () {
    $('#header').fadeIn();
  })
  $('.close_tab').click(function () {
    $('.tab_general').removeClass('.active');
  })
  
}

 
  
 var naavy = document.querySelectorAll(".rules-menu li a");
var length = naavy.length;

for(var i=0; i<length; i++) {
    naavy[i].addEventListener("click", function() {
        highlight(this);
    });
}

function highlight(element) {
    for(var i=0; i<length; i++) {
       naavy[i].classList.remove("active");
    }
    
    element.classList.add("active");
}

const myCount = function() {
  $('.show-actions p').html( 'Вибрано ' + $('.box-show-check input:checked').length + ' акції' );
};
// myCount();

$('.box-show-check input').on('click', myCount);


if (window.matchMedia('(max-width: 575px)').matches) {
  let first = function() {
    $('.short-text').html('Сума, грн');
    $('#result-table td:first-of-type').html('Всього:');
    $('.traf_gb').html('Вхід. / Вих. (ГБ)');
    $('.all_gb').html('Всього (ГБ)');


  };
  first();

// (function( $ ) {
//   let a = new String;
//   a = $('.short-text').text();
//   let b = a.split(' ')[0];
//   $(b).css("display", "block");  
// })();
}
// window.myFunction = function () { myFunction() };

// function myFunction() {
//   let total = $('#calcul1').val() * 14;
//   $('#rezultat').html((total));

//   let total1 = $('#calcul2').val() * 14;
//   $('#rezultat2').html((total1));
// }
 
$('#calcul1').keyup(function(){
  var total = $('#calcul1').val() * 14;
  $('#rezultat').html((total));
});
$('#calcul2').keyup(function(){
  var total = $('#calcul2').val() * 14;
  $('#rezultat2').html((total));
});
$('#calcul1').change(function(){
  var total = $('#calcul1').val() * 14;
  $('#rezultat').html((total));
});
$('#calcul2').change(function(){
  var total = $('#calcul2').val() * 14;
  $('#rezultat2').html((total));
});
  
// if ($('*').is('.tarif-main')) {
  $('#privat-select').click(function () {
    $('#connect_internet').modal('hide');
 
  })
// }
if ($('*').is('.tarif-main')) {


$('#home_mod').click(function () {
  if ($("option:selected", this).val() == "2") {
    // document.getElementById('home_modal').getElementsByTagName('option')[0].selected = 'selected';
    $('#connect_internet').modal('hide');
    $('#connect_privat-home').modal('show');
    $('#connect_privat-home').css("overflow-y", "scroll");
    $('.block-home-internet').fadeOut();
    $('.tarif-item2').css("background", "#34A0D9");
    $('.tarif-item2').css("color", "white");
    $('.tarif-item1').css("color", "#ABABAB");
    $('.tarif-item1').css("background", "white");
    $('.privat-home').fadeIn();
    $('.txt-privat-home').fadeIn();
    $('.txt-business-home').css("display", "none");
    $('.business').fadeOut();
    $('.tarif-item3').css("background", "white");
    $('.tarif-item3').css("color", "#ABABAB");
  } 
  if ($("option:selected", this).val() == "3") {
  $('#connect_internet').modal('hide');
  $('#connect_privat-home').css("display", "none");
  $('#business-fop').modal('show');
  $('#business-fop').css("overflow-y", "scroll");
  $('.block-home-internet').fadeOut();
  $('.tarif-item2').css("background", "white");
  $('.tarif-item2').css("color", "#ABABAB");
  $('.tarif-item1').css("color", "#ABABAB");
  $('.tarif-item1').css("background", "white");
  $('.privat-home').fadeOut();
  $('.txt-privat-home').css("display", "none");
  $('.txt-business-home').fadeIn();
  $('.business').fadeIn();
  $('.tarif-item3').css("background", "#34A0D9");
  $('.tarif-item3').css("color", "white");
  } 
  if ($("option:selected", this).val() == "4") {
    $('#connect_internet').modal('hide');
    $('#business-law').modal('show');
    $('#business-law').css("overflow-y", "scroll");
    $('.block-home-internet').fadeOut();
    $('.tarif-item2').css("background", "white");
    $('.tarif-item2').css("color", "#ABABAB");
    $('.tarif-item1').css("color", "#ABABAB");
    $('.tarif-item1').css("background", "white");
    $('.privat-home').fadeOut();
    $('.txt-privat-home').css("display", "none");
    $('.txt-business-home').fadeIn();
    $('.business').fadeIn();
    $('.tarif-item3').css("background", "#34A0D9");
    $('.tarif-item3').css("color", "white");
  } 
});
//second popup


 
$('#privat_mod').click(function () {
if ($("option:selected", this).val() == "2") {


    $('#connect_internet').css("overflow-y", "scroll");
    $('#connect_internet').modal('show');
    $('#connect_privat-home').modal('hide');
    $('.block-home-internet').fadeOut();
    $('.tarif-item1').css("background", "#34A0D9");
    $('.tarif-item1').css("color", "white");
    $('.tarif-item2').css("color", "#ABABAB");
    $('.tarif-item2').css("background", "white");
    $('.privat-home').fadeOut();
    $('.block-home-internet').fadeIn();
    $('.txt-privat-home').fadeOut();
    $('.txt-business-home').fadeOut();
    $('.business').fadeOut();
    $('.tarif-item3').css("background", "white");
    $('.tarif-item3').css("color", "#ABABAB");
  } 
  if ($("option:selected", this).val() == "3") {
    $('#business-fop').css("overflow-y", "scroll");
      $('#business-fop').modal('show');
      $('#connect_privat-home').modal('hide');
      $('.block-home-internet').fadeOut();
      $('.tarif-item2').css("background", "white");
      $('.tarif-item2').css("color", "#ABABAB");
      $('.tarif-item1').css("color", "#ABABAB");
      $('.tarif-item1').css("background", "white");
      $('.privat-home').fadeOut();
      $('.txt-privat-home').css("display", "none");
      $('.txt-business-home').fadeIn();
      $('.business').fadeIn();
      $('.tarif-item3').css("background", "#34A0D9");
      $('.tarif-item3').css("color", "white");
    } 
    if ($("option:selected", this).val() == "4") {
      $('#business-law').css("overflow-y", "scroll");
        $('#business-law').modal('show');
        $('#connect_privat-home').modal('hide');
        $('.block-home-internet').fadeOut();
        $('.tarif-item2').css("background", "white");
        $('.tarif-item2').css("color", "#ABABAB");
        $('.tarif-item1').css("color", "#ABABAB");
        $('.tarif-item1').css("background", "white");
        $('.privat-home').fadeOut();
        $('.txt-privat-home').css("display", "none");
        $('.txt-business-home').fadeIn();
        $('.business').fadeIn();
        $('.tarif-item3').css("background", "#34A0D9");
        $('.tarif-item3').css("color", "white");
      } 
});
$('#bussines-f').click(function () {
  if ($("option:selected", this).val() == "2") {
    $('#connect_internet').css("overflow-y", "scroll");
    $('#connect_internet').modal('show');
    $('#business-fop').modal('hide');
    $('.block-home-internet').fadeOut();
    $('.tarif-item1').css("background", "#34A0D9");
    $('.tarif-item1').css("color", "white");
    $('.tarif-item2').css("color", "#ABABAB");
    $('.tarif-item2').css("background", "white");
    $('.privat-home').fadeOut();
    $('.block-home-internet').fadeIn();
    $('.txt-privat-home').fadeOut();
    $('.txt-business-home').fadeOut();
    $('.business').fadeOut();
    $('.tarif-item3').css("background", "white");
    $('.tarif-item3').css("color", "#ABABAB");
  }
  if ($("option:selected", this).val() == "3") {
    $('#connect_privat-home').css("overflow-y", "scroll");
    $('#connect_privat-home').modal('show');
    $('#business-fop').modal('hide');
    $('.block-home-internet').fadeOut();
    $('.tarif-item2').css("background", "#34A0D9");
    $('.tarif-item2').css("color", "white");
    $('.tarif-item1').css("color", "#ABABAB");
    $('.tarif-item1').css("background", "white");
    $('.privat-home').fadeIn();
    $('.txt-privat-home').fadeIn();
    $('.txt-business-home').css("display", "none");
    $('.business').fadeOut();
    $('.tarif-item3').css("background", "white");
    $('.tarif-item3').css("color", "#ABABAB");
  }
  if ($("option:selected", this).val() == "4") {
    $('#business-law').css("overflow-y", "scroll");
    $('#business-law').modal('show');
    $('#business-fop').modal('hide');
  }
});
$('#bussines-ur').click(function () {
  if ($("option:selected", this).val() == "2") {
    $('#connect_internet').css("overflow-y", "scroll");
    $('#connect_internet').modal('show');
    $('#business-law').modal('hide');
    $('.block-home-internet').fadeOut();
    $('.tarif-item1').css("background", "#34A0D9");
    $('.tarif-item1').css("color", "white");
    $('.tarif-item2').css("color", "#ABABAB");
    $('.tarif-item2').css("background", "white");
    $('.privat-home').fadeOut();
    $('.block-home-internet').fadeIn();
    $('.txt-privat-home').fadeOut();
    $('.txt-business-home').fadeOut();
    $('.business').fadeOut();
    $('.tarif-item3').css("background", "white");
    $('.tarif-item3').css("color", "#ABABAB");
  }
  if ($("option:selected", this).val() == "3") {
    $('#connect_privat-home').css("overflow-y", "scroll");
    $('#connect_privat-home').modal('show');
    $('#business-law').modal('hide');
    $('.block-home-internet').fadeOut();
    $('.tarif-item2').css("background", "#34A0D9");
    $('.tarif-item2').css("color", "white");
    $('.tarif-item1').css("color", "#ABABAB");
    $('.tarif-item1').css("background", "white");
    $('.privat-home').fadeIn();
    $('.txt-privat-home').fadeIn();
    $('.txt-business-home').css("display", "none");
    $('.business').fadeOut();
    $('.tarif-item3').css("background", "white");
    $('.tarif-item3').css("color", "#ABABAB");
  }
  if ($("option:selected", this).val() == "4") {
    $('#business-fop').css("overflow-y", "scroll");
    $('#business-fop').modal('show');
    $('#business-law').modal('hide');
  }
});
$('#ch_home').click(function () {
  if ($("option:selected", this).val() == "2") {
    $('#change_tarif').modal('hide');
    $('#change_privat-tarif').modal('show');
    $('#change_privat-tarif').css("overflow-y", "scroll");
    $('.block-home-internet').fadeOut();
    $('.tarif-item2').css("background", "#34A0D9");
    $('.tarif-item2').css("color", "white");
    $('.tarif-item1').css("color", "#ABABAB");
    $('.tarif-item1').css("background", "white");
    $('.privat-home').fadeIn();
    $('.txt-privat-home').fadeIn();
    $('.txt-business-home').css("display", "none");
    $('.business').fadeOut();
    $('.tarif-item3').css("background", "white");
    $('.tarif-item3').css("color", "#ABABAB");
  } 
  if ($("option:selected", this).val() == "3") {
  $('#change_tarif').modal('hide');
  $('#connect_privat-home').css("display", "none");
  $('#ch-business-fop').modal('show');
  $('#ch-business-fop').css("overflow-y", "scroll");
  $('.block-home-internet').fadeOut();
  $('.tarif-item2').css("background", "white");
  $('.tarif-item2').css("color", "#ABABAB");
  $('.tarif-item1').css("color", "#ABABAB");
  $('.tarif-item1').css("background", "white");
  $('.privat-home').fadeOut();
  $('.txt-privat-home').css("display", "none");
  $('.txt-business-home').fadeIn();
  $('.business').fadeIn();
  $('.tarif-item3').css("background", "#34A0D9");
  $('.tarif-item3').css("color", "white");
  } 
  if ($("option:selected", this).val() == "4") {
    $('#change_tarif').modal('hide');
    $('#ch-business-law').modal('show');
    $('#ch-business-law').css("overflow-y", "scroll");
    $('.block-home-internet').fadeOut();
    $('.tarif-item2').css("background", "white");
    $('.tarif-item2').css("color", "#ABABAB");
    $('.tarif-item1').css("color", "#ABABAB");
    $('.tarif-item1').css("background", "white");
    $('.privat-home').fadeOut();
    $('.txt-privat-home').css("display", "none");
    $('.txt-business-home').fadeIn();
    $('.business').fadeIn();
    $('.tarif-item3').css("background", "#34A0D9");
    $('.tarif-item3').css("color", "white");
  } 
});
$('#ch_privat').click(function () {
  if ($("option:selected", this).val() == "2") {
    $('#change_tarif').modal('show');
    $('#change_tarif').css("overflow-y", "scroll");
      $('#change_privat-tarif').modal('hide');
      $('.block-home-internet').fadeOut();
      $('.tarif-item1').css("background", "#34A0D9");
      $('.tarif-item1').css("color", "white");
      $('.tarif-item2').css("color", "#ABABAB");
      $('.tarif-item2').css("background", "white");
      $('.privat-home').fadeOut();
      $('.block-home-internet').fadeIn();
      $('.txt-privat-home').fadeOut();
      $('.txt-business-home').fadeOut();
      $('.business').fadeOut();
      $('.tarif-item3').css("background", "white");
      $('.tarif-item3').css("color", "#ABABAB");
    } 
    if ($("option:selected", this).val() == "3") {
      $('#ch-business-fop').modal('show');
  $('#ch-business-fop').css("overflow-y", "scroll");
        $('#change_privat-tarif').modal('hide');
        $('.block-home-internet').fadeOut();
        $('.tarif-item2').css("background", "white");
        $('.tarif-item2').css("color", "#ABABAB");
        $('.tarif-item1').css("color", "#ABABAB");
        $('.tarif-item1').css("background", "white");
        $('.privat-home').fadeOut();
        $('.txt-privat-home').css("display", "none");
        $('.txt-business-home').fadeIn();
        $('.business').fadeIn();
        $('.tarif-item3').css("background", "#34A0D9");
        $('.tarif-item3').css("color", "white");
      } 
      if ($("option:selected", this).val() == "4") {
        $('#ch-business-law').modal('show');
        $('#ch-business-law').css("overflow-y", "scroll");
          $('#change_privat-tarif').modal('hide');
          $('.block-home-internet').fadeOut();
          $('.tarif-item2').css("background", "white");
          $('.tarif-item2').css("color", "#ABABAB");
          $('.tarif-item1').css("color", "#ABABAB");
          $('.tarif-item1').css("background", "white");
          $('.privat-home').fadeOut();
          $('.txt-privat-home').css("display", "none");
          $('.txt-business-home').fadeIn();
          $('.business').fadeIn();
          $('.tarif-item3').css("background", "#34A0D9");
          $('.tarif-item3').css("color", "white");
        } 
});
$('#ch_bussines').click(function () {
  if ($("option:selected", this).val() == "2") {
    $('#change_tarif').modal('show');
    $('#change_tarif').css("overflow-y", "scroll");
      $('#ch-business-fop').modal('hide');
      $('.block-home-internet').fadeOut();
      $('.tarif-item1').css("background", "#34A0D9");
      $('.tarif-item1').css("color", "white");
      $('.tarif-item2').css("color", "#ABABAB");
      $('.tarif-item2').css("background", "white");
      $('.privat-home').fadeOut();
      $('.block-home-internet').fadeIn();
      $('.txt-privat-home').fadeOut();
      $('.txt-business-home').fadeOut();
      $('.business').fadeOut();
      $('.tarif-item3').css("background", "white");
      $('.tarif-item3').css("color", "#ABABAB");
    } 
    if ($("option:selected", this).val() == "3") {
      $('#change_privat-tarif').modal('show');
    $('#change_privat-tarif').css("overflow-y", "scroll");
        $('#ch-business-fop').modal('hide');
        $('.block-home-internet').fadeOut();
  $('.tarif-item2').css("background", "#34A0D9");
  $('.tarif-item2').css("color", "white");
  $('.tarif-item1').css("color", "#ABABAB");
  $('.tarif-item1').css("background", "white");
  $('.privat-home').fadeIn();
  $('.txt-privat-home').fadeIn();
  $('.txt-business-home').css("display", "none");
  $('.business').fadeOut();
  $('.tarif-item3').css("background", "white");
  $('.tarif-item3').css("color", "#ABABAB");
      } 
      if ($("option:selected", this).val() == "4") {
        $('#ch-business-law').modal('show');
        $('#ch-business-law').css("overflow-y", "scroll");
          $('#ch-business-fop').modal('hide');
     
        } 
});
$('#ch_bus_ur').click(function () {
  if ($("option:selected", this).val() == "2") {
    $('#change_tarif').modal('show');
    $('#change_tarif').css("overflow-y", "scroll");
      $('#ch-business-law').modal('hide');
      $('.block-home-internet').fadeOut();
      $('.tarif-item1').css("background", "#34A0D9");
      $('.tarif-item1').css("color", "white");
      $('.tarif-item2').css("color", "#ABABAB");
      $('.tarif-item2').css("background", "white");
      $('.privat-home').fadeOut();
      $('.block-home-internet').fadeIn();
      $('.txt-privat-home').fadeOut();
      $('.txt-business-home').fadeOut();
      $('.business').fadeOut();
      $('.tarif-item3').css("background", "white");
      $('.tarif-item3').css("color", "#ABABAB");
    } 
    if ($("option:selected", this).val() == "3") {
      $('#change_privat-tarif').modal('show');
    $('#change_privat-tarif').css("overflow-y", "scroll");
        $('#ch-business-law').modal('hide');
        $('.block-home-internet').fadeOut();
        $('.tarif-item2').css("background", "#34A0D9");
        $('.tarif-item2').css("color", "white");
        $('.tarif-item1').css("color", "#ABABAB");
        $('.tarif-item1').css("background", "white");
        $('.privat-home').fadeIn();
        $('.txt-privat-home').fadeIn();
        $('.txt-business-home').css("display", "none");
        $('.business').fadeOut();
        $('.tarif-item3').css("background", "white");
        $('.tarif-item3').css("color", "#ABABAB");
      } 
      if ($("option:selected", this).val() == "4") {
        $('#ch-business-fop').modal('show');
        $('#ch-business-fop').css("overflow-y", "scroll");
          $('#ch-business-law').modal('hide');
     
        } 
});
if ($('*').is('.tarif-main')) {

let selectItems9 = document.querySelectorAll('.select-items div')
let test2 = document.querySelector('.test2') 
let test3 = document.querySelector('.test3') 
let test1 = document.querySelector('.test1') 
let price = document.querySelector('.price') 

for(let i = 0; i<selectItems9.length; i++){
  selectItems9[i].addEventListener('click', getPrice)
function  getPrice(){
  price.textContent =  parseInt(test2.value) + parseInt(test3.value) + parseInt(test1.value) 
}
}
//change
let selectItem = document.querySelectorAll('.select-items div')
let sel1 = document.querySelector('.select1') 
let sel2 = document.querySelector('.select2') 
let sel3 = document.querySelector('.select3') 
let price1 = document.querySelector('.price1') 

for(let i = 0; i<selectItem.length; i++){
  selectItem[i].addEventListener('click', getPrice1)
function  getPrice1(){
  price1.textContent =  parseInt(sel1.value) + parseInt(sel2.value) + parseInt(sel3.value) 
}
}
//second block
let selectItem3 = document.querySelectorAll('.select-items div')
let select1 = document.querySelector('.sel1') 
let select2 = document.querySelector('.sel2') 
let select3 = document.querySelector('.sel3') 
let price2 = document.querySelector('.price2') 

for(let i = 0; i<selectItem.length; i++){
  selectItem3[i].addEventListener('click', getPrice2)
function  getPrice2(){
  price2.textContent =  parseInt(select1.value) + parseInt(select2.value) + parseInt(select3.value) 
}
}
//second block change
let sselectItem3 = document.querySelectorAll('.select-items div')
let sselect1 = document.querySelector('.ssel1') 
let sselect2 = document.querySelector('.ssel2') 
let sselect3 = document.querySelector('.ssel3') 
let sprice2 = document.querySelector('.sprice2') 

for(let i = 0; i<selectItem.length; i++){
  sselectItem3[i].addEventListener('click', sgetPrice2)
function  sgetPrice2(){
  sprice2.textContent =  parseInt(sselect1.value) + parseInt(sselect2.value) + parseInt(sselect3.value) 
}
}

//third block 
let sselectItem4 = document.querySelectorAll('.select-items div')
let sel_it1 = document.querySelector('.sel_it1') 

let resBus = document.querySelector('.resBus') 

for(let i = 0; i<selectItem.length; i++){
  sselectItem4[i].addEventListener('click', thirdRes)
function  thirdRes(){
  resBus.textContent =  parseInt(sel_it1.value)
}
}

//third block change
let cselectItem4 = document.querySelectorAll('.select-items div')
let csel_it1 = document.querySelector('.csel_it1') 

let cresBus = document.querySelector('.cresBus') 

for(let i = 0; i<selectItem.length; i++){
  cselectItem4[i].addEventListener('click', cthirdRes)
function  cthirdRes(){
  cresBus.textContent =  parseInt(csel_it1.value)
}
}
}
}
//tarifs tv

if ($('*').is('#connect_tv')) {

let cselectItem5 = document.querySelectorAll('.select-items div')
let csel_it5 = document.querySelector('.csel_it5') 

let cresBus5 = document.querySelector('.cresBus5') 

for(let i = 0; i<selectItem.length; i++){
  cselectItem5[i].addEventListener('click', cthirdRes5)
function  cthirdRes5(){
  cresBus5.textContent =  parseInt(csel_it5.value)
}
}
}
//mobile connect 
if ($('*').is('.con-mob')) {

let cselectItem6 = document.querySelectorAll('.select-items div')
let csel_it6 = document.querySelector('.csel_it6') 

let cresBus6 = document.querySelector('.cresBus6') 

for(let i = 0; i<cselectItem6.length; i++){
  cselectItem6[i].addEventListener('click', cthirdRes6)
function  cthirdRes6(){
  cresBus6.textContent =  parseInt(csel_it6.value)
}
}
$('#connect_mob').click(function () {
  if ($("option:selected", this).val() == "40") {
    $('.c_minut').html("100 хв");
    $('.c_gb').html("4 ГБ");
  }
  if ($("option:selected", this).val() == "60") {
    $('.c_minut').html("200 хв");
    $('.c_gb').html("6 ГБ");

  }
  if ($("option:selected", this).val() == "90") {
    $('.c_minut').html("300 хв");
    $('.c_gb').html("10 ГБ");

  }
});

}
$('#tar_tvs').click(function () {
  if ($("option:selected", this).val() == "40") {
    $('.count_can').html("157");
  }
  if ($("option:selected", this).val() == "50") {
    $('.count_can').html("196");
  }
  if ($("option:selected", this).val() == "70") {
  $('#for-tarif').fadeIn();
  $('#for-tarif').css("display", "block");
  $('.tarif_204').css("margin-top", "60px");
   $('.count_can').html("204*");
if (window.matchMedia('(max-width: 767px)').matches) {
  $('.tarif_204').css("margin-top", "15px");

}
  }
  else{
  $('#for-tarif').css("display", "none");
  $('.tarif_204').css("margin-top", "30px");
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('.tarif_204').css("margin-top", "10px");
  
  }
  }
});

if ($('*').is('.tarif-main')) {
 
let selectItems = document.querySelectorAll('#home_mod .select-items div')
let privat_mod = document.querySelector('#privat_mod') 
let chosen = document.querySelector('.choosen') 
let selectSelected = document.querySelector('#home_mod .select-selected') 
privat_mod.addEventListener('click', getFirst0)
function getFirst0(){
  selectSelected.textContent = chosen.textContent

  for(let i = 0; i<selectItems.length; i++){
  selectItems[i].classList.remove('same-as-selected')
  selectItems[0].classList.add('same-as-selected')
}
}

// //privat
let selectItems1 = document.querySelectorAll('#privat_mod .select-items div')
let privat_mod1 = document.querySelector('#home_mod') 
let chosen1 = document.querySelector('.choosens') 
let selectSelected1 = document.querySelector('#privat_mod .select-selected') 
privat_mod1.addEventListener('click', getFirst1)
function getFirst1(){

  selectSelected1.textContent = chosen1.textContent

  for(let i = 0; i<selectItems1.length; i++){
  selectItems1[i].classList.remove('same-as-selected')
  selectItems1[0].classList.add('same-as-selected')

}
}

// bussines
let selectItems2 = document.querySelectorAll('#home_mod .select-items div')
let privat_mod2 = document.querySelector('#bussines-f') 
let chosen2 = document.querySelector('.choosen') 
let selectSelected2 = document.querySelector('#home_mod .select-selected') 
privat_mod2.addEventListener('click', getFirst2)
function getFirst2(){

  selectSelected2.textContent = chosen2.textContent

  for(let i = 0; i<selectItems2.length; i++){
  selectItems2[i].classList.remove('same-as-selected')
  selectItems2[0].classList.add('same-as-selected')
   
}
}

// bussines
let selectItems3 = document.querySelectorAll('#bussines-f .select-items div')
let privat_mod3 = document.querySelector('#home_mod') 
let chosen3 = document.querySelector('.choosen3') 
let selectSelected3 = document.querySelector('#bussines-f .select-selected') 
privat_mod3.addEventListener('click', getFirst3)
function getFirst3(){

  selectSelected3.textContent = chosen3.textContent

  for(let i = 0; i<selectItems3.length; i++){
  selectItems3[i].classList.remove('same-as-selected')
  selectItems3[0].classList.add('same-as-selected')
   
}
}
// bussines privat
let selectItems4 = document.querySelectorAll('#bussines-f .select-items div')
let privat_mod4 = document.querySelector('#privat_mod') 
let chosen4 = document.querySelector('.choosen4') 
let selectSelected4 = document.querySelector('#bussines-f .select-selected') 
privat_mod4.addEventListener('click', getFirst4)
function getFirst4(){
  selectSelected4.textContent = chosen4.textContent
  for(let i = 0; i<selectItems4.length; i++){
  selectItems4[i].classList.remove('same-as-selected')
  selectItems4[0].classList.add('same-as-selected')
   
}
}

// bussines
let selectItems5 = document.querySelectorAll('#privat_mod .select-items div')
let privat_mod5 = document.querySelector('#bussines-f') 
let chosen5 = document.querySelector('.choosens') 
let selectSelected5 = document.querySelector('#privat_mod .select-selected') 
privat_mod5.addEventListener('click', getFirst5)
function getFirst5(){

  selectSelected5.textContent = chosen5.textContent

  for(let i = 0; i<selectItems5.length; i++){
  selectItems5[i].classList.remove('same-as-selected')
  selectItems5[0].classList.add('same-as-selected')
   
}
}






//Ur
let selectItems6 = document.querySelectorAll('#home_mod .select-items div')
let privat_mod6 = document.querySelector('#bussines-ur') 
let chosen6 = document.querySelector('.choosen') 
let selectSelected6 = document.querySelector('#home_mod .select-selected') 
privat_mod6.addEventListener('click', getFirst6)
function getFirst6(){


  selectSelected6.textContent = chosen6.textContent

  for(let i = 0; i<selectItems6.length; i++){
  selectItems6[i].classList.remove('same-as-selected')
  selectItems6[0].classList.add('same-as-selected')
   
}
}

 // bussines Ur
let selectItems7 = document.querySelectorAll('#bussines-ur .select-items div')
let privat_mod7 = document.querySelector('#home_mod') 
let chosen7 = document.querySelector('.choosen4') 
let selectSelected7 = document.querySelector('#bussines-ur .select-selected') 
privat_mod7.addEventListener('click', getFirst7)
function getFirst7(){

  selectSelected7.textContent = chosen7.textContent

  for(let i = 0; i<selectItems7.length; i++){
  selectItems7[i].classList.remove('same-as-selected')
  selectItems7[0].classList.add('same-as-selected')
   
}
}
//  bussines Ur
 let selectItems8 = document.querySelectorAll('#bussines-ur .select-items div')
 let privat_mod8 = document.querySelector('#privat_mod') 
 let chosen8 = document.querySelector('.choosen4') 
 let selectSelected8 = document.querySelector('#bussines-ur .select-selected') 
 privat_mod8.addEventListener('click', getFirst8)
 function getFirst8(){

   selectSelected8.textContent = chosen8.textContent
 
   for(let i = 0; i<selectItems8.length; i++){
   selectItems8[i].classList.remove('same-as-selected')
   selectItems8[0].classList.add('same-as-selected')
    
 }
 }
 //
 let selectItems9 = document.querySelectorAll('#privat_mod .select-items div')
 let privat_mod9 = document.querySelector('#bussines-ur') 
 let chosen9 = document.querySelector('.choosens') 
 let selectSelected9 = document.querySelector('#privat_mod .select-selected') 
 privat_mod9.addEventListener('click', getFirst9)
 function getFirst9(){

   selectSelected9.textContent = chosen9.textContent
 
   for(let i = 0; i<selectItems9.length; i++){
   selectItems9[i].classList.remove('same-as-selected')
   selectItems9[0].classList.add('same-as-selected')
    
 }
 }

 //
 let selectItems10= document.querySelectorAll('#bussines-f .select-items div')
 let privat_mod10 = document.querySelector('#bussines-ur') 
 let chosen10 = document.querySelector('.choosen3') 
 let selectSelected10 = document.querySelector('#bussines-f .select-selected') 
 privat_mod10.addEventListener('click', getFirst10)
 function getFirst10(){

   selectSelected10.textContent = chosen10.textContent
 
   for(let i = 0; i<selectItems10.length; i++){
   selectItems10[i].classList.remove('same-as-selected')
   selectItems10[0].classList.add('same-as-selected')
    
 }
 }
  //
  let selectItems11= document.querySelectorAll('#bussines-ur .select-items div')
  let privat_mod11 = document.querySelector('#bussines-f') 
  let chosen11 = document.querySelector('.choosen4') 
  let selectSelected11 = document.querySelector('#bussines-ur .select-selected') 
  privat_mod11.addEventListener('click', getFirst11)
  function getFirst11(){
 
    selectSelected11.textContent = chosen11.textContent
  
    for(let i = 0; i<selectItems11.length; i++){
    selectItems11[i].classList.remove('same-as-selected')
    selectItems11[0].classList.add('same-as-selected')
     
  }
  }


///////change/////


   let selectItems12= document.querySelectorAll('#ch_privat .select-items div')
   let privat_mod12 = document.querySelector('#ch_home') 
   let chosen12 = document.querySelector('.ch_choose2') 
   let selectSelected12 = document.querySelector('#ch_privat .select-selected') 
   privat_mod12.addEventListener('click', getFirst12)
   function getFirst12(){
  
     selectSelected12.textContent = chosen12.textContent
   
     for(let i = 0; i<selectItems12.length; i++){
     selectItems12[i].classList.remove('same-as-selected')
     selectItems12[0].classList.add('same-as-selected')
      
   }
   }

   let selectItems13= document.querySelectorAll('#ch_home .select-items div')
   let privat_mod13 = document.querySelector('#ch_privat') 
   let chosen13 = document.querySelector('.ch_choose1') 
   let selectSelected13 = document.querySelector('#ch_home .select-selected') 
   privat_mod13.addEventListener('click', getFirst13)
   function getFirst13(){
  
     selectSelected13.textContent = chosen13.textContent
   
     for(let i = 0; i<selectItems13.length; i++){
     selectItems13[i].classList.remove('same-as-selected')
     selectItems13[0].classList.add('same-as-selected')
      
   }
   }
   //

   
   let selectItems14= document.querySelectorAll('#ch_bussines .select-items div')
   let privat_mod14 = document.querySelector('#ch_home') 
   let chosen14 = document.querySelector('.ch_choose3') 
   let selectSelected14 = document.querySelector('#ch_bussines .select-selected') 
   privat_mod14.addEventListener('click', getFirst14)
   function getFirst14(){
  
     selectSelected14.textContent = chosen14.textContent
   
     for(let i = 0; i<selectItems14.length; i++){
     selectItems14[i].classList.remove('same-as-selected')
     selectItems14[0].classList.add('same-as-selected')
      
   }
   }

   let selectItems15= document.querySelectorAll('#ch_home .select-items div')
   let privat_mod15 = document.querySelector('#ch_bussines') 
   let chosen15 = document.querySelector('.ch_choose1') 
   let selectSelected15 = document.querySelector('#ch_home .select-selected') 
   privat_mod15.addEventListener('click', getFirst15)
   function getFirst15(){
  
     selectSelected15.textContent = chosen15.textContent
   
     for(let i = 0; i<selectItems15.length; i++){
     selectItems15[i].classList.remove('same-as-selected')
     selectItems15[0].classList.add('same-as-selected')
      
   }
   }

   
   //
   let selectItems16= document.querySelectorAll('#ch_bus_ur .select-items div')
   let privat_mod16 = document.querySelector('#ch_home') 
   let chosen16 = document.querySelector('.ch_choose4') 
   let selectSelected16 = document.querySelector('#ch_bus_ur .select-selected') 
   privat_mod16.addEventListener('click', getFirst16)
   function getFirst16(){
  
     selectSelected16.textContent = chosen16.textContent
   
     for(let i = 0; i<selectItems16.length; i++){
     selectItems16[i].classList.remove('same-as-selected')
     selectItems16[0].classList.add('same-as-selected')
      
   }
   }

   let selectItems17= document.querySelectorAll('#ch_home .select-items div')
   let privat_mod17 = document.querySelector('#ch_bus_ur') 
   let chosen17 = document.querySelector('.ch_choose1') 
   let selectSelected17 = document.querySelector('#ch_home .select-selected') 
   privat_mod17.addEventListener('click', getFirst17)
   function getFirst17(){
  
     selectSelected17.textContent = chosen17.textContent
   
     for(let i = 0; i<selectItems17.length; i++){
     selectItems17[i].classList.remove('same-as-selected')
     selectItems17[0].classList.add('same-as-selected')
      
   }
   }
   //privat
   
   let selectItems18= document.querySelectorAll('#ch_privat .select-items div')
   let privat_mod18 = document.querySelector('#ch_bussines') 
   let chosen18 = document.querySelector('.ch_choose2') 
   let selectSelected18 = document.querySelector('#ch_privat .select-selected') 
   privat_mod18.addEventListener('click', getFirst18)
   function getFirst18(){
  
     selectSelected18.textContent = chosen18.textContent
   
     for(let i = 0; i<selectItems18.length; i++){
     selectItems18[i].classList.remove('same-as-selected')
     selectItems18[0].classList.add('same-as-selected')
      
   }
   }

   let selectItems19= document.querySelectorAll('#ch_bussines .select-items div')
   let privat_mod19 = document.querySelector('#ch_privat') 
   let chosen19 = document.querySelector('.ch_choose3') 
   let selectSelected19 = document.querySelector('#ch_bussines .select-selected') 
   privat_mod19.addEventListener('click', getFirst19)
   function getFirst19(){
  
     selectSelected19.textContent = chosen19.textContent
   
     for(let i = 0; i<selectItems19.length; i++){
     selectItems19[i].classList.remove('same-as-selected')
     selectItems19[0].classList.add('same-as-selected')
      
   }
   }


      //privat +ur
   
      let selectItems20= document.querySelectorAll('#ch_privat .select-items div')
      let privat_mod20 = document.querySelector('#ch_bus_ur') 
      let chosen20 = document.querySelector('.ch_choose2') 
      let selectSelected20 = document.querySelector('#ch_privat .select-selected') 
      privat_mod20.addEventListener('click', getFirst20)
      function getFirst20(){
     
        selectSelected20.textContent = chosen20.textContent
      
        for(let i = 0; i<selectItems20.length; i++){
        selectItems20[i].classList.remove('same-as-selected')
        selectItems20[0].classList.add('same-as-selected')
         
      }
      }
   
      let selectItems21= document.querySelectorAll('#ch_bus_ur .select-items div')
      let privat_mod21 = document.querySelector('#ch_privat') 
      let chosen21 = document.querySelector('.ch_choose4') 
      let selectSelected21 = document.querySelector('#ch_bus_ur .select-selected') 
      privat_mod21.addEventListener('click', getFirst21)
      function getFirst21(){
     
        selectSelected21.textContent = chosen21.textContent
      
        for(let i = 0; i<selectItems21.length; i++){
        selectItems21[i].classList.remove('same-as-selected')
        selectItems21[0].classList.add('same-as-selected')
         
      }
      }
            //fop +ur
   
            let selectItems22= document.querySelectorAll('#ch_bussines .select-items div')
            let privat_mod22 = document.querySelector('#ch_bus_ur') 
            let chosen22 = document.querySelector('.ch_choose3') 
            let selectSelected22 = document.querySelector('#ch_bussines .select-selected') 
            privat_mod22.addEventListener('click', getFirst22)
            function getFirst22(){
           
              selectSelected22.textContent = chosen22.textContent
              for(let i = 0; i<selectItems22.length; i++){
              selectItems22[i].classList.remove('same-as-selected')
              selectItems22[0].classList.add('same-as-selected')
               
            }
            }
         
            let selectItems23= document.querySelectorAll('#ch_bus_ur .select-items div')
            let privat_mod23 = document.querySelector('#ch_bussines') 
            let chosen23 = document.querySelector('.ch_choose4') 
            let selectSelected23 = document.querySelector('#ch_bus_ur .select-selected') 
            privat_mod23.addEventListener('click', getFirst23)
            function getFirst23(){
           
              selectSelected23.textContent = chosen23.textContent
            
              for(let i = 0; i<selectItems23.length; i++){
              selectItems23[i].classList.remove('same-as-selected')
              selectItems23[0].classList.add('same-as-selected')
               
            }
            }
          }