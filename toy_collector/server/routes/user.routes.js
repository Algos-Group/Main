const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/register', UserController.registerUser);
    app.post('/api/login', UserController.loginUser);
    app.get('/api/logout', UserController.logOutUser);
    app.get('/api/userCurrent/:id',authenticate, UserController.getLogged);
    app.get("/api/user/:id", authenticate, UserController.getOneUser)
    app.put("/api/updateUser/:id", authenticate,UserController.updateUser);
    app.get("/api/users", authenticate, UserController.getAllUsers);
}