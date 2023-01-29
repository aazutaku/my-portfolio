import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface PropsTypes extends ButtonProps {
  to: string;
}

const LinkButton: FC<PropsTypes> = ({
  children,
  variant,
  color,
  className,
  to,
}): JSX.Element => {
  return (
    <Button
      className={className}
      variant={variant}
      color={color}
      component={RouterLink}
      to={to}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
