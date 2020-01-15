<template>

    <a-layout-sider  theme="light" :trigger="null" collapsible v-model="collapsed"  :style="{ overflowX:'hidden',overflowY: 'auto', height: '100vh', position: 'fixed', left: 0, paddingTop:'60px',borderRightColor: '#ddd',  }">
      <!--  <div class="aside">-->
            <a-menu
                    @click="handleClick"
                    mode="inline"
                    :selectedKeys="[currentRoute]"
                    :openKeys="openKeys"
                    @openChange="onOpenChange"
                    theme="light"
                    :style="{borderRight:0}"
            >
                <template v-for="menuRouter in menuData">
                    <a-menu-item :key="menuRouter.name"
                                 v-if="menuRouter.children===undefined || menuRouter.children&&menuRouter.children.length===1">
                        <router-link :to="{name:menuRouter.name}">
                            <a-icon :type="menuRouter.meta.icon"/>
                            <span>{{menuRouter.meta.title}}</span>
                        </router-link>
                    </a-menu-item>
                    <a-sub-menu :key="menuRouter.name" v-else>
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
      <!--  </div>-->
    </a-layout-sider>
</template>

<script>
    import commonVue from './commonJs.js'
    export default {
        data() {
            return {
                menuData: [], // 路由数组对象
                rootSubmenuKeys: [], // 有子菜单sub-menu的key值
                openKeys: [], //当前展开项
                currentRoute: '',
                collapsed: false,
            }
        },
        computed: {
            randRouter: () => {
                // console.log('路由',this.menuData);
            }
        },
        methods: {
            // 获取路由器
            getRouter() {
                let meunList = [];
                // 菜单处理
                this.menuData = this.$router.options.routes;
                for (let item of this.menuData) {
                    if (item.children !== undefined) {
                        this.rootSubmenuKeys.push(item.name)
                    }
                    if (item.show === undefined) {
                        meunList.push(item)
                    }
                }
                this.menuData = meunList;
            },
            handleClick(e) { // 点击菜单，设置点击选中的菜单
                //
                this.currentRoute = e.key;
            },
            onOpenChange(openKeys) { // 点击当前菜单展开，其它菜单收起
                // openKeys是当前展开的key的值
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);

                // 如果不存在，赋予当前值
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys;
                } else { // 如果存在执行else
                    // 展开项存在的时候
                    this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            },
            // 只有父级菜单刷新选中高亮问题
            initOpenMenu() { // 初始化，首次访问或者页面刷新展开并选中当前菜单
                let route = this.$route;

                // 当前默认要展开的菜单项,在嵌套路的环境下，一种是首次访问页面， 一种是操作后刷新页面
                let parentName = route.matched[0].name;
                this.onOpenChange([parentName]);

                // 当前默认选中菜单, 找到与当前路由对应的key值
                this.menuData.filter(item => {
                    let itemChild = item.children;
                    if (itemChild !== undefined) { // 只有在嵌套的路由中使用
                        if (itemChild.length === 1 && itemChild[0].name === route.name) {
                            this.currentRoute = item.name;
                        } else {
                            this.currentRoute = route.name;
                        }
                    }
                })
            }
        },
        mounted() {
            this.getRouter();
            this.initOpenMenu();
            commonVue.$on('collapsedState', (val)=> {
                this.collapsed = val;
            })

        },
    }
</script>

<style scoped>

</style>
