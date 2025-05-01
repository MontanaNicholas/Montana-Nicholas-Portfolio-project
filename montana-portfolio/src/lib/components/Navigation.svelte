<script>
    import { base } from '$app/paths';
    let isOpen = false;
  </script>
  
  <nav class="nav">
    <!-- Burger Button -->
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">
      ☰
    </button>
  
    <!-- Menu List (Visible when 'isOpen' is true) -->
    <ul class:open={isOpen}>
      <li><a href="{base}/">Home</a></li>
      <li><a href="{base}/projects">Projects</a></li>
      <li><a href="{base}/education">Education</a></li>
      <li><a href="{base}/contact">Contact</a></li>
    </ul>
  </nav>
  
  <style>
    /* Main nav container */
    .nav {
      width: 100%;
      position: relative;
    }
  
    /* Burger menu button */
    .burger {
      display: none;  /* Initially hidden on large screens */
      font-size: 2rem;
      background: none;
      border: none;
      color: white;
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 1001;
    }
  
    /* Menu list */
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      gap: 20px;
      transition: 0.3s ease;
    }
  
    li a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  
    /* Show the menu when 'isOpen' is true */
    ul.open {
      display: flex;
    }
  
    /* Mobile: Show burger button and stack menu vertically */
    @media (max-width: 768px) {
      .burger {
        display: block;  /* Show burger on mobile */
      }
  
      ul {
        display: none;  /* Hide menu by default on mobile */
        flex-direction: column;
        background-color: darkmagenta;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        padding: 1rem;
      }
  
      ul.open {
        display: flex;  /* Show menu when 'isOpen' is true */
      }
    }
  </style>
  