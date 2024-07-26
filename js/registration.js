var form = document.getElementById("registrationForm");



form.addEventListener('submit',function(event){
    event.preventDefault();
   
    const obj = {};
    const feedback = document.getElementById('feedback');

    const formData = new FormData(event.target);
    for(let i of formData.entries()){
        obj[i[0]] = i[1];
    }

    
   

    // console.log(obj);

    // Object.keys(obj)?.forEach(function(el){
    //     console.log(el);
    // })
    // let flag = false;
    // Object.keys(obj)?.every((el)=>{
    //     console.log(obj[el] , obj,el);
    //     if(obj[el] === ''){
    //         flag = true
    //         feedback.textContent = "Please fill out all the fields";
    //         return false;
    //     }
    //     else if(!flag){
    //         feedback.textContent = `Welcome ${obj.name} to our club`;
    //         form.reset();
    //     }
    // })


    if(obj.name === ''|| obj.petName===''|| obj.email === ''|| obj.phone === ''||obj.breed ===''){
        feedback.textContent = 'Please fill out all the fields'

    }
    else{
        feedback.textContent =`Welcome ${obj.name} to our club`
        form.reset();
    }

    if(obj){
        localStorage.setItem("user",JSON.stringify(obj));
    }
}); 