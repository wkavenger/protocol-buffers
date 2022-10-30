/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PullRecentChatReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class PullRecentChatReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        pull_num?: number;
        begin_sequence?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("pull_num" in data && data.pull_num != undefined) {
                this.pull_num = data.pull_num;
            }
            if ("begin_sequence" in data && data.begin_sequence != undefined) {
                this.begin_sequence = data.begin_sequence;
            }
        }
    }
    get pull_num() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set pull_num(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get begin_sequence() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set begin_sequence(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data: {
        pull_num?: number;
        begin_sequence?: number;
    }): PullRecentChatReq {
        const message = new PullRecentChatReq({});
        if (data.pull_num != null) {
            message.pull_num = data.pull_num;
        }
        if (data.begin_sequence != null) {
            message.begin_sequence = data.begin_sequence;
        }
        return message;
    }
    toObject() {
        const data: {
            pull_num?: number;
            begin_sequence?: number;
        } = {};
        if (this.pull_num != null) {
            data.pull_num = this.pull_num;
        }
        if (this.begin_sequence != null) {
            data.begin_sequence = this.begin_sequence;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.pull_num != 0)
            writer.writeUint32(6, this.pull_num);
        if (this.begin_sequence != 0)
            writer.writeUint32(15, this.begin_sequence);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PullRecentChatReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PullRecentChatReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.pull_num = reader.readUint32();
                    break;
                case 15:
                    message.begin_sequence = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PullRecentChatReq {
        return PullRecentChatReq.deserialize(bytes);
    }
}
