import { createRouter, createWebHistory } from "vue-router";
import RecipesListPageVue from '../pages/RecipesListPage.vue';
import CreateRecipePageVue from '../pages/CreateRecipePage.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {path: "/", component: RecipesListPageVue},
            {path: "/create", component: CreateRecipePageVue},
            {path: "/:pathMatch(.*)*", component: RecipesListPageVue}, //page not found
        ]
    }
)

export default router;