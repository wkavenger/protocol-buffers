/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GachaUpInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class GachaUpInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        item_parent_type?: number;
        item_id_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_parent_type" in data && data.item_parent_type != undefined) {
                this.item_parent_type = data.item_parent_type;
            }
            if ("item_id_list" in data && data.item_id_list != undefined) {
                this.item_id_list = data.item_id_list;
            }
        }
    }
    get item_parent_type() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set item_parent_type(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get item_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 15, []) as number[];
    }
    set item_id_list(value: number[]) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data: {
        item_parent_type?: number;
        item_id_list?: number[];
    }): GachaUpInfo {
        const message = new GachaUpInfo({});
        if (data.item_parent_type != null) {
            message.item_parent_type = data.item_parent_type;
        }
        if (data.item_id_list != null) {
            message.item_id_list = data.item_id_list;
        }
        return message;
    }
    toObject() {
        const data: {
            item_parent_type?: number;
            item_id_list?: number[];
        } = {};
        if (this.item_parent_type != null) {
            data.item_parent_type = this.item_parent_type;
        }
        if (this.item_id_list != null) {
            data.item_id_list = this.item_id_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_parent_type != 0)
            writer.writeUint32(7, this.item_parent_type);
        if (this.item_id_list.length)
            writer.writePackedUint32(15, this.item_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GachaUpInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GachaUpInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.item_parent_type = reader.readUint32();
                    break;
                case 15:
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
    static deserializeBinary(bytes: Uint8Array): GachaUpInfo {
        return GachaUpInfo.deserialize(bytes);
    }
}
