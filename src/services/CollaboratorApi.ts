import INewCollaborator from "../interfaces/INewCollaborator";
import ICollaborator from "../interfaces/ICollaborator";
import IDetailsCollaborator from "../interfaces/IDetailsCollaborator";
import api from "./api";

export default class CollaboratorApi {
    async getAll(): Promise<ICollaborator[]>{
        const collaborators = await api.get("/collaborator");
        return collaborators.data;
    }

    async getOne(id: number): Promise<IDetailsCollaborator>{
        const collaborator = await api.get("/collaborator/" + id);
        return collaborator.data;
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