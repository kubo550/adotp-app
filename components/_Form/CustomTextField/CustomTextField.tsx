import { TextField, Grid } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

type CTFProps = {
  name: string;
  label: string;
  isError: boolean;
  message: string | undefined;
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
        // fullWidth
        required
        type={email ? "email" : "text"}
        variant='outlined'
        error={isError}
        helperText={message}
      />
    </Grid>
  );
};
