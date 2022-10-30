/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: OneofGatherPointDetectorDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./OneofGatherPointDetectorData";
import * as pb_1 from "google-protobuf";
export class OneofGatherPointDetectorDataNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        oneof_gather_point_detector_data_list?: dependency_1.OneofGatherPointDetectorData[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("oneof_gather_point_detector_data_list" in data && data.oneof_gather_point_detector_data_list != undefined) {
                this.oneof_gather_point_detector_data_list = data.oneof_gather_point_detector_data_list;
            }
        }
    }
    get oneof_gather_point_detector_data_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.OneofGatherPointDetectorData, 3) as dependency_1.OneofGatherPointDetectorData[];
    }
    set oneof_gather_point_detector_data_list(value: dependency_1.OneofGatherPointDetectorData[]) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data: {
        oneof_gather_point_detector_data_list?: ReturnType<typeof dependency_1.OneofGatherPointDetectorData.prototype.toObject>[];
    }): OneofGatherPointDetectorDataNotify {
        const message = new OneofGatherPointDetectorDataNotify({});
        if (data.oneof_gather_point_detector_data_list != null) {
            message.oneof_gather_point_detector_data_list = data.oneof_gather_point_detector_data_list.map(item => dependency_1.OneofGatherPointDetectorData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            oneof_gather_point_detector_data_list?: ReturnType<typeof dependency_1.OneofGatherPointDetectorData.prototype.toObject>[];
        } = {};
        if (this.oneof_gather_point_detector_data_list != null) {
            data.oneof_gather_point_detector_data_list = this.oneof_gather_point_detector_data_list.map((item: dependency_1.OneofGatherPointDetectorData) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.oneof_gather_point_detector_data_list.length)
            writer.writeRepeatedMessage(3, this.oneof_gather_point_detector_data_list, (item: dependency_1.OneofGatherPointDetectorData) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OneofGatherPointDetectorDataNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OneofGatherPointDetectorDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.oneof_gather_point_detector_data_list, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.OneofGatherPointDetectorData.deserialize(reader), dependency_1.OneofGatherPointDetectorData));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): OneofGatherPointDetectorDataNotify {
        return OneofGatherPointDetectorDataNotify.deserialize(bytes);
    }
}
