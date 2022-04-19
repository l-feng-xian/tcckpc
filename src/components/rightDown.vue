<template>
    <div style="height: 100%;">
        <baseTitleVue title="成效总览"></baseTitleVue>
        <div class="select-box">
            <div @click="selectTypeClick(index)" class="select-box-item"
                :class="activeType === index ? 'select-box-item-a' : ''" v-for="(item, index) in selectType"
                :key="index">{{ item }}</div>
        </div>
        <div class="select-table">
            <div class="select-table-r">
                <div class="select-table-r-scroll">
                    <div class="select-table-r-item" v-for="item, index in topList" :key="index + 'r'">
                        <div class="select-table-r-item-icon" v-if="item.id === 1">{{ item.id }}</div>
                        <div class="select-table-r-item-icon icon2" v-else-if="item.id === 2">{{ item.id }}</div>
                        <div class="select-table-r-item-icon icon3" v-else-if="item.id === 3">{{ item.id }}</div>
                        <div class="select-table-r-item-icon icon4" v-else>{{ item.id }}</div>
                        <div class="select-table-r-item-title">{{ item.name }}</div>
                        <div class="select-table-r-item-content">
                            <div class="select-table-r-item-number">
                                <div class="bg-line">
                                    <div class="bg-line-stpe"></div>
                                </div>
                            </div>
                        </div>
                        <div class="select-table-r-time">{{ item.time }}<span>分钟</span></div>
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
            selectType: ['等待均长', '核查量'],
            activeType: 0,
            isUp: false,
            topList: [
                { name: '三江检查站', time: '3.4', id: 1},
                { name: '三江检查站', time: '2.4', id: 2},
                { name: '三江检查站', time: '1.4', id: 3},
                { name: '三江检查站', time: '1.4', id: 4},
                { name: '三江检查站', time: '1.4', id: 5},
                { name: '三江检查站', time: '1.4', id: 6},
                { name: '三江检查站', time: '1.4', id: 7},
                { name: '三江检查站', time: '1.4', id: 8},
                { name: '三江检查站', time: '1.4', id: 1},
                { name: '三江检查站', time: '2.4', id: 2},
                { name: '三江检查站', time: '1.4', id: 3},
                { name: '三江检查站', time: '1.4', id: 4},
                { name: '三江检查站', time: '1.4', id: 5},
                { name: '三江检查站', time: '1.4', id: 6},
                { name: '三江检查站', time: '1.4', id: 7},
                { name: '三江检查站', time: '1.4', id: 8},
            ]
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
    background: linear-gradient(90deg, rgba(56, 135, 242, 0.15) 0%, rgba(65, 150, 255, 0) 100%);
    border: 1px solid;
    border-image: linear-gradient(84deg, rgba(126, 190, 255, 0.6), rgba(126, 189, 255, 0)) 1 1;
    font-size: 12px;
    color: rgb(160, 160, 160);
    line-height: 22px;
    margin-right: 10px;
    cursor: pointer;
    text-align: center
}

.select-box-item-a {
    color: #fff !important;
    font-weight: bold;
}

.select-table {
    height: calc(100% - 72px);
    display: flex;
    overflow: hidden;
}

.select-table .select-table-l {
    width: 100px;
}

.select-table .select-table-l .select-table-l-item {
    height: 50%;
    display: flex;
    align-items: center;
}

.select-table-r {
    flex: 1;
    background: linear-gradient(90deg, rgba(48, 74, 206, 0.23) 0%, rgba(48, 74, 206, 0.13) 11%, rgba(0, 34, 57, 0) 100%);
    position: relative;
}

.select-table-r-scroll {
    height: 100%;
    animation: isRun 10s linear infinite normal;
}

.select-table-r-item {
    width: 100%;
    height: 12.5%;
    margin: 10px 0;
    /* height: 25%; */
    display: flex;
    align-items: center;
}

.select-table-r-item .select-table-r-item-icon {
    width: 22px;
    height: 22px;
    background-image: url(../assets/images/dy.png);
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F96085;
    font-size: 12px;
}

.select-table-r-item .icon2 {
    background-image: url(../assets/images/die.png);
    color: #F99260;
}

.select-table-r-item .icon3 {
    background-image: url(../assets/images/dis.png);
    color: #F9C760;
}

.select-table-r-item .icon4 {
    background-image: url(../assets/images/dishi.png);
    color: #68C5FD;
}

.select-table-r-item .select-table-r-item-title {
    width: 100px;
    color: #FAFAFA;
    text-align: center;
    font-size: 14px;
}

.select-table-r-item .select-table-r-time {
    width: 80px;
    text-align: right;
    color: #fff;
    font-size: 20px;
}

.select-table-r-item .select-table-r-time span {
    color: #B9CFDA;
    font-size: 12px;
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
    height: 12px;
    border: 1px solid #1C3888;
    position: relative;
    box-sizing: border-box;
    padding: 2px;
}

.select-table-r-item-number .bg-line {
    width: 100%;
    height: 100%;
    background-color: #082A58;
    box-sizing: border-box;
}

.bg-line-stpe {
    width: 80%;
    height: 100%;
    background: linear-gradient(90deg, #00FFE3 0%, #00CBFF 100%);
    position: relative;
}

.bg-line-stpe span {
    position: absolute;
    top: -25px;
    right: 0;
}

.bg-line-stpe span i {
    position: absolute;
    font-style: normal;
    border: 6px solid transparent;
    border-top-color: #FDCD46;
    top: 50%;
    left: 0;
    transform: translateY(-25%);
}

.bg-line-stpe span {
    font-size: 20px;
    color: #D6FFFD;
    vertical-align: middle;
    text-indent: 15px;
}

@keyframes isRun {
    100% {
        transform: translateY(-150%);
    }
}
</style>