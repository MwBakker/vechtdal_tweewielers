<template>
  <div class="row">
    <Transition name="slide-fade-right" appear>
      <div id="overlay">
        <div id="text">
          <h1>Burgers</h1>
          <p>Het is het jaar 1869. Rijtuigsmid Henricus Burgers (1843-1903) koopt een Engelse vélocipède. Hij besluit deze fiets na te maken 
              en in hetzelfde jaar opent hij in Deventer de eerste fietsfabriek van Nederland. Al snel volgden er meerdere tweewielers. 
              Het bedrijf en merk Burgers groeit en in 1892 volgt de tweede fabriek aan Achter den Broederen ook in Deventer.Burgers bleef zich door de jaren heen meer en meer ontwikkelen. In 1897 kwam de fabrikant met een cardanfiets. 
              Een fiets met asaandrijving en dus zonder ketting. Burgers was met de cardanfiets de eerste ter wereld die deze op de markt bracht.
              In 1931 werd een rijwiel met hulpmotor geintroduceert. Ondertussen waren er ook alweer 2 nieuwe fabrieken bij gekomen, ook in Roermond.</p>
          <a href="https://burgers.nl">Bezoek de website</a>
        </div>
      </div>
    </Transition>
    <div class="rowImg"></div>
  </div>
</template> 

<script>
export default {
  name: "bikeCityPage",
};
</script>

<style scoped>

.row {
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
}

.row a {
  position: absolute;
  margin-top: 32px;
  color: inherit; 
}

.rowImg {
  flex: 2;
  object-fit: cover;
  background: url(../../../assets/burgers-bikes.jpg);
  background-size: 100% 100%;
  background-position: right;
  background-repeat: no-repeat;
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0));
  -webkit-mask-size: 100% 50%; 
  -webkit-mask-position: left top, left center; 
}

#overlay {
  flex: 1;
}

.slide-fade-right-enter-active {
  transition: all 1s ease;
}
.slide-fade-right-leave-active {
  transition: all 1s;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(-80%);
  opacity: 0;
}

#text {
  text-align: left;
  font-size: 16px;
  margin: 0 32px;
  white-space: nowrap;
}

p { 
  word-break: break-word;
  white-space: normal;
} 

@media screen and (min-width: 320px) and (max-width: 800px)  {
    #overlay, .rowImg {
      flex: 1;
    }
    #text { 
      font-size: 11px;
      margin: 0 16px;
    }
  }
</style>