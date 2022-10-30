/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ReceivedTrialAvatarActivityRewardRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ReceivedTrialAvatarActivityRewardRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        activity_id?: number;
        retcode?: number;
        trial_avatar_index_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("trial_avatar_index_id" in data && data.trial_avatar_index_id != undefined) {
                this.trial_avatar_index_id = data.trial_avatar_index_id;
            }
        }
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set activity_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get trial_avatar_index_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set trial_avatar_index_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data: {
        activity_id?: number;
        retcode?: number;
        trial_avatar_index_id?: number;
    }): ReceivedTrialAvatarActivityRewardRsp {
        const message = new ReceivedTrialAvatarActivityRewardRsp({});
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.trial_avatar_index_id != null) {
            message.trial_avatar_index_id = data.trial_avatar_index_id;
        }
        return message;
    }
    toObject() {
        const data: {
            activity_id?: number;
            retcode?: number;
            trial_avatar_index_id?: number;
        } = {};
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.trial_avatar_index_id != null) {
            data.trial_avatar_index_id = this.trial_avatar_index_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.activity_id != 0)
            writer.writeUint32(13, this.activity_id);
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (this.trial_avatar_index_id != 0)
            writer.writeUint32(9, this.trial_avatar_index_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ReceivedTrialAvatarActivityRewardRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReceivedTrialAvatarActivityRewardRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.activity_id = reader.readUint32();
                    break;
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                case 9:
                    message.trial_avatar_index_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ReceivedTrialAvatarActivityRewardRsp {
        return ReceivedTrialAvatarActivityRewardRsp.deserialize(bytes);
    }
}
