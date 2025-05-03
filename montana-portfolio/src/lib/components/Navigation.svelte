<script>
    import { base } from '$app/paths';
    let isOpen = false;
  </script>
  
  <nav class="nav">
    <!-- Burger Button -->
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">
      ☰
    </button>
  
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
  
    /* Mobile: Show burger button and stack menu vertically */
    @media (max-width: 768px) {
      .burger {
        display: block;  /* Show burger on mobile */
      }
  
    
    }
  </style>
  