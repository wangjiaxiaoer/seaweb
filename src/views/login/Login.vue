<template>
    <div class="login wrapper">
        <div class="wrap">
            <ul class="tit">
                <li class="active">登录</li>
            </ul>
            <div class="tab">
                <form @click.prevent="login">
                    <ul>
                        <li><input type="text" name="" id="" placeholder="用户名/手机号" v-model="username"></li>
                        <li><input type="password" name="" id="" placeholder="密码" v-model="password"></li>
                        <li><input type="text" name="" id="" placeholder="验证码" v-model="code"></li>
                        <li class="change">
                            <span></span>
                            <a href="javascript:" @click="goReg">没有账号，去注册</a>
                        </li>
                        <li class="last">
                            <input type="button" class="btn btn_orang" value="登录">
                        </li>
                    </ul>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            phone: '',
            mail: '',
            password: '',
            code: ''
        }
    },
    methods: {
        goReg() {
            this.$router.push({ path: 'register' })
        },
        login() {
            // let params = {
            //     'username': this.username,
            //     'password': this.password
            // };

        },
        logOut() {
            this.$store.dispatch('LogOut').then(() => {
                //跳转到登录页面  
                this.$router.push('/login');
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    .wrap {
    }
}
</style>