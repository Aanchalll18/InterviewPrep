const mongoose = require('mongoose');

const sessionschema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    role: { type: String, required: true },
    experiences: { type: String, required: true },
    topicsToFocus: { type: String, required: true },
    description: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Questions" }]
}, { timestamps: true });

module.exports = mongoose.model("Session", sessionschema);
