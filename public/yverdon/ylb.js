/*
 * Custom js Yverdon-les-Bains
 */
function transformMenu() {
  if ($(window).outerWidth() > 991) {
    var top = $(window).scrollTop();
    var scrollTop = $(window).scrollTop();
    var hauteurheader = $('#header').outerHeight();
    if (top > 0) {
      $('#header').addClass('fixed');
      //$(".page #content").css("margin-top", hauteurheader);
      //$(".page #content .wave").css("top", 280 + hauteurheader);
      //$(".page .social-link-right").css("transition", "none");
      //$(".homepage .social-link-right").css("transition", "none");

      /*$('.alert').css('transform', 'translateX(100%)');
			$('.alert').css('right', '0px');
			$('.alert').css('opacity', '0');*/

      $('.alert').fadeOut(100);
    }
    if (top == 0) {
      $('#header').removeClass('fixed');
      //$(".page #content").css("margin-top", "0px");
      $('.overlay-search').fadeOut(300);
      /*$('.overlay-green').fadeOut(300);*/
      /*$('.search-top').append($('.overlay-search-inner .search-container .tx-indexedsearch-searchbox'));*/
      //$(".page #content .wave").css("top", "280px");

      /*$('.alert').css('transform', 'translateX(0)');
			$('.alert').css('right', '26px');
			$('.alert').css('opacity', '1');*/

      $('.alert').fadeIn(100);
    }
    var windowHeight = $(window).height();
    //transofrmation du menu en sticky
    if ($('body').hasClass('homepage')) {
      if (top > windowHeight - 100) {
        $('#header').addClass('sticky');
      }
      if (top < windowHeight - 100) {
        $('#header').removeClass('sticky');
      }
    } else {
      if (top > 50) {
        $('#header').addClass('sticky');
      }
      if (top < 50) {
        $('#header').removeClass('sticky');
      }
    }
  } else {
    var hauteurheader = $('.menu-mobile-header').outerHeight() + 30;
    //$(".page #content").css("margin-top", hauteurheader);
  }
}

function stickyMenu() {
  if ($(window).outerWidth() > 991) {
    //$(".page #content").css("margin-top", "0");
    transformMenu();
    $(document).scroll(function () {
      transformMenu();
    });
  } else {
    var hauteurheader = $('.menu-mobile-header').outerHeight() + 30;
    //$(".page #content").css("margin-top", hauteurheader);
    /*$('.homepage-content#content').css("padding-top","0px");*/

    var top = $(window).scrollTop();
    var windowHeight = $(window).height();
    //transofrmation du menu en sticky
    if (top > 50) {
      $('.menu-mobile').addClass('sticky');
    }
    if (top < 50) {
      $('.menu-mobile').removeClass('sticky');
    }
    $(document).scroll(function () {
      var top = $(window).scrollTop();
      var windowHeight = $(window).height();
      //transofrmation du menu en sticky
      if (top > 50) {
        $('.menu-mobile').addClass('sticky');
      }
      if (top < 50) {
        $('.menu-mobile').removeClass('sticky');
      }
    });
  }
}

function menuOpen() {
  $('#header .second-level .dropdown-toggle')
    .parent()
    .hover(
      function () {
        if ($(window).outerWidth() > 991) {
          $(this)
            .find('.fourthDropSubMenu')
            .stop(true, true)
            .delay(300)
            .slideDown(300);
        }
      },
      function () {
        if ($(window).outerWidth() > 991) {
          $(this).find('.fourthDropSubMenu').stop(true, true).slideUp(300);
        }
      }
    );

  //$(".navbar ul.navbar-nav li.nav-item > a").click(function () {
  //return false;
  //});
}

$.fn.equalizeHeights = function () {
  var maxHeight = this.map(function (i, e) {
    return $(e).height();
  }).get();
  return this.height(Math.max.apply(this, maxHeight));
};

function equalizeHeightService() {
  var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (is_safari) {
    $('.box-service').equalizeHeights();
  }
}

// carousel normalisation
function carouselNormalization() {
  var items = $('.news-list-view.row .inner-event-cards'), //grab all slides
    heights = [], //create empty array to store height values
    tallest; //create variable to make note of the tallest slide

  setTimeout(function () {
    if (items.length) {
      function normalizeHeights() {
        items.each(function () {
          //add heights to array
          heights.push($(this).height());
        });
        // 30 = padding-bottom de item
        tallest = Math.max.apply(null, heights) + 41; //cache largest value
        items.each(function () {
          $(this).css('min-height', tallest + 'px');
        });
      }
      if ($(window).outerWidth() > 992) {
        normalizeHeights();
      } else {
        items.each(function () {
          $(this).css('min-height', '0'); //reset min-height
        });
      }

      $(window).on('resize orientationchange', function () {
        (tallest = 0), (heights.length = 0); //reset vars
        items.each(function () {
          $(this).css('min-height', '0'); //reset min-height
        });
        if ($(window).outerWidth() > 992) {
          normalizeHeights(); //run it again
        }
      });
    }
  }, 500);
}

jQuery(document).ready(function () {
  carouselNormalization();
});

function scrollTop() {
  $('.scroll-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
}

function scrollSpeed() {
  $.fn.moveIt = function () {
    var $window = $(window);
    var instances = [];

    $(this).each(function () {
      instances.push(new moveItItem($(this)));
    });

    window.addEventListener(
      'scroll',
      function () {
        var scrollTop = $window.scrollTop();
        instances.forEach(function (inst) {
          inst.update(scrollTop);
        });
      },
      { passive: true }
    );
  };

  var moveItItem = function (el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };

  moveItItem.prototype.update = function (scrollTop) {
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };

  // Initialization
  $(function () {
    $('[data-scroll-speed]').moveIt();
  });
}

function accordeon() {
  $('.panel-heading').click(function () {
    if ($(this).parent().hasClass('no-border')) {
      $(this).parent().removeClass('no-border');
      $(this).addClass('show');
      //$(".panel .panel-heading > div").addClas("collapsed");
    } else {
      // $(this).parent().removeClass("no-border");
      $('.panel .panel-heading > div').attr('aria-expanded', 'false');
      $(this).addClass('collapsed');
      $(this).removeClass('show');
      $(this).parent().addClass('no-border');

      setTimeout(
        function () {
          var speed = 300;
          var hrefTarget = $(this).parent();
          var menuHeight = $('#header').height();
          $('html, body').animate(
            {
              scrollTop: $(hrefTarget).offset().top - menuHeight - 20,
            },
            speed
          );
        }.bind(this),
        350
      );
    }

    if ($(this).find('tab-carousel')) {
      $('.tab-carousel').resize();
      $('.tab-content').resize();
    }
  });
  $('.panel-collapse').each(function () {
    $(this).attr(
      'data-parent',
      '#' + $(this).closest('.panel-group').attr('id')
    );
  });
}

function scrollToSearchResult() {
  if (window.location.href.indexOf('tx_kesearch_pi1') > -1) {
    // scroll to search result
    var hrefTarget = $('.advanced-search-content');
    var menuHeight = $('#header').height();
    $('html, body').animate(
      {
        scrollTop: $(hrefTarget).offset().top - menuHeight - 20,
      },
      300
    );
  }
}
function accordeonOpenFromURL() {
  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    $('#' + hash)
      .parents('.panel-collapse')
      .addClass('show');
    console.log(hash);
    //$('#'+hash).parents('.panel.panel-default').find('.panel-heading > div').removeClass('collapsed');
    $('#' + hash)
      .parent()
      .parent()
      .parent('.panel.panel-default')
      .find('.panel-heading > div')
      .removeClass('collapsed');
    $('#' + hash)
      .parents('.panel-collapse')
      .find('.panel-heading')
      .first()
      .attr('aria-expanded', 'true');
    $('#' + hash)
      .parents('.panel.panel-default')
      .addClass('no-border');

    // scroll to accordion
    var hrefTarget = $('#' + hash).closest('.panel-default');
    var menuHeight = $('#header').height();
    $('html, body').animate(
      {
        scrollTop: $(hrefTarget).offset().top - menuHeight - 20,
      },
      300
    );
  }
}

function shareBtn() {
  $('.share ').click(function () {
    if (!$('.addthis_inline_share_toolbox').is(':empty')) {
      $('.share-panel').fadeIn(300);
    } else {
      alert(
        'Veuillez autoriser le service Addthis dans le panneau de gestion des cookies.'
      );
      tarteaucitron.userInterface.openPanel();
    }
  });

  $('.close-panel').click(function () {
    $('.share-panel').fadeOut(300);
  });
}

function copyURLtoClipboard() {
  $('.link').click(function () {
    var dummy = document.createElement('input'),
      text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    $('.copy-msg').fadeIn(300);

    setTimeout(function () {
      $('.copy-msg').fadeOut(300);
    }, 2000);
  });
}

function printBtn() {
  $('.print').click(function () {
    window.print();
  });
}

/*function fbshareCurrentPage(){
    window.open("https://www.facebook.com/sharer/sharer.php?u="+escape(window.location.href)+"&t="+document.title, '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
}

function twshareCurrentPage(){
	window.open("http://twitter.com/share?text=text goes here&url="+escape(window.location.href)+"&t="+document.title+"&hashtags=hashtag1,hashtag2,hashtag3");
	return false;
}*/

function socialRight() {
  /*sidebarHeight =  $('.sidebar-social').height();*/
  paddingSidebar = $('.follow-text').width() + 12;
  /*heightResult = sidebarHeight;*/
  $('.social-link-right').css('padding-bottom', paddingSidebar);
  setTimeout(function () {
    $('.social-link-right').css('right', '0px');
  }, 500);
}

function showAlert() {
  if ($('.alert').length) {
    var setCookie;

    var rules = {
      a: /[àáâãäå]+/g,
      ae: /[æ]+/g,
      c: /[ç]+/g,
      e: /[èéêë]+/g,
      i: /[ìíîï]+/g,
      n: /[ñ]+/g,
      o: /[òóôõö]+/g,
      oe: /[œ]+/g,
      u: /[ùúûü]+/g,
      y: /[ýÿ]+/g,
      _: /[\'\s\\]+/g,
    };

    if ($('.alert').data('cookie')) {
      setCookie = $('.alert').data('cookie');
      setCookie = setCookie.toLowerCase();
      for (var r in rules) setCookie = setCookie.replace(rules[r], r);

      //NOTIF QUI NE S'AFFICHE QU'UNE SEULE FOIS
      if (localStorage.getItem(setCookie) != 'shown') {
        setTimeout(function () {
          $('.alert').css('transform', 'translateX(0%)');
          if ($(window).outerWidth() > 991) {
            $('.alert').css('right', '26px');
            $('.alert').css('left', 'inherit');
          } else {
            $('.alert').css('left', '0px');
            $('.alert').css('right', 'inherit');
          }
          $('.alert').css('opacity', '1');
        }, 300);
        $('.alert-icon-2 i').click(function () {
          $('.alert').css('transform', 'translateX(100%)');
          $('.alert').css('right', '0px');
          $('.alert').css('opacity', '0');
          setTimeout(function () {
            $('.alert').css('display', 'none');
          }, 300);
          localStorage.setItem(setCookie, 'shown');
        });
      } else {
        $('.alert').remove();
      }
    }
  }
}

function getSocialLink() {
  /*var facebookLink = $(".fb-footer").attr("href");
	var youtubeLink = $(".yt-footer").attr("href");

	$('.fb-right').attr("href", facebookLink);
	$('.yt-right').attr("href", youtubeLink);*/
}

function loader() {
  $(window).on('load', function () {
    setTimeout(function () {
      $('.loader-container').fadeOut(300);
    }, 0);
  });
}

function hoverService() {
  $('.btn-6')
    .on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({ top: relY, left: relX });
    })
    .on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({ top: relY, left: relX });
    });
  /*$('[href=#]').click(function(){return false});*/
}

function initGallery() {
  $('.lightgallery').lightGallery({
    /*thumbnail:false,*/
    download: true,
    actualSize: false,
  });
}

function sliderProjet() {
  $('.sliderProjet').slick({
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: false,
    asNavFor: '.slider',
    speed: 500,
    variableWidth: true,
    infinite: true,
  });

  $('.sliderProjet2').slick({
    infinite: true,
    slidesToShow: 1,
    asNavFor: '.slider',
    prevArrow: $('.prev-project-slide'),
    nextArrow: $('.next-project-slide'),
  });

  $('.sliderProjet3').slick({
    infinite: true,
    slidesToShow: 1,
    asNavFor: '.slider',
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
        },
      },
    ],
  });
}

function parallax() {
  myParaxify = paraxify('.paraxify', {
    speed: 0,
    boost: 0,
  });
}

//SELECT HEADER
function create_custom_dropdowns() {
  $('select').each(function (i, select) {
    if (
      $(this).attr('id') != 'tx-srfeuserregister-pi1-static_info_country' &&
      !$(this).hasClass('no_dropdowns')
    ) {
      if (!$(this).next().hasClass('dropdown')) {
        $(this).after(
          '<div class="dropdown ' +
            ($(this).attr('class') || '') +
            '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>'
        );
        var dropdown = $(this).next();
        var options = $(select).find('option');
        var selected = $(this).find('option:selected');
        dropdown
          .find('.current')
          .html(selected.data('display-text') || selected.text());
        options.each(function (j, o) {
          var display = $(o).data('display-text') || '';
          dropdown
            .find('ul')
            .append(
              '<li class="option ' +
                ($(o).is(':selected') ? 'selected' : '') +
                '" data-value="' +
                $(o).val() +
                '" data-display-text="' +
                display +
                '">' +
                $(o).text() +
                '</li>'
            );
        });
      }
    }
  });
}

// Event listeners

// Open/close
$(document).on('click', '.dropdown', function (event) {
  $('.dropdown').not($(this)).removeClass('open');
  $(this).toggleClass('open');
  if ($(this).hasClass('open')) {
    $(this).find('.option').attr('tabindex', 0);
    $(this).find('.selected').focus();
  } else {
    $(this).find('.option').removeAttr('tabindex');
    $(this).focus();
  }
});
// Close when clicking outside
$(document).on({
  touchstart: function (event) {
    if ($(event.target).closest('.dropdown').length === 0) {
      $('.dropdown').removeClass('open');
      $('.dropdown .option').removeAttr('tabindex');
    }
    event.stopPropagation();
  },
});

$(document).click(function (event) {
  if ($(event.target).closest('.dropdown').length === 0) {
    $('.dropdown').removeClass('open');
    $('.dropdown .option').removeAttr('tabindex');
  }
  event.stopPropagation();
});

// Option click
$(document).on('click', '.dropdown .option', function (event) {
  $(this).closest('.list').find('.selected').removeClass('selected');
  $(this).addClass('selected');
  var text = $(this).data('display-text') || $(this).text();
  $(this).closest('.dropdown').find('.current').text(text);
  $(this)
    .closest('.dropdown')
    .prev('select')
    .val($(this).data('value'))
    .trigger('change');
});

// Keyboard events
$(document).on('keydown', '.dropdown', function (event) {
  var focused_option = $(
    $(this).find('.list .option:focus')[0] ||
      $(this).find('.list .option.selected')[0]
  );
  // Space or Enter
  if (event.keyCode == 32 || event.keyCode == 13) {
    if ($(this).hasClass('open')) {
      focused_option.trigger('click');
    } else {
      $(this).trigger('click');
    }
    return false;
    // Down
  } else if (event.keyCode == 40) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      focused_option.next().focus();
    }
    return false;
    // Up
  } else if (event.keyCode == 38) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      var focused_option = $(
        $(this).find('.list .option:focus')[0] ||
          $(this).find('.list .option.selected')[0]
      );
      focused_option.prev().focus();
    }
    return false;
    // Esc
  } else if (event.keyCode == 27) {
    if ($(this).hasClass('open')) {
      $(this).trigger('click');
    }
    return false;
  }
});

function stickySocial() {
  if (!$('body').hasClass('homepage')) {
    $stick = $('.sidebar-social');
    sidebarHeight = $('.sidebar-social').height() + $('.follow-text').width();
    $foot = $('.cta');
    headerHeight = $('#header').height();
    margin = headerHeight;
    offtop = $stick.offset().top - margin;
    offbtm = $foot.offset().top - (margin * 2 + sidebarHeight);

    $(window).scroll(function () {
      scrtop = $(window).scrollTop();
      if (scrtop + headerHeight > offtop && $stick.hasClass('natural')) {
        $stick.removeClass('natural').addClass('fixed').css('top', margin);
        $stick.addClass('dark-bg');
      }
      if (offtop > scrtop && $stick.hasClass('fixed')) {
        $stick.removeClass('fixed').addClass('natural');
        $stick.removeClass('dark-bg');
      }
      if (scrtop > offbtm && $stick.hasClass('fixed')) {
        $stick
          .removeClass('fixed')
          .addClass('bottom')
          .css('top', offbtm + margin);
      }
      if (offbtm > scrtop && $stick.hasClass('bottom')) {
        $stick.removeClass('bottom').addClass('fixed').css('top', margin);
      }
    });
  }
}

function carouselTab() {
  $('.tab-carousel').each(function (index) {
    $(this).addClass('num-' + index);

    $('.tab-carousel.num-' + index).slick({
      slidesToShow: 1,
      focusOnSelect: true,
      arrows: false,
      speed: 500,
      asNavFor: '.num-' + index,
      variableWidth: true,
    });
  });

  $('.tab-content').each(function (index) {
    $(this).addClass('num-' + index);

    $('.tab-content.num-' + index).slick({
      slidesToShow: 1,
      arrows: false,
      asNavFor: '.num-' + index,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
          },
        },
      ],
    });
  });
}

function searchActive() {
  $('.tx-indexedsearch-form input').focusin(function () {
    $(this).parent().addClass('focus-field');
  });

  $('.tx-indexedsearch-form input').focusout(function () {
    $(this).parent().removeClass('focus-field');
  });
}

function searchSticky() {
  $('.search-box-sticky i').click(function () {
    $('.overlay-search').fadeIn(300);
    $('.overlay-green').fadeIn(300);
    /*$('.overlay-search-inner .search-container').append($('#header .tx-indexedsearch-searchbox'));*/
  });

  $('.overlay-green').click(function () {
    $('.overlay-search').fadeOut(300);
    $('.search-box-mobile').slideUp(300);
    $(this).fadeOut(300);
    $('.search-top').append(
      $('.overlay-search-inner .search-container .tx-indexedsearch-searchbox')
    );
    $('i.icon-x').removeClass('search-mob-open');
    $('.search-mob i.icon-x').addClass('icon-search');
    $('.search-mob i.icon-x').removeClass('icon-x');
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $('.overlay-search').fadeOut(300);
      $('.overlay-green').fadeOut(300);
      $('.search-top').append(
        $('.overlay-search-inner .search-container .tx-indexedsearch-searchbox')
      );
    }
  });
}

function perfectscroll() {
  if ($('.ce-table').length) {
    ps = new PerfectScrollbar('.frame-type-table');
  }

  if ($('.menu-demarche-admin .level-1').length) {
    ps2 = new PerfectScrollbar('.menu-demarche-admin .level-1');
  }

  if ($('.menu-most-visited-pages  .level-1').length) {
    ps2 = new PerfectScrollbar('.menu-most-visited-pages .level-1');
  }
  if ($('.menu-i-am  .level-1').length) {
    ps3 = new PerfectScrollbar('.menu-i-am .level-1');
  }

  if ($('.advanced-search-list').length) {
    ps4 = new PerfectScrollbar('.advanced-search-list');
  }
}

function perfectscrollMenu() {
  if ($(window).outerWidth() > 991) {
    $('.dropdown-menu').each(function () {
      const ps4 = new PerfectScrollbar($(this)[0], {
        wheelSpeed: 0.2,
      });
    });
  }
}

function appendElements() {
  $('footer .col-md-4:first-child').append($('.select-bottom'));
  //swap in desktop content
  if ($(window).outerWidth() < 992) {
    $('.main-nav-mobile').append($('.navbar-nav'));
    $('.second-nav-mobile').append($('.very-top-inner'));
    $('.search-box-mobile').prepend($('.search-box-element'));
    $('.news-slider-top-link').appendTo('.news-slider-top-link-mobile');
    $('.videos-chanel .slider-nav').appendTo(
      '.videos-chanel > .container > .video-chanel-heading:first-of-type'
    );
  } else {
    $('.very-top-menu').append($('.very-top-inner'));
    $('.navbar-collapse').prepend($('.navbar-nav'));
    $('.search-top').append($('.search-box-element'));
    $('.news-slider-top-link').prependTo('.news-slider-top');
    $('.video-chanel-heading .slider-nav').insertAfter('.preview-video-slider');
  }
}

function appendSearchMob() {
  if ($(window).outerWidth() <= 991) {
    $('.search-top').appendTo($('.search-box-mobile'));
  } else {
    $('.search-box-mobile .search-top').appendTo($('.navbar-collapse'));
  }
}

/*function stopBodyScrolling (bool) {
    if (bool === true) {
        document.body.addEventListener("touchmove", freezeVp, false);
    } else {
        document.body.removeEventListener("touchmove", freezeVp, false);
    }
}*/

function menuBurger() {
  $('.button-menu-mobile').click(function () {
    $('.search-mob i').removeClass('search-mob-open');
    $('.search-mob i').removeClass('icon-x');
    $('.search-mob i').addClass('icon-search');
    $('.search-box-mobile').slideUp(300);
    $('.overlay-green').fadeOut(300);
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.menu-mobile-content').slideUp(300);
      $('.menu-mobile').removeClass('menu-mobile-open');
      $('body').removeClass('no-scroll');
      $('html').removeClass('no-scroll');

      if (
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i)
      ) {
        $('.menu-mobile').css('padding-bottom', '15px');
      }
      var bodyDataScroll = $('body').attr('data-scroll');
      $('html, body').scrollTop(bodyDataScroll);
      $('body').attr('data-scroll', '');
    } else {
      var menuScrollTop = $(window).scrollTop();
      $('.menu-mobile-content').slideDown(300);
      $(this).addClass('active');
      $('.menu-mobile').addClass('menu-mobile-open');
      $('body').addClass('no-scroll');
      $('body').attr('data-scroll', '' + menuScrollTop + '');
      $('html').addClass('no-scroll');
      if (
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i)
      ) {
        $('.menu-mobile').css('padding-bottom', '80px');
      }
    }
  });
}

function topHeader() {
  if ($(window).outerWidth() < 992) {
    var hauteurheader = $('.menu-mobile-header').outerHeight() + 30;
    $('.slick-accueil').css('margin-top', hauteurheader);
  } else {
    $('.slick-accueil').css('margin-top', '0px');
  }
}

/*$(window).on('resize', function(){
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
    	if($(window).outerWidth() < 992) {
		    menuMobile();

		} else {

		}
        console.log('Resized finished.');
    }, 250);
});*/

function menuMobile() {
  if ($(window).outerWidth() < 992) {
    $('.main-nav-mobile .nav-item > a').on('click', function () {
      var linkTitle = $(this).html();
      if ($(window).outerWidth() < 992) {
        $(this).attr('href', 'javascript:void(0);');
        if ($(this).parent().hasClass('open-first-level')) {
          $(this).parent().removeClass('open-first-level');
          $(this).parent().find('.dropdown-menu').stop(true, true).slideUp(300);
          $(this)
            .parent()
            .find('.icon-mob')
            .addClass('icon-angle-right-regular');
          $(this)
            .parent()
            .find('.icon-mob')
            .removeClass('icon-angle-left-regular');
          $(this).removeClass('dropdown-menu-open');
        } else {
          if (!$('.main-nav-mobile .dropdown-menu > .submenu-title').length) {
            $(this)
              .siblings('.dropdown-menu')
              .prepend('<p class="submenu-title">' + linkTitle + '</p>');
          }
          $('.main-nav-mobile .dropdown-menu').slideUp(300);
          $(this)
            .parent()
            .find('.dropdown-menu')
            .stop(true, true)
            .slideDown(300);
          $('.main-nav-mobile .nav-item').removeClass('open-first-level');
          $(this).parent().addClass('open-first-level');
          $('.main-nav-mobile .nav-item')
            .find('.icon-mob')
            .addClass('icon-angle-right-regular');
          $(this)
            .parent()
            .find('.icon-mob')
            .removeClass('icon-angle-right-regular');
          $(this)
            .parent()
            .find('.icon-mob')
            .addClass('icon-angle-left-regular');
          $('.main-nav-mobile .nav-item > a').removeClass('dropdown-menu-open');
          $(this).addClass('dropdown-menu-open');
          $('.main-nav-mobile .submenu-box').removeClass('submenu-mobile-open');
          $('.main-nav-mobile .fourthDropSubMenu').slideUp(300);
        }
      }
    });
    $(document).on(
      'click',
      '.main-nav-mobile .dropdown-menu > .submenu-title',
      function () {
        $('.main-nav-mobile .dropdown-menu').slideUp(300);
        $('.main-nav-mobile .nav-item').removeClass('open-first-level');
        $('.main-nav-mobile .nav-item')
          .find('.icon-mob')
          .addClass('icon-angle-right-regular');
        $('.main-nav-mobile .nav-item > a').removeClass('dropdown-menu-open');
        $('.main-nav-mobile .submenu-box').removeClass('submenu-mobile-open');
        $('.main-nav-mobile .fourthDropSubMenu').slideUp(300);
        $(this).remove();
      }
    );

    $('.main-nav-mobile .submenu-box > a').click(function () {
      if ($(window).outerWidth() < 992) {
        $(this).attr('href', 'javascript:void(0);');
        if ($(this).parent().hasClass('submenu-mobile-open')) {
          $(this).parent().removeClass('submenu-mobile-open');
          $(this)
            .parent()
            .find('.fourthDropSubMenu')
            .stop(true, true)
            .slideUp(300);
          $(this).parent().find('.icon-mob').removeClass('icon-minus');
          $(this).parent().find('.icon-mob').addClass('icon-plus');
        } else {
          /*$('.fourthDropSubMenu').slideUp(300);*/
          $(this)
            .parent()
            .find('.fourthDropSubMenu')
            .stop(true, true)
            .slideDown(300);
          /*$('.submenu-box').removeClass('submenu-mobile-open');*/
          $(this).parent().addClass('submenu-mobile-open');
          $(this).parent().find('.icon-mob').addClass('icon-minus');
          $(this).parent().find('.icon-mob').removeClass('icon-plus');
        }
      }
    });
  }

  /*$('.dropdown-toggle').click(function(){
        	$(this).attr("href", "javascript:void(0);");
        });


        $('.dropdown-toggle').parent().hover(function() {
		  	$(this).find('.dropdown-menu').stop(true, true).slideUp();
		  	$(this).find('.dropdown-toggle').removeClass('dropdown-menu-open');
		  	$(this).removeClass('open-first-level');
		});*/

  /*$('.dropdown-toggle.dropdown-menu-open').parent().hover(function() {
		  $(this).find('.dropdown-menu').show();
		});*/

  /*$(".nav-item").append("<i class='icon-mob icon-angle-right-regular'></i>");
		$(".submenu-box").append("<i class='icon-mob icon-plus'></i>");*/

  /*$('.dropdown-toggle').parent().hover(

           function () {
              	$(this).addClass('open-first-level');
              	$(this).find('.icon-mob').removeClass('icon-angle-right-regular');
				$(this).find('.icon-mob').addClass('icon-angle-left-regular');
           },

           function () {
              	$(this).removeClass('open-first-level');
              	$(this).find('.icon-mob').addClass('icon-angle-right-regular');
				$(this).find('.icon-mob').removeClass('icon-angle-left-regular');
           }
        );*/

  /*$('.nav-item > .icon-mob').click(function(){
			if ($(this).parent().hasClass('open-first-level')){
				$(this).parent().removeClass('open-first-level');
				$(this).parent().find('.dropdown-menu').stop(true, true).slideUp(300);
				$(this).addClass('icon-angle-right-regular');
				$(this).removeClass('icon-angle-left-regular');
			}else{
				$(this).parent().find('.dropdown-menu').stop(true, true).slideDown(300);
				$(this).parent().addClass('open-first-level');
				$(this).removeClass('icon-angle-right-regular');
				$(this).addClass('icon-angle-left-regular');
			}
		});*/

  /*$('.submenu-box').hover(function(){
			if ($(this).hasClass('submenu-mobile-open')){
				$(this).removeClass('submenu-mobile-open');
				$(this).find('.fourthDropSubMenu').slideUp(300);
				$(this).find('.icon-mob').removeClass('icon-minus');
				$(this).find('.icon-mob').addClass('icon-plus');
			}else{
				$('.fourthDropSubMenu').slideUp(300);
				$(this).find('.fourthDropSubMenu').slideDown(300);
				$(this).addClass('submenu-mobile-open');
				$(this).find('.icon-mob').addClass('icon-minus');
				$(this).find('.icon-mob').removeClass('icon-plus');
			}
		});*/

  /*$('.submenu-box > .icon-mob').click(function(){
			if ($(this).parent().hasClass('submenu-mobile-open')){
				$(this).parent().removeClass('submenu-mobile-open');
				$(this).parent().find('.fourthDropSubMenu').slideUp(300);
				$(this).removeClass('icon-minus');
				$(this).addClass('icon-plus');
			}else{
				$('.fourthDropSubMenu').slideUp(300);
				$(this).parent().find('.fourthDropSubMenu').slideDown(300);
				$(this).parent().addClass('submenu-mobile-open');
				$(this).addClass('icon-minus');
				$(this).removeClass('icon-plus');
			}
		});*/
}

function searchMobile() {
  $('.search-mob i.icon-search').click(function () {
    $('.button-menu-mobile').removeClass('active');
    $('.menu-mobile-content').slideUp(300);
    if ($(this).hasClass('search-mob-open')) {
      $('.menu-mobile').removeClass('menu-mobile-open');
      $(this).removeClass('search-mob-open');
      $(this).removeClass('icon-x');
      $(this).addClass('icon-search');
      $('.search-box-mobile').slideUp(300);
      $('.overlay-green').fadeOut(300);
      $('body').removeClass('no-scroll');
      $('html').removeClass('no-scroll');
    } else {
      $('.menu-mobile').addClass('menu-mobile-open');
      $(this).addClass('search-mob-open');
      $(this).addClass('icon-x');
      $(this).removeClass('icon-search');
      $('.search-box-mobile').slideDown(300);
      $('.overlay-green').fadeIn(300);
      $('body').addClass('no-scroll');
      $('html').addClass('no-scroll');
    }
  });
}

$(document).ready(function () {
  $('#options_filter_1 li').each(function () {
    $attr = $(this).find('input').attr('disabled');
    console.log($attr);
    if ($attr == 'disabled') {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
});

function menuDemarche() {
  $('.btn-menu-demarche:not(.btn-participative)').click(function () {
    if ($(this).hasClass('active-demarche')) {
      $(this).removeClass('active-demarche');
      $('.menu-demarche-admin').removeClass('menu-demarche-open');
      $('.overlay-green2').fadeOut(300);
      $('html, body').removeClass('no-scroll');
    } else {
      $(this).addClass('active-demarche');
      $('.menu-demarche-admin').addClass('menu-demarche-open');
      $('html, body').addClass('no-scroll');
      $('.overlay-green2').fadeIn(300);
    }

    $('.overlay-green2').click(function () {
      $(this).fadeOut(300);
      $('.menu-demarche-admin').removeClass('menu-demarche-open');
      $('.btn-menu-demarche').removeClass('active-demarche');
      $('html, body').removeClass('no-scroll');
    });
  });

  //DROPDOWN MENU
  $('.menu-demarche-admin .close').click(function () {
    $('.overlay-green2').fadeOut(300);
    $('.menu-demarche-admin').removeClass('menu-demarche-open');
    $('.btn-menu-demarche').removeClass('active-demarche');

    $('html, body').removeClass('no-scroll');
  });

  $('.dropdown-sub').click(function () {
    $(this).attr('href', 'javascript:void(0);');
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().removeClass('open');
      $(this).parent().find('.admin-menu-dropdown').slideUp(300);
    } else {
      $('.admin-menu-dropdown').slideUp(300);
      $('.admin-item .dropdown-sub').removeClass('active');
      $('.admin-item').removeClass('open');
      $(this).parent().find('.admin-menu-dropdown').slideDown(300);
      $(this).addClass('active');
      $(this).parent().addClass('open');
    }
  });
}

function coverFitIE() {
  var userAgent, ieReg, ie;
  userAgent = window.navigator.userAgent;
  ieReg = /msie|Trident.*rv[ :]*11\./gi;
  ie = ieReg.test(userAgent);

  if (ie) {
    $('.page-header figure.image, .home-page .slick-slide').each(function () {
      var $container = $(this),
        imgUrl = $container.find('img').prop('src');
      if (imgUrl) {
        $container
          .css('backgroundImage', 'url(' + imgUrl + ')')
          .addClass('custom-object-fit');
      }
    });
  }
}

function menuDemHeight() {
  var menuTotal = $(window).height();
  var titleHeight = $('.menu-demarche-admin h3').height();
  //var paddingMenu = $('.menu-demarche-admin').outerHeight() - $('.menu-demarche-admin').height();

  var calculHeightMenu = menuTotal - titleHeight - 90;

  $('.menu-demarche-admin ul.level-1').css('height', calculHeightMenu);
}

function addBr() {
  if ($(window).outerWidth() > 992) {
    $('.navbar ul.navbar-nav li.nav-item > a').each(function () {
      var html = $(this).html().split(' ');
      html = html.slice(0, 1).join(' ') + '<br />' + html.slice(1).join(' ');
      $(this).html(html);
    });
  }
}

function searchTyping() {
  $('.advanced-search-input').keypress(function () {
    $('.advanced-search-list').slideDown(300);
  });

  $('.advanced-search-input').focusout(function () {
    $('.advanced-search-list').slideUp(300);
  });
}

function searchResponsive() {
  if ($(window).outerWidth() < 1200 && $(window).outerWidth() > 991) {
    $('.search-top  .tx-indexedsearch-form')
      .find(
        '.tx-indexedsearch-searchbox-sword, .tx-indexedsearch-searchbox-button'
      )
      .hide();
    $('.search-top  .tx-indexedsearch-form').click(function () {
      $(this).addClass('responsive-search-open');
      $(this).removeClass('hide-input');
      $(this)
        .find(
          '.tx-indexedsearch-searchbox-sword, .tx-indexedsearch-searchbox-button'
        )
        .show();
      $(this).find('.tx-indexedsearch-searchbox-sword').focus();
      $('.search-top').addClass('opened-search');

      if ($(this).hasClass('responsive-search-open')) {
        $(this)
          .find('.tx-indexedsearch-searchbox-sword')
          .focusout(function () {
            $('.search-top').removeClass('opened-search');
            $(this).parent().removeClass('responsive-search-open');
            setTimeout(
              function () {
                $(this).parent().addClass('hide-input');
              }.bind(this),
              100
            );
          });
      }
    });
  } else {
    $('.search-top  .tx-indexedsearch-form').click(function () {
      $(this).removeClass('responsive-search-open');
    });
    $('.search-top  .tx-indexedsearch-form')
      .find(
        '.tx-indexedsearch-searchbox-sword, .tx-indexedsearch-searchbox-button'
      )
      .show();
    $('.search-top  .tx-indexedsearch-form').removeClass(
      'responsive-search-open'
    );
    $('.search-top  .tx-indexedsearch-form').removeClass('hide-input');
  }
}

function addClassActiveEnquete() {
  if ($('.all-link').length) {
    var urlcomplet = window.location.href;
    var lien = $('.all-link').prop('href');
    console.log(lien);
    console.log(urlcomplet);

    if (lien === urlcomplet) {
      $('.all-link').addClass('active');
    }
  }
}

function resizeComportement() {
  if ($(window).outerWidth() < 992) {
    $('.dropdown-menu').hide();
  }
}

function searchChange() {
  $('.filtre-search-cat input').change(function () {
    $('#form_kesearch_pi1').submit();
    $('.loader4').fadeIn(300);
  });

  if ($('.search-results').length) {
    $('.filtre-list').appendTo('.sidebar-search');
    $('.filtre-list').fadeIn(300);
  }
}

function transfertSearchLink() {
  $('.result-list-item').each(function () {
    var a_href = $(this).find('.header h5 a').attr('href');
    $(this).find('.header h5 a').contents().unwrap();

    $(this).wrap('<a href="' + a_href + '" class="display-block"></a>');
  });
}

// function menuMinHeight() {
//     var heightMaxSub = $(".navbar-nav").height();
//     $(".dropdown-menu").css({ "max-height": heightMaxSub });
// }

function advancedSearchFocus() {
  $('.advanced-search-input').focus(function () {
    $(this).parent().parent().addClass('active');
  });

  $('.advanced-search-input').focusout(function () {
    $(this).parent().parent().removeClass('active');
  });
}

function searchEscape() {
  $('.advanced-search-form').on('submit', function () {
    var value = $('.advanced-search-input').val();
    var goodString = value.replace(/'/g, '’');
    $('.advanced-search-input').val(goodString);
  });

  $('.tx-indexedsearch-searchbox').on('submit', function () {
    var value = $('.tx-indexedsearch-searchbox-sword').val();
    var goodString = value.replace(/'/g, '’');
    $('.tx-indexedsearch-searchbox-sword').val(goodString);
  });
}

function homeBtnMenu() {
  $('.most-visited-pages-btn').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.menu-most-visited-pages').removeClass('open');
      $('.overlay-green2').fadeOut(300);
      $('html, body').removeClass('no-scroll');
    } else {
      $(this).addClass('active');
      $('.menu-most-visited-pages').addClass('open');
      $('html, body').addClass('no-scroll');
      $('.overlay-green2').fadeIn(300);
    }

    $('.overlay-green2').click(function () {
      $(this).fadeOut(300);
      $('.menu-most-visited-pages').removeClass('open');
      $('.most-visited-pages-btn').removeClass('active');
      if (!$('#header').hasClass('menu-open')) {
        $('html, body').removeClass('no-scroll');
      }
    });
  });

  $('.i-am-btn').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.menu-i-am').removeClass('open');
      $('.overlay-green2').fadeOut(300);
      $('html, body').removeClass('no-scroll');
    } else {
      $(this).addClass('active');
      $('.menu-i-am').addClass('open');
      $('html, body').addClass('no-scroll');
      $('.overlay-green2').fadeIn(300);
    }

    $('.overlay-green2').click(function () {
      $(this).fadeOut(300);
      $('.menu-i-am').removeClass('open');
      $('.i-am-btn').removeClass('active');
      $('html, body').removeClass('no-scroll');
    });
  });

  $('.menu-i-am .level-1 > li.hassub').each(function () {
    var linkTitleIAm = $(this).children('a').html();
    if (!$('.menu-i-am .dropdown-menu > .submenu-title-iam').length) {
      $(this)
        .children('.dropdown-menu')
        .prepend('<p class="submenu-title-iam">' + linkTitleIAm + '</p>');
    }
  });

  $('.menu-i-am .level-1 > li.hassub').click(function () {
    $(this).children('.dropdown-menu').addClass('open');
    return false;
  });
  $('.menu-i-am .level-1 > li .submenu-title-iam').click(function () {
    $(this).parent('.dropdown-menu').removeClass('open');
    return false;
  });
}

function sliderNews() {
  $('.news-slider').slick({
    slidesToShow: 3,
    focusOnSelect: true,
    prevArrow: $('.news-slider-arrow .arrow-left'),
    nextArrow: $('.news-slider-arrow .arrow-right'),
    speed: 500,
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

function sliderPublications() {
  $('.slider-publications').slick({
    slidesToShow: 1,
    focusOnSelect: true,
    prevArrow: $('.slider-publications-arrow .arrow-left'),
    nextArrow: $('.slider-publications-arrow .arrow-right'),
    speed: 500,
    infinite: true,
    dots: true,
  });
}

//SEARCH MENU OPEN
function searchMenu() {
  $('.search-icon-container .icon-search').click(function () {
    $('.menu-icon .menu-burger').removeClass('active');
    $('.nav-menu').removeClass('open');
    $(this).parent().addClass('active');
    $('html, body').addClass('no-scroll');
    $('.search-menu').addClass('open');
    $('#header').addClass('menu-open');
    $('#header').addClass('search-open');
    $('.faq-menu-button').addClass('menu-open');
    return false;
  });
  $('.search-icon-container .close-search').click(function () {
    $('.menu-icon .menu-burger').removeClass('active');
    $('.nav-menu').removeClass('open');
    $(this).parent().removeClass('active');
    $('html, body').removeClass('no-scroll');
    $('.search-menu').removeClass('open');
    $('#header').removeClass('menu-open');
    $('#header').removeClass('search-open');
    $('.faq-menu-button').removeClass('menu-open');
    return false;
  });
}

//MENU OPEN
function menuOpenBurger() {
  $('.menu-icon .menu-burger').click(function () {
    if ($(this).hasClass('active')) {
      $('.search-icon-container').removeClass('active');
      $('.search-menu').removeClass('open');
      $('#header').removeClass('search-open');
      $(this).removeClass('active');
      $('html, body').removeClass('no-scroll');
      $('.nav-menu').removeClass('open');
      $('#header').removeClass('menu-open');
      $('.faq-menu-button').removeClass('menu-open');
    } else {
      $('.search-icon-container').removeClass('active');
      $('.search-menu').removeClass('open');
      $('#header').removeClass('search-open');
      $(this).addClass('active');
      $('html, body').addClass('no-scroll');
      $('.nav-menu').addClass('open');
      $('#header').addClass('menu-open');
      $('.faq-menu-button').addClass('menu-open');
    }
    return false;
  });
}

// YOUTUBE VIMEO SLIDER
function videoSlider() {
  $('.video-slider').on('init', function (event, slick) {
    slideCount = slick.slideCount;
    videosetSlideCount();
    videosetCurrentSlideNumber(slick.currentSlide);
  });

  var slideCount = null;

  $('.video-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.video-slider-title',
    accessibility: false,
    prevArrow: $('.slider-nav .prev-slide'),
    nextArrow: $('.slider-nav .next-slide'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
        },
      },
    ],
  });

  $('.video-slider.slick-initialized').css('opacity', '1');

  $('.preview-video-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    initialSlide: 1,
    accessibility: false,
    swipe: false,
    fade: true,
    arrows: false,
  });

  $('.preview-video-slider.slick-initialized').css('opacity', '1');

  $('.video-slider-title').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    fade: true,
    accessibility: false,
    swipe: false,
    arrows: false,
  });

  $('.video-slider-title.slick-initialized').css('opacity', '1');

  $('.video-slider').on('swipe', function (event, slick, direction) {
    if (direction == 'left') {
      $('.preview-video-slider').slick('slickNext');
    } else {
      $('.preview-video-slider').slick('slickPrev');
    }
  });

  $('.video-slider').on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      videosetCurrentSlideNumber(nextSlide);

      if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
        $('.preview-video-slider').slick('slickPrev');
      } else if (
        nextSlide > currentSlide ||
        (currentSlide === slick.$slides.length - 1 && nextSlide === 0)
      ) {
        $('.preview-video-slider').slick('slickNext');
      } else {
        $('.preview-video-slider').slick('slickPrev');
      }
    }
  );

  function videosetSlideCount() {
    var $el = $('.videos-chanel .slider-nav .pagingInfo').find('.total');
    $el.text(slideCount);
  }

  function videosetCurrentSlideNumber(currentSlide) {
    var $el = $('.videos-chanel .slider-nav .pagingInfo').find('.current');
    $el.text(currentSlide + 1);
  }

  $('.video-slider').on('beforeChange', function (event, slick) {
    var currentSlide, slideType, player, command;

    //find the current slide element and decide which player API we need to use.
    currentSlide = $(slick.$slider).find('.slick-current');

    //determine which type of slide this, via a class on the slide container. This reads the second class, you could change this to get a data attribute or something similar if you don't want to use classes.
    slideType = currentSlide.attr('class').split(' ')[1];

    //get the iframe inside this slide.
    player = currentSlide.find('iframe').get(0);
    currentSlide.find('.video-overlay').fadeIn();

    command = {
      event: 'command',
      func: 'pauseVideo',
    };

    //check if the player exists.
    if (player != undefined) {
      //post our command to the iframe.
      player.contentWindow.postMessage(JSON.stringify(command), '*');
    }
  });

  //Play on click
  $('.video-slider .video-slide').each(function () {
    $(this)
      .find('.video-overlay')
      .on('click', function () {
        slideType = $(this).parents('.video-slide').attr('class').split(' ')[1];

        player = $(this).parents('.video-slide').find('iframe').get(0);

        $(this).fadeOut();

        command = {
          event: 'command',
          func: 'playVideo',
        };

        if (player != undefined) {
          //post our command to the iframe.
          player.contentWindow.postMessage(JSON.stringify(command), '*');
        }
      });
  });

  $(document).on(
    'click',
    '.preview-video-slider .video-slide.slick-current',
    function () {
      var slide = $(this).attr('data-slick-index');
      $('.video-slider').slick('slickGoTo', slide);

      slideType = $('.video-slider .slick-current.video-slide')
        .attr('class')
        .split(' ')[1];

      player = $('.video-slider .video-slide.slick-current')
        .find('iframe')
        .get(0);

      setTimeout(function () {
        $('.video-slider .video-slide.slick-current .video-overlay').fadeOut();

        command = {
          event: 'command',
          func: 'playVideo',
        };

        if (player != undefined) {
          //post our command to the iframe.
          player.contentWindow.postMessage(JSON.stringify(command), '*');
        }
      }, 500);
    }
  );
}

var windowWidth = jQuery(window).width();

$(window).resize(function () {
  stickyMenu();
  menuOpen();
  //topHeader();
  stickySocial();
  coverFitIE();
  menuDemHeight();
  /*appendSearchMob();*/
  showAlert();
  //socialRight();
  //menuMobile();
  if (jQuery(this).width() != windowWidth) {
    windowWidth = jQuery(this).width();
    resizeComportement();
    appendElements();
  }
  searchResponsive();
  if ($(window).outerWidth() > 991 && $(window).outerWidth() < 993) {
  }
  //menuMinHeight();
  perfectscrollMenu();
});

$(window).on('load', function () {
  //socialRight();
  stickySocial();
  showAlert();
});

$(document).ready(function () {
  appendElements();
  addClassActiveEnquete();
  searchResponsive();
  /*addBr();*/
  printBtn();
  shareBtn();
  copyURLtoClipboard();
  scrollTop();
  getSocialLink();
  AOS.init();
  loader();
  sliderProjet();
  scrollSpeed();
  menuOpen();
  hoverService();
  initGallery();
  create_custom_dropdowns();
  /*parallax();*/
  carouselTab();
  searchSticky();
  searchActive();
  accordeon();
  // accordeonOpenFromURL();
  scrollToSearchResult();
  perfectscroll();
  //menuMobile();
  menuBurger();
  searchMobile();
  stickyMenu();
  //topHeader();
  /*appendSearchMob();*/
  equalizeHeightService();
  menuDemarche();
  showAlert();
  coverFitIE();
  menuDemHeight();
  /*searchTyping();*/
  searchChange();
  transfertSearchLink();
  //menuMinHeight();
  advancedSearchFocus();
  perfectscrollMenu();
  searchEscape();
  sliderNews();
  videoSlider();
  sliderPublications();
  homeBtnMenu();
  searchMenu();
  menuOpenBurger();

  // VIDEO SLIDER LIVESTREAM
  $(function () {
    $('.videos-chanel.inview').bind('inview', function (event, visible) {
      console.log('test');
      if (visible) {
        $('.slider-video-popup').addClass('active');
      } else {
        $('.slider-video-popup').removeClass('active');
      }
    });
  });

  $('.slider-video-popup .icon-x').click(function () {
    $(this).parent().removeClass('popup-visible');
    localStorage.setItem('popupVisible', 'off');
  });

  if (localStorage.getItem('popupVisible') == 'off') {
    $(this).parent().removeClass('popup-hidden');
  }
});

var transposed = 'desktop';
$(document).ready(function () {
  if ($(window).outerWidth() < 992) {
    transposed = 'mobile';
    menuMobile();
  } else {
    transposed = 'desktop';
  }
});
$(window).resize(function () {
  if ($(window).outerWidth() < 992 && transposed != 'mobile') {
    transposed = 'mobile';
    menuMobile();
  }

  if ($(window).outerWidth() > 992 && transposed != 'desktop') {
    transposed = 'desktop';
  }
});
