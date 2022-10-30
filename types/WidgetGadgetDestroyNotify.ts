/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WidgetGadgetDestroyNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class WidgetGadgetDestroyNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        entity_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data: {
        entity_id?: number;
    }): WidgetGadgetDestroyNotify {
        const message = new WidgetGadgetDestroyNotify({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        return message;
    }
    toObject() {
        const data: {
            entity_id?: number;
        } = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(15, this.entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WidgetGadgetDestroyNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WidgetGadgetDestroyNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.entity_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): WidgetGadgetDestroyNotify {
        return WidgetGadgetDestroyNotify.deserialize(bytes);
    }
}
