import mongoose from "mongoose";

const operationsSchema = mongoose.Schema(
    {  
    operand1: {
        type: Number,
        require: true,
        trim: true,           
    },
    operand2: {
        type: Number,
        require: true,
        trim: true,           
    },
    calcResult: {
        type: Number,
        require: true,
    },
    operator: {
        type: String,
        require: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
    },
    isDeleted: {
        type: Boolean,
        default: false,
      },
}, {
     timestamps: true,
});

const Operation = mongoose.model("Operation", operationsSchema);

export default Operation;
