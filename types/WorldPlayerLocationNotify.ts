/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WorldPlayerLocationNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PlayerLocationInfo";
import * as dependency_2 from "./PlayerWorldLocationInfo";
import * as pb_1 from "google-protobuf";
export class WorldPlayerLocationNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        player_world_loc_list?: dependency_2.PlayerWorldLocationInfo[];
        player_loc_list?: dependency_1.PlayerLocationInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8, 15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("player_world_loc_list" in data && data.player_world_loc_list != undefined) {
                this.player_world_loc_list = data.player_world_loc_list;
            }
            if ("player_loc_list" in data && data.player_loc_list != undefined) {
                this.player_loc_list = data.player_loc_list;
            }
        }
    }
    get player_world_loc_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.PlayerWorldLocationInfo, 8) as dependency_2.PlayerWorldLocationInfo[];
    }
    set player_world_loc_list(value: dependency_2.PlayerWorldLocationInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get player_loc_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PlayerLocationInfo, 15) as dependency_1.PlayerLocationInfo[];
    }
    set player_loc_list(value: dependency_1.PlayerLocationInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    static fromObject(data: {
        player_world_loc_list?: ReturnType<typeof dependency_2.PlayerWorldLocationInfo.prototype.toObject>[];
        player_loc_list?: ReturnType<typeof dependency_1.PlayerLocationInfo.prototype.toObject>[];
    }): WorldPlayerLocationNotify {
        const message = new WorldPlayerLocationNotify({});
        if (data.player_world_loc_list != null) {
            message.player_world_loc_list = data.player_world_loc_list.map(item => dependency_2.PlayerWorldLocationInfo.fromObject(item));
        }
        if (data.player_loc_list != null) {
            message.player_loc_list = data.player_loc_list.map(item => dependency_1.PlayerLocationInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            player_world_loc_list?: ReturnType<typeof dependency_2.PlayerWorldLocationInfo.prototype.toObject>[];
            player_loc_list?: ReturnType<typeof dependency_1.PlayerLocationInfo.prototype.toObject>[];
        } = {};
        if (this.player_world_loc_list != null) {
            data.player_world_loc_list = this.player_world_loc_list.map((item: dependency_2.PlayerWorldLocationInfo) => item.toObject());
        }
        if (this.player_loc_list != null) {
            data.player_loc_list = this.player_loc_list.map((item: dependency_1.PlayerLocationInfo) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.player_world_loc_list.length)
            writer.writeRepeatedMessage(8, this.player_world_loc_list, (item: dependency_2.PlayerWorldLocationInfo) => item.serialize(writer));
        if (this.player_loc_list.length)
            writer.writeRepeatedMessage(15, this.player_loc_list, (item: dependency_1.PlayerLocationInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WorldPlayerLocationNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WorldPlayerLocationNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    reader.readMessage(message.player_world_loc_list, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_2.PlayerWorldLocationInfo.deserialize(reader), dependency_2.PlayerWorldLocationInfo));
                    break;
                case 15:
                    reader.readMessage(message.player_loc_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.PlayerLocationInfo.deserialize(reader), dependency_1.PlayerLocationInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): WorldPlayerLocationNotify {
        return WorldPlayerLocationNotify.deserialize(bytes);
    }
}
