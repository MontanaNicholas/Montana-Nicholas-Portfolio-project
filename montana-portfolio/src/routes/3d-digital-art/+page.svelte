<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Game design page Page Loaded");
    })
</script>

<div class="page-bg"></div>

<div class="three-d"><img src="3d-digital-art.png" alt="3d digital art" width="500" height="60" ></div>

<div class="parallax parallax--fast"></div>


<style>

.three-d{
    width: 60%;
    position: fixed;
    top: 20%;
    margin-left: 20%;
    transform: translateY(-50%);
}

.parallax {
  position: fixed; inset: 0; pointer-events: none;
  background: url('/sparkle.png') repeat;
  animation: slide 60s linear infinite;
  opacity: .15;
  z-index: -1; 
}

.parallax--fast { animation-duration: 30s; opacity:.25; }
@keyframes slide { from{background-position:0 0} to{background-position:-2048px 0} }


.page-bg{ 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color:  rgb(255, 248, 246);
    z-index: -1; 
}
</style>