const db = require('mongoose');
const url = "mongodb://127.0.0.1:27017/Social";

const dConnect = () => {
    db.connect(url)
        .then(() => {
            console.log('connection succesful');
        })
        .catch((error) => {
            console.log('connection failed');
        })
}

module.exports=dConnect;