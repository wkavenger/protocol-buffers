/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CommonPlayerTipsNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class CommonPlayerTipsNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        notify_type?: number;
        text_map_id_list?: string[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("notify_type" in data && data.notify_type != undefined) {
                this.notify_type = data.notify_type;
            }
            if ("text_map_id_list" in data && data.text_map_id_list != undefined) {
                this.text_map_id_list = data.text_map_id_list;
            }
        }
    }
    get notify_type() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set notify_type(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get text_map_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 9, []) as string[];
    }
    set text_map_id_list(value: string[]) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data: {
        notify_type?: number;
        text_map_id_list?: string[];
    }): CommonPlayerTipsNotify {
        const message = new CommonPlayerTipsNotify({});
        if (data.notify_type != null) {
            message.notify_type = data.notify_type;
        }
        if (data.text_map_id_list != null) {
            message.text_map_id_list = data.text_map_id_list;
        }
        return message;
    }
    toObject() {
        const data: {
            notify_type?: number;
            text_map_id_list?: string[];
        } = {};
        if (this.notify_type != null) {
            data.notify_type = this.notify_type;
        }
        if (this.text_map_id_list != null) {
            data.text_map_id_list = this.text_map_id_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.notify_type != 0)
            writer.writeUint32(3, this.notify_type);
        if (this.text_map_id_list.length)
            writer.writeRepeatedString(9, this.text_map_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CommonPlayerTipsNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CommonPlayerTipsNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.notify_type = reader.readUint32();
                    break;
                case 9:
                    pb_1.Message.addToRepeatedField(message, 9, reader.readString());
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CommonPlayerTipsNotify {
        return CommonPlayerTipsNotify.deserialize(bytes);
    }
}
