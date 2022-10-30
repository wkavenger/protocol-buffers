/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerOfferingDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PlayerOfferingData";
import * as pb_1 from "google-protobuf";
export class PlayerOfferingDataNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        offering_data_list?: dependency_1.PlayerOfferingData[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("offering_data_list" in data && data.offering_data_list != undefined) {
                this.offering_data_list = data.offering_data_list;
            }
        }
    }
    get offering_data_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PlayerOfferingData, 2) as dependency_1.PlayerOfferingData[];
    }
    set offering_data_list(value: dependency_1.PlayerOfferingData[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data: {
        offering_data_list?: ReturnType<typeof dependency_1.PlayerOfferingData.prototype.toObject>[];
    }): PlayerOfferingDataNotify {
        const message = new PlayerOfferingDataNotify({});
        if (data.offering_data_list != null) {
            message.offering_data_list = data.offering_data_list.map(item => dependency_1.PlayerOfferingData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            offering_data_list?: ReturnType<typeof dependency_1.PlayerOfferingData.prototype.toObject>[];
        } = {};
        if (this.offering_data_list != null) {
            data.offering_data_list = this.offering_data_list.map((item: dependency_1.PlayerOfferingData) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.offering_data_list.length)
            writer.writeRepeatedMessage(2, this.offering_data_list, (item: dependency_1.PlayerOfferingData) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerOfferingDataNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerOfferingDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    reader.readMessage(message.offering_data_list, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.PlayerOfferingData.deserialize(reader), dependency_1.PlayerOfferingData));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerOfferingDataNotify {
        return PlayerOfferingDataNotify.deserialize(bytes);
    }
}
