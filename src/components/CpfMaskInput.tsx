import React from 'react';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';

interface CpfMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
}

function CpfMaskCustom(props: CpfMaskCustomProps) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
        />
    );
}

export default function CpfMaskInput({ error, value, handleInputChange }: { error: boolean, value: string, handleInputChange: Function }) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange('cpf', event.target.value);
    };

    return (
        <Input
            error={error}
            value={value}
            onChange={handleChange}
            inputComponent={CpfMaskCustom as any}
            placeholder="CPF"
        />
    );
}
