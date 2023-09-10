<template>
    <div class="home">
        <el-carousel :interval="3000" indicator-position="outside" height="600px">
            <el-carousel-item v-for="item in items" :key="item.url">
                <el-image style="width: 100%;" :src="item.url"></el-image>
            </el-carousel-item>
        </el-carousel>
        <div v-if="false">
            <!-- <el-card class="card-item"> -->
                <H2>
                    欢迎来到 <span style="color: red;">CKJiang</span> 的软件许愿池
                </H2>
                <H3>
                    <span style="color:red">我能提供</span>
                    | App定制
                    | 小程序定制
                    | 网站定制
                    | 后台管理
                    | 自动化脚本定制
                </H3>
                <H4>
                    一位10年程序猿
                    | 已经帮<span style="color: red;">1000</span>名用户解决软件难题
                </H4>
                <avue-data-card :option="option"></avue-data-card>
            <!-- </el-card> -->
        </div>
    </div>
</template>

<script>
import glht from '@/assets/images/glht.jpeg'
import Home1 from '@/assets/images/home1.png'
import Home2 from '@/assets/images/home2.png'
import Home3 from '@/assets/images/home3.png'
export default {
    name: "Home",
    data() {
        return {
            option: {
                data: [
                    {
                        name: '通用后台管理',
                        src: glht,
                        text: '成品（联系我测试）',
                        // href: '/ma/data',
                        // target: '_blank'
                    },
                    {
                        name: '医药管理系统',
                        src: glht,
                        text: '成品（可演示）',
                        href: '/ma/data',
                        target: '_blank'
                    },
                    {
                        name: '其他案例',
                        src: glht,
                        text: '成品（可演示）',
                        href: '/ma/data',
                        target: '_blank'
                    },
                    {
                        click: function() {
                            alert('添加微信：updata7')
                        },
                        name: '找我定制',
                        src: glht,
                        text: '成品（可演示）',
                        // href: '/ma/data',
                        // target: '_blank'
                    }
                ]
            },
            items: [
                {
                    url: Home1
                },
                {
                    url: Home2
                },
                {
                    url: Home3
                },
            ]
        }
    },
    created() {

    },
    methods: {
    }
}

</script>

<style lang="scss" scoped>
.home {
    text-align: center;
    width: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('@/assets/images/bg-about-me.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.card-item {
    width: 100%;
    display: inline-block;
}
.carousel-item {
    height: 500px;
    text-align: center;
    opacity: 0.75;
}
</style>