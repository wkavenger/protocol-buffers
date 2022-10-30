/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BlossomChestInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class BlossomChestInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        resin?: number;
        qualify_uid_list?: number[];
        remain_uid_list?: number[];
        dead_time?: number;
        blossom_refresh_type?: number;
        refresh_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("resin" in data && data.resin != undefined) {
                this.resin = data.resin;
            }
            if ("qualify_uid_list" in data && data.qualify_uid_list != undefined) {
                this.qualify_uid_list = data.qualify_uid_list;
            }
            if ("remain_uid_list" in data && data.remain_uid_list != undefined) {
                this.remain_uid_list = data.remain_uid_list;
            }
            if ("dead_time" in data && data.dead_time != undefined) {
                this.dead_time = data.dead_time;
            }
            if ("blossom_refresh_type" in data && data.blossom_refresh_type != undefined) {
                this.blossom_refresh_type = data.blossom_refresh_type;
            }
            if ("refresh_id" in data && data.refresh_id != undefined) {
                this.refresh_id = data.refresh_id;
            }
        }
    }
    get resin() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set resin(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get qualify_uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
    }
    set qualify_uid_list(value: number[]) {
        pb_1.Message.setField(this, 2, value);
    }
    get remain_uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []) as number[];
    }
    set remain_uid_list(value: number[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get dead_time() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set dead_time(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get blossom_refresh_type() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set blossom_refresh_type(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get refresh_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set refresh_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        resin?: number;
        qualify_uid_list?: number[];
        remain_uid_list?: number[];
        dead_time?: number;
        blossom_refresh_type?: number;
        refresh_id?: number;
    }): BlossomChestInfo {
        const message = new BlossomChestInfo({});
        if (data.resin != null) {
            message.resin = data.resin;
        }
        if (data.qualify_uid_list != null) {
            message.qualify_uid_list = data.qualify_uid_list;
        }
        if (data.remain_uid_list != null) {
            message.remain_uid_list = data.remain_uid_list;
        }
        if (data.dead_time != null) {
            message.dead_time = data.dead_time;
        }
        if (data.blossom_refresh_type != null) {
            message.blossom_refresh_type = data.blossom_refresh_type;
        }
        if (data.refresh_id != null) {
            message.refresh_id = data.refresh_id;
        }
        return message;
    }
    toObject() {
        const data: {
            resin?: number;
            qualify_uid_list?: number[];
            remain_uid_list?: number[];
            dead_time?: number;
            blossom_refresh_type?: number;
            refresh_id?: number;
        } = {};
        if (this.resin != null) {
            data.resin = this.resin;
        }
        if (this.qualify_uid_list != null) {
            data.qualify_uid_list = this.qualify_uid_list;
        }
        if (this.remain_uid_list != null) {
            data.remain_uid_list = this.remain_uid_list;
        }
        if (this.dead_time != null) {
            data.dead_time = this.dead_time;
        }
        if (this.blossom_refresh_type != null) {
            data.blossom_refresh_type = this.blossom_refresh_type;
        }
        if (this.refresh_id != null) {
            data.refresh_id = this.refresh_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.resin != 0)
            writer.writeUint32(1, this.resin);
        if (this.qualify_uid_list.length)
            writer.writePackedUint32(2, this.qualify_uid_list);
        if (this.remain_uid_list.length)
            writer.writePackedUint32(3, this.remain_uid_list);
        if (this.dead_time != 0)
            writer.writeUint32(4, this.dead_time);
        if (this.blossom_refresh_type != 0)
            writer.writeUint32(5, this.blossom_refresh_type);
        if (this.refresh_id != 0)
            writer.writeUint32(6, this.refresh_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlossomChestInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlossomChestInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.resin = reader.readUint32();
                    break;
                case 2:
                    message.qualify_uid_list = reader.readPackedUint32();
                    break;
                case 3:
                    message.remain_uid_list = reader.readPackedUint32();
                    break;
                case 4:
                    message.dead_time = reader.readUint32();
                    break;
                case 5:
                    message.blossom_refresh_type = reader.readUint32();
                    break;
                case 6:
                    message.refresh_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): BlossomChestInfo {
        return BlossomChestInfo.deserialize(bytes);
    }
}
