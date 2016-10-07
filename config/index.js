var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + 
            ':' + configValues.pwd + 
            '@ds153845.mlab.com:53845/nodetodostickyshoes';
    }

}