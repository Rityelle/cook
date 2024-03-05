import * as ingredients from "./ingredientsServices";
import * as recipes from "./recipesService"
import * as preparations from "./preparationsService"

export const services = {
    recipes,
    ingredients,
    preparations,

    storage: {
        imagePath:"https://gjyhbsfrovqgfhhyrupq.supabase.co/storage/v1/object/public/ingredients"
    }
}



