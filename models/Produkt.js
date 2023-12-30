import mongoose from "mongoose";
// Projektmodell - Objektschema - Felder
const ProduktSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    beschreibung: {
      type: String,
      required: true,
      maxlength: 250,
    },
    kategorie: {
      type: String,
      required: true,
      maxlength: 30,
    },
    preis: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
      maxlength: 30,
      unique: true,
    },
    bild: {
      type: String,
      required: true,
    },

    // typ array
    extras: {
      type: [
        {
          text: {
            type: String,
            required: true,
          },
          preis: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  }
  //{timestamps: true}
);
// Bedingung || wenn Produkt existiert soll produkt aus db verwendet werden
export default mongoose.models.Produkt ||
  mongoose.model("Produkt", ProduktSchema);
