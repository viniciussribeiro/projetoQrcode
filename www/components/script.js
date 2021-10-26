window.onload = function() {
  let info = document.querySelector("#info");
  let text = document.querySelector("#text");
  let img = document.querySelector("#img");
    document.querySelector("#btnQr").addEventListener("click", function() {
           cordova.plugins.barcodeScanner.scan(
      function (result) {
          if(result.text = '280720550') {
              setTimeout(function(){  
              info.innerHTML = '<h1>Nome do Produto: iPad Mini Wi-Fi 64Gb -Cinza Espacial</h1><br>';
              img.src = 'lib/Imagem1.jpg';
              text.innerHTML = 'Valor: R$ 3.499,00<br>Descrição:Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado<br>Sistema operacional iOS<br>Tamanho da tela 7.9"<br>Tecnologia Wi-Fi<br>Resolução da câmera -Câmera traseira: 8MP;<br>-Câmera frontal: 7MP<br>GPS SimGrava vídeos Sim<br>Câmera traseira Sim<br>Câmera frontal Sim<br>Memória Flash 64 GB<br>Funciona como celular: Não<br>';
              }, 3000);
          } else if(result.text = '989895555') {
              
          } else if(result.text = '85236987') {

          } else if(result.text = '85369877444'){

          }
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );

    });
}