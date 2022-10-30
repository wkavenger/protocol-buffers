/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BattlePassMission.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class BattlePassMission extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        cur_progress?: number;
        mission_status?: BattlePassMission.MissionStatus;
        mission_id?: number;
        reward_battle_pass_point?: number;
        mission_type?: number;
        total_progress?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cur_progress" in data && data.cur_progress != undefined) {
                this.cur_progress = data.cur_progress;
            }
            if ("mission_status" in data && data.mission_status != undefined) {
                this.mission_status = data.mission_status;
            }
            if ("mission_id" in data && data.mission_id != undefined) {
                this.mission_id = data.mission_id;
            }
            if ("reward_battle_pass_point" in data && data.reward_battle_pass_point != undefined) {
                this.reward_battle_pass_point = data.reward_battle_pass_point;
            }
            if ("mission_type" in data && data.mission_type != undefined) {
                this.mission_type = data.mission_type;
            }
            if ("total_progress" in data && data.total_progress != undefined) {
                this.total_progress = data.total_progress;
            }
        }
    }
    get cur_progress() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set cur_progress(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get mission_status() {
        return pb_1.Message.getFieldWithDefault(this, 15, BattlePassMission.MissionStatus.MISSION_STATUS_INVALID) as BattlePassMission.MissionStatus;
    }
    set mission_status(value: BattlePassMission.MissionStatus) {
        pb_1.Message.setField(this, 15, value);
    }
    get mission_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set mission_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get reward_battle_pass_point() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set reward_battle_pass_point(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get mission_type() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set mission_type(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get total_progress() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set total_progress(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        cur_progress?: number;
        mission_status?: BattlePassMission.MissionStatus;
        mission_id?: number;
        reward_battle_pass_point?: number;
        mission_type?: number;
        total_progress?: number;
    }): BattlePassMission {
        const message = new BattlePassMission({});
        if (data.cur_progress != null) {
            message.cur_progress = data.cur_progress;
        }
        if (data.mission_status != null) {
            message.mission_status = data.mission_status;
        }
        if (data.mission_id != null) {
            message.mission_id = data.mission_id;
        }
        if (data.reward_battle_pass_point != null) {
            message.reward_battle_pass_point = data.reward_battle_pass_point;
        }
        if (data.mission_type != null) {
            message.mission_type = data.mission_type;
        }
        if (data.total_progress != null) {
            message.total_progress = data.total_progress;
        }
        return message;
    }
    toObject() {
        const data: {
            cur_progress?: number;
            mission_status?: BattlePassMission.MissionStatus;
            mission_id?: number;
            reward_battle_pass_point?: number;
            mission_type?: number;
            total_progress?: number;
        } = {};
        if (this.cur_progress != null) {
            data.cur_progress = this.cur_progress;
        }
        if (this.mission_status != null) {
            data.mission_status = this.mission_status;
        }
        if (this.mission_id != null) {
            data.mission_id = this.mission_id;
        }
        if (this.reward_battle_pass_point != null) {
            data.reward_battle_pass_point = this.reward_battle_pass_point;
        }
        if (this.mission_type != null) {
            data.mission_type = this.mission_type;
        }
        if (this.total_progress != null) {
            data.total_progress = this.total_progress;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cur_progress != 0)
            writer.writeUint32(13, this.cur_progress);
        if (this.mission_status != BattlePassMission.MissionStatus.MISSION_STATUS_INVALID)
            writer.writeEnum(15, this.mission_status);
        if (this.mission_id != 0)
            writer.writeUint32(11, this.mission_id);
        if (this.reward_battle_pass_point != 0)
            writer.writeUint32(3, this.reward_battle_pass_point);
        if (this.mission_type != 0)
            writer.writeUint32(12, this.mission_type);
        if (this.total_progress != 0)
            writer.writeUint32(6, this.total_progress);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BattlePassMission {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BattlePassMission();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.cur_progress = reader.readUint32();
                    break;
                case 15:
                    message.mission_status = reader.readEnum();
                    break;
                case 11:
                    message.mission_id = reader.readUint32();
                    break;
                case 3:
                    message.reward_battle_pass_point = reader.readUint32();
                    break;
                case 12:
                    message.mission_type = reader.readUint32();
                    break;
                case 6:
                    message.total_progress = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): BattlePassMission {
        return BattlePassMission.deserialize(bytes);
    }
}
export namespace BattlePassMission {
    export enum MissionStatus {
        MISSION_STATUS_INVALID = 0,
        MISSION_STATUS_UNFINISHED = 1,
        MISSION_STATUS_FINISHED = 2,
        MISSION_STATUS_POINT_TAKEN = 3
    }
}
