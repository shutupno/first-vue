<template>
    <div class="title">
        {{title}}
    </div>
</template>

<script>
export default {
    props: ["meg"],
    data() {
        return {
            title:""
        }
    },
    created () {
        this.title = this.meg;
    }
}
</script>

<style lang="scss">
    .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: aqua;
        background-color: aquamarine;
    }
</style>