<script>
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>


<header>
   <!-- Logo -->
   <div class="logo">
    <a href="/">
        <img src="/logo.png" alt="Website Logo">
    </a>
    <h1>Montana Nicholas</h1>
</div>
    <!-- Navigation -->
    <Navigation />
</header>


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

    
    /* Logo Container */
    .logo {
        display: flex; /* Makes logo container a Flexbox */
        align-items: center; /* Aligns text and image vertically */
    }

    .logo img {
    width: 90px;
    margin-left: 10px;
    opacity: 1;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}


    .logo img:hover {
    opacity: 0.9;
    transform: scale(0.85);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
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


</style>