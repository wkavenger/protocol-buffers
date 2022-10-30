/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MechanicusSequenceOpenNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class MechanicusSequenceOpenNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        mechanicus_id?: number;
        sequence_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mechanicus_id" in data && data.mechanicus_id != undefined) {
                this.mechanicus_id = data.mechanicus_id;
            }
            if ("sequence_id" in data && data.sequence_id != undefined) {
                this.sequence_id = data.sequence_id;
            }
        }
    }
    get mechanicus_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set mechanicus_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get sequence_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set sequence_id(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        mechanicus_id?: number;
        sequence_id?: number;
    }): MechanicusSequenceOpenNotify {
        const message = new MechanicusSequenceOpenNotify({});
        if (data.mechanicus_id != null) {
            message.mechanicus_id = data.mechanicus_id;
        }
        if (data.sequence_id != null) {
            message.sequence_id = data.sequence_id;
        }
        return message;
    }
    toObject() {
        const data: {
            mechanicus_id?: number;
            sequence_id?: number;
        } = {};
        if (this.mechanicus_id != null) {
            data.mechanicus_id = this.mechanicus_id;
        }
        if (this.sequence_id != null) {
            data.sequence_id = this.sequence_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mechanicus_id != 0)
            writer.writeUint32(8, this.mechanicus_id);
        if (this.sequence_id != 0)
            writer.writeUint32(7, this.sequence_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MechanicusSequenceOpenNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MechanicusSequenceOpenNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.mechanicus_id = reader.readUint32();
                    break;
                case 7:
                    message.sequence_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MechanicusSequenceOpenNotify {
        return MechanicusSequenceOpenNotify.deserialize(bytes);
    }
}
