<template>
  <navBar id='nav-bar'/>
  <navBarMobile id="nav-bar-mobile" />
  <div id="app-body">
    <router-view></router-view>
  </div>
  <footerSection id="footer" />
</template>

<script>
import navBar from "@/components/base/nav_bar.vue";
import navBarMobile from "@/components/base/nav_bar_mobile.vue";
import footerSection from "@/components/base/footer.vue";

export default {
  name: "App",
  components: {
    navBar,
    navBarMobile,
    footerSection
  },
};
</script>

<style>
#nav-bar { 
  min-height: 8vh;
}

#app {
  display: flex; 
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  background-image:
  linear-gradient(to bottom, rgb(18 18 18 / 87.5%), rgb(18 18 18 / 100%)),
  url('../src/assets/background.png');
  background-size: 100% 100%;
  background-attachment: fixed;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccd2d8;
}

#app-body{
  flex: 1;
}

#footer { 
  min-height: 6vh;
}

@media screen and (min-width: 320px) and (max-width: 768px)  {
  #nav-bar {
    display: none;
  }
  #nav-bar-mobile {
    display: block;
  }
  #body-app { 
    min-height: 57vh;
  }
  #background { 
    background-size: 100% 100%;
  }
}

@media screen and (min-width: 768px)  {
  #nav-bar {
    display: block;
  }
  #nav-bar-mobile {
    display: none;
  }
}
</style>