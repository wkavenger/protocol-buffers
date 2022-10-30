/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BalloonSettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./OnlinePlayerInfo";
import * as pb_1 from "google-protobuf";
export class BalloonSettleInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        uid?: number;
        shoot_count?: number;
        max_combo?: number;
        final_score?: number;
        player_info?: dependency_1.OnlinePlayerInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
            if ("shoot_count" in data && data.shoot_count != undefined) {
                this.shoot_count = data.shoot_count;
            }
            if ("max_combo" in data && data.max_combo != undefined) {
                this.max_combo = data.max_combo;
            }
            if ("final_score" in data && data.final_score != undefined) {
                this.final_score = data.final_score;
            }
            if ("player_info" in data && data.player_info != undefined) {
                this.player_info = data.player_info;
            }
        }
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set uid(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get shoot_count() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set shoot_count(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get max_combo() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set max_combo(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get final_score() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set final_score(value: number) {
        pb_1.Message.setField(this, 7, value);
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
        uid?: number;
        shoot_count?: number;
        max_combo?: number;
        final_score?: number;
        player_info?: ReturnType<typeof dependency_1.OnlinePlayerInfo.prototype.toObject>;
    }): BalloonSettleInfo {
        const message = new BalloonSettleInfo({});
        if (data.uid != null) {
            message.uid = data.uid;
        }
        if (data.shoot_count != null) {
            message.shoot_count = data.shoot_count;
        }
        if (data.max_combo != null) {
            message.max_combo = data.max_combo;
        }
        if (data.final_score != null) {
            message.final_score = data.final_score;
        }
        if (data.player_info != null) {
            message.player_info = dependency_1.OnlinePlayerInfo.fromObject(data.player_info);
        }
        return message;
    }
    toObject() {
        const data: {
            uid?: number;
            shoot_count?: number;
            max_combo?: number;
            final_score?: number;
            player_info?: ReturnType<typeof dependency_1.OnlinePlayerInfo.prototype.toObject>;
        } = {};
        if (this.uid != null) {
            data.uid = this.uid;
        }
        if (this.shoot_count != null) {
            data.shoot_count = this.shoot_count;
        }
        if (this.max_combo != null) {
            data.max_combo = this.max_combo;
        }
        if (this.final_score != null) {
            data.final_score = this.final_score;
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
        if (this.uid != 0)
            writer.writeUint32(3, this.uid);
        if (this.shoot_count != 0)
            writer.writeUint32(12, this.shoot_count);
        if (this.max_combo != 0)
            writer.writeUint32(9, this.max_combo);
        if (this.final_score != 0)
            writer.writeUint32(7, this.final_score);
        if (this.has_player_info)
            writer.writeMessage(2, this.player_info, () => this.player_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BalloonSettleInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BalloonSettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.uid = reader.readUint32();
                    break;
                case 12:
                    message.shoot_count = reader.readUint32();
                    break;
                case 9:
                    message.max_combo = reader.readUint32();
                    break;
                case 7:
                    message.final_score = reader.readUint32();
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
    static deserializeBinary(bytes: Uint8Array): BalloonSettleInfo {
        return BalloonSettleInfo.deserialize(bytes);
    }
}
