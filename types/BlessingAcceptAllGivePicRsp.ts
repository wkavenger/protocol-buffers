/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BlessingAcceptAllGivePicRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class BlessingAcceptAllGivePicRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        accept_pic_num_map?: Map<number, number>;
        accept_index_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("accept_pic_num_map" in data && data.accept_pic_num_map != undefined) {
                this.accept_pic_num_map = data.accept_pic_num_map;
            }
            if ("accept_index_list" in data && data.accept_index_list != undefined) {
                this.accept_index_list = data.accept_index_list;
            }
        }
        if (!this.accept_pic_num_map)
            this.accept_pic_num_map = new Map();
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get accept_pic_num_map() {
        return pb_1.Message.getField(this, 14) as any as Map<number, number>;
    }
    set accept_pic_num_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 14, value as any);
    }
    get accept_index_list() {
        return pb_1.Message.getFieldWithDefault(this, 5, []) as number[];
    }
    set accept_index_list(value: number[]) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        retcode?: number;
        accept_pic_num_map?: {
            [key: number]: number;
        };
        accept_index_list?: number[];
    }): BlessingAcceptAllGivePicRsp {
        const message = new BlessingAcceptAllGivePicRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (typeof data.accept_pic_num_map == "object") {
            message.accept_pic_num_map = new Map(Object.entries(data.accept_pic_num_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.accept_index_list != null) {
            message.accept_index_list = data.accept_index_list;
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            accept_pic_num_map?: {
                [key: number]: number;
            };
            accept_index_list?: number[];
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.accept_pic_num_map.size > 0) {
            data.accept_pic_num_map = (Object.fromEntries)(this.accept_pic_num_map);
        }
        if (this.accept_index_list != null) {
            data.accept_index_list = this.accept_index_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(11, this.retcode);
        for (const [key, value] of this.accept_pic_num_map) {
            writer.writeMessage(14, this.accept_pic_num_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (this.accept_index_list.length)
            writer.writePackedUint32(5, this.accept_index_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlessingAcceptAllGivePicRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlessingAcceptAllGivePicRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.retcode = reader.readInt32();
                    break;
                case 14:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.accept_pic_num_map as any, reader, reader.readUint32, reader.readUint32));
                    break;
                case 5:
                    message.accept_index_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): BlessingAcceptAllGivePicRsp {
        return BlessingAcceptAllGivePicRsp.deserialize(bytes);
    }
}
