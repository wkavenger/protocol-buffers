/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./FleurFairChapterInfo";
import * as dependency_2 from "./FleurFairDungeonSectionInfo";
import * as dependency_3 from "./FleurFairMinigameInfo";
import * as pb_1 from "google-protobuf";
export class FleurFairActivityDetailInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_content_closed?: boolean;
        dungeon_punish_over_time?: number;
        content_close_time?: number;
        obtained_token?: number;
        chapter_info_list?: dependency_1.FleurFairChapterInfo[];
        minigame_info_map?: Map<number, dependency_3.FleurFairMinigameInfo>;
        dungeon_section_info_map?: Map<number, dependency_2.FleurFairDungeonSectionInfo>;
        is_dungeon_unlocked?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_content_closed" in data && data.is_content_closed != undefined) {
                this.is_content_closed = data.is_content_closed;
            }
            if ("dungeon_punish_over_time" in data && data.dungeon_punish_over_time != undefined) {
                this.dungeon_punish_over_time = data.dungeon_punish_over_time;
            }
            if ("content_close_time" in data && data.content_close_time != undefined) {
                this.content_close_time = data.content_close_time;
            }
            if ("obtained_token" in data && data.obtained_token != undefined) {
                this.obtained_token = data.obtained_token;
            }
            if ("chapter_info_list" in data && data.chapter_info_list != undefined) {
                this.chapter_info_list = data.chapter_info_list;
            }
            if ("minigame_info_map" in data && data.minigame_info_map != undefined) {
                this.minigame_info_map = data.minigame_info_map;
            }
            if ("dungeon_section_info_map" in data && data.dungeon_section_info_map != undefined) {
                this.dungeon_section_info_map = data.dungeon_section_info_map;
            }
            if ("is_dungeon_unlocked" in data && data.is_dungeon_unlocked != undefined) {
                this.is_dungeon_unlocked = data.is_dungeon_unlocked;
            }
        }
        if (!this.minigame_info_map)
            this.minigame_info_map = new Map();
        if (!this.dungeon_section_info_map)
            this.dungeon_section_info_map = new Map();
    }
    get is_content_closed() {
        return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
    }
    set is_content_closed(value: boolean) {
        pb_1.Message.setField(this, 4, value);
    }
    get dungeon_punish_over_time() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set dungeon_punish_over_time(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get content_close_time() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set content_close_time(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get obtained_token() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set obtained_token(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get chapter_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.FleurFairChapterInfo, 14) as dependency_1.FleurFairChapterInfo[];
    }
    set chapter_info_list(value: dependency_1.FleurFairChapterInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    get minigame_info_map() {
        return pb_1.Message.getField(this, 9) as any as Map<number, dependency_3.FleurFairMinigameInfo>;
    }
    set minigame_info_map(value: Map<number, dependency_3.FleurFairMinigameInfo>) {
        pb_1.Message.setField(this, 9, value as any);
    }
    get dungeon_section_info_map() {
        return pb_1.Message.getField(this, 3) as any as Map<number, dependency_2.FleurFairDungeonSectionInfo>;
    }
    set dungeon_section_info_map(value: Map<number, dependency_2.FleurFairDungeonSectionInfo>) {
        pb_1.Message.setField(this, 3, value as any);
    }
    get is_dungeon_unlocked() {
        return pb_1.Message.getFieldWithDefault(this, 11, false) as boolean;
    }
    set is_dungeon_unlocked(value: boolean) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        is_content_closed?: boolean;
        dungeon_punish_over_time?: number;
        content_close_time?: number;
        obtained_token?: number;
        chapter_info_list?: ReturnType<typeof dependency_1.FleurFairChapterInfo.prototype.toObject>[];
        minigame_info_map?: {
            [key: number]: ReturnType<typeof dependency_3.FleurFairMinigameInfo.prototype.toObject>;
        };
        dungeon_section_info_map?: {
            [key: number]: ReturnType<typeof dependency_2.FleurFairDungeonSectionInfo.prototype.toObject>;
        };
        is_dungeon_unlocked?: boolean;
    }): FleurFairActivityDetailInfo {
        const message = new FleurFairActivityDetailInfo({});
        if (data.is_content_closed != null) {
            message.is_content_closed = data.is_content_closed;
        }
        if (data.dungeon_punish_over_time != null) {
            message.dungeon_punish_over_time = data.dungeon_punish_over_time;
        }
        if (data.content_close_time != null) {
            message.content_close_time = data.content_close_time;
        }
        if (data.obtained_token != null) {
            message.obtained_token = data.obtained_token;
        }
        if (data.chapter_info_list != null) {
            message.chapter_info_list = data.chapter_info_list.map(item => dependency_1.FleurFairChapterInfo.fromObject(item));
        }
        if (typeof data.minigame_info_map == "object") {
            message.minigame_info_map = new Map(Object.entries(data.minigame_info_map).map(([key, value]) => [Number(key), dependency_3.FleurFairMinigameInfo.fromObject(value)]));
        }
        if (typeof data.dungeon_section_info_map == "object") {
            message.dungeon_section_info_map = new Map(Object.entries(data.dungeon_section_info_map).map(([key, value]) => [Number(key), dependency_2.FleurFairDungeonSectionInfo.fromObject(value)]));
        }
        if (data.is_dungeon_unlocked != null) {
            message.is_dungeon_unlocked = data.is_dungeon_unlocked;
        }
        return message;
    }
    toObject() {
        const data: {
            is_content_closed?: boolean;
            dungeon_punish_over_time?: number;
            content_close_time?: number;
            obtained_token?: number;
            chapter_info_list?: ReturnType<typeof dependency_1.FleurFairChapterInfo.prototype.toObject>[];
            minigame_info_map?: {
                [key: number]: ReturnType<typeof dependency_3.FleurFairMinigameInfo.prototype.toObject>;
            };
            dungeon_section_info_map?: {
                [key: number]: ReturnType<typeof dependency_2.FleurFairDungeonSectionInfo.prototype.toObject>;
            };
            is_dungeon_unlocked?: boolean;
        } = {};
        if (this.is_content_closed != null) {
            data.is_content_closed = this.is_content_closed;
        }
        if (this.dungeon_punish_over_time != null) {
            data.dungeon_punish_over_time = this.dungeon_punish_over_time;
        }
        if (this.content_close_time != null) {
            data.content_close_time = this.content_close_time;
        }
        if (this.obtained_token != null) {
            data.obtained_token = this.obtained_token;
        }
        if (this.chapter_info_list != null) {
            data.chapter_info_list = this.chapter_info_list.map((item: dependency_1.FleurFairChapterInfo) => item.toObject());
        }
        if (this.minigame_info_map.size > 0) {
            data.minigame_info_map = (Object.fromEntries)((Array.from)(this.minigame_info_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.dungeon_section_info_map.size > 0) {
            data.dungeon_section_info_map = (Object.fromEntries)((Array.from)(this.dungeon_section_info_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.is_dungeon_unlocked != null) {
            data.is_dungeon_unlocked = this.is_dungeon_unlocked;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_content_closed != false)
            writer.writeBool(4, this.is_content_closed);
        if (this.dungeon_punish_over_time != 0)
            writer.writeUint32(6, this.dungeon_punish_over_time);
        if (this.content_close_time != 0)
            writer.writeUint32(15, this.content_close_time);
        if (this.obtained_token != 0)
            writer.writeUint32(13, this.obtained_token);
        if (this.chapter_info_list.length)
            writer.writeRepeatedMessage(14, this.chapter_info_list, (item: dependency_1.FleurFairChapterInfo) => item.serialize(writer));
        for (const [key, value] of this.minigame_info_map) {
            writer.writeMessage(9, this.minigame_info_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        for (const [key, value] of this.dungeon_section_info_map) {
            writer.writeMessage(3, this.dungeon_section_info_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.is_dungeon_unlocked != false)
            writer.writeBool(11, this.is_dungeon_unlocked);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FleurFairActivityDetailInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.is_content_closed = reader.readBool();
                    break;
                case 6:
                    message.dungeon_punish_over_time = reader.readUint32();
                    break;
                case 15:
                    message.content_close_time = reader.readUint32();
                    break;
                case 13:
                    message.obtained_token = reader.readUint32();
                    break;
                case 14:
                    reader.readMessage(message.chapter_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.FleurFairChapterInfo.deserialize(reader), dependency_1.FleurFairChapterInfo));
                    break;
                case 9:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.minigame_info_map as any, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_3.FleurFairMinigameInfo.deserialize(reader));
                        return value;
                    }));
                    break;
                case 3:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.dungeon_section_info_map as any, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_2.FleurFairDungeonSectionInfo.deserialize(reader));
                        return value;
                    }));
                    break;
                case 11:
                    message.is_dungeon_unlocked = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FleurFairActivityDetailInfo {
        return FleurFairActivityDetailInfo.deserialize(bytes);
    }
}
