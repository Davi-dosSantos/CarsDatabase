import { Category } from "../model/Category";
import { Specification } from "../model/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";


interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification
}
export { ISpecificationsRepository, ICreateSpecificationDTO };
