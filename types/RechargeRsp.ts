/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: RechargeRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class RechargeRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        Unk2700_FGENAOBDIEA?: boolean;
        product_id?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("Unk2700_FGENAOBDIEA" in data && data.Unk2700_FGENAOBDIEA != undefined) {
                this.Unk2700_FGENAOBDIEA = data.Unk2700_FGENAOBDIEA;
            }
            if ("product_id" in data && data.product_id != undefined) {
                this.product_id = data.product_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk2700_FGENAOBDIEA() {
        return pb_1.Message.getFieldWithDefault(this, 6, false) as boolean;
    }
    set Unk2700_FGENAOBDIEA(value: boolean) {
        pb_1.Message.setField(this, 6, value);
    }
    get product_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set product_id(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        retcode?: number;
        Unk2700_FGENAOBDIEA?: boolean;
        product_id?: string;
    }): RechargeRsp {
        const message = new RechargeRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.Unk2700_FGENAOBDIEA != null) {
            message.Unk2700_FGENAOBDIEA = data.Unk2700_FGENAOBDIEA;
        }
        if (data.product_id != null) {
            message.product_id = data.product_id;
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            Unk2700_FGENAOBDIEA?: boolean;
            product_id?: string;
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.Unk2700_FGENAOBDIEA != null) {
            data.Unk2700_FGENAOBDIEA = this.Unk2700_FGENAOBDIEA;
        }
        if (this.product_id != null) {
            data.product_id = this.product_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(12, this.retcode);
        if (this.Unk2700_FGENAOBDIEA != false)
            writer.writeBool(6, this.Unk2700_FGENAOBDIEA);
        if (this.product_id.length)
            writer.writeString(2, this.product_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RechargeRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RechargeRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.retcode = reader.readInt32();
                    break;
                case 6:
                    message.Unk2700_FGENAOBDIEA = reader.readBool();
                    break;
                case 2:
                    message.product_id = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RechargeRsp {
        return RechargeRsp.deserialize(bytes);
    }
}
