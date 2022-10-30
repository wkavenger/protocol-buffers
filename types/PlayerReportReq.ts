/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerReportReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ReportReasonType";
import * as pb_1 from "google-protobuf";
export class PlayerReportReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        reason?: dependency_1.ReportReasonType;
        content?: string;
        target_home_module_id?: number;
        target_home_module_name?: string;
        target_uid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("content" in data && data.content != undefined) {
                this.content = data.content;
            }
            if ("target_home_module_id" in data && data.target_home_module_id != undefined) {
                this.target_home_module_id = data.target_home_module_id;
            }
            if ("target_home_module_name" in data && data.target_home_module_name != undefined) {
                this.target_home_module_name = data.target_home_module_name;
            }
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
        }
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 12, dependency_1.ReportReasonType.REPORT_REASON_TYPE_NONE) as dependency_1.ReportReasonType;
    }
    set reason(value: dependency_1.ReportReasonType) {
        pb_1.Message.setField(this, 12, value);
    }
    get content() {
        return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
    }
    set content(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get target_home_module_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set target_home_module_id(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get target_home_module_name() {
        return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
    }
    set target_home_module_name(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set target_uid(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        reason?: dependency_1.ReportReasonType;
        content?: string;
        target_home_module_id?: number;
        target_home_module_name?: string;
        target_uid?: number;
    }): PlayerReportReq {
        const message = new PlayerReportReq({});
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.content != null) {
            message.content = data.content;
        }
        if (data.target_home_module_id != null) {
            message.target_home_module_id = data.target_home_module_id;
        }
        if (data.target_home_module_name != null) {
            message.target_home_module_name = data.target_home_module_name;
        }
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        return message;
    }
    toObject() {
        const data: {
            reason?: dependency_1.ReportReasonType;
            content?: string;
            target_home_module_id?: number;
            target_home_module_name?: string;
            target_uid?: number;
        } = {};
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.content != null) {
            data.content = this.content;
        }
        if (this.target_home_module_id != null) {
            data.target_home_module_id = this.target_home_module_id;
        }
        if (this.target_home_module_name != null) {
            data.target_home_module_name = this.target_home_module_name;
        }
        if (this.target_uid != null) {
            data.target_uid = this.target_uid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.reason != dependency_1.ReportReasonType.REPORT_REASON_TYPE_NONE)
            writer.writeEnum(12, this.reason);
        if (this.content.length)
            writer.writeString(8, this.content);
        if (this.target_home_module_id != 0)
            writer.writeUint32(5, this.target_home_module_id);
        if (this.target_home_module_name.length)
            writer.writeString(6, this.target_home_module_name);
        if (this.target_uid != 0)
            writer.writeUint32(14, this.target_uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerReportReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerReportReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.reason = reader.readEnum();
                    break;
                case 8:
                    message.content = reader.readString();
                    break;
                case 5:
                    message.target_home_module_id = reader.readUint32();
                    break;
                case 6:
                    message.target_home_module_name = reader.readString();
                    break;
                case 14:
                    message.target_uid = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerReportReq {
        return PlayerReportReq.deserialize(bytes);
    }
}
