/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WorldRoutineInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class WorldRoutineInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        progress?: number;
        is_finished?: boolean;
        finish_progress?: number;
        routine_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("progress" in data && data.progress != undefined) {
                this.progress = data.progress;
            }
            if ("is_finished" in data && data.is_finished != undefined) {
                this.is_finished = data.is_finished;
            }
            if ("finish_progress" in data && data.finish_progress != undefined) {
                this.finish_progress = data.finish_progress;
            }
            if ("routine_id" in data && data.routine_id != undefined) {
                this.routine_id = data.routine_id;
            }
        }
    }
    get progress() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set progress(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get is_finished() {
        return pb_1.Message.getFieldWithDefault(this, 14, false) as boolean;
    }
    set is_finished(value: boolean) {
        pb_1.Message.setField(this, 14, value);
    }
    get finish_progress() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set finish_progress(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get routine_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set routine_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        progress?: number;
        is_finished?: boolean;
        finish_progress?: number;
        routine_id?: number;
    }): WorldRoutineInfo {
        const message = new WorldRoutineInfo({});
        if (data.progress != null) {
            message.progress = data.progress;
        }
        if (data.is_finished != null) {
            message.is_finished = data.is_finished;
        }
        if (data.finish_progress != null) {
            message.finish_progress = data.finish_progress;
        }
        if (data.routine_id != null) {
            message.routine_id = data.routine_id;
        }
        return message;
    }
    toObject() {
        const data: {
            progress?: number;
            is_finished?: boolean;
            finish_progress?: number;
            routine_id?: number;
        } = {};
        if (this.progress != null) {
            data.progress = this.progress;
        }
        if (this.is_finished != null) {
            data.is_finished = this.is_finished;
        }
        if (this.finish_progress != null) {
            data.finish_progress = this.finish_progress;
        }
        if (this.routine_id != null) {
            data.routine_id = this.routine_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.progress != 0)
            writer.writeUint32(4, this.progress);
        if (this.is_finished != false)
            writer.writeBool(14, this.is_finished);
        if (this.finish_progress != 0)
            writer.writeUint32(3, this.finish_progress);
        if (this.routine_id != 0)
            writer.writeUint32(11, this.routine_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WorldRoutineInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WorldRoutineInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.progress = reader.readUint32();
                    break;
                case 14:
                    message.is_finished = reader.readBool();
                    break;
                case 3:
                    message.finish_progress = reader.readUint32();
                    break;
                case 11:
                    message.routine_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): WorldRoutineInfo {
        return WorldRoutineInfo.deserialize(bytes);
    }
}
