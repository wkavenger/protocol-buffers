/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: IslandPartyActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Unk2800_MBKLJLMLIKF";
import * as pb_1 from "google-protobuf";
export class IslandPartyActivityDetailInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk2800_PDBHCBCLFBM?: dependency_1.Unk2800_MBKLJLMLIKF[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2800_PDBHCBCLFBM" in data && data.Unk2800_PDBHCBCLFBM != undefined) {
                this.Unk2800_PDBHCBCLFBM = data.Unk2800_PDBHCBCLFBM;
            }
        }
    }
    get Unk2800_PDBHCBCLFBM() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk2800_MBKLJLMLIKF, 15) as dependency_1.Unk2800_MBKLJLMLIKF[];
    }
    set Unk2800_PDBHCBCLFBM(value: dependency_1.Unk2800_MBKLJLMLIKF[]) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    static fromObject(data: {
        Unk2800_PDBHCBCLFBM?: ReturnType<typeof dependency_1.Unk2800_MBKLJLMLIKF.prototype.toObject>[];
    }): IslandPartyActivityDetailInfo {
        const message = new IslandPartyActivityDetailInfo({});
        if (data.Unk2800_PDBHCBCLFBM != null) {
            message.Unk2800_PDBHCBCLFBM = data.Unk2800_PDBHCBCLFBM.map(item => dependency_1.Unk2800_MBKLJLMLIKF.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            Unk2800_PDBHCBCLFBM?: ReturnType<typeof dependency_1.Unk2800_MBKLJLMLIKF.prototype.toObject>[];
        } = {};
        if (this.Unk2800_PDBHCBCLFBM != null) {
            data.Unk2800_PDBHCBCLFBM = this.Unk2800_PDBHCBCLFBM.map((item: dependency_1.Unk2800_MBKLJLMLIKF) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2800_PDBHCBCLFBM.length)
            writer.writeRepeatedMessage(15, this.Unk2800_PDBHCBCLFBM, (item: dependency_1.Unk2800_MBKLJLMLIKF) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IslandPartyActivityDetailInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IslandPartyActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.Unk2800_PDBHCBCLFBM, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.Unk2800_MBKLJLMLIKF.deserialize(reader), dependency_1.Unk2800_MBKLJLMLIKF));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): IslandPartyActivityDetailInfo {
        return IslandPartyActivityDetailInfo.deserialize(bytes);
    }
}
