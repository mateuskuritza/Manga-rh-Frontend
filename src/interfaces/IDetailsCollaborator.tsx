export default interface IDetailsCollaborator {
    "id": string,
    "name": string,
    "cpf": string,
    "email": string,
    "phone": string,
    "valid": boolean,
    "update_at": string,
    "created_at": string,
    "knowledges": {
        "id": number,
        "name": string
    }[]
}