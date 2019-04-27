<template>
  <section class="container">
    <v-refresh :on-refresh="onRefresh">
    <v-reload :on-infinite-load="onInfiniteLoad" :parent-pull-up-state="infiniteLoadData.pullUpState">
    <div class="bank_lists">
      <div class="bank_box">
        <div class="bank_list" v-for="item in bank_list" :key="item.id">
          <!-- <div class="bank_icon" :style="{ 'background': 'url(' + require('../assets/images/56_56/'+item.iconName) + ') no-repeat', 'background-size': '100%' }" ></div> -->
          <span class="bank_name">{{item.bankName}}</span>
        </div>
      </div>
    </div>
    <div class="hot_box">
      <div class="hot_header">
        <span class="hot_name">热门推荐</span>
        <div class="more_box">
          <span class="more_text">查看更多</span>
          <span class="more_icon"></span>
        </div>
      </div>
      <div class="hot_centenrt">
        <div class="hot_centent_left">
          <span class="hot_left_name">{{hot_centent_left.name}}</span>
          <span class="hot_left_desc">{{hot_centent_left.desc}}</span>
          <!-- <div class="hot_left_img" :style="{ 'background': 'url(' + require('../assets/images/bank/'+hot_centent_left.imgName) + ') no-repeat', 'background-size': '100%' }" ></div> -->
        </div>
        <div class="hot_centent_right">
          <div class="hot_right_top">
            <div class="hot_right_text_box">
              <span class="hot_right_name">{{hot_c_r_one.name}}</span>
              <span class="hot_right_desc">{{hot_c_r_one.desc}}</span>
            </div>
            <!-- <div class="hot_right_img" :style="{ 'background': 'url(' + require('../assets/images/bank/'+hot_c_r_one.imgName) + ') no-repeat', 'background-size': '100%' }" ></div> -->
          </div>
          <div class="hot_right_bottom">
            <div class="hot_right_text_box2">
              <span class="hot_right_name2">{{hot_c_r_two.name}}</span>
              <span class="hot_right_desc2">{{hot_c_r_two.desc}}</span>
            </div>
            <!-- <div class="hot_right_img" :style="{ 'background': 'url(' + require('../assets/images/bank/'+hot_c_r_two.imgName) + ') no-repeat', 'background-size': '100%' }" ></div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="card_state">
      <div class="card_progress border-right">
        <div class="progress_icon"></div>
        <div class="card_text">
          <span class="card_state_name">{{card_progress.name}}</span>
          <span class="card_desc">{{card_progress.desc}}</span>
        </div>
      </div>
      <div class="card_activation">
        <div class="activation_icon"></div>
        <div class="card_text">
          <span class="card_state_name">{{card_activation.name}}</span>
          <span class="card_desc">{{card_activation.desc}}</span>
        </div>
      </div>
    </div>
    <div class="card_order">
      <div class="border_bottom card_content_bottom">
        <div class="hot_header">
          <span class="hot_name">热卡排行</span>
        </div>
      </div>
      <div slot="load-more">
      <li class="card_list" v-for="(item,index) in infiniteLoadData.pullUpList" :key="item.id">
        <div class="card_content" :class="infiniteLoadData.pullUpList.length - 1 != index? 'card_content_bottom':''">
          <!-- <div class="card_img" :style="{ 'background': 'url(' + require('../../../'+item.imgName) + ') no-repeat', 'background-size': '100%' }" ></div> -->
          <div class="card_list_text">
            <p class="card_name">{{item.cardName}}</p>
            <p class="card_title">{{item.cardTitle}}</p>
            <div class="card_words_lists">
              <div class="card_words bor_rad_20">
                <p class="card_word">{{item.cardWordOne}}</p>
              </div>
              <div v-if="item.cardWordTwo" class="card_words card_words_two bor_rad_20">
                <p class="card_word">{{item.cardWordTwo}}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
      </div>
    </div>
    </v-reload>
    </v-refresh>
  </section>
</template>

<script>
import DropDownRefresh from '../../components/DropDownRefresh'
import PullUpReload from '../../components/PullUpReload'
export default {
  data () {
    return {
      bank_list: [
        {
          iconName: 'logo.png',
          bankName: '招商银行'
        },
        {
          iconName: 'minsheng.png',
          bankName: '民生银行'
        },
        {
          iconName: 'pingancar.png',
          bankName: '平安联名'
        },
        {
          iconName: 'xingye.png',
          bankName: '兴业银行'
        },
        {
          iconName: 'shanghai.png',
          bankName: '上海银行'
        },
        {
          iconName: 'jiaotong.png',
          bankName: '交通银行'
        },
        {
          iconName: 'guangda.png',
          bankName: '光大银行'
        },
        {
          iconName: 'more.png',
          bankName: '全部银行'
        }
      ],
      hot_centent_left: {
        bankName: '交通银行',
        name: '交行Y-POWER黑卡',
        desc: '额度100%取现',
        imgName: 'jiaohangY-POWER.png'
      },
      hot_c_r_one: {
        bankName: '招商银行',
        name: '招行YOUNG卡',
        desc: '生日月双倍积分',
        imgName: 'zhaohangYOUNG.png'
      },
      hot_c_r_two: {
        bankName: '光大银行',
        name: '光大淘票票公仔联名卡',
        desc: '电影达人必备',
        imgName: 'guangdalianming.png'
      },
      card_progress: {
        name: '办卡进度',
        desc: '让等待随处可见'
      },
      card_activation: {
        name: '办卡激活',
        desc: '让等待随处可见'
      },
      card_list: [
        {
          bankName: '平安联名',
          imgName: 'pinganqiche.png',
          cardName: '平安银行信用卡',
          cardTitle: '平安银行汽车之家联名单币卡',
          cardWordOne: '首年免年费',
          cardWordTwo: '加油88折'
        },
        {
          bankName: '上海银行',
          imgName: 'shanghaitaobao.png',
          cardName: '上海银行信用卡',
          cardTitle: '淘宝金卡',
          cardWordOne: '积分抵现',
          cardWordTwo: '首刷有礼'
        },
        {
          bankName: '华夏银行',
          imgName: 'huaxiaiqiyi.png',
          cardName: '华夏银行信用卡',
          cardTitle: '华夏爱奇艺悦看卡',
          cardWordOne: '送爱奇艺会员',
          cardWordTwo: '商城8折'
        },
        {
          bankName: '浦发银行',
          imgName: 'pufajianyue.png',
          cardName: '浦发银行信用卡',
          cardTitle: '浦发银行简约白金卡',
          cardWordOne: '团购立减',
          cardWordTwo: '酒店优惠 免年费'
        },
        {
          bankName: '中信银行',
          imgName: 'zhongxinbaijin.png',
          cardName: '中信银行信用卡',
          cardTitle: '中信银行i白金信用卡',
          cardWordOne: '首刷有礼',
          cardWordTwo: '双倍积分'
        }
      ],

      // 上拉加载的设置
      infiniteLoadData: {
        initialShowNum: 3, // 初始显示多少条
        everyLoadingNum: 3, // 每次加载的个数
        pullUpState: 0, // 子组件的pullUpState状态
        pullUpList: [], // 上拉加载更多数据的数组
        showPullUpListLength: this.initialShowNum // 上拉加载后所展示的个数
      }
    }
  },
  mounted () {
    this.getStartPullUpState()
    this.getPullUpDefData()
  },
  methods: {
    // 获取上拉加载的初始数据
    getPullUpDefData () {
      this.infiniteLoadData.pullUpList = []
      for (let i = 0; i < this.infiniteLoadData.initialShowNum; i++) {
        this.infiniteLoadData.pullUpList.push(this.card_list[i])
      }
    },

    getStartPullUpState () {
      if (this.card_list.length === this.infiniteLoadData.initialShowNum) {
        // 修改子组件的pullUpState状态
        this.infiniteLoadData.pullUpState = 3
      } else {
        this.infiniteLoadData.pullUpState = 0
      }
    },

    // 上拉一次加载更多的数据
    getPullUpMoreData () {
      this.showPullUpListLength = this.infiniteLoadData.pullUpList.length
      if (this.infiniteLoadData.pullUpList.length + this.infiniteLoadData.everyLoadingNum > this.card_list.length) {
        for (let i = 0; i < this.card_list.length - this.showPullUpListLength; i++) {
          this.infiniteLoadData.pullUpList.push(this.card_list[i + this.showPullUpListLength])
        }
      } else {
        for (let i = 0; i < this.infiniteLoadData.everyLoadingNum; i++) {
          this.infiniteLoadData.pullUpList.push(this.card_list[i + this.showPullUpListLength])
        }
      }
      if (this.card_list.length === this.infiniteLoadData.pullUpList.length) {
        this.infiniteLoadData.pullUpState = 3
      } else {
        this.infiniteLoadData.pullUpState = 0
      }
    },

    // 下拉刷新
    onRefresh (done) {
      // 如果下拉刷新和上拉加载同时使用，下拉时初始化上拉的数据
      this.getStartPullUpState()
      this.getPullUpDefData()
      done() // call done
    },

    // 上拉加载
    onInfiniteLoad (done) {
      if (this.infiniteLoadData.pullUpState === 0) {
        this.getPullUpMoreData()
      }
      done()
    }
  },
  components: {
    'v-refresh': DropDownRefresh,
    'v-reload': PullUpReload
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "../assets/css/not2rem.css"; */
    .container {
        display: flex;
        flex-direction: column;
        width: 375px;
        height: 667px;
        background-color: #f7f7f7;
    }

    .bank_lists {
        width: 100%;
        height: 160px;
        margin-top: 0px;
        background-color: #fff;
    }

    .bank_box {
        display: flex;
        flex-wrap: wrap;
        padding: 1px 2px 21px 2px;
    }

    .bank_list {
        width: 50px;
        height: 49px;
        margin: 20px 15px 0 15px;
    }

    .bank_icon {
        width: 28px;
        height: 28px;
        margin: 0 11px 9px;
    }

    .bank_name {
        display: inline-flex;
        width: 110px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        color: #333;
    }

    .hot_box {
        width: 100%;
        height: 210px;
        margin-top: 5px;
        background: #fff;
    }

    .hot_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 337px;
        height: 40px;
        margin: 0 15px 0 23px;
    }

    .hot_name {
        display: inline-flex;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        color: #333;
    }

    .more_text {
        display: inline-flex;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        color: #999;
    }

    .more_icon {
        display: inline-flex;
        margin-left: 10px;
        width: 5px;
        height: 10px;
        background: url("../../assets/logo.png") no-repeat;
        background-size: 100%;
    }

    .hot_centenrt {
        display: flex;
        flex-direction: row;
        width: 355px;
        height: 160px;
        margin: 0 10px 10px 10px;
    }

    .hot_centent_left {
        flex-direction: column;
        width: 175px;
        height: 160px;
        background: #f7f7f7;
    }

    .hot_left_name {
        display: inline-flex;
        width: 140px;
        height: 12px;
        margin: 25px 17px 0 17px;
        font-size: 12px;
        line-height: 12px;
        color: #333;
    }

    .hot_left_desc {
        display: inline-flex;
        width: 140px;
        height: 10px;
        margin: 6px 17px 0 17px;
        font-size: 10px;
        line-height: 10px;
        color: #999;
    }

    .hot_left_img {
        width: 110px;
        height: 70px;
        margin-left: 17px;
        margin-top: 17px;
    }

    .hot_centent_right {
        flex-direction: column;
        width: 175px;
        height: 160px;
        margin-left: 5px;
    }

    .hot_right_top {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 76px;
        background: #f7f7f7;
    }

    .hot_right_text_box {
        display: flex;
        flex-direction: column;
        width: 90px;
        height: 29px;
        margin: 24px 10px 0 10px;
    }

    .hot_right_name {
        display: inline-flex;
        width: 100%;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        color: #333;
    }

    .hot_right_desc {
        display: inline-flex;
        margin-top: 5px;
        width: 100%;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        color: #999;
    }

    .hot_right_img {
        width: 55px;
        height: 35px;
        margin-top: 22px;
    }

    .hot_right_bottom {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 78px;
        margin-top: 4px;
        background: #f7f7f7;
    }

    .hot_right_text_box2 {
        display: flex;
        flex-direction: column;
        width: 130px;
        margin: 15px 10px 0 10px;
    }

    .hot_right_name2 {
        display: inline-flex;
        width: 100%;
        height: 14px;
        line-height: 15px;
        font-size: 12px;
        color: #333;
    }

    .hot_right_desc2 {
        display: inline-flex;
        margin-top: 6px;
        width: 100%;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        color: #999;
    }

    .card_state {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 64px;
        margin-top: 5px;
        background-color: #fff;
    }

    .card_progress {
        display: inline-flex;
        width: 163px;
        height: 44px;
        margin: 10px 0 10px 24px;
    }

    .progress_icon {
        width: 24px;
        height: 24px;
        margin: 10px 0;
        background: url("../../assets/logo.png") no-repeat;
        background-size: 100%;
    }

    .activation_icon {
        width: 24px;
        height: 24px;
        margin: 10px 0;
        background: url("../../assets/logo.png") no-repeat;
        background-size: 100%;
    }

    .card_text {
        width: 114px;
        height: 33px;
        margin: 5px 10px 5px 15px;
    }

    .card_state_name {
        display: inline-flex;
        width: 100%;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        color: #333;
    }

    .card_desc {
        display: inline-flex;
        width: 100%;
        height: 11px;
        line-height: 11px;
        font-size: 11px;
        margin-top: 8px;
        color: #999;
    }

    .card_activation {
        display: inline-flex;
        width: 163px;
        height: 44px;
        margin: 10px 0 10px 24px;
    }

    .card_order {
        width: 100%;
        height: auto;
        margin-top: 5px;
        background-color: #fff;
    }

    .border_bottom {
        width: 100%;
        height: 40px;
    }

    .card_list {
        width: 100%;
        height: 114px;
        list-style-type: none;
    }

    .card_content {
        display: flex;
        flex-direction: row;
        width: 350px;
        height: 114px;
        margin-left: 25px;
    }

    .card_img {
        width: 93px;
        height: 60px;
        margin: 27px 0 27px 10px;
    }

    .card_list_text {
        flex-direction: column;
        width: 183px;
        height: 62px;
        margin: 26px 17px 26px 37px;
    }

    .card_name {
        width: 100%;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        color: #333;
    }

    .card_title {
        width: 100%;
        height: 12px;
        margin-top: 10px;
        line-height: 12px;
        font-size: 12px;
        color: #666;
    }

    .card_words_lists {
        display: flex;
        flex-direction: row;
    }

    .card_words {
        height: 18px;
        margin-top: 8px;
        background-color: #e8ca88;
    }

    .card_word {
        height: 10px;
        padding: 4px 9px;
        line-height: 10px;
        font-size: 10px;
        color: #4b4b4b;
    }

    .card_words_two {
        margin-left: 10px;
    }
</style>