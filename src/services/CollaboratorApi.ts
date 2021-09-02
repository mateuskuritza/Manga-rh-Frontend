import INewCollaborator from "../interfaces/INewCollaborator";
import ICollaborator from "../interfaces/ICollaborator";
import IDetailsCollaborator from "../interfaces/IDetailsCollaborator";
import api from "./api";

export default class CollaboratorApi {
    getAll(): Promise<ICollaborator[]>{
        return api.get("/collaborator");
    }

    getOne(id: number): Promise<IDetailsCollaborator>{
        return api.get("/collaborator/" + id);
    }

    create(body: INewCollaborator){
        return api.post("/collaborator", body);
    }

    validate(id: string){
        return api.post(`/collaborator/${id}/validate`);
    }

    unvalidate(id: string){
        return api.post(`/collaborator/${id}/unvalidate`);
    }
}