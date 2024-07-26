var form = document.getElementById("contactForm");

form.addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const feedback = document.getElementById('feedback');

    if(name === ''|| email === ''|| phone === ''){
        feedback.textContent = 'fill out all fields'

    }
    else{
        feedback.textContent ='Our devs will contact you shortly'
        document.getElementById('contactForm').reset();
    }

}); 