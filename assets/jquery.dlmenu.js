!function(n,i,s){"use strict";var e=i.Modernizr,t=n("body");n.DLMenu=function(i,s){this.$el=n(s),this._init(i)},n.DLMenu.defaults={animationClasses:{classin:"dl-animate-in-1",classout:"dl-animate-out-1"},onLevelClick:function(n,i){return!1},onLinkClick:function(n,i){return!1}},n.DLMenu.prototype={_init:function(i){this.options=n.extend(!0,{},n.DLMenu.defaults,i),this._config();var s={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.animEndEventName=s[e.prefixed("animation")]+".dlmenu",this.transEndEventName=t[e.prefixed("transition")]+".dlmenu",this.supportAnimations=e.cssanimations,this.supportTransitions=e.csstransitions,this._initEvents()},_config:function(){this.open=!1,this.$trigger=this.$el.children(".dl-trigger"),this.$menu=this.$el.children("ul.dl-menu"),this.$menuitems=this.$menu.find("li:not(.dl-back)"),this.$el.find("ul.dl-submenu").prepend('<div class="dl-back"><img src="/wps/wcm/connect/banco-de-bogota/cffa0d0e-9259-4cd9-91da-3a25c14a709c/icon-back.png?MOD=AJPERES" /></div>'),this.$back=this.$menu.find("div.dl-back")},_initEvents:function(){var s=this;this.$trigger.on("click.dlmenu",function(){return s.open?s._closeMenu():s._openMenu(),!1}),this.$menuitems.on("click.dlmenu",function(e){e.stopPropagation();var t=n(this),o=t.children("ul.dl-submenu");if(o.length>0){if(n(i).width()<=1025){n(".titles").addClass("NO");var a=o.clone().css("opacity",0).insertAfter(s.$menu),l=function(){s.$menu.off(s.animEndEventName).removeClass(s.options.animationClasses.classout).addClass("dl-subview"),t.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"),a.remove(),n("#menu-transaccion").addClass("menu-transaccion")};return setTimeout(function(){a.addClass(s.options.animationClasses.classin),s.$menu.addClass(s.options.animationClasses.classout),s.supportAnimations?s.$menu.on(s.animEndEventName,l):l.call(),s.options.onLevelClick(t,t.children("a:first").text())}),!1}s.options.onLinkClick(t,e)}}),this.$back.on("click.dlmenu",function(e){if(n(i).width()<=1025){n(".titles").removeClass("NO");var t=n(this),o=t.parents("ul.dl-submenu:first"),a=o.parent(),l=o.clone().insertAfter(s.$menu),u=function(){s.$menu.off(s.animEndEventName).removeClass(s.options.animationClasses.classin),l.remove()};return setTimeout(function(){l.addClass(s.options.animationClasses.classout),s.$menu.addClass(s.options.animationClasses.classin),s.supportAnimations?s.$menu.on(s.animEndEventName,u):u.call(),a.removeClass("dl-subviewopen");var i=t.parents(".dl-subview:first");i.is("li")&&i.addClass("dl-subviewopen"),i.removeClass("dl-subview"),n("#menu-transaccion").removeClass("menu-transaccion")}),!1}})},closeMenu:function(){this.open&&this._closeMenu()},_closeMenu:function(){var n=this,i=function(){n.$menu.off(n.transEndEventName),n._resetMenu()};this.$menu.removeClass("dl-menuopen"),this.$menu.addClass("dl-menu-toggle"),this.$trigger.removeClass("dl-active"),this.$trigger.removeClass("dl-X"),this.supportTransitions?this.$menu.on(this.transEndEventName,i):i.call(),this.open=!1},openMenu:function(){this.open||this._openMenu()},_openMenu:function(){var i=this;t.off("click").on("click.dlmenu",function(){i._closeMenu()}),this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName,function(){n(this).removeClass("dl-menu-toggle")}),this.$trigger.addClass("dl-active"),this.$trigger.addClass("dl-X"),this.open=!0},_resetMenu:function(){this.$menu.removeClass("dl-subview"),this.$menuitems.removeClass("dl-subview dl-subviewopen")}};var o=function(n){i.console&&i.console.error(n)};n.fn.dlmenu=function(i){if("string"==typeof i){var s=Array.prototype.slice.call(arguments,1);this.each(function(){var e=n.data(this,"dlmenu");return e?n.isFunction(e[i])&&"_"!==i.charAt(0)?void e[i].apply(e,s):void o("no such method '"+i+"' for dlmenu instance"):void o("cannot call methods on dlmenu prior to initialization; attempted to call method '"+i+"'")})}else this.each(function(){var s=n.data(this,"dlmenu");s?s._init():s=n.data(this,"dlmenu",new n.DLMenu(i,this))});return this}}(jQuery,window);
$(document).ready(function($) {
	
  ////// script para desplegar con tab los subproductos del menu///
  $('#dl-menu .dl-menu li').keyup(function(e) {
    if(e.keyCode == 9) { 
       $(this).children('a').children('.arrow-down').css({ 'background': 'url(/wps/wcm/connect/banco-de-bogota/31f72ab8-35d4-46a2-943f-672368894a2a/arrow-up-gray.png?MOD=AJPERES) center no-repeat', 'display': 'block'})
       $(this).children('.dl-submenu').css({'display' : 'block', 'position': 'absolute'})
       $(this).children('a').css({'border' : '1px solid #b2b2b2','text-shadow' : 'none', 'background' : '#fff','color' : '#8E97A4','border-bottom' : 'none', 'border-radius': '5px 5px 0 0' });
       $('#dl-menu ul li a').css({'text-shadow' : 'none'})
       $(this).siblings('').children('a').removeAttr("style");
       $(this).siblings('').children('.dl-submenu').removeAttr("style");
       $(this).siblings('').children('a').children('.arrow-down').removeAttr("style");

     }

  })

  ///elemento anterior remueve los estilos //////

  $('.grancont-login-personas').keyup(function(e) {
    if(e.keyCode == 9) { 
       $('#dl-menu .dl-menu li').children('a').children('.arrow-down').removeAttr("style");
       $('#dl-menu .dl-menu li').children('.dl-submenu').removeAttr("style");
       $('#dl-menu .dl-menu li').children('a').removeAttr("style");
       $('#dl-menu ul li a').removeAttr("style");
    }

  })

  ///elemento anterior remueve los estilos //////

  $('.logo-home').keyup(function(e) {
    if(e.keyCode == 9) { 
       $('#dl-menu .dl-menu li').children('a').children('.arrow-down').removeAttr("style");
       $('#dl-menu .dl-menu li').children('.dl-submenu').removeAttr("style");
       $('#dl-menu .dl-menu li').children('a').removeAttr("style");
       $('#dl-menu ul li a').removeAttr("style");
    }
  })

  ///elemento anterior remueve los estilos  en páginas internas //////

   $('.logo-bogota-interno').keyup(function(e) {
    if(e.keyCode == 9) { 
       $('#dl-menu .dl-menu li').children('a').children('.arrow-down').removeAttr("style");
       $('#dl-menu .dl-menu li').children('.dl-submenu').removeAttr("style");
       $('#dl-menu .dl-menu li').children('a').removeAttr("style");
       $('#dl-menu ul li a').removeAttr("style");
    }
  })
  
   ///elemento siguiente remueve los estilos  en páginas internas //////

   $('.sticky-menu').keyup(function(e) {
    if(e.keyCode == 9) { 
       $('#dl-menu .dl-menu li').children('a').children('.arrow-down').removeAttr("style");
       $('#dl-menu .dl-menu li').children('.dl-submenu').removeAttr("style");
       $('#dl-menu .dl-menu li').children('a').removeAttr("style");
       $('#dl-menu ul li a').removeAttr("style");
    }
  })
});
