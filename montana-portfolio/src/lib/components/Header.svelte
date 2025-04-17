<script>
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        
            <img src="logo.png" alt="Website Logo">
        
    </div>

    <!-- Navigation -->
    <Navigation />
</header>


<style>
    /* Header Styling */
    header {
        background-image: linear-gradient(rgb(7, 62, 71), rgb(14, 84, 95), rgb(22, 97, 109), rgb(29, 114, 128));
        display: flex; /* Enables Flexbox */
        align-items: center; /* Vertically centers the items */
        justify-content: space-between; /* Pushes logo to left, nav to right */
        color: white;
        padding: 1rem;
    }

    /* Logo Container */
    .logo {
        display: flex; /* Makes logo container a Flexbox */
        align-items: center; /* Aligns text and image vertically */
    }

    .logo img {
        width: 50px;
        margin-right: 10px;
        opacity: 1;
        transition: 0.2s ease-in-out;
    }

    .logo img:hover {
        width: 48px;
        margin-right: 13px;
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

</style>