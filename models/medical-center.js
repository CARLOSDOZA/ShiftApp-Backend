const { Sequelize, DataTypes } = require('sequelize').Sequelize;
const sequelize = require("../config/database.js");

const MedicalCenter = sequelize.define('medicalCenter', {
    IdEmployee: {
        type: Sequelize.INT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        tableName: 'tblmedicalcenter'
    }
);

const getMedicalCenters = async () => {
    try {
        const Centers = await MedicalCenter.findAll();
        return Centers;
    }
    catch {
        console.error(err);
        throw err;
    }
};

const getShiftTypesById = async (MedicalCenterId) => {
    try {
        const Center = await MedicalCenter.findByPk(MedicalCenterId);
        return Center;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = {
    getMedicalCenters,
    getShiftTypesById
}