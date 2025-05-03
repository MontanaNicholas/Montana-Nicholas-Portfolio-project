<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  onMount(() => {
    console.log("Home Page Loaded");
  });
</script>

<div class="page-bg"></div>

<div class="parallax parallax--fast"></div>

<div class="body-container">
  <div class="profile-pic">
    <div class="cat">
      <img src="{base}/spin.gif" alt="cat" width="580" height="580" />
    </div>
  </div>

  <div class="portfolio">
    <img src="{base}/portfolio3.png" alt="portfolio" />
  </div>

  <div class="portfolio-text">
    <span class="typewriter">WEB DESIGN - DIGITAL ART - CONCEPT ART.....</span>
  </div>

  <a href="{base}/about" class="about">ABOUT ME</a>
</div>

<style>
  :global(html, body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}

  .page-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(255, 248, 246);
    z-index: -2;
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
    from { background-position: 0 0; }
    to { background-position: -2048px 0; }
  }

  .body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }

  .portfolio {
    width: 60%;
    max-width: 1200px;
  }

  .portfolio img {
    width: 100%;
    height: auto;
  }

  .profile-pic {
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background-color: rgb(255, 248, 246);
    border: 4px solid rgb(150, 28, 69);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cat img {
    width: 100%;
    height: auto;
    max-width: 580px;
  }

  .portfolio-text {
    text-align: center;
    max-width: 90%;
  }

  .typewriter {
    font-weight: bold;
    font-family: 'Candara', sans-serif;
    font-size: 30px;
    color: rgb(105, 8, 49);
    overflow: hidden;
    white-space: nowrap;
    animation: typing 5s steps(40, end), blink 0.5s step-end infinite;
    border-right: 2px solid #600020;
    display: inline-block;
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 550%; }
  }

  @keyframes blink {
    50% { border-color: transparent; }
  }

  .about {
    font-family: 'Candara', sans-serif;
    font-size: 25px;
    background: rgb(150, 28, 69);
    border: 4px solid #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    transition: background 0.3s ease, box-shadow 0.3s ease;
  }

  .about:hover {
    background: #f81c5e;
    box-shadow: 2px 2px 0 #003838;
  }

  /* Responsive Fixes */
  @media (max-width: 768px) {
    .profile-pic {
      width: 300px;
      height: 300px;
    }

    .cat img {
      max-width: 100%;
    }

    .typewriter {
      font-size: 20px;
      width: 100%;
      text-align: center;
      border-right: 1px solid #600020;
    }

    .about {
      font-size: 20px;
      padding: 0.5rem 1rem;
    }

    .portfolio {
      width: 90%;
    }
  }
</style>