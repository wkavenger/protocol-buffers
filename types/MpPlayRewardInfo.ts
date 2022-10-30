/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MpPlayRewardInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class MpPlayRewardInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        resin?: number;
        remain_uid_list?: number[];
        qualify_uid_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("resin" in data && data.resin != undefined) {
                this.resin = data.resin;
            }
            if ("remain_uid_list" in data && data.remain_uid_list != undefined) {
                this.remain_uid_list = data.remain_uid_list;
            }
            if ("qualify_uid_list" in data && data.qualify_uid_list != undefined) {
                this.qualify_uid_list = data.qualify_uid_list;
            }
        }
    }
    get resin() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set resin(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get remain_uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
    }
    set remain_uid_list(value: number[]) {
        pb_1.Message.setField(this, 2, value);
    }
    get qualify_uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []) as number[];
    }
    set qualify_uid_list(value: number[]) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        resin?: number;
        remain_uid_list?: number[];
        qualify_uid_list?: number[];
    }): MpPlayRewardInfo {
        const message = new MpPlayRewardInfo({});
        if (data.resin != null) {
            message.resin = data.resin;
        }
        if (data.remain_uid_list != null) {
            message.remain_uid_list = data.remain_uid_list;
        }
        if (data.qualify_uid_list != null) {
            message.qualify_uid_list = data.qualify_uid_list;
        }
        return message;
    }
    toObject() {
        const data: {
            resin?: number;
            remain_uid_list?: number[];
            qualify_uid_list?: number[];
        } = {};
        if (this.resin != null) {
            data.resin = this.resin;
        }
        if (this.remain_uid_list != null) {
            data.remain_uid_list = this.remain_uid_list;
        }
        if (this.qualify_uid_list != null) {
            data.qualify_uid_list = this.qualify_uid_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.resin != 0)
            writer.writeUint32(1, this.resin);
        if (this.remain_uid_list.length)
            writer.writePackedUint32(2, this.remain_uid_list);
        if (this.qualify_uid_list.length)
            writer.writePackedUint32(3, this.qualify_uid_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MpPlayRewardInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MpPlayRewardInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.resin = reader.readUint32();
                    break;
                case 2:
                    message.remain_uid_list = reader.readPackedUint32();
                    break;
                case 3:
                    message.qualify_uid_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MpPlayRewardInfo {
        return MpPlayRewardInfo.deserialize(bytes);
    }
}
