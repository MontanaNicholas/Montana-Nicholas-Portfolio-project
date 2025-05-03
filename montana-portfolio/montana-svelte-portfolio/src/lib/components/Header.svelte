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
    
   header {
    background-color: rgb(85, 8, 55);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color: white;
    position: relative; /* ADD THIS */
    z-index: 10; /* Optional: ensures it's above the rest */
}
    
    /* Logo Container */
    .logo {
        display: flex; /* Makes logo container a Flexbox */
        align-items: center; /* Aligns text and image vertically */
    }

    .logo img {
        width: 95px;
        margin-right: 10px;
        opacity: 1;
        transition: 0.2s ease-in-out;
    }

    .logo img:hover {
        width: 80px;
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