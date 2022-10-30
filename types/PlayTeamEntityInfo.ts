/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayTeamEntityInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./AbilitySyncStateInfo";
import * as pb_1 from "google-protobuf";
export class PlayTeamEntityInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        entity_id?: number;
        player_uid?: number;
        authority_peer_id?: number;
        gadget_config_id?: number;
        ability_info?: dependency_1.AbilitySyncStateInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("player_uid" in data && data.player_uid != undefined) {
                this.player_uid = data.player_uid;
            }
            if ("authority_peer_id" in data && data.authority_peer_id != undefined) {
                this.authority_peer_id = data.authority_peer_id;
            }
            if ("gadget_config_id" in data && data.gadget_config_id != undefined) {
                this.gadget_config_id = data.gadget_config_id;
            }
            if ("ability_info" in data && data.ability_info != undefined) {
                this.ability_info = data.ability_info;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get player_uid() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set player_uid(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get authority_peer_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set authority_peer_id(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get gadget_config_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set gadget_config_id(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get ability_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilitySyncStateInfo, 6) as dependency_1.AbilitySyncStateInfo;
    }
    set ability_info(value: dependency_1.AbilitySyncStateInfo) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get has_ability_info() {
        return pb_1.Message.getField(this, 6) != null;
    }
    static fromObject(data: {
        entity_id?: number;
        player_uid?: number;
        authority_peer_id?: number;
        gadget_config_id?: number;
        ability_info?: ReturnType<typeof dependency_1.AbilitySyncStateInfo.prototype.toObject>;
    }): PlayTeamEntityInfo {
        const message = new PlayTeamEntityInfo({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.player_uid != null) {
            message.player_uid = data.player_uid;
        }
        if (data.authority_peer_id != null) {
            message.authority_peer_id = data.authority_peer_id;
        }
        if (data.gadget_config_id != null) {
            message.gadget_config_id = data.gadget_config_id;
        }
        if (data.ability_info != null) {
            message.ability_info = dependency_1.AbilitySyncStateInfo.fromObject(data.ability_info);
        }
        return message;
    }
    toObject() {
        const data: {
            entity_id?: number;
            player_uid?: number;
            authority_peer_id?: number;
            gadget_config_id?: number;
            ability_info?: ReturnType<typeof dependency_1.AbilitySyncStateInfo.prototype.toObject>;
        } = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.player_uid != null) {
            data.player_uid = this.player_uid;
        }
        if (this.authority_peer_id != null) {
            data.authority_peer_id = this.authority_peer_id;
        }
        if (this.gadget_config_id != null) {
            data.gadget_config_id = this.gadget_config_id;
        }
        if (this.ability_info != null) {
            data.ability_info = this.ability_info.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(1, this.entity_id);
        if (this.player_uid != 0)
            writer.writeUint32(2, this.player_uid);
        if (this.authority_peer_id != 0)
            writer.writeUint32(3, this.authority_peer_id);
        if (this.gadget_config_id != 0)
            writer.writeUint32(5, this.gadget_config_id);
        if (this.has_ability_info)
            writer.writeMessage(6, this.ability_info, () => this.ability_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayTeamEntityInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayTeamEntityInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.entity_id = reader.readUint32();
                    break;
                case 2:
                    message.player_uid = reader.readUint32();
                    break;
                case 3:
                    message.authority_peer_id = reader.readUint32();
                    break;
                case 5:
                    message.gadget_config_id = reader.readUint32();
                    break;
                case 6:
                    reader.readMessage(message.ability_info, () => message.ability_info = dependency_1.AbilitySyncStateInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayTeamEntityInfo {
        return PlayTeamEntityInfo.deserialize(bytes);
    }
}
