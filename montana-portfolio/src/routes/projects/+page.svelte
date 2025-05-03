<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

    onMount(() => {
        console.log("Projects Page Loaded");
    })
</script>



<div class="page-bg"></div>

<div class="header">
    <img src="{base}/project.png" alt="project" width="500" height="60">
</div>
<div class="body-container">
<div class="button-container">
    <div class="button-grid">
      <a href="{base}/game-design" class="project-button">GAME DESIGN</a>
      <a href="{base}/pixel-art" class="project-button">PIXEL ART</a>
      <a href="{base}/2d-digital-art" class="project-button">2D DIGITAL ART</a>
      <a href="{base}/web-design" class="project-button">WEB DESIGN</a>
      <a href="{base}/3d-digital-art" class="project-button">3D DIGITAL ART</a>
      <a href="{base}/handmade-crafts" class="project-button">HANDMADE CRAFTS</a>
    </div>
  </div>
</div>

<div class="parallax parallax--fast"></div>

<style>



.button-container {
    background-color: rgb(150, 28, 69);
    padding: 40px;
    width: 600px;
    margin: 0 auto;
    margin-top: 100px; 
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.body-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 2rem;
    margin-top: -2rem; 
  }

.button-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 3rem; 
}

.project-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: rgb(150, 28, 69);
    font-weight: bold;
    font-size: 25px;
    font-family: Candara;
    padding: 15px;
    height: 60px;
    width: 200px; 
    border-radius: 10px;
    text-decoration: none;
    transition: transform 0.2s, background-color 0.2s;
    box-shadow: 5px 4px 0 #3d0317;
}

.project-button:hover {
    transform: scale(1.05);
    background-color: #ffe4ec;

    
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


.page-bg{ 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color:  rgb(255, 248, 246);
    z-index: -1; 
}

@media (max-width: 768px) {
  .body-container {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
  }

  .header img {
    width: 100%;
    max-width: 90%;
    height: auto;
  }

  .button-container {
    width: 100%;
    max-width: 90%;
    padding: 20px;
  }

  .button-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-button {
    width: 100%;
    font-size: 20px;
    padding: 12px;
  }
}
</style>