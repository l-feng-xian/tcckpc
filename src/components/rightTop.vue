<template>
    <div style="height: 100%;">
        <baseTitleVue title="环城检查站"></baseTitleVue>
        <div class="checkpoint-loop">
            <div class="checkpoint-loop-content" v-for="item in 10" :key="item">
                <div class="checkpoint-item">
                    <div class="checkpoint-item-title">
                        <p>检查站名称{{isStaticIndex}}</p>
                    </div>
                    <div class="checkpoint-item-static" :class="isStatic ? 'isStaticTrue' : 'isStaticFalse'"></div>
                    <div class="checkpoint-item-icon">
                        <img style="width: 30px; height: 32px;" src="@/assets/images/sp.png" alt="">
                    </div>
                </div>
                <div class="checkpoint-item checkpoint-item-li">
                    <div class="checkpoint-item-li-icon"></div>
                    <div class="checkpoint-item-li-text">站点地址：{{'金柯桥大道杭甬高速柯桥南口'}}</div>
                </div>
                <div class="checkpoint-item checkpoint-item-li">
                    <div class="checkpoint-item-li-icon1"></div>
                    <div class="checkpoint-item-li-text">站点类型：{{'金柯桥大道杭甬高速柯桥南口'}}</div>
                </div>
                <div class="checkpoint-item checkpoint-item-li">
                    <div class="checkpoint-item-li-icon2"></div>
                    <div class="checkpoint-item-li-text">勤务时间：{{'金柯桥大道杭甬高速柯桥南口'}}</div>
                </div>
                <div class="checkpoint-item checkpoint-item-li">
                    <div class="checkpoint-item-li-icon3"></div>
                    <div class="checkpoint-item-li-text">实时警力：{{'金柯桥大道杭甬高速柯桥南口'}}</div>
                </div>
                <div class="checkpoint-item checkpoint-item-li">
                    <div class="checkpoint-item-li-icon4"></div>
                    <div class="checkpoint-item-li-text">站内装备：{{'金柯桥大道杭甬高速柯桥南口'}}</div>
                </div>
            </div>
            <div class="checkpoint-loop-contral">
                <ul><li @click="isStaticIndexChange(i)" v-for="(item, i) in 10" :key="i + 'i'" :class="isStaticIndex === i ? 'isStaticActive' : ''"></li></ul>
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
            dataMessage: { class1: '12', class2: '120' },
            isStatic: true,
            isStaticIndex: 0
        }
    },
    mounted() {
    },
    methods: {
        isStaticIndexChange(i) {
            this.isStaticIndex = i
        }
    }
}
</script>

<style scoped>
.checkpoint-loop {
    width: 100%;
    height: calc(100% - 50px);
    overflow: hidden;
    position: relative;
}
.checkpoint-loop-content {
   width: 100%;
   height: 100%;
   background-image: url(../assets/images/kapbj.png);
   background-size: 100% 100%;
   display: inline-block;
}
.checkpoint-loop-contral {
    position: absolute;
    left: 0;right: 0;bottom: 0;
    width: 100%;
    height: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.checkpoint-loop-contral ul li {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #0D4363;
    float: left;
    text-align: center;
    margin: -5px 1px 0px 1px;
    cursor: pointer;
}
.checkpoint-loop-contral ul .isStaticActive {
    width: 14px;
    border-radius: 3px;
    background-color: #08E0E3;
}
.checkpoint-item {
    display: flex;
    align-items: center;
    padding: 2% 13% 0% 10%;
}
.checkpoint-item .checkpoint-item-title {
    width: 120px;
    height: 35px;
    background-image: url(../assets/images/kapbjbt.png);
    background-size: contain;
    line-height: 35px;
    background-repeat: no-repeat;
}
.checkpoint-item .checkpoint-item-title p {
    font-size: 13px;
    background: linear-gradient(180deg, #FFFFFF 0%, #6CBCFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-indent: 30px;
    white-space: nowrap;
}
.checkpoint-item .checkpoint-item-static {
    width: 56px;
    height: 20px;
}
.isStaticTrue {
    background-image: url(../assets/images/yiqd.png);
}
.isStaticFalse {
    background-image: url(../assets/images/weiqd.png);
}
.checkpoint-item .checkpoint-item-icon {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.checkpoint-item-li {
    padding: 0% 13% 0% 13%;
    margin-bottom: 6px;
}
.checkpoint-item .checkpoint-item-li-icon {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/did.png);
}
.checkpoint-item .checkpoint-item-li-icon1 {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/zdlx.png);
}
.checkpoint-item .checkpoint-item-li-icon2 {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/qwsj.png);
}
.checkpoint-item .checkpoint-item-li-icon3 {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/ssjl.png);
}
.checkpoint-item .checkpoint-item-li-icon4 {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/znzb.png);
}
.checkpoint-item .checkpoint-item-li-text {
    font-size: 12px;
    color: #CBEAFF;
    margin-left: 5px;
}
</style>