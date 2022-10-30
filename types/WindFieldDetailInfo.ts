/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WindFieldDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Unk3100_OCAPENGJILJ";
import * as pb_1 from "google-protobuf";
export class WindFieldDetailInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk2700_PHKHIPLDOOA?: dependency_1.Unk3100_OCAPENGJILJ[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_PHKHIPLDOOA" in data && data.Unk2700_PHKHIPLDOOA != undefined) {
                this.Unk2700_PHKHIPLDOOA = data.Unk2700_PHKHIPLDOOA;
            }
        }
    }
    get Unk2700_PHKHIPLDOOA() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk3100_OCAPENGJILJ, 11) as dependency_1.Unk3100_OCAPENGJILJ[];
    }
    set Unk2700_PHKHIPLDOOA(value: dependency_1.Unk3100_OCAPENGJILJ[]) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    static fromObject(data: {
        Unk2700_PHKHIPLDOOA?: ReturnType<typeof dependency_1.Unk3100_OCAPENGJILJ.prototype.toObject>[];
    }): WindFieldDetailInfo {
        const message = new WindFieldDetailInfo({});
        if (data.Unk2700_PHKHIPLDOOA != null) {
            message.Unk2700_PHKHIPLDOOA = data.Unk2700_PHKHIPLDOOA.map(item => dependency_1.Unk3100_OCAPENGJILJ.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            Unk2700_PHKHIPLDOOA?: ReturnType<typeof dependency_1.Unk3100_OCAPENGJILJ.prototype.toObject>[];
        } = {};
        if (this.Unk2700_PHKHIPLDOOA != null) {
            data.Unk2700_PHKHIPLDOOA = this.Unk2700_PHKHIPLDOOA.map((item: dependency_1.Unk3100_OCAPENGJILJ) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_PHKHIPLDOOA.length)
            writer.writeRepeatedMessage(11, this.Unk2700_PHKHIPLDOOA, (item: dependency_1.Unk3100_OCAPENGJILJ) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WindFieldDetailInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WindFieldDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    reader.readMessage(message.Unk2700_PHKHIPLDOOA, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_1.Unk3100_OCAPENGJILJ.deserialize(reader), dependency_1.Unk3100_OCAPENGJILJ));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): WindFieldDetailInfo {
        return WindFieldDetailInfo.deserialize(bytes);
    }
}
