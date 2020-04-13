<template>
    <div id="diff" class="diff">
        <dl class="diff_item">
            <dt>
                <router-link to="">
                    <img src="../assets/images/logo1.png" alt="">
                </router-link>
            </dt>
            <dd>
                <router-link to="" class="diff_title">
                    Paypal
                </router-link>
                <p>
                    <span>评分：9.8</span>
                    <span>用户满意度：99%</span>
                </p>
            </dd>
        </dl>
        <dl class="diff_item">
            <dt>
                <router-link to="">
                    <img src="../assets/images/logo1.png" alt="">
                </router-link>
            </dt>
            <dd>
                <router-link to="" class="diff_title">
                    Paypal
                </router-link>
                <p>
                    <span>评分：9.8</span>
                    <span>用户满意度：99%</span>
                </p>
            </dd>
        </dl>
        <dl class="diff_item">
            <dt>
                <router-link to="">
                    <img src="../assets/images/logo1.png" alt="">
                </router-link>
            </dt>
            <dd>
                <router-link to="" class="diff_title">
                    Paypal
                </router-link>
                <p>
                    <span>评分：9.8</span>
                    <span>用户满意度：99%</span>
                </p>
            </dd>
        </dl>
        <dl class="diff_item">
            <dt>
                <p>4</p>
            </dt>
            <dd>
                <strong>您还可以继续添加</strong>
            </dd>
        </dl>
        <dl class="ctrl">
            <router-link to="diff" class="btn btn_orang">对比</router-link>
            <span>清空对比栏</span>
        </dl>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    // 对比
    .diff {
        position: fixed;
        left: 50%;
        margin-left: -600px;
        bottom: 0;
        background-color: #fff;
        width: 1200px;
        border: 1px solid #2a7fe8;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;

        dl {
            text-align: center;
            box-sizing: border-box;
            width: 260px;

            dt {
                img {
                    height: 40px;
                }

                p {
                    background-color: #f5f5f5;
                    color: #666666;
                    font-weight: bold;
                    height: 40px;
                    line-height: 40px;
                    width: 40px;
                    margin: 0 auto 10px;
                    font-size: 30px;
                }
            }

            dd {
                strong {
                    color: #999;
                    font-weight: normal;
                    font-size: 18px;
                }
            }
        }

        dl+dl {
            border-left: 1px solid #ddd;
        }

        dl.diff_item {
            .diff_title {
                display: block;
                font-size: 18px;
                margin: 10px 0;
            }

            span {
                margin: 0 10px;
            }
        }

        dl.ctrl {
            flex-basis: 0 0 140px;
            width: 160px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;

            span {
                color: #2a7fe8;
                font-size: 16px;
            }
        }
    }
</style>