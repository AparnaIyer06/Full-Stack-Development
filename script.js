function domReady(fn){
    if(document.readyState=="complete"||document.readyState=="interactive"){ //readyState gives the current state of the object

        setTimeout(fn,1000)
    }
    else{
        document.addEventListener("DOMContentLoaded"); //DOM: Document Object Model
    }
}

domReady(function (){  //Callback Function

    function onScanSuccess(decodeText,decodeResult){
        alert("Your QR is: "+decodeText,decodeResult)
    }

    let htmlscanner = new Html5QrcodeScanner("qr-code-reader",{fps:10,qrbos:250}) //Instantiating HTML5QrCodeScanner

    htmlscanner.render(onScanSuccess);  //Callback Function

})




