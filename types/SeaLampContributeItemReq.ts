/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SeaLampContributeItemReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ItemParam";
import * as pb_1 from "google-protobuf";
export class SeaLampContributeItemReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        activity_id?: number;
        item_list?: dependency_1.ItemParam[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("item_list" in data && data.item_list != undefined) {
                this.item_list = data.item_list;
            }
        }
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set activity_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 1) as dependency_1.ItemParam[];
    }
    set item_list(value: dependency_1.ItemParam[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data: {
        activity_id?: number;
        item_list?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
    }): SeaLampContributeItemReq {
        const message = new SeaLampContributeItemReq({});
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (data.item_list != null) {
            message.item_list = data.item_list.map(item => dependency_1.ItemParam.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            activity_id?: number;
            item_list?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
        } = {};
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
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
        if (this.activity_id != 0)
            writer.writeUint32(8, this.activity_id);
        if (this.item_list.length)
            writer.writeRepeatedMessage(1, this.item_list, (item: dependency_1.ItemParam) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SeaLampContributeItemReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SeaLampContributeItemReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.activity_id = reader.readUint32();
                    break;
                case 1:
                    reader.readMessage(message.item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SeaLampContributeItemReq {
        return SeaLampContributeItemReq.deserialize(bytes);
    }
}
