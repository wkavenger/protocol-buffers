/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CityInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class CityInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        city_id?: number;
        crystal_num?: number;
        level?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("city_id" in data && data.city_id != undefined) {
                this.city_id = data.city_id;
            }
            if ("crystal_num" in data && data.crystal_num != undefined) {
                this.crystal_num = data.crystal_num;
            }
            if ("level" in data && data.level != undefined) {
                this.level = data.level;
            }
        }
    }
    get city_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set city_id(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get crystal_num() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set crystal_num(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get level() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set level(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        city_id?: number;
        crystal_num?: number;
        level?: number;
    }): CityInfo {
        const message = new CityInfo({});
        if (data.city_id != null) {
            message.city_id = data.city_id;
        }
        if (data.crystal_num != null) {
            message.crystal_num = data.crystal_num;
        }
        if (data.level != null) {
            message.level = data.level;
        }
        return message;
    }
    toObject() {
        const data: {
            city_id?: number;
            crystal_num?: number;
            level?: number;
        } = {};
        if (this.city_id != null) {
            data.city_id = this.city_id;
        }
        if (this.crystal_num != null) {
            data.crystal_num = this.crystal_num;
        }
        if (this.level != null) {
            data.level = this.level;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.city_id != 0)
            writer.writeUint32(15, this.city_id);
        if (this.crystal_num != 0)
            writer.writeUint32(3, this.crystal_num);
        if (this.level != 0)
            writer.writeUint32(4, this.level);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CityInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CityInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.city_id = reader.readUint32();
                    break;
                case 3:
                    message.crystal_num = reader.readUint32();
                    break;
                case 4:
                    message.level = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CityInfo {
        return CityInfo.deserialize(bytes);
    }
}
