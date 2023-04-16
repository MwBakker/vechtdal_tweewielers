<template>
    <div>
      <Transition name="slide-fade-right" appear>
        <div class="row">
          <h1>Vacature: all-round fietsenmaker</h1>
          <p>Indien de drukte het in de winkel toelaat kunnen kleine reparaties eventueel direct en snel voor u
              worden gerepareerd. Op een rustigere woensdag is die kans groter dan op een drukke zaterdag. Loop
              gerust even binnen of bel van te voren en we zullen er alles aan doen om u zo snel mogelijk te
              helpen!</p> 
        </div>
      </Transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'maintencanceRepairPage',
    props: {
      msg: String
    }
  }
  </script>
  <style scoped>
  
  .row {
    float: left;
    width: 47%;
    margin: 1.5%;
    text-align: left;
  }

  p { 
    text-align: justify;
    color: #e0e4e2;
  }
  
  h1 { 
    font-size: 32px;
    margin: 0;
  }
  
  h3 {
    margin: 40px 0 0 0;
  }

  .slide-fade-right-enter-active {
    transition: all 1s ease;
  }
  
  .slide-fade-right-enter-from,
  .slide-fade-right-leave-to {
    transform: translateX(-80%);
    opacity: 0;
  }

  .slide-fade-left-enter-from,
  .slide-fade-left-leave-to {
    transform: translateX(80%);
    opacity: 0;
  }


  @media screen and (min-width: 320px) and (max-width: 800px)  {
    
  .row, .row-inverted{
    width: 90%;
    margin: 16px;
    }
  }
  p {
    text-align: left;
  }
</style>
  