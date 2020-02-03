import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ["deletedAt"]
        }
    },
    tableName: "works"
})
export class Works extends Model<Works> {
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
    picture!: string;
}

export default Works;
