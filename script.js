let imgBox = document.getElementById("imgBox");
let qrIMG = document.getElementById("qrIMG");
let qrtext = document.getElementById("qrtext");
function generateQR(){
    qrIMG.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + qrtext.value;

}

console.log("Its working");