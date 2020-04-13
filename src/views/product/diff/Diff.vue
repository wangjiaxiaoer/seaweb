<template>
    <div class="diff_main wrapper" id="diff_main">
        <div class="head">
            <table border="0">
                <tbody>
                    <tr>
                        <th>
                            <input type="checkbox" id="all" v-model="isCheck" @click="changeCheck"><label
                                for="all">隐藏相同项</label>
                        </th>
                        <td>
                            <router-link to="productDetail">
                                <h1>Paypal</h1>
                                <img src="../../../assets/images/logo1.png" alt="">
                            </router-link>
                        </td>
                        <td>
                            <router-link to="productDetail">
                                <h1>Paypal</h1>
                                <img src="../../../assets/images/logo1.png" alt="">
                            </router-link>
                        </td>
                        <td>
                            <router-link to="productDetail">
                                <h1>Paypal</h1>
                                <img src="../../../assets/images/logo1.png" alt="">
                            </router-link>
                        </td>
                        <td>
                            <router-link to="productDetail">
                                <h1>Paypal</h1>
                                <img src="../../../assets/images/logo1.png" alt="">
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <table class="wrap">
            <tbody>
                <tr>
                    <th> 评分 </th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr class="some">
                    <th>服务地区</th>
                    <td>全球、非洲</td>
                    <td>全球、东南亚、非洲</td>
                    <td>全球、东南亚</td>
                    <td>东南亚、非洲</td>
                </tr>
                <tr>
                    <th>服务行业</th>
                    <td>电商</td>
                    <td>游戏、旅游</td>
                    <td>游戏</td>
                    <td>游戏、电商、旅游</td>
                </tr>
                <tr class="some">
                    <th>支付方式</th>
                    <td>Customize views<br>
                        Deal and Task Board<br>
                        Hubspot Marketing Synchronization<br>
                        Drag and Drop Communicator<br>
                        Email Integration<br>
                        Phone Integration<br>
                        Website Integration</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
                <tr>
                    <th>用户满意度</th>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                    <td>9.9</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCheck: false,
            }
        },
        methods: {
            init() {
                window.onscroll = function () {
                    //变量t是滚动条滚动时，距离顶部的距离
                    let t = document.documentElement.scrollTop || document.body.scrollTop;
                    let head = document.getElementsByClassName("head")[0];
                    if (t >= 50) {
                        head.setAttribute("class", "head fixed")
                    } else {
                        head.setAttribute("class", "head")
                    }
                }
            },
            changeCheck() {
                this.isCheck = !this.isCheck;
                let wrap = document.getElementsByClassName("wrap")[0];
                if (!this.isCheck) {
                    wrap.setAttribute("class", "wrap")
                } else {
                    wrap.setAttribute("class", "wrap hide_some")
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style lang="less" scoped>

</style>