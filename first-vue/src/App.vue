<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="box">
      <div class="bg">
        随便测试用的
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$browser-default-font-size: 100px !default; //根据自己的需求设定大小
@function pxTorem($px) {//$px为需要转换的字号
  @return $px / $browser-default-font-size * 1rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  width: pxTorem(1250px);
  height: 200px;
  background-color: beige;
  margin: 0 auto;

  .bg {
    background-color: #2c3e50;
    width: 100px;
    line-height: 100px;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    color: antiquewhite;
    font-size: pxTorem(14px);
  }
}
</style>
