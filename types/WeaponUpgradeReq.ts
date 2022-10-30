/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WeaponUpgradeReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ItemParam";
import * as pb_1 from "google-protobuf";
export class WeaponUpgradeReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        food_weapon_guid_list?: number[];
        item_param_list?: dependency_1.ItemParam[];
        target_weapon_guid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("food_weapon_guid_list" in data && data.food_weapon_guid_list != undefined) {
                this.food_weapon_guid_list = data.food_weapon_guid_list;
            }
            if ("item_param_list" in data && data.item_param_list != undefined) {
                this.item_param_list = data.item_param_list;
            }
            if ("target_weapon_guid" in data && data.target_weapon_guid != undefined) {
                this.target_weapon_guid = data.target_weapon_guid;
            }
        }
    }
    get food_weapon_guid_list() {
        return pb_1.Message.getFieldWithDefault(this, 1, []) as number[];
    }
    set food_weapon_guid_list(value: number[]) {
        pb_1.Message.setField(this, 1, value);
    }
    get item_param_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 15) as dependency_1.ItemParam[];
    }
    set item_param_list(value: dependency_1.ItemParam[]) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    get target_weapon_guid() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set target_weapon_guid(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        food_weapon_guid_list?: number[];
        item_param_list?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
        target_weapon_guid?: number;
    }): WeaponUpgradeReq {
        const message = new WeaponUpgradeReq({});
        if (data.food_weapon_guid_list != null) {
            message.food_weapon_guid_list = data.food_weapon_guid_list;
        }
        if (data.item_param_list != null) {
            message.item_param_list = data.item_param_list.map(item => dependency_1.ItemParam.fromObject(item));
        }
        if (data.target_weapon_guid != null) {
            message.target_weapon_guid = data.target_weapon_guid;
        }
        return message;
    }
    toObject() {
        const data: {
            food_weapon_guid_list?: number[];
            item_param_list?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
            target_weapon_guid?: number;
        } = {};
        if (this.food_weapon_guid_list != null) {
            data.food_weapon_guid_list = this.food_weapon_guid_list;
        }
        if (this.item_param_list != null) {
            data.item_param_list = this.item_param_list.map((item: dependency_1.ItemParam) => item.toObject());
        }
        if (this.target_weapon_guid != null) {
            data.target_weapon_guid = this.target_weapon_guid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.food_weapon_guid_list.length)
            writer.writePackedUint64(1, this.food_weapon_guid_list);
        if (this.item_param_list.length)
            writer.writeRepeatedMessage(15, this.item_param_list, (item: dependency_1.ItemParam) => item.serialize(writer));
        if (this.target_weapon_guid != 0)
            writer.writeUint64(4, this.target_weapon_guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WeaponUpgradeReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WeaponUpgradeReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.food_weapon_guid_list = reader.readPackedUint64();
                    break;
                case 15:
                    reader.readMessage(message.item_param_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
                    break;
                case 4:
                    message.target_weapon_guid = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): WeaponUpgradeReq {
        return WeaponUpgradeReq.deserialize(bytes);
    }
}
