$(function() {

	$('.s-slider').slick({
		fade: true,
		speed: 1000,
		infinity: true,
		nextArrow: '<img src="img/slider/next.png" alt="Next">',
		prevArrow: '<img src="img/slider/prev.png" alt="Prev">',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: true
                }
            }
        ]
	});

	$('.partners_logo').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		speed: 3000,
		autoplay: true,
		autoplaySpeed: 0,
		infinity: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
	});

	$('.s-mma').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500
	});

	$('.s-price-btns').on('click', 'a', function () {
		$('.s-price-btns a').removeClass('active_state');
		$(this).toggleClass('active_state');
		return false;
	});

    $('.s-price-btns_mobile').on('click', 'a', function (e) {
        e.preventDefault();
        $('.s-price-btns_mobile a').removeClass('adaptive_activ_menu');
        $(this).toggleClass('adaptive_activ_menu');
    })

    $('.gyms_list').on('click', 'a', function () {
        $('.gyms_list a').removeClass('map_active');
        $(this).toggleClass('map_active');
        return false;
    });

	$('.s-advantage .block .block-tab:not(":first-of-type")').hide();

    $('.s-price-btns_mobile a').each(function (index) {
        $(this).attr('data-tab', 'tab' + index);
    });

	$('.s-price-btns a').each(function (index) {
		$(this).attr('data-tab', 'tab' + index);
	});

	$('.block .block-tab').each(function (index) {
		$(this).attr('data-tab', 'tab' + index);
	});

	$('.s-price-btns').on('click', 'a', function (e) {
		e.preventDefault();
		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.wrapper');
		
		getWrapper.find('.block .block-tab').hide('slow');
		getWrapper.find('.block .block-tab[data-tab=' + dataTab + ']').show('slow');
	});

    $('.s-price-btns_mobile').on('click', 'a', function (e) {
        e.preventDefault();
        var dataTab = $(this).data('tab');
        var getWrapper = $(this).closest('.wrapper');
        
        getWrapper.find('.block .block-tab').hide('slow');
        getWrapper.find('.block .block-tab[data-tab=' + dataTab + ']').show('slow');
    });

	$('.show_econom, .show_standart, .show_premium, .ul_dropdown_relax, .ul_dropdown_fit, .ul_dropdown_fight, .ul_dropdown_gyms').hide();

	$('.show_fit').on('click', function () {
		$('.ul_dropdown_fit').stop().slideToggle('slow');
	});

	$('.show_relax').on('click', function () {
		$('.ul_dropdown_relax').stop().slideToggle('slow');
	});
	
	$('.show_fight').on('click', function () {
		$('.ul_dropdown_fight').stop().slideToggle('slow');
	});

	$('.show_gyms').on('click', function () {
		$('.ul_dropdown_gyms').stop().slideToggle('slow');
	});

	$('.show_econom_btn').on('click', function () {
		$('.show_econom').stop().slideToggle('slow');
	});

	$('.show_standart_btn').on('click', function () {
		$('.show_standart').stop().slideToggle('slow');
	});

	$('.show_premium_btn').on('click', function () {
		$('.show_premium').stop().slideToggle('slow');
	});

	$('.video_slider').slick({
		infinity: true,
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
	});

	 $('.slider_for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider_nav'
	});

	$('.slider_nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider_for',
	  dots: false,
	  arrows: false,
	  centerMode: true,
	  focusOnSelect: true,
      responsive: [
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
	});

	$('.burger, .overlay_pizdec').click(function(){
		$('.burger').toggleClass('clicked');
		$('.overlay_pizdec').toggleClass('show');
		$('.burger_nav').toggleClass('show');
		$('body').toggleClass('overflow');
	});

});

 var markerEcomom = [
                        {
                          lat: 53.927291,
                          lng: 27.624648,
                          name: "Название 1",
                          address:"Адрес 1 Ecomom",
                        },
                        {
                          lat: 53.930292,
                          lng: 27.598802,
                          name: "Название 2",
                          address:"Адрес 2 Ecomom"
                        },
                        {
                          lat: 53.931966,
                          lng: 27.592890,
                          name: "Название 3",
                          address:"Адрес 3 Ecomom"
                        }
                      ];
       var markerStandart = [
                        {
                          lat: 53.927291,     
                          lng: 27.624648,    
                          name: "Название 1", 
                          address:"Адрес 1 Standart"   
                        },
                        {
                          lat: 53.930292,
                          lng: 27.598802,
                          name: "Название 2",
                          address:"Адрес 2 Standart"
                        },
                        {
                          lat: 53.931966,
                          lng: 27.592890,
                          name: "Название 3",
                          address:"Адрес 3 Standart"
                        }
                      ];
      var markerPremium = [
                        {
                          lat: 53.917291,     
                          lng: 27.614648,    
                          name: "Название 1 ", 
                          address:"Адрес 1 Premium"   
                        },
                        {
                          lat: 53.910292,
                          lng: 27.518802,
                          name: "Название 2",
                          address:"Адрес 2 Premium"
                        },
                        {
                          lat: 53.911966,
                          lng: 27.512890,
                          name: "Название 3",
                          address:"Адрес 3 Premium"
                        }
                      ];                



  /*var sm = document.getElementById("selectMap");
  sm.addEventListener("change",changeMarker,false);

  function changeMarker(el) {
    console.dir(el.target.value);
    switch  (el.target.value){
        case "ecomon": initialize(53.927291,27.624648,markerEcomom);
        break;
        case "standart": initialize(53.930292,27.598802, markerStandart);
        break;
        case "premium": initialize(53.931966,27.592890, markerPremium);
        break;
        default: initialize(53.927291,27.624648, markerEcomom);
    }
  }
*/
  function initialize(lat, lng, markersData) {    
    var myLatlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
      zoom: 14,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": 20
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#dbdbdb"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212325"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#6b2f2f"
                    },
                    {
                        "lightness": 21
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#858585"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
          ]
    }

    var map = new google.maps.Map(document.getElementById("map"), myOptions); 
     infoWindow = new google.maps.InfoWindow();

     var bounds = new google.maps.LatLngBounds(); // центрировать исходя из кол-во маркеров

    for (var i = 0; i < markersData.length; i++){
        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
        addMarker(latLng, name, address);
        bounds.extend(latLng); // вызов центрирования
    }
    function addMarker(latLng,name,address) {
        var marker = new google.maps.Marker({
          position:latLng,
          map: map,
          title: name,
          icon: {
                  url: "ico/marker-yellow.png",
                  scaledSize: new google.maps.Size(32, 48)
                }  // marker color for example yellow/red/green
          });

        google.maps.event.addListener(marker, "click", function() {
          var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + address + '</p>' +
                                '</div>';

        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
    });  

       map.fitBounds(bounds);
    }
     
}
initialize(53.930292,27.598802,markerEcomom);
