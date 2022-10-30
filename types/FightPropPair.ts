/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FightPropPair.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class FightPropPair extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        prop_type?: number;
        prop_value?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("prop_type" in data && data.prop_type != undefined) {
                this.prop_type = data.prop_type;
            }
            if ("prop_value" in data && data.prop_value != undefined) {
                this.prop_value = data.prop_value;
            }
        }
    }
    get prop_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set prop_type(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get prop_value() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set prop_value(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        prop_type?: number;
        prop_value?: number;
    }): FightPropPair {
        const message = new FightPropPair({});
        if (data.prop_type != null) {
            message.prop_type = data.prop_type;
        }
        if (data.prop_value != null) {
            message.prop_value = data.prop_value;
        }
        return message;
    }
    toObject() {
        const data: {
            prop_type?: number;
            prop_value?: number;
        } = {};
        if (this.prop_type != null) {
            data.prop_type = this.prop_type;
        }
        if (this.prop_value != null) {
            data.prop_value = this.prop_value;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.prop_type != 0)
            writer.writeUint32(1, this.prop_type);
        if (this.prop_value != 0)
            writer.writeFloat(2, this.prop_value);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FightPropPair {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FightPropPair();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.prop_type = reader.readUint32();
                    break;
                case 2:
                    message.prop_value = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FightPropPair {
        return FightPropPair.deserialize(bytes);
    }
}
