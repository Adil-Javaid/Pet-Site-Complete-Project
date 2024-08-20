require("dotenv").config();
require("./Database/connection");

const express = require("express");
const cors = require("cors");
const petRoutes = require("./routes/petRoutes");
const petStoreRoute = require("./routes/petStoreRoute");
const blogRoute = require("./routes/blog");
const reviewRoute = require("./routes/reviewRoute");
const servicesRoute = require("./routes/services");

const app = express();
const port = process.env.PORT || 6005; // Use environment variable for PORT

app.use(express.json());

// CORS configuration
const allowedOrigins = [
  "http://localhost:3000", // For local development
  "https://pet-site-complete-project.vercel.app", // Your deployed frontend URL
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE",
  credentials: true, // If your requests include credentials (cookies, HTTP authentication)
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json("Hello");
});


// Routes
app.use("/api/pets", petRoutes);
app.use("/api/pet-store", petStoreRoute);
app.use("/api/blog", blogRoute);
app.use("/api/services", servicesRoute);
app.use("/api/review", reviewRoute);

app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED AT PORT ${port}`);
});

module.exports = app;
