const  Mysqli  =  require ( 'mysqli' )

let conn = new Mysqli({
    Host: 'localhost', // IP/domain name
    post: 3306, // port, default 3306
    user: 'Atmiya_User', // username
    passwd: '1618412813', // password
    db: 'atmiya_shop'
});

let db = conn.emit(false, '');
module.exports = {
    database: db
};
