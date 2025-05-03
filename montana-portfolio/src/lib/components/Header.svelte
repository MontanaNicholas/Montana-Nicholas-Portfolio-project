<script>
    import { base } from '$app/paths';
    import Navigation from '$lib/components/Navigation.svelte';  // Correctly import Navigation.svelte
  </script>
  
  <header>
    <!-- Logo Section -->
    <div class="logo">
      <a href="{base}/">
        <img src="{base}/logo.png" alt="Website Logo" />
      </a>
      <h1>Montana Nicholas</h1>
    </div>
  
    <!-- Navigation Component -->
    <Navigation /> <!-- This is where the burger menu comes from -->
  </header>
  
  <style>
    header {
      background-color: rgb(85, 8, 55);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      color: white;
    }
  
    .logo {
      display: flex;
      align-items: center;
    }
  
    .logo img {
      width: 90px;
      margin-right: 10px;
    }
  
    @media (max-width: 768px) {
      header {
        flex-direction: column;
        text-align: center;
      }
  
      .logo {
        justify-content: center;
      }
    }
  </style>
  