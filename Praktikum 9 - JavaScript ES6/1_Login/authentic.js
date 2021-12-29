
function cekLogin() {
    const username = 'amel21163';
    const password = 'nice';

    var cekUsername = document.getElementById('username').value;
    var cekPassword = document.getElementById('password').value;

    if(username == cekUsername && password == cekPassword) {
        console.log('sama gan!');
        console.log(password);

        window.location.href = "loginberhasil.html";
    } else {
        console.log('gak sama!');

        var getErr =  document.getElementById("error");
        getErr.style.display = 'block';

    }
}

function closeLah() {
    var getErr =  document.getElementById("error");
    getErr.style.display = 'none';
}