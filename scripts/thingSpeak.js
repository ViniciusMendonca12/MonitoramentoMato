
var tituloModalMonitoramento = $("#tituloModalMonitoramento")
var paragrafoModalMonitoramento = $("#paragrafoModalMonitoramento")

function buscarDadosThingSpeak(channelID, apiKey, callback) {
    var url = "https://api.thingspeak.com/channels/" + channelID + "/feeds.json?api_key=" + apiKey;
  
    $.getJSON(url, function(data) {
      if (data.hasOwnProperty('error')) {
        console.error("Erro:", data.error);
      } else {
        callback(data); 
      }
    });
  }
  
  
  
  $(document).ready(function() {
    var canalID = "2533323"; // 
    var apiKey = "QGNJSGKCKAQOS5NM";
  
      var temperatura 
      var umidadeAr 
      var umidadeSolo
    buscarDadosThingSpeak(canalID, apiKey, function(dados) {
      var tamanho = dados.feeds.length
      console.log(dados.feeds[99].field1);
      console.log(dados.feeds[99].field2); 
      console.log(dados.feeds[99].field3);  
   
      var temperatura = dados.feeds[99].field1
      var umidadeAr = dados.feeds[99].field2
      var umidadeSolo = dados.feeds[99].field3
  
      $("#monitorarSojaClick").click(function(){
      paragrafoModalConfirmacao.html("")
      tituloModalMonitoramento.text("Monitoramento da Soja")
      paragrafoModalMonitoramento.text("")
      $("#modalConfirmacao").modal("show");
      monitoraPragasSoja(temperatura, umidadeAr, umidadeSolo)
      })
  
      $("#monitorarMilhoClick").click(function(){
          paragrafoModalConfirmacao.html("")
          tituloModalMonitoramento.text("Monitoramento do Milho")
          paragrafoModalMonitoramento.text()
          $("#modalConfirmacao").modal("show");
          monitoraPragasMilho(temperatura, umidadeAr, umidadeSolo)
      })
  
      $("#monitorarAlgodaoClick").click(function(){
          paragrafoModalConfirmacao.html("")
          tituloModalMonitoramento.text("Monitoramento do Algodão")
          paragrafoModalMonitoramento.text()
          $("#modalConfirmacao").modal("show");
          monitoraPragasAlgodao(temperatura, umidadeAr, umidadeSolo)
      })
      
    });
  });
  