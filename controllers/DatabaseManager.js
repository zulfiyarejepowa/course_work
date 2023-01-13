const mongoose = require('mongoose');
const Helpers = require('./Helpers');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/reservation", { useNewUrlParser: true });

const UsersSchema = new mongoose.Schema({
    Name: String,
    Email: String
  }, {versionKey: false}
  );

const User = mongoose.model('User', UsersSchema)

class DatabaseManager {
    static #cookies = [];
    static async append(...vals)
    {
        for(const iterator of vals){
            let user = new User({Name: iterator.username, Email: iterator.email});
            await user.save();
        }
    }
    static async hasUser(username, email)
    {
        let user = await User.find({username: username, email:email});
        return (user!=null && user.length>0)
    }
    static async saveCookie(cookie, username)
    {
        DatabaseManager.#cookies.push({cookie:cookie, name:username});
        User.append(DatabaseManager.#cookies);
        console.log('Saved cookies')
    }

}

module.exports = DatabaseManager;