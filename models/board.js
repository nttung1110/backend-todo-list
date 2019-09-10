const Sequelize=require('sequelize');
class Board extends Sequelize.Model{}
exports.initModelBoard=(sequelize)=>{
    return Board.init({
        boardID:{
            type: Sequelize.STRING
          },
          boardName: {
            type: Sequelize.STRING
          },
          createdBy: {
            type: Sequelize.STRING
          },
          updatedBy:{
            type: Sequelize.STRING
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          },
          status:{
            type: Sequelize.STRING
          },
          userID:{
            type: Sequelize.STRING
          }
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