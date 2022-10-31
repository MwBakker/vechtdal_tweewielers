<template>
  <rowOverlapsed class="row" link="https://www.advancedebike.nl" title="Advanced E-bikes" text="Altijd op zoek naar nieuwe doelen - en blijven daarbij trouw aan hun principes. 
                In 2011 gestart met een duidelijk beeld voor ogen. Dat doel is in alle jaren behaald, ondanks dat de markt drastisch veranderde en ze inmiddels actief zijn in 
                zes Europese landen. Juist het vasthouden aan deze visie is het meest bepalend voor het succes van dit type e-bike." imgSrc="advanced-bikes.jpg">
  </rowOverlapsed>
  <rowOverlapsed class="row" link="https://www.trenergy.nl" title="Trenergy" text="Trenergy bouwt specifiek elektrische fietsen en geen fietsen zonder ondersteuning, mountainbikes of racefietsen.
                Daarom zijn zij al vanaf 2011 de specialist in elektrische fietsen. Hun e-bikes verkopen zij alleen via de vakhandel; fietsenwinkels met een werkplaats waar de fietsenmaker een echte 
                fietsspecialist is, ook op het gebied van elektrische fietsen. Naast het ontwikkelen van nieuwe e-bikes steken zij veel tijd in het ondersteunen van hun Trenergy dealers, 
                een uitmuntende service waarmee de dealer je weer snel op weg kan helpen als de fiets voor onderhoud in de werkplaats staat." imgSrc="trenergy.jpg">
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