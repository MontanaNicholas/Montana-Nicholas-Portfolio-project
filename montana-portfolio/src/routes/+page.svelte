<script>
    import { onMount } from 'svelte';
  import { browser } from '$app/environment';

 
  onMount(async () => {
  console.log("Home Page Loaded");
  });

</script>

<div class="page-bg"></div>
<div class="portfolio"><img src="portfolio.png" alt="portfolio" width="1200" height="150" ></div>




<div class="profile-pic">
<div class="cat"><img src="spin.gif" alt="cat"width="580" height="580" ></div>
</div>

  <div class="portfolio-text">
    <p>GRAPHIC DESIGN - DIGITAL ART - CONCEPT ART</p>
  </div>

  <button class="about">ABOUT ME</button>
  <a href="/about" class="about">ABOUT ME</a>


<!-- FONTS -->
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

<style>


  .portfolio-text {
    text-align: center;
    max-width: 600px;
  }

  p {
    position: fixed;
    font-weight: bold;
    font-size: 20px;
    top: 55%;
    margin-left: 30%;
    font-family: 'Press Start 2P';
    color: rgb(105, 8, 49);
  }


.portfolio {
    width: 60%;
    position: fixed;
    top: 45%;
    margin-left: 30%;
    transform: translateY(-50%);
}


.cat {
    position: fixed;
    top: 50%;
    margin-left: -15%;
    transform: translateY(-50%);
}

.profile-pic {
    position: fixed;
    top: 45%;
    margin-left: 0%;
    transform: translateY(-50%);
    width: 450px;
    height: 450px;
    border-radius: 50%;
    border: 4px solid rgb(150, 28, 69);
  }
.page-bg{ 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color:  rgb(255, 248, 246);
    z-index: -1; 
}

.about {
  position: fixed;
  top: 75%;
  margin-left: -42%;
  font-family: 'Press Start 2P', cursive;
  font-size: 25px;
  background: rgb(150, 28, 69);
  border: 4px solid #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none; /* removes the underline */
  display: inline-block;
  text-align: center;
}

.about:hover {
  background: #0ba7b3;
  box-shadow: 2px 2px 0 #003838;
}
  
</style>