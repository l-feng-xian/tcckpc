<template>
    <div style="height: 100%;">
        <baseTitleVue title="站点信息"></baseTitleVue>
        <div class="select-box">
            <div @click="selectTypeClick(index)" class="select-box-item"
                :class="activeType === index ? 'select-box-item-a' : ''" v-for="(item, index) in selectType"
                :key="index">
                {{ item }}
                <img src="../assets/images/tbsbg1.png" alt="">
            </div>
        </div>
        <div class="select-number">
            <div class="select-number-box">
                <div class="select-number-icon"></div>
                <div class="select-number-text">站点总数</div>
                <div class="select-number-total">{{ 1024 }}<img class="select-number-total-bg" src="../assets/images/zhuangs1.png" alt=""/></div>
            </div>
            <div class="select-number-box">
                <div class="select-number-icon select-number-icon-r"></div>
                <div class="select-number-text">运行总数</div>
                <div class="select-number-total">{{ 1024 }}<img class="select-number-total-bg" src="../assets/images/zhuangs1.png" alt=""/></div>
            </div>
        </div>
        <div class="select-table">
            <table class="select-table-table">
                <thead>
                    <tr>
                        <th><span>类型<img class="thead-bg" src="../assets/images/biaogzs.png" alt=""/></span></th>
                        <th>总数</th>
                        <th>已启用</th>
                    </tr>
                    <span class="thead-line thead-line1"></span>
                    <span class="thead-line thead-line2"></span>
                    <span class="thead-line thead-line3"></span>
                    <span class="thead-line thead-line4"></span>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in 5" :key="index">
                        <td><div class="td-box">{{'检查站'}}</div></td>
                        <td><div class="td-box">{{'1024'}}</div></td>
                        <td><div class="td-box">{{'1024'}}</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import baseTitleVue from './baseTitle.vue';
export default {
    components: { baseTitleVue },
    data() {
        return {
            selectType: ['全部', '环杭', '环赛区', '环场馆'],
            activeType: 0
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
    transform: translateY(-5px);
}

.select-box-item {
    padding: 0 10px;
    height: 22px;
    background-size: cover;
    font-size: 12px;
    color: rgb(160, 160, 160);
    line-height: 28px;
    margin-right: 1px;
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
.select-number {
    width: 100%;
    display: flex;
    align-items: center;
    height: 40px;
}

.select-number-box {
    flex: 1;
    display: flex;
    align-items: center;
}

.select-number-box .select-number-icon {
    width: 17px;
    height: 17px;
    background-image: url(../assets/images/zhandzs.png);
    background-size: cover;
}

.select-number-box .select-number-icon-r {
    background-image: url(../assets/images/yunxzs.png);
    background-size: cover;
}

.select-number-box .select-number-text {
    width: 56px;
    font-size: 14px;
    color: #7CBCFF;
    margin: 0 10px;
    white-space: nowrap;
}

.select-number-box .select-number-total {
    flex: 1;
    font-size: 21px;
    font-weight: bold;
    color: #02F4FF;
    position: relative;
}
.select-number-box .select-number-total .select-number-total-bg {
    position: absolute;
    transform: translate(-16px, -3px);
}
.select-table {
    height: calc(100% - 112px);
}

.select-table .select-table-table {
    width: 100%;
    height: 100%;
}

.select-table .select-table-table thead {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: linear-gradient(76deg, rgba(3, 122, 189, 0.7) 0%, rgba(16, 91, 255, 0.03) 100%);
    text-align: left;
    text-indent: 20px;
    font-size: 14px;
    color: #CBEAFF;
    position: relative;
}
.select-table-table thead .thead-bg {
    display: inline-block;
    height: 30px;
    position: absolute;
    transform: translateX(-14px);
}
.select-table .select-table-table thead .thead-line {
    position: absolute;
    width: 8px;
    height: 1px;
    background-color: #7ABAFF;
}
.select-table .select-table-table thead .thead-line1 {
    top: 0;left: 0;
}
.select-table .select-table-table thead .thead-line2 {
    top: 0;right: 0;
}
.select-table .select-table-table thead .thead-line3 {
    bottom: 0;left: 0;
}
.select-table .select-table-table thead .thead-line4 {
    bottom: 0;right: 0;
}
.select-table .select-table-table tbody {
    height: calc(100% - 30px);
    position: relative;
}
.select-table .select-table-table tbody::after {
    content: " ";
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    background-image: linear-gradient(180deg, #06082a00 70%, #09122b);
}
.select-table-table tbody tr {
    background: linear-gradient(80deg, rgba(0, 109, 218, 0.3) 0%, rgba(76, 193, 255, 0) 100%);
    border-bottom: 1px solid #103C50;
    box-sizing: border-box;
}
.select-table-table tbody .td-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-indent: 20px;
    font-size: 12px;
    color: #7CAFC7;
}
</style>