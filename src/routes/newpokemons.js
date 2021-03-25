const express = require("express");
const router = express.Router();
const {
  create,
  pokemonDetails,
  pokemonByName,
} = require("../controllers/newpokemonController");

router.post("/create", create);
router.get("/pokemonDetails/:pokemonName", pokemonDetails);

router.param("pokemonName", pokemonByName);

module.exports = router;
