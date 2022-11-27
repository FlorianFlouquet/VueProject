import RecipeType from '../types/RecipeType';
import data from './data'

class DataService {
    getData() {
        return data;
    }

    addData(newRecipe : RecipeType) {
        data.push(newRecipe);
    }
}

export const dataService = Object.freeze(new DataService());