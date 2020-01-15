<template>
    <div class="layout-frame" :class="{collapsedStyle: collapsed}">
        <a-layout id="components-layout-demo-custom-trigger">
            <admin-header></admin-header>
            <a-layout>
                <admin-sidebar></admin-sidebar>
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
    import commonVue from './components/commonJs.js';
    import adminHeader from './components/adminHeader.vue'
    import adminSidebar from './components/adminSidebar.vue'

    export default {
        data(){
            return {
                collapsed: false
            }
        },
        mounted(){
            commonVue.$on('collapsedState', (val)=> {
                this.collapsed = val;
            })
        },
        components: {
            adminHeader,
            adminSidebar
        }
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
            transition: margin-left .3s;
        }
    }
    .collapsedStyle .content{
        margin-left: 100px;
        transition: margin-left .3s;
    }

    .collapsedStyle .header .logo{
        display: none;
        transition:.3s;
    }
</style>
