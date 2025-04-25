<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Education Page Loaded");
    })
</script>



<div class="page-bg"></div>


<div class="details">

 <div class="education"><img src="education-title.png" alt="education" width="500" height="60" ></div>
      
</div>

<div class="box">
    <h4>2018-2023</h4>
    <p> Loreto Secondary School, Kilkenny</p>
    <h4>2023- PRESENT</h4>
    <p> BSc (Hons) Computing in Interactive Digital Art and Design, SETU Carlow</p>
</div>

<div class="details2">

    <div class="volunteering"><img src="volunteering.png" alt="volunteering" width="500" height="60" ></div>
         
   </div>

   <div class="box2">
    <h4>2024</h4>
    <p> Kilkenny Animated</p>
    <h4>2025</h4>
    <p> Dingle Animation Festival</p>
   </div>

<div class="parallax parallax--fast"></div>

<style>

    .education {
    width: 60%;
    position: fixed;
    top: 15%;
    margin-left: 5%;
    transform: translateY(-50%);
}

.volunteering {
    width: 60%;
    position: fixed;
    top: 15%;
    margin-left: 5%;
    transform: translateY(-50%);
}

h4 {
    font-size: 25px;
    text-align: left;
}

p{
    font-size: 20px;
    text-align: left;
    color: rgb(150, 28, 69);
}

.details {
    position: fixed;
    top: 55%;
    margin-left: 10%;
    transform: translateY(-50%);
    width: 550px; 
    height: 400px;
    background-color: rgb(150, 28, 69);
    border-radius: 4px;
    padding: 40px;
    border-radius: 25px;

}

.box {
    position: fixed;
    top: 60%;
    margin-left: 12.5%;
    transform: translateY(-50%);
    width: 450px; 
    height: 250px;
    background-color: rgb(250, 241, 244);
    border-radius: 4px;
    padding: 20px;
    border-radius: 25px;
}


.details2 {
    position: fixed;
    top: 55%;
    margin-left: 55%;
    transform: translateY(-50%);
    width: 550px; 
    height: 400px;
    background-color: rgb(150, 28, 69);
    border-radius: 4px;
    padding: 40px;
    border-radius: 25px;

}

.box2 {
    position: fixed;
    top: 60%;
    margin-left: 58%;
    transform: translateY(-50%);
    width: 450px; 
    height: 250px;
    background-color: rgb(250, 241, 244);
    border-radius: 4px;
    padding: 20px;
    border-radius: 25px;

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