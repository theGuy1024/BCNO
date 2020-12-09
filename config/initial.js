localStorage.setItem('language', 'english')

function checkCookie(){
    var lang = localStorage.getItem('language')
    
    if(lang === 'english'){
        alert(lang)
    }
}

function showdis(){
    document.getElementById('target').classList.add('show');
}

function hidedis(){
    document.getElementById('target').classList.add('hide');
}