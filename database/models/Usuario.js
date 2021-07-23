module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "Usuario", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },

            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: "usuario",
            timestamps: true
        }
    );

    return Usuario;
}