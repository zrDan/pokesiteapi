const NewPokemon = require("../models/NewPokemon");

exports.create = (req, res) => {
  const pokemon = new NewPokemon(req.body);
  pokemon.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: `Error ${err}`,
      });
    }
    res.json({ data });
  });
};

exports.pokemonByName = (req, res, next, name) => {
  NewPokemon.find({ name: name }).exec((err, pokemon) => {
    if (err || !pokemon) {
      return res.status(404).json({
        error: "pokemon was not found",
      });
    }
    req.pokemon = pokemon;
    next();
  });
};

exports.pokemonDetails = (req, res) => {
  console.log(req.pokemon[0]);
  const pokemon = req.pokemon[0];
  res.json(pokemon);
};
