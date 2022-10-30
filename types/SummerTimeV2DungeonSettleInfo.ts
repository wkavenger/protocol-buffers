/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SummerTimeV2DungeonSettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SummerTimeV2DungeonSettleInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_success?: boolean;
        Unk2800_ELHBCNPKOJG?: number;
        Unk2800_HDEFJKGDNEH?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_success" in data && data.is_success != undefined) {
                this.is_success = data.is_success;
            }
            if ("Unk2800_ELHBCNPKOJG" in data && data.Unk2800_ELHBCNPKOJG != undefined) {
                this.Unk2800_ELHBCNPKOJG = data.Unk2800_ELHBCNPKOJG;
            }
            if ("Unk2800_HDEFJKGDNEH" in data && data.Unk2800_HDEFJKGDNEH != undefined) {
                this.Unk2800_HDEFJKGDNEH = data.Unk2800_HDEFJKGDNEH;
            }
        }
    }
    get is_success() {
        return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
    }
    set is_success(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    get Unk2800_ELHBCNPKOJG() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set Unk2800_ELHBCNPKOJG(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get Unk2800_HDEFJKGDNEH() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set Unk2800_HDEFJKGDNEH(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        is_success?: boolean;
        Unk2800_ELHBCNPKOJG?: number;
        Unk2800_HDEFJKGDNEH?: number;
    }): SummerTimeV2DungeonSettleInfo {
        const message = new SummerTimeV2DungeonSettleInfo({});
        if (data.is_success != null) {
            message.is_success = data.is_success;
        }
        if (data.Unk2800_ELHBCNPKOJG != null) {
            message.Unk2800_ELHBCNPKOJG = data.Unk2800_ELHBCNPKOJG;
        }
        if (data.Unk2800_HDEFJKGDNEH != null) {
            message.Unk2800_HDEFJKGDNEH = data.Unk2800_HDEFJKGDNEH;
        }
        return message;
    }
    toObject() {
        const data: {
            is_success?: boolean;
            Unk2800_ELHBCNPKOJG?: number;
            Unk2800_HDEFJKGDNEH?: number;
        } = {};
        if (this.is_success != null) {
            data.is_success = this.is_success;
        }
        if (this.Unk2800_ELHBCNPKOJG != null) {
            data.Unk2800_ELHBCNPKOJG = this.Unk2800_ELHBCNPKOJG;
        }
        if (this.Unk2800_HDEFJKGDNEH != null) {
            data.Unk2800_HDEFJKGDNEH = this.Unk2800_HDEFJKGDNEH;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_success != false)
            writer.writeBool(5, this.is_success);
        if (this.Unk2800_ELHBCNPKOJG != 0)
            writer.writeUint32(2, this.Unk2800_ELHBCNPKOJG);
        if (this.Unk2800_HDEFJKGDNEH != 0)
            writer.writeUint32(11, this.Unk2800_HDEFJKGDNEH);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SummerTimeV2DungeonSettleInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SummerTimeV2DungeonSettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.is_success = reader.readBool();
                    break;
                case 2:
                    message.Unk2800_ELHBCNPKOJG = reader.readUint32();
                    break;
                case 11:
                    message.Unk2800_HDEFJKGDNEH = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SummerTimeV2DungeonSettleInfo {
        return SummerTimeV2DungeonSettleInfo.deserialize(bytes);
    }
}
