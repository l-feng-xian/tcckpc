<template>
    <div style="height: 100%;">
        <baseTitleVue title="环城检查站"></baseTitleVue>
        <div class="checkpoint-loop">
            <div :style="{ width: (contentList.length * 100) + '%',transform: 'translateX('+ (40 - (320*(isStaticIndex + 1))) +'px)', transition: isRun ? 'all 0.5s': ''}">
                <div class="checkpoint-loop-content" v-for="item, i in contentList" :key="i" :style="{opacity: i === isStaticIndex + 1 ? 1 : 0.5}">
                    <div class="checkpoint-item">
                        <div class="checkpoint-item-title">
                            <p>检查站名称{{ item.id }}</p>
                        </div>
                        <div class="checkpoint-item-static" :class="isStatic ? 'isStaticTrue' : 'isStaticFalse'"></div>
                        <div class="checkpoint-item-icon" @click="checkpointClick(item)">
                            <img style="width: 30px; height: 32px;" src="@/assets/images/sp.png" alt="">
                        </div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon"></div>
                        <div class="checkpoint-item-li-text"><span>站点地址：</span>{{ '金柯桥大道杭甬高速柯桥南口' }}</div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon1"></div>
                        <div class="checkpoint-item-li-text"><span>站点类型：</span>{{ '金柯桥大道杭甬高速柯桥南口' }}</div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon2"></div>
                        <div class="checkpoint-item-li-text"><span>勤务时间：</span>{{ '金柯桥大道杭甬高速柯桥南口' }}</div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon3"></div>
                        <div class="checkpoint-item-li-text"><span>实时警力：</span>{{ '金柯桥大道杭甬高速柯桥南口' }}</div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon4"></div>
                        <div class="checkpoint-item-li-text"><span>站内装备：</span><div>{{ '金柯桥大道杭甬高速柯桥南口速柯桥南口速柯桥南口' }}</div></div>
                    </div>
                </div>
            </div>
            <div class="checkpoint-loop-contral">
                <ul>
                    <li @click="isStaticIndexChange(i)" v-for="(item, i) in contentList.length - 2" :key="i + 'i'"
                        :class="isStaticIndex === i ? 'isStaticActive' : ''"></li>
                </ul>
            </div>
        </div>
        <div class="video-box" v-if="showVideoBox">
            <div class="video-box-title">
                <div class="video-box-title-text">检查站{{videoBoxData.id}}</div>
                <div style="flex: 1;"></div>
                <div class="video-box-title-close" @click="closeCheckpointClick()"></div>
            </div>
            <div class="video-box-content">
                <div class="video-box-content-video"></div>
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
            isStaticIndex: 0,
            contentList: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}],
            isRun: true,
            videoBoxData: {},
            showVideoBox: false
        }
    },
    mounted() {
        let contentListFirst = this.contentList[0]
        let contentListEnd = this.contentList[this.contentList.length - 1]
        let contentListLength = JSON.parse(JSON.stringify(this.contentList)).length
        console.log(contentListEnd);
        this.contentList=[contentListFirst, ...this.contentList, contentListEnd]
        setInterval(() => {
            this.isStaticIndex = this.isStaticIndex + 1
            if(this.isStaticIndex > contentListLength - 1) {
                this.isRun = false
                this.isStaticIndex = 0
                setTimeout(() => {
                    this.isRun = true
                }, 1000);
            }
        }, 5000);
    },
    methods: {
        isStaticIndexChange(i) {
            this.isStaticIndex = i
        },
        //视频弹窗点击
        checkpointClick(item) {
            console.log(item);
            this.videoBoxData = item
            this.showVideoBox = true
        },
        closeCheckpointClick() {
            this.showVideoBox = false
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
    width: 320px;
    height: 190px;
    background-image: url(../assets/images/kapbj.png);
    background-size: 117% 121%;
    background-position: -30px 0px;
    float: left;
    /* transform: scale(0.8); */
}

.checkpoint-loop-contral {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
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
    margin: 20px 1px 0px 1px;
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
    padding: 5px 20px 0% 8px;
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
    cursor: pointer;
}

.checkpoint-item-li {
    padding: 0% 20px 0% 20px;
    margin-bottom: 10px;
    align-items: flex-start;
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
    flex: 1;
    font-size: 12px;
    color: #CBEAFF;
    margin-left: 5px;
    display: flex;
}
.checkpoint-item .checkpoint-item-li-text span {
    width: 60px;
}
.checkpoint-item .checkpoint-item-li-text div {
    flex: 1;
    line-height: 16px;
}
.video-box {
    position: fixed;
    width: 1145px;height: 784px;
    top: 50%;left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(../assets/images/videoBox.png);
    z-index: 99999;
}
.video-box .video-box-title {
    height: 100%;
    height: 70px;
    color: #8FF5FF;
    display: flex;
    align-items: center;
    padding: 22px 42px;
    box-sizing: border-box;
}
.video-box .video-box-title-close {
    width: 24px;
    height: 24px;
    background-image: url(../assets/images/close.png);
    background-size: cover;
    cursor: pointer;
}
.video-box .video-box-content {
    height: calc(100% - 70px);
    padding: 0px 42px 42px 42px;
    box-sizing: border-box;
}
.video-box .video-box-content .video-box-content-video {
    width: 100%;
    height: 100%;
    background-color: #000;
}
</style>