/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ShopGoods.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ItemParam";
import * as pb_1 from "google-protobuf";
export class ShopGoods extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        discount_end_time?: number;
        min_level?: number;
        end_time?: number;
        cost_item_list?: dependency_1.ItemParam[];
        secondary_sheet_id?: number;
        hcoin?: number;
        mcoin?: number;
        discount_id?: number;
        single_limit?: number;
        goods_id?: number;
        next_refresh_time?: number;
        max_level?: number;
        disable_type?: number;
        discount_begin_time?: number;
        pre_goods_id_list?: number[];
        begin_time?: number;
        scoin?: number;
        bought_num?: number;
        buy_limit?: number;
        goods_item?: dependency_1.ItemParam;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("discount_end_time" in data && data.discount_end_time != undefined) {
                this.discount_end_time = data.discount_end_time;
            }
            if ("min_level" in data && data.min_level != undefined) {
                this.min_level = data.min_level;
            }
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
            if ("cost_item_list" in data && data.cost_item_list != undefined) {
                this.cost_item_list = data.cost_item_list;
            }
            if ("secondary_sheet_id" in data && data.secondary_sheet_id != undefined) {
                this.secondary_sheet_id = data.secondary_sheet_id;
            }
            if ("hcoin" in data && data.hcoin != undefined) {
                this.hcoin = data.hcoin;
            }
            if ("mcoin" in data && data.mcoin != undefined) {
                this.mcoin = data.mcoin;
            }
            if ("discount_id" in data && data.discount_id != undefined) {
                this.discount_id = data.discount_id;
            }
            if ("single_limit" in data && data.single_limit != undefined) {
                this.single_limit = data.single_limit;
            }
            if ("goods_id" in data && data.goods_id != undefined) {
                this.goods_id = data.goods_id;
            }
            if ("next_refresh_time" in data && data.next_refresh_time != undefined) {
                this.next_refresh_time = data.next_refresh_time;
            }
            if ("max_level" in data && data.max_level != undefined) {
                this.max_level = data.max_level;
            }
            if ("disable_type" in data && data.disable_type != undefined) {
                this.disable_type = data.disable_type;
            }
            if ("discount_begin_time" in data && data.discount_begin_time != undefined) {
                this.discount_begin_time = data.discount_begin_time;
            }
            if ("pre_goods_id_list" in data && data.pre_goods_id_list != undefined) {
                this.pre_goods_id_list = data.pre_goods_id_list;
            }
            if ("begin_time" in data && data.begin_time != undefined) {
                this.begin_time = data.begin_time;
            }
            if ("scoin" in data && data.scoin != undefined) {
                this.scoin = data.scoin;
            }
            if ("bought_num" in data && data.bought_num != undefined) {
                this.bought_num = data.bought_num;
            }
            if ("buy_limit" in data && data.buy_limit != undefined) {
                this.buy_limit = data.buy_limit;
            }
            if ("goods_item" in data && data.goods_item != undefined) {
                this.goods_item = data.goods_item;
            }
        }
    }
    get discount_end_time() {
        return pb_1.Message.getFieldWithDefault(this, 258, 0) as number;
    }
    set discount_end_time(value: number) {
        pb_1.Message.setField(this, 258, value);
    }
    get min_level() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set min_level(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set end_time(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get cost_item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 3) as dependency_1.ItemParam[];
    }
    set cost_item_list(value: dependency_1.ItemParam[]) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    get secondary_sheet_id() {
        return pb_1.Message.getFieldWithDefault(this, 318, 0) as number;
    }
    set secondary_sheet_id(value: number) {
        pb_1.Message.setField(this, 318, value);
    }
    get hcoin() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set hcoin(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get mcoin() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set mcoin(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get discount_id() {
        return pb_1.Message.getFieldWithDefault(this, 1998, 0) as number;
    }
    set discount_id(value: number) {
        pb_1.Message.setField(this, 1998, value);
    }
    get single_limit() {
        return pb_1.Message.getFieldWithDefault(this, 247, 0) as number;
    }
    set single_limit(value: number) {
        pb_1.Message.setField(this, 247, value);
    }
    get goods_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set goods_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get next_refresh_time() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set next_refresh_time(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get max_level() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set max_level(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get disable_type() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set disable_type(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get discount_begin_time() {
        return pb_1.Message.getFieldWithDefault(this, 574, 0) as number;
    }
    set discount_begin_time(value: number) {
        pb_1.Message.setField(this, 574, value);
    }
    get pre_goods_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
    }
    set pre_goods_id_list(value: number[]) {
        pb_1.Message.setField(this, 2, value);
    }
    get begin_time() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set begin_time(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get scoin() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set scoin(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get bought_num() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set bought_num(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get buy_limit() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set buy_limit(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get goods_item() {
        return pb_1.Message.getWrapperField(this, dependency_1.ItemParam, 9) as dependency_1.ItemParam;
    }
    set goods_item(value: dependency_1.ItemParam) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get has_goods_item() {
        return pb_1.Message.getField(this, 9) != null;
    }
    static fromObject(data: {
        discount_end_time?: number;
        min_level?: number;
        end_time?: number;
        cost_item_list?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
        secondary_sheet_id?: number;
        hcoin?: number;
        mcoin?: number;
        discount_id?: number;
        single_limit?: number;
        goods_id?: number;
        next_refresh_time?: number;
        max_level?: number;
        disable_type?: number;
        discount_begin_time?: number;
        pre_goods_id_list?: number[];
        begin_time?: number;
        scoin?: number;
        bought_num?: number;
        buy_limit?: number;
        goods_item?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>;
    }): ShopGoods {
        const message = new ShopGoods({});
        if (data.discount_end_time != null) {
            message.discount_end_time = data.discount_end_time;
        }
        if (data.min_level != null) {
            message.min_level = data.min_level;
        }
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        if (data.cost_item_list != null) {
            message.cost_item_list = data.cost_item_list.map(item => dependency_1.ItemParam.fromObject(item));
        }
        if (data.secondary_sheet_id != null) {
            message.secondary_sheet_id = data.secondary_sheet_id;
        }
        if (data.hcoin != null) {
            message.hcoin = data.hcoin;
        }
        if (data.mcoin != null) {
            message.mcoin = data.mcoin;
        }
        if (data.discount_id != null) {
            message.discount_id = data.discount_id;
        }
        if (data.single_limit != null) {
            message.single_limit = data.single_limit;
        }
        if (data.goods_id != null) {
            message.goods_id = data.goods_id;
        }
        if (data.next_refresh_time != null) {
            message.next_refresh_time = data.next_refresh_time;
        }
        if (data.max_level != null) {
            message.max_level = data.max_level;
        }
        if (data.disable_type != null) {
            message.disable_type = data.disable_type;
        }
        if (data.discount_begin_time != null) {
            message.discount_begin_time = data.discount_begin_time;
        }
        if (data.pre_goods_id_list != null) {
            message.pre_goods_id_list = data.pre_goods_id_list;
        }
        if (data.begin_time != null) {
            message.begin_time = data.begin_time;
        }
        if (data.scoin != null) {
            message.scoin = data.scoin;
        }
        if (data.bought_num != null) {
            message.bought_num = data.bought_num;
        }
        if (data.buy_limit != null) {
            message.buy_limit = data.buy_limit;
        }
        if (data.goods_item != null) {
            message.goods_item = dependency_1.ItemParam.fromObject(data.goods_item);
        }
        return message;
    }
    toObject() {
        const data: {
            discount_end_time?: number;
            min_level?: number;
            end_time?: number;
            cost_item_list?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
            secondary_sheet_id?: number;
            hcoin?: number;
            mcoin?: number;
            discount_id?: number;
            single_limit?: number;
            goods_id?: number;
            next_refresh_time?: number;
            max_level?: number;
            disable_type?: number;
            discount_begin_time?: number;
            pre_goods_id_list?: number[];
            begin_time?: number;
            scoin?: number;
            bought_num?: number;
            buy_limit?: number;
            goods_item?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>;
        } = {};
        if (this.discount_end_time != null) {
            data.discount_end_time = this.discount_end_time;
        }
        if (this.min_level != null) {
            data.min_level = this.min_level;
        }
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        if (this.cost_item_list != null) {
            data.cost_item_list = this.cost_item_list.map((item: dependency_1.ItemParam) => item.toObject());
        }
        if (this.secondary_sheet_id != null) {
            data.secondary_sheet_id = this.secondary_sheet_id;
        }
        if (this.hcoin != null) {
            data.hcoin = this.hcoin;
        }
        if (this.mcoin != null) {
            data.mcoin = this.mcoin;
        }
        if (this.discount_id != null) {
            data.discount_id = this.discount_id;
        }
        if (this.single_limit != null) {
            data.single_limit = this.single_limit;
        }
        if (this.goods_id != null) {
            data.goods_id = this.goods_id;
        }
        if (this.next_refresh_time != null) {
            data.next_refresh_time = this.next_refresh_time;
        }
        if (this.max_level != null) {
            data.max_level = this.max_level;
        }
        if (this.disable_type != null) {
            data.disable_type = this.disable_type;
        }
        if (this.discount_begin_time != null) {
            data.discount_begin_time = this.discount_begin_time;
        }
        if (this.pre_goods_id_list != null) {
            data.pre_goods_id_list = this.pre_goods_id_list;
        }
        if (this.begin_time != null) {
            data.begin_time = this.begin_time;
        }
        if (this.scoin != null) {
            data.scoin = this.scoin;
        }
        if (this.bought_num != null) {
            data.bought_num = this.bought_num;
        }
        if (this.buy_limit != null) {
            data.buy_limit = this.buy_limit;
        }
        if (this.goods_item != null) {
            data.goods_item = this.goods_item.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.discount_end_time != 0)
            writer.writeUint32(258, this.discount_end_time);
        if (this.min_level != 0)
            writer.writeUint32(8, this.min_level);
        if (this.end_time != 0)
            writer.writeUint32(11, this.end_time);
        if (this.cost_item_list.length)
            writer.writeRepeatedMessage(3, this.cost_item_list, (item: dependency_1.ItemParam) => item.serialize(writer));
        if (this.secondary_sheet_id != 0)
            writer.writeUint32(318, this.secondary_sheet_id);
        if (this.hcoin != 0)
            writer.writeUint32(1, this.hcoin);
        if (this.mcoin != 0)
            writer.writeUint32(14, this.mcoin);
        if (this.discount_id != 0)
            writer.writeUint32(1998, this.discount_id);
        if (this.single_limit != 0)
            writer.writeUint32(247, this.single_limit);
        if (this.goods_id != 0)
            writer.writeUint32(13, this.goods_id);
        if (this.next_refresh_time != 0)
            writer.writeUint32(7, this.next_refresh_time);
        if (this.max_level != 0)
            writer.writeUint32(4, this.max_level);
        if (this.disable_type != 0)
            writer.writeUint32(6, this.disable_type);
        if (this.discount_begin_time != 0)
            writer.writeUint32(574, this.discount_begin_time);
        if (this.pre_goods_id_list.length)
            writer.writePackedUint32(2, this.pre_goods_id_list);
        if (this.begin_time != 0)
            writer.writeUint32(5, this.begin_time);
        if (this.scoin != 0)
            writer.writeUint32(15, this.scoin);
        if (this.bought_num != 0)
            writer.writeUint32(10, this.bought_num);
        if (this.buy_limit != 0)
            writer.writeUint32(12, this.buy_limit);
        if (this.has_goods_item)
            writer.writeMessage(9, this.goods_item, () => this.goods_item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ShopGoods {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ShopGoods();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 258:
                    message.discount_end_time = reader.readUint32();
                    break;
                case 8:
                    message.min_level = reader.readUint32();
                    break;
                case 11:
                    message.end_time = reader.readUint32();
                    break;
                case 3:
                    reader.readMessage(message.cost_item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
                    break;
                case 318:
                    message.secondary_sheet_id = reader.readUint32();
                    break;
                case 1:
                    message.hcoin = reader.readUint32();
                    break;
                case 14:
                    message.mcoin = reader.readUint32();
                    break;
                case 1998:
                    message.discount_id = reader.readUint32();
                    break;
                case 247:
                    message.single_limit = reader.readUint32();
                    break;
                case 13:
                    message.goods_id = reader.readUint32();
                    break;
                case 7:
                    message.next_refresh_time = reader.readUint32();
                    break;
                case 4:
                    message.max_level = reader.readUint32();
                    break;
                case 6:
                    message.disable_type = reader.readUint32();
                    break;
                case 574:
                    message.discount_begin_time = reader.readUint32();
                    break;
                case 2:
                    message.pre_goods_id_list = reader.readPackedUint32();
                    break;
                case 5:
                    message.begin_time = reader.readUint32();
                    break;
                case 15:
                    message.scoin = reader.readUint32();
                    break;
                case 10:
                    message.bought_num = reader.readUint32();
                    break;
                case 12:
                    message.buy_limit = reader.readUint32();
                    break;
                case 9:
                    reader.readMessage(message.goods_item, () => message.goods_item = dependency_1.ItemParam.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ShopGoods {
        return ShopGoods.deserialize(bytes);
    }
}
