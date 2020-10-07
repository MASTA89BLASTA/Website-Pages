$(document).ready(function ($) {
  //просто тест
  $(".email_input-btn_filter-date").click(function () {
    $(this).toggleClass("active_button_class");
  });



  //выпадающее меню
  $(".email_text-area_btn-date_dropdown-group").on("click", function () {
    $(this).toggleClass("active_button_class");
    showHiddenMenu(".email_text-area_btn-date_dropdown-group", ".form_dropdown-menu");
  });

  $(".email_input-btn_date-dropdown_guests-default").on("click", function () {
    $(this).toggleClass("active_button_class");
    $(".email_input-dropdown_guests-default").toggleClass("active_class-border");
    showHiddenMenu(".email_input-btn_date-dropdown_guests-default", ".form_dropdown-menu_guests-default");
  });


  function myPlaceholderChecker() {
    if (buttonGetNumber[2] > 0) {
      let $my_input_3 = buttonGetNumber[0] + " спальни, " + buttonGetNumber[1] + " кровати," + "\n" + buttonGetNumber[2] + " ванные комнаты";
      $(".email_text-area_dropdown-group").attr("placeholder", $my_input_3).css("line-height", "28px");
      $(".email_text-area_btn-date_dropdown-group").css("bottom", "41px");
    } else {
      let $my_input_1_2 = buttonGetNumber[0] + " спальни" + ", " + buttonGetNumber[1] + " кровати..";
      $(".email_text-area_dropdown-group").attr("placeholder", $my_input_1_2).css("line-height", "17px");
      $(".email_text-area_btn-date_dropdown-group").css("bottom", "32px");
    }
  }

  const buttonGetNumber = [0, 0, 0, 0, 0, 0];
  //dropdown room
  $("#buttonBedroomsMinus").click(function () {
    getButtonNumberMinus(0, "#buttonBedrooms", buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBedroomsPlus").click(function () {
    getButtonNumberPlus(0, "#buttonBedrooms", buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBedMinus").click(function () {
    getButtonNumberMinus(1, "#buttonBeds", buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBedPlus").click(function () {
    getButtonNumberPlus(1, "#buttonBeds", buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBathroomsMinus").click(function () {
    getButtonNumberMinus(2, "#buttonBathrooms", buttonGetNumber);
    myPlaceholderChecker();
  });
  $("#buttonBathroomsPlus").click(function () {
    getButtonNumberPlus(2, "#buttonBathrooms", buttonGetNumber);
    myPlaceholderChecker();
  });
  //dropdown guests
  $("#buttonAdultsMinus").click(function () {
    getButtonNumberMinus(3, "#buttonAdults", buttonGetNumber);
  });
  $("#buttonAdultsPlus").click(function () {
    getButtonNumberPlus(3, "#buttonAdults", buttonGetNumber);
  });
  $("#buttonChildrenMinus").click(function () {
    getButtonNumberMinus(4, "#buttonChildren", buttonGetNumber);
  });
  $("#buttonChildrenPlus").click(function () {
    getButtonNumberPlus(4, "#buttonChildren", buttonGetNumber);
  });
  $("#buttonBabiesMinus").click(function () {
    getButtonNumberMinus(5, "#buttonBabies", buttonGetNumber);
  });
  $("#buttonBabiesPlus").click(function () {
    getButtonNumberPlus(5, "#buttonBabies", buttonGetNumber);
  });
  //кнопка применить
  $(".configuration_controls-button_apply").click(function () {
    if (buttonGetNumber[5] > 0) {
      let $sum1 = buttonGetNumber[3] + buttonGetNumber[4] + " гостя, " + buttonGetNumber[5] + " младенец";
      $(".email_input-dropdown_guests-default").attr("placeholder", $sum1);
      $(".form_dropdown-menu_guests-buttons_controls").parent().find(".configuration_controls-button_clear");
      $(".configuration_controls-button_clear").is(":visible");
      $(".configuration_controls-button_clear").fadeIn();
    } else {
      let $sum2 = buttonGetNumber[3] + buttonGetNumber[4] + " гостя";
      $(".email_input-dropdown_guests-default").attr("placeholder", $sum2);
      $(".form_dropdown-menu_guests-buttons_controls").parent().find(".configuration_controls-button_clear");
      $(".configuration_controls-button_clear").is(":visible");
      $(".configuration_controls-button_clear").fadeIn();
    }
  });

  //кнопка очистить
  $(".configuration_controls-button_clear").click(function () {
    $(".email_input-dropdown_guests-default").attr("placeholder", "Сколько гостей");
    $(this).hide(":visible");
    $(this).fadeOut();
    getButtonNumberReset(3, "#buttonAdults", buttonGetNumber);
    getButtonNumberReset(4, "#buttonChildren", buttonGetNumber);
    getButtonNumberReset(5, "#buttonBabies", buttonGetNumber);
  });


  //стрелки для переключения
  function arrows(picture_elem) {
    $(picture_elem).hover(function () {
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
    if ($dropMenu.is(":visible")) {
      $dropMenu.fadeOut(400);
    } else {
      //скрываем все видимые "выпадашки" на странице    
      $dropMenu.hide(":visible");
      $dropMenu.fadeIn(800);
    }
  }

  function getButtonNumberPlus(i, obj, arrayButton) {
    if (arrayButton[i] <= 9) {
      arrayButton[i]++;
      $(obj).text(arrayButton[i]);
    } else {
      return false;
    }
  }

  function getButtonNumberMinus(i, obj, arrayButton) {
    if (arrayButton[i] >= 1) {
      arrayButton[i]--;
      $(obj).text(arrayButton[i]);
    } else {
      return false;
    }
  }
  //ф-ция reset
  function getButtonNumberReset(i, obj, arrayButton) {
    if (arrayButton[i] > 0) {
      $(obj).text(arrayButton[i] = 0);
    }
  }

  //слайдер
  function slider(selector) {
    let slider = $(selector);
    let imgs = slider.children();

    slider
      .on("click", ".cards_block-settings_hotel-room_arrows, .hotel-room_slider-dot", function (e) {
        e.preventDefault();

        let a = $(this);
        let active = slider.find(".hotel-room_picture-active_img");
        let current = active.index();
        let next = current;

        if (a.hasClass("cards_block-settings_hotel-room_left-arrow")) {
          next = current - 1 >= 0 ? current - 1 : imgs.length - 2;
        } else if (a.hasClass("cards_block-settings_hotel-room_right-arrow")) {
          next = (current - 1) % imgs.length - 2;
        } else {
          next = a.index();
        }

        if (current == next) {
          return;
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
          .each(function (i) {
            if (!i) {
              i.addClass("hotel-room_slider-dot hotel-room_slider-dot_active");
            } else {
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


  $(".email_input-btn_date-dropdown_datepiker-left, .email_input-btn_date-dropdown_datepiker-right ").on("click", function () {
    $(this).toggleClass("active_button_class");
    showHiddenMenu(".email_input-btn_date-dropdown_datepiker-left", ".datepicker");
  });



  //datepiker
  $.datepicker.regional['ru'] = {
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    showOtherMonths: true,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);


  $(function () {
    let parseDate = (name) => $.datepicker.parseDate($.datepicker._defaults.dateFormat, $(name).val());
    $(".datepicker").datepicker({
      beforeShowDay: function (date) {
        const date1 = parseDate("#from");
        const date2 = parseDate("#to");
        return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
      },
      onSelect: function (dateText, inst) {
        const date1 = parseDate("#from");
        const date2 = parseDate("#to");
        if (!date1 || date2) {
          $("#from").val(dateText);
          $("#to").val("");
          $(this).datepicker();
        } else {
          $("#to").val(dateText);
          $(this).datepicker();
        }
      }
    });
  });

  //range-slider
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    slide: function (event, ui) {
      $("#amount").val((numberWithSpace(ui.values[0] + "₽")) + " - " + numberWithSpace(ui.values[1] + "₽"));
    },
    change: function (event, ui) {

      $(".cards_block-room_number-settings").each(function () {
        let $this = $(this);
        price = $this.data('price');
        //console.log(price);
        let val1 = ui.values[0];
        let val2 = ui.values[1]; 
        //console.log(val1);
        //console.log(val2);
        if(price <= val2 && price >= val1 ) {
          $this.show();
        }else {
          $this.hide();
        } 
      });
    },
  });

  $("#amount").val(numberWithSpace($("#slider-range").slider("values", 0)) + "₽" +
    " - " + numberWithSpace($("#slider-range").slider("values", 1) + "₽"));

  //Пробел для чисел
  function numberWithSpace(items) {
    return items.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }


  /*
   $(function() {
     var myArr = [];
     $(".cards_block-settings_hotel-room_level-cost").each(function() {
       let priceContent = $(this).html().replace(/\s/g, '');
       let strNumber = Number(priceContent);
       myArr.push(strNumber);
     });
     
     console.log(myArr);
   });
  */
}); 