var form = document.getElementById('guestbookForm');
var getcomment = document.getElementById('comments')
async function displayComments(){
    const comments = document.getElementById('comments');
    const feedbackData = await JSON.parse(localStorage.getItem("feedback"))
    if (feedbackData){
        let htmlContent = '';
        feedbackData?.forEach(element => {
            htmlContent += `
            <div class="comment">
                    <h2 class="user" >
                        ${element.name}
                    </h2>
                    <p class="userMessage">
                        ${element.message}
                    </p>
                  </div>
            `;
            
        });
        
        comments.innerHTML = htmlContent

    }
}

document.addEventListener('DOMContentLoaded',displayComments)

form.addEventListener('submit',async function(event){

    event.preventDefault();
    let feedbacks = [];
    const feedbackData = await JSON.parse(localStorage.getItem("feedback"))
    if (feedbackData){
        feedbacks = [...feedbackData];

    }
    const obj = {};

    const message = document.getElementById('message');

    const formData = new FormData(event.target);
    for(let i of formData.entries()){
        obj[i[0]] = i[1];
    }

    
    if(obj.name === ''|| obj.message ===''){
        message.textContent = 'Please fill out all the fields'

    }
    else{
       
        form.reset();
    }

    if(obj){
        feedbacks.push(obj);
        localStorage.setItem("feedback",JSON.stringify(feedbacks));
        displayComments();  
    }
    

    
})