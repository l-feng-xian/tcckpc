<template>
    <div style="height: 100%;">
        <baseTitleVue title="成效总览"></baseTitleVue>
        <div class="select-box">
            <div @click="selectTypeClick(index)" class="select-box-item"
                :class="activeType === index ? 'select-box-item-a' : ''" v-for="(item, index) in selectType"
                :key="index">{{ item }}
                <img src="../assets/images/tbsbg1.png" alt="">
            </div>
        </div>
        <div class="select-table">
            <div class="select-table-l">
                <div class="select-table-l-item">
                    <div class="select-table-l-item-box">
                        <p class="box-title">核查总量</p>
                        <p class="box-number">1024<span :style="{ color: !isUp ? '#FF2525' : '#3EFF25' }">+15% <img v-if="!isUp" src="../assets/images/up.png" alt=""/> <img v-else src="../assets/images/down1.png" alt=""/></span></p>
                    </div>
                </div>
                <div class="select-table-l-item">
                    <div class="select-table-l-item-box select-table-l-item-box1">
                        <p class="box-title">核查异常数</p>
                        <p class="box-number">124<span :style="{ color: isUp ? '#FF2525' : '#3EFF25' }">-15% <img v-if="isUp" src="../assets/images/up.png" alt=""/> <img v-else src="../assets/images/down1.png" alt=""/></span></p>
                    </div>
                </div>
            </div>
            <div class="select-table-r">
                <div class="select-table-r-shadio">
                    <span class="shadio-bg shadio-bg1"></span>
                    <span class="shadio-bg shadio-bg2"></span>
                </div>
                <div class="select-table-r-item">
                    <div class="select-table-r-item-icon"></div>
                    <div class="select-table-r-item-content">
                        <p>人</p>
                        <div class="select-table-r-item-number">
                            <div class="bg bg-tl"></div>
                            <div class="bg bg-tr"></div>
                            <div class="bg bg-bl"></div>
                            <div class="bg bg-br"></div>
                            <div class="bg-line">
                                <div class="bg-line-stpe">
                                    <div class="bg-line-stpe-li"><i v-for="item in 100" :key="item"></i></div>
                                    <span><i></i>1024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="select-table-r-item select-table-r-item1">
                    <div class="select-table-r-item-icon"></div>
                    <div class="select-table-r-item-content">
                        <p>车</p>
                        <div class="select-table-r-item-number">
                            <div class="bg bg-tl"></div>
                            <div class="bg bg-tr"></div>
                            <div class="bg bg-bl"></div>
                            <div class="bg bg-br"></div>
                            <div class="bg-line">
                                <div class="bg-line-stpe">
                                    <div class="bg-line-stpe-li"><i v-for="item in 100" :key="item"></i></div>
                                    <span><i></i>1024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="select-table-r-item select-table-r-item2">
                    <div class="select-table-r-item-icon"></div>
                    <div class="select-table-r-item-content">
                        <p>船</p>
                        <div class="select-table-r-item-number">
                            <div class="bg bg-tl"></div>
                            <div class="bg bg-tr"></div>
                            <div class="bg bg-bl"></div>
                            <div class="bg bg-br"></div>
                            <div class="bg-line">
                                <div class="bg-line-stpe">
                                    <div class="bg-line-stpe-li"><i v-for="item in 100" :key="item"></i></div>
                                    <span><i></i>1024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="select-table-r-item select-table-r-item3">
                    <div class="select-table-r-item-icon"></div>
                    <div class="select-table-r-item-content">
                        <p>物</p>
                        <div class="select-table-r-item-number">
                            <div class="bg bg-tl"></div>
                            <div class="bg bg-tr"></div>
                            <div class="bg bg-bl"></div>
                            <div class="bg bg-br"></div>
                            <div class="bg-line">
                                <div class="bg-line-stpe" :style="{ width: bgLineStpe[0] }">
                                    <div class="bg-line-stpe-li"><i v-for="item in 100" :key="item"></i></div>
                                    <span><i></i>1024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import baseTitleVue from './baseTitle.vue';
export default {
    components: { baseTitleVue },
    data() {
        return {
            selectType: ['今日', '历史'],
            activeType: 0,
            isUp: false,
            bgLineStpe: ['90%', '60%', '80%', '100%']
        }
    },
    mounted() {
    },
    methods: {
        selectTypeClick(index) {
            this.activeType = index
        }
    }
}
</script>

<style scoped>
.select-box {
    width: 100%;
    height: 22px;
    display: flex;
    justify-content: flex-end;
    transform: translateY(-10px);
}

.select-box-item {
    padding: 0 10px;
    height: 22px;
    font-size: 12px;
    color: rgb(160, 160, 160);
    line-height: 28px;
    margin-right: 10px;
    cursor: pointer;
    text-align: center;
    position: relative;
}

.select-box-item img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    width: 54px;
    height: 33px;
}

.select-box-item-a {
    color: #fff !important;
    font-weight: bold;
}

.select-box-item-a img {
    opacity: 1;
    width: 54px;
    height: 33px;
}

.select-table {
    height: calc(100% - 72px);
    display: flex;
}

.select-table .select-table-l {
    width: 100px;
}

.select-table .select-table-l .select-table-l-item {
    height: 50%;
    display: flex;
    align-items: center;
}

.select-table-l-item-box {
    width: 67px;
    height: 87px;
    background-image: url(../assets/images/hczl.png);
    transform: scale(0.8);
    background-size: cover;
}

.select-table-l-item-box1 {
    background-image: url(../assets/images/hcycs.png);
}

.select-table-l-item-box .box-title {
    font-size: 12px;
    color: #CBEAFF;
    text-align: center;
    line-height: 24px;
}

.select-table-l-item-box .box-number {
    padding-top: 10px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    position: relative;
}
.select-table-l-item-box .box-number img {
    position: absolute;
    width: 10px;
    height: 10px;
}
.select-table-l-item-box .box-number span {
    font-size: 12px;
    position: absolute;
}

.select-table-r {
    flex: 1;
    background: linear-gradient(90deg, rgba(48, 74, 206, 0.23) 0%, rgba(48, 74, 206, 0.13) 11%, rgba(0, 34, 57, 0) 100%);
    position: relative;
}
.select-table-r .select-table-r-shadio {
    position: absolute;
    top: 0;left: 0;
    width: 100%;
    height: 100%;
    transform: translate(-4px, -4px);
    background: linear-gradient(90deg, rgba(48, 74, 206, 0.23) 0%, rgba(48, 74, 206, 0.13) 11%, rgba(0, 34, 57, 0) 100%);
}
.select-table-r .select-table-r-shadio .shadio-bg {
    position: absolute;
    width: 2px;
    height: 2px;
    border: 2px solid #02F4FF;
}
.select-table-r .select-table-r-shadio .shadio-bg1 {
   top: 0;left: 0;
   border-right-color: transparent;
   border-bottom-color: transparent;
}
.select-table-r .select-table-r-shadio .shadio-bg2 {
    left: 0;bottom: 0;
    border-right-color: transparent;
    border-top-color: transparent;
}
.select-table-r-item {
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
}
.select-table-r-item .select-table-r-item-icon {
    width: 32px;
    height: 27px;
    background-image: url(../assets/images/ren.png);
    margin: 0px 5px 0px 10px;
    background-size: cover;
}

.select-table-r-item1 .select-table-r-item-icon {
    background-image: url(../assets/images/che.png);
}

.select-table-r-item2 .select-table-r-item-icon {
    background-image: url(../assets/images/chuan.png);
}

.select-table-r-item3 .select-table-r-item-icon {
    background-image: url(../assets/images/wu.png);
}

.select-table-r-item .select-table-r-item-content {
    flex: 1;
}

.select-table-r-item .select-table-r-item-content p {
    font-size: 12px;
    color: #CBEAFF;
    margin-bottom: 2px;
}

.select-table-r-item-number {
    width: 100%;
    height: 15px;
    border-top: 1px solid #0C235B;
    border-bottom: 1px solid #0C235B;
    position: relative;
    box-sizing: border-box;
    padding: 2px;
}

.select-table-r-item-number .bg {
    position: absolute;
    width: 2px;
    height: 2px;
    border: 1px solid #0053FF;
}

.select-table-r-item-number .bg-tl {
    top: 0;
    left: 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
}

.select-table-r-item-number .bg-tr {
    top: 0;
    right: 0;
    border-left-color: transparent;
    border-bottom-color: transparent;
}

.select-table-r-item-number .bg-bl {
    bottom: 0;
    left: 0;
    border-top-color: transparent;
    border-right-color: transparent;
}

.select-table-r-item-number .bg-br {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
}

.select-table-r-item-number .bg-line {
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/jdtbg.png);
    background-size: 150%;
    background-position: 0px -10px;
    padding: 2px;
    box-sizing: border-box;
}

.bg-line-stpe {
    width: 80%;
    height: 100%;
    background: linear-gradient(270deg, #7FBFFF 0%, #004DFF 100%);
    position: relative;
}

.select-table-r-item1 .bg-line-stpe {
    background: linear-gradient(270deg, #FDE155 0%, #FF7302 100%);
}

.select-table-r-item2 .bg-line-stpe {
    background: linear-gradient(270deg, #00FFE3 0%, #00CBFF 100%);
}

.select-table-r-item3 .bg-line-stpe {
    background: linear-gradient(270deg, #82E8A8 0%, #00CA61 100%);
}

.bg-line-stpe .bg-line-stpe-li {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.bg-line-stpe .bg-line-stpe-li i {
    float: left;
    width: 2px;
    height: 100%;
    background-color: #0E204C;
    margin-left: 1px;
}

.bg-line-stpe span {
    position: absolute;
    top: -20px;
    right: 0;
}

.bg-line-stpe span i {
    position: absolute;
    font-style: normal;
    border: 4px solid transparent;
    border-top-color: #FDCD46;
    top: 50%;
    left: 0;
    transform: translateY(-25%);
}

.bg-line-stpe span {
    font-size: 16px;
    color: #D6FFFD;
    vertical-align: middle;
    text-indent: 15px;
}
</style>