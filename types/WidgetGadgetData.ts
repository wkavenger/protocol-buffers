/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WidgetGadgetData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class WidgetGadgetData extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        gadget_entity_id_list?: number[];
        gadget_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("gadget_entity_id_list" in data && data.gadget_entity_id_list != undefined) {
                this.gadget_entity_id_list = data.gadget_entity_id_list;
            }
            if ("gadget_id" in data && data.gadget_id != undefined) {
                this.gadget_id = data.gadget_id;
            }
        }
    }
    get gadget_entity_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 1, []) as number[];
    }
    set gadget_entity_id_list(value: number[]) {
        pb_1.Message.setField(this, 1, value);
    }
    get gadget_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set gadget_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        gadget_entity_id_list?: number[];
        gadget_id?: number;
    }): WidgetGadgetData {
        const message = new WidgetGadgetData({});
        if (data.gadget_entity_id_list != null) {
            message.gadget_entity_id_list = data.gadget_entity_id_list;
        }
        if (data.gadget_id != null) {
            message.gadget_id = data.gadget_id;
        }
        return message;
    }
    toObject() {
        const data: {
            gadget_entity_id_list?: number[];
            gadget_id?: number;
        } = {};
        if (this.gadget_entity_id_list != null) {
            data.gadget_entity_id_list = this.gadget_entity_id_list;
        }
        if (this.gadget_id != null) {
            data.gadget_id = this.gadget_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.gadget_entity_id_list.length)
            writer.writePackedUint32(1, this.gadget_entity_id_list);
        if (this.gadget_id != 0)
            writer.writeUint32(8, this.gadget_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WidgetGadgetData {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WidgetGadgetData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.gadget_entity_id_list = reader.readPackedUint32();
                    break;
                case 8:
                    message.gadget_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): WidgetGadgetData {
        return WidgetGadgetData.deserialize(bytes);
    }
}
