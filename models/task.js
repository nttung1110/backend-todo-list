const Sequelize=require('sequelize');
class Task extends Sequelize.Model{  }
const BoardModel=require('./board');
exports.initModelTask=(sequelize)=>{
    const curTask= Task.init({
          taskID:{
            type: Sequelize.STRING,
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
            type: Sequelize.STRING
          },
          updatedAt: {
            type: Sequelize.STRING
          },
          status:{
            type: Sequelize.STRING
          },
          boardID:{
            type: Sequelize.STRING
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
exports.Task=Task;
