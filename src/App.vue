<template>
  <div id="app">
    <div class="app-box">
      <div class="app-box-title positionbg">
        <div class="title">圈层查控驾驶舱</div>
        <div class="dateTime">{{ dateTimes }}</div>
        <div class="time">{{ timeNow }}</div>
        <div class="selectbox">
          <select @change="optionListChange">
            <option v-for="(item, i) in optionList" :key="i" :value="item">{{ item }}</option>
          </select>
        </div>
      </div>

      <div class="app-box-left positionbg"></div>

      <div class="app-box-right positionbg"></div>

      <div class="app-box-down positionbg">
        <ul>
          <li>
            <img @click="isSelectBaChange(1)" v-if="isSelectBa.includes(1)" class="bar-img" src="./assets/images/bar1b.png"
              alt="" />
            <img @click="isSelectBaChange(1)" v-else class="bar-img" src="./assets/images/bar1.png" alt="" />
          </li>
          <li>
            <div class="bar-two-box" v-if="isSelectBaChangeTwo">
              <img class="bar-two-box-bg" src="./assets/images/jcd.png" alt="" />
              <span class="bar-two-box-j"></span>
              <div class="bar-two-select">
                <input type="checkbox" name="mm" value="1" />
                <img src="./assets/images/yijjcd.png" alt="">
                <p>一级检查点</p>
              </div>
              <div class="bar-two-select">
                <input type="checkbox" name="mm" value="1" />
                <img src="./assets/images/erjijcd.png" alt="">
                <p>二级检查点</p>
              </div>
              <div class="bar-two-select">
                <input type="checkbox" name="mm" value="1" />
                <img src="./assets/images/shanjjcd.png" alt="">
                <p>三级检查点</p>
              </div>
            </div>
            <img @click="isSelectBaChange(2)" v-if="isSelectBa.includes(2)" class="bar-img" src="./assets/images/bar2b.png"
              alt="" />
            <img @click="isSelectBaChange(2)" v-else class="bar-img" src="./assets/images/bar2.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(3)" v-if="isSelectBa.includes(3)" class="bar-img" src="./assets/images/bar3b.png"
              alt="" />
            <img @click="isSelectBaChange(3)" v-else class="bar-img" src="./assets/images/bar3.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(4)" v-if="isSelectBa.includes(4)" class="bar-img" src="./assets/images/bar4b.png"
              alt="" />
            <img @click="isSelectBaChange(4)" v-else class="bar-img" src="./assets/images/bar4.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(5)" v-if="isSelectBa.includes(5)" class="bar-img" src="./assets/images/bar5b.png"
              alt="" />
            <img @click="isSelectBaChange(5)" v-else class="bar-img" src="./assets/images/bar5.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(6)" v-if="isSelectBa.includes(6)" class="bar-img" src="./assets/images/bar6b.png"
              alt="" />
            <img @click="isSelectBaChange(6)" v-else class="bar-img" src="./assets/images/bar6.png" alt="" />
          </li>
        </ul>
      </div>

      <div class="app-contnet">
        <!-- 地图区域 -->
        <div class="app-contnet-map">
          <div class="app-contnet-map-bar">
            <div @click="mapBarListClicl(i)" class="app-contnet-map-bar-item" :class="item.isCalss" v-for="(item, i) in mapBarList" :key="i + 'b'" :style="{backgroundImage: 'url(' + (activeMapBar === i ? item.abgi : item.bgi) + ')'}">
              <img :src="activeMapBar === i ? item.aicon : item.icon" :class="activeMapBar === i ? 'active-barimg' : ''" alt=""/><p>{{item.text}}</p>
            </div>
          </div>
          <div class="app-contnet-map-type">
            <div class="app-contnet-map-type-item" :class="item.isCalss" v-for="(item, i) in mapTypeLict" :key="i + 't'">
              <img :src="item.bgi" alt=""/>
              <h2>{{item.title}}</h2>
              <p>{{item.numbers}}<span>{{item.types}}</span></p>
              <div v-if="i < mapTypeLict.length - 1" class="item-line" :style="{transform: item.isRotate}"></div>
            </div>
          </div>
        </div>
        <div class="app-content-l">
          <div class="app-content-l-box">
            <div class="app-content-l-top" style="width: 100%;height: 35%;background-color: ;">
              <leftTopVue></leftTopVue>
            </div>
            <div class="app-content-l-center" style="width: 100%;height: 33%;background-color: ;">
              <leftCenterVue></leftCenterVue>
            </div>
            <div class="app-content-l-down" style="width: 100%;height: 32%;background-color: ;">
              <leftDownVue></leftDownVue>
            </div>
          </div>
        </div>
        <div class="app-content-c"></div>
        <div class="app-content-r">
          <div class="app-content-r-box">
            <div class="app-content-r-top" style="width: 100%;height: 32%;background-color: ;">
              <rightTopVue></rightTopVue>
            </div>
            <div class="app-content-r-center" style="width: 100%;height: 30%;background-color: ;">
              <rightCenterVue></rightCenterVue>
            </div>
            <div class="app-content-r-down" style="width: 100%;height: 38%;background-color: ;">
              <rightDownVue></rightDownVue>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import baseTitle from "./components/baseTitle.vue"

import leftTopVue from "./components/leftTop.vue"
import leftCenterVue from "./components/leftCenter.vue"
import leftDownVue from "./components/leftDown.vue"
import rightTopVue from "./components/rightTop.vue"
import rightCenterVue from "./components/rightCenter.vue"
import rightDownVue from "./components/rightDown.vue"
// import picVue from "./components/pic.vue"
export default {
  name: 'App',
  components: { leftTopVue, leftCenterVue, leftDownVue, rightTopVue, rightCenterVue, rightDownVue },
  data() {
    return {
      dateTimes: '',
      dateTimeNo: '',
      timeNow: '',
      optionList: ['全市', '环杭', '环赛区', '环场馆',],
      isSelectBa: [],
      isSelectBaChangeTwo: false,
      mapBarList: [
        {bgi: require('./assets/images/mapBar1.png'), abgi: require('./assets/images/mapbar1b.png'), icon: require('./assets/images/mapicon1.png'), aicon: require('./assets/images/mapicon1b.png'), text: '环杭', isCalss: 'app-contnet-map-bar-item1'},
        {bgi: require('./assets/images/mapbar2.png'), abgi: require('./assets/images/mapbar2b.png'), icon: require('./assets/images/mapicon2.png'), aicon: require('./assets/images/mapicon2b.png'), text: '环赛区', isCalss: 'app-contnet-map-bar-item2'},
        {bgi: require('./assets/images/mapbar3.png'), abgi: require('./assets/images/mapbar3b.png'), icon: require('./assets/images/mapicon3.png'), aicon: require('./assets/images/mapicon3b.png'), text: '环场馆', isCalss: 'app-contnet-map-bar-item3'}
      ],
      activeMapBar: 999,
      mapTypeLict: [
        {bgi: require('./assets/images/maptype1.png'), title: '申报', numbers: '3501', types: '辆', isCalss: '', isRotate: 'rotate(-20deg)'},
        {bgi: require('./assets/images/maptype2.png'), title: '申报', numbers: '3501', types: '人', isCalss: 'transfrom', isRotate: 'rotate(20deg)'},
        {bgi: require('./assets/images/maptype3.png'), title: '通过', numbers: '3501', types: '辆', isCalss: '', isRotate: 'rotate(-20deg)'},
        {bgi: require('./assets/images/maptype4.png'), title: '通过', numbers: '3501', types: '人', isCalss: 'transfrom', isRotate: 'rotate(-20deg)'}
      ]
    }
  },
  mounted() {
    this.getDate()
    this.getDateTimeNo()
    setInterval(() => {
      this.getDateTimeNo()
    }, 1000);
  },
  methods: {
    getDate() {
      let time = new Date()
      let y = time.getFullYear()
      let m = time.getMonth() + 1
      let d = time.getDate()
      let w = time.getDay()
      let xq = ''
      switch (w) {
        case 0:
          xq = '星期天'
          break;
        case 1:
          xq = '星期一'
          break;
        case 2:
          xq = '星期二'
          break;
        case 3:
          xq = '星期三'
          break;
        case 4:
          xq = '星期四'
          break;
        case 5:
          xq = '星期五'
          break;
        case 6:
          xq = '星期六'
          break;
        default:
          break;
      }
      this.dateTimes = y + '年' + m + '月' + d + '日' + '  ' + xq
      console.log(y, m, d, w, xq);
    },
    getDateTimeNo() {
      let time = new Date()
      let h = time.getHours() >= 10 ? time.getHours() : '0' + time.getHours()
      let mm = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()
      let ss = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()
      this.timeNow = h + ':' + mm + ':' + ss
    },
    optionListChange(e) {
      let index = e.target.options.selectedIndex
      console.log(index, 'optionListChange');
    },
    isSelectBaChange(i) {
      if(this.isSelectBa.includes(i)) {
        this.isSelectBa.map((m, index) =>{
          if(m === i) {
            this.isSelectBa.splice(index, 1)
          }
        })
      } else {
        this.isSelectBa.push(i)
      }
      if(i === 2) {
        if(this.isSelectBa.includes(2)) {
          this.isSelectBaChangeTwo = true
        } else {
          this.isSelectBaChangeTwo = false
        }
      }
    },
    mapBarListClicl(i) {
      if(i === this.activeMapBar) {
        this.activeMapBar = 999
      } else {
        this.activeMapBar = i
      }
    }
  },
}
</script>

<style>
@import './assets/css/reset.css';

.app-box {
  height: 100vh;
  width: 100vw;
  background-color: #0B1223;
  overflow: hidden;
}

.positionbg {
  position: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.app-box-title {
  top: 0;
  left: 0;
  right: 0;
  height: 105px;
  background-image: url(./assets/images/titleTop.png);
  background-position: center -2px;
  z-index: 999;
  position: absolute;
}

.app-box-title .title {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 21px;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 0px 2px 1px #5B8BDD;
  font-weight: bold;
}

.app-box-title .dateTime {
  position: absolute;
  top: 32px;
  left: 14.5%;
  color: #7CBCFF;
  font-size: 12px;
  transform: rotate(2deg);
}

.app-box-title .time {
  position: absolute;
  top: 32px;
  right: 18%;
  color: #7CBCFF;
  font-size: 12px;
  transform: rotate(-2deg);
}

.app-box-title .selectbox {
  position: absolute;
  bottom: 17px;
  left: 50%;
  transform: translateX(-50%);
}

.app-box-title .selectbox select {
  color: #7CBCFF;
  background-color: transparent;
  border: none;
  outline: none;
}

.app-box-title .selectbox option {
  outline: none;
  background-color: #1157A1;
  border: 1px solid #1157A1;
}

.app-box-left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 74px;
  background-image: url(./assets/images/leftbg.png);
  z-index: 999;
}

.app-box-right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 74px;
  background-image: url(./assets/images/rightbg.png);
  z-index: 999;
}

.app-box-down {
  bottom: 0;
  left: 0;
  right: 0;
  height: 97px;
  background-image: url(./assets/images/down.png);
  background-position: center 2px;
  background-size: 120% 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-box-down ul {
  margin-top: -125px;
  margin-left: 48px;
}

.app-box-down ul li {
  width: 121px;
  height: 79px;
  float: left;
  margin-left: -30px;
  position: relative;
  cursor: pointer;
}

.app-box-down ul .bar-img {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.bar-two-box {
  position: absolute;
  width: 170px;
  height: 140px;
  background-color: #0A2C66;
  top: -220%;
  left: -8%;
  opacity: 0.8;
}

.bar-two-box .bar-two-box-bg {
  position: absolute;
  width: 86px;
  height: 32px;
  left: 29px;
  bottom: -23px;
}

.bar-two-box .bar-two-box-j {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #0A2C66;
  transform: rotate(45deg);
  left: 65px;
  bottom: -7px;
}

.bar-two-select {
  width: 100%;
  display: flex;
  height: 33.33%;
  align-items: center;
}

.bar-two-select input[type="checkbox"] {
  width: 12px;
  height: 12px;
  margin: 0 14px;
  background: transparent;
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.bar-two-select input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: #0A2C66;
  width: 100%;
  height: 100%;
  border: 1px solid #1193BA;
  border-radius: 2px;
}

.bar-two-select input[type="checkbox"]:checked::before {
  content: "\2713";
  background-color: #0A2C66;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #1193BA;
  border-radius: 2px;
  color: #1193BA;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
}

.bar-two-select img {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}
.bar-two-select p {
  flex: 1;
  font-size: 14px;
  color: #CCF7FF;
}
.app-contnet {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.app-contnet-map {
  position: absolute;
  top: 0;right: 0;bottom: 0;left: 0;
}
.app-contnet-map .app-contnet-map-bar {
  position: absolute;
  height: 210px;
  width: 56px;
  z-index: 9999;
  right: 32%;
  bottom: 26%;
}
.app-contnet-map .app-contnet-map-bar .app-contnet-map-bar-item {
  position: absolute;
  cursor: pointer;
}
.app-contnet-map .app-contnet-map-bar .app-contnet-map-bar-item1 {
  width: 56px;
  height: 71px;
  background-image: url(./assets/images/mapBar1.png);
  background-size: cover;
  top: 0;left: 0;
}
.app-contnet-map .app-contnet-map-bar .app-contnet-map-bar-item2 {
  width: 50px;
  height: 64px;
  background-image: url(./assets/images/mapbar2.png);
  background-size: cover;
  top: 66px;left: 3px;
}
.app-contnet-map .app-contnet-map-bar .app-contnet-map-bar-item3 {
  width: 58px;
  height: 73px;
  background-image: url(./assets/images/mapbar3.png);
  background-size: cover;
  bottom: 13px;left: -1px;
}
.app-contnet-map .app-contnet-map-bar img {
  display: block;
  width: 22px;
  height: 22px;
  margin: 13px auto 0px auto;
}
.app-contnet-map .app-contnet-map-bar .active-barimg {
  width: 35px;
  height: 35px;
  margin: 6px auto -5px auto;
}
.app-contnet-map .app-contnet-map-bar p {
  font-size: 12px;
  text-align: center;
  color: #CBEAFF;
  line-height: 20px;
}
.app-contnet-map-type {
  position: absolute;
  top: 133px;left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  align-items: center;
}
.app-contnet-map-type .app-contnet-map-type-item {
  position: relative;
  width: 203px;
  height: 153px;
  margin-left: -30px;
}
.app-contnet-map-type .transfrom {
  transform: translateY(-34px);
}
.app-contnet-map-type .app-contnet-map-type-item img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.app-contnet-map-type .app-contnet-map-type-item h2 {
  position: absolute;
  top: 10px;left: 0;right: 0;
  font-size: 14px;
  color: #CBEAFF;
  text-align: center;
}
.app-contnet-map-type .app-contnet-map-type-item p {
  position: absolute;
  bottom: 20px;left: 0;right: 0;
  font-size: 24px;
  color: #fff;
  text-align: center;
}
.app-contnet-map-type .app-contnet-map-type-item p > span {
  font-size: 12px;
  color: #CBEAFF;
  margin-left: 5px;
}
.app-contnet-map-type .app-contnet-map-type-item .item-line {
  position: absolute;
  top: 50%;left: 68%;
  width: 100px;
  border: 1px solid;
  border-image: linear-gradient(225deg, rgba(87, 219, 219, 0.2), rgba(178, 244, 255, 1), rgba(151, 233, 232, 0.2), rgba(191, 241, 241, 0.2), rgba(178, 244, 255, 1), rgba(155, 239, 239, 0.2), rgba(186, 249, 248, 0.2), rgba(178, 244, 255, 0.91), rgba(44, 181, 180, 0.2)) 1 1;
  transform: rotate(-20deg);
  transform-origin: 0 0;
}
.app-content-l,
.app-content-r {
  flex: 1.9;
  /* background-color: pink; */
  position: relative;
}

.app-content-l {
  background-image: url(./assets/images/contentleft.png);
  background-size: 130% 100%;
  background-position: 90% 0%;
}

.app-content-r {
  background-image: url(./assets/images/contentright.png);
  background-size: 118% 100%;
  background-position: 0% 0%;
}

.app-content-l-box {
  position: absolute;
  top: 50px;
  left: 96px;
  bottom: 97px;
  right: 39%;
  /* background-color: pink; */
}

.app-content-r-box {
  position: absolute;
  top: 50px;
  right: 96px;
  bottom: 97px;
  left: 36%;
}

.app-content-c {
  flex: 1;
}
</style>
