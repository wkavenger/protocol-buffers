/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: RoguelikeDungeonSettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./RoguelikeSettleCoinInfo";
import * as pb_1 from "google-protobuf";
export class RoguelikeDungeonSettleInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        stage_id?: number;
        is_final_level?: boolean;
        finished_challenge_cell_num_map?: Map<number, dependency_1.RoguelikeSettleCoinInfo>;
        is_coin_c_reach_limit?: boolean;
        cur_level?: number;
        total_coin_b_num?: number;
        total_coin_c_num?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("is_final_level" in data && data.is_final_level != undefined) {
                this.is_final_level = data.is_final_level;
            }
            if ("finished_challenge_cell_num_map" in data && data.finished_challenge_cell_num_map != undefined) {
                this.finished_challenge_cell_num_map = data.finished_challenge_cell_num_map;
            }
            if ("is_coin_c_reach_limit" in data && data.is_coin_c_reach_limit != undefined) {
                this.is_coin_c_reach_limit = data.is_coin_c_reach_limit;
            }
            if ("cur_level" in data && data.cur_level != undefined) {
                this.cur_level = data.cur_level;
            }
            if ("total_coin_b_num" in data && data.total_coin_b_num != undefined) {
                this.total_coin_b_num = data.total_coin_b_num;
            }
            if ("total_coin_c_num" in data && data.total_coin_c_num != undefined) {
                this.total_coin_c_num = data.total_coin_c_num;
            }
        }
        if (!this.finished_challenge_cell_num_map)
            this.finished_challenge_cell_num_map = new Map();
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set stage_id(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get is_final_level() {
        return pb_1.Message.getFieldWithDefault(this, 15, false) as boolean;
    }
    set is_final_level(value: boolean) {
        pb_1.Message.setField(this, 15, value);
    }
    get finished_challenge_cell_num_map() {
        return pb_1.Message.getField(this, 3) as any as Map<number, dependency_1.RoguelikeSettleCoinInfo>;
    }
    set finished_challenge_cell_num_map(value: Map<number, dependency_1.RoguelikeSettleCoinInfo>) {
        pb_1.Message.setField(this, 3, value as any);
    }
    get is_coin_c_reach_limit() {
        return pb_1.Message.getFieldWithDefault(this, 13, false) as boolean;
    }
    set is_coin_c_reach_limit(value: boolean) {
        pb_1.Message.setField(this, 13, value);
    }
    get cur_level() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set cur_level(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get total_coin_b_num() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set total_coin_b_num(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get total_coin_c_num() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set total_coin_c_num(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        stage_id?: number;
        is_final_level?: boolean;
        finished_challenge_cell_num_map?: {
            [key: number]: ReturnType<typeof dependency_1.RoguelikeSettleCoinInfo.prototype.toObject>;
        };
        is_coin_c_reach_limit?: boolean;
        cur_level?: number;
        total_coin_b_num?: number;
        total_coin_c_num?: number;
    }): RoguelikeDungeonSettleInfo {
        const message = new RoguelikeDungeonSettleInfo({});
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.is_final_level != null) {
            message.is_final_level = data.is_final_level;
        }
        if (typeof data.finished_challenge_cell_num_map == "object") {
            message.finished_challenge_cell_num_map = new Map(Object.entries(data.finished_challenge_cell_num_map).map(([key, value]) => [Number(key), dependency_1.RoguelikeSettleCoinInfo.fromObject(value)]));
        }
        if (data.is_coin_c_reach_limit != null) {
            message.is_coin_c_reach_limit = data.is_coin_c_reach_limit;
        }
        if (data.cur_level != null) {
            message.cur_level = data.cur_level;
        }
        if (data.total_coin_b_num != null) {
            message.total_coin_b_num = data.total_coin_b_num;
        }
        if (data.total_coin_c_num != null) {
            message.total_coin_c_num = data.total_coin_c_num;
        }
        return message;
    }
    toObject() {
        const data: {
            stage_id?: number;
            is_final_level?: boolean;
            finished_challenge_cell_num_map?: {
                [key: number]: ReturnType<typeof dependency_1.RoguelikeSettleCoinInfo.prototype.toObject>;
            };
            is_coin_c_reach_limit?: boolean;
            cur_level?: number;
            total_coin_b_num?: number;
            total_coin_c_num?: number;
        } = {};
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.is_final_level != null) {
            data.is_final_level = this.is_final_level;
        }
        if (this.finished_challenge_cell_num_map.size > 0) {
            data.finished_challenge_cell_num_map = (Object.fromEntries)((Array.from)(this.finished_challenge_cell_num_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.is_coin_c_reach_limit != null) {
            data.is_coin_c_reach_limit = this.is_coin_c_reach_limit;
        }
        if (this.cur_level != null) {
            data.cur_level = this.cur_level;
        }
        if (this.total_coin_b_num != null) {
            data.total_coin_b_num = this.total_coin_b_num;
        }
        if (this.total_coin_c_num != null) {
            data.total_coin_c_num = this.total_coin_c_num;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_id != 0)
            writer.writeUint32(5, this.stage_id);
        if (this.is_final_level != false)
            writer.writeBool(15, this.is_final_level);
        for (const [key, value] of this.finished_challenge_cell_num_map) {
            writer.writeMessage(3, this.finished_challenge_cell_num_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.is_coin_c_reach_limit != false)
            writer.writeBool(13, this.is_coin_c_reach_limit);
        if (this.cur_level != 0)
            writer.writeUint32(9, this.cur_level);
        if (this.total_coin_b_num != 0)
            writer.writeUint32(6, this.total_coin_b_num);
        if (this.total_coin_c_num != 0)
            writer.writeUint32(10, this.total_coin_c_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RoguelikeDungeonSettleInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RoguelikeDungeonSettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.stage_id = reader.readUint32();
                    break;
                case 15:
                    message.is_final_level = reader.readBool();
                    break;
                case 3:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.finished_challenge_cell_num_map as any, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.RoguelikeSettleCoinInfo.deserialize(reader));
                        return value;
                    }));
                    break;
                case 13:
                    message.is_coin_c_reach_limit = reader.readBool();
                    break;
                case 9:
                    message.cur_level = reader.readUint32();
                    break;
                case 6:
                    message.total_coin_b_num = reader.readUint32();
                    break;
                case 10:
                    message.total_coin_c_num = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RoguelikeDungeonSettleInfo {
        return RoguelikeDungeonSettleInfo.deserialize(bytes);
    }
}
