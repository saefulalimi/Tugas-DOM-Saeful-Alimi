/* Ambil element dari html */
const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('submit');

const submitForm = () => {
    /* ambil data dari inputan */
    let user = username.value;
    let pass = password.value;
    let message = '';

    /* validasi */
    if(user && pass) {
        message = `
            Username : ${user}
            Password: ${pass}
        `
        alert(message);
        document.location.pathname = './produk.html';
    } else {
        message = `Data tidak valid!`;
        alert(message);
    }

}


login.addEventListener('click' , submitForm);