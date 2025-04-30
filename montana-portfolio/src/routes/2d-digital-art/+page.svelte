<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("3d digital art Page Loaded");
    })
</script>

<div class="page-bg"></div>

<div class="page-bg"></div>

<div class="header">
    <img src="2d-digital-art.png" alt="2d-digital-art" width="500" height="60">
</div>

<div class="single-card">
    <div class="card">
        <img src="rats.png" alt="Character Design Concept Art" class="project-image">
        <div class="card-text">
            <h2>RECYCLING RATS CONCEPT ART</h2>
            <p>This is Concept Art we were asked to create for 4th Year Game Development students, for a game called "Recycling Rats", which is a 2D and 3D digital art brawler game, where rats build vehicles and weapons and fight to the death for ownership of the fridge.</p>
            <p><strong>Art Software:</strong> Krita</p>
        </div>
    </div>
</div>


<div class="card-grid">
    <div class="card">
        <img src="megan.png" alt="megan" class="project-image">
        <div class="card-text">
            <p><strong>Art Software:</strong> Krita</p>
        </div>
    </div>

    <div class="card">
        <img src="vit.png" alt="vit" class="project-image">
        <div class="card-text">
            <p><strong>Art Software:</strong> Krita</p>
        </div>
    </div>

    <div class="card">
        <img src="background.png" alt="background" class="project-image">
        <div class="card-text">
            <p><strong>Art Software:</strong> Krita</p>
        </div>
    </div>

    <div class="card">
        <img src="sean progress.png" alt="sean" class="project-image">
        <div class="card-text">
            <p><strong>Art Software:</strong> Krita</p>
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

.single-card {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
    padding: 0 40px 100px;
    justify-items: center;
}

.card {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 3px solid rgb(150, 28, 69);
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.project-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.card-text {
    background-color: rgb(150, 28, 69);
    color: white;
    padding: 20px;
    font-family: Candara;
    text-align: center;
}

.card-text h2 {
    font-size: 30px;
    margin-bottom: 10px;
    font-family: Candara;
}

.card-text p {
    font-size: 22px;
    text-align: justify;
    margin-top: 0;
    font-family: Candara;
}

</style>
