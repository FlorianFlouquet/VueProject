<template lang="">
    <div class="create-recipe">
        <h1>Création de recette</h1>
        <div class="upper-form">
            <div>
                <figure>
                    <img src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg" alt="ah">
                </figure>
                <button>
                    Add a picture
                </button>
            </div>
            <div>
                <div class="input-title">
                    <h2>RECIPE TITLE: </h2>
                    <input type="text" name="" id="">
                </div>
                <textarea rows="15" cols="70" placeholder="Write a description"></textarea>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style>
    .create-recipe {
        width: 1280px;
    }

    .create-recipe > h1 {
        margin-bottom: 30px;
    }

    .upper-form {
        display: flex;
        width: 100%;
    }

    .upper-form > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .upper-form figure {
        height: 300px;
        width: 500px;
        object-fit: cover;
        margin-bottom: 20px;
    }

    .upper-form figure > img {
        width: 100%;
        height: 100%;
    }

    .input-title {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
    }

    .input-title > input {
        width: 300px;
    }

</style>