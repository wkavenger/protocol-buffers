/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_JACACCPGMGC.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Unk2700_MIMJBGMEMCA";
import * as pb_1 from "google-protobuf";
export class Unk2700_JACACCPGMGC extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk2700_IDGMODJPBGF?: dependency_1.Unk2700_MIMJBGMEMCA[];
        level_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_IDGMODJPBGF" in data && data.Unk2700_IDGMODJPBGF != undefined) {
                this.Unk2700_IDGMODJPBGF = data.Unk2700_IDGMODJPBGF;
            }
            if ("level_id" in data && data.level_id != undefined) {
                this.level_id = data.level_id;
            }
        }
    }
    get Unk2700_IDGMODJPBGF() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk2700_MIMJBGMEMCA, 11) as dependency_1.Unk2700_MIMJBGMEMCA[];
    }
    set Unk2700_IDGMODJPBGF(value: dependency_1.Unk2700_MIMJBGMEMCA[]) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    get level_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set level_id(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        Unk2700_IDGMODJPBGF?: ReturnType<typeof dependency_1.Unk2700_MIMJBGMEMCA.prototype.toObject>[];
        level_id?: number;
    }): Unk2700_JACACCPGMGC {
        const message = new Unk2700_JACACCPGMGC({});
        if (data.Unk2700_IDGMODJPBGF != null) {
            message.Unk2700_IDGMODJPBGF = data.Unk2700_IDGMODJPBGF.map(item => dependency_1.Unk2700_MIMJBGMEMCA.fromObject(item));
        }
        if (data.level_id != null) {
            message.level_id = data.level_id;
        }
        return message;
    }
    toObject() {
        const data: {
            Unk2700_IDGMODJPBGF?: ReturnType<typeof dependency_1.Unk2700_MIMJBGMEMCA.prototype.toObject>[];
            level_id?: number;
        } = {};
        if (this.Unk2700_IDGMODJPBGF != null) {
            data.Unk2700_IDGMODJPBGF = this.Unk2700_IDGMODJPBGF.map((item: dependency_1.Unk2700_MIMJBGMEMCA) => item.toObject());
        }
        if (this.level_id != null) {
            data.level_id = this.level_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_IDGMODJPBGF.length)
            writer.writeRepeatedMessage(11, this.Unk2700_IDGMODJPBGF, (item: dependency_1.Unk2700_MIMJBGMEMCA) => item.serialize(writer));
        if (this.level_id != 0)
            writer.writeUint32(14, this.level_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Unk2700_JACACCPGMGC {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_JACACCPGMGC();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    reader.readMessage(message.Unk2700_IDGMODJPBGF, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_1.Unk2700_MIMJBGMEMCA.deserialize(reader), dependency_1.Unk2700_MIMJBGMEMCA));
                    break;
                case 14:
                    message.level_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Unk2700_JACACCPGMGC {
        return Unk2700_JACACCPGMGC.deserialize(bytes);
    }
}
