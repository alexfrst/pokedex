import axios from "axios";
import React from "react";
import { IPokeApiResponse, state } from "./types";
import { convertPoundsToKilograms, getFirstAbility } from "./Pokemon.service";
import { Link } from "react-router-dom";

class Pokemon extends React.Component<{ id: number }, state> {
  async componentDidMount() {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.props.id}/`
    );
    const data: IPokeApiResponse = response.data;

    const pokemonData: state = {
      weight: convertPoundsToKilograms(data),
      firstAbility: getFirstAbility(data),
      name: data.name,
      image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
      id: this.props.id,
    };
    this.setState(pokemonData);
  }

  render(): JSX.Element {
    if (this.state != null) {
      return (
        <div>
          <h1>
            <Link to={`details/${this.props.id}`}>{this.state.name}</Link>
          </h1>
          <img src={this.state.image_url} alt="Pokemon" />
          <h2>First ability: {this.state.firstAbility}</h2>
          <h2>Weight: {this.state.weight}</h2>
        </div>
      );
    }
    return <h2>Fetch in progress</h2>;
  }
}

export default Pokemon;
