<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("handmade crafts Page Loaded");
    })
</script>

<div class="page-bg"></div>

<div class="header">
    <img src="handmade-crafts.png" alt="handmade crafts" width="500" height="120">
</div>

<div class="grid-gallery">
    <div class="card">
        <img src="blueberry.jpg" alt="blueberry" class="project-image">
    </div>

    <div class="card">
        <img src="cherry.jpg" alt="cherry " class="project-image">
    </div>

    <div class="card">
        <img src="chili.jpg" alt="chili" class="project-image">
    </div>

    <div class="card">
        <img src="lemon.jpg" alt="lemon" class="project-image">
    </div>

    <div class="card">
        <img src="donut.jpg" alt="donut" class="project-image">
    </div>

    <div class="card">
        <img src="croissant.jpg" alt="croissant" class="project-image">
    </div>

    <div class="card">
        <img src="waffle.jpg" alt="waffle" class="project-image">
    </div>

    <div class="card">
        <img src="hotdog.jpg" alt="hotdog" class="project-image">
    </div>

    <div class="card">
        <img src="lilypadp.jpg" alt="lilypad " class="project-image">
    </div>

    <div class="card">
        <img src="choc-cake.jpg" alt="cake" class="project-image">
    </div>

    <div class="card">
        <img src="lilypadw.jpg" alt="lilypad" class="project-image">
    </div>

    <div class="card">
        <img src="candycane.jpg" alt="candycane" class="project-image">
    </div>

</div>

<div class="parallax parallax--fast"></div>


<style>

.grid-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 40px;
    padding: 60px;
    justify-items: center; 
}

.card {
    background-color: white;
    border: 3px solid rgb(150, 28, 69);
    border-radius: 20px;
    overflow: hidden;
    width: 90%; 
    max-width: 350px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.project-image {
    width: 100%;
    max-height: 400px; /* adjust as needed */
    object-fit: contain;
    display: block;
    padding: 10px; /* optional, adds spacing inside the card */
    box-sizing: border-box;
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