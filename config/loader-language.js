
/*loader animation*/
loaderLanguage();
        var container = document.getElementById('characterPopUp');
        var text = document.getElementById('textPopUp');
        var main = document.getElementById('mainFrame');
        setTimeout(function(){container.classList.add('expand');},0)
        setTimeout(function(){container.classList.add('move');},800)
        setTimeout(function(){text     .classList.add('lower');},800)
        setTimeout(function(){main     .classList.add('pageLoaded');},2700)

/* ----------------------------------SESSION INITIALIZATION----------------------------------*/
function initializeSite(currentPage){
    /*checks the string passed - if it was recieved from home or map*/
    /*if from home - display screen loader*/
    if(currentPage === "home"){
        /*while loader is animated - it calls function to check the language selected*/
        checkHomeLanguage();
    }
    /*then the call came from the map page*/
    else{
        checkMapLanguage();
    }    
}  

/* ----------------------------------LANGUAGE STORAGE---------------------------------- */
/* removes/deletes the local storage file */
function removeSelection(){
    localStorage.removeItem('language');
}

/*makes the Language Selection Form pop up*/
function changeLanguage(){
    document.getElementById('cookieForm').classList.add('showForm');
}

/*Sets the local storage value*/
function setCookie(langOpt) {
    localStorage.setItem('language', langOpt);
}

/*retrieves the value set in the local storage */
function getCookie() {
    var lang = localStorage.getItem('language');
    return lang;
}

/* ----------------------------------SETS LANGUAGE---------------------------------- */
/*remembers that the user selected english, hides the form and loads the language*/
function setEnglish(recievedFrom){
    setCookie('english');
    document.getElementById('cookieForm').classList.remove('showForm');
    /*if(recievedFrom == "home"){

    }*/
    loadEnglish();
}

/*remembers that the user selected spanish, hides the form and loads the language*/
function setSpanish(recievedFrom){
    setCookie('spanish');
    loadSpanishNav();
    document.getElementById('cookieForm').classList.remove('showForm');

    if(recievedFrom == "home"){
        loadSpanish();
        spanishNavExtension();
    }
    else{
        mapSpanishNav();
        mapSpanishBody();
    }

}

/*remembers that the user selected maya, hides the form and loads the language*/
function setMaya(recievedFom){
    setCookie("maya");
    loadMayaNav();
    document.getElementById('cookieForm').classList.remove('showForm');

    if(recievedFom == "home"){
        loadMaya();
        mayaNavExtension();
    }
    else{
        mapMayaNav();
        mapMayaBody();
    }
}

/* ------------------------------LANGUAGE LOAD CALLS------------------------------ */
/*checks the value stored - calling the function to get the value and loading the correct language.*/
function loaderLanguage(){
    var language = getCookie();
    if(language === "spanish"){
        screenLoaderSpanish();
    }
    else if(language === "maya"){
        screenLoaderMaya();
    }
    else{
        return 0;
    }
}

/*used by news home to load the selected language*/
function checkHomeLanguage(){
    /*>loads the language of the common buttons,then the subcategories. 
      >Super important to separate them, if not, site will wait for execution of changing the 
      subcategories but the subcategories in Map are different, so site will keep on waiting, 
      resulting in being stuck in the language selection form*/
    var language = getCookie();
    if (language == "english") {
        loadEnglish();
    }
    else if(language == "spanish"){
        loadSpanishNav();
        loadSpanish();
        spanishNavExtension();
    }
    else if(language == "maya"){
        loadMayaNav();
        mayaNavExtension();
        loadMaya();
    }
    else{
        document.getElementById('cookieForm').classList.add('showForm');
    }
}

function checkMapLanguage(){
    var languag = getCookie();
    if (languag === "english") {
        loadEnglish();
    }
    else if(languag === "spanish"){
        loadSpanishNav();
        mapSpanishNav();
        mapSpanishBody();
    }
    else if(languag === "maya"){
        loadMayaNav();
        mapMayaNav();
        mapMayaBody();
    }
    else{
        document.getElementById('cookieForm').classList.add('showForm');
    }
}

/* ----------------LOAD SCREEN LOADER LANGUAGE---------------- */
function screenLoaderSpanish(){
    document.getElementById('h2-1').innerHTML = "Use una máscara";
    document.getElementById('h2-2').innerHTML = "Mantén tu distancia";
    document.getElementById('h2-3').innerHTML = "Lávese las manos";
}

function screenLoaderMaya(){
    document.getElementById('h2-1').innerHTML = "Use juntúul máscara";
    document.getElementById('h2-2').innerHTML = "Mantenga u distancia";
    document.getElementById('h2-3').innerHTML = "P'o' a k'ab";
}

/* ----------------LOAD NAV BAR LANGUAGE---------------- */
/*sets preload to spanish language*/
/*common tags*/
function loadSpanishNav(){
    document.getElementById('commonNavTag1').innerHTML = "Noticias";
    document.getElementById('commonNavTag2').innerHTML = "Mapa";
    document.getElementById('commonNavTag3').innerHTML = "Fuente";

    document.getElementById('commonNavTag4').innerHTML = "Opcion de Lenguajes"
    document.getElementById('commonNavTag5').innerHTML = "Eliminar Selección";
    document.getElementById('commonNavTag6').innerHTML = "Cambiar Idioma";
}

function loadMayaNav(){
    document.getElementById('commonNavTag1').innerHTML = "T'aano'ob";
    document.getElementById('commonNavTag2').innerHTML = "Mapa";
    document.getElementById('commonNavTag3').innerHTML = "Fuente";

    document.getElementById('commonNavTag4').innerHTML = "Opciones t'aano'";
    document.getElementById('commonNavTag5').innerHTML = "tselik Selección";
    document.getElementById('commonNavTag6').innerHTML = "k'ex t'aano'";
}

/*
/*new page exclusive*/
function spanishNavExtension(){
    document.getElementById('homeNavTag1').innerHTML = "Categorias";
    document.getElementById('homeNavTag2').innerHTML = "Popular y actual";
    document.getElementById('homeNavTag3').innerHTML = "Instrumento Estatutario";
    document.getElementById('homeNavTag4').innerHTML = "Salud Mental";
    document.getElementById('homeNavTag5').innerHTML = "Prevención";

    document.getElementById('searchBX').placeholder = "Buscar tema de noticias";
}

function mayaNavExtension(){
    document.getElementById('homeNavTag1').innerHTML = "Categorías";
    document.getElementById('homeNavTag2').innerHTML = "Más popular y actual";
    document.getElementById('homeNavTag3').innerHTML = "Instrumento Estatutario";
    document.getElementById('homeNavTag4').innerHTML = "Toj óolal wíinkilale'";
    document.getElementById('homeNavTag5').innerHTML = "Prevención";

    document.getElementById('searchBX').placeholder = "Kaxant le chun tuukulo' t'aano'ob";
}


/*map page exclusive*/
function mapSpanishNav(){
    document.getElementById('mapLabel1').innerHTML = "Mostrar Resultados de :";
    document.getElementById('mapLabel2').innerHTML = "Hoy";
    document.getElementById('mapLabel3').innerHTML = "Totales";
}

function mapSpanishBody(){
    document.getElementById('mapText1').innerHTML = "Seleccione un distrito:";
    document.getElementById('mapText2').innerHTML = "Estadísticas para:";
    document.getElementById('mapText3').innerHTML = "Hoy";
    document.getElementById('mapText4').innerHTML = "Gran Total";
    document.getElementById('mapText5').innerHTML = "Casos";
    document.getElementById('mapText6').innerHTML = "Fallecidos";
    document.getElementById('mapText7').innerHTML = "Recuperados";
    document.getElementById('mapText8').innerHTML = "Activo";
    document.getElementById('mapText9').innerHTML = "Estadísticas del País";
    document.getElementById('mapText10').innerHTML = "Hoy";
    document.getElementById('mapText11').innerHTML = "Gran Total";
    document.getElementById('mapText12').innerHTML = "Casos";
    document.getElementById('mapText13').innerHTML = "Fallecidos";
    document.getElementById('mapText14').innerHTML = "Recuperados";
    document.getElementById('mapText15').innerHTML = "Activo"; 
    document.getElementById('mapText16').innerHTML = "Imprimir Estadísticas";
}

function mapMayaNav(){
    document.getElementById('mapLabel1').innerHTML = "We'esik Estadísticas ti':";
    document.getElementById('mapLabel2').innerHTML = "Ya'ala'al máaxo'ob máano";
    document.getElementById('mapLabel3').innerHTML = "Ya'ala'al máaxo'";
}

function mapMayaBody(){
    document.getElementById('mapText1').innerHTML = "Seleccione distrito ka in wil estadísticas:";
    document.getElementById('mapText2').innerHTML = "Estadísticas ti':";
    document.getElementById('mapText3').innerHTML = "Bejla'e'";
    document.getElementById('mapText4').innerHTML = "Nojoch Total";
    document.getElementById('mapText5').innerHTML = "Ku";
    document.getElementById('mapText6').innerHTML = "Fallecidos";
    document.getElementById('mapText7').innerHTML = "Recuperados";
    document.getElementById('mapText8').innerHTML = "Activo";
    document.getElementById('mapText9').innerHTML = "Estadísticas le lu'uma'";
    document.getElementById('mapText10').innerHTML = "Bejla'e'";
    document.getElementById('mapText11').innerHTML = "Nojoch Total";
    document.getElementById('mapText12').innerHTML = "Ku";
    document.getElementById('mapText13').innerHTML = "Fallecidos";
    document.getElementById('mapText14').innerHTML = "Recuperados";
    document.getElementById('mapText15').innerHTML = "Activo"; 
    document.getElementById('mapText16').innerHTML = "Imprimir Estadísticas";
}

/* ----------------LOAD NEWS CONTENT LANGUAGE---------------- */
function loadEnglish(){
    document.getElementById('result').innerHTML = "English Selected!";
    document.getElementById('welcome').innerHTML = "Welcome!";
}

function loadSpanish(){
    document.getElementById('welcome').innerHTML = "Bienvenido!";
    document.getElementById('result').innerHTML = "Español seleccionado!";
}

/*sets maya language*/
function loadMaya(){
    document.getElementById('welcome').innerHTML = "Kíimak 'oolal!";
    document.getElementById('result').innerHTML = "Maya escohido!";
}

/* MOBILE NAV BAR */
/*makes the overlay/menu visible - mobile*/
function openNav() {
    document.getElementById("fullNav").style.width = "100%";
}
/*hides the overlay/menu - mobile*/  
function closeNav() {
    document.getElementById("fullNav").style.width = "0%";
} 
