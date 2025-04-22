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
        background-color:rgb(7, 62, 71);
        display: flex; /* Enables Flexbox */
        align-items: center; /* Vertically centers the items */
        justify-content: space-between; /* Pushes logo to left, nav to right */
        padding: 1rem;
        color: white;
    }

    h1 {
        font-size: 20px;
    }
    /* Logo Container */
    .logo {
        display: flex; /* Makes logo container a Flexbox */
        align-items: center; /* Aligns text and image vertically */
    }

    .logo img {
        width: 90px;
        margin-right: 10px;
        opacity: 1;
        transition: 0.2s ease-in-out;
    }

    .logo img:hover {
        width: 85px;
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