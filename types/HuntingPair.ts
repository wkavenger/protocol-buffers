/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HuntingPair.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class HuntingPair extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        refresh_id?: number;
        monster_config_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("refresh_id" in data && data.refresh_id != undefined) {
                this.refresh_id = data.refresh_id;
            }
            if ("monster_config_id" in data && data.monster_config_id != undefined) {
                this.monster_config_id = data.monster_config_id;
            }
        }
    }
    get refresh_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set refresh_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get monster_config_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set monster_config_id(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        refresh_id?: number;
        monster_config_id?: number;
    }): HuntingPair {
        const message = new HuntingPair({});
        if (data.refresh_id != null) {
            message.refresh_id = data.refresh_id;
        }
        if (data.monster_config_id != null) {
            message.monster_config_id = data.monster_config_id;
        }
        return message;
    }
    toObject() {
        const data: {
            refresh_id?: number;
            monster_config_id?: number;
        } = {};
        if (this.refresh_id != null) {
            data.refresh_id = this.refresh_id;
        }
        if (this.monster_config_id != null) {
            data.monster_config_id = this.monster_config_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.refresh_id != 0)
            writer.writeUint32(9, this.refresh_id);
        if (this.monster_config_id != 0)
            writer.writeUint32(4, this.monster_config_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HuntingPair {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HuntingPair();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.refresh_id = reader.readUint32();
                    break;
                case 4:
                    message.monster_config_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HuntingPair {
        return HuntingPair.deserialize(bytes);
    }
}
