<template>
    <div class="footer">
        <p style="font-size: 20px;"> 添加微信: <span style="color: red;">updata7</span></p>
        <p>CKJiang 版权所有 ©2023-06</p>
    </div>

</template>

<script>
export default {
    name: "PageFooter"
}
</script>


<style scoped>
.footer {
    position: fixed; /* 固定定位 */
    /* 距离底部 20px */
    bottom: 0px; 
    left: 50%; /* 水平居中，以左边为基准 */
    transform: translateX(-50%); /* 平移使其水平居中 */
    width: 100%; /* 100% 宽度 */
    text-align: center; /* 文字水平居中 */
    /* 背景颜色，可根据需要调整 */
    background-color: #d3d1d1; 
    padding: 10px; /* 内边距 */
    /* box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2); // 添加底部阴影 */
}

/* 定义闪烁动画 */
@keyframes blink {
    0% {
        opacity: 1; /* 初始状态，完全可见 */
    }
    50% {
        opacity: 0; /* 中间状态，完全不可见 */
    }
    100% {
        opacity: 1; /* 最终状态，完全可见 */
    }
}

/* 应用闪烁动画到文本 */
.blinking-text {
    /* 使用闪烁动画，1s表示每次闪烁1秒，infinite表示无限循环 */
    animation: blink 1s infinite; 
    color: rgb(255, 0, 0);
    /* 添加光晕效果 */
    text-shadow: 0 0 10px gold;
}
</style>