<script>
  
import { base } from '$app/paths';
import { onMount } from 'svelte';
import { browser } from '$app/environment';

    onMount(() => {
        console.log("404 Page Loaded");
    })
</script>


  <div class="page-bg"></div>
    
  <div class="parallax parallax--fast"></div>
  
    <h1>404</h1>
    <p>PAGE NOT FOUND</p>


<style>

    h1{
      font-size: 150px;
      margin-left: 5%;
      margin-top: 10%;
      color: rgb(105, 6, 56);
      
    }
    
    p{
      font-size: 80px;
      margin-left: 5%;
      color: rgb(73, 8, 22);
      
    }

    .page-bg{ 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color:  rgb(255, 248, 246);
    z-index: -1; 
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



    </style>