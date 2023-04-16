<template>
     <li ref="li_sub" class='li-nav-subbed' @mouseover="moveToItem($event)" @mouseleave="moveBack()"><p id="sub-title">FIETSEN</p>
        <div class="sub-menu" :style="{ left: leftPos+'px', 
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
  </template> 
  
  <script>
  export default {
    name: "navBarSub",
    data(){
      return {
        upHere: false,
        bikePos: 0,
        lastClickedPos: 0,
        leftPos: 0,
        subMenuImgSrc: 'electric'
      }
    },
    methods: {
      moveToItem(e) {
        this.$emit('moveToItem', e);
      },
      moveBack() {
        this.$emit('moveBack');
      },
      clicked(route, event) {
        this.$emit('clicked', route, event);
      },
      clickedInPage(route, element) { 
        this.$emit('clickedInPage', route, element);
      },
      getBikePos(element) {
        this.$emit('getBikePos', element);
      },
      changePic(src) {
        this.subMenuImgSrc = src;
      }
    },
    updated() { 
        this.$emit('updated');
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
  
  