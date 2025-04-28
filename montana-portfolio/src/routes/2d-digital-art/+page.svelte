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

<div class="grid">

    <div class="card">
        <img src="rats.png" alt="Character Design Concept Art" class="project-image">
        <div class="card-text">
            <h2>RECYCLING RATS CONCEPT ART</h2>
            <p> This is Concept Art we were asked to create for 4th Year Game Development students, for a game called "Recycling Rats", which is a 2D and 3D digital art brawler game, where rats build vehicles and weapons and fight to the death for ownership of the fridge. </p>
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

.grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px; /* CHANGE this from 40px to 0px */
    margin-top: 20px; /* Optional: make this smaller too */
    padding-bottom: 50px; /* Optional: less space at bottom */
}

.card {
    display: flex;
    background-color: white;
    border-left: 3px solid rgb(150, 28, 69);
    border-right: 3px solid rgb(150, 28, 69);
    border-top: 0;
    border-bottom: 0;
    border-radius: 0; /* No curves so they stack flush */
    overflow: hidden;
    max-width: 1000px;
    width: 90%;
    box-shadow: none; /* Optional: remove shadows if you want them glued */
}

.card:first-child {
    border-top: 3px solid rgb(150, 28, 69);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.card:last-child {
    border-bottom: 3px solid rgb(150, 28, 69);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

/* Project Image */
.project-image {
    width: 60%;
    object-fit: cover;
}

/* Text next to Image */
.card-text {
    background-color: rgb(150, 28, 69);
    color: white;
    padding: 20px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Candara;
    text-align: center;
}

.card-text h2 {
    font-size: 30px;
    margin-bottom: 10px;
}

.card-text p {
    font-size: 25px;
    text-align:justify;
}
</style>