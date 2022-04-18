<template>
    <div style="height: 100%;">
        <baseTitleVue title="站点信息"></baseTitleVue>
        <div class="select-box">
            <div @click="selectTypeClick(index)" class="select-box-item"
                :class="activeType === index ? 'select-box-item-a' : ''" v-for="(item, index) in selectType"
                :key="index">{{ item }}</div>
        </div>
        <div class="select-number">
            <div class="select-number-box">
                <div class="select-number-icon"></div>
                <div class="select-number-text">站点总数</div>
                <div class="select-number-total">{{ 1024 }}</div>
            </div>
            <div class="select-number-box">
                <div class="select-number-icon select-number-icon-r"></div>
                <div class="select-number-text">运行总数</div>
                <div class="select-number-total">{{ 1024 }}</div>
            </div>
        </div>
        <div class="select-table">
            <table class="select-table-table">
                <thead>
                    <tr>
                        <th>类型</th>
                        <th>总数</th>
                        <th>已启用</th>
                    </tr>
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
}

.select-number-box .select-number-icon-r {
    background-image: url(../assets/images/yunxzs.png);
}

.select-number-box .select-number-text {
    width: 56px;
    font-size: 14px;
    color: #7CBCFF;
    margin: 0 10px;
}

.select-number-box .select-number-total {
    flex: 1;
    font-size: 21px;
    font-weight: bold;
    color: #02F4FF;
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
    text-indent: 10px;
    font-size: 14px;
    color: #CBEAFF;
}
.select-table .select-table-table tbody {
    height: calc(100% - 30px);
    background-image: linear-gradient(transparent 0%, #070E25 100%);
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
    text-indent: 10px;
    font-size: 12px;
    color: #7CAFC7;
}
</style>