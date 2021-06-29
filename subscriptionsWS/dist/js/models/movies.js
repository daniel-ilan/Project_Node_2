"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const membersSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
    },
    genres: {
        type: Array,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    oermited: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.model("Member", membersSchema);
