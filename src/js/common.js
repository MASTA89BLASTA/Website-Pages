$(document).ready(function($) {
  //просто тест
  $(".email_input-btn_filter-date").click(function() {
    $(this).toggleClass("active_button_class");
  });



  //выпадающее меню
  $(".email_text-area_btn-date_dropdown-group").on("click", function() {
    $(this).toggleClass("active_button_class");
    showHiddenMenu(".email_text-area_btn-date_dropdown-group", ".form_dropdown-menu");
  });
  
  $(".email_input-btn_date-dropdown_guests-default").on("click", function() {
    $(this).toggleClass("active_button_class");
    showHiddenMenu(".email_input-btn_date-dropdown_guests-default", ".form_dropdown-menu_guests-default");
  });


  function myPlaceholderChecker() {
    if(buttonGetNumber[2]>0) {
      let $my_input_3 =  buttonGetNumber[0] + " спальни, "+  buttonGetNumber[1]+ " кровати,"+"\n"+ buttonGetNumber[2] + " ванные комнаты";
      $(".email_text-area_dropdown-group").attr("placeholder",  $my_input_3).css("line-height",  "28px");
      $(".email_text-area_btn-date_dropdown-group").css("bottom", "41px");
    }else {
      let $my_input_1_2 =  buttonGetNumber[0] + " спальни" +", "+  buttonGetNumber[1]+ " кровати..";
      $(".email_text-area_dropdown-group").attr("placeholder", $my_input_1_2).css("line-height",  "17px");
      $(".email_text-area_btn-date_dropdown-group").css("bottom", "32px");
    }  
  }

  const buttonGetNumber = [0,0,0,0,0,0];
  //dropdown room
  $("#buttonBedroomsMinus").click(function() {
    getButtonNumberMinus(0, "#buttonBedrooms", buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBedroomsPlus").click(function() {
    getButtonNumberPlus(0, "#buttonBedrooms",  buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBedMinus").click(function() {
    getButtonNumberMinus(1, "#buttonBeds",  buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBedPlus").click(function() {
    getButtonNumberPlus(1, "#buttonBeds",  buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBathroomsMinus").click(function() {
    getButtonNumberMinus(2, "#buttonBathrooms",  buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBathroomsPlus").click(function() {
    getButtonNumberPlus(2, "#buttonBathrooms",  buttonGetNumber);
    myPlaceholderChecker();
  });
  //dropdown guests
  $("#buttonAdultsMinus").click(function() {
    getButtonNumberMinus(3, "#buttonAdults", buttonGetNumber);
  });
  $("#buttonAdultsPlus").click(function() {
    getButtonNumberPlus(3, "#buttonAdults", buttonGetNumber);
  });
  $("#buttonChildrenMinus").click(function() {
    getButtonNumberMinus(4, "#buttonChildren", buttonGetNumber);
  });
  $("#buttonChildrenPlus").click(function() {
    getButtonNumberPlus(4, "#buttonChildren", buttonGetNumber);
  });
  $("#buttonBabiesMinus").click(function() {
    getButtonNumberMinus(5, "#buttonBabies", buttonGetNumber);
  });
  $("#buttonBabiesPlus").click(function() {
    getButtonNumberPlus(5, "#buttonBabies", buttonGetNumber);
  });
  //кнопка применить
  $(".configuration_controls-button_apply").click(function() {
    if(buttonGetNumber[5] > 0) {
      let $sum1 = buttonGetNumber[3] + buttonGetNumber[4] + " гостя, " + buttonGetNumber[5]+" младенец";
      $(".email_input-dropdown_guests-default").attr("placeholder",  $sum1);
      $(".form_dropdown-menu_guests-buttons_controls").parent().find(".configuration_controls-button_clear");
      $(".configuration_controls-button_clear").is(":visible");
      $(".configuration_controls-button_clear").fadeIn();
    }else {
      let $sum2 = buttonGetNumber[3] + buttonGetNumber[4] + " гостя";
      $(".email_input-dropdown_guests-default").attr("placeholder",  $sum2);
      $(".form_dropdown-menu_guests-buttons_controls").parent().find(".configuration_controls-button_clear");
      $(".configuration_controls-button_clear").is(":visible");
      $(".configuration_controls-button_clear").fadeIn();
    }   
  });

  //кнопка очистить
  $(".configuration_controls-button_clear").click(function() {
    $(".email_input-dropdown_guests-default").attr("placeholder",  "Сколько гостей");
    $(this).hide(":visible");
    $(this).fadeOut();
    getButtonNumberReset(3, "#buttonAdults", buttonGetNumber);
    getButtonNumberReset(4, "#buttonChildren", buttonGetNumber);
    getButtonNumberReset(5, "#buttonBabies", buttonGetNumber);
  });


  //стрелки для переключения
  function arrows(picture_elem) {
    $(picture_elem).hover(function() {
      showHiddenMenu(picture_elem, ".cards_block-settings_hotel-room_arrows");
      showHiddenMenu(picture_elem, ".cards_block-settings_hotel-room_arrows-gradient_wrapper");
    });
  }
  arrows("#room_picture1");
  arrows("#room_picture2");
  arrows("#room_picture3");
  arrows("#room_picture4");
  arrows("#room_picture5");
  arrows("#room_picture6");
  arrows("#room_picture7");
  arrows("#room_picture8");
  arrows("#room_picture9");
  arrows("#room_picture10");
  arrows("#room_picture11");
  arrows("#room_picture12");
  



  function showHiddenMenu(obj_1, obj_2) {
    //внутри нашего пункта меню находим "выпадашку"
    let $dropMenu = $(obj_1).parent().find(obj_2);
    //если наш dropMenu видимый - скрываем, если скрыт - показываем
    if($dropMenu.is(":visible")) {
      $dropMenu.fadeOut(400);
    }else {
      //скрываем все видимые "выпадашки" на странице    
      $dropMenu.hide(":visible"); 
      $dropMenu.fadeIn(800);
    }
  }

  function getButtonNumberPlus (i, obj, arrayButton) {
    if(arrayButton[i] <= 9) {
      arrayButton[i]++;
      $(obj).text(arrayButton[i]);
    }else {
      return false;
    }
  }

  function getButtonNumberMinus (i, obj, arrayButton) {
    if(arrayButton[i] >= 1 ) {
      arrayButton[i]--;
      $(obj).text(arrayButton[i]);
    }else {
      return false;
    }
  }
  //ф-ция reset
  function getButtonNumberReset (i, obj, arrayButton) {
    if(arrayButton[i]>0) {
      $(obj).text(arrayButton[i]=0);
    }
  }
  
  //слайдер
  function slider(selector) {
    let slider = $(selector);
    let imgs = slider.children();

    slider
      .on("click",".cards_block-settings_hotel-room_arrows, .hotel-room_slider-dot", function(e) {
        e.preventDefault();

        let a = $(this);
        let active = slider.find(".hotel-room_picture-active_img");
        let current = active.index();
        let next = current;

        if(a.hasClass("cards_block-settings_hotel-room_left-arrow")) {
          next = current - 1 >= 0 ? current - 1 : imgs.length - 2;
        }else if (a.hasClass("cards_block-settings_hotel-room_right-arrow")) {
          next = (current - 1) % imgs.length-2;
        }else {
          next = a.index();
        }

        if(current == next) {
          return ;
        }

        active.removeClass("hotel-room_picture-active_img");
        slider
          .find(".hotel-room_slider-dot_active")
          .eq(0)
          .removeClass("hotel-room_slider-dot_active");
        imgs
          .find(".hotel-room_picture")
          .eq(next)
          .addClass("hotel-room_picture-active_img");
           
        slider
          .find(".hotel-room_slider-dot")
          .eq(next)
          .addClass("hotel-room_slider-dot_active");   


    let slides = slider.children(".cards_block-settings_hotel-room_picture .cards_block-settings_hotel-room_slider-dots");
    //let dots = slider.children(".cards_block-settings_hotel-room_slider-dots");

    imgs
      .prependTo(slides)
      .each(function(i) {
        if(!i) {
          i.addClass("hotel-room_slider-dot hotel-room_slider-dot_active");
        }else {
          i.addClass("hotel-room_slider-dot");
        }
      })
      .addClass("hotel-room_picture")
      .eq(0)
      .addClass("hotel-room_picture-active_img");
    
      });  
   
  }

  slider("#room_slider1");
  slider("#room_slider2");
  slider("#room_slider3");
  slider("#room_slider4");
  slider("#room_slider5");
  slider("#room_slider6");
  slider("#room_slider7");
  slider("#room_slider8");
  slider("#room_slider9");
  slider("#room_slider10");
  slider("#room_slider11");
  slider("#room_slider12");
}); 