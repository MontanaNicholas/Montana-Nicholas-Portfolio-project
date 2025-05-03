<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
  </script>
  
  <div class="page-wrapper">
    <!-- Header -->
    <header>
      <div class="logo">
        <a href="{base}/">
          <img src="{base}/logo.png" alt="Website Logo">
        </a>
        <h1>Montana Nicholas</h1>
      </div>
  
      <nav>
        <ul>
          <li><a href="{base}/">HOME</a></li>
          <li><a href="{base}/cv">CV</a></li>
          <li><a href="{base}/projects">PROJECTS</a></li>
          <li><a href="{base}/education">EDUCATION & VOLUNTEERING</a></li>
          <li><a href="{base}/contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  
    <!-- Page Content -->
    <main>
      <slot />
    </main>
  
    <!-- Footer -->
    <footer>
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>
  </div>
  
  <style>
  /* Wrapper for full-page layout */
  .page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  /* Header Styling */
  header {
    background-color: rgb(105, 8, 49);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    color: white;
  }
  
  h1 {
    font-size: 20px;
    font-family: Candara;
  }
  
  p {
    font-family: Candara;
  }
  
  /* Logo Container */
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 90px;
    margin-left: 10px;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  
  .logo img:hover {
    transform: scale(0.95);
    opacity: 0.9;
    cursor: pointer;
  }
  
  /* Navigation */
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  nav ul li {
    margin: 0 15px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-family: Candara;
  }
  
  /* Main content takes available vertical space */
  main {
    flex: 1;
    padding: 2rem;
    text-align: center;
  }
  
  /* Footer at bottom of page, not fixed */
  footer {
    background-color: rgb(105, 8, 49);
    color: white;
    text-align: center;
    padding: 1rem;
  }
  
  /* Responsive Header */
  @media (max-width: 768px) {
    header {
      flex-direction: column;
      text-align: center;
    }
  
    .logo {
      justify-content: left;
    }
  }
  </style>