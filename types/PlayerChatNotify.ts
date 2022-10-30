/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerChatNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ChatInfo";
import * as pb_1 from "google-protobuf";
export class PlayerChatNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        chat_info?: dependency_1.ChatInfo;
        channel_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("chat_info" in data && data.chat_info != undefined) {
                this.chat_info = data.chat_info;
            }
            if ("channel_id" in data && data.channel_id != undefined) {
                this.channel_id = data.channel_id;
            }
        }
    }
    get chat_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.ChatInfo, 3) as dependency_1.ChatInfo;
    }
    set chat_info(value: dependency_1.ChatInfo) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_chat_info() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get channel_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set channel_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        chat_info?: ReturnType<typeof dependency_1.ChatInfo.prototype.toObject>;
        channel_id?: number;
    }): PlayerChatNotify {
        const message = new PlayerChatNotify({});
        if (data.chat_info != null) {
            message.chat_info = dependency_1.ChatInfo.fromObject(data.chat_info);
        }
        if (data.channel_id != null) {
            message.channel_id = data.channel_id;
        }
        return message;
    }
    toObject() {
        const data: {
            chat_info?: ReturnType<typeof dependency_1.ChatInfo.prototype.toObject>;
            channel_id?: number;
        } = {};
        if (this.chat_info != null) {
            data.chat_info = this.chat_info.toObject();
        }
        if (this.channel_id != null) {
            data.channel_id = this.channel_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_chat_info)
            writer.writeMessage(3, this.chat_info, () => this.chat_info.serialize(writer));
        if (this.channel_id != 0)
            writer.writeUint32(6, this.channel_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerChatNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerChatNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.chat_info, () => message.chat_info = dependency_1.ChatInfo.deserialize(reader));
                    break;
                case 6:
                    message.channel_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerChatNotify {
        return PlayerChatNotify.deserialize(bytes);
    }
}
