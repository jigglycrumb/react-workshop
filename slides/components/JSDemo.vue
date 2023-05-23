<template>
    <button class="js-demo-button" @click="myFunction()">Greet me!</button>
    <p id="js-demo">&nbsp;</p>
</template>


<script>
function myFunction() {
    document.getElementById("js-demo").innerHTML = "Hello World!";
}
</script>

<style>
button.js-demo-button {
    border: 1px solid silver;
    background: seashell;
    padding: 0.5em 1em;
    border-radius: 5px;
    margin: 0.5em 0;
    color: #000;
}

p#js-demo {
    padding: 1em;
    border: 1px solid silver;
}
</style>
