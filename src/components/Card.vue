<template>
    <div class="card">
        <figure>
            <img src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" alt="canard">
        </figure>
        <div>
            <h2>Nom de la recette</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
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

<script lang="ts">
    export default {
        
    }
</script>