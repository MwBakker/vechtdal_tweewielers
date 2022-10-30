<template>
  <div id="container-blocks" >
    <div id="head-block">
      <Transition name="slide-fade-right" appear>
        <div class="side-block" id="dates-block">
          <div id='dates'>
            <DateTime day="Maandag"
              timeFirst="Gesloten" />
            <DateTime day="Dinsdag"
              timeFirst="08:30 - 12:30" 
              timeLast ="13:00 - 18:00" />
            <DateTime day="Woensdag"
              timeFirst="08:30 - 12:30" 
              timeLast ="13:00 - 18:00" />
            <DateTime day="Donderdag"
              timeFirst="08:30 - 12:30" 
              timeLast ="13:00 - 21:00" />
            <DateTime day="Vrijdag"
              timeFirst="08:30 - 12:30" 
              timeLast ="13:00 - 21:00" />
            <DateTime day="Zaterdag"
              timeFirst="08:30 - 12:30" 
              timeLast ="13:00 - 17:00" />
          </div>
        </div>
      </Transition>
      <Transition name="slide-fade-left" appear>
        <div class="side-block" id="contact-form-block">
          <div class="side-block-content">
            <h2>Contactformulier</h2>
            <!-- <p>Voor vragen of het maken van een afspraak kunt u het onderstaande contact formulier invullen. U kunt ons tevens ook bellen op ons telefoonnummer.</p> -->
            <div class="contact-form-field">
              <p>Uw naam</p>
              <input v-model="name">
            </div>
            <div class="contact-form-field">
              <p>Uw email adres</p>
              <input v-model="email">
            </div>
            <div class="contact-form-field">
              <p>Uw telefoonnummer (optioneel)</p>
              <input v-model="phone">
            </div>
            <div class="contact-form-field">
              <p>Onderwerp</p>
              <input v-model="subject">
            </div>
            <div class="contact-form-field">
              <p>Beschrijving</p>
              <textarea v-model="description" cols="40" rows="5"></textarea>
            </div>
            <div class="contact-form-field">
              <button>Verzenden</button>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="slide-fade-up" appear>
        <div class="side-block" id="side-block-bottom">
          <div class="side-block-content">
            <div id="address-block">
              <p>Bruchterweg 21</p>
              <p>7772 BD</p>
              <p>Hardenberg</p>
            </div>
            <div id='contact-block'>
              <div class="info_row">
                <img alt="phone" src="../../assets//icons/telephone.png" width="18" height="18">
                <p>0523 225 104</p>
              </div>
              <div class="info_row">
                <img alt="mail" src="../../assets/icons/mail.png" width="18" height="18">
                <p>info@vechtdaltweewielers.nl</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <div id="bottom-block">
      <customMap />
    </div>
  </div>
</template> 
  
<script>
import CustomMap from '../small/maps-custom';
import DateTime from '../small/date-time';

export default {
  components: { CustomMap, DateTime },
  name: "infoPage",
};
</script>

<style scoped>

#head-block { 
  overflow: hidden;
  height: 60vh;
}

.side-block { 
  height: 78%;
  width: 49%;
  margin: 4px .5%;
  border-radius: 25px;
  background: rgb(2 2 2 / 42%);
  float: left;
  position: relative;
}
#side-block-bottom { 
  width: 100%;
  height: 8vh;
  overflow: hidden;
}
#address-block { 
  float: left;
}
#contact-block { 
  float: right;
}
.side-block-content, #dates { 
  width: 100%;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.contact-form-field { 
  width: 75%; 
  margin: 12px auto;
}
.contact-form-field p {
  font-size: 12px;
  width: 70%; 
  margin: 0;
  text-align: left;
}
.contact-form-field input {
  width: 100%; 
  height: 24px;
  margin: auto;
  border: solid 2px #e0e4e2;
  background: none;
  border-radius: 6px;
}
#description {
  height: 100px;
}
input{ 
  color: #e0e4e2;
}
textarea { 
  width: 100%; 
  color: #e0e4e2;
  background: none;
  border: solid 2px #e0e4e2;
  background: none;
  border-radius: 6px;
}

#bottom-block {
  height: 25vh;
}

p { 
  color: #e0e4e2;
}

h2 { 
  margin: 8px 0 0 0;
}

button { 
  height: 32px;
  background: none;
  color: #e0e4e2;
  border-color: #e0e4e2;
  border-radius: 8px;
  float: right;
}

.slide-fade-up-enter-active, .slide-fade-left-enter-active, .slide-fade-right-enter-active {
    transition: all 1s ease;
}
.slide-fade-up-leave-active, .slide-fade-left-leave-active {
    transition: all 1s;
}
.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(80%);
  opacity: 0;
}
.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(-80%);
  opacity: 0;
}

@media screen and (min-width: 320px) and (max-width: 800px)  {
  #head-block { 
    height: 110vh;
  }
  .side-block { 
    width: 95%;
    height: 49%;
    margin: 0 2.5% 8px 2.5%;
  }
  #dates-block { 
    height: 50vh
  }
  #contact-form-block { 
    height: 58.5vh;
  }
  .contact-form-field {
    width: 92.5%;
    margin: 12px 2.5%;
  }
}
</style>