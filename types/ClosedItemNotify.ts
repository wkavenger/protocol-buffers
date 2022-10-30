/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ClosedItemNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ClosedItemNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        item_id_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_id_list" in data && data.item_id_list != undefined) {
                this.item_id_list = data.item_id_list;
            }
        }
    }
    get item_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 8, []) as number[];
    }
    set item_id_list(value: number[]) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        item_id_list?: number[];
    }): ClosedItemNotify {
        const message = new ClosedItemNotify({});
        if (data.item_id_list != null) {
            message.item_id_list = data.item_id_list;
        }
        return message;
    }
    toObject() {
        const data: {
            item_id_list?: number[];
        } = {};
        if (this.item_id_list != null) {
            data.item_id_list = this.item_id_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_id_list.length)
            writer.writePackedUint32(8, this.item_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClosedItemNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClosedItemNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.item_id_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ClosedItemNotify {
        return ClosedItemNotify.deserialize(bytes);
    }
}
