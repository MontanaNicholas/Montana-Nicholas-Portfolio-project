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
                    <a href="https://www.instagram.com/_tiny__things" target="_blank" rel="noopener">
                        _tiny__things
                      </a>
                  </li>
              
                  <li class="contact__item">
                    <img src="mail.png" alt="mail" />
                    <span>Mn171204@gmail.com</span>
                  </li>
              
                  <li class="contact__item">
                    <img src="call.png" alt="Call" />
                    <span>0858628356</span>
                  </li>

                  <li class="contact__item">
                    <img src="linkedin.png" alt="linkedin" />
                    <span>Montana Nicholas</span>
                  </li>
            </ul>
          </section>
        
        </div>
        
        <div class="person"><img src="cartoon-me.png" alt="person" width="175" height="420" ></div>

        <div class="parallax parallax--fast"></div>
   
<style>

   
.details {
    position: fixed;
    top: 55%;
    margin-left: 32%;
    transform: translateY(-50%);
    width: 550px; 
    height: 450px;
    background-color: rgb(150, 28, 69);
    border: 5px solid #ffffff;
    border-radius: 4px;
    padding: 40px;
    border-radius: 25px;

}

.person {
    position: fixed;
    top: 60%;
    margin-left: 55%;
    transform: translateY(-50%);
}

.parallax {
  position: fixed; inset: 0; pointer-events: none;
  background: url('/sparkle.png') repeat;
  animation: slide 60s linear infinite;
  opacity: .15;
  z-index: -1; 
}
.parallax--fast { animation-duration: 30s; opacity:.25; }
@keyframes slide { from{background-position:0 0} to{background-position:-2048px 0} }


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
  align-items: flex-start;
  gap: 15px;   
  margin-left: -20%;             
}

.contact__icons img {
  width: 50px;                 

}

.contact__item {
  display:flex;
  align-items:center;
  gap:1rem;
  font-family: Candara;
  font-size: 25px;
  color:#fff;
  text-shadow:0 2px #000;
}

.contact__item img {
  width: 60px;              

}

.contact__item a{
  color:#fff;
  text-decoration:none;          
}
.contact__item a:hover{
  text-decoration:underline;      
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