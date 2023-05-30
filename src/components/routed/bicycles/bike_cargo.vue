<template>
    <rowOverlapsed class="row" link="https://www.carqon.com/" title="Carqon" imgSrc="carqon-bikes.jpg"
                   text="Carqon is een Nederlands bakfietsmerk dat voortbouwt op de kennis en kwaliteit van een land met een historisch verankerde fietstraditie. 
                         Hun elektrische bakfietsen bieden de veiligheid, functionaliteit en het comfort om het maximale uit iedere rit te halen. Alleen het beste 
                         om de veiligheid en het comfort van ouders en diens gezin te garanderen. Maximale veiligheid wordt benadrukt door de superieure kwaliteit van 
                         de belangrijkste elementen: frame, bak, aandrijving, banden, remmen, ketting, versnellingen, ophanging en verlichting. De Carqon Classic is in 
                         2020 gelanceerd en bekroond met meerdere internationale design awards.">
    </rowOverlapsed>
  </template> 
  
  <script>
    import rowOverlapsed from '../../small/row-overlapsed.vue';
    export default {
      components: { rowOverlapsed },
      name: "bikeElectricPage",
    };
  </script>
  
  <style scoped>
    .row {
      flex: 1;
    }
  </style>