<template>
  <div id='footer'>
    <div id="lines">
      <hr id="line-yellow" />
      <hr id="line-orange"/>
      <hr id="line-pink" />
      <hr id="line-purple" />
    </div>
    <div id="footer-content">
      <div id="site-ref">
        <div id="site-ref-text">
          <p>Powered by: Martijn Bakker</p>
          <p>© Vechtdal Tweewielers Hardenberg</p>
        </div>
      </div>
      <div id='logos'>
        <a href='https://www.facebook.com/vechtdaltweewielers/'><img class='logo' src='../../assets/icons/fb-follow.png'/></a>
        <a href='https://www.instagram.com/@vechtdaltweewielers/'><img class='logo' src='../../assets/icons/insta.png'/></a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'footerSection',
  props: {
    msg: String
  }
}
</script>
<style scoped>

#footer {
  position: relative;
  background-size: 15% auto;
  background-repeat: repeat; 
  background-image:
  linear-gradient(to bottom, rgb(2 2 2 / 100%), rgb(16 16 16 / 92.5%)),
  url('../../assets/bike-chain.png');
}

#lines hr { 
  margin: 0;
}

#line-yellow { 
  border: 1px solid #ff8647;
}
#line-orange { 
  border: 1px solid #ff5c49;
}
#line-pink { 
  border: 1px solid #d61a67;
}
#line-purple { 
  border: 1px solid #600026;
}

#footer-content { 
  overflow: hidden;
}

#site-ref { 
  float: left;
}

#site-ref-text {
  margin: 0 0 0 12px;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#site-ref-text p {
  text-align: left;
  font-size: 11px;
  margin: 4px 0;
  color: #ffffff85;
}

#logos {
  float: right;
}
.logo {
  height: 26px;
  margin: 4px 6px;
}

</style>