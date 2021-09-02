import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import IDetailsCollaborator from "../../interfaces/IDetailsCollaborator";
import InfosCard from "./InfosCard";
import { useHistory } from 'react-router-dom';

export default function ValidatePage() {

    const [data, setData] = useState<IDetailsCollaborator>();
    const { collaboratorName } = useParams<{ collaboratorName: string }>();

    const api = useApi();

    const history = useHistory();

    useEffect(() => {
        api.collaborators.getOne(collaboratorName).then((r) => setData(r));
    }, [])

    if (!data) return <h1>Loading...</h1>

    return (
        <Container>
            <h2>Validar colaborador </h2>
            <p onClick={() => history.goBack()}>Voltar</p>
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
    }

    > p{
        margin: 20px 0;
        font-size: 1.1em;
        cursor: pointer;
        :hover{
            transform: scale(1.1);
        }
    }
`;