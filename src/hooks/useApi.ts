import KnowledgesApi from "../services/KnowledgesApi";
import CollaboratorApi from "../services/CollaboratorApi";

export default function useApi() {
  return {
    knowledges: new KnowledgesApi(),
    collaborators: new CollaboratorApi()
  };
}