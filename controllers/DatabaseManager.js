const { escapeXML } = require('ejs');
const mongoose = require('mongoose');
const Helpers = require('./Helpers');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/reservation", { useNewUrlParser: true });

const UsersSchema = new mongoose.Schema({
    Name: String,
    Email: String
  });

const Users = mongoose.model('User', UsersSchema)

class DatabaseManager {
    static #cookies = [];
    static append(...vals)
    {
        for(const iterator of vals){
            let user = new Users({Name: iterator.username, Email: iterator.email});
            user.save();
        }
    }
    static hasUser(username, email)
    {
        let users = Users.find({username: username, email:email});
        return (users!=null && users.length>0)
    }
    static async saveCookie(cookie, username)
    {
        DatabaseManager.#cookies.push({cookie:cookie, name:username});
        User.append(DatabaseManager.#cookies);
        console.log('Saved cookies')
        let value = Helpers.makeid(10);
        document.cookie = req.body.username + "=" (value);
    }

}

module.exports = DatabaseManager;