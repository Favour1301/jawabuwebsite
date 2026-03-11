
//about section code
let slides=document.querySelectorAll('.slide');
let current=0;
function nextslide(){
    slides[current].classList.remove('active');
    current=(current+1)%slides.length;
    slides [current].classList.add('active');

}
setInterval (nextslide,5000);

fetch("Header.html")
.then(response=>response.text())
.then(data=>{
    document.getElementById("header").innerHTML=data;
    const menuToggle=document.querySelector('.menu-toggle');
    const navbar=document.querySelector('#navbar');
    const dropdownLinks=document.querySelectorAll(".dropdown>a");
    if (menuToggle && navbar) {
            menuToggle.addEventListener('click', () => {
                navbar.classList.toggle('active');
                console.log("Navigation toggled");
                
            });
        }
        dropdownLinks.forEach(link =>{
            link.addEventListener("click",function(e){
                e.preventDefault();
                const parent=this.parentElement;
                const menu=this.nextElementSibling;
                parent.classList.toggle("active");
                if(menu){
                    menu.classList.toggle("show");
                }
            })
        })
        })


        .catch(error => console.error("Error Loading Header:", error));



            //footer-section code
              fetch("footer.html")
             .then(response=>response.text())
            .then(data=>{
            document.getElementById("footer").innerHTML=data;})
            .catch(error=>console.error("Error Loading Footer:"));
            /*contact form code*/
            const contactForm=document.getElementById('contact-form');
            const submitBtn=contactForm.querySelectorAll('input[type="submit"]');
            if(contactForm){
                contactForm.addEventListener('submit',async function(e){
                    e.preventDefault();
                    const originalBtnValue=submitBtn.value;
                    submitBtn.value="sending...";
                    submitBtn.style.opacity="0.7";
                    submitBtn.disabled=true;
                    const formData=new FormData(this);
                    try{
                        const response=await fetch(contactForm.ariaDescription,{
                            method:'POST',
                            body:formData,
                            headers:{
                                'Accept':application/json
                            }
                        });
                        if(response.ok){
                            alert("Thank you! your message has been sent to Jawabu School we will contact you shortly");
                        }
                        else{
                            alert("Oops! There was a problem submitting your form. Please try again.");
                        }

                    }
                    catch(error){
                        alert("Network error. Please check your internet connection.");
                    }
                    finally{
                      submitBtn.value=originalBtnValue;
                      submitBtn.style.opacity="1";
                       submitBtn.disabled=false;  
                    }
                });}
            

