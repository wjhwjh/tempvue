<template>
    <a-layout-header class="header" theme="light">
        <div class="logo">
            <a class="logo-tit">
                这里是标题
            </a>
        </div>
        <div>
            <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click= collapsedHandle
            />
        </div>
    </a-layout-header>
</template>

<script>
    // 使用中间实例实现组件之间的传值
    import commonVue from './commonJs.js'
    export default {
        data() {
            return {
                collapsed: false,
            };
        },
        methods:{
            collapsedHandle(){
                this.collapsed= !this.collapsed;
                commonVue.$emit('collapsedState',this.collapsed);
            }
        }
    }
</script>

<style lang="less" scoped>
.header{
    .logo{
        width: 150px;
    }
    .logo .logo-tit{
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        text-align: left;
    }
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
        color: #fff;
        font-weight: bold;
        }

    .trigger:hover {
        color: #1890ff;
    }
}
</style>
