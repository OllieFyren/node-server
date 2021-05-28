module.exports = (sequelize, Sequelize) => {
    const Selection = sequelize.define("selection", {
        selectionId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        storeId: {
            type: Sequelize.STRING
        },
        firstFlavour: {
            type: Sequelize.STRING
        },
        secondFlavour: {
            type: Sequelize.STRING
        },
        thirdFlavour: {
            type: Sequelize.STRING
        },
        fourthFlavour: {
            type: Sequelize.STRING
        },
        fifthFlavour: {
            type: Sequelize.STRING
        },
        sixthFlavour: {
            type: Sequelize.STRING
        },
        seventhFlavour: {
            type: Sequelize.STRING
        },
        eighthFlavour: {
            type: Sequelize.STRING
        },
      },
        {timestamps: false}
      );
    
      return Selection;
    };