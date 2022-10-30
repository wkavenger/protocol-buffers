/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MatchPlayerInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./OnlinePlayerInfo";
import * as pb_1 from "google-protobuf";
export class MatchPlayerInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_agreed?: boolean;
        player_info?: dependency_1.OnlinePlayerInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_agreed" in data && data.is_agreed != undefined) {
                this.is_agreed = data.is_agreed;
            }
            if ("player_info" in data && data.player_info != undefined) {
                this.player_info = data.player_info;
            }
        }
    }
    get is_agreed() {
        return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
    }
    set is_agreed(value: boolean) {
        pb_1.Message.setField(this, 9, value);
    }
    get player_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.OnlinePlayerInfo, 2) as dependency_1.OnlinePlayerInfo;
    }
    set player_info(value: dependency_1.OnlinePlayerInfo) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_player_info() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data: {
        is_agreed?: boolean;
        player_info?: ReturnType<typeof dependency_1.OnlinePlayerInfo.prototype.toObject>;
    }): MatchPlayerInfo {
        const message = new MatchPlayerInfo({});
        if (data.is_agreed != null) {
            message.is_agreed = data.is_agreed;
        }
        if (data.player_info != null) {
            message.player_info = dependency_1.OnlinePlayerInfo.fromObject(data.player_info);
        }
        return message;
    }
    toObject() {
        const data: {
            is_agreed?: boolean;
            player_info?: ReturnType<typeof dependency_1.OnlinePlayerInfo.prototype.toObject>;
        } = {};
        if (this.is_agreed != null) {
            data.is_agreed = this.is_agreed;
        }
        if (this.player_info != null) {
            data.player_info = this.player_info.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_agreed != false)
            writer.writeBool(9, this.is_agreed);
        if (this.has_player_info)
            writer.writeMessage(2, this.player_info, () => this.player_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MatchPlayerInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MatchPlayerInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.is_agreed = reader.readBool();
                    break;
                case 2:
                    reader.readMessage(message.player_info, () => message.player_info = dependency_1.OnlinePlayerInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MatchPlayerInfo {
        return MatchPlayerInfo.deserialize(bytes);
    }
}
