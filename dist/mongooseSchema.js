import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
export const User = mongoose.model('users', UserSchema);
// Comments Schema
const CommentsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});
export const Comment = mongoose.model('comments', CommentsSchema);
// game Schema
const GameSchema = new mongoose.Schema({
    // _id: {type: mongoose.Schema.Types.ObjectId, required: false},
    title: { type: String, required: true },
    company: { type: String, required: true },
    platform: { type: [String], required: true }
});
export const Game = mongoose.model('games', GameSchema);
