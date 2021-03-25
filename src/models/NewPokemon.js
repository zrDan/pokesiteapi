const mongoose = require("mongoose");

const newpokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    height: {
      type: Number,
      trim: true,
      require: true,
    },
    sprites: {
      type: Object,
      trim: true,
    },
    Types: {
      type: Object,
      trim: true,
      require: true,
    },
    weight: {
      type: Number,
      trim: true,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Newpokemon", newpokemonSchema);
