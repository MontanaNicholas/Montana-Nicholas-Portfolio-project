<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("web design page Page Loaded");
    })
</script>

<div class="page-bg"></div>

<div class="header">
    <img src="web-design.png" alt="web Design" width="500" height="60">
</div>

<div class="grid">
    
    <div class="card">
        <div class="card-section">
            <h3 class="section-title">MEDIUM FIDELITY PROTOTYPE</h3>
            <img src="board1.png" alt="board1" class="project-image">
        </div>

        <div class="card-section">
            <h3 class="section-title">HIGH FIDELITY PROTOTYPE</h3>
            <img src="board4.png" alt="board4" class="project-image">
        </div>
    </div>

    <div class="section-description">
        <p>Here I have Medium Fidelity and High Fidelity Prototypes I made to prepare for my portfolio website. I took some inspiration from other websites, to help me get an idea of layout, colour etc. I made sure to keep consistent with font, colour, spacing and overall design throughout the whole wesbite to ensure a appealing visual. I also incorporated a lot of my own designs, such as images/font used for titles, the logo, moving background etc to showcase some originality rigth at the get go.</p>
    </div>

    
    <div class="card">
        <div class="card-section">
            <h3 class="section-title">MEDIUM FIDELITY PROTOTYPE</h3>
            <img src="board2.png" alt="board2" class="project-image">
        </div>

        <div class="card-section">
            <h3 class="section-title">HIGH FIDELITY PROTOTYPE</h3>
            <img src="board5.png" alt="board5" class="project-image">
        </div>
    </div>

</div>

<div class="parallax parallax--fast"></div>

<style>

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

.header {
    text-align: center;
    margin-top: 40px;
}

.grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px; 
    margin-top: 20px; 
    padding-bottom: 50px;
}

.card {
    display: flex;
    background-color:rgb(150, 28, 69);
    border-left: 3px solid rgb(150, 28, 69);
    border-right: 3px solid rgb(150, 28, 69);
    border-top: 0;
    border-bottom: 0;
    border-radius: 0;
    overflow: hidden;
    max-width: 1300px;
    width: 90%;
    box-shadow: none;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
}

.card-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}


.section-description {
    margin: 50px 0;
    max-width: 1000px;
    width: 80%;
    font-size: 22px;
    text-align: justify;
    color: rgb(90, 20, 40);
    font-family: 'Candara', sans-serif;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.8); 
    border: 3px solid rgb(150, 28, 69); 
    border-radius: 20px; 
    box-shadow: 0 0 15px rgba(150, 28, 69, 0.8); 
    animation: pulse 3s infinite alternate, fadeInUp 1.5s ease forwards;
    opacity: 0;
    transform: translateY(20px);
}

/* Glow Pulse Animation */
@keyframes pulse {
    0% { box-shadow: 0 0 10px rgba(150, 28, 69, 0.5); }
    100% { box-shadow: 0 0 20px rgba(150, 28, 69, 1); }
}


@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


.section-title {
    font-family: 'Candara', sans-serif; 
    font-size: 32px;
    margin-bottom: 10px;
    color: rgb(255, 255, 255); 
    text-align: center;
    font-weight: bold; 
    letter-spacing: 1px;
}

.project-image {
    width: 100%;
    height: auto; 
    object-fit: cover;
}

</style>