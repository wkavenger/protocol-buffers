/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HideAndSeekPlayerReadyNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class HideAndSeekPlayerReadyNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        uid_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("uid_list" in data && data.uid_list != undefined) {
                this.uid_list = data.uid_list;
            }
        }
    }
    get uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 5, []) as number[];
    }
    set uid_list(value: number[]) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        uid_list?: number[];
    }): HideAndSeekPlayerReadyNotify {
        const message = new HideAndSeekPlayerReadyNotify({});
        if (data.uid_list != null) {
            message.uid_list = data.uid_list;
        }
        return message;
    }
    toObject() {
        const data: {
            uid_list?: number[];
        } = {};
        if (this.uid_list != null) {
            data.uid_list = this.uid_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.uid_list.length)
            writer.writePackedUint32(5, this.uid_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HideAndSeekPlayerReadyNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HideAndSeekPlayerReadyNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.uid_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HideAndSeekPlayerReadyNotify {
        return HideAndSeekPlayerReadyNotify.deserialize(bytes);
    }
}
