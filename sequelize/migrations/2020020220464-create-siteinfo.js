module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        "siteinfo",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED
            },
            about: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            mission: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
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

module.exports.down = queryInterface => queryInterface.dropTable("siteinfo");
