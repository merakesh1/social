const db = require('mongoose');
const url = "mongodb://127.0.0.1:27017/Social";

const dConnect = () => {
    db.connect(url)
        .then(() => { //when promise is resolved
            console.log('connection succesful');
        })
        .catch((error) => { //when promis is rejected
            console.log('connection failed');
        })
}

module.exports=dConnect;