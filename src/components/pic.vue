<!-- 3D柱状图 -->
<template>
	<div id="bar" style="width:800px;height:800px;posion: flxed;"></div>
</template>
 
<script>
import * as echarts from 'echarts/core';
import { LegendComponent } from 'echarts/components';
import { CustomChart } from 'echarts/charts';
echarts.use([LegendComponent, CustomChart]);
let colorList = ['#33b56a', '#fdcf5c', '#4c90ff', '#fe7b7a', '#69ccf6', '#a38bf8', '#ff9561', '#8cb0ea', '#fe81b4', '#ffb258']
export default {
	name: "Bar3D",
	data() {
		return {
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
				width: 180,      // 长方体宽度
				zWidth: 8,      // 阴影折角宽
				zHeight: 4      // 阴影折角高
			},
			buildPath: function (ctx, shape) {
				console.log(ctx, shape);
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
				width: 180,
				zWidth: 8,
				zHeight: 4
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
			color: ['#33b56a', '#fdcf5c', '#4c90ff', '#fe7b7a', '#69ccf6', '#a38bf8', '#ff9561', '#8cb0ea', '#fe81b4', '#ffb258'],
			title: {
				text: '验算路线排行榜',
				left: 20,
				top: 20
			},
			legend: {
				show: true,
				top: 25
			},
			grid: {
				left: '3%',
				right: '4%',
				top: '15%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data: xAxisText,
				// boundaryGap: true,
				interval: 0,
				axisLabel: {
					color: '#333',
					//  让x轴文字方向为竖向
					// interval: 0,
					// formatter: function (value) {
					// 	return value.split('').join('\n')
					// }
				}
			},
			yAxis: {
				type: 'value'
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
						color: (params) => {
							// 使每根柱子颜色都不一样 
							return colorList[params.dataIndex % colorList.length]
						}
					},
					data: dataList
				}]
		}
		this.initEcharts();
	},
	methods: {
		initEcharts() {
			let myChart = echarts.init(document.getElementById('bar'))
			myChart.setOption(this.option)
		}
	}
}
 
</script>