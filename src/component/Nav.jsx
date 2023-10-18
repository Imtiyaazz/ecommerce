import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataBtn } from "./data";

const Nav = () => {
  const [btn, setBtn] = useState(dataBtn);
  return (
    <Grid container spacing={2}>
      {btn.map((item) => (
        <Grid item xs={item.xs}>
          <Link to={item.path}>
            <Button fullWidth variant="contained">
              {item.label}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Nav;
