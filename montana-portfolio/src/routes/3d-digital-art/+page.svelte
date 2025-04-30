<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("3d digital art Page Loaded");
    });
</script>

<div class="page-bg"></div>

<div class="header">
    <img src="3d-digital-art.png" alt="3d digital art" width="500" height="60">
</div>

<div class="gallery-grid">
    <div class="card">
        <img src="3D-fridge.png" alt="fridge" class="project-image">
        <div class="card-text">
            
        </div>
    </div>

    <div class="card">
        <img src="3D-fridge2.png" alt="fridge" class="project-image">
        <div class="card-text">
            
        </div>
    </div>

    <div class="card">
        <img src="3D-fridge3.png" alt="fridge" class="project-image">
        <div class="card-text">
           
        </div>
    </div>

    <div class="card">
        <img src="3D-fridge4.png" alt="fridge" class="project-image">
        <div class="card-text">

        </div>
    </div>

    <div class="card">
        <img src="3d-fridge5.png" alt="fridge" class="project-image">
        <div class="card-text">
            
        </div>
    </div>

    <div class="card">
        <img src="3D-fridge6.png" alt="fridge" class="project-image">
        <div class="card-text">
          
        </div>
    </div>
</div>

<div class="parallax parallax--fast"></div>

<style>

.header {
    text-align: center;
    margin-top: 40px;
}


.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
}

.project-image {
    width: 100%;
    height: 400px; 
    object-fit: cover;
    display: block;
}


.card-text {
    background-color: rgb(150, 28, 69);
    color: white;
    padding: 15px;
    text-align: center;
    font-family: Candara;
}



.parallax {
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: url('/sparkle.png') repeat;
    animation: slide 60s linear infinite;
    opacity: 0.15;
    z-index: -1;
}

.parallax--fast {
    animation-duration: 30s;
    opacity: 0.25;
}

@keyframes slide {
    from {
        background-position: 0 0;
    }
    to {
        background-position: -2048px 0;
    }
}

.page-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(255, 248, 246);
    z-index: -1;
}
</style>
