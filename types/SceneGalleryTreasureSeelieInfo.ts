/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryTreasureSeelieInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SceneGalleryTreasureSeelieInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        progress?: number;
        Unk3000_MONNEPNGNCA?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("progress" in data && data.progress != undefined) {
                this.progress = data.progress;
            }
            if ("Unk3000_MONNEPNGNCA" in data && data.Unk3000_MONNEPNGNCA != undefined) {
                this.Unk3000_MONNEPNGNCA = data.Unk3000_MONNEPNGNCA;
            }
        }
    }
    get progress() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set progress(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get Unk3000_MONNEPNGNCA() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set Unk3000_MONNEPNGNCA(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        progress?: number;
        Unk3000_MONNEPNGNCA?: number;
    }): SceneGalleryTreasureSeelieInfo {
        const message = new SceneGalleryTreasureSeelieInfo({});
        if (data.progress != null) {
            message.progress = data.progress;
        }
        if (data.Unk3000_MONNEPNGNCA != null) {
            message.Unk3000_MONNEPNGNCA = data.Unk3000_MONNEPNGNCA;
        }
        return message;
    }
    toObject() {
        const data: {
            progress?: number;
            Unk3000_MONNEPNGNCA?: number;
        } = {};
        if (this.progress != null) {
            data.progress = this.progress;
        }
        if (this.Unk3000_MONNEPNGNCA != null) {
            data.Unk3000_MONNEPNGNCA = this.Unk3000_MONNEPNGNCA;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.progress != 0)
            writer.writeUint32(15, this.progress);
        if (this.Unk3000_MONNEPNGNCA != 0)
            writer.writeUint32(14, this.Unk3000_MONNEPNGNCA);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SceneGalleryTreasureSeelieInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryTreasureSeelieInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.progress = reader.readUint32();
                    break;
                case 14:
                    message.Unk3000_MONNEPNGNCA = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SceneGalleryTreasureSeelieInfo {
        return SceneGalleryTreasureSeelieInfo.deserialize(bytes);
    }
}
