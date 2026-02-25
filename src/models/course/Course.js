import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        language: {
            type: String,
            enum: ["English"],
            default: "English",
            required: true
        },
        level: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"],
            required: true
        },
        createdById: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        isPublished: {
            type: Boolean,
            default: false
        },
        totalLessons: {
            type: Number,
            default: 0,
            min: 0
        },
        totalEnrollments: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    { timestamps: true }
);

// Indexes for better query performance
courseSchema.index({ categoryId: 1, isPublished: 1 });
courseSchema.index({ createdById: 1 });
courseSchema.index({ level: 1, language: 1, isPublished: 1 });

export default mongoose.model("Course", courseSchema);