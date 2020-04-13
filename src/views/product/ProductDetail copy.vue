<template>
    <div class="detail wrapper">
        <div class="head">
            <div class="info">
                <div class="img_wrap">
                    <img src="../../assets/images/logo1.png" alt />
                </div>
                <div class="intro">
                    <h1>Paypal</h1>
                    <p>
                        <span>评分：9.8</span>
                        <span>用户满意度：99%</span>
                    </p>
                    <div class="score">
                        <star-rating :star-size="25" active-color="#ffbf24" :increment="0.5" :rating="3.5"
                            :read-only="true" :show-rating="false"></star-rating>(40条用户评价)
                    </div>
                </div>
            </div>
            <div class="summary">
                <ul>
                    <li>贝宝有限公司：公司名称</li>
                    <li>2000人：公司规模</li>
                    <li>上海市：办公地址</li>
                    <li>互联网支付 ：所属行业</li>
                </ul>
            </div>
        </div>
        <div class="main">
            <div class="nav_tab">
                <span :class="isActive === 0 ?'active':''" @click="changeActive(0)">简介</span>
                <span :class="isActive === 1 ?'active':''" @click="changeActive(1)">产品详情</span>
                <span :class="isActive === 2 ?'active':''" @click="changeActive(2)">费用</span>
                <span :class="isActive === 3 ?'active':''" @click="changeActive(3)">用户评价</span>
            </div>
            <div class="content">
                <div class="dt intro">
                    PayPal（纳斯达克股票代码：PYPL）于1998年12月由 Peter Thiel 及 Max Levchin
                    建立，是一个总部在美国加利福尼亚州圣荷塞市的在线支付服务商。秉持着“普惠金融服务大众”的企业理念，致力于提供普惠金融服务、通过技术创新与战略合作相结合，资金管理和移动创造更好的方式，转账、付款或收款提供灵活选择，帮助个人及企业参与全球经济并获得成功。
                    <br />
                    <br />PayPal也和一些电子商务网站合作，成为它们的货款支付方式之一；但是用这种支付方式转账时，PayPal收取一定数额的手续费。2018年12月，世界品牌实验室发布《2018世界品牌500强》榜单，PayPal排名第402。2019年10月4日，PayPal宣布退出Libra协会，成为首个退出该组织的成员。
                    [1] 2019年，入选“2019福布斯全球数字经济100强”，排第33位。 [2] 2019年10月，Interbrand发布的全球品牌百强榜排名。
                </div>
                <div class="dt pro_detail">
                    <div class="pro_dlist">
                        <div class="title">
                            <span>产品功能和服务</span>
                        </div>
                        <div class="pro_dlist_wrap">
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pro_dlist">
                        <div class="title">
                            <span>特点</span>
                        </div>
                        <div class="pro_dlist_wrap">
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                            <div class="item">
                                <strong>全球支付</strong>
                                <ul>
                                    <li>visa</li>
                                    <li>MasterCard</li>
                                    <li>JCB</li>
                                    <li>American Express</li>
                                    <li>Maestro</li>
                                    <li>Union Pay</li>
                                    <li>Diners Club</li>
                                    <li>Discover</li>
                                    <li>Alipay</li>
                                    <li>Wechatpay</li>
                                    <li>Paysafecard</li>
                                    <li>Skrill</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dt fee">
                    （以下价格仅供参考，以实际咨询为准。）
                    <br />
                    <br />开户费-无
                    <br />账户管理费-询价
                    <br />visa：3.5%+0.3USD
                    <br />Alipay：3%
                    <br />paytm：4%
                    <br />
                </div>
                <div class="dt reviews">
                    <div class="reviews_head">
                        <dl class="avatar">
                            <img src="../../assets/images/timg.jpg" alt />
                            <span>Jay.Liu</span>
                        </dl>
                        <dl>
                            <dt>
                                <star-rating :star-size="25" :increment="0.5" active-color="#ffbf24"
                                    :show-rating="false" @rating-selected="setRating"></star-rating>
                            </dt>
                            <dd>
                                <textarea placeholder="写下你的评论..." name id></textarea>
                                <p>
                                    <button class="btn">发表评论</button>
                                </p>
                            </dd>
                        </dl>
                    </div>
                    <div class="line"></div>
                    <div class="reviews_list">
                        <h1 class="tit">相关评论</h1>
                        <div class="reviews_item">
                            <dl class="avatar">
                                <img src="../../assets/images/timg.jpg" alt />
                                <span>Jay.Liu</span>
                            </dl>
                            <dl>
                                <dt>
                                    <star-rating :star-size="25" active-color="#ffbf24" :show-rating="false"
                                        :read-only="true" :increment="0.5" :rating="3.5"></star-rating>
                                </dt>
                                <dd>
                                    <p>
                                        优点：成功率高...
                                        <br />缺点：结算周期长...
                                    </p>
                                </dd>
                            </dl>
                        </div>
                        <div class="reviews_item">
                            <dl class="avatar">
                                <img src="../../assets/images/timg.jpg" alt />
                                <span>Jay.Liu</span>
                            </dl>
                            <dl>
                                <dt>
                                    <star-rating :star-size="25" active-color="#ffbf24" :show-rating="false"
                                        :read-only="true" :increment="0.5" :rating="3.5"></star-rating>
                                </dt>
                                <dd>
                                    <p>
                                        优点：成功率高...
                                        <br />缺点：结算周期长...
                                    </p>
                                </dd>
                            </dl>
                        </div>
                        <div class="reviews_item">
                            <dl class="avatar">
                                <img src="../../assets/images/timg.jpg" alt />
                                <span>Jay.Liu</span>
                            </dl>
                            <dl>
                                <dt>
                                    <star-rating :star-size="25" active-color="#ffbf24" :show-rating="false"
                                        :read-only="true" :increment="0.5" :rating="3.5"></star-rating>
                                </dt>
                                <dd>
                                    <p>
                                        优点：成功率高...
                                        <br />缺点：结算周期长...
                                    </p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box_title">相似产品</div>
            <div class="box_wrap">
                <div class="box_wrap_item">
                    <div class="img_wrap">
                        <router-link to class>
                            <img src="../../assets/images/logo.png" alt />
                        </router-link>
                        <p>
                            <input type="checkbox" name id="1" />
                            <label for="1">对比</label>
                        </p>
                    </div>
                    <div class="service_wrap">
                        <div class="content">
                            <router-link to class="title">Paypal</router-link>
                            <div class="tags">
                                <span>评分：9.8</span>
                                <span>用户满意度：99%</span>
                            </div>
                            <div class="intro">全球精致生活，一付到位。使用PayPal支付，恣享海购乐趣，轻松拥有全球品味高质生活。</div>
                        </div>
                        <div class="wrap_btns">
                            <router-link to class="btn">立即咨询</router-link>
                        </div>
                    </div>
                </div>
                <div class="box_wrap_item">
                    <div class="img_wrap">
                        <router-link to class>
                            <img src="../../assets/images/logo1.png" alt />
                        </router-link>
                        <p>
                            <input type="checkbox" name id="1" />
                            <label for="1">对比</label>
                        </p>
                    </div>
                    <div class="service_wrap">
                        <div class="content">
                            <router-link to class="title">Paypal</router-link>
                            <div class="tags">
                                <span>评分：9.8</span>
                                <span>用户满意度：99%</span>
                            </div>
                            <div class="intro">全球精致生活，一付到位。使用PayPal支付，恣享海购乐趣，轻松拥有全球品味高质生活。</div>
                        </div>
                        <div class="wrap_btns">
                            <router-link to class="btn">立即咨询</router-link>
                        </div>
                    </div>
                </div>
                <div class="box_wrap_item">
                    <div class="img_wrap">
                        <router-link to class>
                            <img src="../../assets/images/logo.png" alt />
                        </router-link>
                        <p>
                            <input type="checkbox" name id="1" />
                            <label for="1">对比</label>
                        </p>
                    </div>
                    <div class="service_wrap">
                        <div class="content">
                            <router-link to class="title">Paypal</router-link>
                            <div class="tags">
                                <span>评分：9.8</span>
                                <span>用户满意度：99%</span>
                            </div>
                            <div class="intro">全球精致生活，一付到位。使用PayPal支付，恣享海购乐趣，轻松拥有全球品味高质生活。</div>
                        </div>
                        <div class="wrap_btns">
                            <router-link to class="btn">立即咨询</router-link>
                        </div>
                    </div>
                </div>
                <div class="box_wrap_item">
                    <div class="img_wrap">
                        <router-link to class>
                            <img src="../../assets/images/logo1.png" alt />
                        </router-link>
                        <p>
                            <input type="checkbox" name id="1" />
                            <label for="1">对比</label>
                        </p>
                    </div>
                    <div class="service_wrap">
                        <div class="content">
                            <router-link to class="title">Paypal</router-link>
                            <div class="tags">
                                <span>评分：9.8</span>
                                <span>用户满意度：99%</span>
                            </div>
                            <div class="intro">全球精致生活，一付到位。使用PayPal支付，恣享海购乐趣，轻松拥有全球品味高质生活。</div>
                        </div>
                        <div class="wrap_btns">
                            <router-link to class="btn">立即咨询</router-link>
                        </div>
                    </div>
                </div>
                <div class="box_wrap_item">
                    <div class="img_wrap">
                        <router-link to class>
                            <img src="../../assets/images/logo.png" alt />
                        </router-link>
                        <p>
                            <input type="checkbox" name id="1" />
                            <label for="1">对比</label>
                        </p>
                    </div>
                    <div class="service_wrap">
                        <div class="content">
                            <router-link to class="title">Paypal</router-link>
                            <div class="tags">
                                <span>评分：9.8</span>
                                <span>用户满意度：99%</span>
                            </div>
                            <div class="intro">全球精致生活，一付到位。使用PayPal支付，恣享海购乐趣，轻松拥有全球品味高质生活。</div>
                        </div>
                        <div class="wrap_btns">
                            <router-link to class="btn">立即咨询</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import StarRating from "vue-star-rating";
    export default {
        components: {
            StarRating
        },
        data() {
            return {
                isActive: 0,
                rating: 0
            };
        },
        mounted() {
            window.onscroll = () => {
                let sTop = document.documentElement.scrollTop,
                    navTab = document.querySelector(".nav_tab");
                if (sTop < 310) {
                    navTab.setAttribute("class", "nav_tab");
                } else {
                    navTab.setAttribute("class", "nav_tab fixed");
                }
                this.scroll(sTop);
            };
        },
        methods: {
            scroll(sTop) {
                if (sTop >= 311 && sTop < 450) {
                    this.isActive = 0;
                } else if (sTop > 450 && sTop < 1550) {
                    this.isActive = 1;
                } else if (sTop > 1550 && sTop < 1800) {
                    this.isActive = 2;
                } else if (sTop > 1800) {
                    this.isActive = 3;
                }
            },
            changeActive(val) {
                this.isActive = val;
                document
                    .querySelector(".nav_tab")
                    .setAttribute("class", "nav_tab fixed");
                this.$nextTick(() => {
                    if (val === 0) {
                        document.documentElement.scrollTop = document.getElementsByClassName(
                            "dt"
                        )[val].offsetTop;
                    } else {
                        document.documentElement.scrollTop =
                            document.getElementsByClassName("dt")[val].offsetTop +
                            -40;
                    }
                });
            },
            setRating: function (rating) {
                this.rating = rating;
            }
        }
    };
</script>

<style scoped>
    .vue-star-rating {
        margin-right: 15px;
    }

    .fixed {
        position: fixed;
        left: 50%;
        margin-left: -600px;
        top: 0;
        background: #fff;
        width: 1200px;
    }
</style>