/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetOpActivityInfoRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./OpActivityInfo";
import * as pb_1 from "google-protobuf";
export class GetOpActivityInfoRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        op_activity_info_list?: dependency_1.OpActivityInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("op_activity_info_list" in data && data.op_activity_info_list != undefined) {
                this.op_activity_info_list = data.op_activity_info_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get op_activity_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.OpActivityInfo, 7) as dependency_1.OpActivityInfo[];
    }
    set op_activity_info_list(value: dependency_1.OpActivityInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    static fromObject(data: {
        retcode?: number;
        op_activity_info_list?: ReturnType<typeof dependency_1.OpActivityInfo.prototype.toObject>[];
    }): GetOpActivityInfoRsp {
        const message = new GetOpActivityInfoRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.op_activity_info_list != null) {
            message.op_activity_info_list = data.op_activity_info_list.map(item => dependency_1.OpActivityInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            op_activity_info_list?: ReturnType<typeof dependency_1.OpActivityInfo.prototype.toObject>[];
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.op_activity_info_list != null) {
            data.op_activity_info_list = this.op_activity_info_list.map((item: dependency_1.OpActivityInfo) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(10, this.retcode);
        if (this.op_activity_info_list.length)
            writer.writeRepeatedMessage(7, this.op_activity_info_list, (item: dependency_1.OpActivityInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetOpActivityInfoRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetOpActivityInfoRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.retcode = reader.readInt32();
                    break;
                case 7:
                    reader.readMessage(message.op_activity_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_1.OpActivityInfo.deserialize(reader), dependency_1.OpActivityInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetOpActivityInfoRsp {
        return GetOpActivityInfoRsp.deserialize(bytes);
    }
}
