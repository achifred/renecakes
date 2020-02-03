import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ["deletedAt"]
        }
    },
    tableName: "newsletter"
})
export class Newsletter extends Model<Newsletter> {
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
    email!: string;
}

export default Newsletter;
