/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetShopRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Shop";
import * as pb_1 from "google-protobuf";
export class GetShopRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        shop?: dependency_1.Shop;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("shop" in data && data.shop != undefined) {
                this.shop = data.shop;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get shop() {
        return pb_1.Message.getWrapperField(this, dependency_1.Shop, 11) as dependency_1.Shop;
    }
    set shop(value: dependency_1.Shop) {
        pb_1.Message.setWrapperField(this, 11, value);
    }
    get has_shop() {
        return pb_1.Message.getField(this, 11) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        shop?: ReturnType<typeof dependency_1.Shop.prototype.toObject>;
        retcode?: number;
    }): GetShopRsp {
        const message = new GetShopRsp({});
        if (data.shop != null) {
            message.shop = dependency_1.Shop.fromObject(data.shop);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            shop?: ReturnType<typeof dependency_1.Shop.prototype.toObject>;
            retcode?: number;
        } = {};
        if (this.shop != null) {
            data.shop = this.shop.toObject();
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
        if (this.has_shop)
            writer.writeMessage(11, this.shop, () => this.shop.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(2, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetShopRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetShopRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    reader.readMessage(message.shop, () => message.shop = dependency_1.Shop.deserialize(reader));
                    break;
                case 2:
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
    static deserializeBinary(bytes: Uint8Array): GetShopRsp {
        return GetShopRsp.deserialize(bytes);
    }
}
