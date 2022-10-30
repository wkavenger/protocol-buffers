/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetInvestigationMonsterReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class GetInvestigationMonsterReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        city_id_list?: number[];
        Unk2700_DEMFDHNFBBJ?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("city_id_list" in data && data.city_id_list != undefined) {
                this.city_id_list = data.city_id_list;
            }
            if ("Unk2700_DEMFDHNFBBJ" in data && data.Unk2700_DEMFDHNFBBJ != undefined) {
                this.Unk2700_DEMFDHNFBBJ = data.Unk2700_DEMFDHNFBBJ;
            }
        }
    }
    get city_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []) as number[];
    }
    set city_id_list(value: number[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get Unk2700_DEMFDHNFBBJ() {
        return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
    }
    set Unk2700_DEMFDHNFBBJ(value: boolean) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        city_id_list?: number[];
        Unk2700_DEMFDHNFBBJ?: boolean;
    }): GetInvestigationMonsterReq {
        const message = new GetInvestigationMonsterReq({});
        if (data.city_id_list != null) {
            message.city_id_list = data.city_id_list;
        }
        if (data.Unk2700_DEMFDHNFBBJ != null) {
            message.Unk2700_DEMFDHNFBBJ = data.Unk2700_DEMFDHNFBBJ;
        }
        return message;
    }
    toObject() {
        const data: {
            city_id_list?: number[];
            Unk2700_DEMFDHNFBBJ?: boolean;
        } = {};
        if (this.city_id_list != null) {
            data.city_id_list = this.city_id_list;
        }
        if (this.Unk2700_DEMFDHNFBBJ != null) {
            data.Unk2700_DEMFDHNFBBJ = this.Unk2700_DEMFDHNFBBJ;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.city_id_list.length)
            writer.writePackedUint32(3, this.city_id_list);
        if (this.Unk2700_DEMFDHNFBBJ != false)
            writer.writeBool(4, this.Unk2700_DEMFDHNFBBJ);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetInvestigationMonsterReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetInvestigationMonsterReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.city_id_list = reader.readPackedUint32();
                    break;
                case 4:
                    message.Unk2700_DEMFDHNFBBJ = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetInvestigationMonsterReq {
        return GetInvestigationMonsterReq.deserialize(bytes);
    }
}
