/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerApplyEnterHomeResultNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class PlayerApplyEnterHomeResultNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        target_nickname?: string;
        reason?: PlayerApplyEnterHomeResultNotify.Reason;
        target_uid?: number;
        is_agreed?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("target_nickname" in data && data.target_nickname != undefined) {
                this.target_nickname = data.target_nickname;
            }
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
            if ("is_agreed" in data && data.is_agreed != undefined) {
                this.is_agreed = data.is_agreed;
            }
        }
    }
    get target_nickname() {
        return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
    }
    set target_nickname(value: string) {
        pb_1.Message.setField(this, 7, value);
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 5, PlayerApplyEnterHomeResultNotify.Reason.REASON_PLAYER_JUDGE) as PlayerApplyEnterHomeResultNotify.Reason;
    }
    set reason(value: PlayerApplyEnterHomeResultNotify.Reason) {
        pb_1.Message.setField(this, 5, value);
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set target_uid(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get is_agreed() {
        return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
    }
    set is_agreed(value: boolean) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data: {
        target_nickname?: string;
        reason?: PlayerApplyEnterHomeResultNotify.Reason;
        target_uid?: number;
        is_agreed?: boolean;
    }): PlayerApplyEnterHomeResultNotify {
        const message = new PlayerApplyEnterHomeResultNotify({});
        if (data.target_nickname != null) {
            message.target_nickname = data.target_nickname;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        if (data.is_agreed != null) {
            message.is_agreed = data.is_agreed;
        }
        return message;
    }
    toObject() {
        const data: {
            target_nickname?: string;
            reason?: PlayerApplyEnterHomeResultNotify.Reason;
            target_uid?: number;
            is_agreed?: boolean;
        } = {};
        if (this.target_nickname != null) {
            data.target_nickname = this.target_nickname;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.target_uid != null) {
            data.target_uid = this.target_uid;
        }
        if (this.is_agreed != null) {
            data.is_agreed = this.is_agreed;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.target_nickname.length)
            writer.writeString(7, this.target_nickname);
        if (this.reason != PlayerApplyEnterHomeResultNotify.Reason.REASON_PLAYER_JUDGE)
            writer.writeEnum(5, this.reason);
        if (this.target_uid != 0)
            writer.writeUint32(12, this.target_uid);
        if (this.is_agreed != false)
            writer.writeBool(9, this.is_agreed);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerApplyEnterHomeResultNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerApplyEnterHomeResultNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.target_nickname = reader.readString();
                    break;
                case 5:
                    message.reason = reader.readEnum();
                    break;
                case 12:
                    message.target_uid = reader.readUint32();
                    break;
                case 9:
                    message.is_agreed = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerApplyEnterHomeResultNotify {
        return PlayerApplyEnterHomeResultNotify.deserialize(bytes);
    }
}
export namespace PlayerApplyEnterHomeResultNotify {
    export enum Reason {
        REASON_PLAYER_JUDGE = 0,
        REASON_PLAYER_ENTER_OPTION_REFUSE = 1,
        REASON_PLAYER_ENTER_OPTION_DIRECT = 2,
        REASON_SYSTEM_JUDGE = 3,
        REASON_HOST_IN_MATCH = 4,
        REASON_PS_PLAYER_NOT_ACCEPT_OTHERS = 5,
        REASON_OPEN_STATE_NOT_OPEN = 6,
        REASON_HOST_IN_EDIT_MODE = 7,
        REASON_PRIOR_CHECK = 8
    }
}
