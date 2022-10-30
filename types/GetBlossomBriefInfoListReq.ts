/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetBlossomBriefInfoListReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class GetBlossomBriefInfoListReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        city_id_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("city_id_list" in data && data.city_id_list != undefined) {
                this.city_id_list = data.city_id_list;
            }
        }
    }
    get city_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 4, []) as number[];
    }
    set city_id_list(value: number[]) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        city_id_list?: number[];
    }): GetBlossomBriefInfoListReq {
        const message = new GetBlossomBriefInfoListReq({});
        if (data.city_id_list != null) {
            message.city_id_list = data.city_id_list;
        }
        return message;
    }
    toObject() {
        const data: {
            city_id_list?: number[];
        } = {};
        if (this.city_id_list != null) {
            data.city_id_list = this.city_id_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.city_id_list.length)
            writer.writePackedUint32(4, this.city_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetBlossomBriefInfoListReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetBlossomBriefInfoListReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.city_id_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetBlossomBriefInfoListReq {
        return GetBlossomBriefInfoListReq.deserialize(bytes);
    }
}
