<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Contact Page Loaded");
    })
</script>


<div class="page-bg"></div>


    <div class="details">

        <section class="contact">
        <div class="pic"><img src="contact-title.png" alt="contact" width="350" height="60"></div>
          
            <ul class="contact__icons">
                <li class="contact__item">
                    <img src="instagram.png" alt="instagram" />
                    <span>Instagram</span>
                  </li>
              
                  <li class="contact__item">
                    <img src="mail.png" alt="mail" />
                    <span>Mail</span>
                  </li>
              
                  <li class="contact__item">
                    <img src="call.png" alt="Call" />
                    <span>Call</span>
                  </li>

                  <li class="contact__item">
                    <img src="linkedin.png" alt="linkedin" />
                    <span>Linkedin</span>
                  </li>
            </ul>
          </section>
        
        </div>
   
<style>

   
.details {
    position: fixed;
    top: 55%;
    margin-left: 30%;
    transform: translateY(-50%);
    width: 550px; 
    height: 400px;
    background-color: rgb(150, 28, 69);
    border: 5px solid #ffffff;
    border-radius: 4px;
    padding: 40px;
    border-radius: 25px;

}

.contact {

    position: fixed;
    top: 45%;
    margin-left: 17%;
    transform: translateY(-50%);
}

.contact__icons {
  list-style: none;
  padding: 0;
  margin: 3rem 0 0;            
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;                
}

.contact__icons img {
  width: 50px;                 

}

.contact__item {
  display: flex;
  align-items: center;      /* vertical alignment of icon & text */
  gap: 1rem;                /* space between icon and its label   */
  font: 700 1.1rem 'Press Start 2P', sans-serif; /* pixel font    */
  color: #ffffff;
  text-shadow: 0 2px #000;
}

.contact__item img {
  width: 60px;              

}

.page-bg{ 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(255, 248, 246);
    z-index: -1; 
}
</style>