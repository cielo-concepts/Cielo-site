jQuery(document).ready(function(){var e=new google.maps.LatLng(42.8833333,20.8666667),o={zoom:14,center:new google.maps.LatLng(42.8833333,20.8666667),mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scrollwheel:!1,draggable:!0,navigationControl:!1},n=new google.maps.Map(document.getElementById("map-holder"),o);google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();google.maps.event.trigger(n,"resize"),n.setCenter(e)});var a='<div class="map-tooltip"><h6>Modesty</h6><p>Some description here about our location, and where our offices located.</p></div>',g=new google.maps.InfoWindow({content:a}),t=new google.maps.MarkerImage("assets/img/map.png",new google.maps.Size(72,72),new google.maps.Point(0,0),new google.maps.Point(20,55)),p=new google.maps.LatLng(42.8833333,20.8666667),s=new google.maps.Marker({position:p,map:n,icon:t,zIndex:3});google.maps.event.addListener(s,"click",function(){g.open(n,s)}),$(".map-button").click(function(){$("#map-holder").slideToggle(300,function(){google.maps.event.trigger(n,"resize"),n.setCenter(e)}),$(this).toggleClass("hide-map show-map")})});