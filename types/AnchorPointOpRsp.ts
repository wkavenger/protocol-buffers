/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AnchorPointOpRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AnchorPointOpRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        anchor_point_id?: number;
        anchor_point_op_type?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("anchor_point_id" in data && data.anchor_point_id != undefined) {
                this.anchor_point_id = data.anchor_point_id;
            }
            if ("anchor_point_op_type" in data && data.anchor_point_op_type != undefined) {
                this.anchor_point_op_type = data.anchor_point_op_type;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get anchor_point_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set anchor_point_id(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get anchor_point_op_type() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set anchor_point_op_type(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        retcode?: number;
        anchor_point_id?: number;
        anchor_point_op_type?: number;
    }): AnchorPointOpRsp {
        const message = new AnchorPointOpRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.anchor_point_id != null) {
            message.anchor_point_id = data.anchor_point_id;
        }
        if (data.anchor_point_op_type != null) {
            message.anchor_point_op_type = data.anchor_point_op_type;
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            anchor_point_id?: number;
            anchor_point_op_type?: number;
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.anchor_point_id != null) {
            data.anchor_point_id = this.anchor_point_id;
        }
        if (this.anchor_point_op_type != null) {
            data.anchor_point_op_type = this.anchor_point_op_type;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(5, this.retcode);
        if (this.anchor_point_id != 0)
            writer.writeUint32(12, this.anchor_point_id);
        if (this.anchor_point_op_type != 0)
            writer.writeUint32(4, this.anchor_point_op_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AnchorPointOpRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AnchorPointOpRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.retcode = reader.readInt32();
                    break;
                case 12:
                    message.anchor_point_id = reader.readUint32();
                    break;
                case 4:
                    message.anchor_point_op_type = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AnchorPointOpRsp {
        return AnchorPointOpRsp.deserialize(bytes);
    }
}
