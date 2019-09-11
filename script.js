$(document).ready(function(){

function printGraficoLinea(vendite) {
  var graficoVendite = $("#graficoVendite");

  getMesi();
  var mesi = getMesi();

  var grafico1 = new Chart(graficoVendite, {
    type: 'line',
    data: {
      labels: mesi,
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
    url: "api1.php",
    method: "GET",
    success: function(vendite){
      printGraficoLinea(vendite)
    },
    error: function(){
      alert("Errore");
    }
  });
}

function getMesi() {
  return moment.months();
}

getVendite();



});
