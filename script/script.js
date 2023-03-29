var map = L.map("map").setView([43.610073, 3.8391499], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
}).addTo(map);

L.marker([43.5841479, 3.8580873])
  .addTo(map)
  .bindPopup(
    "<h5>Ombrières solaire - Sabines</h5> <p> Parking équipé d'ombrière solaire qui permettent d'abriter votre véhicule. Egalement équipé de 4 bornes de chargement pour véhicules électriques (Càd 8 prises). </p> <img style=width:300px; src=./medias/map/ombriere_1.png>"
  );

L.marker([43.5889039, 3.8875487])
  .addTo(map)
  .bindPopup(
    "<h5>Ombrières solaire - Garcia Lorca</h5> <p> Parking équipé d'ombrière solaire qui permettent d'abriter votre véhicule. Egalement équipé de 4 bornes de chargement pour véhicules électriques (Càd 8 prises). </p> <img style=width:300px; src=./medias/map/ombriere_2.png>"
  );

L.marker([43.6200418, 3.8199141])
  .addTo(map)
  .bindPopup(
    "<h5>Ombrières solaire - Mosson</h5> <p> Parking équipé d'ombrière solaire qui permettent d'abriter votre véhicule. Egalement équipé de 4 bornes de chargement pour véhicules électriques (Càd 8 prises). </p> <img style=width:300px; src=./medias/map/ombriere_3.png>"
  );

L.marker([43.6270938, 3.8436892])
  .addTo(map)
  .bindPopup(
    "<h5>Ombrières solaire - Occitanie</h5> <p> Parking équipé d'ombrière solaire qui permettent d'abriter votre véhicule. Egalement équipé de 4 bornes de chargement pour véhicules électriques (Càd 8 prises). </p> <img style=width:300px; src=./medias/map/ombriere_4.png>"
  );
