import express from "express";
import { db, connectToDb } from "./db.js";
import { ObjectId } from "mongodb";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import sendVerificationEmail  from "./emailService.js";
import crypto from "crypto"; // Import the crypto module for generating verification tokens
import bodyParser from "body-parser";
import { send } from "process";
import sendPasswordResetEmail from "./resetPassword.js";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
//display recipe details
app.get("/recipe/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await db.collection("recipes").findOne({ _id: ObjectId(id) });
  recipe ? res.json(recipe) : res.status(404);
});

//display all recipes
app.get("/recipe", (req, res) => {
  db.collection("recipes")
    .find()
    .toArray()
    .then((documents) => res.send(documents));
});

//add recipe
app.post("/addrecipe", (req, res) => {
  let newRecipe = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    method: req.body.method,
    image: req.body.image,
    category: req.body.category,
  };
  console.log(newRecipe);
  db.collection("recipes").insertOne(newRecipe);
  res.json({ res: "Success" });
});

//delete recipe
app.delete("/recipe/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await db
    .collection("recipes")
    .deleteOne({ _id: ObjectId(id) });
  recipe ? res.json(recipe) : res.status(404);
});

//FAVORITE RECIPES
//display favorites recipes
app.get("/favorite", async (req, res) => {
  const objs = await db.collection("favorite").find().toArray();
  const ids = objs.map((obj) => ObjectId(obj.recipeId));
  db.collection("recipes")
    .find({ _id: { $in: ids } })
    .toArray()
    .then((documents) => res.send(documents));
});

// add recipeId to favorite list of recipes
app.post("/favorite", (req, res) => {
  const data = req.body;
  db.collection("favorite").updateOne(
    { recipeId: data._id },
    { $set: { isFavorite: true } },

    { upsert: true }
  );
  res.json({ res: "Success" });
});

//delete favorite recipe
app.delete("/favorite", (req, res) => {
  const data = req.body;
  db.collection("favorite").deleteOne({ recipeId: data._id });
  res.json({ res: "Deleted successfully" });
});

//SHOPPING LIST
//display shoppinglist
app.get("/shoppinglist", async (req, res) => {
  const objs = await db.collection("shoppinglist").find().toArray();
  const ids = objs.map((obj) => ObjectId(obj.recipeId));
  db.collection("recipes")
    .find({ _id: { $in: ids } })
    .toArray()
    .then((documents) => res.send(documents));
});

//add recipes to shoppinglist
app.post("/shoppinglist", (req, res) => {
  const data = req.body;
  db.collection("shoppinglist").updateOne(
    { recipeId: data._id },
    { $set: { isInShoppingList: true } },
    { upsert: true }
  );
  res.json({ res: "Added to shopping list" });
});

//search all recipes
app.get("/search", (req, res) => {
  db.collection("recipes")
    .find({
      $or: [
        {
          name: { $regex: `.*${req.query.searchTerm}`, $options: "i" },
        },
        {
          ingredients: { $regex: `.*${req.query.searchTerm}`, $options: "i" },
        },
        {
          category: { $regex: `.*${req.query.searchTerm}`, $options: "i" },
        },
      ],
    })
    .toArray()
    .then((documents) => {
      console.log(documents);
      res.send(documents);
    });
});

//remove shopped ingrediernts
app.delete("/shoppinglist", (req, res) => {
  const data = req.body;
  db.collection("shoppinglist").deleteOne({ recipeId: data._id });
  res.json({ res: "Deleted successfully" });
});

/* HANDLE SIGN=UP */
app.post("/SignUp", async (req, res) => {
  try {
    const email = req.body.email;

    // Check if a user with the same email already exists
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists.",
      });
    }
    // Generate an email verification token
    const verificationCode = crypto.randomBytes(3).toString("hex");
    // If the user doesn't exist, proceed to add them to the database
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // If the user doesn't exist, proceed to add them to the database
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      isEmailVerified: false, // Initialize email verification status as false
      verificationCode: verificationCode, // Store the verification token in the user object
      // Add other user properties here as needed
    };

    // Insert the new user into the "users" collection
    const result = await db.collection("users").insertOne(newUser);
    // Send the verification email
    await sendVerificationEmail(email, verificationCode);

    // Send a response indicating success
    res.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ success: false, message: "Failed to add user." });
  }
});

/*HANDLE EMAIL VERIFICATION*/
// ...
app.get("/verify-email", async (req, res) => {
  try {
    const verificationCode = req.query.code;
    const email = req.query.email;
    console.log("Verification code:", verificationCode);
    console.log("Email:", email);

    // Find the user with the provided email and verification code in the database
    const user = await db.collection("users").findOne({
      email: email,
      verificationCode: verificationCode,
    });
    console.log(user)
    if (!user) {
     
      // Invalid or expired verification code
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code.",
      });
    }

    // Update the user's email verification status to true
    await db.collection("users").updateOne(
      { email: email, verificationCode: verificationCode },
      { $set: { isEmailVerified: true } }
    );

    // Redirect the user to a success page or display a success message
    res.json({ success: true, message: "Email verification successful." });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).json({ success: false, message: "Failed to verify email." });
  }
});

// ...



/*HANDLE LOG-IN*/
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await db.collection("users").findOne({ email: email });

  if (user) {
    if (!user.isEmailVerified) {
      // If isEmailVerified is false, user cannot log in
      return res.status(403).json({ success: false, message: "Email not verified" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        //create a token securely authenticate the user and manage their session without relying on traditional methods like sessions, cookies, or storing sensitive data on the server.
        const token = jwt.sign(
          { email: user.email, role: user.role },
          "jwt-secret-key",
          { expiresIn: "356d" }
        );
        res.cookie("token", token);
        res.status(200).json({ success: true, message: "Login Successful" });
      } else {
        res.status(400).json({ success: false, message: "Invalid password" });
      }
    });
  } else {
    res.status(409).json({ success: false, message: "No records found" });
  }
});

// Endpoint for resetting the password
app.post("/reset-password", async (req, res) => {
  const { email } = req.body;

  // Check if the user exists in the database (you should query your actual user collection here)
  const user = await db.collection("users").findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    // Generate a new password reset token 
    const token = jwt.sign({ email }, "reset-password-secret-key", {
      expiresIn: "1h", // The token will expire after 1 hour
    });

    // Send the reset token to the user 
    await sendPasswordResetEmail(email,token)
    res.status(200).json({ message: "Password reset token sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred. Please try again later." });
  }
});

// Endpoint for updating the password
app.post("/update-password", async (req, res) => {
  const { email, token, newPassword } = req.body;

  // Find the user in the database based on the email (you should query your actual user collection here)
  const user = await db.collection("users").findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    // You should validate the token here if needed

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database (you should update your actual user collection here)
    await db.collection("users").updateOne(
      { email: email },
      { $set: { password: hashedPassword } }
    );

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Failed to update the password. Please try again later." });
  }
});

/*CONNECT TO DATABASE*/

connectToDb(() => {
  app.listen(8000, () => {
    console.log("Server listening on 8000"); //this is our backend server
  });
});
