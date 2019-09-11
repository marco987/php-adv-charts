$(document).ready(function(){

// // Step 1 - Grafico Vendite
//
// function printGraficoVendite(vendite) {
//   var graficoVendite = $("#graficoVendite");
//
//   getMesi();
//   var mesi = getMesi();
//
//   var grafico1 = new Chart(graficoVendite, {
//     type: 'line',
//     data: {
//       labels: mesi,
//       datasets: [{
//         label: 'Vendite',
//         data: vendite,
//         borderColor: "red",
//         backgroundColor: [
//           'green'
//         ]
//       }]
//     }
//   });
// }
//
// function getVendite() {
//   $.ajax({
//     url: "api1.php",
//     method: "GET",
//     success: function(vendite){
//       printGraficoVendite(vendite)
//     },
//     error: function(){
//       alert("Errore");
//     }
//   });
// }
//
// function getMesi() {
//   return moment.months();
// }
//
// // ----------
// // Step 2 - Grafico Fatturato
//
// function getFatturato() {
//   $.ajax({
//     url: "api2.php",
//     method: "GET",
//     success: function(data, type, nomi, fatturato){
//       var type = data.fatturato_by_agent.type;
//       var nomi_fatturato = data.fatturato_by_agent.data;
//       var nomi = Object.keys(nomi_fatturato);
//       var fatturato = Object.values(nomi_fatturato);
//       printGraficoFatturato(data, type, nomi, fatturato);
//     },
//     error: function(){
//       alert("Errore");
//     }
//   });
// }
//
// function printGraficoFatturato(data, type, nomi, fatturato) {
//   var fatturatoAgenti = $("#fatturatoAgenti");
//
//   var grafico2 = new Chart(fatturatoAgenti, {
//     type: type,
//     data: {
//       labels: nomi,
//       datasets: [{
//         label: 'Fatturato per agente',
//         data: fatturato,
//         borderColor: "red",
//         backgroundColor: [
//           'yellow',
//           'yellow',
//           'yellow',
//           'yellow'
//         ]
//       }]
//     }
//   });
// }

// ----------
// Step 3 - Grafico Efficienza Team
//          e controllo livello di accesso
// URL: http://localhost/index.php?level=livello
//      livello: clevel , employee , guest

// LIVELLO DI ACCESSO
// Leggo l'url
var url = $(location).attr('href');
// Divido la stringa url e genero così un array
var urlSplit = url.split("http://localhost/index.php?level=");
// Leggo il secondo valore dell'array, che è la chiave d'accesso
var access = urlSplit[1];

function getEfficienza() {

  $.ajax({
    url: "api3.php",
    method: "GET",
    data: {level:access},
    success: function(data){
      // Con accesso "clevel" data rappresenta tre array
      console.log(data);
    },
    error: function(){
      alert("Errore");
    }
  });
}







// Richiamo funzioni
// getVendite();
// getFatturato();
getEfficienza();


});
