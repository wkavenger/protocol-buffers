/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TakeFurnitureMakeRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./FurnitureMakeSlot";
import * as dependency_2 from "./ItemParam";
import * as pb_1 from "google-protobuf";
export class TakeFurnitureMakeRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        furniture_make_slot?: dependency_1.FurnitureMakeSlot;
        return_item_list?: dependency_2.ItemParam[];
        make_id?: number;
        retcode?: number;
        output_item_list?: dependency_2.ItemParam[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 14], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("furniture_make_slot" in data && data.furniture_make_slot != undefined) {
                this.furniture_make_slot = data.furniture_make_slot;
            }
            if ("return_item_list" in data && data.return_item_list != undefined) {
                this.return_item_list = data.return_item_list;
            }
            if ("make_id" in data && data.make_id != undefined) {
                this.make_id = data.make_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("output_item_list" in data && data.output_item_list != undefined) {
                this.output_item_list = data.output_item_list;
            }
        }
    }
    get furniture_make_slot() {
        return pb_1.Message.getWrapperField(this, dependency_1.FurnitureMakeSlot, 8) as dependency_1.FurnitureMakeSlot;
    }
    set furniture_make_slot(value: dependency_1.FurnitureMakeSlot) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get has_furniture_make_slot() {
        return pb_1.Message.getField(this, 8) != null;
    }
    get return_item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ItemParam, 2) as dependency_2.ItemParam[];
    }
    set return_item_list(value: dependency_2.ItemParam[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get make_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set make_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get output_item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ItemParam, 14) as dependency_2.ItemParam[];
    }
    set output_item_list(value: dependency_2.ItemParam[]) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    static fromObject(data: {
        furniture_make_slot?: ReturnType<typeof dependency_1.FurnitureMakeSlot.prototype.toObject>;
        return_item_list?: ReturnType<typeof dependency_2.ItemParam.prototype.toObject>[];
        make_id?: number;
        retcode?: number;
        output_item_list?: ReturnType<typeof dependency_2.ItemParam.prototype.toObject>[];
    }): TakeFurnitureMakeRsp {
        const message = new TakeFurnitureMakeRsp({});
        if (data.furniture_make_slot != null) {
            message.furniture_make_slot = dependency_1.FurnitureMakeSlot.fromObject(data.furniture_make_slot);
        }
        if (data.return_item_list != null) {
            message.return_item_list = data.return_item_list.map(item => dependency_2.ItemParam.fromObject(item));
        }
        if (data.make_id != null) {
            message.make_id = data.make_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.output_item_list != null) {
            message.output_item_list = data.output_item_list.map(item => dependency_2.ItemParam.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            furniture_make_slot?: ReturnType<typeof dependency_1.FurnitureMakeSlot.prototype.toObject>;
            return_item_list?: ReturnType<typeof dependency_2.ItemParam.prototype.toObject>[];
            make_id?: number;
            retcode?: number;
            output_item_list?: ReturnType<typeof dependency_2.ItemParam.prototype.toObject>[];
        } = {};
        if (this.furniture_make_slot != null) {
            data.furniture_make_slot = this.furniture_make_slot.toObject();
        }
        if (this.return_item_list != null) {
            data.return_item_list = this.return_item_list.map((item: dependency_2.ItemParam) => item.toObject());
        }
        if (this.make_id != null) {
            data.make_id = this.make_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.output_item_list != null) {
            data.output_item_list = this.output_item_list.map((item: dependency_2.ItemParam) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_furniture_make_slot)
            writer.writeMessage(8, this.furniture_make_slot, () => this.furniture_make_slot.serialize(writer));
        if (this.return_item_list.length)
            writer.writeRepeatedMessage(2, this.return_item_list, (item: dependency_2.ItemParam) => item.serialize(writer));
        if (this.make_id != 0)
            writer.writeUint32(6, this.make_id);
        if (this.retcode != 0)
            writer.writeInt32(9, this.retcode);
        if (this.output_item_list.length)
            writer.writeRepeatedMessage(14, this.output_item_list, (item: dependency_2.ItemParam) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TakeFurnitureMakeRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TakeFurnitureMakeRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    reader.readMessage(message.furniture_make_slot, () => message.furniture_make_slot = dependency_1.FurnitureMakeSlot.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.return_item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.ItemParam.deserialize(reader), dependency_2.ItemParam));
                    break;
                case 6:
                    message.make_id = reader.readUint32();
                    break;
                case 9:
                    message.retcode = reader.readInt32();
                    break;
                case 14:
                    reader.readMessage(message.output_item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_2.ItemParam.deserialize(reader), dependency_2.ItemParam));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TakeFurnitureMakeRsp {
        return TakeFurnitureMakeRsp.deserialize(bytes);
    }
}
