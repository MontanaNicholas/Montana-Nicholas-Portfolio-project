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
        console.log("3d digital art Page Loaded");
    })
</script>

<div class="page-bg"></div>


<div class="header">
    <img src="{base}/2d-digital-art.png" alt="2d-digital-art" width="500" height="60">
</div>

<button on:click={goBack} class="back-button">
  ⬅ Go Back
</button>

<div class="gallery-grid">

    <div class="card" style="grid-area: rats;">
      <img src="{base}/rats.png" alt="Recycling Rats Concept Art" class="project-image">
      <div class="card-text">
        <h2>RECYCLING RATS CONCEPT ART</h2>
        <p>This is Concept Art we were asked to create for 4th Year Game Development students, for a game called "Recycling Rats", which is a 2D and 3D digital art brawler game, where rats build vehicles and weapons and fight to the death for ownership of the fridge.</p>
        
        <br><h3><strong>Art Software Used:</strong> Krita</h3><br>
     
      </div>
    </div>
  
    <div class="card card--vit" style="grid-area: vit;">
      <img src="{base}/vit.png" alt="vit" class="project-image">
      <div class="card-text">
        <h3><strong>Art Software Used:</strong> Krita</h3>
      </div>
    </div>
  
    <div class="card card--megan" style="grid-area: megan;">
      <img src="{base}/megan.png" alt="megan" class="project-image">
      <div class="card-text">
        <h3><strong>Art Software Used:</strong> Krita</h3>
      </div>
    </div>
  
      
    <div class="card" style="grid-area: sean;">
        <img src="{base}/sean progress.png" alt="sean" class="project-image">
        <div class="card-text">
            <p>-Unfinished-</p>
          <h3><strong>Art Software Used:</strong> Krita</h3>
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
.parallax--fast { animation-duration: 30s; opacity: .25; }
@keyframes slide { from { background-position: 0 0 } to { background-position: -2048px 0 } }

.header {
    text-align: center;
    margin-top: 40px;
}


.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "rats rats vit"
    "rats rats megan"
    "sean sean background";
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.card {
  background-color: white;
  border: 3px solid rgb(150, 28, 69);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
}


.card--megan {
  height: 500px; 
}

.card--megan .project-image {
  height: 100%;    
  object-fit: cover;
}

.card--megan .card-text {
  height: 30%;   
  padding: 10px;
}

.card--vit {
  height: 650px; 
}

.card--vit .project-image {
  height: 100%;    
  object-fit: cover;
}

.card--vit .card-text {
  height: 30%;   
  padding: 10px;
}


.project-image {
  width: 100%;
  display: block;
}

.card-text {
  background-color: rgb(150, 28, 69);
  color: white;
  padding: 15px;
  text-align: center;
  font-family: Candara;
}

.card-text p {
  margin: 0;
  font-size: 20px;
  text-align: justify;
}

.card-text h3 {
  margin: 0;
  text-align: justify;
}

.card-text h2 {
  margin: 0 0 10px 0;
  font-size: 20px;
  text-align: center;
}

</style>
