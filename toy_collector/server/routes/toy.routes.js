const ToyController = require('../controllers/toy.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/allToys', ToyController.getAllToys);
    app.get('/api/toy/:id', ToyController.getOneToy);
    app.post('/api/addToy', ToyController.addToy);
    app.put('/api/update/:id', ToyController.updateToy);
    app.delete('/api/delete/:id', ToyController.deleteToy);
}