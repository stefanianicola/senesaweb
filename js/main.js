$( document ).ready(function() {

  // clonar items para el carrousel de marcas  
  var showItemsCarousel = function(widthItems, reset){
    $('.carousel .carousel-item-marcas').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      if(reset){
        $(this).children().not(':first-child').remove(); // remover items clonados  
      }
      next.children(':first-child').clone().appendTo($(this));
      var itemsToShow = widthItems >= 768 ? 4 : 1; // de tablet para arriba mostrar 6 marcas
      for (var i=0;i<itemsToShow;i++) { 
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    });    
  };

  // obtener valor del ancho del sitio
  var widthWeb = $( window ).width();
  showItemsCarousel(widthWeb, false);

  // ejecutar evento resize para calcular ancho del sitio
  $( window ).resize(function() {
    widthWeb = $( window ).width();
    showItemsCarousel(widthWeb, true);
  });

  var showHeaderelements = function(box,icon,action){
    $('#search, #login, #filter').fadeOut(); 
    $('#search-icon, #login-icon, #filter-icon').removeClass('active');
      if(action == 'open'){
        $(box).fadeIn();
        $(icon).addClass('active');
      } else {
        $(box).fadeOut(); 
        $(icon).removeClass('active');
      }
  }

  var runClickElements = function(button,action){
    $('#senesa-base').on('click', button, function(){
      switch(action) {
        case 'openSearch':
          // abrir buscador
          showHeaderelements('#search',$(this),'open');
          break;
        case 'closeSearch':
          // cerrar buscador
          showHeaderelements('#search','#search-icon');
          break;
        case 'openLogin' :
          // abrir acceso a clientes
          showHeaderelements('#login',$(this),'open')
          break;
        case 'closeLogin':
          // cerrar acceso a clientes
          showHeaderelements('#login','#login-icon');
          break;

          case 'openFilter' :
          // abrir filtro de marcas
          showHeaderelements('#filter',$(this),'open')
          break;
        case 'closeFilter':
          // cerrar filtro de marcas
          showHeaderelements('#filter','#filter-icon');
          break;

        case 'scrollTop':
          // boton de animacion para scroll top
          $("html, body").animate({ scrollTop: 0 }, 800);
          break;
        default:
          // cerrar buscador
          showHeaderelements('#search','#search-icon');
          // cerrar acceso a clientes
          showHeaderelements('#login','#login-icon');
      }
    });
  }

  // abrir acceso a clientes
  runClickElements('#login-icon','openLogin');
  
  // cerrar acceso a clientes
  runClickElements('#close-login','closeLogin');

  // abrir buscador
  runClickElements('#search-icon','openSearch');

  // cerrar buscador
  runClickElements('#close-search','closeSearch');

  // abrir filtro de marcas
  runClickElements('#filter-icon','openFilter');

  // cerrar filtro de marcas
  runClickElements('#close-filter','closeFilter');


  // boton de animacion para scroll top
  runClickElements('.btn-inicio','scrollTop');

  // convertir elemento del HTML en carrousel    
  $('#recipeCarousel').carousel({
    interval: 10000
  })

    
});