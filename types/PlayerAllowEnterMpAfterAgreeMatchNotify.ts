/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerAllowEnterMpAfterAgreeMatchNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class PlayerAllowEnterMpAfterAgreeMatchNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        target_uid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
        }
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set target_uid(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        target_uid?: number;
    }): PlayerAllowEnterMpAfterAgreeMatchNotify {
        const message = new PlayerAllowEnterMpAfterAgreeMatchNotify({});
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        return message;
    }
    toObject() {
        const data: {
            target_uid?: number;
        } = {};
        if (this.target_uid != null) {
            data.target_uid = this.target_uid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.target_uid != 0)
            writer.writeUint32(1, this.target_uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerAllowEnterMpAfterAgreeMatchNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerAllowEnterMpAfterAgreeMatchNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.target_uid = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerAllowEnterMpAfterAgreeMatchNotify {
        return PlayerAllowEnterMpAfterAgreeMatchNotify.deserialize(bytes);
    }
}
