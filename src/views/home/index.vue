<template>
    <div>
        <div class="home">
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
export default {
    name: "Home",
    data() {
        return {
            option: {
                data: [
                    {
                        name: '通用后台管理',
                        src: glht,
                        text: '成品（可演示）',
                        href: '/ma/data',
                        target: '_blank'
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
                        name: '找我定制',
                        src: glht,
                        text: '成品（可演示）',
                        href: '/ma/data',
                        target: '_blank'
                    }
                ]
            },
        }
    },
    created() {

    },
    methods: {
    }
}

</script>

<style scoped>
.home {
    text-align: center;
}
.card-item {
    width: 100%;
    display: inline-block;
}
</style>