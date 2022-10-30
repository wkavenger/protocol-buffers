/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SocialDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SocialDataNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_have_first_share?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_have_first_share" in data && data.is_have_first_share != undefined) {
                this.is_have_first_share = data.is_have_first_share;
            }
        }
    }
    get is_have_first_share() {
        return pb_1.Message.getFieldWithDefault(this, 11, false) as boolean;
    }
    set is_have_first_share(value: boolean) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        is_have_first_share?: boolean;
    }): SocialDataNotify {
        const message = new SocialDataNotify({});
        if (data.is_have_first_share != null) {
            message.is_have_first_share = data.is_have_first_share;
        }
        return message;
    }
    toObject() {
        const data: {
            is_have_first_share?: boolean;
        } = {};
        if (this.is_have_first_share != null) {
            data.is_have_first_share = this.is_have_first_share;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_have_first_share != false)
            writer.writeBool(11, this.is_have_first_share);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SocialDataNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SocialDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.is_have_first_share = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SocialDataNotify {
        return SocialDataNotify.deserialize(bytes);
    }
}
