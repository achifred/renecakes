module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        "works",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: false
            },

            password: {
                allowNull: false,
                type: DataTypes.STRING
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

module.exports.down = queryInterface => queryInterface.dropTable("works");
