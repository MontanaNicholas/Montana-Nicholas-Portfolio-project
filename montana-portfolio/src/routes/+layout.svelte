<script>
    // Import components
    
</script>


<!-- Header -->
<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/education">Education & Volunteering</a></li>
            <li><a href="/software">Software</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<footer>
    <p>&copy; 2025 My Svelte App. All rights reserved.</p>
</footer>


<style>
    
    header {
        background-color: #074244;
        padding: 1rem;
        text-align: right;
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
    }
    
    main {
        padding: 2rem;
        text-align: center;
    }
    
    footer {
        background-color: #074244;
        color: white;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
