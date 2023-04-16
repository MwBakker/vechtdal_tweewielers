<template>
  <div class="card">
    <img :src="require(`../../assets/${imgSrc}.jpg`)" alt={{title}}>
    <div class="text-container"><p>{{title}}</p></div>
  </div>
</template>

<script>
export default {
    name: "cardOverlayBottom",
    props: {
        imgSrc: String,
        title: String
    }
  };
</script>

<style scoped>

.card {
  background-color: rgba(97, 0, 39, 0.5);
  height: 36vh;
  border-radius: 26px;
  float: left;
}

.card img {
  width: 100%; 
  height: 80%; 
  object-fit: cover;
}
.text-container { 
  position: relative;
  height: 20%;
}

.text-container p { 
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 17px;
}

@media screen and (min-width: 320px) and (max-width: 801px)  {
  .card img { 
    height: 85%;
  }
  .text-container {
    height: 12.5%;
  }
  .text-container p { 
    font-size: 14px;
  }
}
</style>