/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk3100_APOOGGMHCJI.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class Unk3100_APOOGGMHCJI extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk3100_LINPNGLHPDL?: number;
        is_open?: boolean;
        Unk2700_MMNILGLDHHD?: boolean;
        stage_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk3100_LINPNGLHPDL" in data && data.Unk3100_LINPNGLHPDL != undefined) {
                this.Unk3100_LINPNGLHPDL = data.Unk3100_LINPNGLHPDL;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("Unk2700_MMNILGLDHHD" in data && data.Unk2700_MMNILGLDHHD != undefined) {
                this.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
        }
    }
    get Unk3100_LINPNGLHPDL() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set Unk3100_LINPNGLHPDL(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 11, false) as boolean;
    }
    set is_open(value: boolean) {
        pb_1.Message.setField(this, 11, value);
    }
    get Unk2700_MMNILGLDHHD() {
        return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
    }
    set Unk2700_MMNILGLDHHD(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set stage_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        Unk3100_LINPNGLHPDL?: number;
        is_open?: boolean;
        Unk2700_MMNILGLDHHD?: boolean;
        stage_id?: number;
    }): Unk3100_APOOGGMHCJI {
        const message = new Unk3100_APOOGGMHCJI({});
        if (data.Unk3100_LINPNGLHPDL != null) {
            message.Unk3100_LINPNGLHPDL = data.Unk3100_LINPNGLHPDL;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.Unk2700_MMNILGLDHHD != null) {
            message.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        return message;
    }
    toObject() {
        const data: {
            Unk3100_LINPNGLHPDL?: number;
            is_open?: boolean;
            Unk2700_MMNILGLDHHD?: boolean;
            stage_id?: number;
        } = {};
        if (this.Unk3100_LINPNGLHPDL != null) {
            data.Unk3100_LINPNGLHPDL = this.Unk3100_LINPNGLHPDL;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.Unk2700_MMNILGLDHHD != null) {
            data.Unk2700_MMNILGLDHHD = this.Unk2700_MMNILGLDHHD;
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
        if (this.Unk3100_LINPNGLHPDL != 0)
            writer.writeUint32(10, this.Unk3100_LINPNGLHPDL);
        if (this.is_open != false)
            writer.writeBool(11, this.is_open);
        if (this.Unk2700_MMNILGLDHHD != false)
            writer.writeBool(5, this.Unk2700_MMNILGLDHHD);
        if (this.stage_id != 0)
            writer.writeUint32(1, this.stage_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Unk3100_APOOGGMHCJI {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk3100_APOOGGMHCJI();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.Unk3100_LINPNGLHPDL = reader.readUint32();
                    break;
                case 11:
                    message.is_open = reader.readBool();
                    break;
                case 5:
                    message.Unk2700_MMNILGLDHHD = reader.readBool();
                    break;
                case 1:
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
    static deserializeBinary(bytes: Uint8Array): Unk3100_APOOGGMHCJI {
        return Unk3100_APOOGGMHCJI.deserialize(bytes);
    }
}
