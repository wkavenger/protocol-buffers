/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChannelerSlabLoopDungeonTakeScoreRewardRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ChannelerSlabLoopDungeonTakeScoreRewardRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        reward_index?: number;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("reward_index" in data && data.reward_index != undefined) {
                this.reward_index = data.reward_index;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get reward_index() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set reward_index(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        reward_index?: number;
        retcode?: number;
    }): ChannelerSlabLoopDungeonTakeScoreRewardRsp {
        const message = new ChannelerSlabLoopDungeonTakeScoreRewardRsp({});
        if (data.reward_index != null) {
            message.reward_index = data.reward_index;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            reward_index?: number;
            retcode?: number;
        } = {};
        if (this.reward_index != null) {
            data.reward_index = this.reward_index;
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
        if (this.reward_index != 0)
            writer.writeUint32(12, this.reward_index);
        if (this.retcode != 0)
            writer.writeInt32(5, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChannelerSlabLoopDungeonTakeScoreRewardRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChannelerSlabLoopDungeonTakeScoreRewardRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.reward_index = reader.readUint32();
                    break;
                case 5:
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
    static deserializeBinary(bytes: Uint8Array): ChannelerSlabLoopDungeonTakeScoreRewardRsp {
        return ChannelerSlabLoopDungeonTakeScoreRewardRsp.deserialize(bytes);
    }
}
