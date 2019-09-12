const Sequelize=require('sequelize');
class Board extends Sequelize.Model{}
exports.initModelBoard=(sequelize)=>{
    const curBoard=Board.init({
          boardID:{
            type: Sequelize.STRING,
            primaryKey:true
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
            type: Sequelize.STRING
          },
          updatedAt: {
            type: Sequelize.STRING
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
    curBoard.associate=function(models){
      Board.belongsTo(models.User,{
          foreignKey:'userID',
      });
      Board.hasMany(models.Task,{
          foreignKey:'boardID',
      });
  }
  return curBoard;
}
exports.Board=Board;