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
        <img src="megan.png" alt="Character Design" class="project-image">
    </div>

    <div class="card">
        <img src="megan.png" alt="Enemy Concept" class="project-image">
    </div>

    <div class="card">
        <img src="megan.png" alt="Fight Concept" class="project-image">
    </div>

    <div class="card">
        <img src="megan.png" alt="Another Concept" class="project-image">
    </div>
</div>

<div class="parallax parallax--fast"></div>


<style>

.grid-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
    gap: 40px; /* Space between cards */
    padding: 60px;
    justify-items: center; /* Center cards */
}

.card {
    background-color: white;
    border: 3px solid rgb(150, 28, 69);
    border-radius: 20px;
    overflow: hidden;
    width: 90%; /* Control width inside the grid cell */
    max-width: 500px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.project-image {
    width: 100%;
    height: 600px; /* Fixed height for consistent layout */
    object-fit: cover;
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