/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: RemoveRandTaskInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class RemoveRandTaskInfoNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_succ?: boolean;
        reason?: RemoveRandTaskInfoNotify.FinishReason;
        rand_task_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_succ" in data && data.is_succ != undefined) {
                this.is_succ = data.is_succ;
            }
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("rand_task_id" in data && data.rand_task_id != undefined) {
                this.rand_task_id = data.rand_task_id;
            }
        }
    }
    get is_succ() {
        return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
    }
    set is_succ(value: boolean) {
        pb_1.Message.setField(this, 9, value);
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 10, RemoveRandTaskInfoNotify.FinishReason.FINISH_REASON_DEFAULT) as RemoveRandTaskInfoNotify.FinishReason;
    }
    set reason(value: RemoveRandTaskInfoNotify.FinishReason) {
        pb_1.Message.setField(this, 10, value);
    }
    get rand_task_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set rand_task_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data: {
        is_succ?: boolean;
        reason?: RemoveRandTaskInfoNotify.FinishReason;
        rand_task_id?: number;
    }): RemoveRandTaskInfoNotify {
        const message = new RemoveRandTaskInfoNotify({});
        if (data.is_succ != null) {
            message.is_succ = data.is_succ;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.rand_task_id != null) {
            message.rand_task_id = data.rand_task_id;
        }
        return message;
    }
    toObject() {
        const data: {
            is_succ?: boolean;
            reason?: RemoveRandTaskInfoNotify.FinishReason;
            rand_task_id?: number;
        } = {};
        if (this.is_succ != null) {
            data.is_succ = this.is_succ;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.rand_task_id != null) {
            data.rand_task_id = this.rand_task_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_succ != false)
            writer.writeBool(9, this.is_succ);
        if (this.reason != RemoveRandTaskInfoNotify.FinishReason.FINISH_REASON_DEFAULT)
            writer.writeEnum(10, this.reason);
        if (this.rand_task_id != 0)
            writer.writeUint32(13, this.rand_task_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RemoveRandTaskInfoNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RemoveRandTaskInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.is_succ = reader.readBool();
                    break;
                case 10:
                    message.reason = reader.readEnum();
                    break;
                case 13:
                    message.rand_task_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RemoveRandTaskInfoNotify {
        return RemoveRandTaskInfoNotify.deserialize(bytes);
    }
}
export namespace RemoveRandTaskInfoNotify {
    export enum FinishReason {
        FINISH_REASON_DEFAULT = 0,
        FINISH_REASON_CLEAR = 1,
        FINISH_REASON_DISTANCE = 2,
        FINISH_REASON_FINISH = 3
    }
}
