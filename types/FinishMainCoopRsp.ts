/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FinishMainCoopRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class FinishMainCoopRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        id?: number;
        ending_save_point_id?: number;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("ending_save_point_id" in data && data.ending_save_point_id != undefined) {
                this.ending_save_point_id = data.ending_save_point_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get ending_save_point_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set ending_save_point_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        id?: number;
        ending_save_point_id?: number;
        retcode?: number;
    }): FinishMainCoopRsp {
        const message = new FinishMainCoopRsp({});
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.ending_save_point_id != null) {
            message.ending_save_point_id = data.ending_save_point_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            id?: number;
            ending_save_point_id?: number;
            retcode?: number;
        } = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.ending_save_point_id != null) {
            data.ending_save_point_id = this.ending_save_point_id;
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
        if (this.id != 0)
            writer.writeUint32(2, this.id);
        if (this.ending_save_point_id != 0)
            writer.writeUint32(6, this.ending_save_point_id);
        if (this.retcode != 0)
            writer.writeInt32(4, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FinishMainCoopRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FinishMainCoopRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.id = reader.readUint32();
                    break;
                case 6:
                    message.ending_save_point_id = reader.readUint32();
                    break;
                case 4:
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
    static deserializeBinary(bytes: Uint8Array): FinishMainCoopRsp {
        return FinishMainCoopRsp.deserialize(bytes);
    }
}
