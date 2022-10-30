/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MistTrialLevelData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class MistTrialLevelData extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        open_time?: number;
        is_open?: boolean;
        level_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("level_id" in data && data.level_id != undefined) {
                this.level_id = data.level_id;
            }
        }
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set open_time(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 12, false) as boolean;
    }
    set is_open(value: boolean) {
        pb_1.Message.setField(this, 12, value);
    }
    get level_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set level_id(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        open_time?: number;
        is_open?: boolean;
        level_id?: number;
    }): MistTrialLevelData {
        const message = new MistTrialLevelData({});
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.level_id != null) {
            message.level_id = data.level_id;
        }
        return message;
    }
    toObject() {
        const data: {
            open_time?: number;
            is_open?: boolean;
            level_id?: number;
        } = {};
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.level_id != null) {
            data.level_id = this.level_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.open_time != 0)
            writer.writeUint32(1, this.open_time);
        if (this.is_open != false)
            writer.writeBool(12, this.is_open);
        if (this.level_id != 0)
            writer.writeUint32(7, this.level_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MistTrialLevelData {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MistTrialLevelData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.open_time = reader.readUint32();
                    break;
                case 12:
                    message.is_open = reader.readBool();
                    break;
                case 7:
                    message.level_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MistTrialLevelData {
        return MistTrialLevelData.deserialize(bytes);
    }
}
