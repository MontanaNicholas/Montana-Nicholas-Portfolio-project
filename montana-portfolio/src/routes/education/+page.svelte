<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Software Page Loaded");
    })
</script>

<div class="page-bg"></div>
<div class="education"><img src="education-title.png" alt="education" width="500" height="60" ></div>

<style>

    .education {
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