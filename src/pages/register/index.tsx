import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";
import useApi from "../../hooks/useApi";
import IKnowledge from "../../interfaces/IKnowledge";

interface option {
    label: string;
    value: number;
}

export default function RegisterPage() {

    const [knowledges, setKnowledges] = useState<IKnowledge[]>([]);
    const [selectOptions, setSelectOptions] = useState<option[]>([]);
    const { collaboratorName } = useParams<{ collaboratorName: string }>();

    const api = useApi();

    useEffect(() => {
        api.knowledges.getAll().then(r => setKnowledges(r));
    }, []);

    function transformData(r: IKnowledge[]) {
        return r.map(knowledge => {
            return { label: knowledge.name, value: knowledge.id }
        });
    }

    useEffect(() => {
        const options = transformData(knowledges);
        setSelectOptions(options);
    }, [knowledges])

    return (
        <Container>
            <h2>Registro de colaborador</h2>
            <h2>Bem vindo {collaboratorName}!</h2>
            <Form selectOptions={selectOptions} />
        </Container>
    )
}

const Container = styled.div`

  border: 8px solid #412301;
  border-radius: 20px;
  width: 40%;
  min-width: 300px;
  padding: 20px 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2{
      font-size: 1.3em;
      margin-bottom: 5px;
  }
`;