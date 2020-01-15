<template>
    <a-layout-header class="header" theme="light">
       <div class="header-left">
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
       </div>
        <div class="header-left" style="color: #fff">
            <span class="note"><a-icon type="bell" /></span>
            <img :src="userHeader" alt="头像" class="userHeader">
             {{userName}}
        </div>
    </a-layout-header>
</template>

<script>
    // 使用中间实例实现组件之间的传值
    import commonVue from './commonJs.js';
    import userHeader from '@/assets/img/userHeader.jpg';
    export default {
        data() {
            return {
                userHeader,
                collapsed: false,
                userName:'麦力士'
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
    display: flex;
    justify-content: space-between;

    >div{
        display: flex;
        align-items: center;
    }

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
    .userHeader{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border: 1px solid #02519c;
        margin-right: 10px;
    }
    .note{
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        width: 40px;
        text-align: center;
        cursor: pointer;
        margin-right: 15px;
    }
    .note:hover{
        background: rgba(255,255,255,0.4);
    }
}
</style>
