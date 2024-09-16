import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../TodoForm';



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('Please enter a title')
        .min(5,'title is to short')
    });

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        // console.log('TODO FORM:', values);
        const{onSubmit} = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;
// ? ktra xem trong data có hay ko