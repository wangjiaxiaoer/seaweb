<template>
    <div class="index">
        <section class="banner">
            <h1>我们为你解决所有跨境困扰</h1>
            <div class="intro">
                我们是一个整合了所有优质出海服务商的综合平台，通过真实用户的评价和行业专家的评估，<br>
                致力于让跨境企业方便快捷地找到最优服务商，帮助企业快速成长。
            </div>
            <div class="search">
                <input type="text" v-model="searchValue" placeholder="请输入您要搜索的内容">
                <button class="btn btn_orang"><i class="icon-search"></i>搜索</button>
            </div>
        </section>
        <section class="serveice">
            <div class="header_tab">
                <div class="wrapper">
                    <ul>
                        <li><span class="active">海外企业服务</span></li>
                        <li><span>跨境支付</span></li>
                        <li><span>推广营销</span></li>
                        <li><span>IT服务</span></li>
                        <li><span>客户管理系统</span></li>
                        <li><span>跨境物流</span></li>
                        <li><span>翻译工具</span></li>
                        <li><span>客服外包</span></li>
                        <li><span>海外招聘</span></li>
                    </ul>
                </div>
            </div>
            <div class="service_list wrapper">
                <ul>
                    <li class="service_item">
                        <router-link to="productDetail" class="service_item_header">
                            <strong>PayPal</strong>
                            <img src="../../assets/images/logo.png" alt="">
                        </router-link>
                        <div class="service_item_content">
                            PayPal，是一个总部位于美国加利福尼亚州圣荷西市的因特网第三方支付服务商，允许在使用电子邮件来标识身份的用户之间转移资金，避免了传统的邮寄支票或者汇款的方法。
                        </div>
                        <div class="service_item_buttons">
                            <router-link to="productDetail" class="btn">查看详情</router-link>
                            <router-link to="productDetail" class="btn btn_orang">立即咨询</router-link>
                        </div>
                    </li>
                    <li class="service_item">
                        <router-link to="productDetail" class="service_item_header">
                            <strong>PayPal</strong>
                            <img src="../../assets/images/logo1.png" alt="">
                        </router-link>
                        <div class="service_item_content">
                            PayPal，是一个总部位于美国加利福尼亚州圣荷西市的因特网第三方支付服务商，允许在使用电子邮件来标识身份的用户之间转移资金，避免了传统的邮寄支票或者汇款的方法。
                        </div>
                        <div class="service_item_buttons">
                            <router-link to="productDetail" class="btn">查看详情</router-link>
                            <router-link to="productDetail" class="btn btn_orang">立即咨询</router-link>
                        </div>
                    </li>
                    <li class="service_item">
                        <router-link to="productDetail" class="service_item_header">
                            <strong>PayPal</strong>
                            <img src="../../assets/images/logo.png" alt="">
                        </router-link>
                        <div class="service_item_content">
                            PayPal，是一个总部位于美国加利福尼亚州圣荷西市的因特网第三方支付服务商，允许在使用电子邮件来标识身份的用户之间转移资金，避免了传统的邮寄支票或者汇款的方法。
                        </div>
                        <div class="service_item_buttons">
                            <router-link to="productDetail" class="btn">查看详情</router-link>
                            <router-link to="productDetail" class="btn btn_orang">立即咨询</router-link>
                        </div>
                    </li>
                    <li class="service_item">
                        <router-link to="productDetail" class="service_item_header">
                            <strong>PayPal</strong>
                            <img src="../../assets/images/logo1.png" alt="">
                        </router-link>
                        <div class="service_item_content">
                            PayPal，是一个总部位于美国加利福尼亚州圣荷西市的因特网第三方支付服务商，允许在使用电子邮件来标识身份的用户之间转移资金，避免了传统的邮寄支票或者汇款的方法。
                        </div>
                        <div class="service_item_buttons">
                            <router-link to="productDetail" class="btn">查看详情</router-link>
                            <router-link to="productDetail" class="btn btn_orang">立即咨询</router-link>
                        </div>
                    </li>
                    <li class="service_item">
                        <router-link to="productDetail" class="service_item_header">
                            <strong>PayPal</strong>
                            <img src="../../assets/images/logo.png" alt="">
                        </router-link>
                        <div class="service_item_content">
                            PayPal，是一个总部位于美国加利福尼亚州圣荷西市的因特网第三方支付服务商，允许在使用电子邮件来标识身份的用户之间转移资金，避免了传统的邮寄支票或者汇款的方法。
                        </div>
                        <div class="service_item_buttons">
                            <router-link to="productDetail" class="btn">查看详情</router-link>
                            <router-link to="productDetail" class="btn btn_orang">立即咨询</router-link>
                        </div>
                    </li>
                    <li class="service_item">
                        <router-link to="productDetail" class="service_item_header">
                            <strong>PayPal</strong>
                            <img src="../../assets/images/logo.png" alt="">
                        </router-link>
                        <div class="service_item_content">
                            PayPal，是一个总部位于美国加利福尼亚州圣荷西市的因特网第三方支付服务商，允许在使用电子邮件来标识身份的用户之间转移资金，避免了传统的邮寄支票或者汇款的方法。
                        </div>
                        <div class="service_item_buttons">
                            <router-link to="productDetail" class="btn">查看详情</router-link>
                            <router-link to="productDetail" class="btn btn_orang">立即咨询</router-link>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="service_more">
                <router-link to="productAll">查看更多 >></router-link>
            </div>
        </section>
        <section class="news">
            <div class="wrapper">
                <div class="title">
                    <strong>出海资讯</strong>
                    <span>TRANSNATIONAL INFORMATION</span>
                </div>
                <div class="news_tab">
                    <span class="active">新闻资讯</span>
                    <span>数据报告</span>
                    <span>出海活动</span>
                </div>
                <div class="news_wrap">
                    <div class="news_intro">
                        <router-link to="/news/news_list" class="news_intro_img"><img src="../../assets/images/news.png"
                                alt="">
                        </router-link>
                        <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务</router-link>
                        <div class="news_abstract">
                            该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                        </div>
                        <div class="news_intro_more">
                            <span>2019-02-03</span>
                            <router-link to="" class="title">查看详情 ></router-link>
                        </div>
                    </div>
                    <div class="news_list">
                        <div class="news_list_item">
                            <router-link to="" class="news_list_item_img"><img src="../../assets/images/news.png"
                                    alt="">
                            </router-link>
                            <div class="wrap">
                                <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务
                                </router-link>
                                <div class="news_abstract line1">
                                    该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                                </div>
                                <div class="news_list_more">
                                    <span>2019-02-03</span>
                                </div>
                            </div>
                        </div>
                        <div class="news_list_item">
                            <router-link to="" class="news_list_item_img"><img src="../../assets/images/news.png"
                                    alt="">
                            </router-link>
                            <div class="wrap">
                                <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务
                                </router-link>
                                <div class="news_abstract line1">
                                    该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                                </div>
                                <div class="news_list_more">
                                    <span>2019-02-03</span>
                                </div>
                            </div>
                        </div>
                        <div class="news_list_item">
                            <router-link to="" class="news_list_item_img"><img src="../../assets/images/news.png"
                                    alt="">
                            </router-link>
                            <div class="wrap">
                                <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务
                                </router-link>
                                <div class="news_abstract line1">
                                    该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                                </div>
                                <div class="news_list_more">
                                    <span>2019-02-03</span>
                                </div>
                            </div>
                        </div>
                        <div class="news_list_item">
                            <router-link to="" class="news_list_item_img"><img src="../../assets/images/news.png"
                                    alt="">
                            </router-link>
                            <div class="wrap">
                                <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务
                                </router-link>
                                <div class="news_abstract line1">
                                    该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                                </div>
                                <div class="news_list_more">
                                    <span>2019-02-03</span>
                                </div>
                            </div>
                        </div>
                        <div class="news_list_item">
                            <router-link to="" class="news_list_item_img"><img src="../../assets/images/news.png"
                                    alt="">
                            </router-link>
                            <div class="wrap">
                                <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务
                                </router-link>
                                <div class="news_abstract line1">
                                    该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                                </div>
                                <div class="news_list_more">
                                    <span>2019-02-03</span>
                                </div>
                            </div>
                        </div>
                        <div class="news_list_item">
                            <router-link to="" class="news_list_item_img"><img src="../../assets/images/news.png"
                                    alt="">
                            </router-link>
                            <div class="wrap">
                                <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务
                                </router-link>
                                <div class="news_abstract line1">
                                    该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                                </div>
                                <div class="news_list_more">
                                    <span>2019-02-03</span>
                                </div>
                            </div>
                        </div>
                        <div class="news_list_item">
                            <router-link to="" class="news_list_item_img"><img src="../../assets/images/news.png"
                                    alt="">
                            </router-link>
                            <div class="wrap">
                                <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务
                                </router-link>
                                <div class="news_abstract line1">
                                    该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                                </div>
                                <div class="news_list_more">
                                    <span>2019-02-03</span>
                                </div>
                            </div>
                        </div>
                        <div class="news_list_item">
                            <router-link to="" class="news_list_item_img"><img src="../../assets/images/news.png"
                                    alt="">
                            </router-link>
                            <div class="wrap">
                                <router-link to="" class="news_title line1">快讯 优步借UberMoney进军金融 提供电子钱包与信用卡服务
                                </router-link>
                                <div class="news_abstract line1">
                                    该公司周一宣布成立一个名为 Uber Money 的新部门，提供包括数字钱包、升级版的借记卡和信用卡业务。信用卡服务项目将于巴克莱银行共同合作开发。
                                </div>
                                <div class="news_list_more">
                                    <span>2019-02-03</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                searchValue: ''
            }
        }
    }
</script>

<style>

</style>