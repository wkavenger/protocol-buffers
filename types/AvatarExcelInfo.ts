/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarExcelInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AvatarExcelInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        prefab_path_hash?: number;
        prefab_path_remote_hash?: number;
        controller_path_hash?: number;
        controller_path_remote_hash?: number;
        combat_config_hash?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("prefab_path_hash" in data && data.prefab_path_hash != undefined) {
                this.prefab_path_hash = data.prefab_path_hash;
            }
            if ("prefab_path_remote_hash" in data && data.prefab_path_remote_hash != undefined) {
                this.prefab_path_remote_hash = data.prefab_path_remote_hash;
            }
            if ("controller_path_hash" in data && data.controller_path_hash != undefined) {
                this.controller_path_hash = data.controller_path_hash;
            }
            if ("controller_path_remote_hash" in data && data.controller_path_remote_hash != undefined) {
                this.controller_path_remote_hash = data.controller_path_remote_hash;
            }
            if ("combat_config_hash" in data && data.combat_config_hash != undefined) {
                this.combat_config_hash = data.combat_config_hash;
            }
        }
    }
    get prefab_path_hash() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set prefab_path_hash(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get prefab_path_remote_hash() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set prefab_path_remote_hash(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get controller_path_hash() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set controller_path_hash(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get controller_path_remote_hash() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set controller_path_remote_hash(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get combat_config_hash() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set combat_config_hash(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        prefab_path_hash?: number;
        prefab_path_remote_hash?: number;
        controller_path_hash?: number;
        controller_path_remote_hash?: number;
        combat_config_hash?: number;
    }): AvatarExcelInfo {
        const message = new AvatarExcelInfo({});
        if (data.prefab_path_hash != null) {
            message.prefab_path_hash = data.prefab_path_hash;
        }
        if (data.prefab_path_remote_hash != null) {
            message.prefab_path_remote_hash = data.prefab_path_remote_hash;
        }
        if (data.controller_path_hash != null) {
            message.controller_path_hash = data.controller_path_hash;
        }
        if (data.controller_path_remote_hash != null) {
            message.controller_path_remote_hash = data.controller_path_remote_hash;
        }
        if (data.combat_config_hash != null) {
            message.combat_config_hash = data.combat_config_hash;
        }
        return message;
    }
    toObject() {
        const data: {
            prefab_path_hash?: number;
            prefab_path_remote_hash?: number;
            controller_path_hash?: number;
            controller_path_remote_hash?: number;
            combat_config_hash?: number;
        } = {};
        if (this.prefab_path_hash != null) {
            data.prefab_path_hash = this.prefab_path_hash;
        }
        if (this.prefab_path_remote_hash != null) {
            data.prefab_path_remote_hash = this.prefab_path_remote_hash;
        }
        if (this.controller_path_hash != null) {
            data.controller_path_hash = this.controller_path_hash;
        }
        if (this.controller_path_remote_hash != null) {
            data.controller_path_remote_hash = this.controller_path_remote_hash;
        }
        if (this.combat_config_hash != null) {
            data.combat_config_hash = this.combat_config_hash;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.prefab_path_hash != 0)
            writer.writeUint64(1, this.prefab_path_hash);
        if (this.prefab_path_remote_hash != 0)
            writer.writeUint64(2, this.prefab_path_remote_hash);
        if (this.controller_path_hash != 0)
            writer.writeUint64(3, this.controller_path_hash);
        if (this.controller_path_remote_hash != 0)
            writer.writeUint64(4, this.controller_path_remote_hash);
        if (this.combat_config_hash != 0)
            writer.writeUint64(5, this.combat_config_hash);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AvatarExcelInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarExcelInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.prefab_path_hash = reader.readUint64();
                    break;
                case 2:
                    message.prefab_path_remote_hash = reader.readUint64();
                    break;
                case 3:
                    message.controller_path_hash = reader.readUint64();
                    break;
                case 4:
                    message.controller_path_remote_hash = reader.readUint64();
                    break;
                case 5:
                    message.combat_config_hash = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AvatarExcelInfo {
        return AvatarExcelInfo.deserialize(bytes);
    }
}
