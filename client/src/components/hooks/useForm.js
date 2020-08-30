import { useState } from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    // const handleChange = (e) => {
    //     setValues({ [e.target.name]: e.target.values });
    // }

    const reset = (e) => {
        setValues({
          title: "",
          amount: "",
          amount_float: "",
          expense_type: "",
          description: "",
          date_of_expense: "",
          report_id: "",
        });
    }

    return [values, (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }, reset]
}



//-- Reference : Ben Awad ~11 min in (https://www.youtube.com/watch?v=9xhKH43llhU)