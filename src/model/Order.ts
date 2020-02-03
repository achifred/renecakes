import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ["deletedAt"]
        }
    },
    tableName: "order"
})
export class Orders extends Model<Orders> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataType.INTEGER.UNSIGNED
    })
    id!: string;

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
    type!: string;
    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    location!: string;
    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    phone!: string;
    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    date!: string;
    @Column({
        allowNull: false,
        type: DataType.TEXT
    })
    note!: string;
}

export default Orders;
