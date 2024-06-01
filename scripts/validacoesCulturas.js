
var paragrafoModalConfirmacao = $("#paragrafoModalConfirmacao")

function monitoraPragasSoja(temperatura, umidadeAr, umidadeSolo){
    var monitoraLagartoDaSoja = false;
    var monitoraMoscaBranca = false;
    var monitoraFerrugemAsiatica = false;
    var monitoraNematoideDasRaizes = false;

    if((temperatura >= 20 && temperatura <= 28) &&
       (umidadeAr >= 10 && umidadeAr <= 30) &&
       (umidadeSolo > 18 && umidadeSolo <= 35 )){
        monitoraLagartoDaSoja = true;
    } 

    if((temperatura >= 25 && temperatura <= 30) &&
       (umidadeAr >= 20 && umidadeAr <= 40) &&
       (umidadeSolo > 0 && umidadeSolo > 10 )){
        monitoraMoscaBranca = true; 
    }  

    if((temperatura >= 15 && temperatura <= 25) &&
       (umidadeAr >= 80 && umidadeAr <= 100) &&
       (umidadeSolo > 18 && umidadeSolo <= 35)){
        monitoraFerrugemAsiatica = true;
    }

    if((temperatura >= 20 && temperatura <= 30) &&
       (umidadeAr >= 50 && umidadeAr <= 80) &&
       (umidadeSolo > 0 && umidadeSolo > 10 )){
        monitoraNematoideDasRaizes = true;
    }     
    console.log("Pragas a serem monitoradas soja:");
    
  if (monitoraLagartoDaSoja) paragrafoModalConfirmacao.html("Lagarto Da Soja &nbsp;<br>")
  if (monitoraMoscaBranca) paragrafoModalConfirmacao.append("Mosca Branca &nbsp;<br>") 
  if (monitoraFerrugemAsiatica) paragrafoModalConfirmacao.append("FerrugemAsiatica &nbsp;<br>")
  if (monitoraNematoideDasRaizes) paragrafoModalConfirmacao.append("Nematoide das Raizes &nbsp;<br>")
  paragrafoModalConfirmacao.append(` Temperatura: ${temperatura} Umidade do Solo: ${umidadeSolo} Umidade do ar: ${umidadeAr}` )

}

function monitoraPragasMilho(temperatura, umidadeAr, umidadeSolo){
var monitoraLagartoCartucho = false;
var monitoraCuruquereCapinzais = false;
var monitoraLagartaSoja = false;
var monitoraAfidos = false;

if((temperatura >= 25 && temperatura <= 30) &&
   (umidadeAr >= 70 && umidadeAr <= 100) &&
   (umidadeSolo > 18 && umidadeSolo <= 35)){
    monitoraLagartoCartucho = true;
} 

if((temperatura >= 20 && temperatura <= 28) &&
(umidadeAr >= 70 && umidadeAr <= 100) &&
   (umidadeSolo > 18 && umidadeSolo <= 35)){
    monitoraCuruquereCapinzais = true;
}  

if((temperatura >= 20 && temperatura <= 28) &&
    (umidadeAr >= 10 && umidadeAr <= 30) &&
    (umidadeSolo > 18 && umidadeSolo <= 35)){
    monitoraLagartaSoja = true;
}

if((temperatura >= 18 && temperatura <= 25) &&
   (umidadeAr >= 40 && umidadeAr <= 60) &&
   (umidadeSolo > 18 && umidadeSolo <= 35)){
    monitoraAfidos = true;
}     
console.log("Pragas a serem monitoradas milho:");
if (monitoraLagartoCartucho) paragrafoModalConfirmacao.html("Lagarto Cartucho &nbsp;<br>");
if (monitoraCuruquereCapinzais) paragrafoModalConfirmacao.append("Curuquere Capinzais &nbsp;<br>");
if (monitoraLagartaSoja) paragrafoModalConfirmacao.append("Lagarta Soja &nbsp;<br>");
if (monitoraAfidos) paragrafoModalConfirmacao.append("Monitora Afidos &nbsp;<br>");
paragrafoModalConfirmacao.append(` Temperatura: ${temperatura} Umidade do Solo: ${umidadeSolo} Umidade do ar: ${umidadeAr}` )

}

function monitoraPragasAlgodao(temperatura, umidadeAr, umidadeSolo){
var ManchaAngular = false;
var BicudoAlgodoeiro = false;
var MofoCinzento = false;
var LagartaRosca = false;

if((temperatura >= 25 && temperatura <= 32) &&
   (umidadeAr >= 50 && umidadeAr <= 80) &&
   (umidadeSolo > 18 && umidadeSolo <= 35)){
    ManchaAngular = true;
} 

if((temperatura >= 25 && temperatura <= 30) &&
(umidadeAr >= 70 && umidadeAr <= 100) &&
   (umidadeSolo > 18 && umidadeSolo <= 35)){
    BicudoAlgodoeiro = true;
}  

if((temperatura >= 15 && temperatura <= 20) &&
    (umidadeAr >= 81 && umidadeAr <= 100) &&
    (umidadeSolo > 45 && umidadeSolo <= 55)){
    MofoCinzento = true;
}

if((temperatura >= 20 && temperatura <= 30) &&
   (umidadeAr >= 15 && umidadeAr <= 40) &&
   (umidadeSolo > 18 && umidadeSolo <= 35)){
    LagartaRosca = true;
}     
console.log("Pragas a serem monitoradas algodao:");
if (ManchaAngular) paragrafoModalConfirmacao.html("Mancha Angular &nbsp;<br>");
if (BicudoAlgodoeiro) paragrafoModalConfirmacao.append("Bicudo Algodoeiro &nbsp;<br>");
if (MofoCinzento) paragrafoModalConfirmacao.append("Mofo Cinzento &nbsp;<br>");
if (LagartaRosca) paragrafoModalConfirmacao.append("Lagarta Rosca &nbsp;<br>");
paragrafoModalConfirmacao.append(` Temperatura: ${temperatura} Umidade do Solo: ${umidadeSolo} Umidade do ar: ${umidadeAr}` )

}