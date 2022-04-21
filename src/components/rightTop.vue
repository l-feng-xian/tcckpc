<template>
    <div style="height: 100%;">
        <baseTitleVue title="环城检查站"></baseTitleVue>
        <div class="checkpoint-loop">
            <div class="checkpoint-loop-box">
                <div class="checkpoint-loop-content-left">
                    <div class="checkpoint-loop-content checkpoint-loop-content-left-content">
                        <img class="checkpoint-loop-content-bg" src="../assets/images/kapbj.png" alt="">
                        <div class="checkpoint-item">
                            <div class="checkpoint-item-title">
                                <p>检查站名称{{ isStaticIndex }}</p>
                            </div>
                            <div class="checkpoint-item-static" :class="isStatic ? 'isStaticTrue' : 'isStaticFalse'">
                            </div>
                            <div class="checkpoint-item-icon" @click="checkpointClick(isStaticIndex)">
                                <img style="width: 30px; height: 32px;" src="@/assets/images/sp.png" alt="">
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon"></div>
                            <div class="checkpoint-item-li-text"><span>站点地址：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon1"></div>
                            <div class="checkpoint-item-li-text"><span>站点类型：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon2"></div>
                            <div class="checkpoint-item-li-text"><span>勤务时间：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon3"></div>
                            <div class="checkpoint-item-li-text"><span>实时警力：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon4"></div>
                            <div class="checkpoint-item-li-text"><span>站内装备：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口速柯桥南口速柯桥南口' }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkpoint-loop-content" :class="isRun ? 'checkpoint-loop-content-styleChange' : ''">
                    <img class="checkpoint-loop-content-bg" src="../assets/images/kapbj.png" alt="">
                    <div class="checkpoint-item">
                        <div class="checkpoint-item-title">
                            <p>检查站名称{{ isStaticIndex }}</p>
                        </div>
                        <div class="checkpoint-item-static" :class="isStatic ? 'isStaticTrue' : 'isStaticFalse'"></div>
                        <div class="checkpoint-item-icon" @click="checkpointClick(isStaticIndex)">
                            <img style="width: 30px; height: 32px;" src="@/assets/images/sp.png" alt="">
                        </div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon"></div>
                        <div class="checkpoint-item-li-text"><span>站点地址：</span>
                            <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                        </div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon1"></div>
                        <div class="checkpoint-item-li-text"><span>站点类型：</span>
                            <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                        </div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon2"></div>
                        <div class="checkpoint-item-li-text"><span>勤务时间：</span>
                            <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                        </div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon3"></div>
                        <div class="checkpoint-item-li-text"><span>实时警力：</span>
                            <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                        </div>
                    </div>
                    <div class="checkpoint-item checkpoint-item-li">
                        <div class="checkpoint-item-li-icon4"></div>
                        <div class="checkpoint-item-li-text"><span>站内装备：</span>
                            <p>{{ '金柯桥大道杭甬高速柯桥南口速柯桥南口速柯桥南口' }}</p>
                        </div>
                    </div>
                </div>
                <div class="checkpoint-loop-content-right">
                    <div class="checkpoint-loop-content checkpoint-loop-content-right-content">
                        <img class="checkpoint-loop-content-bg" src="../assets/images/kapbj.png" alt="">
                        <div class="checkpoint-item">
                            <div class="checkpoint-item-title">
                                <p>检查站名称{{ isStaticIndex }}</p>
                            </div>
                            <div class="checkpoint-item-static" :class="isStatic ? 'isStaticTrue' : 'isStaticFalse'">
                            </div>
                            <div class="checkpoint-item-icon" @click="checkpointClick(isStaticIndex)">
                                <img style="width: 30px; height: 32px;" src="@/assets/images/sp.png" alt="">
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon"></div>
                            <div class="checkpoint-item-li-text"><span>站点地址：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon1"></div>
                            <div class="checkpoint-item-li-text"><span>站点类型：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon2"></div>
                            <div class="checkpoint-item-li-text"><span>勤务时间：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon3"></div>
                            <div class="checkpoint-item-li-text"><span>实时警力：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口' }}</p>
                            </div>
                        </div>
                        <div class="checkpoint-item checkpoint-item-li">
                            <div class="checkpoint-item-li-icon4"></div>
                            <div class="checkpoint-item-li-text"><span>站内装备：</span>
                                <p>{{ '金柯桥大道杭甬高速柯桥南口速柯桥南口速柯桥南口' }}</p>
                            </div>
                        </div>
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
                <div class="video-box-title-text">检查站{{ videoBoxData.id }}</div>
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
            contentList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
            isRun: false,
            videoBoxData: {},
            showVideoBox: false
        }
    },
    mounted() {
        let contentListFirst = this.contentList[0]
        let contentListEnd = this.contentList[this.contentList.length - 1]
        let contentListLength = JSON.parse(JSON.stringify(this.contentList)).length
        console.log(contentListEnd);
        this.contentList = [contentListFirst, ...this.contentList, contentListEnd]
        setInterval(() => {
            this.isStaticIndex = this.isStaticIndex + 1
            this.isRun = true
            if (this.isStaticIndex > contentListLength - 1) {
                this.isStaticIndex = 0
            }
            setTimeout(() => {
                this.isRun = false
            }, 200);
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

.checkpoint-loop-box {
    width: 100%;
    height: 100%;
    /* background-color: pink; */
    position: relative;
}

.checkpoint-loop-box .checkpoint-loop-content-left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 10%;
}

.checkpoint-loop-box .checkpoint-loop-content-left::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(140deg, #101625 -12%, #10162500);
    z-index: 9999;
}

.checkpoint-loop-box .checkpoint-loop-content-left .checkpoint-loop-content-left-content {
    width: 1000%;
    top: 0;
    right: 820%;
    opacity: 0.5;
}

.checkpoint-loop-box .checkpoint-loop-content-right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 10%;
}

.checkpoint-loop-box .checkpoint-loop-content-right::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(95deg, #10162500 60%, #101625);
    z-index: 9999;
}

.checkpoint-loop-box .checkpoint-loop-content-right .checkpoint-loop-content-right-content {
    width: 1000%;
    top: 0;
    right: 80%;
    opacity: 0.5;
}

.checkpoint-loop-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: all 0.2s linear;
    opacity: 1;
}

.checkpoint-loop-content-styleChange {
    opacity: 0.5;
}

.checkpoint-loop-content .checkpoint-loop-content-bg {
    position: absolute;
    top: 5px;
    left: 2%;
    width: 96%;
    height: 110%;
    z-index: 1;
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
    z-index: 99;
}

.checkpoint-loop-contral ul li {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #0D4363;
    float: left;
    text-align: center;
    margin: 14px 1px 0px 1px;
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
    padding: 10px 13% 0% 11%;
    z-index: 2;
    position: relative;
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
    flex: 1;
    background-repeat: no-repeat;
    height: 20px;
    background-size: contain;
}

.isStaticTrue {
    background-image: url(../assets/images/yiqd.png);
}

.isStaticFalse {
    background-image: url(../assets/images/weiqd.png);
}

.checkpoint-item .checkpoint-item-icon {
    /* flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center; */
    width: 32px;
    height: 32px;
    cursor: pointer;
}

.checkpoint-item-li {
    padding: 0% 10% 0% 14%;
    height: 13%;
    box-sizing: border-box;
    align-items: center;
}

.checkpoint-item .checkpoint-item-li-icon {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/did.png);
    background-size: cover;
}

.checkpoint-item .checkpoint-item-li-icon1 {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/zdlx.png);
    background-size: cover;
}

.checkpoint-item .checkpoint-item-li-icon2 {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/qwsj.png);
    background-size: cover;
}

.checkpoint-item .checkpoint-item-li-icon3 {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/ssjl.png);
    background-size: cover;
}

.checkpoint-item .checkpoint-item-li-icon4 {
    width: 16px;
    height: 16px;
    background-image: url(../assets/images/znzb.png);
    background-size: cover;
}

.checkpoint-item .checkpoint-item-li-text {
    flex: 1;
    font-size: 12px;
    color: #CBEAFF;
    margin-left: 5px;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.checkpoint-item .checkpoint-item-li-text span {
    white-space: nowrap;
}

.checkpoint-item .checkpoint-item-li-text p {
    flex: 1;
    line-height: 16px;
    padding-right: 16px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.video-box {
    position: fixed;
    width: 1145px;
    height: 784px;
    top: 50%;
    left: 50%;
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