import React from 'react';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';

interface PhoneMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
}

function PhoneMaskCustom(props: PhoneMaskCustomProps) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
        />
    );
}

export default function PhoneMaskInput({ error, value, handleInputChange }: { error: boolean, value: string, handleInputChange: Function }) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange('phone', event.target.value);
    };

    return (
        <Input
            error={error}
            value={value}
            onChange={handleChange}
            inputComponent={PhoneMaskCustom as any}
            placeholder="Telefone"
        />
    );
}
