/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PushTipsReadFinishReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class PushTipsReadFinishReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        push_tips_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("push_tips_id" in data && data.push_tips_id != undefined) {
                this.push_tips_id = data.push_tips_id;
            }
        }
    }
    get push_tips_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set push_tips_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        push_tips_id?: number;
    }): PushTipsReadFinishReq {
        const message = new PushTipsReadFinishReq({});
        if (data.push_tips_id != null) {
            message.push_tips_id = data.push_tips_id;
        }
        return message;
    }
    toObject() {
        const data: {
            push_tips_id?: number;
        } = {};
        if (this.push_tips_id != null) {
            data.push_tips_id = this.push_tips_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.push_tips_id != 0)
            writer.writeUint32(11, this.push_tips_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PushTipsReadFinishReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PushTipsReadFinishReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.push_tips_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PushTipsReadFinishReq {
        return PushTipsReadFinishReq.deserialize(bytes);
    }
}
