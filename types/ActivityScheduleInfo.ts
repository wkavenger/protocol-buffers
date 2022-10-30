/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ActivityScheduleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ActivityScheduleInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        schedule_id?: number;
        is_open?: boolean;
        activity_id?: number;
        end_time?: number;
        begin_time?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
            if ("begin_time" in data && data.begin_time != undefined) {
                this.begin_time = data.begin_time;
            }
        }
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set schedule_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
    }
    set is_open(value: boolean) {
        pb_1.Message.setField(this, 2, value);
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set activity_id(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set end_time(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get begin_time() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set begin_time(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        schedule_id?: number;
        is_open?: boolean;
        activity_id?: number;
        end_time?: number;
        begin_time?: number;
    }): ActivityScheduleInfo {
        const message = new ActivityScheduleInfo({});
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        if (data.begin_time != null) {
            message.begin_time = data.begin_time;
        }
        return message;
    }
    toObject() {
        const data: {
            schedule_id?: number;
            is_open?: boolean;
            activity_id?: number;
            end_time?: number;
            begin_time?: number;
        } = {};
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        if (this.begin_time != null) {
            data.begin_time = this.begin_time;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.schedule_id != 0)
            writer.writeUint32(13, this.schedule_id);
        if (this.is_open != false)
            writer.writeBool(2, this.is_open);
        if (this.activity_id != 0)
            writer.writeUint32(14, this.activity_id);
        if (this.end_time != 0)
            writer.writeUint32(1, this.end_time);
        if (this.begin_time != 0)
            writer.writeUint32(10, this.begin_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ActivityScheduleInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ActivityScheduleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.schedule_id = reader.readUint32();
                    break;
                case 2:
                    message.is_open = reader.readBool();
                    break;
                case 14:
                    message.activity_id = reader.readUint32();
                    break;
                case 1:
                    message.end_time = reader.readUint32();
                    break;
                case 10:
                    message.begin_time = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ActivityScheduleInfo {
        return ActivityScheduleInfo.deserialize(bytes);
    }
}
