<template>
    <el-row>
        <el-col :span="4">
            <div style="margin-top: 5%;margin-left: 10%;text-align: left;">
                <router-link to="/home"><el-image class="image" :src="homeIcon"></el-image></router-link>
            </div>
        </el-col>
        <!-- 功能集 -->
        <el-col :span="17">
            <div>
                <el-menu :default-active="activeIndex"
                    mode="horizontal"
                    class="el-menu-demo"
                    @select="handleSelect"
                    v-for="(item, i) in funData" :index="''+i" :key="i"
                >
                    <!-- 一级菜单 -->
                    <el-menu-item v-if="item.path != null" :index="''+i">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </el-menu-item>
                </el-menu>
            </div>
        </el-col>
        <el-col :span="3">
            <div style="height: 60px;line-height:60px; text-align:right;margin-right: 25%">
                <!-- <el-button type="primary" @click="handleAddWx"><i class="el-icon-chat-dot-round" style="margin-right: 5px;"></i>添加微信</el-button> -->
                <el-button type="success" @click="handleBlob">博客</el-button>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import ck from '@/assets/images/ckj.png'
export default {
    name: "PageHeader",
    data() {
        return {
            homeIcon: ck,
            // 选中菜单
            activeIndex: '',
            // 功能集 从右到左
            funData: [
                {
                    path: '/about',
                    name: '关于我',
                    children: null
                },
                {
                    path: "/blog",
                    name: "开发案例",
                    children: null
                },
                {
                    path: "/home",
                    name: "首页",
                    children: null
                },
            ]
        }
    },
    methods: {
        handleBlob() {
            this.$alert('待整理')
        },
        handleSelect(index) {
            this.activeIndex = index
        },
    },
    created() {
    },
}
</script>

<style scoped>
.image {
    margin-left: 40px;
    border-radius: 1%;
    width: 200px;
    height: 50px;
}
/* 功能靠右  */
.el-menu {
    float: right;
    margin-right: 0%;
    border-bottom: 0;
}
.el-menu-item {
    font-size: 18px;
    /* color: black !important; */
}

.el-menu--horizontal.el-menu--horizontal,
.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-menu-item{
    border-bottom: 0px !important;
}

a {
    text-decoration: none !important; /* 去掉下划线 */
}
</style>

