<script>
export default {
    props: {
        top: Number,
        left: Number,
        width: Number,
        height: Number,
    },
    computed: {
        style() {
            return 'top:' + this.top + 'px;'
                + 'left:' + this.left + 'px;'
                + 'width:' + this.width + 'px;'
                + 'height:' + this.height + 'px;'
        }
    },
}
</script>

<template>
    <div class="highlight-box" :style="style">{{ style }}</div>
</template>

<style>
    .highlight-box {
        position: absolute;
        border: 2px solid red;
    }
</style>
