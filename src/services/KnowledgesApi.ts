import IKnowledge from "../interfaces/IKnowledge";
import api from "./api";

export default class KnowledgesApi {
    async getAll(): Promise<IKnowledge[]>{
        const knowledges = await api.get("/knowledges");
        return knowledges.data
    }
}