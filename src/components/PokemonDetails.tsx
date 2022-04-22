import axios from "axios";
import React from "react";
import { IPokeApiResponsePokemon, state } from "./types";
import { getCallToAction, fetchPokemonData } from "./Pokemon.service";
import {
  Card,
  CardActions,
  Button,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

class Pokemon extends React.Component<{ id: number; navigate: any }, state> {
  async componentDidMount() {
    this.setState(await fetchPokemonData(this.props.id));
  }

  render(): JSX.Element {
    if (this.state != null) {
      return (
        <Card sx={{ maxWidth: 700 }}>
          <CardMedia
            component="img"
            alt="Pokemon"
            height="200"
            image={this.state.image_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.state.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.state.description}
            </Typography>
            <Typography variant="body2">
              First ability: {this.state.firstAbility}
            </Typography>
            <Typography variant="body2">
              Weight: {this.state.weight} kg
            </Typography>
          </CardContent>
        </Card>
      );
    }
    return <h2>Fetch in progress</h2>;
  }
}

export default Pokemon;
