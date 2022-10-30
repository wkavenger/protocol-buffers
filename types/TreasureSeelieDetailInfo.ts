/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TreasureSeelieDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Unk3000_HDJHHOCABBK";
import * as pb_1 from "google-protobuf";
export class TreasureSeelieDetailInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        treasure_close_time?: number;
        is_content_closed?: boolean;
        Unk3000_NMEPJANNLLE?: dependency_1.Unk3000_HDJHHOCABBK[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("treasure_close_time" in data && data.treasure_close_time != undefined) {
                this.treasure_close_time = data.treasure_close_time;
            }
            if ("is_content_closed" in data && data.is_content_closed != undefined) {
                this.is_content_closed = data.is_content_closed;
            }
            if ("Unk3000_NMEPJANNLLE" in data && data.Unk3000_NMEPJANNLLE != undefined) {
                this.Unk3000_NMEPJANNLLE = data.Unk3000_NMEPJANNLLE;
            }
        }
    }
    get treasure_close_time() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set treasure_close_time(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get is_content_closed() {
        return pb_1.Message.getFieldWithDefault(this, 8, false) as boolean;
    }
    set is_content_closed(value: boolean) {
        pb_1.Message.setField(this, 8, value);
    }
    get Unk3000_NMEPJANNLLE() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk3000_HDJHHOCABBK, 14) as dependency_1.Unk3000_HDJHHOCABBK[];
    }
    set Unk3000_NMEPJANNLLE(value: dependency_1.Unk3000_HDJHHOCABBK[]) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    static fromObject(data: {
        treasure_close_time?: number;
        is_content_closed?: boolean;
        Unk3000_NMEPJANNLLE?: ReturnType<typeof dependency_1.Unk3000_HDJHHOCABBK.prototype.toObject>[];
    }): TreasureSeelieDetailInfo {
        const message = new TreasureSeelieDetailInfo({});
        if (data.treasure_close_time != null) {
            message.treasure_close_time = data.treasure_close_time;
        }
        if (data.is_content_closed != null) {
            message.is_content_closed = data.is_content_closed;
        }
        if (data.Unk3000_NMEPJANNLLE != null) {
            message.Unk3000_NMEPJANNLLE = data.Unk3000_NMEPJANNLLE.map(item => dependency_1.Unk3000_HDJHHOCABBK.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            treasure_close_time?: number;
            is_content_closed?: boolean;
            Unk3000_NMEPJANNLLE?: ReturnType<typeof dependency_1.Unk3000_HDJHHOCABBK.prototype.toObject>[];
        } = {};
        if (this.treasure_close_time != null) {
            data.treasure_close_time = this.treasure_close_time;
        }
        if (this.is_content_closed != null) {
            data.is_content_closed = this.is_content_closed;
        }
        if (this.Unk3000_NMEPJANNLLE != null) {
            data.Unk3000_NMEPJANNLLE = this.Unk3000_NMEPJANNLLE.map((item: dependency_1.Unk3000_HDJHHOCABBK) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.treasure_close_time != 0)
            writer.writeUint32(10, this.treasure_close_time);
        if (this.is_content_closed != false)
            writer.writeBool(8, this.is_content_closed);
        if (this.Unk3000_NMEPJANNLLE.length)
            writer.writeRepeatedMessage(14, this.Unk3000_NMEPJANNLLE, (item: dependency_1.Unk3000_HDJHHOCABBK) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TreasureSeelieDetailInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TreasureSeelieDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.treasure_close_time = reader.readUint32();
                    break;
                case 8:
                    message.is_content_closed = reader.readBool();
                    break;
                case 14:
                    reader.readMessage(message.Unk3000_NMEPJANNLLE, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.Unk3000_HDJHHOCABBK.deserialize(reader), dependency_1.Unk3000_HDJHHOCABBK));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TreasureSeelieDetailInfo {
        return TreasureSeelieDetailInfo.deserialize(bytes);
    }
}
