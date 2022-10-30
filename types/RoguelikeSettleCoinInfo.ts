/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: RoguelikeSettleCoinInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class RoguelikeSettleCoinInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        coin_c?: number;
        coin_b?: number;
        cell_num?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("coin_c" in data && data.coin_c != undefined) {
                this.coin_c = data.coin_c;
            }
            if ("coin_b" in data && data.coin_b != undefined) {
                this.coin_b = data.coin_b;
            }
            if ("cell_num" in data && data.cell_num != undefined) {
                this.cell_num = data.cell_num;
            }
        }
    }
    get coin_c() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set coin_c(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get coin_b() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set coin_b(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get cell_num() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set cell_num(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        coin_c?: number;
        coin_b?: number;
        cell_num?: number;
    }): RoguelikeSettleCoinInfo {
        const message = new RoguelikeSettleCoinInfo({});
        if (data.coin_c != null) {
            message.coin_c = data.coin_c;
        }
        if (data.coin_b != null) {
            message.coin_b = data.coin_b;
        }
        if (data.cell_num != null) {
            message.cell_num = data.cell_num;
        }
        return message;
    }
    toObject() {
        const data: {
            coin_c?: number;
            coin_b?: number;
            cell_num?: number;
        } = {};
        if (this.coin_c != null) {
            data.coin_c = this.coin_c;
        }
        if (this.coin_b != null) {
            data.coin_b = this.coin_b;
        }
        if (this.cell_num != null) {
            data.cell_num = this.cell_num;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.coin_c != 0)
            writer.writeUint32(8, this.coin_c);
        if (this.coin_b != 0)
            writer.writeUint32(10, this.coin_b);
        if (this.cell_num != 0)
            writer.writeUint32(1, this.cell_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RoguelikeSettleCoinInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RoguelikeSettleCoinInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.coin_c = reader.readUint32();
                    break;
                case 10:
                    message.coin_b = reader.readUint32();
                    break;
                case 1:
                    message.cell_num = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RoguelikeSettleCoinInfo {
        return RoguelikeSettleCoinInfo.deserialize(bytes);
    }
}
