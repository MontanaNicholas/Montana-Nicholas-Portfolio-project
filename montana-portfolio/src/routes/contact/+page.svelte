<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  onMount(() => {
    console.log("Contact Page Loaded");
  });
</script>

<div class="page-bg"></div>

<div class="body-container">
  <div class="details">
    <section class="contact">
      <div class="pic">
        <img src="{base}/contact-title.png" alt="contact" />
      </div>

      <ul class="contact__icons">
        <li class="contact__item">
          <img src="{base}/instagram.png" alt="instagram" />
          <a href="https://www.instagram.com/_tiny__things" target="_blank" rel="noopener">_tiny__things</a>
        </li>
        <li class="contact__item">
          <img src="{base}/mail.png" alt="mail" />
          <span>Mn171204@gmail.com</span>
        </li>
        <li class="contact__item">
          <img src="{base}/call.png" alt="Call" />
          <span>0858628356</span>
        </li>
        <li class="contact__item">
          <img src="{base}/linkedin.png" alt="linkedin" />
          <span>Montana Nicholas</span>
        </li>
      </ul>
    </section>
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
    margin-top: 5rem; 
  }
  .details {
    width: 100%;
    max-width: 550px;
    background-color: rgb(150, 28, 69);
    border: 5px solid #ffffff;
    border-radius: 25px;
    padding: 40px;
    box-sizing: border-box;
  }

  .contact .pic img {
    width: 100%;
    max-width: 350px;
    height: auto;
  }

  .contact__icons {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .contact__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: Candara, sans-serif;
    font-size: 25px;
    color: #fff;
    text-shadow: 0 2px #000;
  }

  .contact__item img {
    width: 50px;
  }

  .contact__item a {
    color: #fff;
    text-decoration: none;
  }

  .contact__item a:hover {
    text-decoration: underline;
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

  /* Responsive styling */
  @media (max-width: 768px) {
    .body-container {
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }

    .details {
      width: 90%;
      padding: 20px;
    }

    .contact__item {
      font-size: 20px;
    }
  }
</style>