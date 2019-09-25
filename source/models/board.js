const Sequelize=require('sequelize');
export class Board extends Sequelize.Model{}
export const initModelBoard=(sequelize)=>{
    const curBoard=Board.init({
          boardID:{
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey:true
          },
          boardName: {
            type: Sequelize.STRING
          },
          createdBy: {
            type: Sequelize.STRING
          },
          createdAt: {
            type: Sequelize.DATE
          },
          status:{
            type: Sequelize.STRING
          },
          updatedAt: {
            type: Sequelize.DATE
          },
          updatedBy:{
            type: Sequelize.STRING
          },
          userID:{
            type: Sequelize.STRING
          },
          boardColor:{
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
      })
      Board.hasMany(models.Task,{
          foreignKey:'boardID',
      });
  }
  return curBoard;
}
