const Sequelize=require('sequelize');
class Task extends Sequelize.Model{  }
const BoardModel=require('./board');
exports.initModelTask=(sequelize)=>{
    return Task.init({

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
