/*makes the overlay/mobile menu appear - adds the css*/
function openNav() {
    document.getElementById("fullNav").style.width = "100%";
  }
/*makes the overlay/mobile menu appear - adds the css*/
function closeNav() {
    document.getElementById("fullNav").style.width = "0%";
} 


/*function called when the switch for "Today's Results:" is clicked*/
function toggleDailyStats(){
    var dailySwitch = document.getElementById('dailyBtn');
    /*checks the state of the switch if it's on/checked or off/unchecked*/
    /*removes the css for hinding the column of the day's results for both by district and country - makes the column visible*/
    if (dailySwitch.checked == true){
        document.getElementById('districtTable').classList.remove('hideDaily');
        document.getElementById('countryTable').classList.remove('hideDaily');
    }
    /*adds css to hind the column of the DAY'S results for both by district and country - makes the column invisible*/
    else{
        document.getElementById('districtTable').classList.add('hideDaily');
        document.getElementById('countryTable').classList.add('hideDaily');
    }
}

function toggleTotalStats(){
    var dailySwitch = document.getElementById('totalBtn');
    /*removes the css for hinding the column of the TOTAL results for both by district and country - makes the column visible*/
    if (dailySwitch.checked == true){
        document.getElementById('districtTable').classList.remove('hideTotal');
        document.getElementById('countryTable').classList.remove('hideTotal');
    }
    /*adds css to hind the column of the TOTAL results for both by district and country - makes the column invisible*/
    else{
        document.getElementById('districtTable').classList.add('hideTotal');
        document.getElementById('countryTable').classList.add('hideTotal');
    }
}

/*global variable dailyBox and totalBox - global since there won't be a need to type the "docum...Cases')" for every function*/
/*first table, middle column*/
var dailyDC = document.getElementById('districtCases');
var dailyDD = document.getElementById('districtDeaths');
var dailyDR = document.getElementById('districtRecovered');
var dailyDA = document.getElementById('districtActive');
/*first table, right column*/
var totalDC = document.getElementById('totaldistrictCases');
var totalDD = document.getElementById('totaldistrictDeaths');
var totalDR = document.getElementById('totaldistrictRecovered');
var totalDA = document.getElementById('totaldistrictActive');
/*second table, middle column*/
var dailyCC = document.getElementById('countryCases');
var dailtCD = document.getElementById('countryDeaths');
var dailyCR = document.getElementById('countryRecovered');
var dailyCA = document.getElementById('countryActive');
/*second table, right table*/
var totalCC = document.getElementById('totalcountryCases');
var totalCD = document.getElementById('totalcountryDeaths');
var totalCR = document.getElementById('totalcountryRecovered');
var totalCA = document.getElementById('totalcountryActive');

/* ----------------------------------TABLE FUNCTIONS----------------------------------*/
/*add the data in the table of the DAILY result for Corozal*/
function czlClicked() {
    document.getElementById('countryImg').src='media/Corozal.png';
    document.getElementById('district').innerHTML = " Corozal";

    /*daily column data*/
    dailyDC.innerHTML = "34";
    dailyDD.innerHTML = "3";
    dailyDR.innerHTML = "5";
    /*total column data*/
    totalDC.innerHTML = "1170";
    totalDD.innerHTML = "39";
    totalDR.innerHTML = "529";
    totalDA.innerHTML = "641";
}
/*add the data in the table of the DAILY result for Orange Walk*/
function owClicked() {
    document.getElementById('district').innerHTML = " Orange Walk";
    document.getElementById('countryImg').src='media/OrangeWalk.png';

    /*daily column data*/
    dailyDC.innerHTML = "72";
    dailyDD.innerHTML = "1";
    dailyDR.innerHTML = "4";
    /*total column data*/
    totalDC.innerHTML = "1810";
    totalDD.innerHTML = "44";
    totalDR.innerHTML = "948";
    totalDA.innerHTML = "862";
}
/*add the data in the table of the DAILY result for Belize*/
function bzClicked(){
    document.getElementById('district').innerHTML = " Belize";
    document.getElementById('countryImg').src='media/Belize.png';

    /*daily column data*/
    dailyDC.innerHTML = "59";
    dailyDD.innerHTML = "0";
    dailyDR.innerHTML = "4";
    /*total column data*/
    totalDC.innerHTML = "1912";
    totalDD.innerHTML = "64";
    totalDR.innerHTML = "948";
    totalDA.innerHTML = "964";
}
/*add the data in the table of the DAILY result for Cayo*/
function cyClicked(){
    document.getElementById('district').innerHTML = " Cayo";
    document.getElementById('countryImg').src='media/Cayo.png';
    
    /*daily column data*/
    dailyDC.innerHTML = "49";
    dailyDD.innerHTML = "0";
    dailyDR.innerHTML = "3";
    /*total column data*/
    totalDC.innerHTML = "1226";
    totalDD.innerHTML = "17";
    totalDR.innerHTML = "455";
    totalDA.innerHTML = "771";
}
/*add the data in the table of the DAILY result for Stann Creek*/
function scClicked(){
    document.getElementById('district').innerHTML = " Stann Creek";
    document.getElementById('countryImg').src='media/StannCreek.png';

    /*daily column data*/
    dailyDC.innerHTML = "15";
    dailyDD.innerHTML = "0";
    dailyDR.innerHTML = "3";
    /*total column data*/
    totalDC.innerHTML = "618";
    totalDD.innerHTML = "12";
    totalDR.innerHTML = "249";
    totalDA.innerHTML = "369";
}
/*add the data in the table of the DAILY result for Toledo*/
function tdClicked(){
    document.getElementById('district').innerHTML = " Toledo";
    document.getElementById('countryImg').src='media/Toledo.png';

    /*daily column data*/
    dailyDC.innerHTML = "8";
    dailyDD.innerHTML = "0";
    dailyDR.innerHTML = "2";
    /*total column data*/
    totalDC.innerHTML = "326";
    totalDD.innerHTML = "6";
    totalDR.innerHTML = "120";
    totalDA.innerHTML = "242";
}

/*add the data in the table of the GRAND TOTAL result*/
dailyCC.innerHTML = "241";
dailtCD.innerHTML = "4";
dailyCR.innerHTML = "14";

totalCC.innerHTML = "7236";
totalCD.innerHTML = "164";
totalCR.innerHTML = "3571";
totalCA.innerHTML = "3501"
