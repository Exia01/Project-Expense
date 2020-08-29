import { useState } from 'react';

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        setValues({ [e.target.name]: e.target.values });
    }

    const reset = () => {
        setValues('');
    }

    return [values, handleChange, reset];
}

export default useForm;