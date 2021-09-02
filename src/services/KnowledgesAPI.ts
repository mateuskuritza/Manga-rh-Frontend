
import IKnowledge from "../interfaces/IKnowledge";
import api from "./api";

export default class CollaboratorApi {
    getAll(): Promise<IKnowledge[]>{
        return api.get("/knowledges");
    }
}