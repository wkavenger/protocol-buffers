/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerWorldLocationInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PlayerLocationInfo";
import * as pb_1 from "google-protobuf";
export class PlayerWorldLocationInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        scene_id?: number;
        player_loc?: dependency_1.PlayerLocationInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("player_loc" in data && data.player_loc != undefined) {
                this.player_loc = data.player_loc;
            }
        }
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set scene_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get player_loc() {
        return pb_1.Message.getWrapperField(this, dependency_1.PlayerLocationInfo, 12) as dependency_1.PlayerLocationInfo;
    }
    set player_loc(value: dependency_1.PlayerLocationInfo) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_player_loc() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data: {
        scene_id?: number;
        player_loc?: ReturnType<typeof dependency_1.PlayerLocationInfo.prototype.toObject>;
    }): PlayerWorldLocationInfo {
        const message = new PlayerWorldLocationInfo({});
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.player_loc != null) {
            message.player_loc = dependency_1.PlayerLocationInfo.fromObject(data.player_loc);
        }
        return message;
    }
    toObject() {
        const data: {
            scene_id?: number;
            player_loc?: ReturnType<typeof dependency_1.PlayerLocationInfo.prototype.toObject>;
        } = {};
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.player_loc != null) {
            data.player_loc = this.player_loc.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scene_id != 0)
            writer.writeUint32(1, this.scene_id);
        if (this.has_player_loc)
            writer.writeMessage(12, this.player_loc, () => this.player_loc.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerWorldLocationInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerWorldLocationInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.scene_id = reader.readUint32();
                    break;
                case 12:
                    reader.readMessage(message.player_loc, () => message.player_loc = dependency_1.PlayerLocationInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerWorldLocationInfo {
        return PlayerWorldLocationInfo.deserialize(bytes);
    }
}
