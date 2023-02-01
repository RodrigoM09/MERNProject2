import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

// This is the main file of the server, it will be used to start the server and connect to the database
// and it will also be used to set up the routes of the API
const app = express();

// This is the route that will be used to get all the posts, it will be called from the client.
app.use("/posts", postRoutes);

// body-parser is a middleware that allows us to access the body of the request
// and parse it into a JSON object
app.use(bodyParser.json({ limit: "30mb", extended: true }));

//urlencoded is a method inbuilt in body-parser to recognize the incoming Request Object as strings or arrays.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// cors is a middleware that allows us to make requests to our API from different origins
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://rodrigo_marquez:mongodb123@cluster0.xdr04si.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).catch((error) => console.log(error.message));

// This is to avoid deprecation warnings, but it's not necessary
mongoose.set('strictQuery', true);
