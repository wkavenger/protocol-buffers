/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SaveCoopDialogReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SaveCoopDialogReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        main_coop_id?: number;
        dialog_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("main_coop_id" in data && data.main_coop_id != undefined) {
                this.main_coop_id = data.main_coop_id;
            }
            if ("dialog_id" in data && data.dialog_id != undefined) {
                this.dialog_id = data.dialog_id;
            }
        }
    }
    get main_coop_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set main_coop_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get dialog_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set dialog_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        main_coop_id?: number;
        dialog_id?: number;
    }): SaveCoopDialogReq {
        const message = new SaveCoopDialogReq({});
        if (data.main_coop_id != null) {
            message.main_coop_id = data.main_coop_id;
        }
        if (data.dialog_id != null) {
            message.dialog_id = data.dialog_id;
        }
        return message;
    }
    toObject() {
        const data: {
            main_coop_id?: number;
            dialog_id?: number;
        } = {};
        if (this.main_coop_id != null) {
            data.main_coop_id = this.main_coop_id;
        }
        if (this.dialog_id != null) {
            data.dialog_id = this.dialog_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.main_coop_id != 0)
            writer.writeUint32(11, this.main_coop_id);
        if (this.dialog_id != 0)
            writer.writeUint32(6, this.dialog_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SaveCoopDialogReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SaveCoopDialogReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.main_coop_id = reader.readUint32();
                    break;
                case 6:
                    message.dialog_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SaveCoopDialogReq {
        return SaveCoopDialogReq.deserialize(bytes);
    }
}
