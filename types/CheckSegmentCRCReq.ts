/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CheckSegmentCRCReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./SegmentCRCInfo";
import * as pb_1 from "google-protobuf";
export class CheckSegmentCRCReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        info_list?: dependency_1.SegmentCRCInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("info_list" in data && data.info_list != undefined) {
                this.info_list = data.info_list;
            }
        }
    }
    get info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.SegmentCRCInfo, 1) as dependency_1.SegmentCRCInfo[];
    }
    set info_list(value: dependency_1.SegmentCRCInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data: {
        info_list?: ReturnType<typeof dependency_1.SegmentCRCInfo.prototype.toObject>[];
    }): CheckSegmentCRCReq {
        const message = new CheckSegmentCRCReq({});
        if (data.info_list != null) {
            message.info_list = data.info_list.map(item => dependency_1.SegmentCRCInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            info_list?: ReturnType<typeof dependency_1.SegmentCRCInfo.prototype.toObject>[];
        } = {};
        if (this.info_list != null) {
            data.info_list = this.info_list.map((item: dependency_1.SegmentCRCInfo) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.info_list.length)
            writer.writeRepeatedMessage(1, this.info_list, (item: dependency_1.SegmentCRCInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CheckSegmentCRCReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CheckSegmentCRCReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.SegmentCRCInfo.deserialize(reader), dependency_1.SegmentCRCInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CheckSegmentCRCReq {
        return CheckSegmentCRCReq.deserialize(bytes);
    }
}
