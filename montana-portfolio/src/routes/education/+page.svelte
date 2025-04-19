<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Education Page Loaded");
    })
</script>

<div class="education"><img src="education-title.png" alt="education" width="500" height="60" ></div>

<style>

    .education {
    width: 60%;
    position: fixed;
    top: 15%;
    margin-left: 20%;
    transform: translateY(-50%);
}

</style>