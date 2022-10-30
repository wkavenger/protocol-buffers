/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_FDEGJOCDDGH.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class Unk2700_FDEGJOCDDGH extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        cur_progress?: number;
        challenge_index?: number;
        is_success?: boolean;
        challenge_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cur_progress" in data && data.cur_progress != undefined) {
                this.cur_progress = data.cur_progress;
            }
            if ("challenge_index" in data && data.challenge_index != undefined) {
                this.challenge_index = data.challenge_index;
            }
            if ("is_success" in data && data.is_success != undefined) {
                this.is_success = data.is_success;
            }
            if ("challenge_id" in data && data.challenge_id != undefined) {
                this.challenge_id = data.challenge_id;
            }
        }
    }
    get cur_progress() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set cur_progress(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get challenge_index() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set challenge_index(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get is_success() {
        return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
    }
    set is_success(value: boolean) {
        pb_1.Message.setField(this, 4, value);
    }
    get challenge_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set challenge_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        cur_progress?: number;
        challenge_index?: number;
        is_success?: boolean;
        challenge_id?: number;
    }): Unk2700_FDEGJOCDDGH {
        const message = new Unk2700_FDEGJOCDDGH({});
        if (data.cur_progress != null) {
            message.cur_progress = data.cur_progress;
        }
        if (data.challenge_index != null) {
            message.challenge_index = data.challenge_index;
        }
        if (data.is_success != null) {
            message.is_success = data.is_success;
        }
        if (data.challenge_id != null) {
            message.challenge_id = data.challenge_id;
        }
        return message;
    }
    toObject() {
        const data: {
            cur_progress?: number;
            challenge_index?: number;
            is_success?: boolean;
            challenge_id?: number;
        } = {};
        if (this.cur_progress != null) {
            data.cur_progress = this.cur_progress;
        }
        if (this.challenge_index != null) {
            data.challenge_index = this.challenge_index;
        }
        if (this.is_success != null) {
            data.is_success = this.is_success;
        }
        if (this.challenge_id != null) {
            data.challenge_id = this.challenge_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cur_progress != 0)
            writer.writeUint32(9, this.cur_progress);
        if (this.challenge_index != 0)
            writer.writeUint32(10, this.challenge_index);
        if (this.is_success != false)
            writer.writeBool(4, this.is_success);
        if (this.challenge_id != 0)
            writer.writeUint32(8, this.challenge_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Unk2700_FDEGJOCDDGH {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_FDEGJOCDDGH();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.cur_progress = reader.readUint32();
                    break;
                case 10:
                    message.challenge_index = reader.readUint32();
                    break;
                case 4:
                    message.is_success = reader.readBool();
                    break;
                case 8:
                    message.challenge_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Unk2700_FDEGJOCDDGH {
        return Unk2700_FDEGJOCDDGH.deserialize(bytes);
    }
}
