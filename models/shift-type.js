const { Sequelize, DataTypes } = require('sequelize').Sequelize;
const sequelize = require("../config/database.js");

const ShiftType = sequelize.define('shiftType', {
    IdShiftType: {
        type: Sequelize.INT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Puntaje: {
        type: Sequelize.INT,
        allowNull: false
    }
},
    {
        tableName: 'tblmedicalcenter'
    }
);

const getShiftTypes = async () => {
    try {
        const Types = await ShiftType.findAll();
        return Types;
    }
    catch {
        console.error(err);
        throw err;
    }
};

const getShiftTypeById = async (shiftTypeId) => {
    try {
        const Type = await ShiftType.findByPk(shiftTypeId);
        return Type;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = {
    getShiftTypes,
    getShiftTypeById
}