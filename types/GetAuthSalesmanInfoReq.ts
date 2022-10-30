/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetAuthSalesmanInfoReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class GetAuthSalesmanInfoReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        schedule_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
        }
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set schedule_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        schedule_id?: number;
    }): GetAuthSalesmanInfoReq {
        const message = new GetAuthSalesmanInfoReq({});
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        return message;
    }
    toObject() {
        const data: {
            schedule_id?: number;
        } = {};
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.schedule_id != 0)
            writer.writeUint32(8, this.schedule_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetAuthSalesmanInfoReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetAuthSalesmanInfoReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.schedule_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetAuthSalesmanInfoReq {
        return GetAuthSalesmanInfoReq.deserialize(bytes);
    }
}
