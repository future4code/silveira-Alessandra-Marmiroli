import { recipes } from "../services/types";
import { BaseDatabase } from "./BaseDatabase";


export class RecipesDataBase extends BaseDatabase {

    private static tableName = "RecipesCookenu";

    public async createRecipe(recipes: recipes): Promise<void> {
        try {
            console.log(recipes)
            await BaseDatabase.connection("RecipesCookenu")
                .insert(recipes)
        } catch (error) {
            console.log(error)
        }

    }
    public getByRecipe = async (id: string): Promise<any> => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from("RecipesCookenu")
            .where({ id });
        return result[0]
    }
}