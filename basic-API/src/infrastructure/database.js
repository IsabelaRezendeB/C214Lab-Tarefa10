const mongoose = require('mongoose');

const uri = `mongodb+srv://isabela:senha@cluster0.yiftylz.mongodb.net/`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    nome: String,
    senha: String,
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};