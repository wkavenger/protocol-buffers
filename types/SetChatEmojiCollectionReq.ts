/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SetChatEmojiCollectionReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ChatEmojiCollectionData";
import * as pb_1 from "google-protobuf";
export class SetChatEmojiCollectionReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        chat_emoji_collection_data?: dependency_1.ChatEmojiCollectionData;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("chat_emoji_collection_data" in data && data.chat_emoji_collection_data != undefined) {
                this.chat_emoji_collection_data = data.chat_emoji_collection_data;
            }
        }
    }
    get chat_emoji_collection_data() {
        return pb_1.Message.getWrapperField(this, dependency_1.ChatEmojiCollectionData, 12) as dependency_1.ChatEmojiCollectionData;
    }
    set chat_emoji_collection_data(value: dependency_1.ChatEmojiCollectionData) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_chat_emoji_collection_data() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data: {
        chat_emoji_collection_data?: ReturnType<typeof dependency_1.ChatEmojiCollectionData.prototype.toObject>;
    }): SetChatEmojiCollectionReq {
        const message = new SetChatEmojiCollectionReq({});
        if (data.chat_emoji_collection_data != null) {
            message.chat_emoji_collection_data = dependency_1.ChatEmojiCollectionData.fromObject(data.chat_emoji_collection_data);
        }
        return message;
    }
    toObject() {
        const data: {
            chat_emoji_collection_data?: ReturnType<typeof dependency_1.ChatEmojiCollectionData.prototype.toObject>;
        } = {};
        if (this.chat_emoji_collection_data != null) {
            data.chat_emoji_collection_data = this.chat_emoji_collection_data.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_chat_emoji_collection_data)
            writer.writeMessage(12, this.chat_emoji_collection_data, () => this.chat_emoji_collection_data.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SetChatEmojiCollectionReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SetChatEmojiCollectionReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    reader.readMessage(message.chat_emoji_collection_data, () => message.chat_emoji_collection_data = dependency_1.ChatEmojiCollectionData.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SetChatEmojiCollectionReq {
        return SetChatEmojiCollectionReq.deserialize(bytes);
    }
}
