<template>
   <div class="card">
        <img :src="require(`../../assets/${imgSrc}.jpg`)" alt={{title}}>
        <div class="text">
            <p>{{title}}</p>
        </div>
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

.text p { 
    font-size: 20px;
}

.card img {
    width: 100%; 
    height: 80%; 
    object-fit: cover;
}
#text {
    height: 20%; 
}

@media screen and (min-width: 320px) and (max-width: 801px)  {
    .card img { 
        height: 85%;
    }
  .text p { 
    font-size: 13px;
  }
}
</style>