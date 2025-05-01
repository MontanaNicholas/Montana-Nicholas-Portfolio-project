<script>
    let isOpen = false;
</script>

<nav class="nav">
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">☰</button>

    <ul class={`menu ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/education">Education & Volunteering</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>

<style>
    .nav {
        padding: 1rem;
        text-align: center;
        position: relative;

    }

    .menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
        transition: 0.15s ease-in-out;
        z-index: 15;
    }

    .menu li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }


    .burger {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        position: absolute;
        top: 1rem;
        left: 90%;
        z-index: 20;
    }

    @media (max-width: 768px) {
        .burger {
            display: block;
        }

        .menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #6a1e73;
            text-align: left;
            padding: 1rem 0;
        }

        .menu.open {
            display: flex;
        }

        .menu li {
            padding: 10px 20px;
        }
    }
</style>
