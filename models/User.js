import mongoose from "mongoose";
import bcrypt, { genSalt } from 'bcrypt';

const usuarioSchema = mongoose.Schema(
    {
        name: {
            type: String,
            requierd: true,
            trim: true,             
        },
        credit: {
            type: Number,
            default: 100,
            trim: true,            
        },
        password: {
            type: String,
            requierd: true,
            trim: true,
        },
        email: {
            type: String,
            requierd: true,
            trim: true,
            unique: true,
        },
        token: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
usuarioSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

usuarioSchema.methods.verifyPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};


const Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario;



