import BaseModel from '../models/base.model'

interface ServiceInterface {
    create(model: BaseModel): Promise<number>;
    update(model: BaseModel): Promise<BaseModel>;
    delete(id: number):  Promise<BaseModel>;
    list(limit: number, page: number): Promise<Array<BaseModel>>
    save(model: BaseModel): Promise<BaseModel>;
    onChange?(): any;
}

export default ServiceInterface