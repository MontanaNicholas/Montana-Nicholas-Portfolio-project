<script>
    import {onMount} from 'svelte';

    onMount ( () => {
        console.log ("Projects page Loaded");
    });
</script>

<div class="projects"><img src="project.png" alt="projects" width="500" height="60" ></div>

<style>

    .projects {
    width: 60%;
    position: fixed;
    top: 15%;
    margin-left: 20%;
    transform: translateY(-50%);
}

</style>