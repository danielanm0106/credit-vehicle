function scrollToElement(o,n,e){n="undefined"!=typeof n?n:500,e="undefined"!=typeof e?e:0,element=$(o),offset=element.offset(),offsetTop=offset.top+e,$("html, body").animate({scrollTop:offsetTop},n)}function mostrarnotauno(){"none"==$("#nota-nube-uno").css("display")?$("#nota-nube-uno").fadeIn(500):$("#nota-nube-uno").fadeOut(500)}function mostrarnotados(){"none"==$("#nota-nube-dos").css("display")?$("#nota-nube-dos").fadeIn(500):$("#nota-nube-dos").fadeOut(500)}function mostrarnotatres(){"none"==$("#nota-nube-tres").css("display")?$("#nota-nube-tres").fadeIn(500):$("#nota-nube-tres").fadeOut(500)}$(document).ready(function(){$("#scroll-to-solicita-cat").click(function(){scrollToElement("#solicita-cat",null,-300)}),$("#scroll-to-accede-cat").click(function(){scrollToElement("#accede-cat",null,-300)}),$("#scroll-to-accede-tc").click(function(){scrollToElement("#accede-tc",null,-400)}),$("#scroll-to-beneficios-cat").click(function(){scrollToElement("#beneficios-cat",null,-50)}),$("#scroll-to-necesita-ayuda").click(function(){scrollToElement("#necesita-ayuda",null,-300)}),$("#scroll-to-educacion-financiera").click(function(){scrollToElement("#educacion-financiera",null,-300)}),$("#scroll-to-info-general").click(function(){scrollToElement("#info-general",null,-300)}),$("#scroll-to-promocion").click(function(){scrollToElement("#promocion",null,-300)}),$("#scroll-to-otras-tarjetas").click(function(){scrollToElement("#otras-tarjetas",null,-400)}),$("#scroll-to-otras-cuentas").click(function(){scrollToElement("#otras-cuentas",null,-300)}),$("#scroll-to-descripcion").click(function(){scrollToElement("#descripcion",null,-300)}),$("#scroll-to-tarifas").click(function(){scrollToElement("#tarifas",null,-300)}),$("#scroll-to-lineas").click(function(){scrollToElement("#lineas",null,-400)}),$("#scroll-to-otras-soluciones").click(function(){scrollToElement("#otras-soluciones",null,-400)}),$("#scroll-to-introduccion").click(function(){scrollToElement("#introduccion",null,-200)}),$("#scroll-to-lineas-atencion").click(function(){scrollToElement("#lineas-atencion",null,-400)}),$("#scroll-to-chat").click(function(){scrollToElement("#chat",null,-400)}),$("#scroll-to-linea-empresa").click(function(){scrollToElement("#linea-empresa",null,-300)}),$("#scroll-to-linea-pyme").click(function(){scrollToElement("#linea-pyme",null,-200)}),$("#scroll-to-sugerencias").click(function(){scrollToElement(".menu-acordeon-form",null,-300)}),$("#scroll-to-felicitaciones").click(function(){scrollToElement(".menu-acordeon-form",null,-300)}),$("#scroll-to-solicitud-informacion").click(function(){scrollToElement(".menu-acordeon-form",null,-300)}),$("#scroll-to-Solicitudes-Habeas-data").click(function(){scrollToElement(".menu-acordeon-form",null,-300)}),$("#scroll-to-Reclamo-monetario").click(function(){scrollToElement(".menu-acordeon-form",null,-300)}),$("#scroll-to-Reclamo-pago-servicios").click(function(){scrollToElement(".menu-acordeon-form",null,-300)}),$("#scroll-to-Queja-Sucursal").click(function(){scrollToElement(".menu-acordeon-form",null,-300)}),$("#scroll-to-Mejores-Puntos").click(function(){scrollToElement(".menu-acordeon-form",null,-300)}),$("#scroll-to-Preavisos").click(function(){scrollToElement(".menu-acordeon-form",null,-300)})});var imgHeader1=!1,imgHeader2=!0,menuingreso;$(document).ready(function(){function o(){$(window).scrollTop()>81?(menuingreso=$(".cont-ingreso-seguro"),menuingreso.prependTo(".sticky-menu"),menuingreso.css({"float":"right","margin-right":"17px","margin-left":"10px","text-align":"center",width:"228px",position:"relative",top:"-25px",left:"-50px"}),$(".sticky-menu").css({position:"fixed",top:"0px","border-top":"3px solid #ffd200","border-bottom":"1px solid #c7c6c3","background-color":"#fff",filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#00000000)9","-webkit-transition":"background 0.5s ease","-moz-transition":"background 0.5s ease","-o-transition":"background 0.5s ease",transition:"background 0.5s ease","text-shadow":"0px 0px 0px rgba(0,0,0,0)"}),$(".sticky-menu-subnav li a").css("color","#a4a4a4"),$(".sticky-menu .sticky-menu-menu li a").css({color:"#002c76","font-size":"13px","font-weight":"bold","letter-spacing":"-0.5px",position:"relative",left:"-50px"}),$(".sticky-menu-subnav li:first-child").css({"margin-left":"50px","-webkit-transition":"margin-left 0.5s ease","-moz-transition":"margin-left 0.5s ease","-o-transition":"margin-left 0.5s ease",transition:"margin-left 0.5s ease"}),$(".sticky-menu .logo-mini-stick").css({opacity:"1",width:"55px","-webkit-transition":"opacity 0.9s","-moz-transition":"opacity 0.9s","-o-transition":"opacity 0.9s",transition:"opacity 0.9s"})):(menuingreso=$(".cont-ingreso-seguro"),menuingreso.css({"float":"right","margin-right":"20px","text-align":"center",width:"228px",position:"relative",top:"0px",left:"-50px"}),$(".sticky-menu").css({position:"absolute",top:"inherit","border-top":"none","border-bottom":"none","background-color":"rgba(0,0,0,0.4)",background:"transparent9",filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#60000000,endColorstr=#60000000)9","text-shadow":"1px 1px 2px rgba(0,0,0,0.3)"}),$(".sticky-menu-subnav li a").css("color","#fff"),$(".sticky-menu .sticky-menu-menu li a").css({color:"#fff","font-size":"13px","font-weight":"normal"}),$(".sticky-menu-subnav li:first-child").css({"margin-left":"0px"}),$(".sticky-menu .logo-mini-stick").css({opacity:"0",width:"0px"}),menuingreso.insertBefore("header"),menuingreso.remove())}menuingreso=$(".cont-ingreso-seguro"),$(window).scroll(o),o()}),function(o){o(document).ready(function(){o(".menu-acordeon-form > ul > li > .accion-cerrar-abrir").click(function(){o(".mensaje-error").hide(),o(".menu-acordeon-form li").removeClass("form-active"),o(this).closest("li").addClass("form-active");var n=o(this).next();return n.is(".form-interno")&&n.is(":visible")&&(o(this).closest("li").removeClass("form-active"),n.slideUp("normal")),n.is(".form-interno")&&!n.is(":visible")&&(o(".menu-acordeon-form ul .form-interno:visible").slideUp("normal"),n.slideDown("normal")),0==o(this).closest("li").find(".form-interno").children().length?!0:!1})})}(jQuery),$(document).ready(function(){$("a.interrogante").mouseover(function(){$(".contenido-nota-nube .marco-ext-notanube").css("display","block")}),$("a.interrogante").mouseout(function(){$(".contenido-nota-nube .marco-ext-notanube").css("display","none")})});