$(document).ready(function(){var a=$("#load-more-button"),e=1,o=a.data("load-link"),t=a.data("container"),n=$("#"+t),s=!1;e>2&&a.addClass("hidden-xs-up"),a.on("click",function(){return e<=2&&!$(this).hasClass("loading")&&!$(this).hasClass("last-page")&&$.ajax({type:"GET",url:o,dataType:"html",beforeSend:function(){a.addClass("loading")},complete:function(o){a.removeClass("loading"),200==o.status&&""!=o.responseText&&(e++,e>2&&a.addClass("hidden-xs-up"),$(o.responseText).length>0&&(s="function"==typeof n.isotope,$(o.responseText).each(function(){var a=$(this);s?(n.append(a).isotope("appended",a).isotope("layout"),n.imagesLoaded(function(){n.isotope("layout")})):n.append(a)})))}}),!1})});