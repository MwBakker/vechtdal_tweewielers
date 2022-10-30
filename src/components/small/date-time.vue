<template>
    <div class='date_time'>
        <div class='date'><p>{{ day }}: </p></div>
            <div class='time'>
            <div class='time_first'><p>{{ timeFirst }}</p></div>
                <div class='time_last'><p>{{ timeLast }}</p></div>
            </div>
        </div>
</template>

<script>
export default {
    name: "dateTime",
    props: {
        day: String,
        timeFirst: String,
        timeLast: String 
    }
  };
</script>

<style scoped>

.date_time {
    width: 75%;
    display: flex;
    height: 60px;
    margin: 0 auto;
}
.date {
    margin: auto;
    width: 50%;
}
.time {
    margin: auto;
    flex: 1;
}
.time p { 
    margin: 0;
}
</style>