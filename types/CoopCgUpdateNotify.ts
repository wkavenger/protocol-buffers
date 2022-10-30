/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CoopCgUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class CoopCgUpdateNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        cg_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [13], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cg_list" in data && data.cg_list != undefined) {
                this.cg_list = data.cg_list;
            }
        }
    }
    get cg_list() {
        return pb_1.Message.getFieldWithDefault(this, 13, []) as number[];
    }
    set cg_list(value: number[]) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data: {
        cg_list?: number[];
    }): CoopCgUpdateNotify {
        const message = new CoopCgUpdateNotify({});
        if (data.cg_list != null) {
            message.cg_list = data.cg_list;
        }
        return message;
    }
    toObject() {
        const data: {
            cg_list?: number[];
        } = {};
        if (this.cg_list != null) {
            data.cg_list = this.cg_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cg_list.length)
            writer.writePackedUint32(13, this.cg_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CoopCgUpdateNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CoopCgUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.cg_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CoopCgUpdateNotify {
        return CoopCgUpdateNotify.deserialize(bytes);
    }
}
