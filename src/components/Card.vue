<script lang="ts">
export default {
    props: ['data'],    
}
</script>

<template>
    <div class="card">
        <figure>
            <img :src="data.img" alt="canard">
        </figure>
        <div>
            <h2>{{data.title}}</h2>
            <p>{{data.description}}</p>
        </div>
    </div>
</template>

<style>
    .card {
        width: 500px;
        height: 25  0px;
        display: flex;
        border: 1px solid black;
        padding: 0;
    }

    .card > figure {
        flex: 1;
        margin: 0;
    }

    .card > figure > img {
        height: 100%;
        width: 100%;
    }

    .card > div {
        flex: 1;
    }
</style>