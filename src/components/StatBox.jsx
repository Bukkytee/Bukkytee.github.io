import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({title, subtitle, icon, progress, increase}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{color: colors.gray[100]}}>{title}</Typography>
                    <Typography variant="h5" sx={{color: colors.greenAccent[500]}}>{subtitle}</Typography>
                </Box>

                

                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <ProgressCircle progress={progress}/>
                        <Typography variant="h5" fontStyle="italic" fontWeight="bold" sx={{color: colors.greenAccent[600], mt: "15px"}}>{increase}</Typography>
                    </Box>
                    
                    
                </Box>

                
            </Box>
        </Box>
    )
}

export default StatBox;