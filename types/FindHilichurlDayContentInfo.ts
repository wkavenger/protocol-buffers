/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FindHilichurlDayContentInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class FindHilichurlDayContentInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        start_time?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("start_time" in data && data.start_time != undefined) {
                this.start_time = data.start_time;
            }
        }
    }
    get start_time() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set start_time(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        start_time?: number;
    }): FindHilichurlDayContentInfo {
        const message = new FindHilichurlDayContentInfo({});
        if (data.start_time != null) {
            message.start_time = data.start_time;
        }
        return message;
    }
    toObject() {
        const data: {
            start_time?: number;
        } = {};
        if (this.start_time != null) {
            data.start_time = this.start_time;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.start_time != 0)
            writer.writeUint32(1, this.start_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FindHilichurlDayContentInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FindHilichurlDayContentInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.start_time = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FindHilichurlDayContentInfo {
        return FindHilichurlDayContentInfo.deserialize(bytes);
    }
}
