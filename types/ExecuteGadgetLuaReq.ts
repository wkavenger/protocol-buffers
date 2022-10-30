/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ExecuteGadgetLuaReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ExecuteGadgetLuaReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        source_entity_id?: number;
        param3?: number;
        param1?: number;
        param2?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("source_entity_id" in data && data.source_entity_id != undefined) {
                this.source_entity_id = data.source_entity_id;
            }
            if ("param3" in data && data.param3 != undefined) {
                this.param3 = data.param3;
            }
            if ("param1" in data && data.param1 != undefined) {
                this.param1 = data.param1;
            }
            if ("param2" in data && data.param2 != undefined) {
                this.param2 = data.param2;
            }
        }
    }
    get source_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set source_entity_id(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get param3() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set param3(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get param1() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set param1(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get param2() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set param2(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        source_entity_id?: number;
        param3?: number;
        param1?: number;
        param2?: number;
    }): ExecuteGadgetLuaReq {
        const message = new ExecuteGadgetLuaReq({});
        if (data.source_entity_id != null) {
            message.source_entity_id = data.source_entity_id;
        }
        if (data.param3 != null) {
            message.param3 = data.param3;
        }
        if (data.param1 != null) {
            message.param1 = data.param1;
        }
        if (data.param2 != null) {
            message.param2 = data.param2;
        }
        return message;
    }
    toObject() {
        const data: {
            source_entity_id?: number;
            param3?: number;
            param1?: number;
            param2?: number;
        } = {};
        if (this.source_entity_id != null) {
            data.source_entity_id = this.source_entity_id;
        }
        if (this.param3 != null) {
            data.param3 = this.param3;
        }
        if (this.param1 != null) {
            data.param1 = this.param1;
        }
        if (this.param2 != null) {
            data.param2 = this.param2;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.source_entity_id != 0)
            writer.writeUint32(12, this.source_entity_id);
        if (this.param3 != 0)
            writer.writeInt32(1, this.param3);
        if (this.param1 != 0)
            writer.writeInt32(5, this.param1);
        if (this.param2 != 0)
            writer.writeInt32(14, this.param2);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExecuteGadgetLuaReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExecuteGadgetLuaReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.source_entity_id = reader.readUint32();
                    break;
                case 1:
                    message.param3 = reader.readInt32();
                    break;
                case 5:
                    message.param1 = reader.readInt32();
                    break;
                case 14:
                    message.param2 = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ExecuteGadgetLuaReq {
        return ExecuteGadgetLuaReq.deserialize(bytes);
    }
}
