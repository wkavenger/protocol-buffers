/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_GCPNGHFNGDP.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ItemParam";
import * as pb_1 from "google-protobuf";
export class Unk2700_GCPNGHFNGDP extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk2700_ANAEHLBDFIC?: number[];
        Unk2700_PMMJDKJHBIG?: dependency_1.ItemParam[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 7], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_ANAEHLBDFIC" in data && data.Unk2700_ANAEHLBDFIC != undefined) {
                this.Unk2700_ANAEHLBDFIC = data.Unk2700_ANAEHLBDFIC;
            }
            if ("Unk2700_PMMJDKJHBIG" in data && data.Unk2700_PMMJDKJHBIG != undefined) {
                this.Unk2700_PMMJDKJHBIG = data.Unk2700_PMMJDKJHBIG;
            }
        }
    }
    get Unk2700_ANAEHLBDFIC() {
        return pb_1.Message.getFieldWithDefault(this, 1, []) as number[];
    }
    set Unk2700_ANAEHLBDFIC(value: number[]) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk2700_PMMJDKJHBIG() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 7) as dependency_1.ItemParam[];
    }
    set Unk2700_PMMJDKJHBIG(value: dependency_1.ItemParam[]) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    static fromObject(data: {
        Unk2700_ANAEHLBDFIC?: number[];
        Unk2700_PMMJDKJHBIG?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
    }): Unk2700_GCPNGHFNGDP {
        const message = new Unk2700_GCPNGHFNGDP({});
        if (data.Unk2700_ANAEHLBDFIC != null) {
            message.Unk2700_ANAEHLBDFIC = data.Unk2700_ANAEHLBDFIC;
        }
        if (data.Unk2700_PMMJDKJHBIG != null) {
            message.Unk2700_PMMJDKJHBIG = data.Unk2700_PMMJDKJHBIG.map(item => dependency_1.ItemParam.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            Unk2700_ANAEHLBDFIC?: number[];
            Unk2700_PMMJDKJHBIG?: ReturnType<typeof dependency_1.ItemParam.prototype.toObject>[];
        } = {};
        if (this.Unk2700_ANAEHLBDFIC != null) {
            data.Unk2700_ANAEHLBDFIC = this.Unk2700_ANAEHLBDFIC;
        }
        if (this.Unk2700_PMMJDKJHBIG != null) {
            data.Unk2700_PMMJDKJHBIG = this.Unk2700_PMMJDKJHBIG.map((item: dependency_1.ItemParam) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_ANAEHLBDFIC.length)
            writer.writePackedUint32(1, this.Unk2700_ANAEHLBDFIC);
        if (this.Unk2700_PMMJDKJHBIG.length)
            writer.writeRepeatedMessage(7, this.Unk2700_PMMJDKJHBIG, (item: dependency_1.ItemParam) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Unk2700_GCPNGHFNGDP {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_GCPNGHFNGDP();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.Unk2700_ANAEHLBDFIC = reader.readPackedUint32();
                    break;
                case 7:
                    reader.readMessage(message.Unk2700_PMMJDKJHBIG, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Unk2700_GCPNGHFNGDP {
        return Unk2700_GCPNGHFNGDP.deserialize(bytes);
    }
}
