<template>
  <div id="app">
    <div class="app-box">
      <div class="app-box-title positionbg">
        <div class="title">图圈查控驾驶舱</div>
        <div class="dateTime">2022年5月19日 星期一</div>
        <div class="time">15:12:13</div>
      </div>

      <div class="app-box-left positionbg"></div>

      <div class="app-box-right positionbg"></div>

      <div class="app-box-down positionbg"></div>

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
export default {
  name: 'App',
  components: { leftTopVue, leftCenterVue, leftDownVue, rightTopVue, rightCenterVue, rightDownVue }
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
.app-box-title  .dateTime {
  position: absolute;
  top: 32px;
  left: 15%;
  color: #7CBCFF;
  font-size: 12px;
  transform: rotate(2deg);
}
.app-box-title  .time {
  position: absolute;
  top: 32px;
  right: 18%;
  color: #7CBCFF;
  font-size: 12px;
  transform: rotate(-2deg);
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
  right: 36%;
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
