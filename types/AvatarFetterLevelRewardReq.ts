/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarFetterLevelRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AvatarFetterLevelRewardReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        avatar_guid?: number;
        fetter_level?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("fetter_level" in data && data.fetter_level != undefined) {
                this.fetter_level = data.fetter_level;
            }
        }
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set avatar_guid(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get fetter_level() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set fetter_level(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        avatar_guid?: number;
        fetter_level?: number;
    }): AvatarFetterLevelRewardReq {
        const message = new AvatarFetterLevelRewardReq({});
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.fetter_level != null) {
            message.fetter_level = data.fetter_level;
        }
        return message;
    }
    toObject() {
        const data: {
            avatar_guid?: number;
            fetter_level?: number;
        } = {};
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.fetter_level != null) {
            data.fetter_level = this.fetter_level;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_guid != 0)
            writer.writeUint64(1, this.avatar_guid);
        if (this.fetter_level != 0)
            writer.writeUint32(6, this.fetter_level);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AvatarFetterLevelRewardReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarFetterLevelRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 6:
                    message.fetter_level = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AvatarFetterLevelRewardReq {
        return AvatarFetterLevelRewardReq.deserialize(bytes);
    }
}
