/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MusicGameSettleRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class MusicGameSettleRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        music_basic_id?: number;
        is_new_record?: boolean;
        is_unlock_next_level?: boolean;
        Unk2700_CEPGMKAHHCD?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("music_basic_id" in data && data.music_basic_id != undefined) {
                this.music_basic_id = data.music_basic_id;
            }
            if ("is_new_record" in data && data.is_new_record != undefined) {
                this.is_new_record = data.is_new_record;
            }
            if ("is_unlock_next_level" in data && data.is_unlock_next_level != undefined) {
                this.is_unlock_next_level = data.is_unlock_next_level;
            }
            if ("Unk2700_CEPGMKAHHCD" in data && data.Unk2700_CEPGMKAHHCD != undefined) {
                this.Unk2700_CEPGMKAHHCD = data.Unk2700_CEPGMKAHHCD;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get music_basic_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set music_basic_id(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get is_new_record() {
        return pb_1.Message.getFieldWithDefault(this, 6, false) as boolean;
    }
    set is_new_record(value: boolean) {
        pb_1.Message.setField(this, 6, value);
    }
    get is_unlock_next_level() {
        return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
    }
    set is_unlock_next_level(value: boolean) {
        pb_1.Message.setField(this, 2, value);
    }
    get Unk2700_CEPGMKAHHCD() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set Unk2700_CEPGMKAHHCD(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        retcode?: number;
        music_basic_id?: number;
        is_new_record?: boolean;
        is_unlock_next_level?: boolean;
        Unk2700_CEPGMKAHHCD?: number;
    }): MusicGameSettleRsp {
        const message = new MusicGameSettleRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.music_basic_id != null) {
            message.music_basic_id = data.music_basic_id;
        }
        if (data.is_new_record != null) {
            message.is_new_record = data.is_new_record;
        }
        if (data.is_unlock_next_level != null) {
            message.is_unlock_next_level = data.is_unlock_next_level;
        }
        if (data.Unk2700_CEPGMKAHHCD != null) {
            message.Unk2700_CEPGMKAHHCD = data.Unk2700_CEPGMKAHHCD;
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            music_basic_id?: number;
            is_new_record?: boolean;
            is_unlock_next_level?: boolean;
            Unk2700_CEPGMKAHHCD?: number;
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.music_basic_id != null) {
            data.music_basic_id = this.music_basic_id;
        }
        if (this.is_new_record != null) {
            data.is_new_record = this.is_new_record;
        }
        if (this.is_unlock_next_level != null) {
            data.is_unlock_next_level = this.is_unlock_next_level;
        }
        if (this.Unk2700_CEPGMKAHHCD != null) {
            data.Unk2700_CEPGMKAHHCD = this.Unk2700_CEPGMKAHHCD;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(11, this.retcode);
        if (this.music_basic_id != 0)
            writer.writeUint32(5, this.music_basic_id);
        if (this.is_new_record != false)
            writer.writeBool(6, this.is_new_record);
        if (this.is_unlock_next_level != false)
            writer.writeBool(2, this.is_unlock_next_level);
        if (this.Unk2700_CEPGMKAHHCD != 0)
            writer.writeUint64(10, this.Unk2700_CEPGMKAHHCD);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MusicGameSettleRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MusicGameSettleRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.retcode = reader.readInt32();
                    break;
                case 5:
                    message.music_basic_id = reader.readUint32();
                    break;
                case 6:
                    message.is_new_record = reader.readBool();
                    break;
                case 2:
                    message.is_unlock_next_level = reader.readBool();
                    break;
                case 10:
                    message.Unk2700_CEPGMKAHHCD = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MusicGameSettleRsp {
        return MusicGameSettleRsp.deserialize(bytes);
    }
}
