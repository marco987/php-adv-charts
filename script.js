$(document).ready(function(){

function printGraficoLinea(vendite) {
  var graficoVendite = $("#graficoVendite");

  var grafico1 = new Chart(graficoVendite, {
    type: 'line',
    data: {
      labels: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
      datasets: [{
        label: 'Vendite',
        data: vendite,
        borderColor: "red",
        backgroundColor: [
          'green'
        ]
      }]
    }
  });
}


function getVendite() {
  $.ajax({
    url: "database1.php",
    method: "GET",
    success: function(vendite){
      printGraficoLinea(vendite)
    },
    error: function(){
      alert("Errore");
    }
  });
}

getVendite();




});
