/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EquipRoguelikeRuneReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class EquipRoguelikeRuneReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        rune_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("rune_list" in data && data.rune_list != undefined) {
                this.rune_list = data.rune_list;
            }
        }
    }
    get rune_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []) as number[];
    }
    set rune_list(value: number[]) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        rune_list?: number[];
    }): EquipRoguelikeRuneReq {
        const message = new EquipRoguelikeRuneReq({});
        if (data.rune_list != null) {
            message.rune_list = data.rune_list;
        }
        return message;
    }
    toObject() {
        const data: {
            rune_list?: number[];
        } = {};
        if (this.rune_list != null) {
            data.rune_list = this.rune_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.rune_list.length)
            writer.writePackedUint32(3, this.rune_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EquipRoguelikeRuneReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EquipRoguelikeRuneReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.rune_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EquipRoguelikeRuneReq {
        return EquipRoguelikeRuneReq.deserialize(bytes);
    }
}
