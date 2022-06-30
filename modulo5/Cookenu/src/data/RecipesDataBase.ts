import { Recipes } from "../model/Recipes";
import { BaseDatabase } from "./BaseDatabase";


export class RecipesDataBase extends BaseDatabase {

    private static tableName = "RecipesCookenu";

    public recipe = async (recipes: Recipes): Promise<void> => {
        await BaseDatabase.connection()
            .insert({
                id: recipes.getId(),
                titulo: recipes.getTitulo(),
                descricao: recipes.getDescricao(),
                modo_de_preparo: recipes.getModoDePreparo(),
                data_de_criacao: recipes.getDataDeCriacao()

            })
            .into(RecipesDataBase.tableName)

}}