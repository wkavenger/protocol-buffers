/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarPromoteReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AvatarPromoteReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        guid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("guid" in data && data.guid != undefined) {
                this.guid = data.guid;
            }
        }
    }
    get guid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set guid(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        guid?: number;
    }): AvatarPromoteReq {
        const message = new AvatarPromoteReq({});
        if (data.guid != null) {
            message.guid = data.guid;
        }
        return message;
    }
    toObject() {
        const data: {
            guid?: number;
        } = {};
        if (this.guid != null) {
            data.guid = this.guid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.guid != 0)
            writer.writeUint64(5, this.guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AvatarPromoteReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarPromoteReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.guid = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AvatarPromoteReq {
        return AvatarPromoteReq.deserialize(bytes);
    }
}
