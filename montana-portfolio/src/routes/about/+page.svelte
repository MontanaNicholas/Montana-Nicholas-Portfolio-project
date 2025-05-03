<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

    onMount(() => {
        console.log("About Page Loaded");
    })
</script>



<div class="about"><img src="{base}/about.png" alt="about" width="500" height="60" ></div>

<div class="body-container">
  <div class="profile-pic">
    <div class="me"><img src="{base}/me.png" alt="me"width="550" height="550" ></div>
  </div>


  <div class="box">
    <p> Hi! My name is Montana Nicholas. I was born in Zimbabwe, and am now living in Ireland. I am currently a student at SETU Carlow studying Interactive Digital Art and Design.</p>

    <b> 
      <p> I am looking to find a career around Digital Art (2D, 3D or Pixel), Concept Art, Comic-Book Art, Animation, Graphic Design etc.</p>
    </b>
  </div>

  <div class="details">
    <div class="pic"><img src="{base}/sodtware-title.png" alt="software" width="400" height="50"></div>
      <section class="software">
          <ul class="software__icons">
              <li class="software__item">
                  <img src="{base}/krita.png" alt="krita" />
                  <span>KRITA</span>
                </li>
            
                <li class="software__item">
                  <img src="{base}/aseprite.png" alt="aseprite" />
                  <span>ASEPRITE</span>
                </li>
            
                <li class="software__item">
                  <img src="{base}/blender.png" alt="blender" />
                  <span>BLENDER</span>
                </li>

                <li class="software__item">
                  <img src="{base}/vs.png" alt="VSC" />
                  <span>VISUAL STUDIO CODE</span>
                </li>

                <li class="software__item">
                  <img src="{base}/adobe.png" alt="adobe" />
                  <span>ADOBE ANIMATE</span>
                </li>
          </ul>
      </section>
  </div>
</div>

<div class="parallax parallax--fast"></div>

<div class="page-bg"></div>



<style>
  .body-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6rem;
    padding: 2rem;
  }

  .profile-pic {
    width: 580px;
    height: 580px;
    background-color: white;
    border-radius: 50%;
    border: 4px solid rgb(150, 28, 69);
  }

  .me img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 350px;
    background-color: rgb(150, 28, 69);
    border: 5px solid #ffffff;
    border-radius: 25px;
    padding: 40px;
    text-align: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 300px;
    height: 350px;
    background-color: rgb(150, 28, 69);
    border-radius: 25px;
    padding: 40px;
  }

  .details .pic {
    position: absolute;
    top: -75px;
  }

  .software__icons {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .software__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'Candara', sans-serif;
    color: #fff;
  }

  .software__item img {
    width: 60px;
  }

  .software__item:hover {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }

  .about {
    width: 100%;
  }

  .about img {
    width: 500px;
    height: auto;
  }

  .parallax {
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: url('/sparkle.png') repeat;
    animation: slide 60s linear infinite;
    opacity: 0.15;
    z-index: -1;
  }

  .parallax--fast {
    animation-duration: 30s;
    opacity: 0.25;
  }

  .page-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(255, 249, 249);
    z-index: -10;
  }

  p {
    font-size: 27px;
    font-family: 'Candara', sans-serif;
    color: white;
    text-align: justify;
  }

  span {
    font-family: 'Candara', sans-serif;
    font-size: 20px;
  }

  @keyframes slide {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -2048px 0;
    }
  }

  @media (max-width: 768px) {
    .body-container {
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
    }

    .profile-pic,
    .box,
    .details {
      margin: 10px 0;
    }

    .details {
      margin-left: 0;
    }
  }
</style>