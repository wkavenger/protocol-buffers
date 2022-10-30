/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MaterialInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class MaterialInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        count?: number;
        guid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("count" in data && data.count != undefined) {
                this.count = data.count;
            }
            if ("guid" in data && data.guid != undefined) {
                this.guid = data.guid;
            }
        }
    }
    get count() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set count(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get guid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set guid(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        count?: number;
        guid?: number;
    }): MaterialInfo {
        const message = new MaterialInfo({});
        if (data.count != null) {
            message.count = data.count;
        }
        if (data.guid != null) {
            message.guid = data.guid;
        }
        return message;
    }
    toObject() {
        const data: {
            count?: number;
            guid?: number;
        } = {};
        if (this.count != null) {
            data.count = this.count;
        }
        if (this.guid != null) {
            data.guid = this.guid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.count != 0)
            writer.writeUint32(11, this.count);
        if (this.guid != 0)
            writer.writeUint64(5, this.guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MaterialInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MaterialInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.count = reader.readUint32();
                    break;
                case 5:
                    message.guid = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MaterialInfo {
        return MaterialInfo.deserialize(bytes);
    }
}
