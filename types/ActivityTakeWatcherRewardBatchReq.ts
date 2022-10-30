/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ActivityTakeWatcherRewardBatchReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ActivityTakeWatcherRewardBatchReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        watcher_id_list?: number[];
        activity_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("watcher_id_list" in data && data.watcher_id_list != undefined) {
                this.watcher_id_list = data.watcher_id_list;
            }
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
        }
    }
    get watcher_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 11, []) as number[];
    }
    set watcher_id_list(value: number[]) {
        pb_1.Message.setField(this, 11, value);
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set activity_id(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        watcher_id_list?: number[];
        activity_id?: number;
    }): ActivityTakeWatcherRewardBatchReq {
        const message = new ActivityTakeWatcherRewardBatchReq({});
        if (data.watcher_id_list != null) {
            message.watcher_id_list = data.watcher_id_list;
        }
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        return message;
    }
    toObject() {
        const data: {
            watcher_id_list?: number[];
            activity_id?: number;
        } = {};
        if (this.watcher_id_list != null) {
            data.watcher_id_list = this.watcher_id_list;
        }
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.watcher_id_list.length)
            writer.writePackedUint32(11, this.watcher_id_list);
        if (this.activity_id != 0)
            writer.writeUint32(3, this.activity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ActivityTakeWatcherRewardBatchReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ActivityTakeWatcherRewardBatchReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.watcher_id_list = reader.readPackedUint32();
                    break;
                case 3:
                    message.activity_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ActivityTakeWatcherRewardBatchReq {
        return ActivityTakeWatcherRewardBatchReq.deserialize(bytes);
    }
}
