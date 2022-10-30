/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetPlayerSocialDetailReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class GetPlayerSocialDetailReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        uid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
        }
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set uid(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data: {
        uid?: number;
    }): GetPlayerSocialDetailReq {
        const message = new GetPlayerSocialDetailReq({});
        if (data.uid != null) {
            message.uid = data.uid;
        }
        return message;
    }
    toObject() {
        const data: {
            uid?: number;
        } = {};
        if (this.uid != null) {
            data.uid = this.uid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.uid != 0)
            writer.writeUint32(9, this.uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetPlayerSocialDetailReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetPlayerSocialDetailReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.uid = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetPlayerSocialDetailReq {
        return GetPlayerSocialDetailReq.deserialize(bytes);
    }
}
