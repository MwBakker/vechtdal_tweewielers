<template>
  <rowOverlapsed class="row" link="https://sensabikes.com" title="Sensa" text="Het verhaal van Sensa begint bij Intersens Bikes & Parts BV. Een familiebedrijf gelegen in het mooie oosten van Nederland. Hier bouwen en ontwikkelen zij al meer dan 25 jaar hoogwaardige sportieve fietsen.
                  Intersens heeft zijn wortels in het verhandelen en ontwikkelen van verschillende soorten goederen. Na hun ontstaan in Amerika in de jaren 80 verschenen de eerste mountainbikes in Nederland." imgSrc="sensa-bikes.jpg">
  </rowOverlapsed>
  <rowOverlapsed class="row" link="https://bhbikes.com" title="BH Bikes" text="Een bedrijf, dat aanvankelijk wapens produceerde, nam in 1923 na het einde van de Eerste Wereldoorlog een radicale koerswijziging. Onze productiefocus lag op het bieden van een snel, 
                                                                              comfortabel en betaalbaar vervoermiddel voor de inwoners van Eibar. Dit resulteerde in een aantal zeer lichtgewicht, wendbare en betrouwbare fietsen. 
                                                                              Een nieuwe fase was begonnen." imgSrc="bh-bikes.jpg">
  </rowOverlapsed>
  <rowOverlapsed class="row" link="https://ridley-bikes.com" title="Ridley" text="Ervaar Ridley! Ontdek de geschiedenis, alle technologieën, innovaties en verhalen. Ridley-fietsen worden ontwikkeld in het hart van de wielersport: België. 
                  We testen onze fietsen in onze eigen windtunnel en op de zwaarste Belgische wegen. Op deze pagina brengen we het beste nieuws en de meest interessante informatie over elke Ridley-fiets samen." imgSrc="ridley-bikes.jpg">
  </rowOverlapsed>
  <rowOverlapsed class="row" link="https://burgers.nl" title="Burgers" text="Trenergy bouwt specifiek elektrische fietsen en geen fietsen zonder ondersteuning, mountainbikes of racefietsen.
                Daarom zijn zij al vanaf 2011 de specialist in elektrische fietsen. Hun e-bikes verkopen zij alleen via de vakhandel; fietsenwinkels met een werkplaats waar de fietsenmaker een echte 
                fietsspecialist is, ook op het gebied van elektrische fietsen. Naast het ontwikkelen van nieuwe e-bikes steken zij veel tijd in het ondersteunen van hun Trenergy dealers, 
                een uitmuntende service waarmee de dealer je weer snel op weg kan helpen als de fiets voor onderhoud in de werkplaats staat." imgSrc="trenergy.jpg">
  </rowOverlapsed>
</template> 

<script>
  import rowOverlapsed from '../../small/row-overlapsed.vue';
  export default {
    components: { rowOverlapsed },
    name: "bikeSportPage",
  };
</script>

<style scoped>
  .row {
    flex: 1;
  }
</style>