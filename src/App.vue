<template>
    <div id="app" v-cloak>
        <Header />
        <keep-alive :include="include" :max="10">
            <router-view class="router" ref="router"></router-view>
        </keep-alive>
        <Footer />
    </div>
</template>

<script>
    import Footer from "./components/Footer";
    import Header from "./components/Header";
    export default {
        name: "app",
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                include: []
            }
        }
    };
</script>

<style>
    [v-cloak] {
        display: none !important;
    }
</style>