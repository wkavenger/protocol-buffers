/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerStoreNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Item";
import * as dependency_2 from "./StoreType";
import * as pb_1 from "google-protobuf";
export class PlayerStoreNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        item_list?: dependency_1.Item[];
        weight_limit?: number;
        store_type?: dependency_2.StoreType;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_list" in data && data.item_list != undefined) {
                this.item_list = data.item_list;
            }
            if ("weight_limit" in data && data.weight_limit != undefined) {
                this.weight_limit = data.weight_limit;
            }
            if ("store_type" in data && data.store_type != undefined) {
                this.store_type = data.store_type;
            }
        }
    }
    get item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Item, 15) as dependency_1.Item[];
    }
    set item_list(value: dependency_1.Item[]) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    get weight_limit() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set weight_limit(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get store_type() {
        return pb_1.Message.getFieldWithDefault(this, 2, dependency_2.StoreType.STORE_TYPE_NONE) as dependency_2.StoreType;
    }
    set store_type(value: dependency_2.StoreType) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        item_list?: ReturnType<typeof dependency_1.Item.prototype.toObject>[];
        weight_limit?: number;
        store_type?: dependency_2.StoreType;
    }): PlayerStoreNotify {
        const message = new PlayerStoreNotify({});
        if (data.item_list != null) {
            message.item_list = data.item_list.map(item => dependency_1.Item.fromObject(item));
        }
        if (data.weight_limit != null) {
            message.weight_limit = data.weight_limit;
        }
        if (data.store_type != null) {
            message.store_type = data.store_type;
        }
        return message;
    }
    toObject() {
        const data: {
            item_list?: ReturnType<typeof dependency_1.Item.prototype.toObject>[];
            weight_limit?: number;
            store_type?: dependency_2.StoreType;
        } = {};
        if (this.item_list != null) {
            data.item_list = this.item_list.map((item: dependency_1.Item) => item.toObject());
        }
        if (this.weight_limit != null) {
            data.weight_limit = this.weight_limit;
        }
        if (this.store_type != null) {
            data.store_type = this.store_type;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_list.length)
            writer.writeRepeatedMessage(15, this.item_list, (item: dependency_1.Item) => item.serialize(writer));
        if (this.weight_limit != 0)
            writer.writeUint32(8, this.weight_limit);
        if (this.store_type != dependency_2.StoreType.STORE_TYPE_NONE)
            writer.writeEnum(2, this.store_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerStoreNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerStoreNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.Item.deserialize(reader), dependency_1.Item));
                    break;
                case 8:
                    message.weight_limit = reader.readUint32();
                    break;
                case 2:
                    message.store_type = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerStoreNotify {
        return PlayerStoreNotify.deserialize(bytes);
    }
}
