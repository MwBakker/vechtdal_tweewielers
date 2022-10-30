<template>
  <div>
    <h1>Deze website wordt gebouwd</h1>
    <p>Deze website is momenteel in aanbouw, excuses voor het ongemak.</p> 
    <p>U kunt in tussentijd terecht op onze
      <a href="https://www.facebook.com/Vechtdaltweewielers" target="_blank" rel="noopener">Facebook</a>
    </p>
    <h3>Openingstijden van onze winkel</h3>
    <div id='date'>
      <div class='date_time'>
        <div class='date'><p>Dinsdag: </p></div>
        <div class='time'>
          <div class='time_first'><p>08:30 : 12:30</p></div>
            <div class='time_last'><p>13:00 : 18:00</p></div>
        </div>
      </div>
      <div class='date_time'>
        <div class='date'><p>Woensdag: </p></div>
        <div class='time'>
          <div class='time_first'><p>08:30 : 12:30</p></div>
            <div class='time_last'><p>13:00 : 18:00</p></div>
        </div>
      </div>
      <div class='date_time'>
        <div class='date'><p>Donderdag: </p></div>
        <div class='time'>
          <div class='time_first'><p>08:30 : 12:30</p></div>
            <div class='time_last'><p>13:00 : 21:00</p></div>
        </div>
      </div>
      <div class='date_time'>
        <div class='date'><p>Vrijdag: </p></div>
        <div class='time'>
          <div class='time_first'><p>08:30 : 12:30</p></div>
            <div class='time_last'><p>13:00 : 18:00</p></div>
        </div>
      </div>
      <div class='date_time'>
        <div class='date'><p>Zaterdag: </p></div>
        <div class='time'>
          <div class='time_first'><p>08:30 : 12:30</p></div>
            <div class='time_last'><p>13:00 : 17:00</p></div>
        </div>
      </div>
      <div class='date_time'>
        <div class='date'><p>Dinsdag: </p></div>
        <div class='time'>
          <div class='time_first'><p>08:30 : 12:30</p></div>
            <div class='time_last'><p>13:00 : 18:00</p></div>
        </div>
      </div>
      <div id = 'info_block'>
        <div class="info_row">
          <li><img alt="phone" src="../../assets//icons/telephone.png" width="18" height="18"></li>
          <li><p>0523 225 104</p></li>
        </div>
        <div class="info_row">
          <li><img alt="mail" src="../../assets/icons/mail.png" width="18" height="18"></li>
          <li><p>info@vechtdaltweewielers.nl</p></li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'constructionPage',
  props: {
    msg: String
  }
}
</script>
<style scoped>

#date{
  width: 320px;
  text-align: center;
  margin: auto;
}

.date_time {
  display: flex;
  height: 75px;
}

.date {
  margin: auto;
  width: 50%;
}

.time {
  margin: auto;
  flex: 1;
}

a { 
  font-size: 21px;
}

#info_block { 
  margin: 0 auto;
}

p { 
  color: #e0e4e2;
}

h1 { 
  font-size: 42px;
  margin: 0 0 60px 0;
}

h3 {
  margin: 40px 0 0 0;
}

ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}

li {
  display: inline-block;
  margin: 0 10px 0 0;
}
a {
  color: #e0e4e2;
}
</style>
