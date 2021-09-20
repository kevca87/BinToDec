const form = document.querySelector("#bindecform")
const buttonToBin = document.querySelector('#button_TO_BIN');
const buttonToDec = document.querySelector('#button_TO_DEC');
const strDec = document.querySelector('#num_dec');
const strBin = document.querySelector('#num_bin');
const span = document.querySelector('span');


buttonToBin.addEventListener('click',getBin);
buttonToDec.addEventListener('click',getDec);

function completeTo8(strBinOct)
{
    zerosToAdd = 8 - strBinOct.length
    console.log(zerosToAdd)
    //console.log(strBinOct.length)
    for (var i=0; i<zerosToAdd; i++)
    {
        strBinOct = '0' + strBinOct
    }
    return strBinOct
}

function ipDecToBin(ipDec)
{
    octsDec = getOcts(ipDec)
    var octsBin = []
    var ipBin = ''
    octsDec.forEach(element => {
        elementInt = parseInt(element)
        octBin = Number(elementInt).toString(2)
        octsBin.push(octBin)
        ipBin = ipBin+ '.' + completeTo8(octBin)
    });
    ipBin = ipBin.slice(1)
    return ipBin
}
function ipBinToDec(ipBin)
{
    octsBin = getOcts(ipBin)
    var octsDec = []
    var ipDec = ''
    octsBin.forEach(element => {
        octDec = parseInt(element,2)
        octsDec.push(octDec)
        ipDec = ipDec+ '.' + octDec
    });
    ipDec = ipDec.slice(1)
    console.log(octsBin)
    console.log(octsDec)
    console.log(ipDec)
    return ipDec
}

function getOcts(ip)
{
    let arrayOcts = ip.split('.')
    return arrayOcts
}

function getBin()
{
    let ipBin = ipDecToBin(strDec.value)
    strBin.value = ipBin
}
function getDec()
{
    let ipDec = ipBinToDec(strBin.value)
    strDec.value = ipDec
}
//TODO: Control the valids ip
//TODO: Show the mask