const exprees = require("express");

const { userLogin , userSignup , getAllUsers, verifyUser, userLogout } = require("../controllers/userr-controller");

const { signupValidator , validate ,loginValidator } = require("../utils/validators");

const { verifyToken } = require("../utils/token-manager")

const userRoutes = exprees.Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup",validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

module.exports = userRoutes;