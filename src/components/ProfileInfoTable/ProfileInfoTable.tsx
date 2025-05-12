import { TableCell, TableRow, useTheme } from "@mui/material"

type TProfileInfoTableProps={
    name:string,
    value:string,
}
const ProfileInfoTable = ({name,value}:TProfileInfoTableProps) => {
    const {palette}=useTheme()
  return (
   <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontWeight:"bold"}}>
                {name}
              </TableCell>
              <TableCell align="right" sx={{color:palette.text.primary}}>{value}</TableCell>
          
            </TableRow>  )
}

export default ProfileInfoTable