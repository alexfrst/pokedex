import React from "react";
import { state } from "./types";
import Pokemon from "./Pokemon";

class PokemonCaroussel extends React.Component<{ count: number }, state> {
  render() {
    const acc: JSX.Element[] = [];
    for (let i = 1; i <= this.props.count; i++) {
      acc.push(<Pokemon id={i} />);
    }
    return <div>{acc}</div>;
  }
}

export default PokemonCaroussel;
