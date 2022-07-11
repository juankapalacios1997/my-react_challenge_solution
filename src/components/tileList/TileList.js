import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({ tiles }) => {

  return (
    tiles.map((tile, index) => {
      return (
        <div>
          <Tile key={index} tile={tile} />
        </div>
      )
    })
  )
};
