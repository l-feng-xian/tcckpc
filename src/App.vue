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
            <img @click="isSelectBaChange(1)" v-if="isSelectBa == 1" class="bar-img" src="./assets/images/bar1b.png" alt="" />
            <img @click="isSelectBaChange(1)" v-else class="bar-img" src="./assets/images/bar1.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(2)" v-if="isSelectBa == 2" class="bar-img" src="./assets/images/bar2b.png" alt="" />
            <img @click="isSelectBaChange(2)" v-else class="bar-img" src="./assets/images/bar2.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(3)" v-if="isSelectBa == 3" class="bar-img" src="./assets/images/bar3b.png" alt="" />
            <img @click="isSelectBaChange(3)" v-else class="bar-img" src="./assets/images/bar3.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(4)" v-if="isSelectBa == 4" class="bar-img" src="./assets/images/bar4b.png" alt="" />
            <img @click="isSelectBaChange(4)" v-else class="bar-img" src="./assets/images/bar4.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(5)" v-if="isSelectBa == 5" class="bar-img" src="./assets/images/bar5b.png" alt="" />
            <img @click="isSelectBaChange(5)" v-else class="bar-img" src="./assets/images/bar5.png" alt="" />
          </li>
          <li>
            <img @click="isSelectBaChange(6)" v-if="isSelectBa == 6" class="bar-img" src="./assets/images/bar6b.png" alt="" />
            <img @click="isSelectBaChange(6)" v-else class="bar-img" src="./assets/images/bar6.png" alt="" />
          </li>
        </ul>
      </div>

      <div class="app-contnet">
        <div class="app-content-l">
          <div class="app-content-l-box">
            <div class="app-content-l-top" style="width: 100%;height: 32%;background-color: ;">
              <leftTopVue></leftTopVue>
            </div>
            <div class="app-content-l-center" style="width: 100%;height: 36%;background-color: ;">
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
      isSelectBa: 999
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
      this.isSelectBa = i
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
  width: 124px;
  height: 88px;
  float: left;
  margin-left: -30px;
  position: relative;
}

.app-box-down ul .bar-img {
  display: inline-block;
  width: 100%;
  height: 100%;
  /* background-image: url(./assets/images/bar1.png); */
  fill: opacity(0%);
}

.app-contnet {
  width: 100%;
  height: 100%;
  display: flex;
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
