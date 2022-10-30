/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonCandidateTeamInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./DungeonCandidateTeamAvatar";
import * as dependency_2 from "./DungeonCandidateTeamPlayerState";
import * as pb_1 from "google-protobuf";
export class DungeonCandidateTeamInfoNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        player_state_map?: Map<number, dependency_2.DungeonCandidateTeamPlayerState>;
        dungeon_id?: number;
        ready_player_uid?: number[];
        match_type?: number;
        avatar_list?: dependency_1.DungeonCandidateTeamAvatar[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [13, 4], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("player_state_map" in data && data.player_state_map != undefined) {
                this.player_state_map = data.player_state_map;
            }
            if ("dungeon_id" in data && data.dungeon_id != undefined) {
                this.dungeon_id = data.dungeon_id;
            }
            if ("ready_player_uid" in data && data.ready_player_uid != undefined) {
                this.ready_player_uid = data.ready_player_uid;
            }
            if ("match_type" in data && data.match_type != undefined) {
                this.match_type = data.match_type;
            }
            if ("avatar_list" in data && data.avatar_list != undefined) {
                this.avatar_list = data.avatar_list;
            }
        }
        if (!this.player_state_map)
            this.player_state_map = new Map();
    }
    get player_state_map() {
        return pb_1.Message.getField(this, 10) as any as Map<number, dependency_2.DungeonCandidateTeamPlayerState>;
    }
    set player_state_map(value: Map<number, dependency_2.DungeonCandidateTeamPlayerState>) {
        pb_1.Message.setField(this, 10, value as any);
    }
    get dungeon_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set dungeon_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get ready_player_uid() {
        return pb_1.Message.getFieldWithDefault(this, 13, []) as number[];
    }
    set ready_player_uid(value: number[]) {
        pb_1.Message.setField(this, 13, value);
    }
    get match_type() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set match_type(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get avatar_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.DungeonCandidateTeamAvatar, 4) as dependency_1.DungeonCandidateTeamAvatar[];
    }
    set avatar_list(value: dependency_1.DungeonCandidateTeamAvatar[]) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    static fromObject(data: {
        player_state_map?: {
            [key: number]: dependency_2.DungeonCandidateTeamPlayerState;
        };
        dungeon_id?: number;
        ready_player_uid?: number[];
        match_type?: number;
        avatar_list?: ReturnType<typeof dependency_1.DungeonCandidateTeamAvatar.prototype.toObject>[];
    }): DungeonCandidateTeamInfoNotify {
        const message = new DungeonCandidateTeamInfoNotify({});
        if (typeof data.player_state_map == "object") {
            message.player_state_map = new Map(Object.entries(data.player_state_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.dungeon_id != null) {
            message.dungeon_id = data.dungeon_id;
        }
        if (data.ready_player_uid != null) {
            message.ready_player_uid = data.ready_player_uid;
        }
        if (data.match_type != null) {
            message.match_type = data.match_type;
        }
        if (data.avatar_list != null) {
            message.avatar_list = data.avatar_list.map(item => dependency_1.DungeonCandidateTeamAvatar.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            player_state_map?: {
                [key: number]: dependency_2.DungeonCandidateTeamPlayerState;
            };
            dungeon_id?: number;
            ready_player_uid?: number[];
            match_type?: number;
            avatar_list?: ReturnType<typeof dependency_1.DungeonCandidateTeamAvatar.prototype.toObject>[];
        } = {};
        if (this.player_state_map.size > 0) {
            data.player_state_map = (Object.fromEntries)(this.player_state_map);
        }
        if (this.dungeon_id != null) {
            data.dungeon_id = this.dungeon_id;
        }
        if (this.ready_player_uid != null) {
            data.ready_player_uid = this.ready_player_uid;
        }
        if (this.match_type != null) {
            data.match_type = this.match_type;
        }
        if (this.avatar_list != null) {
            data.avatar_list = this.avatar_list.map((item: dependency_1.DungeonCandidateTeamAvatar) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.player_state_map) {
            writer.writeMessage(10, this.player_state_map, () => {
                writer.writeUint32(1, key);
                writer.writeEnum(2, value);
            });
        }
        if (this.dungeon_id != 0)
            writer.writeUint32(9, this.dungeon_id);
        if (this.ready_player_uid.length)
            writer.writePackedUint32(13, this.ready_player_uid);
        if (this.match_type != 0)
            writer.writeUint32(2, this.match_type);
        if (this.avatar_list.length)
            writer.writeRepeatedMessage(4, this.avatar_list, (item: dependency_1.DungeonCandidateTeamAvatar) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DungeonCandidateTeamInfoNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonCandidateTeamInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.player_state_map as any, reader, reader.readUint32, reader.readEnum));
                    break;
                case 9:
                    message.dungeon_id = reader.readUint32();
                    break;
                case 13:
                    message.ready_player_uid = reader.readPackedUint32();
                    break;
                case 2:
                    message.match_type = reader.readUint32();
                    break;
                case 4:
                    reader.readMessage(message.avatar_list, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_1.DungeonCandidateTeamAvatar.deserialize(reader), dependency_1.DungeonCandidateTeamAvatar));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DungeonCandidateTeamInfoNotify {
        return DungeonCandidateTeamInfoNotify.deserialize(bytes);
    }
}
