<template>
    <transition name="layer-fade">
        <!-- <div v-if="isShowLayer" class="my-layer" @click.stop="clickFun('clickCancel')"> -->
        <div v-if="isShowLayer" class="my-layer">
            <div class="layer-content-wrap" @click.stop>
                <h3 class="my-layer-title">{{ titleText }}</h3>
                <p class="my-layer-content">{{ content }}</p>
                <div class="my-operation">
                    <div v-if="type==='layer'" class="my-cancel-btn" @click="clickFun('clickCancel')">
                        <p class="my-btn-text my-border-right">{{ cancelText }}</p>
                    </div>
                    <div class="layer-btn" @click="clickFun('clickLayer')">
                        <p class="my-btn-text">{{ layerText }}</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            isShowLayer: false, // 用于控制整个窗口的显示/隐藏
            titleText: '操作提示', // 提示框标题
            content: 'Say Something ...', // 提示框的内容
            cancelText: '取消', // 取消按钮的文字
            layerText: '确认', // 确认按钮的文字
            type: 'layer', // 表明弹框的类型：confirm - 确认弹窗（有取消按钮）；alert - 通知弹框（没有取消按钮）
            outerData: null // 用于记录外部传进来的数据，也可以给外部监听userBehavior，事件的函数提供判断到底是哪个事件触发的
        }
    },
    methods: {
        show (content, config) {
            this.content = content || 'Say Something ...'

            if (Object.prototype.toString.call(config) === '[object Object]') {
                // 确保用户传递的是一个对象
                this.titleText = config.titleText || '操作提示'
                this.cancelText = config.cancelText || '取消'
                this.layerText = config.layerText || '确认'
                this.type = config.type || 'layer'
                this.outerData = config.data || null
            }

            this.isShowLayer = true
        },
        hidden () {
            this.isShowLayer = false
            this.titleText = '操作提示'
            this.cancelText = '取消'
            this.layerText = '确认'
            this.type = 'layer'
            this.outerData = null
        },
        clickFun (type) {
            this.$emit('userBehavior', type, this.outerData)
            this.hidden()
        }
    }
}
</script>

<style scoped>
    .my-layer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
        /* 这里防止当用户长按屏幕，出现的黑色背景色块，以及 iPhone 横平时字体的缩放问题 */
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    /* 进入和出去的动画 */
    .layer-fade-enter-active {
        animation: opacity 0.3s;
    }
    .layer-fade-enter-active .layer-content-wrap {
        animation: scale 0.3s;
    }
    .layer-fade-leave-active {
        animation: outOpacity 0.2s;
    }

    /* 包裹层容器样式 */
    .layer-content-wrap {
        position: absolute;
        top: 28%;
        left: 0;
        right: 0;
        width: 280px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 5px;
        z-index: 999;
        user-select: none;
        /* transform: translateY(-50%); */
    }

    /* 顶部标题部分 */
    .my-layer-title {
        padding-top: 20px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #333;
    }

    /* 中间内容部分 */
    .my-layer-content {
        padding: 0 15px;
        padding-top: 20px;
        margin-bottom: 32px;
        text-align: center;
        font-size: 16px;
        color: #666;
        line-height: 1.5;
    }

    /* 底部按钮样式 */
    .my-operation {
        display: flex;
        border-top: 1px solid #eee;
    }

    .my-operation .my-cancel-btn, .layer-btn {
        flex: 1;
    }

    .my-operation .layer-btn {
        color: #ffb000;
    }

    .my-operation .my-btn-text {
        text-align: center;
        font-size: 16px;
        margin: 14px 0;
        padding: 6px 0;
    }

    /* 其他修饰样式 */
    .my-border-right {
        border-right: 1px solid #eee;
    }

    /* 进来的动画 */
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes scale {
        0% {
            transform: scale(0);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    /* 出去的动画 */
    @keyframes outOpacity {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>