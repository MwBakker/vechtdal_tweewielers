<template>
  <div>
    <div class="container">
      <a href="https://www.advancedebike.nl"> 
        <img src="../../../assets/advanced-bikes.jpg" alt="Joost en Michel">
        <Transition name="slide-fade-right" appear>
          <div id="overlay">
            <div id="text">
              <h1>Advanced E-bikes</h1>
              <p>Altijd op zoek naar nieuwe doelen - en blijven daarbij trouw aan hun principes. In 2011 gestart met een duidelijk beeld voor ogen. 
                  Dat doel is in alle jaren behaald, ondanks dat de markt drastisch veranderde en ze inmiddels actief zijn in zes Europese landen. Juist het vasthouden aan deze visie is 
                  het meest bepalend voor het succes van dit type e-bike.</p>
            </div>
          </div>
        </Transition>
      </a>
    </div>
  </div>
</template> 

<script>
export default {
  name: "bikeElectricPage",
};
</script>

<style scoped>
.container {
  position: relative;
  height: 86vh;
  border-bottom: 1px solid #121212;
}

.container a {
  color: inherit; 
  text-decoration: none; /* Fix to make div clickable in IE */
}

.container img {
  float: right;
  width: 60%; height: 100%;
  object-fit: cover;
}

#overlay {
  background: linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 1), rgb(18 18 18 / 1), rgb(18 18 18 / 0.75), rgb(18 18 18 / 0));
  position: absolute;
  width: 100%; height: 100%;
  bottom: 0;
  top: 0;
  left: 0;
}
#text { 
  width: 32.5%;
}

.slide-fade-right-enter-active {
  transition: all 1.5s ease;
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
  margin: 15% 0;
  word-break: break-word;
  white-space: normal;
} 
</style>