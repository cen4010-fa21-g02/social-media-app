import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Copyright = () => {
    return (
        <Box display="flex" alignItems="center">
            <GitHubIcon sx={{ fontSize: 18, mr: 1 }} />
            <Typography variant="subtitle1" color="text.secondary">
                Github{" "}
                <a href="https://github.com/cen4010-fa21-g02/social-media-app" target="_blank" rel="noopener noreferrer">
                    Hobbly
                </a>
            </Typography>
        </Box>
    );
};

export default Copyright;
