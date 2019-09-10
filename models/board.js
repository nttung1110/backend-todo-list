const Sequelize=require('sequelize');
class Board extends Sequelize.Model{}
exports.initModelBoard=(sequelize)=>{
    return Board.init({
        
    },{
        sequelize,
        modelName:'board',
        timestamps:false,
        freezeTableName:true
    });
}
Board.associate=function(models){
    Board.belongsTo(models.User,{
        foreignKey:'userID',
    });
    Board.hasMany(models.Task,{
        foreignKey:'boardID',
    })
}
exports.Board=Board;