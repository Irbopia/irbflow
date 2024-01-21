import { Schema, models, model, Document } from "mongoose";

export interface ITag extends Document {
    name: string;
    description: string;
    questions: Schema.Types.ObjectId[];
    followers: Schema.Types.ObjectId[];
    createdOn : Date;
}

const TagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }], // References to Question documents
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // References to User documents
    createdOn: { type: Date, default: Date.now }
});

const Tag = models.Tag || model('Taf', TagSchema);

export default Tag