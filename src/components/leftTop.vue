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
        <div class="statistics-box">
            <div class="statistics">
                <div class="statistics-style-box">
                    <span class="shadio-bg shadio-bg1"></span>
                    <span class="shadio-bg shadio-bg2"></span>
                </div>
                <div class="statistics-l">
                    <div class="statistics-l-box">
                        <div class="statistics-l-top statistics-l-top-box">
                            <div class="statistics-l-text">警力总数</div>
                            <div class="statistics-l-number">1920</div>
                        </div>
                    </div>
                    <div class="statistics-l-box">
                        <div class="statistics-l-down">
                            <div class="statistics-l-text">在岗警力数</div>
                            <div class="statistics-l-number">1920</div>
                        </div>
                    </div>
                </div>
                <div class="statistics-r">
                    <img class="statistics-r-bg" src="../assets/images/bingtdz.png" alt=""/>
                    <div class="pic-legend">
                        <div class="pic-legend-item" v-for="(item, index) in optionData" :key="index"><span class="pic-legend-item-box">
                            <span :style="{backgroundColor: item.itemStyle.color}"></span>{{item.name}}</span>
                        </div>
                    </div>
                    <div class="statistics-pic" id="statisticsPic"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';
import baseTitleVue from './baseTitle.vue';
export default {
    components: { baseTitleVue },
    data() {
        return {
            dataMessage: { class1: '12', class2: '120' },
            optionData: [{
                name: '民警',
                value: 10,
                itemStyle: {
                    color: '#3981FF',
                }
            }, {
                name: '武警',
                value: 30,
                itemStyle: {
                    color: '#B9E54A'
                }
            }, {
                name: '辅警',
                value: 20,
                itemStyle: {
                    color: '#00EDED'
                }
            },
            {
                name: '其他',
                value: 10,
                itemStyle: {
                    color: '#FEB433'
                }
            }],
        }
    },
    created() {

    },
    mounted() {
        this.$nextTick(function () {
            this.init();
        });
    },
    methods: {
        init() {
            //构建3d饼状图
            let myChart = echarts.init(document.getElementById('statisticsPic'));
            // 传入数据生成 option
            this.option = this.getPie3D(this.optionData, 0.9);
            myChart.setOption(this.option);
            //是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
            this.option.series.push({
                name: 'pie2d',
                type: 'pie',
                labelLine: {
                    length: 5,
                    length2: 5
                },
                label: {
                    opacity: 1,
                    fontSize: 12,
                    textBorderWidth: 0,
                    color: '#CBEAFF'
                },
                startAngle: -60, //起始角度，支持范围[0, 360]。
                clockwise: false,//饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
                radius: ['20%', '50%'],
                center: ['50%', '50%'],
                data: this.optionData,
                itemStyle: {
                    opacity: 0
                }
            });
            myChart.setOption(this.option);
            this.bindListen(myChart);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },

        getPie3D(pieData, internalDiameterRatio) {
            //internalDiameterRatio:透明的空心占比
            let that = this;
            let series = [];
            let sumValue = 0;
            let startValue = 0;
            let endValue = 0;
            let legendData = [];
            let legendBfb = [];
            let k = 1 - internalDiameterRatio;
            pieData.sort((a, b) => {
                return (b.value - a.value);
            });
            // 为每一个饼图数据，生成一个 series-surface 配置
            for (let i = 0; i < pieData.length; i++) {
                sumValue += pieData[i].value;
                let seriesItem = {
                    name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
                    type: 'surface',
                    parametric: true,
                    wireframe: {
                        show: false
                    },
                    pieData: pieData[i],
                    pieStatus: {
                        selected: false,
                        hovered: false,
                        k: k
                    },
                    center: ['10%', '60%']
                };

                if (typeof pieData[i].itemStyle != 'undefined') {
                    let itemStyle = {};
                    typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
                    typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;
                    seriesItem.itemStyle = itemStyle;
                }
                series.push(seriesItem);
            }

            // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
            // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
            legendData = [];
            legendBfb = [];
            for (let i = 0; i < series.length; i++) {
                endValue = startValue + series[i].pieData.value;
                series[i].pieData.startRatio = startValue / sumValue;
                series[i].pieData.endRatio = endValue / sumValue;
                series[i].parametricEquation = this.getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio,
                    false, false, k, series[i].pieData.value);
                startValue = endValue;
                let bfb = that.fomatFloat(series[i].pieData.value / sumValue, 4);
                legendData.push({
                    name: series[i].name,
                    value: bfb
                });
                legendBfb.push({
                    name: series[i].name,
                    value: bfb
                });
            }
            let boxHeight = this.getHeight3D(series, 26);//通过传参设定3d饼/环的高度，26代表26px
            // 准备待返回的配置项，把准备好的 legendData、series 传入。
            let option = {
                legend: {
                    data: legendData,
                    orient: 'horizontal',
                    left: 'center',
                    top: 10,
                    itemGap: 10,
                    textStyle: {
                        color: '#A1E2FF',
                    },
                    show: false,
                    icon: 'stack',
                    itemWidth: 4,
                    formatter: function (param) {
                        let item = legendBfb.filter(item => item.name == param)[0];
                        // let bfs = that.fomatFloat(item.value * 100, 2) + "%";
                        return `${item.name} `;
                    }
                },
                labelLine: {
                    show: true,
                    lineStyle: {
                        color: '#7BC0CB'
                    }
                },
                label: {
                    show: true,
                    position: 'outside',
                    rich: {
                        b: {
                            color: '#7BC0CB',
                            fontSize: 12,
                            lineHeight: 20
                        },
                        c: {
                            fontSize: 16,
                        },
                    },
                    formatter: params => {
                        return `${params.percent}%`;
                    }

                },
                tooltip: {
                    formatter: params => {
                        if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
                            let bfb = ((option.series[params.seriesIndex].pieData.endRatio - option.series[params.seriesIndex].pieData.startRatio) *
                                100).toFixed(2);
                            return `${params.seriesName}<br/>` +
                                `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
                                `${bfb}%`;
                        }
                    }
                },
                xAxis3D: {
                    min: -1,
                    max: 1
                },
                yAxis3D: {
                    min: -1,
                    max: 1
                },
                zAxis3D: {
                    min: -1,
                    max: 1
                },
                grid3D: {
                    show: false,
                    boxHeight: boxHeight, //圆环的高度
                    left: 0,
                    viewControl: { //3d效果可以放大、旋转等，请自己去查看官方配置
                        alpha: 28, //角度
                        distance: 170,//调整视角到主体的距离，类似调整zoom
                        rotateSensitivity: 0, //设置为0无法旋转
                        // zoomSensitivity: 0, //设置为0无法缩放
                        // panSensitivity: 0, //设置为0无法平移
                        autoRotate: false //自动旋转
                    },
                    light: {
                        main: {
                            color: '#fff',
                            intensity: 1,
                            shadow: false,
                            shadowQuality: 'medium',
                            alpha: 30,
                            beta: 40,
                        },

                        ambient: {
                            color: '#fff',
                            intensity: 0.6,
                        }
                    }
                },
                series: series
            };
            return option;
        },

        //获取3d丙图的最高扇区的高度
        getHeight3D(series, height) {
            series.sort((a, b) => {
                return (b.pieData.value - a.pieData.value);
            })
            return height * 25 / series[0].pieData.value;
        },

        // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
        getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
            // 计算
            let midRatio = (startRatio + endRatio) / 2;
            let startRadian = startRatio * Math.PI * 2;
            let endRadian = endRatio * Math.PI * 2;
            let midRadian = midRatio * Math.PI * 2;
            // 如果只有一个扇形，则不实现选中效果。
            if (startRatio === 0 && endRatio === 1) {
                isSelected = false;
            }
            // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
            k = typeof k !== 'undefined' ? k : 1 / 3;
            // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
            let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
            let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
            // 计算高亮效果的放大比例（未高亮，则比例为 1）
            let hoverRate = isHovered ? 1.05 : 1;
            // 返回曲面参数方程
            return {
                u: {
                    min: -Math.PI,
                    max: Math.PI * 3,
                    step: Math.PI / 32
                },
                v: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20
                },
                x: function (u, v) {
                    if (u < startRadian) {
                        return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                    }
                    if (u > endRadian) {
                        return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                    }
                    return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
                },
                y: function (u, v) {
                    if (u < startRadian) {
                        return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                    }
                    if (u > endRadian) {
                        return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                    }
                    return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
                },
                z: function (u, v) {
                    if (u < -Math.PI * 0.5) {
                        return Math.sin(u);
                    }
                    if (u > Math.PI * 2.5) {
                        return Math.sin(u) * h * .1;
                    }
                    return Math.sin(v) > 0 ? 1 * h * .1 : -1;
                }
            };
        },

        fomatFloat(num, n) {
            var f = parseFloat(num);
            if (isNaN(f)) {
                return false;
            }
            f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂   
            var s = f.toString();
            var rs = s.indexOf('.');
            //判定如果是整数，增加小数点再补0
            if (rs < 0) {
                rs = s.length;
                s += '.';
            }
            while (s.length <= rs + n) {
                s += '0';
            }
            return s;
        },

        bindListen(myChart) {
            // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
            let that = this;
            let selectedIndex = '';
            let hoveredIndex = '';
            // 监听点击事件，实现选中效果（单选）
            myChart.on('click', function (params) {
                // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
                let isSelected = !that.option.series[params.seriesIndex].pieStatus.selected;
                let isHovered = that.option.series[params.seriesIndex].pieStatus.hovered;
                let k = that.option.series[params.seriesIndex].pieStatus.k;
                let startRatio = that.option.series[params.seriesIndex].pieData.startRatio;
                let endRatio = that.option.series[params.seriesIndex].pieData.endRatio;
                // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
                if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
                    that.option.series[selectedIndex].parametricEquation = that.getParametricEquation(that.option.series[
                        selectedIndex].pieData
                        .startRatio, that.option.series[selectedIndex].pieData.endRatio, false, false, k, that.option.series[
                            selectedIndex].pieData
                        .value);
                    that.option.series[selectedIndex].pieStatus.selected = false;
                }
                // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
                that.option.series[params.seriesIndex].parametricEquation = that.getParametricEquation(startRatio, endRatio,
                    isSelected,
                    isHovered, k, that.option.series[params.seriesIndex].pieData.value);
                that.option.series[params.seriesIndex].pieStatus.selected = isSelected;
                // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
                isSelected ? selectedIndex = params.seriesIndex : null;
                // 使用更新后的 option，渲染图表
                myChart.setOption(that.option);
            });
            // 监听 mouseover，近似实现高亮（放大）效果
            myChart.on('mouseover', function (params) {
                // 准备重新渲染扇形所需的参数
                let isSelected;
                let isHovered;
                let startRatio;
                let endRatio;
                let k;
                // 如果触发 mouseover 的扇形当前已高亮，则不做操作
                if (hoveredIndex === params.seriesIndex) {
                    return;
                    // 否则进行高亮及必要的取消高亮操作
                } else {
                    // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
                    if (hoveredIndex !== '') {
                        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
                        isSelected = that.option.series[hoveredIndex].pieStatus.selected;
                        isHovered = false;
                        startRatio = that.option.series[hoveredIndex].pieData.startRatio;
                        endRatio = that.option.series[hoveredIndex].pieData.endRatio;
                        k = that.option.series[hoveredIndex].pieStatus.k;
                        // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
                        that.option.series[hoveredIndex].parametricEquation = that.getParametricEquation(startRatio, endRatio,
                            isSelected,
                            isHovered, k, that.option.series[hoveredIndex].pieData.value);
                        that.option.series[hoveredIndex].pieStatus.hovered = isHovered;
                        // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
                        hoveredIndex = '';
                    }
                    // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
                    if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
                        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
                        isSelected = that.option.series[params.seriesIndex].pieStatus.selected;
                        isHovered = true;
                        startRatio = that.option.series[params.seriesIndex].pieData.startRatio;
                        endRatio = that.option.series[params.seriesIndex].pieData.endRatio;
                        k = that.option.series[params.seriesIndex].pieStatus.k;
                        // 对当前点击的扇形，执行高亮操作（对 option 更新）
                        that.option.series[params.seriesIndex].parametricEquation = that.getParametricEquation(startRatio, endRatio,
                            isSelected, isHovered, k, that.option.series[params.seriesIndex].pieData.value + 5);
                        that.option.series[params.seriesIndex].pieStatus.hovered = isHovered;
                        // 记录上次高亮的扇形对应的系列号 seriesIndex
                        hoveredIndex = params.seriesIndex;
                    }
                    // 使用更新后的 option，渲染图表
                    myChart.setOption(that.option);
                }
            });
            // 修正取消高亮失败的 bug
            myChart.on('globalout', function () {
                // 准备重新渲染扇形所需的参数
                let isSelected;
                let isHovered;
                let startRatio;
                let endRatio;
                let k;
                if (hoveredIndex !== '') {
                    // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
                    isSelected = that.option.series[hoveredIndex].pieStatus.selected;
                    isHovered = false;
                    k = that.option.series[hoveredIndex].pieStatus.k;
                    startRatio = that.option.series[hoveredIndex].pieData.startRatio;
                    endRatio = that.option.series[hoveredIndex].pieData.endRatio;
                    // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
                    that.option.series[hoveredIndex].parametricEquation = that.getParametricEquation(startRatio, endRatio,
                        isSelected,
                        isHovered, k, that.option.series[hoveredIndex].pieData.value);
                    that.option.series[hoveredIndex].pieStatus.hovered = isHovered;
                    // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
                    hoveredIndex = '';
                }
                // 使用更新后的 option，渲染图表
                myChart.setOption(that.option);
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

.statistics-box {
    height: calc(100% - 112px);
    padding-top: 10px;
    box-sizing: border-box;
}

.statistics {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #284a7e, transparent);
    display: flex;
    position: relative;
}
.statistics-style-box {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(-4px, -4px);
    background-image: linear-gradient(to right, #284a7eab, transparent);
    z-index: 1;
}
.statistics-style-box .shadio-bg {
    position: absolute;
    width: 2px;
    height: 2px;
    border: 2px solid #02F4FF;
}
.statistics-style-box .shadio-bg1 {
   top: 0;left: 0;
   border-right-color: transparent;
   border-bottom-color: transparent;
}
.statistics-style-box .shadio-bg2 {
    left: 0;bottom: 0;
    border-right-color: transparent;
    border-top-color: transparent;
}
.statistics-l {
    width: 165px;
    position: relative;
    z-index: 2;
}

.statistics-l-box {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.statistics-l-top,
.statistics-l-down {
    width: 165px;
    height: 79px;
    background-image: url(../assets/images/jinglzs.png);
    background-size: 100% 100%;
    background-position: center;
}

.statistics-l-top-box {
    transform: translateY(12px);
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
    /* background-image: url(../assets/images/bingtdz.png);
    background-repeat: no-repeat;
    background-position: center 118%; */
    position: relative;
    z-index: 2;
}
.statistics-r .statistics-r-bg {
    position: absolute;
    width: 100%;
    height: 114px;
    top: 37%;
}
.pic-legend {
    position: absolute;
    top: 10px;
    width: 100%;
    height: 18px;
    display: flex;
}
.pic-legend .pic-legend-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pic-legend .pic-legend-item .pic-legend-item-box {
    color: #CBEAFF;
    font-size: 12px;
    display: flex;
    align-items: center;
    border: 1px solid #daffe83f;
    padding: 4px 6px 4px 4px;
    box-sizing: border-box;
}
.pic-legend-item .pic-legend-item-box span {
    width: 3px;
    height: 12px;
    margin-right: 5px;
}
.statistics-pic {
    width: 100%;
    height: 100%;
}

.container {
    width: 100%;
    height: 100%;
    background: #043b8c;
}

.echart-container {
    width: 100%;
    height: 100%;
}

.highcharts-credits {
    display: none;
}
</style>