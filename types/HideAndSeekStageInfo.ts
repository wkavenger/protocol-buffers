/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HideAndSeekStageInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./HideAndSeekPlayerBattleInfo";
import * as dependency_2 from "./HideAndSeekStageType";
import * as pb_1 from "google-protobuf";
export class HideAndSeekStageInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        map_id?: number;
        is_record_score?: boolean;
        stage_type?: dependency_2.HideAndSeekStageType;
        battle_info_map?: Map<number, dependency_1.HideAndSeekPlayerBattleInfo>;
        hider_uid_list?: number[];
        hunter_uid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("map_id" in data && data.map_id != undefined) {
                this.map_id = data.map_id;
            }
            if ("is_record_score" in data && data.is_record_score != undefined) {
                this.is_record_score = data.is_record_score;
            }
            if ("stage_type" in data && data.stage_type != undefined) {
                this.stage_type = data.stage_type;
            }
            if ("battle_info_map" in data && data.battle_info_map != undefined) {
                this.battle_info_map = data.battle_info_map;
            }
            if ("hider_uid_list" in data && data.hider_uid_list != undefined) {
                this.hider_uid_list = data.hider_uid_list;
            }
            if ("hunter_uid" in data && data.hunter_uid != undefined) {
                this.hunter_uid = data.hunter_uid;
            }
        }
        if (!this.battle_info_map)
            this.battle_info_map = new Map();
    }
    get map_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set map_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get is_record_score() {
        return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
    }
    set is_record_score(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    get stage_type() {
        return pb_1.Message.getFieldWithDefault(this, 7, dependency_2.HideAndSeekStageType.HIDE_AND_SEEK_STAGE_TYPE_PREPARE) as dependency_2.HideAndSeekStageType;
    }
    set stage_type(value: dependency_2.HideAndSeekStageType) {
        pb_1.Message.setField(this, 7, value);
    }
    get battle_info_map() {
        return pb_1.Message.getField(this, 2) as any as Map<number, dependency_1.HideAndSeekPlayerBattleInfo>;
    }
    set battle_info_map(value: Map<number, dependency_1.HideAndSeekPlayerBattleInfo>) {
        pb_1.Message.setField(this, 2, value as any);
    }
    get hider_uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 1, []) as number[];
    }
    set hider_uid_list(value: number[]) {
        pb_1.Message.setField(this, 1, value);
    }
    get hunter_uid() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set hunter_uid(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        map_id?: number;
        is_record_score?: boolean;
        stage_type?: dependency_2.HideAndSeekStageType;
        battle_info_map?: {
            [key: number]: ReturnType<typeof dependency_1.HideAndSeekPlayerBattleInfo.prototype.toObject>;
        };
        hider_uid_list?: number[];
        hunter_uid?: number;
    }): HideAndSeekStageInfo {
        const message = new HideAndSeekStageInfo({});
        if (data.map_id != null) {
            message.map_id = data.map_id;
        }
        if (data.is_record_score != null) {
            message.is_record_score = data.is_record_score;
        }
        if (data.stage_type != null) {
            message.stage_type = data.stage_type;
        }
        if (typeof data.battle_info_map == "object") {
            message.battle_info_map = new Map(Object.entries(data.battle_info_map).map(([key, value]) => [Number(key), dependency_1.HideAndSeekPlayerBattleInfo.fromObject(value)]));
        }
        if (data.hider_uid_list != null) {
            message.hider_uid_list = data.hider_uid_list;
        }
        if (data.hunter_uid != null) {
            message.hunter_uid = data.hunter_uid;
        }
        return message;
    }
    toObject() {
        const data: {
            map_id?: number;
            is_record_score?: boolean;
            stage_type?: dependency_2.HideAndSeekStageType;
            battle_info_map?: {
                [key: number]: ReturnType<typeof dependency_1.HideAndSeekPlayerBattleInfo.prototype.toObject>;
            };
            hider_uid_list?: number[];
            hunter_uid?: number;
        } = {};
        if (this.map_id != null) {
            data.map_id = this.map_id;
        }
        if (this.is_record_score != null) {
            data.is_record_score = this.is_record_score;
        }
        if (this.stage_type != null) {
            data.stage_type = this.stage_type;
        }
        if (this.battle_info_map.size > 0) {
            data.battle_info_map = (Object.fromEntries)((Array.from)(this.battle_info_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.hider_uid_list != null) {
            data.hider_uid_list = this.hider_uid_list;
        }
        if (this.hunter_uid != null) {
            data.hunter_uid = this.hunter_uid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.map_id != 0)
            writer.writeUint32(8, this.map_id);
        if (this.is_record_score != false)
            writer.writeBool(3, this.is_record_score);
        if (this.stage_type != dependency_2.HideAndSeekStageType.HIDE_AND_SEEK_STAGE_TYPE_PREPARE)
            writer.writeEnum(7, this.stage_type);
        for (const [key, value] of this.battle_info_map) {
            writer.writeMessage(2, this.battle_info_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.hider_uid_list.length)
            writer.writePackedUint32(1, this.hider_uid_list);
        if (this.hunter_uid != 0)
            writer.writeUint32(10, this.hunter_uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HideAndSeekStageInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HideAndSeekStageInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.map_id = reader.readUint32();
                    break;
                case 3:
                    message.is_record_score = reader.readBool();
                    break;
                case 7:
                    message.stage_type = reader.readEnum();
                    break;
                case 2:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.battle_info_map as any, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.HideAndSeekPlayerBattleInfo.deserialize(reader));
                        return value;
                    }));
                    break;
                case 1:
                    message.hider_uid_list = reader.readPackedUint32();
                    break;
                case 10:
                    message.hunter_uid = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HideAndSeekStageInfo {
        return HideAndSeekStageInfo.deserialize(bytes);
    }
}
