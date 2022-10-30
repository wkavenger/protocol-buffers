/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChannelerSlabStageOneofDungeonNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ChannelerSlabStageOneofDungeonNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        stage_id?: number;
        is_done?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("is_done" in data && data.is_done != undefined) {
                this.is_done = data.is_done;
            }
        }
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set stage_id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get is_done() {
        return pb_1.Message.getFieldWithDefault(this, 8, false) as boolean;
    }
    set is_done(value: boolean) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        stage_id?: number;
        is_done?: boolean;
    }): ChannelerSlabStageOneofDungeonNotify {
        const message = new ChannelerSlabStageOneofDungeonNotify({});
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.is_done != null) {
            message.is_done = data.is_done;
        }
        return message;
    }
    toObject() {
        const data: {
            stage_id?: number;
            is_done?: boolean;
        } = {};
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.is_done != null) {
            data.is_done = this.is_done;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_id != 0)
            writer.writeUint32(2, this.stage_id);
        if (this.is_done != false)
            writer.writeBool(8, this.is_done);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChannelerSlabStageOneofDungeonNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChannelerSlabStageOneofDungeonNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.stage_id = reader.readUint32();
                    break;
                case 8:
                    message.is_done = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ChannelerSlabStageOneofDungeonNotify {
        return ChannelerSlabStageOneofDungeonNotify.deserialize(bytes);
    }
}
