<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Software Page Loaded");
    })
</script>

<div class="page-bg"></div>
<div class="projects"><img src="project.png" alt="project" width="500" height="60" ></div>

<style>

    .projects {
    width: 60%;
    position: fixed;
    top: 15%;
    margin-left: 20%;
    transform: translateY(-50%);
}

.page-bg{ 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(92, 0, 0);
    z-index: -1; 
}
</style>