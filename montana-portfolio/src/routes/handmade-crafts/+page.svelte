<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  function goBack() {
    if (history.length > 1) {
      history.back();
    } else {
      // fallback route if no history
      window.location.href = '/';
    }
  }


    onMount(() => {
        console.log("handmade crafts Page Loaded");
    })
</script>

<div class="page-bg"></div>

<div class="header">
    <img src="{base}/handmade-crafts.png" alt="handmade crafts" width="500" height="120">
</div>

<button on:click={goBack} class="back-button">
    ⬅ Go Back
</button>

<div class="grid-gallery">
    <div class="card">
        <img src="{base}/blueberry.jpg" alt="blueberry" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/cherry.jpg" alt="cherry " class="project-image">
    </div>

    <div class="card">
        <img src="{base}/chili.jpg" alt="chili" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/lemon.jpg" alt="lemon" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/donut.jpg" alt="donut" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/croissant.jpg" alt="croissant" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/waffle.jpg" alt="waffle" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/hotdog.jpg" alt="hotdog" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/lilypadp.jpg" alt="lilypad " class="project-image">
    </div>

    <div class="card">
        <img src="{base}/choc-cake.jpg" alt="cake" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/lilypadw.jpg" alt="lilypad" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/candycane.jpg" alt="candycane" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/orange.jpg" alt="oraneg" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/pumpkin.jpg" alt="pumpkin" class="project-image">
    </div>

    <div class="card">
        <img src="{base}/cake.jpg" alt="cake" class="project-image">
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

.back-button {
    padding: 10px 20px;
    background-color: #961c45;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 20px;
  }

  .back-button:hover {
    background-color: #7a1738;
  }


.card {

  background-color: white;
  border: 3px solid rgb(150, 28, 69);
  border-radius: 20px;
  overflow: hidden;
  width: 90%;
  max-width: 280px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  /* Animation */
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
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


@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }
.card:nth-child(5) { animation-delay: 0.5s; }
.card:nth-child(6) { animation-delay: 0.6s; }
.card:nth-child(7) { animation-delay: 0.7s; }
.card:nth-child(8) { animation-delay: 0.8s; }
.card:nth-child(9) { animation-delay: 0.9s; }
.card:nth-child(10) { animation-delay: 1.0s; }
.card:nth-child(11) { animation-delay: 1.1s; }
.card:nth-child(12) { animation-delay: 1.2s; }
.card:nth-child(13) { animation-delay: 1.3s; }
.card:nth-child(14) { animation-delay: 1.4s; }
.card:nth-child(15) { animation-delay: 1.5s; }



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