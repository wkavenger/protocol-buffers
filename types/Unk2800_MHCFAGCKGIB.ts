/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2800_MHCFAGCKGIB.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./DungeonEntryInfo";
import * as pb_1 from "google-protobuf";
export class Unk2800_MHCFAGCKGIB extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        scene_id?: number;
        point_id?: number;
        dungeon_entry_list?: dependency_1.DungeonEntryInfo[];
        recommend_dungeon_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("point_id" in data && data.point_id != undefined) {
                this.point_id = data.point_id;
            }
            if ("dungeon_entry_list" in data && data.dungeon_entry_list != undefined) {
                this.dungeon_entry_list = data.dungeon_entry_list;
            }
            if ("recommend_dungeon_id" in data && data.recommend_dungeon_id != undefined) {
                this.recommend_dungeon_id = data.recommend_dungeon_id;
            }
        }
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set scene_id(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get point_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set point_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get dungeon_entry_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.DungeonEntryInfo, 1) as dependency_1.DungeonEntryInfo[];
    }
    set dungeon_entry_list(value: dependency_1.DungeonEntryInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    get recommend_dungeon_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set recommend_dungeon_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        scene_id?: number;
        point_id?: number;
        dungeon_entry_list?: ReturnType<typeof dependency_1.DungeonEntryInfo.prototype.toObject>[];
        recommend_dungeon_id?: number;
    }): Unk2800_MHCFAGCKGIB {
        const message = new Unk2800_MHCFAGCKGIB({});
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.point_id != null) {
            message.point_id = data.point_id;
        }
        if (data.dungeon_entry_list != null) {
            message.dungeon_entry_list = data.dungeon_entry_list.map(item => dependency_1.DungeonEntryInfo.fromObject(item));
        }
        if (data.recommend_dungeon_id != null) {
            message.recommend_dungeon_id = data.recommend_dungeon_id;
        }
        return message;
    }
    toObject() {
        const data: {
            scene_id?: number;
            point_id?: number;
            dungeon_entry_list?: ReturnType<typeof dependency_1.DungeonEntryInfo.prototype.toObject>[];
            recommend_dungeon_id?: number;
        } = {};
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.point_id != null) {
            data.point_id = this.point_id;
        }
        if (this.dungeon_entry_list != null) {
            data.dungeon_entry_list = this.dungeon_entry_list.map((item: dependency_1.DungeonEntryInfo) => item.toObject());
        }
        if (this.recommend_dungeon_id != null) {
            data.recommend_dungeon_id = this.recommend_dungeon_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scene_id != 0)
            writer.writeUint32(12, this.scene_id);
        if (this.point_id != 0)
            writer.writeUint32(6, this.point_id);
        if (this.dungeon_entry_list.length)
            writer.writeRepeatedMessage(1, this.dungeon_entry_list, (item: dependency_1.DungeonEntryInfo) => item.serialize(writer));
        if (this.recommend_dungeon_id != 0)
            writer.writeUint32(8, this.recommend_dungeon_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Unk2800_MHCFAGCKGIB {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2800_MHCFAGCKGIB();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.scene_id = reader.readUint32();
                    break;
                case 6:
                    message.point_id = reader.readUint32();
                    break;
                case 1:
                    reader.readMessage(message.dungeon_entry_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.DungeonEntryInfo.deserialize(reader), dependency_1.DungeonEntryInfo));
                    break;
                case 8:
                    message.recommend_dungeon_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Unk2800_MHCFAGCKGIB {
        return Unk2800_MHCFAGCKGIB.deserialize(bytes);
    }
}
