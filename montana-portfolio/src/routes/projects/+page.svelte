<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Projects Page Loaded");
    })
</script>



<div class="page-bg"></div>

<div class="header">
    <img src="project.png" alt="project" width="500" height="60">
</div>

<div class="button-container">
    <div class="button-grid">
      <a href="/game-design" class="project-button">GAME DESIGN</a>
      <a href="/pixel-art" class="project-button">PIXEL ART</a>
      <a href="/2d-digital-art" class="project-button">2D DIGITAL ART</a>
      <a href="/web-design" class="project-button">WEB DESIGN</a>
      <a href="/3d-digital-art" class="project-button">3D DIGITAL ART</a>
      <a href="/handmade-crafts" class="project-button">HANDMADE CRAFTS</a>
    </div>
  </div>

<div class="parallax parallax--fast"></div>

<style>



.button-container {
    background-color: rgb(150, 28, 69);
    padding: 40px;
    width: 700px;
    margin: 0 auto;
    margin-top: 100px; 
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 45px 65px; 
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
    width: 220px; 
    border-radius: 10px;
    text-decoration: none;
    transition: transform 0.2s, background-color 0.2s;
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
</style>