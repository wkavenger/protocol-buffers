/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WearEquipReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class WearEquipReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        equip_guid?: number;
        avatar_guid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("equip_guid" in data && data.equip_guid != undefined) {
                this.equip_guid = data.equip_guid;
            }
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
        }
    }
    get equip_guid() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set equip_guid(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set avatar_guid(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        equip_guid?: number;
        avatar_guid?: number;
    }): WearEquipReq {
        const message = new WearEquipReq({});
        if (data.equip_guid != null) {
            message.equip_guid = data.equip_guid;
        }
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        return message;
    }
    toObject() {
        const data: {
            equip_guid?: number;
            avatar_guid?: number;
        } = {};
        if (this.equip_guid != null) {
            data.equip_guid = this.equip_guid;
        }
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.equip_guid != 0)
            writer.writeUint64(7, this.equip_guid);
        if (this.avatar_guid != 0)
            writer.writeUint64(5, this.avatar_guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WearEquipReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WearEquipReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.equip_guid = reader.readUint64();
                    break;
                case 5:
                    message.avatar_guid = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): WearEquipReq {
        return WearEquipReq.deserialize(bytes);
    }
}
