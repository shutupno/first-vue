<template>
    <div class="home">
        <router-link to="/">HelloWorld</router-link>
        <router-link to="/index">index</router-link>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    .home {
        width: 300px;
        height: 300px;
        background-color: #efefef;
    }
</style>
