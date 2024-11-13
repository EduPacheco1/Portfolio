import { styled } from "@mui/material";
import { ReactNode } from "react";
import { SxProps, Theme } from '@mui/material/styles';

interface StyledButtonProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
    sx?: SxProps<Theme>;  // Adding sx prop support
}

const StyledButtonElement = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.main,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    [theme.breakpoints.down('sm')]: {
        padding: "8px 15px",
        fontSize: "0.9rem",
    },
    [theme.breakpoints.up('sm')]: {
        padding: "10px 20px",
        fontSize: "1rem",
    },
    '&:hover': {
        backgroundColor: theme.palette.secondary.light
    }
}));

// Convert StyledButtonElement to accept sx prop
const CustomStyledButton = styled(StyledButtonElement, {
    shouldForwardProp: (prop) => prop !== 'sx'
})<{ sx?: SxProps<Theme> }>(({ sx }) => ({
    ...(sx && { ...sx })
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, className, sx }) => {
    return (
        <CustomStyledButton onClick={onClick} className={className} sx={sx}>
            {children}
        </CustomStyledButton>
    );
};

export default StyledButton;