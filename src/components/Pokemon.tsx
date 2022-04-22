import axios from "axios";
import React from "react";
import { IPokeApiResponsePokemon, state } from "./types";
import { getCallToAction, fetchPokemonData } from "./Pokemon.service";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  Button,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

class Pokemon extends React.Component<{ id: number }, state> {
  async componentDidMount() {
    this.setState(await fetchPokemonData(this.props.id));
  }

  render(): JSX.Element {
    if (this.state != null) {
      return (
        <Link to={`details/${this.props.id}`}>
          <Card
            sx={{
              maxWidth: 345,
              ":hover": {
                animation: "pulse 0.7s",
                boxShadow: 3,
                backgroundColor: "#E0E0E0",
              },
            }}
          >
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
            </CardContent>
            <CardActions>
              <Button size="small" href={`details/${this.props.id}`}>
                {getCallToAction()} <ChevronRightIcon sx={{ mb: 0.2 }} />
              </Button>
            </CardActions>
          </Card>
        </Link>
      );
    }
    return <h2>Fetch in progress</h2>;
  }
}

export default Pokemon;
