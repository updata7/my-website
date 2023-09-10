<template>
    <div class="footer">
        <p style="font-size: 20px;"> 找我定制或合作: <span style="color: red;">updata7(微信，备注来意)</span></p>
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
    text-align: center; /* 文字水平居中 */
    /* 背景颜色，可根据需要调整 */
    background-color: #d3d1d1; 
    /* 内边距 */
    padding: 20px; 
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