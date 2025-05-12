import { MenuItem, TextField, useTheme } from "@mui/material"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"

type TFormInputProps<TFieldValue extends FieldValues>={
    label:string,
    type:'email'|'password'|'text'|'date'|'select'
    name:Path<TFieldValue>,
    error?:string
    register:UseFormRegister<TFieldValue>,
      autoFocus?:boolean,
      autoComplete?:string

}
const FormInput =<TFieldValue extends FieldValues>({label,register,name,type='text',error,autoFocus,autoComplete}:TFormInputProps<TFieldValue>) => {
    const {palette}=useTheme()
  return (
<>

        {type=='select' ?  <TextField
          id={`select-${name}`}
          select
          label={label}
       
          helperText={error?error:""}
          {...register(name)}
          fullWidth
          error={!!error}
        >
         
            <MenuItem value={'male'}>
            Male
            </MenuItem>
            <MenuItem value={'female'}>
            Female
            </MenuItem>
          
        </TextField> :<TextField
   sx={{
    '& .MuiFormHelperText-root': {
      color: `${palette.error.main}`,
    }
  }}
          id={label}
          

          label={type=='date'?"":label}
           {...register(name)}
           type={type}
          fullWidth
          helperText={error?error:''}
          error={!!error}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
        />}
</>
  )
}

export default FormInput