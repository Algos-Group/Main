const ToyController = require('../controllers/toy.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/allToys', authenticate, ToyController.getAllToys);
    app.get('/api/toy/:id', authenticate, ToyController.getOneToy);
    app.post('/api/addToy', authenticate, ToyController.addToy);
    app.put('/api/update/:id', authenticate, ToyController.updateToy);
    app.delete('/api/delete/:id', authenticate, ToyController.deleteToy);
}