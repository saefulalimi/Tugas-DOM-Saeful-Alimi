/* Get element input and button */
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputPhone = document.querySelector('input[name="phone"]');
const inputMessage = document.querySelector('textarea[name="message"]');

const btnSubmit = document.getElementById('submit');


const showMessage = () => {
    /* ambil value dari tiap inputan */
    let name = inputName.value;
    let email = inputEmail.value;
    let phone = inputPhone.value;
    let message  = inputMessage.value;

    /* validasi */
    if(name && email && phone && message) {
        alert(`
            Nama: ${name}
            Email: ${email}
            phone: ${phone}
            message: ${message}
        `);
    } else {
        alert(`Data tidak valid!`);
    }

    
}


/* Event when user submit data */
btnSubmit.addEventListener('click' , (e) => {
    e.preventDefault();

    showMessage();
})