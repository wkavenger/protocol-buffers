/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TowerAllDataRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./TowerCurLevelRecord";
import * as dependency_2 from "./TowerFloorRecord";
import * as dependency_3 from "./TowerMonthlyBrief";
import * as pb_1 from "google-protobuf";
export class TowerAllDataRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        tower_schedule_id?: number;
        daily_level_index?: number;
        skip_floor_granted_reward_item_map?: Map<number, number>;
        is_first_interact?: boolean;
        is_finished_entrance_floor?: boolean;
        tower_floor_record_list?: dependency_2.TowerFloorRecord[];
        daily_floor_id?: number;
        commemorative_reward_id?: number;
        last_schedule_monthly_brief?: dependency_3.TowerMonthlyBrief;
        next_schedule_change_time?: number;
        valid_tower_record_num?: number;
        skip_to_floor_index?: number;
        floor_open_time_map?: Map<number, number>;
        cur_level_record?: dependency_1.TowerCurLevelRecord;
        retcode?: number;
        schedule_start_time?: number;
        monthly_brief?: dependency_3.TowerMonthlyBrief;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("tower_schedule_id" in data && data.tower_schedule_id != undefined) {
                this.tower_schedule_id = data.tower_schedule_id;
            }
            if ("daily_level_index" in data && data.daily_level_index != undefined) {
                this.daily_level_index = data.daily_level_index;
            }
            if ("skip_floor_granted_reward_item_map" in data && data.skip_floor_granted_reward_item_map != undefined) {
                this.skip_floor_granted_reward_item_map = data.skip_floor_granted_reward_item_map;
            }
            if ("is_first_interact" in data && data.is_first_interact != undefined) {
                this.is_first_interact = data.is_first_interact;
            }
            if ("is_finished_entrance_floor" in data && data.is_finished_entrance_floor != undefined) {
                this.is_finished_entrance_floor = data.is_finished_entrance_floor;
            }
            if ("tower_floor_record_list" in data && data.tower_floor_record_list != undefined) {
                this.tower_floor_record_list = data.tower_floor_record_list;
            }
            if ("daily_floor_id" in data && data.daily_floor_id != undefined) {
                this.daily_floor_id = data.daily_floor_id;
            }
            if ("commemorative_reward_id" in data && data.commemorative_reward_id != undefined) {
                this.commemorative_reward_id = data.commemorative_reward_id;
            }
            if ("last_schedule_monthly_brief" in data && data.last_schedule_monthly_brief != undefined) {
                this.last_schedule_monthly_brief = data.last_schedule_monthly_brief;
            }
            if ("next_schedule_change_time" in data && data.next_schedule_change_time != undefined) {
                this.next_schedule_change_time = data.next_schedule_change_time;
            }
            if ("valid_tower_record_num" in data && data.valid_tower_record_num != undefined) {
                this.valid_tower_record_num = data.valid_tower_record_num;
            }
            if ("skip_to_floor_index" in data && data.skip_to_floor_index != undefined) {
                this.skip_to_floor_index = data.skip_to_floor_index;
            }
            if ("floor_open_time_map" in data && data.floor_open_time_map != undefined) {
                this.floor_open_time_map = data.floor_open_time_map;
            }
            if ("cur_level_record" in data && data.cur_level_record != undefined) {
                this.cur_level_record = data.cur_level_record;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("schedule_start_time" in data && data.schedule_start_time != undefined) {
                this.schedule_start_time = data.schedule_start_time;
            }
            if ("monthly_brief" in data && data.monthly_brief != undefined) {
                this.monthly_brief = data.monthly_brief;
            }
        }
        if (!this.skip_floor_granted_reward_item_map)
            this.skip_floor_granted_reward_item_map = new Map();
        if (!this.floor_open_time_map)
            this.floor_open_time_map = new Map();
    }
    get tower_schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set tower_schedule_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get daily_level_index() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set daily_level_index(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get skip_floor_granted_reward_item_map() {
        return pb_1.Message.getField(this, 12) as any as Map<number, number>;
    }
    set skip_floor_granted_reward_item_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 12, value as any);
    }
    get is_first_interact() {
        return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
    }
    set is_first_interact(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    get is_finished_entrance_floor() {
        return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
    }
    set is_finished_entrance_floor(value: boolean) {
        pb_1.Message.setField(this, 1, value);
    }
    get tower_floor_record_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.TowerFloorRecord, 5) as dependency_2.TowerFloorRecord[];
    }
    set tower_floor_record_list(value: dependency_2.TowerFloorRecord[]) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    get daily_floor_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set daily_floor_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get commemorative_reward_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set commemorative_reward_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get last_schedule_monthly_brief() {
        return pb_1.Message.getWrapperField(this, dependency_3.TowerMonthlyBrief, 1222) as dependency_3.TowerMonthlyBrief;
    }
    set last_schedule_monthly_brief(value: dependency_3.TowerMonthlyBrief) {
        pb_1.Message.setWrapperField(this, 1222, value);
    }
    get has_last_schedule_monthly_brief() {
        return pb_1.Message.getField(this, 1222) != null;
    }
    get next_schedule_change_time() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set next_schedule_change_time(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get valid_tower_record_num() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set valid_tower_record_num(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get skip_to_floor_index() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set skip_to_floor_index(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get floor_open_time_map() {
        return pb_1.Message.getField(this, 4) as any as Map<number, number>;
    }
    set floor_open_time_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 4, value as any);
    }
    get cur_level_record() {
        return pb_1.Message.getWrapperField(this, dependency_1.TowerCurLevelRecord, 15) as dependency_1.TowerCurLevelRecord;
    }
    set cur_level_record(value: dependency_1.TowerCurLevelRecord) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get has_cur_level_record() {
        return pb_1.Message.getField(this, 15) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get schedule_start_time() {
        return pb_1.Message.getFieldWithDefault(this, 914, 0) as number;
    }
    set schedule_start_time(value: number) {
        pb_1.Message.setField(this, 914, value);
    }
    get monthly_brief() {
        return pb_1.Message.getWrapperField(this, dependency_3.TowerMonthlyBrief, 14) as dependency_3.TowerMonthlyBrief;
    }
    set monthly_brief(value: dependency_3.TowerMonthlyBrief) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_monthly_brief() {
        return pb_1.Message.getField(this, 14) != null;
    }
    static fromObject(data: {
        tower_schedule_id?: number;
        daily_level_index?: number;
        skip_floor_granted_reward_item_map?: {
            [key: number]: number;
        };
        is_first_interact?: boolean;
        is_finished_entrance_floor?: boolean;
        tower_floor_record_list?: ReturnType<typeof dependency_2.TowerFloorRecord.prototype.toObject>[];
        daily_floor_id?: number;
        commemorative_reward_id?: number;
        last_schedule_monthly_brief?: ReturnType<typeof dependency_3.TowerMonthlyBrief.prototype.toObject>;
        next_schedule_change_time?: number;
        valid_tower_record_num?: number;
        skip_to_floor_index?: number;
        floor_open_time_map?: {
            [key: number]: number;
        };
        cur_level_record?: ReturnType<typeof dependency_1.TowerCurLevelRecord.prototype.toObject>;
        retcode?: number;
        schedule_start_time?: number;
        monthly_brief?: ReturnType<typeof dependency_3.TowerMonthlyBrief.prototype.toObject>;
    }): TowerAllDataRsp {
        const message = new TowerAllDataRsp({});
        if (data.tower_schedule_id != null) {
            message.tower_schedule_id = data.tower_schedule_id;
        }
        if (data.daily_level_index != null) {
            message.daily_level_index = data.daily_level_index;
        }
        if (typeof data.skip_floor_granted_reward_item_map == "object") {
            message.skip_floor_granted_reward_item_map = new Map(Object.entries(data.skip_floor_granted_reward_item_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.is_first_interact != null) {
            message.is_first_interact = data.is_first_interact;
        }
        if (data.is_finished_entrance_floor != null) {
            message.is_finished_entrance_floor = data.is_finished_entrance_floor;
        }
        if (data.tower_floor_record_list != null) {
            message.tower_floor_record_list = data.tower_floor_record_list.map(item => dependency_2.TowerFloorRecord.fromObject(item));
        }
        if (data.daily_floor_id != null) {
            message.daily_floor_id = data.daily_floor_id;
        }
        if (data.commemorative_reward_id != null) {
            message.commemorative_reward_id = data.commemorative_reward_id;
        }
        if (data.last_schedule_monthly_brief != null) {
            message.last_schedule_monthly_brief = dependency_3.TowerMonthlyBrief.fromObject(data.last_schedule_monthly_brief);
        }
        if (data.next_schedule_change_time != null) {
            message.next_schedule_change_time = data.next_schedule_change_time;
        }
        if (data.valid_tower_record_num != null) {
            message.valid_tower_record_num = data.valid_tower_record_num;
        }
        if (data.skip_to_floor_index != null) {
            message.skip_to_floor_index = data.skip_to_floor_index;
        }
        if (typeof data.floor_open_time_map == "object") {
            message.floor_open_time_map = new Map(Object.entries(data.floor_open_time_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.cur_level_record != null) {
            message.cur_level_record = dependency_1.TowerCurLevelRecord.fromObject(data.cur_level_record);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.schedule_start_time != null) {
            message.schedule_start_time = data.schedule_start_time;
        }
        if (data.monthly_brief != null) {
            message.monthly_brief = dependency_3.TowerMonthlyBrief.fromObject(data.monthly_brief);
        }
        return message;
    }
    toObject() {
        const data: {
            tower_schedule_id?: number;
            daily_level_index?: number;
            skip_floor_granted_reward_item_map?: {
                [key: number]: number;
            };
            is_first_interact?: boolean;
            is_finished_entrance_floor?: boolean;
            tower_floor_record_list?: ReturnType<typeof dependency_2.TowerFloorRecord.prototype.toObject>[];
            daily_floor_id?: number;
            commemorative_reward_id?: number;
            last_schedule_monthly_brief?: ReturnType<typeof dependency_3.TowerMonthlyBrief.prototype.toObject>;
            next_schedule_change_time?: number;
            valid_tower_record_num?: number;
            skip_to_floor_index?: number;
            floor_open_time_map?: {
                [key: number]: number;
            };
            cur_level_record?: ReturnType<typeof dependency_1.TowerCurLevelRecord.prototype.toObject>;
            retcode?: number;
            schedule_start_time?: number;
            monthly_brief?: ReturnType<typeof dependency_3.TowerMonthlyBrief.prototype.toObject>;
        } = {};
        if (this.tower_schedule_id != null) {
            data.tower_schedule_id = this.tower_schedule_id;
        }
        if (this.daily_level_index != null) {
            data.daily_level_index = this.daily_level_index;
        }
        if (this.skip_floor_granted_reward_item_map.size > 0) {
            data.skip_floor_granted_reward_item_map = (Object.fromEntries)(this.skip_floor_granted_reward_item_map);
        }
        if (this.is_first_interact != null) {
            data.is_first_interact = this.is_first_interact;
        }
        if (this.is_finished_entrance_floor != null) {
            data.is_finished_entrance_floor = this.is_finished_entrance_floor;
        }
        if (this.tower_floor_record_list != null) {
            data.tower_floor_record_list = this.tower_floor_record_list.map((item: dependency_2.TowerFloorRecord) => item.toObject());
        }
        if (this.daily_floor_id != null) {
            data.daily_floor_id = this.daily_floor_id;
        }
        if (this.commemorative_reward_id != null) {
            data.commemorative_reward_id = this.commemorative_reward_id;
        }
        if (this.last_schedule_monthly_brief != null) {
            data.last_schedule_monthly_brief = this.last_schedule_monthly_brief.toObject();
        }
        if (this.next_schedule_change_time != null) {
            data.next_schedule_change_time = this.next_schedule_change_time;
        }
        if (this.valid_tower_record_num != null) {
            data.valid_tower_record_num = this.valid_tower_record_num;
        }
        if (this.skip_to_floor_index != null) {
            data.skip_to_floor_index = this.skip_to_floor_index;
        }
        if (this.floor_open_time_map.size > 0) {
            data.floor_open_time_map = (Object.fromEntries)(this.floor_open_time_map);
        }
        if (this.cur_level_record != null) {
            data.cur_level_record = this.cur_level_record.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.schedule_start_time != null) {
            data.schedule_start_time = this.schedule_start_time;
        }
        if (this.monthly_brief != null) {
            data.monthly_brief = this.monthly_brief.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.tower_schedule_id != 0)
            writer.writeUint32(10, this.tower_schedule_id);
        if (this.daily_level_index != 0)
            writer.writeUint32(9, this.daily_level_index);
        for (const [key, value] of this.skip_floor_granted_reward_item_map) {
            writer.writeMessage(12, this.skip_floor_granted_reward_item_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (this.is_first_interact != false)
            writer.writeBool(3, this.is_first_interact);
        if (this.is_finished_entrance_floor != false)
            writer.writeBool(1, this.is_finished_entrance_floor);
        if (this.tower_floor_record_list.length)
            writer.writeRepeatedMessage(5, this.tower_floor_record_list, (item: dependency_2.TowerFloorRecord) => item.serialize(writer));
        if (this.daily_floor_id != 0)
            writer.writeUint32(11, this.daily_floor_id);
        if (this.commemorative_reward_id != 0)
            writer.writeUint32(13, this.commemorative_reward_id);
        if (this.has_last_schedule_monthly_brief)
            writer.writeMessage(1222, this.last_schedule_monthly_brief, () => this.last_schedule_monthly_brief.serialize(writer));
        if (this.next_schedule_change_time != 0)
            writer.writeUint32(6, this.next_schedule_change_time);
        if (this.valid_tower_record_num != 0)
            writer.writeUint32(7, this.valid_tower_record_num);
        if (this.skip_to_floor_index != 0)
            writer.writeUint32(2, this.skip_to_floor_index);
        for (const [key, value] of this.floor_open_time_map) {
            writer.writeMessage(4, this.floor_open_time_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (this.has_cur_level_record)
            writer.writeMessage(15, this.cur_level_record, () => this.cur_level_record.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(8, this.retcode);
        if (this.schedule_start_time != 0)
            writer.writeUint32(914, this.schedule_start_time);
        if (this.has_monthly_brief)
            writer.writeMessage(14, this.monthly_brief, () => this.monthly_brief.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TowerAllDataRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TowerAllDataRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.tower_schedule_id = reader.readUint32();
                    break;
                case 9:
                    message.daily_level_index = reader.readUint32();
                    break;
                case 12:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.skip_floor_granted_reward_item_map as any, reader, reader.readUint32, reader.readUint32));
                    break;
                case 3:
                    message.is_first_interact = reader.readBool();
                    break;
                case 1:
                    message.is_finished_entrance_floor = reader.readBool();
                    break;
                case 5:
                    reader.readMessage(message.tower_floor_record_list, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_2.TowerFloorRecord.deserialize(reader), dependency_2.TowerFloorRecord));
                    break;
                case 11:
                    message.daily_floor_id = reader.readUint32();
                    break;
                case 13:
                    message.commemorative_reward_id = reader.readUint32();
                    break;
                case 1222:
                    reader.readMessage(message.last_schedule_monthly_brief, () => message.last_schedule_monthly_brief = dependency_3.TowerMonthlyBrief.deserialize(reader));
                    break;
                case 6:
                    message.next_schedule_change_time = reader.readUint32();
                    break;
                case 7:
                    message.valid_tower_record_num = reader.readUint32();
                    break;
                case 2:
                    message.skip_to_floor_index = reader.readUint32();
                    break;
                case 4:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.floor_open_time_map as any, reader, reader.readUint32, reader.readUint32));
                    break;
                case 15:
                    reader.readMessage(message.cur_level_record, () => message.cur_level_record = dependency_1.TowerCurLevelRecord.deserialize(reader));
                    break;
                case 8:
                    message.retcode = reader.readInt32();
                    break;
                case 914:
                    message.schedule_start_time = reader.readUint32();
                    break;
                case 14:
                    reader.readMessage(message.monthly_brief, () => message.monthly_brief = dependency_3.TowerMonthlyBrief.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TowerAllDataRsp {
        return TowerAllDataRsp.deserialize(bytes);
    }
}
