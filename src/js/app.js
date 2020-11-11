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
  });
  $('.svg-support').toggleClick([
    function () {
      $(".container-chat").fadeIn();
    },
    function () {
      $(".container-chat").fadeOut();
    }
  ]);

}

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
      $('.tv-show').slideDown("slow");
      $('.tv-show').css("display", "block");
      $('.svg-show').css("transform", "rotate(180deg)");
    },
    function () {
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
  $('.tv-show').slideUp();
  $('.svg-show').css("transform", "rotate(0deg)");
  $('.show-actions').slideUp();
  $('.svg-actions').css("transform", "rotate(0deg)");
  $('.show-move-friend').slideUp();
  $('.box-show-check').slideUp();
  $('.svg-dropt').css("transform", "rotate(0deg)");
  $('.calculator-speed').slideUp();
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