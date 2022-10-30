/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MultistagePlayFinishStageReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class MultistagePlayFinishStageReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        group_id?: number;
        play_index?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("group_id" in data && data.group_id != undefined) {
                this.group_id = data.group_id;
            }
            if ("play_index" in data && data.play_index != undefined) {
                this.play_index = data.play_index;
            }
        }
    }
    get group_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set group_id(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get play_index() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set play_index(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data: {
        group_id?: number;
        play_index?: number;
    }): MultistagePlayFinishStageReq {
        const message = new MultistagePlayFinishStageReq({});
        if (data.group_id != null) {
            message.group_id = data.group_id;
        }
        if (data.play_index != null) {
            message.play_index = data.play_index;
        }
        return message;
    }
    toObject() {
        const data: {
            group_id?: number;
            play_index?: number;
        } = {};
        if (this.group_id != null) {
            data.group_id = this.group_id;
        }
        if (this.play_index != null) {
            data.play_index = this.play_index;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.group_id != 0)
            writer.writeUint32(12, this.group_id);
        if (this.play_index != 0)
            writer.writeUint32(15, this.play_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MultistagePlayFinishStageReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MultistagePlayFinishStageReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.group_id = reader.readUint32();
                    break;
                case 15:
                    message.play_index = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MultistagePlayFinishStageReq {
        return MultistagePlayFinishStageReq.deserialize(bytes);
    }
}
