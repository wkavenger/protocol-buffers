/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChannelerSlabOneOffDungeonInfoReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ChannelerSlabOneOffDungeonInfoReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {}) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data: {}): ChannelerSlabOneOffDungeonInfoReq {
        const message = new ChannelerSlabOneOffDungeonInfoReq({});
        return message;
    }
    toObject() {
        const data: {} = {};
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChannelerSlabOneOffDungeonInfoReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChannelerSlabOneOffDungeonInfoReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ChannelerSlabOneOffDungeonInfoReq {
        return ChannelerSlabOneOffDungeonInfoReq.deserialize(bytes);
    }
}
