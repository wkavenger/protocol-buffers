/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairFallSettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./FallSettleInfo";
import * as pb_1 from "google-protobuf";
export class FleurFairFallSettleInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        settle_info?: dependency_1.FallSettleInfo;
        is_new_record?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("settle_info" in data && data.settle_info != undefined) {
                this.settle_info = data.settle_info;
            }
            if ("is_new_record" in data && data.is_new_record != undefined) {
                this.is_new_record = data.is_new_record;
            }
        }
    }
    get settle_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.FallSettleInfo, 4) as dependency_1.FallSettleInfo;
    }
    set settle_info(value: dependency_1.FallSettleInfo) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_settle_info() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get is_new_record() {
        return pb_1.Message.getFieldWithDefault(this, 10, false) as boolean;
    }
    set is_new_record(value: boolean) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        settle_info?: ReturnType<typeof dependency_1.FallSettleInfo.prototype.toObject>;
        is_new_record?: boolean;
    }): FleurFairFallSettleInfo {
        const message = new FleurFairFallSettleInfo({});
        if (data.settle_info != null) {
            message.settle_info = dependency_1.FallSettleInfo.fromObject(data.settle_info);
        }
        if (data.is_new_record != null) {
            message.is_new_record = data.is_new_record;
        }
        return message;
    }
    toObject() {
        const data: {
            settle_info?: ReturnType<typeof dependency_1.FallSettleInfo.prototype.toObject>;
            is_new_record?: boolean;
        } = {};
        if (this.settle_info != null) {
            data.settle_info = this.settle_info.toObject();
        }
        if (this.is_new_record != null) {
            data.is_new_record = this.is_new_record;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_settle_info)
            writer.writeMessage(4, this.settle_info, () => this.settle_info.serialize(writer));
        if (this.is_new_record != false)
            writer.writeBool(10, this.is_new_record);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FleurFairFallSettleInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairFallSettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.settle_info, () => message.settle_info = dependency_1.FallSettleInfo.deserialize(reader));
                    break;
                case 10:
                    message.is_new_record = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FleurFairFallSettleInfo {
        return FleurFairFallSettleInfo.deserialize(bytes);
    }
}
