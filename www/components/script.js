window.onload = function() {
  let info = document.querySelector("#info");
  let text = document.querySelector("#texto");
  let img = document.querySelector("#img");
    document.querySelector("#btnQr").addEventListener("click", function() {
           cordova.plugins.barcodeScanner.scan(
            function (result) {
                if(result.text = '280720550') { 
                    info.innerHTML = '<h3>Nome do Produto: iPad Mini Wi-Fi 64Gb -Cinza Espacial</h3><br>';
                    img.src = 'lib/Imagem1.jpg';
                    text.innerHTML = 'Valor: R$ 3.499,00<br>Descrição:Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado<br>Sistema operacional iOS<br>Tamanho da tela 7.9"<br>Tecnologia Wi-Fi<br>Resolução da câmera -Câmera traseira: 8MP;<br>-Câmera frontal: 7MP<br>GPS Sim<br>Grava vídeos Sim<br>Câmera traseira Sim<br>Câmera frontal Sim<br>Memória Flash 64 GB<br>Funciona como celular: Não<br>';
                    setTimeout(function() {
                            location.reload();
                        }, 60000);
                } 
                if(result.text = '989895555') {
                      img.src = "lib/Imagem2.jpg";
                      info.innerHTML = '<br><h3>Nome do Produto: Samsung Galaxy J8 Dual Chip 4g 64gb</h3>';
                      text.innerHTML= '<br>Tela 6<br>Valor:R$ 1.888,00<br>Velocidade do Processador: 1.8GHz<br>Tipo de Processador: OctaCoreTamanho (Tela Principal): 153.6mm (6.0")<br>Resolução (Tela Principal):1480 x 720 (HD+)<br>CâmeraResolução<br> -Câmera Traseira: 16.0 MP + 5.0 MP<br>Memória RAM(GB): 4 GB<br>Memória Total Interna (GB) -64 GB*<br>Memória Disponível (GB)  -50.6 GB<br>';   
                      setTimeout(function() {
                            location.reload();
                        }, 60000);
                }   if(result.text = '85236987') {  
                          info.innerHTML = '<h3>Produto:Motorola One XT1941 Branco 64GB</h3><br>';
                          img.src = 'lib/Imagem3.jpg';
                          text.innerHTML='Valor:<br> Sistema Operacional Android 8.1 Oreo<br>	Processador Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHz<br>RAM 4GB<br>Tecnologia GSM, 3G e 4G<br>Memória interna 64 GB<br>Total sendo uma parte usada para o sistema operacional e aplicativos pré-instalados<br>Cor Branco<br><b>Características Gerais</b>-Tela Max Vision e design ao máximo<br>-Câmera dupla e armazenamento ilimitado<br>-Android One: primeiro do Brasil, atualizado e seguro<br>-Carregamento ultrarrápido TurboPower<br>-Últimas inovações do Google incorporadas<br>-Leitor Biométrico (Impressão Digital)<br>';
                          setTimeout(function() {
                            location.reload();
                        }, 60000);
                }  if(result.text = '85369877444'){
                        info.innerHTML = '<h3>Produto:Asus Zenfone Max Pro M1<br>Valor: R$ 1.199,00</h3><br>';
                        img.src = 'lib/Imagem4.jpg';
                        text.innerHTML = 'Processador: Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache <br>Sistema Operacional: Android 8.1 Oreo <br>Memória Ram: 4 Gb <br>Memória Interna: 64 Gb <br>Memória Expansiva: 2TB Sd <br>Tela: 6,0" Led Backlight Ips panel (1080x2160)<br>Tipo de Chip: Nano <br>-Dual Chip: Sim <br>Conectividade: 3G; 4G; <br>Wi-fiCâmera Frontal: 8MP <br>Câmera Traseira: 16+5MP';
                        setTimeout(function() {
                            location.reload();
                        }, 60000);
                }
                if(result.cancelled) {
                   alert("Seu scann foi cancelado");
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