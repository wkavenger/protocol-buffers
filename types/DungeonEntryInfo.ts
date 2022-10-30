/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonEntryInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./WeeklyBossResinDiscountInfo";
import * as pb_1 from "google-protobuf";
export class DungeonEntryInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        end_time?: number;
        dungeon_id?: number;
        boss_chest_num?: number;
        max_boss_chest_num?: number;
        next_refresh_time?: number;
        weekly_boss_resin_discount_info?: dependency_1.WeeklyBossResinDiscountInfo;
        start_time?: number;
        is_passed?: boolean;
        left_times?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
            if ("dungeon_id" in data && data.dungeon_id != undefined) {
                this.dungeon_id = data.dungeon_id;
            }
            if ("boss_chest_num" in data && data.boss_chest_num != undefined) {
                this.boss_chest_num = data.boss_chest_num;
            }
            if ("max_boss_chest_num" in data && data.max_boss_chest_num != undefined) {
                this.max_boss_chest_num = data.max_boss_chest_num;
            }
            if ("next_refresh_time" in data && data.next_refresh_time != undefined) {
                this.next_refresh_time = data.next_refresh_time;
            }
            if ("weekly_boss_resin_discount_info" in data && data.weekly_boss_resin_discount_info != undefined) {
                this.weekly_boss_resin_discount_info = data.weekly_boss_resin_discount_info;
            }
            if ("start_time" in data && data.start_time != undefined) {
                this.start_time = data.start_time;
            }
            if ("is_passed" in data && data.is_passed != undefined) {
                this.is_passed = data.is_passed;
            }
            if ("left_times" in data && data.left_times != undefined) {
                this.left_times = data.left_times;
            }
        }
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set end_time(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get dungeon_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set dungeon_id(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get boss_chest_num() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set boss_chest_num(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get max_boss_chest_num() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set max_boss_chest_num(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get next_refresh_time() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set next_refresh_time(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get weekly_boss_resin_discount_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.WeeklyBossResinDiscountInfo, 9) as dependency_1.WeeklyBossResinDiscountInfo;
    }
    set weekly_boss_resin_discount_info(value: dependency_1.WeeklyBossResinDiscountInfo) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get has_weekly_boss_resin_discount_info() {
        return pb_1.Message.getField(this, 9) != null;
    }
    get start_time() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set start_time(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get is_passed() {
        return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
    }
    set is_passed(value: boolean) {
        pb_1.Message.setField(this, 4, value);
    }
    get left_times() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set left_times(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        end_time?: number;
        dungeon_id?: number;
        boss_chest_num?: number;
        max_boss_chest_num?: number;
        next_refresh_time?: number;
        weekly_boss_resin_discount_info?: ReturnType<typeof dependency_1.WeeklyBossResinDiscountInfo.prototype.toObject>;
        start_time?: number;
        is_passed?: boolean;
        left_times?: number;
    }): DungeonEntryInfo {
        const message = new DungeonEntryInfo({});
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        if (data.dungeon_id != null) {
            message.dungeon_id = data.dungeon_id;
        }
        if (data.boss_chest_num != null) {
            message.boss_chest_num = data.boss_chest_num;
        }
        if (data.max_boss_chest_num != null) {
            message.max_boss_chest_num = data.max_boss_chest_num;
        }
        if (data.next_refresh_time != null) {
            message.next_refresh_time = data.next_refresh_time;
        }
        if (data.weekly_boss_resin_discount_info != null) {
            message.weekly_boss_resin_discount_info = dependency_1.WeeklyBossResinDiscountInfo.fromObject(data.weekly_boss_resin_discount_info);
        }
        if (data.start_time != null) {
            message.start_time = data.start_time;
        }
        if (data.is_passed != null) {
            message.is_passed = data.is_passed;
        }
        if (data.left_times != null) {
            message.left_times = data.left_times;
        }
        return message;
    }
    toObject() {
        const data: {
            end_time?: number;
            dungeon_id?: number;
            boss_chest_num?: number;
            max_boss_chest_num?: number;
            next_refresh_time?: number;
            weekly_boss_resin_discount_info?: ReturnType<typeof dependency_1.WeeklyBossResinDiscountInfo.prototype.toObject>;
            start_time?: number;
            is_passed?: boolean;
            left_times?: number;
        } = {};
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        if (this.dungeon_id != null) {
            data.dungeon_id = this.dungeon_id;
        }
        if (this.boss_chest_num != null) {
            data.boss_chest_num = this.boss_chest_num;
        }
        if (this.max_boss_chest_num != null) {
            data.max_boss_chest_num = this.max_boss_chest_num;
        }
        if (this.next_refresh_time != null) {
            data.next_refresh_time = this.next_refresh_time;
        }
        if (this.weekly_boss_resin_discount_info != null) {
            data.weekly_boss_resin_discount_info = this.weekly_boss_resin_discount_info.toObject();
        }
        if (this.start_time != null) {
            data.start_time = this.start_time;
        }
        if (this.is_passed != null) {
            data.is_passed = this.is_passed;
        }
        if (this.left_times != null) {
            data.left_times = this.left_times;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.end_time != 0)
            writer.writeUint32(6, this.end_time);
        if (this.dungeon_id != 0)
            writer.writeUint32(5, this.dungeon_id);
        if (this.boss_chest_num != 0)
            writer.writeUint32(12, this.boss_chest_num);
        if (this.max_boss_chest_num != 0)
            writer.writeUint32(13, this.max_boss_chest_num);
        if (this.next_refresh_time != 0)
            writer.writeUint32(11, this.next_refresh_time);
        if (this.has_weekly_boss_resin_discount_info)
            writer.writeMessage(9, this.weekly_boss_resin_discount_info, () => this.weekly_boss_resin_discount_info.serialize(writer));
        if (this.start_time != 0)
            writer.writeUint32(15, this.start_time);
        if (this.is_passed != false)
            writer.writeBool(4, this.is_passed);
        if (this.left_times != 0)
            writer.writeUint32(7, this.left_times);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DungeonEntryInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonEntryInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.end_time = reader.readUint32();
                    break;
                case 5:
                    message.dungeon_id = reader.readUint32();
                    break;
                case 12:
                    message.boss_chest_num = reader.readUint32();
                    break;
                case 13:
                    message.max_boss_chest_num = reader.readUint32();
                    break;
                case 11:
                    message.next_refresh_time = reader.readUint32();
                    break;
                case 9:
                    reader.readMessage(message.weekly_boss_resin_discount_info, () => message.weekly_boss_resin_discount_info = dependency_1.WeeklyBossResinDiscountInfo.deserialize(reader));
                    break;
                case 15:
                    message.start_time = reader.readUint32();
                    break;
                case 4:
                    message.is_passed = reader.readBool();
                    break;
                case 7:
                    message.left_times = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DungeonEntryInfo {
        return DungeonEntryInfo.deserialize(bytes);
    }
}
