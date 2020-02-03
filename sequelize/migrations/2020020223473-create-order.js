module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        "order",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type: {
                allowNull: false,
                type: DataTypes.STRING
            },
            location: {
                allowNull: false,
                type: DataTypes.STRING
            },
            phone: {
                allowNull: false,
                type: DataTypes.STRING
            },
            date: {
                allowNull: false,
                type: DataTypes.STRING
            },
            note: {
                allowNull: false,
                type: DataTypes.TEXT
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            deletedAt: {
                allowNull: true,
                type: DataTypes.DATE
            }
        },
        { charset: "utf8" }
    );
};

module.exports.down = queryInterface => queryInterface.dropTable("order");
