/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetDungeonEntryExploreConditionRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./DungeonEntryCond";
import * as pb_1 from "google-protobuf";
export class GetDungeonEntryExploreConditionRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        dungeon_entry_cond?: dependency_1.DungeonEntryCond;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("dungeon_entry_cond" in data && data.dungeon_entry_cond != undefined) {
                this.dungeon_entry_cond = data.dungeon_entry_cond;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get dungeon_entry_cond() {
        return pb_1.Message.getWrapperField(this, dependency_1.DungeonEntryCond, 5) as dependency_1.DungeonEntryCond;
    }
    set dungeon_entry_cond(value: dependency_1.DungeonEntryCond) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_dungeon_entry_cond() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        dungeon_entry_cond?: ReturnType<typeof dependency_1.DungeonEntryCond.prototype.toObject>;
        retcode?: number;
    }): GetDungeonEntryExploreConditionRsp {
        const message = new GetDungeonEntryExploreConditionRsp({});
        if (data.dungeon_entry_cond != null) {
            message.dungeon_entry_cond = dependency_1.DungeonEntryCond.fromObject(data.dungeon_entry_cond);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            dungeon_entry_cond?: ReturnType<typeof dependency_1.DungeonEntryCond.prototype.toObject>;
            retcode?: number;
        } = {};
        if (this.dungeon_entry_cond != null) {
            data.dungeon_entry_cond = this.dungeon_entry_cond.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_dungeon_entry_cond)
            writer.writeMessage(5, this.dungeon_entry_cond, () => this.dungeon_entry_cond.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetDungeonEntryExploreConditionRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetDungeonEntryExploreConditionRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    reader.readMessage(message.dungeon_entry_cond, () => message.dungeon_entry_cond = dependency_1.DungeonEntryCond.deserialize(reader));
                    break;
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetDungeonEntryExploreConditionRsp {
        return GetDungeonEntryExploreConditionRsp.deserialize(bytes);
    }
}
