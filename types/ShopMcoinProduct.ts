/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ShopMcoinProduct.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ShopMcoinProduct extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        product_id?: string;
        price_tier?: string;
        mcoin_base?: number;
        mcoin_non_first?: number;
        mcoin_first?: number;
        bought_num?: number;
        is_audit?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("product_id" in data && data.product_id != undefined) {
                this.product_id = data.product_id;
            }
            if ("price_tier" in data && data.price_tier != undefined) {
                this.price_tier = data.price_tier;
            }
            if ("mcoin_base" in data && data.mcoin_base != undefined) {
                this.mcoin_base = data.mcoin_base;
            }
            if ("mcoin_non_first" in data && data.mcoin_non_first != undefined) {
                this.mcoin_non_first = data.mcoin_non_first;
            }
            if ("mcoin_first" in data && data.mcoin_first != undefined) {
                this.mcoin_first = data.mcoin_first;
            }
            if ("bought_num" in data && data.bought_num != undefined) {
                this.bought_num = data.bought_num;
            }
            if ("is_audit" in data && data.is_audit != undefined) {
                this.is_audit = data.is_audit;
            }
        }
    }
    get product_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set product_id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get price_tier() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set price_tier(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get mcoin_base() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set mcoin_base(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get mcoin_non_first() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set mcoin_non_first(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get mcoin_first() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set mcoin_first(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get bought_num() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set bought_num(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get is_audit() {
        return pb_1.Message.getFieldWithDefault(this, 7, false) as boolean;
    }
    set is_audit(value: boolean) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        product_id?: string;
        price_tier?: string;
        mcoin_base?: number;
        mcoin_non_first?: number;
        mcoin_first?: number;
        bought_num?: number;
        is_audit?: boolean;
    }): ShopMcoinProduct {
        const message = new ShopMcoinProduct({});
        if (data.product_id != null) {
            message.product_id = data.product_id;
        }
        if (data.price_tier != null) {
            message.price_tier = data.price_tier;
        }
        if (data.mcoin_base != null) {
            message.mcoin_base = data.mcoin_base;
        }
        if (data.mcoin_non_first != null) {
            message.mcoin_non_first = data.mcoin_non_first;
        }
        if (data.mcoin_first != null) {
            message.mcoin_first = data.mcoin_first;
        }
        if (data.bought_num != null) {
            message.bought_num = data.bought_num;
        }
        if (data.is_audit != null) {
            message.is_audit = data.is_audit;
        }
        return message;
    }
    toObject() {
        const data: {
            product_id?: string;
            price_tier?: string;
            mcoin_base?: number;
            mcoin_non_first?: number;
            mcoin_first?: number;
            bought_num?: number;
            is_audit?: boolean;
        } = {};
        if (this.product_id != null) {
            data.product_id = this.product_id;
        }
        if (this.price_tier != null) {
            data.price_tier = this.price_tier;
        }
        if (this.mcoin_base != null) {
            data.mcoin_base = this.mcoin_base;
        }
        if (this.mcoin_non_first != null) {
            data.mcoin_non_first = this.mcoin_non_first;
        }
        if (this.mcoin_first != null) {
            data.mcoin_first = this.mcoin_first;
        }
        if (this.bought_num != null) {
            data.bought_num = this.bought_num;
        }
        if (this.is_audit != null) {
            data.is_audit = this.is_audit;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.product_id.length)
            writer.writeString(1, this.product_id);
        if (this.price_tier.length)
            writer.writeString(2, this.price_tier);
        if (this.mcoin_base != 0)
            writer.writeUint32(3, this.mcoin_base);
        if (this.mcoin_non_first != 0)
            writer.writeUint32(4, this.mcoin_non_first);
        if (this.mcoin_first != 0)
            writer.writeUint32(5, this.mcoin_first);
        if (this.bought_num != 0)
            writer.writeUint32(6, this.bought_num);
        if (this.is_audit != false)
            writer.writeBool(7, this.is_audit);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ShopMcoinProduct {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ShopMcoinProduct();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.product_id = reader.readString();
                    break;
                case 2:
                    message.price_tier = reader.readString();
                    break;
                case 3:
                    message.mcoin_base = reader.readUint32();
                    break;
                case 4:
                    message.mcoin_non_first = reader.readUint32();
                    break;
                case 5:
                    message.mcoin_first = reader.readUint32();
                    break;
                case 6:
                    message.bought_num = reader.readUint32();
                    break;
                case 7:
                    message.is_audit = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ShopMcoinProduct {
        return ShopMcoinProduct.deserialize(bytes);
    }
}
