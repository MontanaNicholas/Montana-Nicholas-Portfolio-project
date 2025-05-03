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
        console.log("Game design Page Loaded");
    })
</script>


<div class="page-bg"></div>

<div class="header">
    <img src="{base}/game-design.png" alt="Game Design" width="500" height="60">
</div>

<button on:click={goBack} class="back-button">
    ⬅ Go Back
</button>
<div class="body-container">
<div class="grid">
    
    <div class="card">
        <img src="{base}/my-plant.png" alt="My Plant" class="project-image">
        <div class="card-text">
            <h2>My Plant</h2>
            <p>This was a group project game called "My Plant". The objective was to take care of a plant, helping it grow and keeping it from dying by feeding it plant feeder, water and sunlight!</p>
            <p><strong>Art Software:</strong> Aseprite<br><strong>Code Software:</strong> Visual Studio/SFML</p>
        </div>
    </div>

    <div class="card">
        <img src="{base}/fly-catcher.png" alt="Fly Catcher" class="project-image">
        <div class="card-text">
            <h2>Fly Catcher</h2>
            <p>This game was called "Fly Catcher". The objective was to catch as many flies as you can by rotating the frog and shooting its tongue out.</p>
            <p><strong>Art Software:</strong> Aseprite<br><strong>Code Software:</strong> Visual Studio/SFML</p>
        </div>
    </div>

    
    <div class="card">
        <img src="{base}/jungle.png" alt="jungle" class="project-image">
        <div class="card-text">
            <h2>Jungle Explorer</h2>
            <p>This game was called "Jungle Explorer". The objective was to navigate through the 'jungle', avoiding enemies, to make it to the other side, which will lead the player to a 'level 2' ground. </p>
            <p><strong>Art Software:</strong> Aseprite<br><strong>Code Software:</strong> Visual Studio/SFML</p>
        </div>
    </div>

    <div class="card">
        <img src="{base}/frog.png" alt="frog" class="project-image">
        <div class="card-text">
            <h2>Lilypad Loot</h2>
            <p>This game was called "Lilypad Loot". The objective was to navigate across the river to reach the other side, while collecting coins and avoiding the rocks. Hitting a rock would cause the player to lose health (health bar displayed at the top of the screen) and collecting coins would add to the players 'score'. The joystick feature also made it playable on mobile devices.</p>
            <p><strong>Art Software:</strong> Aseprite<br><strong>Code Software:</strong> Visual Studio/SFML</p>
        </div>
    </div>
</div>
</div>

<div class="parallax parallax--fast"></div>



<style>
.page-bg { 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(255, 248, 246);
    z-index: -1;
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


.parallax {
  position: fixed; inset: 0; pointer-events: none;
  background: url('/sparkle.png') repeat;
  animation: slide 60s linear infinite;
  opacity: .15;
  z-index: -1; 
}
.parallax--fast { animation-duration: 30s; opacity:.25; }
@keyframes slide { from{background-position:0 0} to{background-position:-2048px 0} }


.header {
    text-align: center;
    margin-top: 40px;
}


.grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 60px;
    padding-bottom: 100px;
}

.card {
    display: flex;
    background-color: white;
    border: 3px solid rgb(150, 28, 69);
    border-radius: 20px;
    overflow: hidden;
    max-width: 1200px;
    width: 90%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
}


.project-image {
  width: 50%;
  height: auto;
  object-fit: contain; 
}

.card-text {
    background-color: rgb(150, 28, 69);
    color: white;
    padding: 30px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Candara;
}

.card-text h2 {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-size: 30px;
    margin-bottom: 10px;
    font-family: Candara;
}

.card-text p {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-size: 25px;
    text-align:justify;
    margin-top: 0;
    font-family: Candara;
    
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

  .grid {
    width: 100%;
    max-width: 90%;
    padding: 20px;
  }

  .card {
    flex-direction: column;
    width: 100%;
  }

  .project-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}
  .card-text {
    width: 100%;
    padding: 20px;
    font-size: 16px;
  }

  .card-text h2 {
    font-size: 24px;
    text-align: center;
  }

  .card-text p {
    font-size: 18px;
  }

  .back-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

</style>
