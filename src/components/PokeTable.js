import React from "react";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Fab
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const PokeTable = ({ pokeList, removePoke }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sprite</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Base experience</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokeList.map((pokemon, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                <img src={pokemon.sprites.front_default} alt="" />
              </TableCell>
              <TableCell>{pokemon.id}</TableCell>
              <TableCell>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</TableCell>
              <TableCell>{pokemon.height}</TableCell>
              <TableCell>{pokemon.weight}</TableCell>
              <TableCell>{pokemon.base_experience}</TableCell>
              <TableCell>
                <Fab size="medium" color="secondary" onClick={removePoke.bind(this, i)}>
                  <DeleteIcon />
                </Fab>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PokeTable;
