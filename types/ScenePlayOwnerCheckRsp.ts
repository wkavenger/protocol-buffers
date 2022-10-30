/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ScenePlayOwnerCheckRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ScenePlayOwnerCheckRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        param_list?: number[];
        is_skip_match?: boolean;
        play_id?: number;
        wrong_uid?: number;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("param_list" in data && data.param_list != undefined) {
                this.param_list = data.param_list;
            }
            if ("is_skip_match" in data && data.is_skip_match != undefined) {
                this.is_skip_match = data.is_skip_match;
            }
            if ("play_id" in data && data.play_id != undefined) {
                this.play_id = data.play_id;
            }
            if ("wrong_uid" in data && data.wrong_uid != undefined) {
                this.wrong_uid = data.wrong_uid;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get param_list() {
        return pb_1.Message.getFieldWithDefault(this, 8, []) as number[];
    }
    set param_list(value: number[]) {
        pb_1.Message.setField(this, 8, value);
    }
    get is_skip_match() {
        return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
    }
    set is_skip_match(value: boolean) {
        pb_1.Message.setField(this, 1, value);
    }
    get play_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set play_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get wrong_uid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set wrong_uid(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        param_list?: number[];
        is_skip_match?: boolean;
        play_id?: number;
        wrong_uid?: number;
        retcode?: number;
    }): ScenePlayOwnerCheckRsp {
        const message = new ScenePlayOwnerCheckRsp({});
        if (data.param_list != null) {
            message.param_list = data.param_list;
        }
        if (data.is_skip_match != null) {
            message.is_skip_match = data.is_skip_match;
        }
        if (data.play_id != null) {
            message.play_id = data.play_id;
        }
        if (data.wrong_uid != null) {
            message.wrong_uid = data.wrong_uid;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            param_list?: number[];
            is_skip_match?: boolean;
            play_id?: number;
            wrong_uid?: number;
            retcode?: number;
        } = {};
        if (this.param_list != null) {
            data.param_list = this.param_list;
        }
        if (this.is_skip_match != null) {
            data.is_skip_match = this.is_skip_match;
        }
        if (this.play_id != null) {
            data.play_id = this.play_id;
        }
        if (this.wrong_uid != null) {
            data.wrong_uid = this.wrong_uid;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.param_list.length)
            writer.writePackedUint32(8, this.param_list);
        if (this.is_skip_match != false)
            writer.writeBool(1, this.is_skip_match);
        if (this.play_id != 0)
            writer.writeUint32(9, this.play_id);
        if (this.wrong_uid != 0)
            writer.writeUint32(5, this.wrong_uid);
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ScenePlayOwnerCheckRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScenePlayOwnerCheckRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.param_list = reader.readPackedUint32();
                    break;
                case 1:
                    message.is_skip_match = reader.readBool();
                    break;
                case 9:
                    message.play_id = reader.readUint32();
                    break;
                case 5:
                    message.wrong_uid = reader.readUint32();
                    break;
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ScenePlayOwnerCheckRsp {
        return ScenePlayOwnerCheckRsp.deserialize(bytes);
    }
}
