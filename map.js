let mainCoords = {};

function success(pos) {
  var crd = pos.coords;
  mainCoords.lat = crd.latitude;
  mainCoords.lng = crd.longitude;
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error);

const userCoords = mainCoords;

            fetch("./datanot.json")
                .then(function(resp){
                    return resp.json();
                })
                .then(function(data){
                    
                    window.onload = function () {
                        initMap();
                    };

                    var map;
                    var InforObj = [];

                    var markersOnMap = data.Notar
                   
                   function addMarkerInfo() {
                    for (var i = 0; i < markersOnMap.length; i++) {
                        var contentString = `<div id="content"><h3>${data.Notar[i].NAME_OBJ}</h3>
                                                <p>${data.Notar[i].FIO}</p>
                                                <p>${data.Notar[i].CONTACTS}</p>
                                             </div>`
    
                        const marker = new google.maps.Marker({
                            position: {lat: (+data.Notar[i].Latitude), lng: (+data.Notar[i].Longitude) },
                            map: map
                        });
    
                        const infowindow = new google.maps.InfoWindow({
                            content: contentString,
                            maxWidth: 200
                        });
    
                        marker.addListener('click', function () {
                            closeOtherInfo();
                            infowindow.open(marker.get('map'), marker);
                            InforObj[0] = infowindow;
                        });
                    }
                }

                
                function closeOtherInfo() {
                    if (InforObj.length > 0) {
                        InforObj[0].set("marker", null);
                        InforObj[0].close();
                        InforObj.length = 0;
                    }
                }
    
                function initMap() {
                    map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 12,
                        center: mainCoords
                    });
                    addMarkerInfo();
                }

                })
                
           

