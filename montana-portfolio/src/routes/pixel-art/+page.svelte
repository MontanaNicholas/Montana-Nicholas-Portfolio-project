<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
    onMount(() => {
        console.log("Pixel Art page Page Loaded");
    })
</script>

<div class="page-bg"></div>

<div class="header">
    <img src="{base}/pixel-art.png" alt="Pixel Art" width="500" height="60">
</div>

<div class="gif-gallery">
   
    <div class="gif-row">
        <div class="gif-card"><img src="{base}/player_walk.gif" alt="walk"><p>Walk</p></div>
        <div class="gif-card"><img src="{base}/player_idle.gif" alt="idle"><p>Idle</p></div>
        <div class="gif-card"><img src="{base}/player_shoot.gif" alt="shoot"><p>Shoot</p></div>
        <div class="gif-card"><img src="{base}/player_expire.gif" alt="expire"><p>Expire</p></div>
    </div>

    <div class="gif-row">
        <div class="gif-card"><img src="{base}/flyEnemy_fly.gif" alt="fly"><p>Fly Enemy</p></div>
        <div class="gif-card"><img src="{base}/flyEnemy_expire.gif" alt="enemy expire"><p>Enemy Expire</p></div>
        <div class="gif-card"><img src="{base}/fly_idle.gif" alt="idle 2"><p>Fly Idle</p></div>
    </div>

    <div class="gif-row single">
        <div class="gif-card small">
            <img src="{base}/bounce.gif" alt="bounce">
            <p>Bounce</p>
        </div>
    </div>
    </div>

<div class="parallax parallax--fast"></div>


<style>

.header {
    text-align: center;
    margin-top: 40px;
}

.gif-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 40px 20px;
}

.gif-row {
    display: grid;
    gap: 24px;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
}

.gif-row:nth-child(1) {
    grid-template-columns: repeat(4, 1fr);
}

.gif-row:nth-child(2) {
    grid-template-columns: repeat(3, 1fr);
}

.gif-row.single {
    display: flex;
    justify-content: center;
}

.gif-card.small {
    max-width: 220px; 
    width: 100%;
    
}

.gif-card {
    background: #fff;
    border: 3px solid rgb(150, 28, 69);
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    padding: 16px;
    text-align: center;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.gif-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.gif-card img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
}

.gif-card p {
    font-size: 16px;
    font-weight: 500;
    color: #444;
    margin: 0;
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