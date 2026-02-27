import Vote from "../../models/forum/Vote.js";
import Post from "../../models/forum/Post.js";
import Answer from "../../models/forum/Answer.js";
import ForumBan from "../../models/forum/forumBan.js";
import ForumMembership from "../../models/forum/forumMembership.js";

const TARGET_MODELS = {
    Post,
    Answer
};

// Resolve the forumId from a target (Post or Answer)
const resolveForumId = async (targetType, targetId) => {
    if (targetType === "Post") {
        const post = await Post.findById(targetId);
        if (!post || post.isDeleted) throw new Error("Post not found");
        return post.forumId;
    }

    if (targetType === "Answer") {
        const answer = await Answer.findById(targetId);
        if (!answer || answer.isDeleted) throw new Error("Answer not found");
        const post = await Post.findById(answer.postId);
        if (!post || post.isDeleted) throw new Error("Post not found");
        return post.forumId;
    }

    throw new Error("Invalid target type");
};

const castVote = async (userId, targetId, targetType, voteType) => {
    const forumId = await resolveForumId(targetType, targetId);

    // Check ban and membership
    const ban = await ForumBan.findOne({ forumId, userId, isActive: true });
    if (ban) throw new Error("You are banned from this forum");

    const membership = await ForumMembership.findOne({ forumId, userId });
    if (!membership) throw new Error("You must join the forum first");

    const TargetModel = TARGET_MODELS[targetType];

    const existingVote = await Vote.findOne({ userId, targetId, targetType });

    if (existingVote) {
        if (existingVote.voteType === voteType) {
            // Same vote → remove it (toggle off)
            await existingVote.deleteOne();
            await TargetModel.findByIdAndUpdate(targetId, { $inc: { upvoteCount: voteType === "upvote" ? -1 : 1 } });
            return { message: "Vote removed" };
        } else {
            // Different vote → switch it
            const delta = voteType === "upvote" ? 2 : -2;
            existingVote.voteType = voteType;
            await existingVote.save();
            await TargetModel.findByIdAndUpdate(targetId, { $inc: { upvoteCount: delta } });
            return { message: "Vote updated", vote: existingVote };
        }
    }

    // New vote
    const vote = await Vote.create({ userId, targetId, targetType, voteType });
    await TargetModel.findByIdAndUpdate(targetId, {
        $inc: { upvoteCount: voteType === "upvote" ? 1 : -1 }
    });

    return { message: "Vote cast", vote };
};

export { castVote };