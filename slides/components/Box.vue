<script>
export default {
    props: {
        top: String,
        left: String,
        width: String,
        height: String,
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
    <div class="highlight-box" :style="style"></div>
</template>

<style>
    .highlight-box {
        position: absolute;
        border: 2px solid #0ad44f;
        border-radius: 5px;
        box-shadow: 2px 2px 0 0 rgba(0,0,0,0.25);
    }
</style>
