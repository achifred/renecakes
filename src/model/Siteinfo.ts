import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    defaultScope: {
        attributes: {
            exclude: ["deletedAt"]
        }
    },
    paranoid: true,
    tableName: "siteinfo"
})
export class Siteinfo extends Model<Siteinfo> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataType.INTEGER.UNSIGNED
    })
    id!: string;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    about!: string;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    mission!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone!: string;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    address!: string;
}

export default Siteinfo;
