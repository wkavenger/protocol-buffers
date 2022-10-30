/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeMarkPointNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./HomeMarkPointSceneData";
import * as pb_1 from "google-protobuf";
export class HomeMarkPointNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        mark_point_data_list?: dependency_1.HomeMarkPointSceneData[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mark_point_data_list" in data && data.mark_point_data_list != undefined) {
                this.mark_point_data_list = data.mark_point_data_list;
            }
        }
    }
    get mark_point_data_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.HomeMarkPointSceneData, 12) as dependency_1.HomeMarkPointSceneData[];
    }
    set mark_point_data_list(value: dependency_1.HomeMarkPointSceneData[]) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    static fromObject(data: {
        mark_point_data_list?: ReturnType<typeof dependency_1.HomeMarkPointSceneData.prototype.toObject>[];
    }): HomeMarkPointNotify {
        const message = new HomeMarkPointNotify({});
        if (data.mark_point_data_list != null) {
            message.mark_point_data_list = data.mark_point_data_list.map(item => dependency_1.HomeMarkPointSceneData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            mark_point_data_list?: ReturnType<typeof dependency_1.HomeMarkPointSceneData.prototype.toObject>[];
        } = {};
        if (this.mark_point_data_list != null) {
            data.mark_point_data_list = this.mark_point_data_list.map((item: dependency_1.HomeMarkPointSceneData) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mark_point_data_list.length)
            writer.writeRepeatedMessage(12, this.mark_point_data_list, (item: dependency_1.HomeMarkPointSceneData) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HomeMarkPointNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeMarkPointNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    reader.readMessage(message.mark_point_data_list, () => pb_1.Message.addToRepeatedWrapperField(message, 12, dependency_1.HomeMarkPointSceneData.deserialize(reader), dependency_1.HomeMarkPointSceneData));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HomeMarkPointNotify {
        return HomeMarkPointNotify.deserialize(bytes);
    }
}
