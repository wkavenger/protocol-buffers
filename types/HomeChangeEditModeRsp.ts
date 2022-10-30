/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeChangeEditModeRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class HomeChangeEditModeRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        is_enter_edit_mode?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("is_enter_edit_mode" in data && data.is_enter_edit_mode != undefined) {
                this.is_enter_edit_mode = data.is_enter_edit_mode;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get is_enter_edit_mode() {
        return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
    }
    set is_enter_edit_mode(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        retcode?: number;
        is_enter_edit_mode?: boolean;
    }): HomeChangeEditModeRsp {
        const message = new HomeChangeEditModeRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.is_enter_edit_mode != null) {
            message.is_enter_edit_mode = data.is_enter_edit_mode;
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            is_enter_edit_mode?: boolean;
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.is_enter_edit_mode != null) {
            data.is_enter_edit_mode = this.is_enter_edit_mode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(10, this.retcode);
        if (this.is_enter_edit_mode != false)
            writer.writeBool(5, this.is_enter_edit_mode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HomeChangeEditModeRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeChangeEditModeRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.retcode = reader.readInt32();
                    break;
                case 5:
                    message.is_enter_edit_mode = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HomeChangeEditModeRsp {
        return HomeChangeEditModeRsp.deserialize(bytes);
    }
}
