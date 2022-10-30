/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PullRecentChatRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ChatInfo";
import * as pb_1 from "google-protobuf";
export class PullRecentChatRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        chat_info?: dependency_1.ChatInfo[];
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("chat_info" in data && data.chat_info != undefined) {
                this.chat_info = data.chat_info;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get chat_info() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ChatInfo, 15) as dependency_1.ChatInfo[];
    }
    set chat_info(value: dependency_1.ChatInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        chat_info?: ReturnType<typeof dependency_1.ChatInfo.prototype.toObject>[];
        retcode?: number;
    }): PullRecentChatRsp {
        const message = new PullRecentChatRsp({});
        if (data.chat_info != null) {
            message.chat_info = data.chat_info.map(item => dependency_1.ChatInfo.fromObject(item));
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            chat_info?: ReturnType<typeof dependency_1.ChatInfo.prototype.toObject>[];
            retcode?: number;
        } = {};
        if (this.chat_info != null) {
            data.chat_info = this.chat_info.map((item: dependency_1.ChatInfo) => item.toObject());
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.chat_info.length)
            writer.writeRepeatedMessage(15, this.chat_info, (item: dependency_1.ChatInfo) => item.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PullRecentChatRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PullRecentChatRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.chat_info, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.ChatInfo.deserialize(reader), dependency_1.ChatInfo));
                    break;
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PullRecentChatRsp {
        return PullRecentChatRsp.deserialize(bytes);
    }
}
