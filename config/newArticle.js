var languag = getCookie();
    if (languag == "english") {
        
    }
    else if(languag == "spanish"){
        document.getElementById('backLabel').innerHTML="Volver a página<br> de noticias";
        document.getElementById('readLabel').innerHTML="Leer el artículo";
        document.getElementById('printLabel').innerHTML="Imprimir artículo";
        document.getElementById('headLine').innerHTML="Dr. Marvin Manzanero da positivo a COVID";
        document.getElementById('line1').innerHTML="El viernes, comenzó con síntomas menores como picazón en la garganta.";
        document.getElementById('line2').innerHTML="El lunes se hizo la prueba";
        document.getElementById('line3').innerHTML="El martes 8 vino resultado positivo para COVID";
        document.getElementById('line4').innerHTML="Aconseja a la gente que nunca baje la guardia";
    }
    else if(languag == "maya"){
        document.getElementById('backLabel').innerHTML="K'a' u linki abas<br> kaambal u t'aano'ob";
        document.getElementById('readLabel').innerHTML="Xook le artículo";
        document.getElementById('printLabel').innerHTML="Imprimir artículo";
        document.getElementById('headLine').innerHTML="Tumen Dr Marvin Manzanero ts'aik positivo ti' COVID";
        document.getElementById('line1').innerHTML="Le tak viernes, káaj yéetel taalamil menores bey picazón tu kaal.";
        document.getElementById('line2').innerHTML="Le lunes tu beetaj le prueba";
        document.getElementById('line3').innerHTML="Martes 8 taal resultado positivo utia'al u COVID";
        document.getElementById('line4').innerHTML="Aconseja le máako'obo' ma'atech baje le guardia";
    }
    else{
        document.getElementById('cookieForm').classList.add('showForm');
    }