/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MpPlayGuestReplyInviteReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class MpPlayGuestReplyInviteReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        mp_play_id?: number;
        is_agree?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mp_play_id" in data && data.mp_play_id != undefined) {
                this.mp_play_id = data.mp_play_id;
            }
            if ("is_agree" in data && data.is_agree != undefined) {
                this.is_agree = data.is_agree;
            }
        }
    }
    get mp_play_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set mp_play_id(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get is_agree() {
        return pb_1.Message.getFieldWithDefault(this, 15, false) as boolean;
    }
    set is_agree(value: boolean) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data: {
        mp_play_id?: number;
        is_agree?: boolean;
    }): MpPlayGuestReplyInviteReq {
        const message = new MpPlayGuestReplyInviteReq({});
        if (data.mp_play_id != null) {
            message.mp_play_id = data.mp_play_id;
        }
        if (data.is_agree != null) {
            message.is_agree = data.is_agree;
        }
        return message;
    }
    toObject() {
        const data: {
            mp_play_id?: number;
            is_agree?: boolean;
        } = {};
        if (this.mp_play_id != null) {
            data.mp_play_id = this.mp_play_id;
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
        if (this.mp_play_id != 0)
            writer.writeUint32(3, this.mp_play_id);
        if (this.is_agree != false)
            writer.writeBool(15, this.is_agree);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MpPlayGuestReplyInviteReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MpPlayGuestReplyInviteReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.mp_play_id = reader.readUint32();
                    break;
                case 15:
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
    static deserializeBinary(bytes: Uint8Array): MpPlayGuestReplyInviteReq {
        return MpPlayGuestReplyInviteReq.deserialize(bytes);
    }
}
