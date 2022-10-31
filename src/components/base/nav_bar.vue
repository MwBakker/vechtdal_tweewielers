<template>
  <nav id="nav-bar">
    <div id="nav-body">
      <ul id="ul-nav">
          <li id="li-logo" @click="redirect('home')" >
            <div id="logo-parts" ref="logo_parts">
              <img id='logo-part-1' src="../../assets/logo_part_1.png">
            </div>
          </li>
          <li class='li-nav' @click="this.$router.push('/')" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>HOME</p></li>
          <li class='li-nav-subbed' @mouseover="moveToItem($event)" @mouseleave="moveBack()" ref="li_sub"><p id="sub-title">FIETSEN</p>
            <div class="sub-menu" :style="{ left: leftPos+'px', 
                                                  backgroundImage: 'linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url(' + require('../../assets/bike-'+subMenuImgSrc+'.jpg') + ')' } ">
              <ul>
                <li @click="this.$router.push('/fietsen/elektrisch')" @mouseover="changePic('electric')"><div  class='sub-menu-item'><img src="../../assets/icons/bike-electric.png"><p>ELEKTRISCH</p></div></li>
                <li @click="this.$router.push('/fietsen/stad')" @mouseover="changePic('city')"><div class='sub-menu-item'><img src="../../assets/icons/bike.png"><p>STAD</p></div></li>
                <li @click="this.$router.push('/fietsen/sportief')" @mouseover="changePic('sport')"><div class='sub-menu-item'><img src="../../assets/icons/bike-sport.png"><p>SPORTIEF</p></div></li>
                <li @click="this.$router.push('/fietsen/bedrijfs-gerelateerd')" @mouseover="changePic('business')"><div class='sub-menu-item'><img src="../../assets/icons/bike.png"><p>BEDRIJFSGERELATEERD</p></div></li>
              </ul>
            </div>
          </li>
          <li class='li-nav' @click="this.$router.push('/onderhoud_en_reparatie')" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>ONDERHOUD & REPARATIE</p></li>
          <li class='li-nav' @click="this.$router.push('/verhuur')" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>VERHUUR</p></li>
          <li class='li-nav' @click="this.$router.push('/over')" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>OVER ONS</p></li>
          <li class='li-nav' @click="this.$router.push('/contact')" @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p>CONTACT</p></li>
          <li class='li-nav' id="li-info" @mouseover="moveToItem($event)" @mouseleave="moveBack()">
            <ul id="info-row">
              <li><img id="phone-icon" alt="phone" src="../../assets/icons/telephone.png"></li>
              <li><p id="phone-nr">0523 225 104</p></li>
            </ul>
          </li>
      </ul>
      <div id="lines">
        <img id='logo-part-2' src="../../assets/logo_part_2.png">
        <img id='logo-part-3' :style="{ marginLeft: bikeMovement + 'px' }" src="../../assets/logo_part_3.png">
        <hr id="line-yellow" />
        <hr id="line-orange"/>
        <hr id="line-pink" />
        <hr id="line-purple" />
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
      bikeMovement: 150,
      leftPos: 0,
      subMenuImgSrc: 'electric'
    }
  },
  methods: {
    moveToItem(e) {
      const element = e.target;
      const elDimensions = element.getBoundingClientRect();
      const logoWidth = this.$refs.logo_parts.getBoundingClientRect().width;
      this.bikeMovement = elDimensions.right - (elDimensions.width / 2) - logoWidth - (window.innerWidth * 0.0175) + 200;
    },
    moveBack() {
      this.bikeMovement = 150;
    },
    changePic(src) {
      this.subMenuImgSrc = src;
    }
  },
  updated() { 
    this.leftPos = this.$refs.li_sub.getBoundingClientRect().left;
  }
};
</script>

<style scoped>

#nav-body {
  background-size: 15% auto;
  background-repeat: repeat; 
  background-image:
  linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgb(16 16 16 / 1)),
  url('../../assets/bike-chain.png');
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
#lines hr {
  margin: 0;
}
#line-yellow { 
  border: 3px solid #ff8647;
}
#line-orange { 
  border: 3px solid #ff5c49;
}
#line-pink { 
  border: 3px solid #d61a67;
}
#line-purple { 
  border: 3px solid #600026;
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
#logo-part-2 { 
  position: absolute;
  left: 0; 
  bottom: 1px;
  height: 22px;
  clear: both;
}
#logo-part-3 { 
  position: absolute;
  left: 0; 
  bottom: 5px;
  height: 18px;
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
  cursor: none;
  margin: 30px 12px 0 0;
  float: right;
}

#info-row {
  padding: 0;
  float: right;
  overflow: hidden;
}

#phone-icon { 
  margin: 0 8px;
  height: 14px;
}
#phone-nr { 
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
    font-size: 14px;
  }
  #sub-title {
    margin-top: -12%;
  }
  .li-nav, .li-nav-subbed { 
    margin: 36px 1.5% 0 1.5%;
  }
  #li-info { 
    display: block;
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

