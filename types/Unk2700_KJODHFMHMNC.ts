/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_KJODHFMHMNC.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class Unk2700_KJODHFMHMNC extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        id?: number;
        Unk2700_MMNILGLDHHD?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("Unk2700_MMNILGLDHHD" in data && data.Unk2700_MMNILGLDHHD != undefined) {
                this.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
            }
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk2700_MMNILGLDHHD() {
        return pb_1.Message.getFieldWithDefault(this, 14, false) as boolean;
    }
    set Unk2700_MMNILGLDHHD(value: boolean) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        id?: number;
        Unk2700_MMNILGLDHHD?: boolean;
    }): Unk2700_KJODHFMHMNC {
        const message = new Unk2700_KJODHFMHMNC({});
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.Unk2700_MMNILGLDHHD != null) {
            message.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
        }
        return message;
    }
    toObject() {
        const data: {
            id?: number;
            Unk2700_MMNILGLDHHD?: boolean;
        } = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.Unk2700_MMNILGLDHHD != null) {
            data.Unk2700_MMNILGLDHHD = this.Unk2700_MMNILGLDHHD;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id != 0)
            writer.writeUint32(1, this.id);
        if (this.Unk2700_MMNILGLDHHD != false)
            writer.writeBool(14, this.Unk2700_MMNILGLDHHD);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Unk2700_KJODHFMHMNC {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_KJODHFMHMNC();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readUint32();
                    break;
                case 14:
                    message.Unk2700_MMNILGLDHHD = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Unk2700_KJODHFMHMNC {
        return Unk2700_KJODHFMHMNC.deserialize(bytes);
    }
}
