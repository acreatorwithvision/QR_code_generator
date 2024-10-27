let imgBox = document.getElementById("imgBox");
let qrIMG = document.getElementById("qrIMG");
let qrtext = document.getElementById("qrtext");
function generateQR(){
    if(qrtext.value.length>0){
    qrIMG.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + qrtext.value;
    imgBox.classList.add("show-img");
    }else{
        qrtext.classList.add('error');
        setTimeout(()=>{
            qrtext.classList.remove('error');
        },1000);
    }

}

console.log("Its working");