/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DraftGuestReplyInviteReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class DraftGuestReplyInviteReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        draft_id?: number;
        is_agree?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("draft_id" in data && data.draft_id != undefined) {
                this.draft_id = data.draft_id;
            }
            if ("is_agree" in data && data.is_agree != undefined) {
                this.is_agree = data.is_agree;
            }
        }
    }
    get draft_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set draft_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get is_agree() {
        return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
    }
    set is_agree(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        draft_id?: number;
        is_agree?: boolean;
    }): DraftGuestReplyInviteReq {
        const message = new DraftGuestReplyInviteReq({});
        if (data.draft_id != null) {
            message.draft_id = data.draft_id;
        }
        if (data.is_agree != null) {
            message.is_agree = data.is_agree;
        }
        return message;
    }
    toObject() {
        const data: {
            draft_id?: number;
            is_agree?: boolean;
        } = {};
        if (this.draft_id != null) {
            data.draft_id = this.draft_id;
        }
        if (this.is_agree != null) {
            data.is_agree = this.is_agree;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.draft_id != 0)
            writer.writeUint32(10, this.draft_id);
        if (this.is_agree != false)
            writer.writeBool(3, this.is_agree);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DraftGuestReplyInviteReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DraftGuestReplyInviteReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.draft_id = reader.readUint32();
                    break;
                case 3:
                    message.is_agree = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DraftGuestReplyInviteReq {
        return DraftGuestReplyInviteReq.deserialize(bytes);
    }
}
