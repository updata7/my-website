<template>
    <div class="div-item">
        <div class="title">
                关于我——CK
        </div>
        <div class="content">
            <div class="left-column">
                <div class="left-content">
                    <h3>我是谁</h3>
                    <p>大家好，我是CK</p>
                    <p>一名充满热情的软件开发者</p>
                    <p>拥有10余年开发经验</p>
                    <p>已经帮助过1000名客户解决软件难题</p>
                    <h3>
                        我的技能
                    </h3>
                    <p />编程语言：JavaScript, Python, Lua, Java, C#
                    <p />前端开发：Vue.js, HTML5, CSS3, Android, iOS
                    <p />后端开发：Node.js, Express, Koa, Skynet
                    <p />数据库：MySQL, MongoDB, Redis
                    <p />消息队列：MQ, Kafka
                    <p />网络通信协议：WebSocket, Socket.io
                    <p />代理服务器：Nginx
                    <p />版本控制：Git, SVN 
                    <p />其他工具和技术：Docker, RESTful API, K8s
                </div>
            </div>
            <div class="right-column">
                <h3>我能提供什么</h3>   
                <span>
                    <p>专业技术员，一对一软件服务</p>
                    App定制
                    | 小程序定制
                    | 网站定制
                    | 后台管理
                    | 自动化脚本定制
                    | 等等
                </span>
                <h3>为什么选择我</h3>
                <span>
                    <ul>
                        <li>服务超1000名用户，无一差评</li>
                        <li>10年实战经验，6年独立开发者经验</li>
                        <li>有强大的技术团队，有热情且负责</li>
                    </ul>
                </span>
            </div>  
        </div>
        <br/>
    </div>
</template>

<script>
// import VueMarkdown from 'vue-markdown';
import aboutMe from '@/docs/about-me.md'
export default {
    name: 'About',
    components: {
        // VueMarkdown
    },
    data() {
        return {
            markdownText: aboutMe,
            creationTime: ''
        }
    },
    created() {
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
.div-item {
    /* 在PC端应用的样式 */
    font-family: "STKaiti", "楷体", "KaiTi", cursive;
    font-size: 18px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('@/assets/images/bg-about-me.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    .title{
        text-align: center; 
        padding-top: 10px; 
        margin: 0px;
        font-size: 30px;
        font-weight: bold;
    }
}
/* PC端样式 */
@media (min-width: 768px) {
    .left-column {
        width: 50%;
        border-right: 1px solid #ccc;
        .left-content {
            margin-left: 200px;
        }
    }
    .right-column {
        width: 50%;
        margin-left: 30px;
    }
    .content{
        display: flex; 
        justify-content: space-between;
    }
}

/* 移动端样式 */
@media (max-width: 767px) {
    .div-item {
        padding-left: 20px;
    }
}
</style>