import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import IDetailsCollaborator from "../../interfaces/detailsCollaborator";
import InfosCard from "./InfosCard";

export default function ValidatePage() {

    const [data, setData] = useState<IDetailsCollaborator>();
    const { collaboratorName } = useParams<{ collaboratorName: string }>();

    useEffect(() => {
        // GET data API /collaboratorName
        setData({
            "id": "4fa1753c-5bfb-4c3a-bb2f-b33898a7b203",
            "name": "Jorginho",
            "cpf": "419.561.229-96",
            "email": "joao@gmail.com",
            "phone": "(42) 99904-3116",
            "valid": false,
            "update_at": "2021-08-31T20:27:02.509Z",
            "created_at": "2021-08-31T20:21:32.078Z",
            "knowledges": [
                {
                    "id": 1,
                    "name": "Git"
                },
                {
                    "id": 3,
                    "name": "NodeJS"
                },
                {
                    "id": 5,
                    "name": "DevOps"
                }
            ]
        })
    }, [])

    return (
        <Container>
            <h2>Validar colaborador</h2>
            <InfosCard data={data} />
        </Container>
    )
}

const Container = styled.div`
    border: 8px solid #412301;
    border-radius: 20px;
    width: 80%;
    min-width: 300px;
    padding: 30px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2{
        font-size: 1.3em;
        margin-bottom: 20px;
    }
`;