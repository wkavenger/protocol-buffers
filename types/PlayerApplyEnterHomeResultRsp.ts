/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerApplyEnterHomeResultRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class PlayerApplyEnterHomeResultRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_agreed?: boolean;
        apply_uid?: number;
        retcode?: number;
        param?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_agreed" in data && data.is_agreed != undefined) {
                this.is_agreed = data.is_agreed;
            }
            if ("apply_uid" in data && data.apply_uid != undefined) {
                this.apply_uid = data.apply_uid;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("param" in data && data.param != undefined) {
                this.param = data.param;
            }
        }
    }
    get is_agreed() {
        return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
    }
    set is_agreed(value: boolean) {
        pb_1.Message.setField(this, 2, value);
    }
    get apply_uid() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set apply_uid(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get param() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set param(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        is_agreed?: boolean;
        apply_uid?: number;
        retcode?: number;
        param?: number;
    }): PlayerApplyEnterHomeResultRsp {
        const message = new PlayerApplyEnterHomeResultRsp({});
        if (data.is_agreed != null) {
            message.is_agreed = data.is_agreed;
        }
        if (data.apply_uid != null) {
            message.apply_uid = data.apply_uid;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.param != null) {
            message.param = data.param;
        }
        return message;
    }
    toObject() {
        const data: {
            is_agreed?: boolean;
            apply_uid?: number;
            retcode?: number;
            param?: number;
        } = {};
        if (this.is_agreed != null) {
            data.is_agreed = this.is_agreed;
        }
        if (this.apply_uid != null) {
            data.apply_uid = this.apply_uid;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.param != null) {
            data.param = this.param;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_agreed != false)
            writer.writeBool(2, this.is_agreed);
        if (this.apply_uid != 0)
            writer.writeUint32(11, this.apply_uid);
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (this.param != 0)
            writer.writeUint32(10, this.param);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerApplyEnterHomeResultRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerApplyEnterHomeResultRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.is_agreed = reader.readBool();
                    break;
                case 11:
                    message.apply_uid = reader.readUint32();
                    break;
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                case 10:
                    message.param = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerApplyEnterHomeResultRsp {
        return PlayerApplyEnterHomeResultRsp.deserialize(bytes);
    }
}
