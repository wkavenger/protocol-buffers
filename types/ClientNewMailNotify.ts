/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ClientNewMailNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ClientNewMailNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        not_read_num?: number;
        not_got_attachment_num?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("not_read_num" in data && data.not_read_num != undefined) {
                this.not_read_num = data.not_read_num;
            }
            if ("not_got_attachment_num" in data && data.not_got_attachment_num != undefined) {
                this.not_got_attachment_num = data.not_got_attachment_num;
            }
        }
    }
    get not_read_num() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set not_read_num(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get not_got_attachment_num() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set not_got_attachment_num(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        not_read_num?: number;
        not_got_attachment_num?: number;
    }): ClientNewMailNotify {
        const message = new ClientNewMailNotify({});
        if (data.not_read_num != null) {
            message.not_read_num = data.not_read_num;
        }
        if (data.not_got_attachment_num != null) {
            message.not_got_attachment_num = data.not_got_attachment_num;
        }
        return message;
    }
    toObject() {
        const data: {
            not_read_num?: number;
            not_got_attachment_num?: number;
        } = {};
        if (this.not_read_num != null) {
            data.not_read_num = this.not_read_num;
        }
        if (this.not_got_attachment_num != null) {
            data.not_got_attachment_num = this.not_got_attachment_num;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.not_read_num != 0)
            writer.writeUint32(7, this.not_read_num);
        if (this.not_got_attachment_num != 0)
            writer.writeUint32(2, this.not_got_attachment_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientNewMailNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientNewMailNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.not_read_num = reader.readUint32();
                    break;
                case 2:
                    message.not_got_attachment_num = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ClientNewMailNotify {
        return ClientNewMailNotify.deserialize(bytes);
    }
}
