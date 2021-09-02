import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import ICollaborator from "../../interfaces/ICollaborator";
import RegistersTable from "./RegistersTable";

export default function RegistersPage() {

    const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

    const api = useApi();

    useEffect(() => {
        api.collaborators.getAll().then(r => setCollaborators(formatCollaborators(r)));
    }, [])

    function formatCollaborators(r: ICollaborator[]) {
        return r.map(collaborator => {
            collaborator.created_at = dayjs(collaborator.created_at).locale('br').format('YYYY-MM-DD');
            return collaborator
        })
    }

    return (
        <Container>
            <h2>Registros</h2>
            <RegistersTable data={collaborators} />
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

    >div{
        width: 100%;
        max-width: 432px;
    }
`;