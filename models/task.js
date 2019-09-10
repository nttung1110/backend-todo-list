const Sequelize=require('sequelize');
class Task extends Sequelize.Model{  }
const BoardModel=require('./board');
exports.initModelTask=(sequelize)=>{
    return Task.init({
        taskID:{
            type: Sequelize.STRING
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
            type: Sequelize.STRING
          }
    },{
        sequelize,
        modelName:'task',
        timestamps:false,
        freezeTableName:true
    });
}
Task.associate=function(models){
    Task.belongsTo(models.Board,{
        foreignKey:'boardID',
    })
}
exports.Task=Task;
