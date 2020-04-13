<template>
    <div class="entering">
        <section class="banner">
            <h1>我们为你解决所有跨境困扰</h1>
            <div class="intro">
                我们是一个整合了所有优质出海服务商的综合平台，通过真实用户的评价和行业专家的评估，
                <br />致力于让跨境企业方便快捷地找到最优服务商，帮助企业快速成长。
            </div>
            <div class="btn_wrap">
                <button class="btn btn_orang" @click="settle">服务商入驻</button>
            </div>
        </section>
        <section class="wrapper">
            <div class="item">
                <i class="icon-register"></i>
                <span>注册平台帐号</span>
            </div>
            <div class="item">
                <i class="icon-data"></i><span>填写服务商资料</span>
            </div>
            <div class="item">
                <i class="icon-examine"></i>
                <span>通过审核</span>
            </div>
            <div class="item">
                <i class="icon-Release"></i>
                <span>发布服务</span>
            </div>
        </section>
        <div class="fixedb" v-show="isShow">
            <div class="main">
                <div class="title">
                    发布您的服务
                    <i class="close icon-no" @click="close"></i>
                </div>
                <div class="content">
                    <table>
                        <tbody>
                            <tr>
                                <th>姓名:</th>
                                <td>
                                    <input type="text" placeholder="请输入姓名" />
                                </td>
                            </tr>
                            <tr>
                                <th>职位:</th>
                                <td>
                                    <input type="text" placeholder="请输入职位" />
                                </td>
                            </tr>
                            <tr>
                                <th>公司名称:</th>
                                <td>
                                    <input type="text" placeholder="请输入公司名称" />
                                </td>
                            </tr>
                            <tr>
                                <th>网址:</th>
                                <td>
                                    <input type="text" placeholder="请输入网址" />
                                </td>
                            </tr>
                            <tr>
                                <th>服务类型:</th>
                                <td>
                                    <select name id>
                                        <option value="请选择服务类型">请选择服务类型</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>服务名称:</th>
                                <td>
                                    <input type="text" placeholder="请输入服务名称" />
                                </td>
                            </tr>
                            <tr>
                                <th>电话:</th>
                                <td>
                                    <input type="text" placeholder="请输入电话" />
                                </td>
                            </tr>
                            <tr>
                                <th>邮箱:</th>
                                <td>
                                    <input type="text" placeholder="请输入邮箱" />
                                </td>
                            </tr>
                            <tr>
                                <th>所在时区:</th>
                                <td>
                                    <input type="text" placeholder="请输入所在时区" />
                                </td>
                            </tr>
                            <tr>
                                <th>&nbsp;</th>
                                <td class="last">
                                    <button class="btn btn_orang">提交</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            };
        },
        methods: {
            settle() {
                this.isShow = true;
            },
            close() {
                this.isShow = false;
            }
        }
    };
</script>

<style lang="less" scoped>
    .entering {
        .banner {
            background-image: url(../../assets/images/entering_bg.png);

            .btn_wrap {
                display: flex;
                justify-content: center;
                width: 100%;

                .btn {
                    width: 200px;
                }
            }
        }

        .wrapper {
            display: flex;
            justify-content: space-evenly;
            padding: 80px 0 120px;

            .item {
                background: #fff;
                color: #333;
                height: 200px;
                width: 200px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;

                i {
                    color: #5599ed;
                    font-size: 48px;
                    height: 50px;
                }

                span {
                    margin-top: -80px;
                    font-size: 16px;
                    height: 30px;
                    line-height: 30px;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
</style>