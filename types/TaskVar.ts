/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TaskVar.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class TaskVar extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        key?: number;
        value_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("value_list" in data && data.value_list != undefined) {
                this.value_list = data.value_list;
            }
        }
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set key(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get value_list() {
        return pb_1.Message.getFieldWithDefault(this, 6, []) as number[];
    }
    set value_list(value: number[]) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        key?: number;
        value_list?: number[];
    }): TaskVar {
        const message = new TaskVar({});
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.value_list != null) {
            message.value_list = data.value_list;
        }
        return message;
    }
    toObject() {
        const data: {
            key?: number;
            value_list?: number[];
        } = {};
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.value_list != null) {
            data.value_list = this.value_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key != 0)
            writer.writeUint32(8, this.key);
        if (this.value_list.length)
            writer.writePackedInt32(6, this.value_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TaskVar {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TaskVar();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.key = reader.readUint32();
                    break;
                case 6:
                    message.value_list = reader.readPackedInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TaskVar {
        return TaskVar.deserialize(bytes);
    }
}
