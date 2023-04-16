<template>
    <nav id="nav-bar-mobile">
      <div id="nav-body">
        <div id="li-logo" @click="redirect('home')" >
          <img id='logo-part-1' src="../../../assets/logo_part_1.png">
        </div>
        <div id="lines">
          <div id="logo-parts-bottom">
              <img id='logo-part-2' src="../../../assets/logo_part_2_mob.png">
              <img id='logo-part-3' src="../../../assets/logo_part_3.png">
          </div>
          <div id="line-yellow" ></div>
          <div id="line-orange"></div>
          <div id="line-pink" ></div>
          <div id="line-purple" ></div>
        </div>
        <ul id="ul-nav">
          <li class='li-nav' @click="clicked('/', 'home')">
            <div class='li-select'>
              <img :src="gearIcon" :style="{ opacity: selected == 'home' ? 1 : 0}"/>
                <p>HOME</p>
              <img :src="gearIcon" :style="{ opacity: selected == 'home' ? 1 : 0}"/>
            </div>
          </li>
          <li class='li-nav-subbed'>
            <div class='li-select'>
              <img :style="{ opacity: selected == 'bicycle' ? 1 : 0}" :src="gearIcon"/>
                <p id="sub-title" @click="subMenuAppearance()">FIETSEN</p>
              <img :style="{ opacity: selected == 'bicycle' ? 1 : 0}" :src="gearIcon"/>
            </div>
          <div class="sub-menu" :style="{ visibility: visible, opacity: opac }">
            <ul>
              <li @click="[clicked('/fietsen/elektrisch', 'bicycle'), subMenuAppearance()]"><div class='sub-menu-item'><img src="../../../assets/icons/bike-electric.png"><p>ELEKTRISCH</p></div></li>
              <li @click="[clicked('/fietsen/stad', 'bicycle'), subMenuAppearance()]"><div class='sub-menu-item'><img src="../../../assets/icons/bike.png"><p>STAD</p></div></li>
              <li @click="[clicked('/fietsen/sportief', 'bicycle'), subMenuAppearance()]"><div class='sub-menu-item'><img src="../../../assets/icons/bike-sport.png"><p>SPORTIEF</p></div></li>
              <li @click="[clicked('/fietsen/bedrijfs-gerelateerd', 'bicycle'), subMenuAppearance()]"><div class='sub-menu-item'><img src="../../../assets/icons/bike.png"><p>BEDRIJFSGERELATEERD</p></div></li>
            </ul>
          </div>
        </li>
          <li class='li-nav' @click="clicked('/onderhoud_en_reparatie', 'maintenance')">
            <div class='li-select'>
              <img :style="{ opacity: selected == 'maintenance' ? 1 : 0}" :src="gearIcon"/>
                <p>ONDERHOUD & REPARATIE</p>
              <img :style="{ opacity: selected == 'maintenance' ? 1 : 0}" :src="gearIcon"/>
            </div>
          </li>
          <li class='li-nav' @click="clicked('/verhuur', 'rental')">
            <div class='li-select'>
              <img :style="{ opacity: selected == 'rental' ? 1 : 0}" :src="gearIcon"/>
              <p>VERHUUR</p>
              <img :style="{ opacity: selected == 'rental' ? 1 : 0}" :src="gearIcon"/>
            </div>
          </li>
          <li class='li-nav' @click="clicked('/over', 'about')" >
            <div class='li-select'>
              <img :style="{ opacity: selected == 'about' ? 1 : 0}" :src="gearIcon"/>
                <p>OVER ONS</p>
              <img :style="{ opacity: selected == 'about' ? 1 : 0}" :src="gearIcon"/>
            </div>
          </li>
          <li class='li-nav' @click="clicked('/contact', 'contact')">
            <div class='li-select'>
              <img :style="{ opacity: selected == 'contact' ? 1 : 0}" :src="gearIcon"/>
                <p>CONTACT</p>
              <img :style="{ opacity: selected == 'contact' ? 1 : 0}" :src="gearIcon"/>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </template> 
  
<script>
export default {
  name: "navBar",
  data(){
    return {
      gearIcon: require('../../../assets/icons/gear.png'),
      selected: 'home',
      opac: 0,
      visible: "hidden",
    }
  },
  methods: {
    clicked(route, name) {
      this.selected = name;
      this.$router.push(route);
      window.scrollTo(0,0);
    },
    subMenuAppearance() { 
      if (this.opac == 0) { 
          this.opac = 1; 
          this.visible = "visible";
        } else { 
          this.opac = 0; 
          this.visible = "hidden";
        }
    },
  },
};
</script>
  
<style scoped>
  
#nav-body {
  background-size: cover;
  background-repeat: repeat; 
  background-image:
  linear-gradient(to bottom, rgba(18, 18, 18, 0.8), rgb(16 16 16 / 1)),
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

.li-select {
  overflow: hidden;
  margin: 0 auto;
}

.li-select img {
  height : 19px;
  float: left;
  margin: 0 5%;
  transition: opacity 0.5s;
}

.li-nav, .li-nav-subbed { 
  overflow: hidden;
  margin: 16px 0;
}

#li-logo { 
  padding-top: 8px;
}
#logo-part-1 { 
  margin: auto;
  margin-bottom: 5px;
  height: 35px;
}
#logo-parts-bottom { 
  position: absolute;
  width: 100%;
}
#logo-part-2, #logo-part-3 { 
  height: 23px;
}

.li-nav-subbed { 
  line-height: 20px;
}
.sub-menu {
  width: 100%;
  position: absolute;
  z-index: 1;
  right: 0;
  background: linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url('../../../assets/bike-city.jpg');
  background-position: center;
  background-size: 100% 100%;
  border-radius: 0 0 0 60px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.25s linear;
  border-left: 2px solid #600026;
  border-bottom: 2px solid #600026;
}
.sub-menu ul {
  padding: 0 6px;
  float: left;
}

.sub-menu-item {
  display: flex;
  margin: 28px;
  justify-content: left;
  align-items: center;
  overflow: hidden;
}

.sub-menu-item img { 
  width: 36px; height: 36px;
  margin-right: 32px;
  float: left;
}
.sub-menu-item p {
  font-size: 14px;
  width: auto;
  float: left;
}
.sub-menu ul li { 
  float: none;
}

.li-nav-icon { 
  margin: 3px 20px 3px 0;
}

li p { 
  width: 69.75%;
  float: left;
  font-size: 18px;
  margin: 0;
}

p { 
  font-style: oblique;
  font-size: 14px;
  color: white;
}

#li-info {
  float: right;
  margin-right: 26px;
}

#info-row { 
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
</style>  