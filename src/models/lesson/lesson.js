
import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    title: { type: String, required: true },
    description: { type: String },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    estimatedMinutes: { type: Number, default: 10 },
    order: { type: Number },
    thumbnail: { type: String },
    isPublished: { type: Boolean, default: false },

    reading:    { type: mongoose.Schema.Types.ObjectId, ref: 'Reading' },
    listening:  { type: mongoose.Schema.Types.ObjectId, ref: 'Listening' },
    vocabulary: { type: mongoose.Schema.Types.ObjectId, ref: 'Vocabulary' },
    video:      { type: mongoose.Schema.Types.ObjectId, ref: 'Video' }

}, { timestamps: true })


export default mongoose.model("Lesson", lessonSchema);