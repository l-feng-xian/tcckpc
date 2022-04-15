<template>
    <div style="height: 100%;">
        <baseTitleVue title="勤务资源"></baseTitleVue>
        <div class="class-total">
            <div class="class-total-item">
                <div class="class-total-item-top">
                    <span class="item-top-icon"></span>
                    <span class="item-top-text">勤务等级</span>
                </div>
                <div class="class-total-item-down">
                    <span class="item-down-text">{{ dataMessage.class1 }}<span>级</span></span>
                </div>
            </div>
            <div class="class-total-item class-total-item-r">
                <div class="class-total-item-top">
                    <span class="item-top-icon"></span>
                    <span class="item-top-text">勤务等级</span>
                </div>
                <div class="class-total-item-down">
                    <span class="item-down-text">{{ dataMessage.class2 }}</span>
                </div>
            </div>
        </div>
        <div class="statistics">
            <div class="statistics-l">
                <div class="statistics-l-top">
                    <div class="statistics-l-text">警力总数</div>
                    <div class="statistics-l-number">1920</div>
                </div>
                <div class="statistics-l-down">
                    <div class="statistics-l-text">在岗警力数</div>
                    <div class="statistics-l-number">1920</div>
                </div>
            </div>
            <div class="statistics-r">
                <div class="statistics-pic" id="statisticsPic"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import baseTitleVue from './baseTitle.vue';
export default {
    components: { baseTitleVue },
    data() {
        return {
            dataMessage: { class1: '12', class2: '120' }
        }
    },
    mounted() {
        this.setPic()
    },
    methods: {
        setPic() {
            let myChart = echarts.init(document.getElementById('statisticsPic'));
            myChart.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                    icon:'stack',
                    itemWidth: 4,
                    textStyle: {
                        color: '#CBEAFF'
                    }
                },
                series: [
                    {
                        name: '勤务资源',
                        type: 'pie',
                        radius: ['40%', '80%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 5,
                            borderColor: '#fff',
                            borderWidth: 0
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 735, name: '民警' },
                            { value: 580, name: '武警' },
                            { value: 484, name: '辅警' },
                            { value: 300, name: '其他' }
                        ]
                    }
                ]
            });
        }
    }
}
</script>

<style scoped>
.class-total {
    display: flex;
    justify-content: space-between;
}

.class-total-item {
    width: 173px;
    height: 62px;
    background-image: url(../assets/images/qwdj.png);
    background-size: cover;
}

.class-total-item-r {
    background-image: url(../assets/images/qwxss.png);
}

.class-total-item-top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
}

.item-top-icon {
    width: 22px;
    height: 12px;
    background-image: url(../assets/images/bgdash.png);
}

.item-top-text {
    width: 60px;
    height: 16px;
    font-size: 12px;
    font-family: MicrosoftYaHeiLight;
    color: #FFFFFF;
    line-height: 16px;
    text-shadow: 1px 0px 1px rgba(32, 53, 255, 0.96), 0px 0px 3px #2651FD;
}

.class-total-item-down {
    display: flex;
    justify-content: flex-end;
}

.item-down-text {
    width: 82px;
    text-align: center;
    color: #FFFFFF;
    font-size: 20px;
    line-height: 30px;
}

.item-down-text>span {
    font-size: 12px;
    font-family: MicrosoftYaHeiLight;
    color: #FFFFFF;
    line-height: 16px;
    text-shadow: 1px 0px 1px rgba(32, 53, 255, 0.96), 0px 0px 3px #2651FD;
    margin-left: 2px;
}

.statistics {
    width: 100%;
    height: calc(100% - 112px);
    background-image: linear-gradient(to right, #284a7e, transparent);
    display: flex;
}

.statistics-l {
    width: 165px;
}

.statistics-l-top,
.statistics-l-down {
    width: 100%;
    height: 50%;
    background-image: url(../assets/images/jinglzs.png);
    background-size: 100% 100%;
    background-position: center;
}

.statistics-l-down {
    background-image: url(../assets/images/jinglzgs.png);
}

.statistics-l-text {
    padding-top: 10%;
    color: #CBEAFF;
    font-size: 12px;
    text-indent: 45%;
}

.statistics-l-number {
    color: #FFFFFF;
    font-size: 20px;
    text-indent: 45%;
}

.statistics-r {
    flex: 1;
    background-image: url(../assets/images/bingtdz.png);
    background-repeat: no-repeat;
    background-position: center 90%;
}

.statistics-pic {
    width: 100%;
    height: 100%;
}
</style>