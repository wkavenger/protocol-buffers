/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TakeAchievementGoalRewardRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ItemParam";
import * as pb_1 from "google-protobuf";
export class TakeAchievementGoalRewardRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        id_list?: number[];
        item_list?: dependency_1.ItemParam[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12, 5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("id_list" in data && data.id_list != undefined) {
                this.id_list = data.id_list;
            }
            if ("item_list" in data && data.item_list != undefined) {
                this.item_list = data.item_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get id_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []) as number[];
    }
    set id_list(value: number[]) {
        pb_1.Message.setField(this, 12, value);
    }
    get item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 5) as dependency_1.ItemParam[];
    }
    set item_list(value: dependency_1.ItemParam[]) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    static fromObject(data: {
        retcode?: number;
        id_list?: number[];
        item_list?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
    }): TakeAchievementGoalRewardRsp {
        const message = new TakeAchievementGoalRewardRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.id_list != null) {
            message.id_list = data.id_list;
        }
        if (data.item_list != null) {
            message.item_list = data.item_list.map(item => dependency_1.ItemParam.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            id_list?: number[];
            item_list?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.id_list != null) {
            data.id_list = this.id_list;
        }
        if (this.item_list != null) {
            data.item_list = this.item_list.map((item: dependency_1.ItemParam) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(15, this.retcode);
        if (this.id_list.length)
            writer.writePackedUint32(12, this.id_list);
        if (this.item_list.length)
            writer.writeRepeatedMessage(5, this.item_list, (item: dependency_1.ItemParam) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TakeAchievementGoalRewardRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TakeAchievementGoalRewardRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.retcode = reader.readInt32();
                    break;
                case 12:
                    message.id_list = reader.readPackedUint32();
                    break;
                case 5:
                    reader.readMessage(message.item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TakeAchievementGoalRewardRsp {
        return TakeAchievementGoalRewardRsp.deserialize(bytes);
    }
}
