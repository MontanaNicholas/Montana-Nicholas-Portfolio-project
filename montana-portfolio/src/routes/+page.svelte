<script>

import { base } from '$app/paths';
import { onMount } from 'svelte';
import { browser } from '$app/environment';

 
  onMount(async () => {
  console.log("Home Page Loaded");
  });


</script>

<div class="page-bg"></div>
<div class="portfolio"><img src="{base}/portfolio3.png" alt="portfolio" width="1200" height="150" ></div>

<div class="profile-pic">
<div class="cat"><img src="{base}/spin.gif" alt="cat"width="580" height="580" ></div>
</div>


<div class="parallax parallax--fast"></div>

  <div class="portfolio-text">
    <span class="typewriter">WEB DESIGN - DIGITAL ART - CONCEPT ART.....</span>
  </div>

  <button class="about">ABOUT ME</button>
  <a href="{base}/about" class="about">ABOUT ME</a>

<style>

@keyframes typing {
  from { width: 0 }
  to { width: 190% }
}

@keyframes blink {
  50% { border-color: transparent; }
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


  .portfolio-text {
    text-align: center;
    max-width: 600px;
  }

  .typewriter {
    position: fixed;
    font-weight: bold;
    font-family: 'Candara', sans-serif;
    font-size: 30px;
    top: 55%;
    margin-left: 15%;
    color: rgb(105, 8, 49);
    overflow: hidden;
    white-space: nowrap;
    animation: typing 5s steps(40, end), blink 0.5s step-end infinite;
    border-right: 2px solid #600020;
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
    background-color:  rgb(255, 248, 246);
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
  font-family: 'Candara', sans-serif;
  font-size: 25px;
  background: rgb(150, 28, 69);
  border: 4px solid #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none; 
  display: inline-block;
  text-align: center;
}

.about:hover {
  background: #f81c5e;
  box-shadow: 2px 2px 0 #003838;
}
  
</style>