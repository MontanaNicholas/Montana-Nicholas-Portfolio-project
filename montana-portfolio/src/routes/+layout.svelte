<script>
    // Import components
    
</script>


<!-- Header -->
<header>
     <!-- Logo -->
   <div class="logo">
    <a href="/">
        <img src="/logo.png" alt="Website Logo">
    </a>
    <h1>Montana Nicholas</h1>
</div>
    
    <nav>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="/education">EDUCATION & VOLUNTEERING</a></li>
            <li><a href="/contact">CONTACT</a></li>
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


<style>

     /* Header Styling */
     header {
        background-color: rgb(105, 8, 49);
        display: flex; /* Enables Flexbox */
        align-items: center; /* Vertically centers the items */
        justify-content: space-between; /* Pushes logo to left, nav to right */
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
        display: flex; /* Makes logo container a Flexbox */
        align-items: center; /* Aligns text and image vertically */
    }

    .logo img {
        width: 90px;
        margin-left: 10px;
        opacity: 1;
        transition: 0.2s ease-in-out;
    }

    .logo img:hover {
        width: 85px;
        margin-left: 13px;
        opacity: 0.9;
        margin-left: 1px;
}

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column; /* Stacks items vertically */
            text-align: center;
        }

        .logo {
            justify-content: left;
        }
    }
    
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
    
    main {
        padding: 2rem;
        text-align: center;
    }
    
    footer {
        background-color: rgb(105, 8, 49);
        color: white;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
