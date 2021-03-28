import { Specification } from "../model/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,

} from "./ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(Specification, {
            name,
            description,
            created_at: new Date()
        })
    }


    create({ name, description }: ICreateSpecificationDTO): void {
        throw new Error("Method not implemented");
    }
}

export { SpecificationsRepository }