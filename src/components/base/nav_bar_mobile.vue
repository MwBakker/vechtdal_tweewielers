<template>
    <nav id="nav-bar-mobile">
      <div id="nav-body">
        <div id="li-logo" @click="redirect('home')" >
            <div id="logo-parts" ref="logo_parts">
                <img id='logo-part-1' src="../../assets/logo_part_1.png">
            </div>
        </div>
        <div id="lines">
            <div>
                <img id='logo-part-2' src="../../assets/logo_part_2.png">
                <img id='logo-part-3' :style="{ marginLeft: bikeMovement + 'px' }" src="../../assets/logo_part_3.png">
            </div>
            <hr id="line-yellow" />
            <hr id="line-orange"/>
            <hr id="line-pink" />
            <hr id="line-purple" />
        </div>
        <ul id="ul-nav">
            <li class='li-nav' @click="this.$router.push('/')"><p>HOME</p></li>
            <li class='li-nav-subbed'><p id="sub-title">FIETSEN</p>
            <div class="sub-menu">
              <ul>
                <li @click="this.$router.push('/fietsen/elektrisch')"><div  class='sub-menu-item'><img src="../../assets/icons/bike-electric.png"><p>ELEKTRISCH</p></div></li>
                <li @click="this.$router.push('/fietsen/stad')"><div class='sub-menu-item'><img src="../../assets/icons/bike.png"><p>STAD</p></div></li>
                <li @click="this.$router.push('/fietsen/sportief')"><div class='sub-menu-item'><img src="../../assets/icons/bike-sport.png"><p>SPORTIEF</p></div></li>
                <li @click="this.$router.push('/fietsen/bedrijfs-gerelateerd')"><div class='sub-menu-item'><img src="../../assets/icons/bike.png"><p>BEDRIJFSGERELATEERD</p></div></li>
              </ul>
            </div>
          </li>
            <li class='li-nav' @click="this.$router.push('/onderhoud_en_reparatie')"><p>ONDERHOUD & REPARATIE</p></li>
            <li class='li-nav' @click="this.$router.push('/verhuur')"><p>VERHUUR</p></li>
            <li class='li-nav' @click="this.$router.push('/over')" ><p>OVER ONS</p></li>
            <li class='li-nav' @click="this.$router.push('/contact')"><p>CONTACT</p></li>
        </ul>
      </div>
    </nav>
  </template> 
  
<script>
export default {
  name: "navBar",
  data(){
    return {
      upHere: false,
      bikeMovement: 150
    }
  },
};
</script>
  
<style scoped>
  
#nav-body {
  background-size: 85% auto;
  background-repeat: repeat; 
  background-image:
  linear-gradient(to bottom, rgba(18, 18, 18, 0.8), rgb(16 16 16 / 1)),
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


.li-nav, .li-nav-subbed { 
  margin: 16px 0;
}

#li-logo { 
  margin-bottom: 8px;
}
#logo-parts {
  width: 50%;
  margin: auto; 
  height: 5vh;
}
#logo-part-1 { 
  margin: auto;
  margin-bottom: 5px;
  height: 35px;
}
#logo-part-2 { 
  position: absolute;
  left: 25%; 
  bottom: 1px;
  height: 22px;
  clear: both;
}
#logo-part-3 { 
  position: absolute;
  left: 23%; 
  bottom: 1px;
  height: 22px;
}
.li-nav-subbed { 
  line-height: 31px;
}
.sub-menu {
  width: 100%;
  position: absolute;
  z-index: 1;
  right: 0;
  background: linear-gradient(to right, rgb(18 18 18 / 1), rgb(18 18 18 / 0.99), rgb(18 18 18 / 0.8), rgb(18 18 18 / 0.5), rgb(18 18 18 / 0)), url('../../assets/bike-city.jpg');
  background-position: center;
  background-size: 100% 100%;
  border-radius: 0 0 0 60px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  border-left: 2px solid #600026;
  border-bottom: 2px solid #600026;
}
.sub-menu ul {
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

.li-nav-icon { 
  margin: 3px 20px 3px 0;
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