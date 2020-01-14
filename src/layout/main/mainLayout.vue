<template>
    <div class="layout-frame">
        <a-layout>
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
    import adminHeader from './components/adminHeader.vue'
    import adminSidebar from './components/adminSidebar.vue'

    export default {
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
            margin-left: 24px;
        }
    }
</style>
