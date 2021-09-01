import { Button, Collapse, FormHelperText, IconButton, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import CpfMaskInput from "./CpfMaskInput";
import PhoneMaskInput from "./PhoneMaskInput";
import styled from "styled-components";
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

export default function Form({ selectOptions }: { selectOptions: { value: number, label: string }[] }) {

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        cpf: false,
        phone: false,
        knowledges: false
    })

    const [values, setValues] = useState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
    })

    const [knowledges, setKnowledges] = useState({
        knowledges: []
    });

    const [open, setOpen] = useState(false);

    function handleFieldChange(event: any) {
        event.persist();
        setKnowledges(knowledges => ({
            ...knowledges,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value
        }));
    }

    function handleInputChange(type: string, value: string) {
        const newValues = { ...values };
        switch (type) {
            case 'name':
                newValues.name = value
                break;
            case 'email':
                newValues.email = value
                break;
            case 'cpf':
                newValues.cpf = value
                break;
            case 'phone':
                newValues.phone = value
                break;
            default:
                console.log('invalid value');
        }
        setValues(newValues);
    }

    function sendForm() {
        if (!validateInfos()) return

        const collaborator = {
            name: values.name,
            cpf: values.cpf,
            email: values.email,
            phone: values.phone,
            knowledges: knowledges.knowledges
        }

        // on sucess setOpen(true)
        setOpen(true);
    }

    function validateInfos() {
        const newErrors = errors;
        let quantityErros = 0;
        if (values.name.length === 0) {
            quantityErros++;
            newErrors.name = true;
        } else {
            newErrors.name = false;
        }
        if (!validCpf()) {
            quantityErros++;
            newErrors.cpf = true;
        } else {
            newErrors.cpf = false;
        }
        if (!validEmail(values.email)) {
            quantityErros++;
            newErrors.email = true;
        } else {
            newErrors.email = false;
        }
        if (!validPhone()) {
            quantityErros++;
            newErrors.phone = true;
        } else {
            newErrors.phone = false;
        }
        if (!validKnowledges()) {
            quantityErros++;
            newErrors.knowledges = true;
        } else {
            newErrors.knowledges = false;
        }

        if (quantityErros > 0) {
            setErrors({ ...newErrors });
            return false;
        }
        return true;
    }

    function validEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validKnowledges() {
        return (knowledges.knowledges.length > 0 && knowledges.knowledges.length <= 3);
    }

    function validCpf() {
        return (values.cpf.trim().length === 14);
    }

    function validPhone() {
        return (values.phone.trim().length === 15);
    }

    return (
        <FormContainer noValidate autoComplete="off" >
            <div>
                <TextField label="Nome" error={errors.name} value={values.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                {errors.name && <FormHelperText >Nome necessário</FormHelperText>}
            </div>
            <div>
                <TextField label="Email" error={errors.email} value={values.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                {errors.email && <FormHelperText >Email inválido!</FormHelperText>}
            </div>
            <div>
                <PhoneMaskInput error={errors.phone} value={values.phone} handleInputChange={handleInputChange} />
                {errors.phone && <FormHelperText >(XX) XXXXX-XXXX</FormHelperText>}
            </div>
            <div>
                <CpfMaskInput error={errors.cpf} value={values.cpf} handleInputChange={handleInputChange} />
                {errors.cpf && <FormHelperText >XXX.XXX.XXX-XX</FormHelperText>}
            </div>
            <div>
                <TextField
                    error={errors.knowledges}
                    select
                    name="knowledges"
                    id="knowledges"
                    variant="outlined"
                    label="Conhecimentos"
                    SelectProps={{
                        multiple: true,
                        value: knowledges.knowledges,
                        onChange: handleFieldChange
                    }}
                >
                    {selectOptions?.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField >
                {errors.knowledges && <FormHelperText >Selecione de 1 a 3 conhecimentos</FormHelperText>}
            </div>
            <Button
                variant="contained"
                color="primary"
                endIcon={<SaveIcon />}
                onClick={sendForm}
            >
                Send
            </Button>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Enviado com sucesso!
                </Alert>
            </Collapse>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    > div {
        width: 100%;

        *{
            width: 100%;
        }
    }

    button{
        width: 100px;
        height: 45px;
    }

    > div:last-child{
        width: 80%;
    }
`;