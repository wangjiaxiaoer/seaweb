<template>
    <header>
        <div class="wrapper">
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li>
                        <router-link to="/" exact>首页</router-link>
                    </li>
                    <li>
                        <router-link to="/productAll">跨境服务</router-link>
                    </li>
                    <li>
                        <router-link to="/entering">服务商入驻</router-link>
                    </li>
                    <li>
                        <router-link to="/ustomized">私人订制</router-link>
                    </li>
                </ul>
            </nav>
            <div class="userbar">
                <router-link to="">登录</router-link>
                <router-link to="" class="reg">注册</router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style>

</style>