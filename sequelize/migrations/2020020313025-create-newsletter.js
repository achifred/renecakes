module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        "newsletter",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false
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

module.exports.down = queryInterface => queryInterface.dropTable("newsletter");
