import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UsuarioModel.js";

const { DataTypes } = Sequelize;

const Noticias = db.define('notices', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    notice: {
        type: DataTypes.STRING(100000),
        allowNull: false,
        
        validate: {
            notEmpty: true
            
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

Users.hasMany(Noticias);
Noticias.belongsTo(Users, { foreignKey: 'userId' });

export default Noticias;