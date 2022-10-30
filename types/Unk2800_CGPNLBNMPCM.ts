/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2800_CGPNLBNMPCM.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class Unk2800_CGPNLBNMPCM extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        open_time?: number;
        is_open?: boolean;
        stage_id?: number;
        best_score?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("best_score" in data && data.best_score != undefined) {
                this.best_score = data.best_score;
            }
        }
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set open_time(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 14, false) as boolean;
    }
    set is_open(value: boolean) {
        pb_1.Message.setField(this, 14, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set stage_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get best_score() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set best_score(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data: {
        open_time?: number;
        is_open?: boolean;
        stage_id?: number;
        best_score?: number;
    }): Unk2800_CGPNLBNMPCM {
        const message = new Unk2800_CGPNLBNMPCM({});
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.best_score != null) {
            message.best_score = data.best_score;
        }
        return message;
    }
    toObject() {
        const data: {
            open_time?: number;
            is_open?: boolean;
            stage_id?: number;
            best_score?: number;
        } = {};
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.best_score != null) {
            data.best_score = this.best_score;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.open_time != 0)
            writer.writeUint32(7, this.open_time);
        if (this.is_open != false)
            writer.writeBool(14, this.is_open);
        if (this.stage_id != 0)
            writer.writeUint32(10, this.stage_id);
        if (this.best_score != 0)
            writer.writeUint32(13, this.best_score);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Unk2800_CGPNLBNMPCM {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2800_CGPNLBNMPCM();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.open_time = reader.readUint32();
                    break;
                case 14:
                    message.is_open = reader.readBool();
                    break;
                case 10:
                    message.stage_id = reader.readUint32();
                    break;
                case 13:
                    message.best_score = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Unk2800_CGPNLBNMPCM {
        return Unk2800_CGPNLBNMPCM.deserialize(bytes);
    }
}
