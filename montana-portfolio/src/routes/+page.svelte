<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';

    onMount(() => {
        console.log("Home Page Loaded");
    });


</script>

<body>


<div class="portfolio"><img src="portfolio.png" alt="portfolio" width="900" height="160" ></div>

<div class="cat"><img src="logo.png" alt="cat"width="500" height="500" ></div>

</body>


<style>



.portfolio {
    width: 60%;
    position: fixed;
    top: 45%;
    margin-left: 35%;
    transform: translateY(-50%);
}


.cat {
    position: fixed;
    top: 45%;
    margin-left: 5%;
    transform: translateY(-50%);
}

body{ 
    background-color: rgb(255, 243, 201);
}
  
</style>