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
            <div class="resource-total-item">
                <div class="resource-item-icon resource-item-iconwrj"></div>
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
        <div class="resource-linemapbox">
            <div class="resource-linemapbox-bgl"></div>
            <div class="resource-linemapbox-bgr"></div>
            <div class="resource-linemap" id="resourceLinemap"></div>
        </div>
    </div>
</template>

<script>
import baseTitleVue from './baseTitle.vue';
// import * as echarts from 'echarts';
import * as echarts from 'echarts/core';
import { LegendComponent } from 'echarts/components';
import { CustomChart } from 'echarts/charts';
echarts.use([LegendComponent, CustomChart]);
let colorList = ['#1596E8']
export default {
    components: { baseTitleVue },
    data() {
        return {
            dataMessage: { class1: '12', class2: '120' },
            data: [],
            option: {},
        }
    },
    mounted() {
        this.data = [
            { name: '指挥通\n信设备', value: 10 },
            { name: '指挥通\n信设备', value: 20 },
            { name: '指挥通\n信设备', value: 30 },
            { name: '指挥通\n信设备', value: 40 },
            { name: '指挥通\n信设备', value: 50 },
            { name: '指挥通\n信设备', value: 60 },
            { name: '指挥通\n信设备', value: 70 }
        ];
        // 拼轴显示和数据的数组
        let xAxisText = [];
        let dataList = [];
        this.data.forEach(item => {
            xAxisText.push(item.name);
            dataList.push(item.value)
        })
        // 从这里开始 创建自定义图形 —— 长方体的正面
        let MyCubeRect = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0,
                width: 40,      // 长方体宽度
                zWidth: 4,      // 阴影折角宽
                zHeight: 5      // 阴影折角高
            },
            buildPath: function (ctx, shape) {
                const api = shape.api;
                const xAxisPoint = api.coord([shape.xValue, 0]);
                const p0 = [shape.x, shape.y];
                const p1 = [shape.x - shape.width / xAxisText.length, shape.y];
                const p4 = [shape.x + shape.width / xAxisText.length, shape.y];
                const p2 = [xAxisPoint[0] - shape.width / xAxisText.length, xAxisPoint[1]];
                const p3 = [xAxisPoint[0] + shape.width / xAxisText.length, xAxisPoint[1]];

                ctx.moveTo(p0[0], p0[1]); //0
                ctx.lineTo(p1[0], p1[1]); //1
                ctx.lineTo(p2[0], p2[1]); //2
                ctx.lineTo(p3[0], p3[1]); //3
                ctx.lineTo(p4[0], p4[1]); //4
                ctx.lineTo(p0[0], p0[1]); //0
                ctx.closePath();
            }
        })
        // 创建第二个自定义图形 —— 长方体的上面和侧面
        let MyCubeShadow = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0,
                width: 40,
                zWidth: 4,
                zHeight: 5
            },
            buildPath: function (ctx, shape) {
                const api = shape.api;
                const xAxisPoint = api.coord([shape.xValue, 0]);
                //   const p0 = [shape.x, shape.y];
                const p1 = [shape.x - shape.width / xAxisText.length, shape.y];
                const p4 = [shape.x + shape.width / xAxisText.length, shape.y];
                const p6 = [shape.x + shape.width / xAxisText.length + shape.zWidth, shape.y - shape.zHeight];
                const p7 = [shape.x - shape.width / xAxisText.length + shape.zWidth, shape.y - shape.zHeight];
                const p3 = [xAxisPoint[0] + shape.width / xAxisText.length, xAxisPoint[1]];
                const p5 = [xAxisPoint[0] + shape.width / xAxisText.length + shape.zWidth, xAxisPoint[1] - shape.zHeight];

                ctx.moveTo(p4[0], p4[1]); //4
                ctx.lineTo(p3[0], p3[1]); //3
                ctx.lineTo(p5[0], p5[1]); //5
                ctx.lineTo(p6[0], p6[1]); //6
                ctx.lineTo(p4[0], p4[1]); //4

                ctx.moveTo(p4[0], p4[1]); //4
                ctx.lineTo(p6[0], p6[1]); //6
                ctx.lineTo(p7[0], p7[1]); //7
                ctx.lineTo(p1[0], p1[1]); //1
                ctx.lineTo(p4[0], p4[1]); //4
                ctx.closePath();
            }
        });
        echarts.graphic.registerShape('MyCubeRect', MyCubeRect);
        echarts.graphic.registerShape('MyCubeShadow', MyCubeShadow);
        this.option = {
            color: '#1596E8',
            grid: {
                left: '3%',
                right: '0%',
                top: '10%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: xAxisText,
                // boundaryGap: true,
                interval: 0,
                axisLabel: {
                    color: '#7CAFC7'
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                min: 0, // 自己算的最小值
                max: 100,
                interval: 35,
                type: 'value',
                axisLabel: {
                    color: '#7CAFC7'
                },
                splitLine: {
                    show: false
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            series: [
                {
                    name: '次数',
                    type: 'custom',
                    renderItem: (params, api) => {
                        let location = api.coord([api.value(0), api.value(1)]);
                        return {
                            type: 'group',
                            children: [{
                                type: 'MyCubeRect',
                                shape: {
                                    api,
                                    xValue: api.value(0),
                                    yValue: api.value(1),
                                    x: location[0],
                                    y: location[1]
                                },
                                style: {
                                    fill: colorList[params.dataIndex % colorList.length]
                                },      // api.style()——继承原本的样式
                            }, {
                                type: 'MyCubeShadow',
                                shape: {
                                    api,
                                    xValue: api.value(0),
                                    yValue: api.value(1),
                                    x: location[0],
                                    y: location[1]
                                },
                                style: {
                                    fill: colorList[params.dataIndex % colorList.length],
                                    text: ''            // 继承原本样式的基础上将label清空 如果不清空生成的图上会显示两个重叠的label
                                }
                            }]
                        }
                    },
                    // stack: '总量1',
                    label: {
                        show: true,
                        position: 'top',
                        color: '#333',
                        formatter: `{c}次`,
                        fontSize: 16,
                        distance: 15
                    },
                    itemStyle: {
                        color: '#1596E8'
                    },
                    data: dataList
                }]
        }
        this.initEcharts();
    },
    methods: {
        initEcharts() {
            let myChart = echarts.init(document.getElementById('resourceLinemap'))
            myChart.setOption(this.option)
            window.addEventListener("resize", function () {
               myChart.resize();
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
    background-size: cover;
}

.resource-total-item .resource-item-iconsp {
    background-image: url(../assets/images/shipzs.png);
    background-size: cover;
}

.resource-total-item .resource-item-iconwrj {
    background-image: url(../assets/images/wurenjs.png);
    background-size: cover;
}

.resource-total-item .resource-total-text {
    font-size: 12px;
    color: #7CAFC7;
    line-height: 20px;
    width: 60px;
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
    margin: 5px 0px 0px 0px;
    transform: translateX(-10px);
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
.resource-linemapbox {
    width: 100%;
    height: calc(100% - 151px);
    position: relative;
}
.resource-linemapbox-bgl {
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 14px;
    background-image: url(../assets/images/jinghzbbj.png);
    background-size: 100% 100%;
}
/* .resource-linemapbox-bgr {
    position: absolute;
    right: 0;top: 0;bottom: 30px;
    width: 10px;
    background-color: #fff;
} */
.resource-linemap {
    width: 100%;
    height: 100%;
}
</style>