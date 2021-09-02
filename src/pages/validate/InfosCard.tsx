import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IDetailsCollaborator from '../../interfaces/IDetailsCollaborator';
import dayjs from 'dayjs';
import useApi from '../../hooks/useApi';
import { Button, Collapse, IconButton } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';


const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        width: '50%',
    },
});

export default function InfosCard({ data }: { data: IDetailsCollaborator }) {
    const classes = useStyles();

    const api = useApi();

    const [sucess, setSucess] = useState(false);
    const [fail, setFail] = useState(false);

    function validate() {
        resetAlert();
        api.collaborators.validate(data.id).then(() => setSucess(true)).catch(() => setFail(true));
    }

    function unValidate() {
        resetAlert();
        api.collaborators.unvalidate(data.id).then(() => setSucess(true)).catch(() => setFail(true));
    }

    function resetAlert() {
        setSucess(false);
        setFail(false);
    }

    return (
        <Container>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <h2>
                            {data?.name}
                        </h2>
                        <p>
                            Email: {data?.email}
                        </p>
                        <p>
                            Telefone: {data?.phone}
                        </p>
                        <p>
                            CPF: {data?.cpf}
                        </p>
                        <p>
                            Criado em: {dayjs(data?.created_at).locale('br').format('YYYY-MM-DD HH:mm:ss')}
                        </p>
                        <p>
                            Atualizado em: {dayjs(data?.update_at).locale('br').format('YYYY-MM-DD HH:mm:ss')}
                        </p>
                        <br></br>
                        <div>
                            <p>Conhecimentos:</p>
                            {data?.knowledges.map(skill => <strong style={{ fontWeight: 600 }} key={skill.id}>{skill.name} </strong>)}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions className="center-buttons">
                    <Button onClick={validate} variant="contained" size="large" color="primary">
                        Validar
                    </Button>
                    <Button onClick={unValidate} variant="contained" size="large" color="secondary">
                        Não validar
                    </Button>
                </CardActions>
                <Collapse in={sucess}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setSucess(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        Validado com sucesso!
                    </Alert>
                </Collapse>
                <Collapse in={fail}>
                    <Alert
                        color="warning"
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="secondary"
                                size="small"
                                onClick={() => {
                                    setFail(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        Erro ao validar!
                    </Alert>
                </Collapse>
            </Card >
        </Container>
    );
}

const Container = styled.div`
    .center-buttons{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2{
        font-weight: 600;
    }

    p{
        font-size: 16px;
        margin: 2px 0;
    }

    strong{
        font-weight: 600;
        font-size: 14px;
        margin-right: 4px;
    }
`;