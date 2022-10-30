/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AiSyncInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AiSyncInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        entity_id?: number;
        is_self_killing?: boolean;
        has_path_to_target?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("is_self_killing" in data && data.is_self_killing != undefined) {
                this.is_self_killing = data.is_self_killing;
            }
            if ("has_path_to_target" in data && data.has_path_to_target != undefined) {
                this.has_path_to_target = data.has_path_to_target;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get is_self_killing() {
        return pb_1.Message.getFieldWithDefault(this, 8, false) as boolean;
    }
    set is_self_killing(value: boolean) {
        pb_1.Message.setField(this, 8, value);
    }
    get has_path_to_target() {
        return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
    }
    set has_path_to_target(value: boolean) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        entity_id?: number;
        is_self_killing?: boolean;
        has_path_to_target?: boolean;
    }): AiSyncInfo {
        const message = new AiSyncInfo({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.is_self_killing != null) {
            message.is_self_killing = data.is_self_killing;
        }
        if (data.has_path_to_target != null) {
            message.has_path_to_target = data.has_path_to_target;
        }
        return message;
    }
    toObject() {
        const data: {
            entity_id?: number;
            is_self_killing?: boolean;
            has_path_to_target?: boolean;
        } = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.is_self_killing != null) {
            data.is_self_killing = this.is_self_killing;
        }
        if (this.has_path_to_target != null) {
            data.has_path_to_target = this.has_path_to_target;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(9, this.entity_id);
        if (this.is_self_killing != false)
            writer.writeBool(8, this.is_self_killing);
        if (this.has_path_to_target != false)
            writer.writeBool(4, this.has_path_to_target);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AiSyncInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AiSyncInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.entity_id = reader.readUint32();
                    break;
                case 8:
                    message.is_self_killing = reader.readBool();
                    break;
                case 4:
                    message.has_path_to_target = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AiSyncInfo {
        return AiSyncInfo.deserialize(bytes);
    }
}
