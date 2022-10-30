/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeAvatarSummonEventRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class HomeAvatarSummonEventRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        event_id?: number;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("event_id" in data && data.event_id != undefined) {
                this.event_id = data.event_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get event_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set event_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        event_id?: number;
        retcode?: number;
    }): HomeAvatarSummonEventRsp {
        const message = new HomeAvatarSummonEventRsp({});
        if (data.event_id != null) {
            message.event_id = data.event_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            event_id?: number;
            retcode?: number;
        } = {};
        if (this.event_id != null) {
            data.event_id = this.event_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.event_id != 0)
            writer.writeUint32(11, this.event_id);
        if (this.retcode != 0)
            writer.writeInt32(14, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HomeAvatarSummonEventRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeAvatarSummonEventRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.event_id = reader.readUint32();
                    break;
                case 14:
                    message.retcode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HomeAvatarSummonEventRsp {
        return HomeAvatarSummonEventRsp.deserialize(bytes);
    }
}
