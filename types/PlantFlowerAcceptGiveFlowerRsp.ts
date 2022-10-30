/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlantFlowerAcceptGiveFlowerRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PlantFlowerAcceptFlowerResultInfo";
import * as pb_1 from "google-protobuf";
export class PlantFlowerAcceptGiveFlowerRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        schedule_id?: number;
        accept_flower_result_info?: dependency_1.PlantFlowerAcceptFlowerResultInfo;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
            if ("accept_flower_result_info" in data && data.accept_flower_result_info != undefined) {
                this.accept_flower_result_info = data.accept_flower_result_info;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set schedule_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get accept_flower_result_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.PlantFlowerAcceptFlowerResultInfo, 15) as dependency_1.PlantFlowerAcceptFlowerResultInfo;
    }
    set accept_flower_result_info(value: dependency_1.PlantFlowerAcceptFlowerResultInfo) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get has_accept_flower_result_info() {
        return pb_1.Message.getField(this, 15) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data: {
        schedule_id?: number;
        accept_flower_result_info?: ReturnType<typeof dependency_1.PlantFlowerAcceptFlowerResultInfo.prototype.toObject>;
        retcode?: number;
    }): PlantFlowerAcceptGiveFlowerRsp {
        const message = new PlantFlowerAcceptGiveFlowerRsp({});
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        if (data.accept_flower_result_info != null) {
            message.accept_flower_result_info = dependency_1.PlantFlowerAcceptFlowerResultInfo.fromObject(data.accept_flower_result_info);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            schedule_id?: number;
            accept_flower_result_info?: ReturnType<typeof dependency_1.PlantFlowerAcceptFlowerResultInfo.prototype.toObject>;
            retcode?: number;
        } = {};
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        if (this.accept_flower_result_info != null) {
            data.accept_flower_result_info = this.accept_flower_result_info.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.schedule_id != 0)
            writer.writeUint32(1, this.schedule_id);
        if (this.has_accept_flower_result_info)
            writer.writeMessage(15, this.accept_flower_result_info, () => this.accept_flower_result_info.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(12, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlantFlowerAcceptGiveFlowerRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlantFlowerAcceptGiveFlowerRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.schedule_id = reader.readUint32();
                    break;
                case 15:
                    reader.readMessage(message.accept_flower_result_info, () => message.accept_flower_result_info = dependency_1.PlantFlowerAcceptFlowerResultInfo.deserialize(reader));
                    break;
                case 12:
                    message.retcode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlantFlowerAcceptGiveFlowerRsp {
        return PlantFlowerAcceptGiveFlowerRsp.deserialize(bytes);
    }
}
