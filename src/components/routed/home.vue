<template>
    <div id="home-img">
        <img src="../../assets/home.jpg" alt="Zaak van binnen">
        <Transition name="slide-fade-up" appear>
            <div id="overlay">
                <div id="header-text">
                    <h1>Welkom bij Vechtdal Tweewielers</h1>
                    <!-- <h2> - Deze website is nog in aanbouw - </h2> -->
                </div>
            </div>
        </Transition>
    </div>
    <div id="vecht-info">
        <Transition name="slide-fade-right" appear>
            <div id="vecht-info-text-block">
                <div class="info-text">
                    <p>Vechtdal: bekend als gebied om heerlijk te kunnen fietsen. Door dit gebied fietsen is een perfecte manier om te relaxen en tevens juist weer op te laden.
                        Om dit ontspannen gevoel te kunnen behouden dient uw fiets zelf u geen zorgen te geven. Bij ons bent u verzekerd dat u met de juiste fiets zorgeloos op pad kunt. 
                        Kijk gerust naar ons aanbod of kijk naar wat wij bieden als erkende onderhoudsmonteurs. </p>
                </div>
            </div>
        </Transition>
        <Transition name="slide-fade-left" appear>
            <img src="../../assets/vechtdal.jpg" alt="Vecht">
        </Transition>
    </div>
    <div id="store-items-block">
        <CardBottomOverlay @click="this.$router.push('/fietsen/elektrisch')" class="card" imgSrc="bike-electric" title="Elektrisch" />
        <CardBottomOverlay @click="this.$router.push('/fietsen/stad')" class="card" imgSrc="bike-city" title="Stad" />
        <CardBottomOverlay @click="this.$router.push('/fietsen/sportief')" class="card" imgSrc="bike-sport" title="Sportief" />
        <CardBottomOverlay @click="this.$router.push('/fietsen/bedrijfs-gerelateerd')" class="card" imgSrc="bike-business" title="Bedrijfs-gerelateerd" />
    </div>
    <div id="fixed-bg">
        <div id="fixed-bg-text-block-overlay">
            <div class="info-text">
                <h2>Onderhoud en Reparatie</h2>
                <br class="breakline">
                <p>Zorgeloos blijven fietsen? Uw fiets is bij ons in goede handen. Wij zijn erkende monteurs met een ruime beschikbaarheid aan onderdelen.</p>
            </div>
        </div>            
    </div>
    <div id="rental-info">
        <img src="../../assets/bike-rental.jpg" alt="Verhuur">
        <div id="vecht-info-text-block">
            <div class="info-text">
                <h2>Verhuur</h2>
                <br class="breakline">
                <p>Mocht u de Vechtdal per fiets willen ontdekken, echter beschikt u niet zelf over een fiets? Geen probleem: u kunt bij ons een fiets huren.</p>
            </div>
        </div>
    </div>
</template>
  
<script>
    import CardBottomOverlay from '../small/card-bottom-overlay.vue';
    export default {
    components: { CardBottomOverlay },
        name: 'home-page',
        props: {
            msg: String
        }
    }
</script>

<style scoped>

#home-img {
    position: relative;
}

#header-text {
    text-align: left;
    display: flex;
    flex-direction: row;
}
#header-text h1 { 
    margin-left: 4%;
    flex: 2
}
#header-text h2 { 
    color:aliceblue;
    flex: 1
}

#home-img img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 60vh;
}
#overlay {
    position: absolute;
    width: 100%; height: 19%;
    bottom: 0;
    right: 0;
    background-color: rgb(18 18 18 / 0.85);
}
#vecht-info, #rental-info {
    height: 36vh;
    overflow: hidden;
}
#vecht-info { 
    border-radius: 0px 36px 80px 0px;
}

#vecht-info-text-block { 
    position: relative;
    width: 60%; height: 100%;
    float: left;
}
.info-text { 
    margin: 0;
    position: absolute;
    top: 50%;
    left: 25%;
    -ms-transform: translate(-25%, -50%);
    transform: translate(-25%, -50%);
}
.info-text p { 
    font-size: 20px;
    text-align: left;
}
.info-text h2 { 
    text-align: left;
}
#vecht-info img, #rental-info img { 
    width: 40%; height: 100%;
    float: left;
    object-fit: cover;
}

#store-items-block { 
    height: 42vh;
    overflow: hidden;
}
.card { 
    cursor: pointer;
    width: 23%;
    margin: 48px 1% 32px 1%;
}

#fixed-bg { 
    margin-top: 26px;
    position: relative;
    height: 72vh;
    background-image: url("../../assets/maintenance.jpg");
    min-height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

#fixed-bg-text-block-overlay { 
    width: 100%;
    margin: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
    width: 100%; height: 25vh;
    bottom: 0;
    right: 0;
    background-color: rgba(18, 18, 18, 0.95);
}

#rental-info { 
    border-radius: 36px 80px 0px 80px;
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

#text {
    margin-left: 16px;
    text-align: left;
    font-size: 20px;
    white-space: nowrap;
}

p {
    word-break: break-word;
    white-space: normal;
}

h1 {
    color: white;
}

@media screen and (min-width: 320px) and (max-width: 800px)  {
    h1 { 
        font-size: 21px;
    }
    h2 { 
        font-size: 18px;
    }
    .info-text p { 
        font-size: 11.5px;
    }
    #overlay { 
        height: 12.5%;
    }
    .info-text img { 
        font-size: 11.5px;
    }
    #store-items-block { 
        height: 73vh;
    }
    #fixed-bg {
        margin: 0;
    }
    .card{ 
        margin: 0 1% 4px 1%;
        width: 48%;
    }
    .breakline { 
        display: none;
    }
}
</style>