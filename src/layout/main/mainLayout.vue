<template>
    <div class="layout-frame">
        <a-layout>
            <a-layout-header class="header">
                <div class="logo">
                    <!--logo-->
                    <a class="logo-tit">
                        这里是标题
                    </a>

                </div>
            </a-layout-header>
            <a-layout>
                <!--<admin-sidebar @getMenuKey="getMenuKey"></admin-sidebar>-->
                <div class="aside">
                    <a-menu
                            @click="handleClick"
                            mode="inline"
                            :selectedKeys="[currentRoute]"
                            :openKeys="openKeys"
                            @openChange="onOpenChange"
                    >
                        <template v-for="menuRouter in menuData">
                            <a-menu-item :key="menuRouter.name" v-if="menuRouter.children===undefined">
                                <router-link :to="{name:menuRouter.name}">
                                    <a-icon :type="menuRouter.meta.icon"/>
                                    {{menuRouter.meta.title}}
                                </router-link>
                            </a-menu-item>
                            <a-sub-menu :key="menuRouter.name" v-if="menuRouter.children.length">
                                <span slot="title"><a-icon
                                        :type="menuRouter.meta.icon"/><span>{{menuRouter.meta.title}}</span></span>
                                <a-menu-item v-for="menuSub in menuRouter.children" :key="menuSub.name">
                                    <router-link :to="{name: menuSub.name}">
                                        {{menuSub.meta.title}}
                                    </router-link>
                                </a-menu-item>
                            </a-sub-menu>
                        </template>
                    </a-menu>
                </div>


                <a-layout>
                    <a-layout-content class="content">
                        <router-view/>
                    </a-layout-content>

                    <!-- <a-layout-footer>
                         <div class="footer">
                            footer
                         </div>
                     </a-layout-footer>-->
                </a-layout>
            </a-layout>
        </a-layout>



    </div>


</template>

<script>
    export default {
        data() {
            return {
                menuData: [], // 路由数组对象
                rootSubmenuKeys: [], // 有子菜单sub-menu的key值
                openKeys: [], //当前展开项
                currentRoute: '',
            }
        },
        computed: {},
        methods: {
            // 获取路由器
            getRouter(){
                // 菜单处理
                this.menuData = this.$router.options.routes;

                // 获取有子菜单的父级菜单的key的值
                this.rootSubmenuKeys = this.menuData.map(item => {
                    if (item.children !== undefined) {
                        return item.name
                    }
                })
            },
            handleClick(e) { // 点击菜单，设置点击选中的菜单
                console.log('click ', e);
                //
                this.currentRoute = e.key;
            },
            onOpenChange(openKeys) { // 点击当前菜单展开，其它菜单收起
                // openKeys是当前展开的key的值
                //console.log('当前展开-----', openKeys);
                //let rootSubmenuKeys = this.menuData;
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);

                // 如果不存在，赋予当前值
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys;
                } else { // 如果存在执行else
                    // 展开项存在的时候
                    this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            },
            initOpenMenu(){ // 初始化，首次访问或者页面刷新展开并选中当前菜单
                let route = this.$route;
                console.log(route)
            }

        },
        mounted() {
           console.log(1111);

            this.getRouter();
            this.initOpenMenu();
            this.openKeys = ['home'];
            this.currentRoute = 'homePerson';
            /*     console.log(this.menuData);
                 console.log(  this.rootSubmenuKeys);*/
        },



    }
</script>

<style lang="less">
    @import '../../assets/theme/styles/index.less';

    .layout-frame {
        .side-bar {
            background: #fff;
        }
        .content {
            height: 2000px;
        }
    }
</style>
