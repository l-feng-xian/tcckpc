<template>
    <div style="height: 100%;">
        <baseTitleVue title="警力资源"></baseTitleVue>
        <div class="resource-total">
            <div class="resource-total-item">
                <div class="resource-item-icon"></div>
                <div class="resource-item-message">
                    <div class="resource-total-text">卡口总数</div>
                    <div class="resource-total-number">{{ 1024 }}</div>
                </div>
            </div>
            <div class="resource-total-item">
                <div class="resource-item-icon resource-item-iconsp"></div>
                <div class="resource-item-message">
                    <div class="resource-total-text">视频总数</div>
                    <div class="resource-total-number">{{ 1024 }}</div>
                </div>
            </div>
            <div class="resource-total-item resource-item-iconwrj">
                <div class="resource-item-icon"></div>
                <div class="resource-item-message">
                    <div class="resource-total-text">无人机数</div>
                    <div class="resource-total-number">{{ 1024 }}</div>
                </div>
            </div>
        </div>
        <div class="resource-eq">
            <span class="resource-eq-text">警护装备</span>
            <span class="resource-eq-number">1024</span>
        </div>
        <div class="resource-linemap" id="resourceLinemap"></div>
    </div>
</template>

<script>
import baseTitleVue from './baseTitle.vue';
import * as echarts from 'echarts';
export default {
    components: { baseTitleVue },
    data() {
        return {
            dataMessage: { class1: '12', class2: '120' }
        }
    },
    mounted() {
        this.setline()
    },
    methods: {
        setline() {
            let myChart = echarts.init(document.getElementById('resourceLinemap'));
            myChart.setOption({
                grid: {
                    x: 40,
                    y: 10,
                    x2: 0,
                    y2: 34,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['指挥通\n信设备', '指挥通\n信设备', '指挥通\n信设备', '指挥通\n信设备', '指挥通\n信设备', '指挥通\n信设备', '指挥通\n信设备'],
                    axisLine: {
                        lineStyle: {
                            color: "#CBEAFF"
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: "#CBEAFF"
                        }
                    }
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        barWidth: 20,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#83bff6' },
                                { offset: 0.5, color: '#188df0' },
                                { offset: 1, color: '#188df0' }
                            ])
                        },
                    }
                ]
            });
        }
    }
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

.resource-total-item .resource-item-iconsp {
    background-image: url(../assets/images/shipzs.png);
}

.resource-total-item .resource-item-iconwrj {
    background-image: url(../assets/images/wurenjs.png);
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

.resource-eq {
    width: 189px;
    height: 43px;
    background-image: url(../assets/images/jinghuzb.png);
    background-size: cover;
    margin: 5px 0;
}

.resource-eq .resource-eq-text {
    font-size: 12px;
    color: #fff;
    margin: 0px 8px 0px 48px;
}

.resource-eq .resource-eq-number {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
}

.resource-linemap {
    width: 100%;
    height: calc(100% - 151px);
}
</style>