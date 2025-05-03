<script>

    import { base } from '$app/paths';
      import { onMount } from 'svelte';
      import { browser } from '$app/environment';
    
    
    
        onMount(() => {
            console.log("cv Page Loaded");
        })
    </script>
    
    
    <div class="page-bg"></div>
    
    <div class="body-container">
    <div class="card">
        <img src="{base}/CV.png" alt="cv " class="cv">
    </div>
</div>


    <div class="parallax parallax--fast"></div>


<style>

.body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    
  }

.card {

background-color: white;
border: 3px solid rgb(150, 28, 69);
border-radius: 20px;
overflow: hidden;
width: 100%;
max-width: 755px;
margin-left: 1%;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
padding: 10px;
}

.cv {
  width: 100%;
  max-height: 1027px; /* adjust as needed */
  object-fit: contain;
  display: block;
  padding: 10px; /* optional, adds spacing inside the card */
  box-sizing: border-box;
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

@media (max-width: 768px) {
      .body-container {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 2rem;
      }
  
      .card  {
        width: 100%;
        max-width: 90%;
        height: auto;
      }
  
}

</style>

