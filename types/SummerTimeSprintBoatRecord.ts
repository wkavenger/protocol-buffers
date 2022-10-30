/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SummerTimeSprintBoatRecord.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SummerTimeSprintBoatRecord extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        best_score?: number;
        start_time?: number;
        is_touched?: boolean;
        watcher_id_list?: number[];
        group_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [10], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("best_score" in data && data.best_score != undefined) {
                this.best_score = data.best_score;
            }
            if ("start_time" in data && data.start_time != undefined) {
                this.start_time = data.start_time;
            }
            if ("is_touched" in data && data.is_touched != undefined) {
                this.is_touched = data.is_touched;
            }
            if ("watcher_id_list" in data && data.watcher_id_list != undefined) {
                this.watcher_id_list = data.watcher_id_list;
            }
            if ("group_id" in data && data.group_id != undefined) {
                this.group_id = data.group_id;
            }
        }
    }
    get best_score() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set best_score(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get start_time() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set start_time(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get is_touched() {
        return pb_1.Message.getFieldWithDefault(this, 7, false) as boolean;
    }
    set is_touched(value: boolean) {
        pb_1.Message.setField(this, 7, value);
    }
    get watcher_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 10, []) as number[];
    }
    set watcher_id_list(value: number[]) {
        pb_1.Message.setField(this, 10, value);
    }
    get group_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set group_id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        best_score?: number;
        start_time?: number;
        is_touched?: boolean;
        watcher_id_list?: number[];
        group_id?: number;
    }): SummerTimeSprintBoatRecord {
        const message = new SummerTimeSprintBoatRecord({});
        if (data.best_score != null) {
            message.best_score = data.best_score;
        }
        if (data.start_time != null) {
            message.start_time = data.start_time;
        }
        if (data.is_touched != null) {
            message.is_touched = data.is_touched;
        }
        if (data.watcher_id_list != null) {
            message.watcher_id_list = data.watcher_id_list;
        }
        if (data.group_id != null) {
            message.group_id = data.group_id;
        }
        return message;
    }
    toObject() {
        const data: {
            best_score?: number;
            start_time?: number;
            is_touched?: boolean;
            watcher_id_list?: number[];
            group_id?: number;
        } = {};
        if (this.best_score != null) {
            data.best_score = this.best_score;
        }
        if (this.start_time != null) {
            data.start_time = this.start_time;
        }
        if (this.is_touched != null) {
            data.is_touched = this.is_touched;
        }
        if (this.watcher_id_list != null) {
            data.watcher_id_list = this.watcher_id_list;
        }
        if (this.group_id != null) {
            data.group_id = this.group_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.best_score != 0)
            writer.writeUint32(3, this.best_score);
        if (this.start_time != 0)
            writer.writeUint32(13, this.start_time);
        if (this.is_touched != false)
            writer.writeBool(7, this.is_touched);
        if (this.watcher_id_list.length)
            writer.writePackedUint32(10, this.watcher_id_list);
        if (this.group_id != 0)
            writer.writeUint32(2, this.group_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SummerTimeSprintBoatRecord {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SummerTimeSprintBoatRecord();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.best_score = reader.readUint32();
                    break;
                case 13:
                    message.start_time = reader.readUint32();
                    break;
                case 7:
                    message.is_touched = reader.readBool();
                    break;
                case 10:
                    message.watcher_id_list = reader.readPackedUint32();
                    break;
                case 2:
                    message.group_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SummerTimeSprintBoatRecord {
        return SummerTimeSprintBoatRecord.deserialize(bytes);
    }
}
