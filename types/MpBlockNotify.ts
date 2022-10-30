/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MpBlockNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class MpBlockNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        end_time?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
        }
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set end_time(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data: {
        end_time?: number;
    }): MpBlockNotify {
        const message = new MpBlockNotify({});
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        return message;
    }
    toObject() {
        const data: {
            end_time?: number;
        } = {};
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.end_time != 0)
            writer.writeUint32(13, this.end_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MpBlockNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MpBlockNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.end_time = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MpBlockNotify {
        return MpBlockNotify.deserialize(bytes);
    }
}
