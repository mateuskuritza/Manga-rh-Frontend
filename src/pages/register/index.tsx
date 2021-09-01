import styled from "styled-components";
import Form from "../../components/Form";

export default function RegisterPage() {
    return (
        <Container>
            <h2>Registro de colaborador</h2>
            <Form selectOptions={[{ label: "NodeJS", value: 1 }, { label: "ReactJS", value: 2 }, { label: "PHP", value: 3 }, { label: "Ruby", value: 4 }]} />
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
  }
`;