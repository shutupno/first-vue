<template>
    <div class="index">
        <router-link to="/list">list</router-link>
        <ul>
            <li v-for="(relation,index) in relations" :key="index"  v-bind:id="relation.id" v-bind:class="{checked:index==nowIndex}"  v-on:click="relationClick(index)">
                <i></i>
                <span class="">{{relation.text}}</span>
            </li>
        </ul>
        <div v-show='nowIndex == 0'>
            {{nowIndex}}第一
        </div>
        <div v-show='nowIndex == 1'>
            {{nowIndex}}第二
        </div>
        <div v-show='nowIndex == 2'>
            {{nowIndex}}第三
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            relations: [
                {text:'项目',id:'program'},
                {text:'人员',id:'person'},
                {text:'机构',id:'organization'},
                {text:'技术',id:'tech'},
                {text:'地区',id:'location'},
                {text:'国家',id:'country'}
            ],
            nowIndex:0
        }
    },
    methods:{
        relationClick:function(index){
          this.nowIndex=index;
        }
    }
}
</script>

<style lang="scss">
    *{
    margin:0;
    padding: 0;
  }
  ul li{
    list-style: none;
  }
  .navul{
    margin:100px auto 20px;
    overflow: hidden;
  }
  .navul li{
    background-color: #5597b4;
    padding:18px 30px;
    float:left;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
  .active{
    background-color: #5597b4;
  }
  .home .home,.new .new,.contact .contact,.service .service{
    background-color: skyblue;
  }
  .checked{
       background: #eff4f7;
   }
</style>

