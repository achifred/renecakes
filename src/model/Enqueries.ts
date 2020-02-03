import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    defaultScope: {
        attributes: {
            exclude: ["deletedAt"]
        }
    },
    paranoid: true,
    tableName: "enquery"
})
export class Enquery extends Model<Enquery> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataType.INTEGER.UNSIGNED
    })
    id!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    subject!: string;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    message!: string;
}

export default Enquery;
