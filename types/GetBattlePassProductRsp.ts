/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetBattlePassProductRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class GetBattlePassProductRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        price_tier?: string;
        battle_pass_product_play_type?: number;
        product_id?: string;
        cur_schedule_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("price_tier" in data && data.price_tier != undefined) {
                this.price_tier = data.price_tier;
            }
            if ("battle_pass_product_play_type" in data && data.battle_pass_product_play_type != undefined) {
                this.battle_pass_product_play_type = data.battle_pass_product_play_type;
            }
            if ("product_id" in data && data.product_id != undefined) {
                this.product_id = data.product_id;
            }
            if ("cur_schedule_id" in data && data.cur_schedule_id != undefined) {
                this.cur_schedule_id = data.cur_schedule_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get price_tier() {
        return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
    }
    set price_tier(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get battle_pass_product_play_type() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set battle_pass_product_play_type(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get product_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set product_id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get cur_schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set cur_schedule_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        retcode?: number;
        price_tier?: string;
        battle_pass_product_play_type?: number;
        product_id?: string;
        cur_schedule_id?: number;
    }): GetBattlePassProductRsp {
        const message = new GetBattlePassProductRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.price_tier != null) {
            message.price_tier = data.price_tier;
        }
        if (data.battle_pass_product_play_type != null) {
            message.battle_pass_product_play_type = data.battle_pass_product_play_type;
        }
        if (data.product_id != null) {
            message.product_id = data.product_id;
        }
        if (data.cur_schedule_id != null) {
            message.cur_schedule_id = data.cur_schedule_id;
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            price_tier?: string;
            battle_pass_product_play_type?: number;
            product_id?: string;
            cur_schedule_id?: number;
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.price_tier != null) {
            data.price_tier = this.price_tier;
        }
        if (this.battle_pass_product_play_type != null) {
            data.battle_pass_product_play_type = this.battle_pass_product_play_type;
        }
        if (this.product_id != null) {
            data.product_id = this.product_id;
        }
        if (this.cur_schedule_id != null) {
            data.cur_schedule_id = this.cur_schedule_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(14, this.retcode);
        if (this.price_tier.length)
            writer.writeString(6, this.price_tier);
        if (this.battle_pass_product_play_type != 0)
            writer.writeUint32(2, this.battle_pass_product_play_type);
        if (this.product_id.length)
            writer.writeString(1, this.product_id);
        if (this.cur_schedule_id != 0)
            writer.writeUint32(11, this.cur_schedule_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetBattlePassProductRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetBattlePassProductRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.retcode = reader.readInt32();
                    break;
                case 6:
                    message.price_tier = reader.readString();
                    break;
                case 2:
                    message.battle_pass_product_play_type = reader.readUint32();
                    break;
                case 1:
                    message.product_id = reader.readString();
                    break;
                case 11:
                    message.cur_schedule_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetBattlePassProductRsp {
        return GetBattlePassProductRsp.deserialize(bytes);
    }
}
