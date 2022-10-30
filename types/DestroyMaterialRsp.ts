/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DestroyMaterialRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class DestroyMaterialRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        item_count_list?: number[];
        item_id_list?: number[];
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12, 13], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_count_list" in data && data.item_count_list != undefined) {
                this.item_count_list = data.item_count_list;
            }
            if ("item_id_list" in data && data.item_id_list != undefined) {
                this.item_id_list = data.item_id_list;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get item_count_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []) as number[];
    }
    set item_count_list(value: number[]) {
        pb_1.Message.setField(this, 12, value);
    }
    get item_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 13, []) as number[];
    }
    set item_id_list(value: number[]) {
        pb_1.Message.setField(this, 13, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        item_count_list?: number[];
        item_id_list?: number[];
        retcode?: number;
    }): DestroyMaterialRsp {
        const message = new DestroyMaterialRsp({});
        if (data.item_count_list != null) {
            message.item_count_list = data.item_count_list;
        }
        if (data.item_id_list != null) {
            message.item_id_list = data.item_id_list;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            item_count_list?: number[];
            item_id_list?: number[];
            retcode?: number;
        } = {};
        if (this.item_count_list != null) {
            data.item_count_list = this.item_count_list;
        }
        if (this.item_id_list != null) {
            data.item_id_list = this.item_id_list;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_count_list.length)
            writer.writePackedUint32(12, this.item_count_list);
        if (this.item_id_list.length)
            writer.writePackedUint32(13, this.item_id_list);
        if (this.retcode != 0)
            writer.writeInt32(11, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DestroyMaterialRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DestroyMaterialRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.item_count_list = reader.readPackedUint32();
                    break;
                case 13:
                    message.item_id_list = reader.readPackedUint32();
                    break;
                case 11:
                    message.retcode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DestroyMaterialRsp {
        return DestroyMaterialRsp.deserialize(bytes);
    }
}
