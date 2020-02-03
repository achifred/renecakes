import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ["deletedAt"]
        }
    },
    tableName: "users"
})
export class Users extends Model<Users> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataType.INTEGER.UNSIGNED
    })
    userid!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    name!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    email!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    password!: string;
}

export default Users;
