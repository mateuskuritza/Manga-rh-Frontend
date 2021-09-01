import styled from "styled-components";
import RegistersTable from "./RegistersTable";

export default function RegistersPage() {
    return (
        <Container>
            <h2>Registros</h2>
            <RegistersTable />
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