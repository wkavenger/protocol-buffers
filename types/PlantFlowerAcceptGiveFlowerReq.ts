/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlantFlowerAcceptGiveFlowerReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class PlantFlowerAcceptGiveFlowerReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        schedule_id?: number;
        uid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
        }
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set schedule_id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set uid(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data: {
        schedule_id?: number;
        uid?: number;
    }): PlantFlowerAcceptGiveFlowerReq {
        const message = new PlantFlowerAcceptGiveFlowerReq({});
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        if (data.uid != null) {
            message.uid = data.uid;
        }
        return message;
    }
    toObject() {
        const data: {
            schedule_id?: number;
            uid?: number;
        } = {};
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        if (this.uid != null) {
            data.uid = this.uid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.schedule_id != 0)
            writer.writeUint32(2, this.schedule_id);
        if (this.uid != 0)
            writer.writeUint32(12, this.uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlantFlowerAcceptGiveFlowerReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlantFlowerAcceptGiveFlowerReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.schedule_id = reader.readUint32();
                    break;
                case 12:
                    message.uid = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlantFlowerAcceptGiveFlowerReq {
        return PlantFlowerAcceptGiveFlowerReq.deserialize(bytes);
    }
}
