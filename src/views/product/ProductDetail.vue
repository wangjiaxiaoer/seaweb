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
                <span :class="isActive === 1 ?'active':''" @click="changeActive(1)">特点</span>
                <span :class="isActive === 2 ?'active':''" @click="changeActive(2)">功能概览</span>
                <span :class="isActive === 3 ?'active':''" @click="changeActive(3)">解决行业痛点</span>
                <span :class="isActive === 4 ?'active':''" @click="changeActive(4)">所获奖项</span>
                <span :class="isActive === 5 ?'active':''" @click="changeActive(5)">行业地位</span>
                <span :class="isActive === 6 ?'active':''" @click="changeActive(6)">服务费用</span>
                <span :class="isActive === 7 ?'active':''" @click="changeActive(7)">用户满意度</span>
            </div>
            <div class="content">
                <div class="dt intro">
                    PayPal（纳斯达克股票代码：PYPL）于1998年12月由 Peter Thiel 及 Max Levchin
                    建立，是一个总部在美国加利福尼亚州圣荷塞市的在线支付服务商。秉持着“普惠金融服务大众”的企业理念，致力于提供普惠金融服务、通过技术创新与战略合作相结合，资金管理和移动创造更好的方式，转账、付款或收款提供灵活选择，帮助个人及企业参与全球经济并获得成功。
                    <br />
                    <br />PayPal也和一些电子商务网站合作，成为它们的货款支付方式之一；但是用这种支付方式转账时，PayPal收取一定数额的手续费。2018年12月，世界品牌实验室发布《2018世界品牌500强》榜单，PayPal排名第402。2019年10月4日，PayPal宣布退出Libra协会，成为首个退出该组织的成员。
                    [1] 2019年，入选“2019福布斯全球数字经济100强”，排第33位。 [2] 2019年10月，Interbrand发布的全球品牌百强榜排名。
                </div>
                <div class="dt feature">
                    <div class="title">
                        <img src="../../assets/images/dt1.png" alt />
                        <span>特点</span>
                    </div>
                    <div class="wrap">
                        <p>
                            贝宝采用最新技术来加密数据和检测欺诈反欺诈，从而使您的信息和交易安心无忧。其适用于所有类型的设备和操作系统的PayPal
                            Here应用程序可让您在POS期间使用移动设备接受所有形式的付款。
                        </p>
                        <strong>特点1：</strong>
                        <p>
                            PayPal允许客户在其PayPal帐户中注册其卡，以便他们可以方便地使用这些卡进行在线结帐和付款。同时，其一键式功能消除了冗余，从而加快了销售和结帐流程。该功能摆脱的是需要重新输入密码或有关交易，付款，运输等的详细信息。
                            此外，贝宝还为您提供了自定义选项，因此您可以使用预构建的模板来构建和发送品牌发票。无论供应商的规模和类型如何，您都可以立即与POS解决方案集成。如果您的符合条件的购买没有出现，或者与描述的不同，贝宝将帮助您与卖家进行分类。同时，PayPal不会与卖家共享您的财务详细信息，因此您可以放心购物。此外，每笔交易都受到高级加密的保护。
                        </p>
                        <strong>特点2：</strong>
                        <p>PayPal之所以在全球如此受欢迎，是因为它允许用户立即通过电子邮件地址将付款发送给海外卖家。如您所料，它省去了询问或记住其银行详细信息的麻烦。最好的部分是您可以使用移动设备在可以想到的任何商人站点或移动应用程序上进行买卖。只需使用您的PayPal凭据登录，您就可以在几秒钟内执行操作。
                        </p>
                    </div>
                </div>
                <div class="dt description">
                    <div class="title">
                        <img src="../../assets/images/dt2.png" alt />
                        <span>功能概览</span>
                    </div>
                    <div class="wrap">
                        <ul>
                            <li>电在线接受付款</li>
                            <li>一会儿再结账</li>
                            <li>快速结账</li>
                            <li>手机读卡器</li>
                            <li>PCI合规性</li>
                            <li>虚拟终端</li>
                            <li>电在线接受付款</li>
                            <li>一会儿再结账</li>
                            <li>快速结账</li>
                            <li>手机读卡器</li>
                            <li>PCI合规性</li>
                            <li>虚拟终端</li>
                        </ul>
                    </div>
                </div>
                <div class="dt solution">
                    <div class="title">
                        <img src="../../assets/images/dt3.png" alt />
                        <span>解决行业痛点</span>
                    </div>
                    <div class="wrap">
                        <strong>1)Collaboration issues within the finance team</strong>
                        <p>
                            – to collaborate with your colleagues using other budgeting solutions, you sent out entire
                            spreadsheets for checking and approval. With the NEW Cloud pcFinancials, you now have the
                            ability to highlight only the cells with changes on, put in comments/explanations, and then
                            submit it for checking and approval.
                        </p>
                        <br />
                        <strong>2)Long Implementation times</strong>
                        <p>
                            What used to take days or weeks for others to install and provision is now finally down to 5
                            minutes with cloud pcFinancials. All it takes is a click on the next button and you end up
                            (after a 5-minute wait) with your company´s actuals, budgets, and live forecasts.A fully
                            functioning FP&A solution after just 5 minutes.
                        </p>
                        <br />
                        <strong>3)ERP/Line of Business System Integration</strong>
                        <p>
                            Cloud pcFinancials is system agnostic. It can integrate with any Cloud ERP system.It also
                            has
                            the powerful capability to integrate with any onpremise ERP or LOB system using its built-in
                            onprem connector.
                        </p>
                    </div>
                </div>
                <div class="dt awards">
                    <div class="title">
                        <img src="../../assets/images/dt4.png" alt />
                        <span>所获奖项</span>
                    </div>
                    <div class="wrap">
                        <swiper :options="swiperOption" ref="mySwiper">
                            <!-- slides -->
                            <swiper-slide>
                                <img src="../../assets/images/crm2019.png" alt />
                            </swiper-slide>
                            <!-- Optional controls -->
                            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div> -->
                        </swiper>
                    </div>
                </div>
                <div class="dt status">
                    <div class="title">
                        <img src="../../assets/images/dt5.png" alt />
                        <span>行业地位</span>
                    </div>
                    <div class="wrap">
                        <p>由于公司有特殊的业务要求，因此避免购买一种千篇一律的“完美”业务程序是合理的。即便如此，即使在可识别的软件系统中也很难遇到这样的应用程序。</p>
                        <p>正确的做法是列出需要进行研究的各个主要方面，例如关键功能，价格计划，员工的技能水平，公司规模等。接下来，您应该全面进行产品研究。查看这些PayPal评估，并更仔细地检查清单中的其他解决方案。如此全面的产品调查可确保您避免购买不合适的软件产品，并购买包括公司要求的所有方面的产品。
                        </p>
                        <br />
                        <strong>PayPal在我们的主要类别中的位置：</strong>
                    </div>
                    <div class="top">
                        <div class="item">
                            <dl>
                                <dt>TOP</dt>
                                <dd>100</dd>
                            </dl>PayPal是百大会计软件产品之一
                        </div>
                        <div class="item">
                            <dl>
                                <dt>TOP</dt>
                                <dd>100</dd>
                            </dl>PayPal是百大会计软件产品之一
                        </div>
                    </div>
                    <div class="wrap">
                        <p>如果您正在考虑使用PayPal，调查在我们的SaaS软件评论库中收集的其他计费软件子类别也可能会有所帮助。</p>
                        <p>每个软件组中都有流行且广泛使用的应用程序。但是，它们是否自动最适合您公司的特定需求？一个流行的软件应用程序可能有成千上万的客户，但是它提供您所需要的吗？因此，不要盲目投资流行的系统。阅读至少一些PayPal
                            Accounting
                            Software的评论，并考虑您希望软件中包含的方面，例如成本，主要功能，可用的集成等。然后，列出一些适合您需要的解决方案。试用这些应用程序的免费试用版，阅读在线意见，从供应商处获得解释，然后系统地进行调查。这项详尽的功课必定会帮助您根据组织的独特需求选择最出色的软件解决方案。
                        </p>
                    </div>
                </div>
                <div class="dt fee">
                    <div class="title">
                        <img src="../../assets/images/dt6.png" alt />
                        <span>服务费用</span>
                    </div>
                    <div class="wrap">
                        <table>
                            <tr>
                                <th>免费试用</th>
                                <td>
                                    <img src="../../assets/images/close.png" alt />
                                </td>
                            </tr>
                            <tr>
                                <th>通过发票或电子邮件在网上销售</th>
                                <td>4.4％+ $ 0.30 USD</td>
                            </tr>
                            <tr>
                                <th>在eBay上销售</th>
                                <td>3.9％+ $ 0.30美元</td>
                            </tr>
                            <tr>
                                <th>国际销售</th>
                                <td>可能需要支付货币兑换费</td>
                            </tr>
                            <tr>
                                <th>商家优惠价</th>
                                <td>联系厂商</td>
                            </tr>
                        </table>
                        <p>PayPal Payments Pro为他们的服务提供了一种简单的定价方案，其中包括API，便捷的购物车集成，在线发票和基于电话的信用卡付款。</p>
                        <strong>这是使用此服务的费用：</strong>
                        <ul>
                            <li>通过发票或电子邮件在网上销售 -4.4％+ $ 0.30 USD</li>
                            <li>在eBay上销售 -3.9％+ $ 0.30 USD</li>
                            <li>国际销售 -可能需要支付货币兑换费</li>
                            <li>商户的折扣价 -当您符合合规的日历月销售量并保持账户信誉良好时，可以申请宝贝的商户折扣价</li>
                        </ul>
                    </div>
                </div>
                <div class="dt user_assess">
                    <div class="title">
                        <img src="../../assets/images/assess.png" alt />
                        <span>用户满意度</span>
                    </div>
                    <div class="assess">
                        <div class="item">
                            <p>
                                <img src="../../assets/images/zheng.png" alt />
                                <span>积极的社交媒体提及</span>
                                <i></i>
                            </p>
                            <p>2800</p>
                        </div>
                        <div class="item">
                            <p>
                                <img src="../../assets/images/fan.png" alt />
                                <span>负面社交媒体提及</span>
                                <i></i>
                            </p>
                            <p>2800</p>
                        </div>
                    </div>
                    <div class="wrap">
                        我们意识到，当您决定购买Payment Gateway时，不仅要查看专家在其评论中如何评价它，而且还必须了解购买该产品的真
                        实人员和公司是否对该产品真正满意。这就是为什么我们创建了基于行为的“ 客户满意度算法”™，该算法可在各种社交媒体网站上收集客户评论，评论和PayPal Payments
                        Pro评论。然后，数据以易于消化的形式呈现，显示有多少人在使用PayPal Payments Pro方面具有正面和负面的经验。有了这些信息，您应该有能力做出明智的购买决定，您不会后悔。
                    </div>
                </div>
                <div class="dt video">
                    <div class="title">
                        <img src="../../assets/images/video.png" alt />
                        <span>视频介绍</span>
                    </div>
                    <div class="wrap">
                        <!-- <video src="../../assets/images/1.mp4" controls></video> -->
                    </div>
                </div>
                <div class="dt technology">
                    <div class="title">
                        <img src="../../assets/images/technology.png" alt />
                        <span>技术细节</span>
                    </div>
                    <div class="wrap">
                        <strong>支持的设备</strong>
                        <ul>
                            <li>视窗</li>
                            <li>Linux</li>
                            <li>安卓系统</li>
                            <li>iPhone / iPad</li>
                            <li>苹果电脑</li>
                        </ul>
                        <strong>部署方式</strong>
                        <ul>
                            <li>视窗</li>
                        </ul>
                        <strong>语言支援</strong>
                        <ul>
                            <li>英语</li>
                        </ul>
                        <strong>定价模式</strong>
                        <ul>
                            <li>每月</li>
                        </ul>
                        <strong>定价模式</strong>
                        <ul>
                            <li>大型生意</li>
                            <li>大型生意</li>
                            <li>大型生意</li>
                        </ul>
                    </div>
                </div>
                <div class="dt support">
                    <div class="title">
                        <img src="../../assets/images/support.png" alt />
                        <span>支持服务</span>
                    </div>
                    <div class="wrap">
                        <ul>
                            <li>电子邮件</li>
                            <li>电话</li>
                            <li>现场支持</li>
                            <li>训练</li>
                            <li>车票</li>
                        </ul>
                    </div>
                </div>
                <div class="dt competitor">
                    <div class="title">
                        <img src="../../assets/images/competitor.png" alt />
                        <span>主要竞争对手</span>
                    </div>
                    <div class="wrap">
                        <table>
                            <tr>
                                <th>产品名称：</th>
                                <th>得分：</th>
                                <th>满意度：</th>
                                <th>价格：</th>
                            </tr>
                            <tr>
                                <td>Pay U</td>
                                <td>9.8</td>
                                <td>98%</td>
                                <td>€250</td>
                            </tr>
                            <tr>
                                <td>Pay U</td>
                                <td>9.8</td>
                                <td>98%</td>
                                <td>€250</td>
                            </tr>
                            <tr>
                                <td>Pay U</td>
                                <td>9.8</td>
                                <td>98%</td>
                                <td>€250</td>
                            </tr>
                            <tr>
                                <td>Pay U</td>
                                <td>9.8</td>
                                <td>98%</td>
                                <td>€250</td>
                            </tr>
                            <tr>
                                <td>Pay U</td>
                                <td>9.8</td>
                                <td>98%</td>
                                <td>€250</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="dt reviews">
                    <div class="title">
                        <img src="../../assets/images/dt7.png" alt />
                        <span>用户评论</span>
                    </div>
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
                    <div class="dt reviews_list">
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
// require styles
import "swiper/dist/css/swiper.css";
import {
    swiper,
    swiperSlide
} from "vue-awesome-swiper";

export default {
    components: {
        StarRating,
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 4,
                notNextTick: true,
                loop: false,
                autoplay: true,
                speed: 1000,
                direction: "horizontal",
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                observeParents: true,
                debugger: true
            },
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
            // this.scroll(sTop);
        };
    },
    methods: {
        scroll(sTop) {
            if (sTop >= 311 && sTop < 450) {
                this.isActive = 0;
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
.swiper-slide {
    width: 25%;
}

.swiper-slide img {
    width: 100%;
}

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
    z-index: 9;
}
</style>
