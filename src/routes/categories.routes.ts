import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return CreateCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {

})

export { categoriesRoutes };