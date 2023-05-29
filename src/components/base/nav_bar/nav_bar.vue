<template>
  <nav id="nav-bar">
    <div id="nav-body">
      <ul id="ul-nav">
          <li id="li-logo" @click="redirect('home')" >
            <div id="logo-parts" ref="logo_parts">
              <img id='logo-part-1' src="../../../assets/logo_part_1.png">
            </div>
          </li>
          <li ref="li_home" class='li-nav' @click="clicked('/', $event)" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>HOME</p></li>
          <li ref="li_sub_bicycles" class='li-nav-subbed' @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p id="sub-title">FIETSEN</p>
            <div class="sub-menu" :style="{ left: leftPosBicycles+'px', 
                                            backgroundImage: 'linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url(' + 
                                            require('../../../assets/bike-'+subMenuImgSrc+'.jpg') + ')' } ">
              <ul>
                <li @click="clicked('/fietsen/elektrisch', $event)" @mouseover="changePic('electric')"><div  class='sub-menu-item'><img src="../../../assets/icons/bike-electric.png"><p>ELEKTRISCH</p></div></li>
                <li @click="clicked('/fietsen/stad', $event)" @mouseover="changePic('city')"><div class='sub-menu-item'><img src="../../../assets/icons/bike.png"><p>STAD</p></div></li>
                <li @click="clicked('/fietsen/sportief', $event)" @mouseover="changePic('sport')"><div class='sub-menu-item'><img src="../../../assets/icons/bike-sport.png"><p>SPORTIEF</p></div></li>
                <li @click="clicked('/fietsen/bedrijfs-gerelateerd', $event)" @mouseover="changePic('business')"><div class='sub-menu-item'><img src="../../../assets/icons/bike.png"><p>BEDRIJFSGERELATEERD</p></div></li>
              </ul>
            </div>
          </li>
          <li ref="li_lease" class='li-nav' @click="clicked('/lease', $event)" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>FIETSPLAN</p></li>
          <li ref="li_sub_accessories" class='li-nav-subbed' @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p id="li-accessories">ACCESOIRES</p>
            <div class="sub-menu" :style="{ left: leftPosAccessories+'px', 
                                            backgroundImage: 'linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url(' + 
                                            require('../../../assets/'+accSubMenuImgSrc+'.jpg') + ')' } ">
              <ul>
                <li ref="li_accessories" @click="clicked('/accessoires/fietsendragers', $event)" @mouseover="moveToItem($event)"><div  class='sub-menu-item'><img src="../../../assets/icons/bike-electric.png"><p>FIETSENDRAGERS</p></div></li>
              </ul>
            </div>
          </li>
          <li ref="li_maintenance" class='li-nav' @click="clicked('/onderhoud_en_reparatie', $event)" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>REPARATIE</p></li>
          <li class='li-nav' @click="clicked('/over', $event)" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>OVER ONS</p></li>
          <li ref="li_contact" class='li-nav' @click="clicked('/contact', $event)" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>CONTACT</p></li>
          <li class='li-nav' id="li-info" @mouseover="moveToItem($event)" @mouseleave="moveBack()">
            <div id="job-offer" class="info-div" @click="clicked('/vacatures', $event)">
              <img alt="suitcase" src="../../../assets/icons/briefcase.png">
              <p>Vacatures</p>
            </div>
            <div class="info-div">
              <img alt="phone" src="../../../assets/icons/telephone.png">
              <p>0523 225 104</p>
            </div>
          </li>
      </ul>
      <div id="lines">
        <div id="logo-parts-bottom">
          <img id='logo-part-2' src="../../../assets/logo_part_2.png">
          <img id='logo-part-3' :style="{ marginLeft: bikePos + 'px' }" src="../../../assets/logo_part_3.png">
        </div>
        <div id="line-yellow" ></div>
        <div id="line-orange"></div>
        <div id="line-pink" ></div>
        <div id="line-purple" ></div>
      </div>
    </div>
  </nav>
</template> 

<script>
export default {
  name: "navBar",
  data(){
    return {
      upHere: false,
      bikePos: 0,
      lastClickedPos: 0,
      leftPosBicycles: 0,
      leftPosAccessories: 0,
      subMenuImgSrc: 'electric',
      accSubMenuImgSrc: 'movanext'
    }
  },
  methods: {
    moveToItem(e) {
      this.bikePos = this.getBikePos(e.target);
    },
    moveBack() {
      this.bikePos = this.lastClickedPos;
    },
    clicked(route, event) {
      if (route.includes('fietsen')) 
        this.lastClickedPos = this.getBikePos(this.$refs.li_sub_bicycles);
      else if (route.includes('accessoires')) 
        this.lastClickedPos = this.getBikePos(this.$refs.li_sub_accessories);
      else 
        this.lastClickedPos = this.getBikePos(event.target);
      this.$router.push(route);
    },
    clickedInPage(route, element) { 
      this.lastClickedPos = this.getBikePos(element);
      this.bikePos = this.lastClickedPos;
      this.$router.push(route);
      window.scrollTo(0,0);
    },
    getBikePos(element) {
      const elDimensions = element.getBoundingClientRect();
      const logoWidth = this.$refs.logo_parts.getBoundingClientRect().width;
      return elDimensions.right - (elDimensions.width / 2) - logoWidth;
    },
    changePic(src) {
      this.subMenuImgSrc = src;
    }
  },
  mounted() {
    const initialBikePos = this.getBikePos(this.$refs.li_home);
    this.bikePos = initialBikePos;
    this.lastClickedPos = initialBikePos;
  },
  updated() {
    this.leftPosBicycles = this.$refs.li_sub_bicycles.getBoundingClientRect().left;
    this.leftPosAccessories = this.$refs.li_sub_accessories.getBoundingClientRect().left;
  }
};
</script>

<style scoped>

#nav-body {
  background-size: 15% auto;
  background-repeat: repeat; 
  background-image:
  linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgb(16 16 16 / 1)),
  url('../../../assets/bike-chain.png');
}

ul { 
  list-style-type: none;
}

#ul-nav {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#lines { 
  position: relative;
}
#line-yellow { 
  border-bottom: 6px solid #ff8647;
}
#line-orange { 
  border-bottom: 6px solid #ff5c49;
}
#line-pink { 
  border-bottom: 6px solid #d61a67;
}
#line-purple { 
  border-bottom: 6px solid #600026;
}

li {
  float: left;
  cursor: pointer;
}

.li-nav, .li-nav-subbed { 
  margin: 32px 2% 0 2%;
}

#li-logo { 
  margin-right: 1%;
}
#logo-parts { 
  margin: 19px 0 0 12px;
}
#logo-part-1 { 
  float: left;
  margin-bottom: 5px;
  height: 35px;
}
#logo-parts-bottom{
  position: absolute;
}
#logo-part-2 { 
  height: 24px;
}
#logo-part-3 { 
  position: absolute;
  bottom: 5px;
  height: 23px;
  transition: margin-left 0.5s; 
}

.li-nav-subbed { 
  line-height: 31px;
}
#sub-title {
  margin-top: -7%;
}
.sub-menu {
  position: absolute;
  z-index: 1;
  top: 59px;
  right: 0;
  background-position: center;
  background-size: 100% auto;
  border-radius: 0 0 0 60px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  border-left: 5px solid #600026;
  border-bottom: 5px solid #600026;
}
.sub-menu ul {
  width: 60%;
  padding: 0 6px;
  float: left;
}
li.li-nav-subbed:hover > .sub-menu { 
  visibility: visible;
  opacity: 1;
}

.sub-menu-item {
  display: flex;
  margin: 48px;
  justify-content: left;
  align-items: center;
  overflow: hidden;
}

.sub-menu-item img { 
  width: 36px; height: 36px;
  margin-right: 26px;
  float: left;
}
.sub-menu-item p {
  font-size: 16px;
  float: left;
}
.sub-menu ul li { 
  float: none;
}
#li-accessories {
  margin-top: -4%;
}

li p { 
  font-size: 18px;
  margin: 0;
}

p { 
  font-style: oblique;
  font-size: 14px;
  color: white;
}

#li-info {
  cursor: initial;
  margin: 12px 12px 0 0;
  float: right;
}

#info-row {
  padding: 0;
  float: right;
  overflow: hidden;
}

#job-offer {
  cursor: pointer;
  padding-bottom: 8px;
}

.info-div {
  overflow: hidden;
}
.info-div img, 
.info-div p {
  float: left;
}
.info-div img {
  margin: 0 8px;
  height: 14px;
}
.info-div p {
  font-size: 14px;
}

@media screen and (min-width: 800px) and (max-width: 1024px)  {
  li p, .sub-menu { 
    font-size: 12px;
  }
  #sub-title {
    margin-top: -16%;
  }
  .li-nav, .li-nav-subbed { 
    margin: 36px 1.5% 0 1.5%;
  }
  #li-info { 
    display: none;
  }
  #li-accessories {
    margin-top: -10%;
  }
  /* .sub-menu-item img { 
    height: 24px;
    margin: 14px 6% 18px 3%;
    float: left;
  }
  .sub-menu-item p { 
    font-size: 12px;
  }
  #li-info { 
    margin: 35px 18px 0 0;
  }  */
}
@media screen and (min-width: 1024px) and (max-width: 1280px)  {
  li p, .sub-menu { 
    font-size: 13px;
  }
  #sub-title {
    margin-top: -15.5%;
  }
  .li-nav, .li-nav-subbed { 
    margin: 36px 1.5% 0 1.5%;
  }
  #li-info { 
    display: block;
  }
  #li-accessories {
    margin-top: -10%;
  }
  /* .sub-menu-item img { 
    height: 24px;
    margin: 14px 6% 18px 3%;
    float: left;
  }
  .sub-menu-item p { 
    font-size: 12px;
  }
  #li-info { 
    margin: 35px 18px 0 0;
  }  */
}
</style>

