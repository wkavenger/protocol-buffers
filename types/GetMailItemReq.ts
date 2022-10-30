/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetMailItemReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class GetMailItemReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        mail_id_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mail_id_list" in data && data.mail_id_list != undefined) {
                this.mail_id_list = data.mail_id_list;
            }
        }
    }
    get mail_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 6, []) as number[];
    }
    set mail_id_list(value: number[]) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        mail_id_list?: number[];
    }): GetMailItemReq {
        const message = new GetMailItemReq({});
        if (data.mail_id_list != null) {
            message.mail_id_list = data.mail_id_list;
        }
        return message;
    }
    toObject() {
        const data: {
            mail_id_list?: number[];
        } = {};
        if (this.mail_id_list != null) {
            data.mail_id_list = this.mail_id_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mail_id_list.length)
            writer.writePackedUint32(6, this.mail_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetMailItemReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetMailItemReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.mail_id_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetMailItemReq {
        return GetMailItemReq.deserialize(bytes);
    }
}
