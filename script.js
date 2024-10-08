// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found your QR code
    function onScanSuccess(decodeText, decodeResult) {
        // Redirect to the URL contained in the QR code
        window.location.href = decodeText;
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 } // Fixed typo: qrbos -> qrbox
    );
    htmlscanner.render(onScanSuccess);
});
