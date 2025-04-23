<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    })
</script>

<div class="profile-pic">
    <div class="me"><img src="me.png" alt="me"width="550" height="550" ></div>
</div>

    <div class="box">
   
    <p> Hi! My name is Montana Nicholas. I was born in Zimbabwe, and am now living in Ireland. I am currently a student at SETU Carlow studying Interactive Digital Art and Design.</p>

    <b> 
    <p> I am looking to find a career around Digital Art (2D, 3D or Pixel), Concept Art, Comic-Book Art, Animation, Graphic Design etc.</p>
    </b>
    
    </div>

    <div class="details">

        <section class="software">
        <div class="pic"><img src="sodtware-title.png" alt="software" width="150" height="30"></div>
          
            <ul class="software__icons">
              <li><img src="krita.png"   alt="Krita"  /></li>
              <li><img src="blender.png" alt="Blender"/></li>
              <li><img src="aseprite.png" alt="Aseprite"/></li>
            </ul>
          </section>
        
        </div>

    <div class="about"><img src="about.png" alt="about" width="500" height="60" ></div>


    <div class="person"><img src="cartoon-me.png" alt="person" width="270" height="580" ></div>

<div class="page-bg"></div>



<style>

    .about {
    width: 60%;
    position: fixed;
    top: 25%;
    margin-left: 35%;
    transform: translateY(-50%);
}

.person {
    position: fixed;
    top: 55%;
    margin-left: 80%;
    transform: translateY(-50%);
}

.details {
    position: fixed;
    top: 55%;
    margin-left: 40%;
    transform: translateY(-50%);
    width: 100px; 
    height: 350px;
    background-color: rgb(150, 28, 69);
    border-radius: 4px;
    padding: 40px;
    border-radius: 25px;

}

.software {
  display: flex;
  flex-direction: column;
  align-items: center;         
  height: 100vh;               
}

.software__icons {
  list-style: none;
  padding: 0;
  margin: 3rem 0 0;            
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;                
}

.software__icons img {
  width: 65px;                 
  image-rendering: pixelated;
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

  p{
    font-weight: bold;
    font-size: 27px;
    font-family: 'Press Start 2P';
    color: white;
    text-align: justify;

  }

  .box {

    position: fixed;
    top: 55%;
    margin-left: 50%;
    transform: translateY(-50%);
    width: 500px; 
    height: 350px;
    background-color: rgb(150, 28, 69);
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