<script lang="ts">
import CardVue from '../components/Card.vue';

export default {
    components: {
        CardVue
    },

    methods: {
        navigate() {
            this.$router.push('/create');
        }
    }
}
</script>

<template>
    <div>
        <h1>Recipisse</h1>
        <button 
            @click="navigate"
            >Create recipe</button>
        <div class="container">
            <div class="card-center">
                <CardVue />
            </div>
            <div class="card-center">
                <CardVue />
            </div>
            <div class="card-center">
                <CardVue />
            </div>
            <div class="card-center">
                <CardVue />
            </div>
        </div>
    </div>
    <RouterView />
</template>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        row-gap: 40px;
    }

    .card-center {
        width: 50%;
        display: flex;
        justify-content: center;
    }
</style>