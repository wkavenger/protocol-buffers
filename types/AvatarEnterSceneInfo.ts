/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarEnterSceneInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./AbilitySyncStateInfo";
import * as dependency_2 from "./ServerBuff";
import * as pb_1 from "google-protobuf";
export class AvatarEnterSceneInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        server_buff_list?: dependency_2.ServerBuff[];
        avatar_entity_id?: number;
        weapon_ability_info?: dependency_1.AbilitySyncStateInfo;
        weapon_entity_id?: number;
        avatar_ability_info?: dependency_1.AbilitySyncStateInfo;
        avatar_guid?: number;
        weapon_guid?: number;
        buff_id_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14, 5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("server_buff_list" in data && data.server_buff_list != undefined) {
                this.server_buff_list = data.server_buff_list;
            }
            if ("avatar_entity_id" in data && data.avatar_entity_id != undefined) {
                this.avatar_entity_id = data.avatar_entity_id;
            }
            if ("weapon_ability_info" in data && data.weapon_ability_info != undefined) {
                this.weapon_ability_info = data.weapon_ability_info;
            }
            if ("weapon_entity_id" in data && data.weapon_entity_id != undefined) {
                this.weapon_entity_id = data.weapon_entity_id;
            }
            if ("avatar_ability_info" in data && data.avatar_ability_info != undefined) {
                this.avatar_ability_info = data.avatar_ability_info;
            }
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("weapon_guid" in data && data.weapon_guid != undefined) {
                this.weapon_guid = data.weapon_guid;
            }
            if ("buff_id_list" in data && data.buff_id_list != undefined) {
                this.buff_id_list = data.buff_id_list;
            }
        }
    }
    get server_buff_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ServerBuff, 14) as dependency_2.ServerBuff[];
    }
    set server_buff_list(value: dependency_2.ServerBuff[]) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    get avatar_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set avatar_entity_id(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get weapon_ability_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilitySyncStateInfo, 12) as dependency_1.AbilitySyncStateInfo;
    }
    set weapon_ability_info(value: dependency_1.AbilitySyncStateInfo) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_weapon_ability_info() {
        return pb_1.Message.getField(this, 12) != null;
    }
    get weapon_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set weapon_entity_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get avatar_ability_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilitySyncStateInfo, 2) as dependency_1.AbilitySyncStateInfo;
    }
    set avatar_ability_info(value: dependency_1.AbilitySyncStateInfo) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_avatar_ability_info() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set avatar_guid(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get weapon_guid() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set weapon_guid(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get buff_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 5, []) as number[];
    }
    set buff_id_list(value: number[]) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        server_buff_list?: ReturnType<typeof dependency_2.ServerBuff.prototype.toObject>[];
        avatar_entity_id?: number;
        weapon_ability_info?: ReturnType<typeof dependency_1.AbilitySyncStateInfo.prototype.toObject>;
        weapon_entity_id?: number;
        avatar_ability_info?: ReturnType<typeof dependency_1.AbilitySyncStateInfo.prototype.toObject>;
        avatar_guid?: number;
        weapon_guid?: number;
        buff_id_list?: number[];
    }): AvatarEnterSceneInfo {
        const message = new AvatarEnterSceneInfo({});
        if (data.server_buff_list != null) {
            message.server_buff_list = data.server_buff_list.map(item => dependency_2.ServerBuff.fromObject(item));
        }
        if (data.avatar_entity_id != null) {
            message.avatar_entity_id = data.avatar_entity_id;
        }
        if (data.weapon_ability_info != null) {
            message.weapon_ability_info = dependency_1.AbilitySyncStateInfo.fromObject(data.weapon_ability_info);
        }
        if (data.weapon_entity_id != null) {
            message.weapon_entity_id = data.weapon_entity_id;
        }
        if (data.avatar_ability_info != null) {
            message.avatar_ability_info = dependency_1.AbilitySyncStateInfo.fromObject(data.avatar_ability_info);
        }
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.weapon_guid != null) {
            message.weapon_guid = data.weapon_guid;
        }
        if (data.buff_id_list != null) {
            message.buff_id_list = data.buff_id_list;
        }
        return message;
    }
    toObject() {
        const data: {
            server_buff_list?: ReturnType<typeof dependency_2.ServerBuff.prototype.toObject>[];
            avatar_entity_id?: number;
            weapon_ability_info?: ReturnType<typeof dependency_1.AbilitySyncStateInfo.prototype.toObject>;
            weapon_entity_id?: number;
            avatar_ability_info?: ReturnType<typeof dependency_1.AbilitySyncStateInfo.prototype.toObject>;
            avatar_guid?: number;
            weapon_guid?: number;
            buff_id_list?: number[];
        } = {};
        if (this.server_buff_list != null) {
            data.server_buff_list = this.server_buff_list.map((item: dependency_2.ServerBuff) => item.toObject());
        }
        if (this.avatar_entity_id != null) {
            data.avatar_entity_id = this.avatar_entity_id;
        }
        if (this.weapon_ability_info != null) {
            data.weapon_ability_info = this.weapon_ability_info.toObject();
        }
        if (this.weapon_entity_id != null) {
            data.weapon_entity_id = this.weapon_entity_id;
        }
        if (this.avatar_ability_info != null) {
            data.avatar_ability_info = this.avatar_ability_info.toObject();
        }
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.weapon_guid != null) {
            data.weapon_guid = this.weapon_guid;
        }
        if (this.buff_id_list != null) {
            data.buff_id_list = this.buff_id_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.server_buff_list.length)
            writer.writeRepeatedMessage(14, this.server_buff_list, (item: dependency_2.ServerBuff) => item.serialize(writer));
        if (this.avatar_entity_id != 0)
            writer.writeUint32(7, this.avatar_entity_id);
        if (this.has_weapon_ability_info)
            writer.writeMessage(12, this.weapon_ability_info, () => this.weapon_ability_info.serialize(writer));
        if (this.weapon_entity_id != 0)
            writer.writeUint32(10, this.weapon_entity_id);
        if (this.has_avatar_ability_info)
            writer.writeMessage(2, this.avatar_ability_info, () => this.avatar_ability_info.serialize(writer));
        if (this.avatar_guid != 0)
            writer.writeUint64(13, this.avatar_guid);
        if (this.weapon_guid != 0)
            writer.writeUint64(9, this.weapon_guid);
        if (this.buff_id_list.length)
            writer.writePackedUint32(5, this.buff_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AvatarEnterSceneInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarEnterSceneInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    reader.readMessage(message.server_buff_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_2.ServerBuff.deserialize(reader), dependency_2.ServerBuff));
                    break;
                case 7:
                    message.avatar_entity_id = reader.readUint32();
                    break;
                case 12:
                    reader.readMessage(message.weapon_ability_info, () => message.weapon_ability_info = dependency_1.AbilitySyncStateInfo.deserialize(reader));
                    break;
                case 10:
                    message.weapon_entity_id = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.avatar_ability_info, () => message.avatar_ability_info = dependency_1.AbilitySyncStateInfo.deserialize(reader));
                    break;
                case 13:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 9:
                    message.weapon_guid = reader.readUint64();
                    break;
                case 5:
                    message.buff_id_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AvatarEnterSceneInfo {
        return AvatarEnterSceneInfo.deserialize(bytes);
    }
}
