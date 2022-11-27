<script lang="ts">
import CardVue from '../components/Card.vue';
import { dataService } from '../service/dataService';
import RecipeType from '../types/RecipeType';

export default {
    components: {
        CardVue
    },

    mounted() {
        this.getData();
    },

    data() {
        return {
            data: [{}],
        }
    },

    methods: {
        navigate() {
            this.$router.push('/create');
        },

        getData() {
            this.data = dataService.getData();
        },
    }
}
</script>

<template>
    <div>
        <h1>ReciPeace</h1>
        <button 
            @click="navigate"
            >Create recipe</button>
        <div class="container">
            <div class="card-center" v-for="item in data">
                <CardVue :data="item" />
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