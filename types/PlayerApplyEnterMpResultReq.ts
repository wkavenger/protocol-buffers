/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerApplyEnterMpResultReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class PlayerApplyEnterMpResultReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        apply_uid?: number;
        is_agreed?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("apply_uid" in data && data.apply_uid != undefined) {
                this.apply_uid = data.apply_uid;
            }
            if ("is_agreed" in data && data.is_agreed != undefined) {
                this.is_agreed = data.is_agreed;
            }
        }
    }
    get apply_uid() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set apply_uid(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get is_agreed() {
        return pb_1.Message.getFieldWithDefault(this, 12, false) as boolean;
    }
    set is_agreed(value: boolean) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data: {
        apply_uid?: number;
        is_agreed?: boolean;
    }): PlayerApplyEnterMpResultReq {
        const message = new PlayerApplyEnterMpResultReq({});
        if (data.apply_uid != null) {
            message.apply_uid = data.apply_uid;
        }
        if (data.is_agreed != null) {
            message.is_agreed = data.is_agreed;
        }
        return message;
    }
    toObject() {
        const data: {
            apply_uid?: number;
            is_agreed?: boolean;
        } = {};
        if (this.apply_uid != null) {
            data.apply_uid = this.apply_uid;
        }
        if (this.is_agreed != null) {
            data.is_agreed = this.is_agreed;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.apply_uid != 0)
            writer.writeUint32(2, this.apply_uid);
        if (this.is_agreed != false)
            writer.writeBool(12, this.is_agreed);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerApplyEnterMpResultReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerApplyEnterMpResultReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.apply_uid = reader.readUint32();
                    break;
                case 12:
                    message.is_agreed = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerApplyEnterMpResultReq {
        return PlayerApplyEnterMpResultReq.deserialize(bytes);
    }
}
