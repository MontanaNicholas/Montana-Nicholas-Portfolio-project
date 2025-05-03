<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

    onMount(() => {
        console.log("About Page Loaded");
    })
</script>

<div class="profile-pic">
    <div class="me"><img src="{base}/me.png" alt="me"width="550" height="550" ></div>
</div>


    <div class="box">
   
    <p> Hi! My name is Montana Nicholas. I was born in Zimbabwe, and am now living in Ireland. I am currently a student at SETU Carlow studying Interactive Digital Art and Design.</p>

    <b> 
    <p> I am looking to find a career around Digital Art (2D, 3D or Pixel), Concept Art, Comic-Book Art, Animation, Graphic Design etc.</p>
    </b>
    
    </div>


    
    <div class="details">

        <section class="software">
        <div class="pic"><img src="{base}/sodtware-title.png" alt="software" width="400" height="50"></div>
          
            <ul class="software__icons">
                <li class="software__item">
                    <img src="{base}/krita.png" alt="krita" />
                    <span>KRITA</span>
                  </li>
              
                  <li class="software__item">
                    <img src="{base}/aseprite.png" alt="aseprite" />
                    <span>ASEPRITE</span>
                  </li>
              
                  <li class="software__item">
                    <img src="{base}/blender.png" alt="blender" />
                    <span>BLENDER</span>
                  </li>

                  <li class="software__item">
                    <img src="{base}/vs.png" alt="VSC" />
                    <span>VISUAL STUDIO CODE</span>
                  </li>

                  <li class="software__item">
                    <img src="{base}/adobe.png" alt="adobe" />
                    <span>ADOBE ANIMATE</span>
                  </li>
            </ul>
          </section>
        
        </div>

    <div class="about"><img src="{base}/about.png" alt="about" width="500" height="60" ></div>

    <div class="parallax parallax--fast"></div>

    <div class="page-bg"></div>



<style>

.about {
    width: 0%;
    position: fixed;
    top: 25%;
    margin-left: 43%;
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



.details {
    position: fixed;
    top: 55%;
    margin-left: 75%;
    transform: translateY(-50%);
    width: 300px; 
    height: 350px;
    background-color: rgb(150, 28, 69);
    border-radius: 4px;
    padding: 40px;
    border-radius: 25px;

}

.software {
    position: fixed;
    top: 38%;
    margin-left: -10%;
    transform: translateY(-50%);          
}

.software__icons {
    list-style: none;
    padding: 0;
    margin: 3rem 0 0;            
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;   
    margin-left: 5%; 
              
}

.software__icons img {
    width: 50px;  
}

.software__item {
  display:flex;
  align-items:center;
  gap:1rem;
  font-family: 'Candara', sans-serif;
  color:#fff;
 
}

.software__item img {
  width: 60px;              

}

.software__item:hover {
    transform: scale(1.3);
    transition: transform 0.3s ease;
}

.me {
    position: fixed;
    top: 50%;
    margin-left: 2.5%;
    transform: translateY(-50%);
}


.profile-pic {
    position: fixed;
    top: 50%;
    margin-left: 5%;
    transform: translateY(-50%);
    width: 580px;
    height: 580px;
    background-color: white;
    border-radius: 50%;
    border: 4px solid  rgb(150, 28, 69);
  }

p {
    
    font-size: 27px;
     font-family: 'Candara', sans-serif;
    color: white;
    text-align: justify;

  }

  span {

    font-family: 'Candara', sans-serif;
    font-size: 20px;
  }

.box {
    position: fixed;
    top: 55%;
    margin-left: 40%;
    transform: translateY(-50%);
    width: 500px; 
    height: 350px;
    background-color:rgb(150, 28, 69);
    border: 5px solid #ffffff;
    border-radius: 4px;
    padding: 40px;
    border-radius: 25px;

    }

.page-bg{ 
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(255, 249, 249);
    z-index: -10; 
}
</style>