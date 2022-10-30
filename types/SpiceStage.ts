/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SpiceStage.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SpiceStage extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_open?: boolean;
        Unk2700_KLOFGMKDDAK?: number;
        stage_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("Unk2700_KLOFGMKDDAK" in data && data.Unk2700_KLOFGMKDDAK != undefined) {
                this.Unk2700_KLOFGMKDDAK = data.Unk2700_KLOFGMKDDAK;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
        }
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 12, false) as boolean;
    }
    set is_open(value: boolean) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk2700_KLOFGMKDDAK() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set Unk2700_KLOFGMKDDAK(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set stage_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        is_open?: boolean;
        Unk2700_KLOFGMKDDAK?: number;
        stage_id?: number;
    }): SpiceStage {
        const message = new SpiceStage({});
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.Unk2700_KLOFGMKDDAK != null) {
            message.Unk2700_KLOFGMKDDAK = data.Unk2700_KLOFGMKDDAK;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        return message;
    }
    toObject() {
        const data: {
            is_open?: boolean;
            Unk2700_KLOFGMKDDAK?: number;
            stage_id?: number;
        } = {};
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.Unk2700_KLOFGMKDDAK != null) {
            data.Unk2700_KLOFGMKDDAK = this.Unk2700_KLOFGMKDDAK;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_open != false)
            writer.writeBool(12, this.is_open);
        if (this.Unk2700_KLOFGMKDDAK != 0)
            writer.writeUint32(1, this.Unk2700_KLOFGMKDDAK);
        if (this.stage_id != 0)
            writer.writeUint32(6, this.stage_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SpiceStage {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SpiceStage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.is_open = reader.readBool();
                    break;
                case 1:
                    message.Unk2700_KLOFGMKDDAK = reader.readUint32();
                    break;
                case 6:
                    message.stage_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SpiceStage {
        return SpiceStage.deserialize(bytes);
    }
}
