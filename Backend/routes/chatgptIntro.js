const express = require("express");
const router = express.Router();
const { pipeline } = require("transformers");

const generator = pipeline("text-generation", (model = "gpt2"));

router.get("/", async (req, res) => {
  try {
    const prompt = "Write an introduction paragraph for a pet website.";
    const generated_text = generator(prompt, (max_length = 50));
    const paragraph = generated_text[0]["generated_text"].trim();
    res.json({ paragraph });
  } 
  catch (err) {
    console.error("Error generating introduction:", err.message);
    res.status(500).json({ error: "Error generating introduction" });
  }
});

module.exports = router;
