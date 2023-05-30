<template>
  <rowOverlapsed class="row" link="https://burgersfietsen.nl" title="Burgers" imgSrc="burgers-bikes.jpg"
                 text="Het is het jaar 1869. Rijtuigsmid Henricus Burgers (1843-1903) koopt een Engelse vélocipède. Hij besluit deze fiets na te maken 
                      en in hetzelfde jaar opent hij in Deventer de eerste fietsfabriek van Nederland. Al snel volgden er meerdere tweewielers. 
                      Het bedrijf en merk Burgers groeit en in 1892 volgt de tweede fabriek aan Achter den Broederen ook in Deventer.Burgers bleef zich door de jaren heen meer en meer ontwikkelen. 
                      In 1897 kwam de fabrikant met een cardanfiets. Een fiets met asaandrijving en dus zonder ketting. Burgers was met de cardanfiets de eerste ter wereld die deze op de markt bracht.
                      In 1931 werd een rijwiel met hulpmotor geintroduceert. Ondertussen waren er ook alweer 2 nieuwe fabrieken bij gekomen, ook in Roermond.">
  </rowOverlapsed>
  <rowOverlapsed class="row" link="https://sensabikes.com/bikes/e-bike" title="Sensa" imgSrc="sensa-e-bike.png"
                 text="Het Sensa-verhaal begint bij Intersens Bikes & Parts BV. Een familiebedrijf gevestigd in het oosten van Nederland. 
                      Hier bouwen en ontwikkelen ze al meer dan 25 jaar hoogwaardige sportieve fietsen, en sinds geruime tijd ook elektrische fietsen.
                      In de loop der jaren is het assortiment dan ook flink uitgebreid. Producten evolueerden en in de jaren 90 werd de productie verplaatst naar Almelo. 
                      Begin jaren 2000 kwam het frame van koolstofvezel beschikbaar voor een breed scala aan klanten. Eerste koolstofvezel werd bijna uitsluitend
                      gebruikt in de ruimtevaart. Maar voortdurende ontwikkeling in productiemethoden maakte dit lichtgewicht zogenaamde 'wondermateriaal' betrouwbaarder en goedkoper. 
                      Dit maakt koolstofvezel ideaal voor sportieve fietsframes. Ook de productie van aluminium 
                      frames blijft evolueren met het gebruik van hydroforming en butted buizen. Door de computer gegenereerde grafische ontwerpen brengen een 
                      revolutie teweeg in het ontwerp en het uiterlijk van deze fietsen.">
  </rowOverlapsed>
  <rowOverlapsed class="row" link="https://www.union.nl/fietsen/" title="Union" imgSrc="union-bikes.jpg"
                  text="Waarom zij als geen ander weten hoe de ideale stdsfiets eruit ziet? Omdat zij hen al meer dan honderd jaar maken. Sinds 1904, om precies te zijn. 
                        Hun eerste rijwiel, gemaakt door de drie gebroeders Van den Berg, was meteen raak. Er was één probleem. Back in the days kon lang niet iedereen fietsen. 
                        Dus kwamen de slimme rakkers op een idee: fietsles geven. En zo geschiedde. Briljante zet, zo bleek. Ze overleefden zware crisis- en oorlogsjaren en in 
                        1966 rolde hun miljoenste fiets van de band. En ondanks een allesverwoestende brand in 1976, is Union altijd hét stadsfietsenmerk van Nederland gebleven. 
                        Ga maar eens bij het station kijken. Eén en al Union. Nou, bijna dan.">
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