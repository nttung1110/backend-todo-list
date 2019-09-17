const Sequelize=require('sequelize');
export class Task extends Sequelize.Model{  }
export const BoardModel=require('./board');
export const initModelTask=(sequelize)=>{
    const curTask= Task.init({
          taskID:{
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey:true
          },
          taskName: {
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
          boardID:{
            type: Sequelize.BIGINT
          }
    },{
        sequelize,
        modelName:'task',
        timestamps:false,
        freezeTableName:true
    });
    curTask.associate=function(models){
      Task.belongsTo(models.Board,{
          foreignKey:'boardID',
      });
  }
  return curTask;
}
