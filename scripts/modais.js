var tituloModal = $("#tituloModal")
var paragrafoModal = $("#paragrafoModal")

/* Modal Pragas Soja */

function modalLagarto(){
    tituloModal.text("Lagarta-da-soja(Helicoverpa armigera) ")
    paragrafoModal.text("Temperatura: Clima quente, ideal entre 20°C e 28°C. Umidade do ar: Umidade relativa do ar entre 10% e 30%. Umidade do solo: Solo úmido, mas não encharcado.")
}

function modalMosca(){
    tituloModal.text("Mosca-branca (Bemisia tabaci)")
    paragrafoModal.text("Temperatura: Clima quente e seco, ideal entre 25°C e 30°C. Umidade do ar: Umidade relativa do ar baixa, ideal entre 20% e 40%. Umidade do solo: Solo seco.")
}

function modalFerrugem(){
    tituloModal.text("Ferrugem-asiática (Phakopsora pachyspora)")
    paragrafoModal.text("Temperatura: Temperaturas amenas entre 15°C e 25°C. Umidade do ar: Clima úmido com chuvas frequentes, alta umidade relativa do ar (acima de 80%). Umidade do solo: Solo úmido.")   
}

function modalNematoide(){
    tituloModal.text("Nematóides-das-raízes (Meloidogyne incognita e Heterodera glycines)")
    paragrafoModal.text("Temperatura: Temperatura do solo entre 20°C e 30°C. Umidade do ar: Umidade relativa do ar entre 50% e 80%. Umidade do solo: Solos arenosos com baixa fertilidade e boa drenagem.")
}
/* ---------------------Modal Pragas Milho------------------------ */

function modalLagartoCartucho(){
    tituloModal.text("Lagarta-do-cartucho (Spodoptera frugiperda)")
    paragrafoModal.text("Temperatura: Clima quente e úmido, ideal entre 25°C e 30°C. Umidade do ar: Umidade relativa do ar alta, acima de 40%. Umidade do solo: Solo úmido.")
}

function modalMyzus(){
    tituloModal.text("Áfidos (Myzus persicae)")
    paragrafoModal.text("Temperatura: Clima ameno, ideal entre 18°C e 25°C. Umidade do ar: Clima seco, umidade relativa do ar entre 40% e 60%. Umidade do solo: Solo úmido.")
}

function modalCapinzais(){
    tituloModal.text("Curuquerê-dos-capinzais (Mocis latipes)")
    paragrafoModal.text("Temperatura: Clima quente e úmido, ideal entre 20°C e 28°C. Umidade do ar: Umidade relativa do ar alta, acima de 70%. Umidade do solo: Solo úmido.")
}

/* -------------------Modal Pragas Algodão-------------------------- */

function modalAngular(){
    tituloModal.text("Mancha-de-angular (Xanthomonas axonopodis pv. malvacearum)")
    paragrafoModal.text("Temperatura quente: A faixa ideal para o desenvolvimento da bactéria está entre 25°C e 32°C. Temperaturas acima de 35°C: Podem inibir o crescimento da bactéria. Noites frias: Favorecem a formação de orvalho, que aumenta a umidade e cria um ambiente propício para a disseminação da bactéria. Irrigação por aspersão: A irrigação por aspersão facilita a dispersão da bactéria pelas gotas de água. Fertilização nitrogenada excessiva: Excesso de nitrogênio na adubação pode aumentar a suscetibilidade da planta à doença.")
}

function modalBicudo(){
    tituloModal.text("Bicudo-do-algodoeiro (Anthonomus grandis)")
    paragrafoModal.text("Clima quente e úmido: Temperaturas entre 25°C e 30°C e umidade relativa do ar acima de 70%. Plantas jovens: O ataque é mais frequente em plantas jovens, no início do desenvolvimento. Presença de plantas hospedeiras alternativas: Plantas como malva e hibisco, hospedeiras do bicudo, nas proximidades do algodoeiro podem aumentar o risco de infestação.")
}

function modalMofo(){
    tituloModal.text("Mofo-cinzento (Botrytis cinerea)")
    paragrafoModal.text("Clima úmido e frio: Temperaturas amenas entre 15°C e 20°C e alta umidade relativa do ar (acima de 80%) favorecem o desenvolvimento do fungo. Lesões causadas por pragas: A presença de feridas causadas por insetos como o bicudo-do-algodoeiro pode facilitar a entrada do fungo na planta. Flores e capulhos úmidos: Condições de alta umidade no interior das flores e capulões devido a chuvas frequentes ou orvalho denso.")
}

function modalRosca(){
    tituloModal.text("Lagarta-rosca (Agrotis ipsilon)")
    paragrafoModal.text("Clima úmido: Maior incidência em solos úmidos e com boa disponibilidade de água. Solo mal preparado: Solos mal preparados, com torrões ou desníveis, favorecem o abrigo das lagartas. Presença de plantas daninhas: Plantas daninhas servem como fonte de alimento para as lagartas.")
}