import { Typography, Grid, Button } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// @ts-ignore
import Swal from "sweetalert2";

import { FormWrapper, StyledPaper } from "./Form.style";
import { CustomTextField } from "./CustomTextField/CustomTextField";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be longer than 3 chars")
    .matches(/^([^0-9]*)$/, "Name shoud not contains a numbers")
    .required("Name is Required"),
  email: yup.string().email().required("Adress e-mail is required"),
});

type FormProps = {
  closePopup: () => void;
  complete: () => void;
  endConfetti: () => void;
};

const Form: React.FC<FormProps> = ({ closePopup, complete, endConfetti }) => {
  const methods = useForm({
    // @ts-ignore
    defaultValues: { name: "", email: "" },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = methods.handleSubmit(async data => {
    const res = await axios.post(`http://localhost:3000/api/adopt`, {
      name: data.name.trim(),
      email: data.email.trim(),
    });
    if (res.status === 200) {
      console.log(res.data);
      // TODO REDIRECT
      // Router.push({ pathname: "/thanks" });
    }
    Swal.fire(
      `Good Job ${data.name}!`,
      "Thanks to you some poppies will found a new home 🐩",
      "success"
    ).then(() => endConfetti());
    console.log(data);
    complete();
    closePopup();
  });

  return (
    <FormWrapper>
      <StyledPaper elevation={3}>
        <Typography variant='h5' component='h3' align='center'>
          Confirm Adoption Form
        </Typography>

        <Grid container spacing={3}>
          <FormProvider {...methods}>
            <form autoComplete='off' onSubmit={onSubmit}>
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
                Submit
              </Button>
            </form>
          </FormProvider>
        </Grid>
      </StyledPaper>
    </FormWrapper>
  );
};
export default Form;
