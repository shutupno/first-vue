<template>
  <div class="hello">
    <!-- <titleH :meg="t"></titleH> -->
    <h1>{{ msg }}</h1>
    <!-- <div class="box">
      <div class="ch">
        这个是测试sass的
      </div>
    </div> -->
    <router-link to="/index">index</router-link>
    <router-link to="/touch">touch</router-link>
    <router-link to="/down">down</router-link>
    <msgChild
    ref="msgRef"
    @childsClick="btnClick"
    :msgTest='msgTest2'
    :helloTest='helloTest2'
    :CCCount='CCCount'
  >
  </msgChild>
  </div>
</template>

<script>
// 引入子组件　
  import msgChild from './test.vue';
  // import titleH from './title.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这个是HelloWorld',
      msgTest2:'',
      helloTest2:'',
      CCCount:0,
      btnVal:'',
      t:"首页"
    }
  },
  components:{
    // 声明子组件名字  
    msgChild,
    // titleH
  },
  created(){
      this.msgs()
    },
    methods:{
      msgs(){
　　　  // 给子组件变量赋值
        this.msgTest2 = '测试1'
        this.helloTest2 = '测试2'
      },
      btnClick(val) {
        this.CCCount++
        this.btnVal = val
        // 触发子组件中的函数    
        this.$refs.msgRef.msgs1()
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .box {
    width: 300px;
    height: 300px;
    background-color: #efefef;

    .ch {
      font-size: 20px;
      color: #42b983;
    }
  }
</style>
