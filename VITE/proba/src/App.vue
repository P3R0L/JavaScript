<script>
export default {
  data() {
    return {
      message: "Ola mundo!",
      count: 0,
    };
  },
};
</script>
<template>
  <h1>{{ message }}</h1>
  <button @click="count++">You clicked me {{ count }} times.</button>
  <FoodItem />
  <FoodItem />
</template>
<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>
