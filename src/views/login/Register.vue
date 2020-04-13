<template>
    <div class="login wrapper">
        <div class="wrap">
            <ul class="tit">
                <li :class="[type===0?'active':'']" @click="changeType(0)">手机注册</li>
                <li class="air"></li>
                <li :class="[type===1?'active':'']" @click="changeType(1)">邮箱注册</li>
            </ul>
            <div class="tab">
                <ul>
                    <li><input v-model="username" type="text" name="" id="" placeholder="用户名"></li>
                    <li v-show="type===0">
                        <input v-model="phone" type="tel" maxlength="11" name="" id="" placeholder="手机号" class="phone">
                    </li>
                    <li v-show="type===1"><input type="text" name="" id="" placeholder="邮箱" class="mail"></li>
                    <li><input type="password" v-model="password" name="" id="" placeholder="密码"></li>
                    <li><input type="password" v-model="againPwd" name="" id="" placeholder="确认密码"></li>
                    <li class="change">
                        <p>
                            <input type="checkbox" name="" id="agree">
                            <label for="agree">我同意<a href="javascript:">《用户协议》</a></label>
                        </p>
                        <a href="javascript:" @click="goLogin">已有账号，去登录</a>
                    </li>
                    <li class="last">
                        <input type="button" class="btn btn_orang" value="注册">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: 0
        }
    },
    methods: {
        changeType(val) {
            this.type = val
        },
        goLogin() {
            this.$router.push({ path: 'login' })
        }
    }
}
</script>

<style lang="less" scoped>
</style>