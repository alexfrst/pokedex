import React from "react";
import { state } from "./types";
import Pokemon from "./Pokemon";
import { Grid } from "@mui/material";

class PokemonCaroussel extends React.Component<{ count: number }, state> {
  render() {
    const acc: JSX.Element[] = [];
    for (let i = 1; i <= this.props.count; i++) {
      acc.push(
        <Grid item xs={4}>
          <Pokemon id={i} />
        </Grid>
      );
    }
    return (
      <Grid container spacing={4} sx={{ pr: 4 }}>
        {acc}
      </Grid>
    );
  }
}

export default PokemonCaroussel;
