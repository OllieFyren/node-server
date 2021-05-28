module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        orderId: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
        userId: {
            type: Sequelize.INTEGER
        },
        firstChoice: {
            type: Sequelize.STRING
        },
        secondChoice: {
            type: Sequelize.STRING
        },
        thirdChoice: {
            type: Sequelize.STRING
        },
        firstTopping: {
            type: Sequelize.STRING
        },
        secondTopping: {
            type: Sequelize.STRING
        }
      },
        {timestamps: false}
      );
    
      return Order;
    };