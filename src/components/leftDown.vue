<template>
    <div style="height: 100%;">
        <baseTitleVue title="警力资源"></baseTitleVue>
        <div class="resource-total">
            <div class="resource-total-item" v-for="item in 3" :key="item">
                <div class="resource-item-icon"></div>
                <div class="resource-item-message">
                    <div class="resource-total-text">卡口总数</div>
                    <div class="resource-total-number">{{1024}}</div>
                </div>
            </div>
        </div>
        <div class="resource-eq">
            <span class="resource-eq-text"></span>
            <span class="resource-eq-number"></span>
        </div>
    </div>
</template>

<script>
import baseTitleVue from './baseTitle.vue';
export default {
    components: { baseTitleVue },
    data() {
        return {
            dataMessage: { class1: '12', class2: '120' }
        }
    },
    mounted() {
    },
    methods: {}
}
</script>

<style scoped>
.resource-total {
    display: flex;
}
.resource-total-item {
    flex: 1;
    display: flex;
    align-items: center;
}
.resource-total-item .resource-item-icon {
    width: 45px;
    height: 48px;
    background-image: url(../assets/images/kakzs.png);
    margin-right: 5px;
}
.resource-total-item .resource-total-text {
    font-size: 12px;
    color: #CBEAFF;
    line-height: 20px;
}
.resource-total-item .resource-total-number {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
}
</style>