<template>
    <div class="about wrapper">
        <div class="sider_bar">
            <ul>
                <li>
                    <router-link to="/about/1" class="current">关于我们</router-link>
                </li>
                <li>
                    <router-link to="/about/2">联系我们</router-link>
                </li>
                <li>
                    <router-link to="/about/3">关于我们</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            xx出海是一个专注于跨境导航的网站，因其中立、专业而在众多卖家中树立了良好口碑。xx出海力求成为跨境卖家的Hao123，围绕卖家需求，以一站式入口持续收集整理跨境卖家运营必备网站。与此同时，xx出海也是中国跨境电商领域内容最丰富资讯平台，为卖家提供最全面、实时的行业动态和实操干货。
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .about {
        background-color: #fff;
        margin: 30px auto;
        display: flex;
        justify-content: space-between;

        align-items: flex-start;

        .sider_bar {
            width: 200px;

            a {
                display: block;
                line-height: 50px;
                text-align: center;
                font-size: 16px;
            }

            a.current {
                background-color: #fa744b;
                color: #fff;
            }

            a:hover {
                background-color: #fa744b;
                color: #fff;
            }
        }

        .content {
            width: 1000px;
            flex-basis: 1000px;
            padding: 25px 30px;
            line-height: 23px;
            min-height: 700px;
        }
    }
</style>