/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarCardChangeReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AvatarCardChangeReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        item_id?: number;
        avatar_guid?: number;
        count?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_id" in data && data.item_id != undefined) {
                this.item_id = data.item_id;
            }
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("count" in data && data.count != undefined) {
                this.count = data.count;
            }
        }
    }
    get item_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set item_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set avatar_guid(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get count() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set count(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        item_id?: number;
        avatar_guid?: number;
        count?: number;
    }): AvatarCardChangeReq {
        const message = new AvatarCardChangeReq({});
        if (data.item_id != null) {
            message.item_id = data.item_id;
        }
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.count != null) {
            message.count = data.count;
        }
        return message;
    }
    toObject() {
        const data: {
            item_id?: number;
            avatar_guid?: number;
            count?: number;
        } = {};
        if (this.item_id != null) {
            data.item_id = this.item_id;
        }
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.count != null) {
            data.count = this.count;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_id != 0)
            writer.writeUint32(6, this.item_id);
        if (this.avatar_guid != 0)
            writer.writeUint64(14, this.avatar_guid);
        if (this.count != 0)
            writer.writeUint32(7, this.count);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AvatarCardChangeReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarCardChangeReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.item_id = reader.readUint32();
                    break;
                case 14:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 7:
                    message.count = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AvatarCardChangeReq {
        return AvatarCardChangeReq.deserialize(bytes);
    }
}
