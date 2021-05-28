module.exports = (sequelize, Sequelize) => {
    const Store = sequelize.define("store", {
        storeId: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
            },
        storeName: {
            type: Sequelize.STRING
        },
        storeZip: {
            type: Sequelize.INTEGER
        },
        storeAddress: {
            type: Sequelize.STRING
        },
      },
        {timestamps: false}
      );
    
      return Store;
    };