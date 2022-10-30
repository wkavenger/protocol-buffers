/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChessPickCardNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ChessNormalCardInfo";
import * as pb_1 from "google-protobuf";
export class ChessPickCardNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        curse_card_id?: number;
        normal_card_info?: dependency_1.ChessNormalCardInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("curse_card_id" in data && data.curse_card_id != undefined) {
                this.curse_card_id = data.curse_card_id;
            }
            if ("normal_card_info" in data && data.normal_card_info != undefined) {
                this.normal_card_info = data.normal_card_info;
            }
        }
    }
    get curse_card_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set curse_card_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get normal_card_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.ChessNormalCardInfo, 1) as dependency_1.ChessNormalCardInfo;
    }
    set normal_card_info(value: dependency_1.ChessNormalCardInfo) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_normal_card_info() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data: {
        curse_card_id?: number;
        normal_card_info?: ReturnType<typeof dependency_1.ChessNormalCardInfo.prototype.toObject>;
    }): ChessPickCardNotify {
        const message = new ChessPickCardNotify({});
        if (data.curse_card_id != null) {
            message.curse_card_id = data.curse_card_id;
        }
        if (data.normal_card_info != null) {
            message.normal_card_info = dependency_1.ChessNormalCardInfo.fromObject(data.normal_card_info);
        }
        return message;
    }
    toObject() {
        const data: {
            curse_card_id?: number;
            normal_card_info?: ReturnType<typeof dependency_1.ChessNormalCardInfo.prototype.toObject>;
        } = {};
        if (this.curse_card_id != null) {
            data.curse_card_id = this.curse_card_id;
        }
        if (this.normal_card_info != null) {
            data.normal_card_info = this.normal_card_info.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.curse_card_id != 0)
            writer.writeUint32(13, this.curse_card_id);
        if (this.has_normal_card_info)
            writer.writeMessage(1, this.normal_card_info, () => this.normal_card_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChessPickCardNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChessPickCardNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.curse_card_id = reader.readUint32();
                    break;
                case 1:
                    reader.readMessage(message.normal_card_info, () => message.normal_card_info = dependency_1.ChessNormalCardInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ChessPickCardNotify {
        return ChessPickCardNotify.deserialize(bytes);
    }
}
