import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IDetailsCollaborator from '../../interfaces/detailsCollaborator';
import dayjs from 'dayjs';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        width: '50%',
    },
});

export default function InfosCard({ data }: { data: IDetailsCollaborator | undefined }) {
    const classes = useStyles();

    function validate() {
        // send validate to API
    }

    function unValidate() {
        // send unvalidate to API
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