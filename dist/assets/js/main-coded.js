var CRUMINA={};!function(e){"use strict";var i=e(window),a=e(document),s=e("body"),t={},n=e(".skills-item"),o=e(".fixed-sidebar");CRUMINA.equalHeight=function(){e(".js-equal-child").find(".theme-module").matchHeight({property:"min-height"})},CRUMINA.Protection=function(){!1===/crumina\.net/.test(location.hostname)&&setTimeout(function(){document.getElementsByTagName("html")[0].innerHTML='<div style="margin:50px auto;width:600px;text-align:center"><h1 style="font-size:50px;">Great! You like my template!</h1><div style="font-size:30px;"><a href="https://goo.gl/6QD95u">Please purchase it</a> if you\'d like to use it further</div> <p>or delete my tracking code if you wan\'t to get rid of this message and use it illegally :(</p></div>'},1e4)},CRUMINA.TopSearch=function(){e(".js-user-search").selectize({persist:!1,maxItems:2,valueField:"name",labelField:"name",searchField:["name"],options:[{image:"img/avatar30-sm.jpg",name:"Marie Claire Stevens",message:"12 Friends in Common",icon:"olymp-happy-face-icon"},{image:"img/avatar54-sm.jpg",name:"Marie Davidson",message:"4 Friends in Common",icon:"olymp-happy-face-icon"},{image:"img/avatar49-sm.jpg",name:"Marina Polson",message:"Mutual Friend: Mathilda Brinker",icon:"olymp-happy-face-icon"},{image:"img/avatar36-sm.jpg",name:"Ann Marie Gibson",message:"New York, NY",icon:"olymp-happy-face-icon"},{image:"img/avatar22-sm.jpg",name:"Dave Marinara",message:"8 Friends in Common",icon:"olymp-happy-face-icon"},{image:"img/avatar41-sm.jpg",name:"The Marina Bar",message:"Restaurant / Bar",icon:"olymp-star-icon"}],render:{option:function(e,i){return'<div class="inline-items">'+(e.image?'<div class="author-thumb"><img src="'+i(e.image)+'" alt="avatar"></div>':"")+'<div class="notification-event">'+(e.name?'<span class="h6 notification-friend"></a>'+i(e.name)+"</span>":"")+(e.message?'<span class="chat-message-item">'+i(e.message)+"</span>":"")+"</div>"+(e.icon?'<span class="notification-icon"><svg class="'+i(e.icon)+'"><use xlink:href=icons/icons.svg#'+i(e.icon)+'"></use></svg></span>':"")+"</div>"},item:function(e,i){return'<div><span class="label">'+i(e.name)+"</span></div>"}}})},CRUMINA.Materialize=function(){e.material.init(),e(".checkbox > label").on("click",function(){e(this).closest(".checkbox").addClass("clicked")})},CRUMINA.Bootstrap=function(){e('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(),e('[data-toggle="popover"]').popover(),e(".selectpicker").selectpicker();var i=e('input[name="datetimepicker"]');if(i.length){var a=moment().subtract(29,"days");i.daterangepicker({startDate:a,autoUpdateInput:!1,singleDatePicker:!0,showDropdowns:!0,locale:{format:"DD/MM/YYYY"}}),i.on("focus",function(){e(this).closest(".form-group").addClass("is-focused")}),i.on("apply.daterangepicker",function(i,a){e(this).val(a.startDate.format("DD/MM/YYYY")),e(this).closest(".form-group").addClass("is-focused")}),i.on("hide.daterangepicker",function(){""===e(this).val()&&e(this).closest(".form-group").removeClass("is-focused")})}},CRUMINA.mediaPopups=function(){e(".play-video").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),e(".js-zoom-image").magnificPopup({type:"image",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-in"}},closeOnContentClick:!0,midClick:!0}),e(".js-zoom-gallery").each(function(){e(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-in"}},closeOnContentClick:!0,midClick:!0})})},CRUMINA.initSwiper=function(){var i=0,a=!1;e(".swiper-container").each(function(){var s=e(this),n="swiper-unique-id-"+i;s.addClass("swiper-"+n+" initialized").attr("id",n),s.find(".swiper-pagination").addClass("pagination-"+n);var o=s.data("effect")?s.data("effect"):"slide",r=!s.data("crossfade")||s.data("crossfade"),l=0!=s.data("loop")||s.data("loop"),c=s.data("show-items")?s.data("show-items"):1,p=s.data("scroll-items")?s.data("scroll-items"):1,d=s.data("direction")?s.data("direction"):"horizontal",m=!!s.data("mouse-scroll")&&s.data("mouse-scroll"),u=s.data("autoplay")?parseInt(s.data("autoplay"),10):0,f=!!s.hasClass("auto-height"),g=c>1?20:0;c>1&&(a={480:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:2}}),t["swiper-"+n]=new Swiper(".swiper-"+n,{pagination:".pagination-"+n,paginationClickable:!0,direction:d,mousewheelControl:m,mousewheelReleaseOnEdges:m,slidesPerView:c,slidesPerGroup:p,spaceBetween:g,keyboardControl:!0,setWrapperSize:!0,preloadImages:!0,updateOnImagesReady:!0,autoplay:u,autoHeight:f,loop:l,breakpoints:a,effect:o,fade:{crossFade:r},parallax:!0,onSlideChangeStart:function(e){var i=s.siblings(".slider-slides");if(i.length){i.find(".slide-active").removeClass("slide-active");var a=e.slides.eq(e.activeIndex).attr("data-swiper-slide-index");i.find(".slides-item").eq(a).addClass("slide-active")}}}),i++}),e(".btn-prev").on("click",function(){var i=e(this).closest(".slider-slides").siblings(".swiper-container").attr("id");t["swiper-"+i].slidePrev()}),e(".btn-next").on("click",function(){var i=e(this).closest(".slider-slides").siblings(".swiper-container").attr("id");t["swiper-"+i].slideNext()}),e(".btn-prev-without").on("click",function(){var i=e(this).closest(".swiper-container").attr("id");t["swiper-"+i].slidePrev()}),e(".btn-next-without").on("click",function(){var i=e(this).closest(".swiper-container").attr("id");t["swiper-"+i].slideNext()}),e(".slider-slides .slides-item").on("click",function(){if(e(this).hasClass("slide-active"))return!1;var i=e(this).parent().find(".slides-item").index(this),a=e(this).closest(".slider-slides").siblings(".swiper-container").attr("id");return t["swiper-"+a].slideTo(i+1),e(this).parent().find(".slide-active").removeClass("slide-active"),e(this).addClass("slide-active"),!1})},CRUMINA.progresBars=function(){n.appear({force_process:!0}),n.on("appear",function(){var i=e(this);i.data("inited")||(i.find(".skills-item-meter-active").fadeTo(300,1).addClass("skills-animate"),i.data("inited",!0))})},CRUMINA.IsotopeSort=function(){e(".sorting-container").each(function(){var i=e(this),a=i.data("layout").length?i.data("layout"):"masonry";i.isotope({itemSelector:".sorting-item",layoutMode:a,percentPosition:!0}),i.imagesLoaded().progress(function(){i.isotope("layout")}),i.siblings(".sorting-menu").find("li").on("click",function(){if(e(this).hasClass("active"))return!1;e(this).parent().find(".active").removeClass("active"),e(this).addClass("active");var a=e(this).data("filter");return void 0!==a?(i.isotope({filter:a}),!1):void 0})})},e('a[data-toggle="tab"]').on("shown.bs.tab",function(i){"#events"===e(i.target).attr("href")&&e(".fc-state-active").click()}),e(".js-sidebar-open").on("click",function(){return e(this).toggleClass("active"),e(this).closest(o).toggleClass("open"),!1}),i.keydown(function(e){27==e.which&&o.is(":visible")&&o.removeClass("open")}),a.on("click",function(i){!e(i.target).closest(o).length&&o.is(":visible")&&o.removeClass("open")});var r=e(".window-popup");e(".js-open-popup").on("click",function(i){var a=e(this).data("popup-target"),t=r.filter(a),n=e(this).offset();return t.addClass("open"),t.css("top",n.top-t.innerHeight()/2),s.addClass("overlay-enable"),!1}),i.keydown(function(i){27==i.which&&(r.removeClass("open"),s.removeClass("overlay-enable"),e(".profile-menu").removeClass("expanded-menu"),e(".popup-chat-responsive").removeClass("open-chat"),e(".profile-settings-responsive").removeClass("open"),e(".header-menu").removeClass("open"))}),a.on("click",function(i){e(i.target).closest(r).length||(r.removeClass("open"),s.removeClass("overlay-enable"),e(".profile-menu").removeClass("expanded-menu"),e(".header-menu").removeClass("open"))}),e("[data-toggle=tab]").on("click",function(){if(e(this).hasClass("active")&&e(this).closest("ul").hasClass("mobile-app-tabs"))return e(e(this).attr("href")).toggleClass("active"),e(this).removeClass("active"),!1}),e(".js-close-popup").on("click",function(){return e(this).closest(r).removeClass("open"),s.removeClass("overlay-enable"),!1}),e(".profile-settings-open").on("click",function(){return e(".profile-settings-responsive").toggleClass("open"),!1}),e(".js-expanded-menu").on("click",function(){return e(".profile-menu").toggleClass("expanded-menu"),!1}),e(".js-chat-open").on("click",function(){return e(".popup-chat-responsive").toggleClass("open-chat"),!1}),e(".js-chat-close").on("click",function(){return e(".popup-chat-responsive").removeClass("open-chat"),!1}),e(".js-open-responsive-menu").on("click",function(){return e(".header-menu").toggleClass("open"),!1}),e(".js-close-responsive-menu").on("click",function(){return e(".header-menu").removeClass("open"),!1}),a.ready(function(){CRUMINA.Bootstrap(),CRUMINA.Materialize(),CRUMINA.initSwiper(),CRUMINA.Protection(),CRUMINA.progresBars(),CRUMINA.IsotopeSort(),void 0!==e.fn.selectize&&CRUMINA.TopSearch(),void 0!==e.fn.matchHeight&&CRUMINA.equalHeight(),void 0!==e.fn.magnificPopup&&CRUMINA.mediaPopups(),void 0!==e.fn.gifplayer&&e(".gif-play-image").gifplayer(),void 0!==e.fn.mediaelementplayer&&e("#mediaplayer").mediaelementplayer({features:["prevtrack","playpause","nexttrack","loop","shuffle","current","progress","duration","volume"]}),e(".mCustomScrollbar").perfectScrollbar({wheelPropagation:!1})})}(jQuery);