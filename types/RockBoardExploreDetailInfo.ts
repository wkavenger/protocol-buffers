/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: RockBoardExploreDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Unk3100_FKKBIDJONKF";
import * as pb_1 from "google-protobuf";
export class RockBoardExploreDetailInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk2800_PDBHCBCLFBM?: dependency_1.Unk3100_FKKBIDJONKF[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2800_PDBHCBCLFBM" in data && data.Unk2800_PDBHCBCLFBM != undefined) {
                this.Unk2800_PDBHCBCLFBM = data.Unk2800_PDBHCBCLFBM;
            }
        }
    }
    get Unk2800_PDBHCBCLFBM() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk3100_FKKBIDJONKF, 9) as dependency_1.Unk3100_FKKBIDJONKF[];
    }
    set Unk2800_PDBHCBCLFBM(value: dependency_1.Unk3100_FKKBIDJONKF[]) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    static fromObject(data: {
        Unk2800_PDBHCBCLFBM?: ReturnType<typeof dependency_1.Unk3100_FKKBIDJONKF.prototype.toObject>[];
    }): RockBoardExploreDetailInfo {
        const message = new RockBoardExploreDetailInfo({});
        if (data.Unk2800_PDBHCBCLFBM != null) {
            message.Unk2800_PDBHCBCLFBM = data.Unk2800_PDBHCBCLFBM.map(item => dependency_1.Unk3100_FKKBIDJONKF.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            Unk2800_PDBHCBCLFBM?: ReturnType<typeof dependency_1.Unk3100_FKKBIDJONKF.prototype.toObject>[];
        } = {};
        if (this.Unk2800_PDBHCBCLFBM != null) {
            data.Unk2800_PDBHCBCLFBM = this.Unk2800_PDBHCBCLFBM.map((item: dependency_1.Unk3100_FKKBIDJONKF) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2800_PDBHCBCLFBM.length)
            writer.writeRepeatedMessage(9, this.Unk2800_PDBHCBCLFBM, (item: dependency_1.Unk3100_FKKBIDJONKF) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RockBoardExploreDetailInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RockBoardExploreDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    reader.readMessage(message.Unk2800_PDBHCBCLFBM, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_1.Unk3100_FKKBIDJONKF.deserialize(reader), dependency_1.Unk3100_FKKBIDJONKF));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): RockBoardExploreDetailInfo {
        return RockBoardExploreDetailInfo.deserialize(bytes);
    }
}
