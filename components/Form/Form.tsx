import React from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";
import axios from "axios";
import { FormWrapper, StyledPaperForm } from "./Form.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Name should not contain numbers")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalide email provided")
    .required("Email adress is eequired"),
});

type FormProps = {
  handleCloseForm: (e: any) => void;
};

const Form: React.FC<FormProps> = ({ handleCloseForm }) => {
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    // @ts-ignore
    defaultValues: {
      name: "",
      email: "",
    },
  });
  type InputsValues = {
    name: string;
    email: string;
  };
  const handleSubmit = async (data: InputsValues) => {
    const res = await axios.post(`http://localhost:3000/api/adopt`, data);
    if (res.status === 200) {
      console.log(res.data);
      // TODO REDIRECT
      // Router.push({ pathname: "/thanks" });
    }
  };

  return (
    <FormWrapper className='close' onClick={handleCloseForm}>
      <StyledPaperForm elevation={4}>
        <Grid container spacing={3}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <Typography variant='h5' align='center'>
                Become a Hero
              </Typography>
              <CustomTextField
                name='name'
                label='Full Name'
                isError={!!methods.errors?.name}
                message={methods.errors?.name?.message}
              />
              <CustomTextField
                name='email'
                label='E-mail'
                email
                isError={!!methods.errors?.email}
                message={methods.errors?.email?.message}
              />
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                fullWidth
              >
                potwierdź
              </Button>
            </form>
          </FormProvider>
        </Grid>
      </StyledPaperForm>
    </FormWrapper>
  );
};

export default Form;

type CTFProps = {
  name: string;
  label: string;
  isError: boolean;
  message: string;
  email?: boolean;
};

export const CustomTextField: React.FC<CTFProps> = ({
  name,
  label,
  email,
  isError,
  message,
}) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12}>
      <Controller
        as={TextField}
        control={control}
        name={name}
        label={label}
        required
        fullWidth
        type={email ? "email" : "text"}
        error={isError}
        helperText={message}
      ></Controller>
    </Grid>
  );
};
