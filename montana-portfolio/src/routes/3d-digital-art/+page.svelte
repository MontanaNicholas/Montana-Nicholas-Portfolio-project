<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
  
    function goBack() {
      if (history.length > 1) {
        history.back();
      } else {
        window.location.href = '/';
      }
    }
  
    onMount(() => {
      console.log("3D Digital Art Page Loaded");
    });
  </script>
  
  <div class="page-bg"></div>
  
  <div class="header">
    <img src="{base}/3d-digital-art.png" alt="3d digital art" width="500" height="60" />
  </div>
  
  <button on:click={goBack} class="back-button">
    ⬅ Go Back
  </button>
  
  <div class="gallery-grid">
    <div class="card">
      <img src="{base}/3D-fridge.png" alt="fridge" class="project-image" />
      <div class="card-text"></div>
    </div>
  
    <div class="card">
      <img src="{base}/3D-fridge2.png" alt="fridge" class="project-image" />
      <div class="card-text"></div>
    </div>
  
    <div class="card">
      <img src="{base}/3D-fridge3.png" alt="fridge" class="project-image" />
      <div class="card-text"></div>
    </div>
  
    <div class="card">
      <img src="{base}/3d-fridge5.png" alt="fridge" class="project-image" />
      <div class="card-text"></div>
    </div>
  
    <div class="card">
      <img src="{base}/3D-fridge4.png" alt="fridge" class="project-image" />
      <div class="card-text"></div>
    </div>
  
    <div class="card">
      <img src="{base}/3D-fridge6.png" alt="fridge" class="project-image" />
      <div class="card-text"></div>
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
  
    .header {
      text-align: center;
      margin-top: 40px;
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
  
    /* Responsive behavior */
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: 1fr;
        padding: 20px;
        width: 100%;
      }
  
      .card {
        width: 100%;
      }
  
      .project-image {
        height: auto;
        object-fit: contain;
      }
  
      .card-text {
        font-size: 16px;
        padding: 20px;
      }
  
      .header img {
        width: 100%;
        max-width: 90%;
        height: auto;
      }
  
      .back-button {
        font-size: 0.9rem;
        padding: 8px 16px;
      }
    }
  </style>