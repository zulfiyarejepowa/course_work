const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/reservation");

// const UsersSchema = new mongoose.Schema({
//     Name: "String",
//     Email: "String",
//     Message: "String"
//   }, {versionKey: false}
//   );
let User = mongoose.model('users', {
    name: String,
    Email: String,
    Message: String
})

// const User = mongoose.model('User', UsersSchema)

class DatabaseManager {
    static #cookies = [];
    static async append(...vals)
    {
        for(const iterator of vals){
            DatabaseManager.#cookies.push(iterator);
            let users = new User({Name: iterator.username, Email: iterator.email, Message: iterator.comment});
            await users.save().then(()=> console.log('Ok'));
        }
    }
    static getAll() {
        return [...DatabaseManager.#cookies];
    }
    static async hasUser(username, email)
    {
        let users = User.find({username: username, email:email});
        return (users!=null && users.length>0);
    }
    static async saveCookie(cookie, username)
    {
        DatabaseManager.#cookies.push({cookie:cookie, name:username});
        users.append(DatabaseManager.#cookies);
        console.log('Saved cookies')
    }
}
module.exports = DatabaseManager;