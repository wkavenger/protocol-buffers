/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryWindFieldInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SceneGalleryWindFieldInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk3100_HFOHBJOGEPJ?: number;
        Unk3100_CDJOHNPJAAB?: number;
        Unk3100_MPJOMKKCHKC?: number;
        Unk3100_KAKJMGFBOOH?: number;
        Unk3100_EDMNOAPJIDC?: number;
        Unk3100_CHEKINPIFFM?: number;
        Unk3100_CHGHHBNGNHH?: number;
        Unk3100_OIOIEMJMNNI?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk3100_HFOHBJOGEPJ" in data && data.Unk3100_HFOHBJOGEPJ != undefined) {
                this.Unk3100_HFOHBJOGEPJ = data.Unk3100_HFOHBJOGEPJ;
            }
            if ("Unk3100_CDJOHNPJAAB" in data && data.Unk3100_CDJOHNPJAAB != undefined) {
                this.Unk3100_CDJOHNPJAAB = data.Unk3100_CDJOHNPJAAB;
            }
            if ("Unk3100_MPJOMKKCHKC" in data && data.Unk3100_MPJOMKKCHKC != undefined) {
                this.Unk3100_MPJOMKKCHKC = data.Unk3100_MPJOMKKCHKC;
            }
            if ("Unk3100_KAKJMGFBOOH" in data && data.Unk3100_KAKJMGFBOOH != undefined) {
                this.Unk3100_KAKJMGFBOOH = data.Unk3100_KAKJMGFBOOH;
            }
            if ("Unk3100_EDMNOAPJIDC" in data && data.Unk3100_EDMNOAPJIDC != undefined) {
                this.Unk3100_EDMNOAPJIDC = data.Unk3100_EDMNOAPJIDC;
            }
            if ("Unk3100_CHEKINPIFFM" in data && data.Unk3100_CHEKINPIFFM != undefined) {
                this.Unk3100_CHEKINPIFFM = data.Unk3100_CHEKINPIFFM;
            }
            if ("Unk3100_CHGHHBNGNHH" in data && data.Unk3100_CHGHHBNGNHH != undefined) {
                this.Unk3100_CHGHHBNGNHH = data.Unk3100_CHGHHBNGNHH;
            }
            if ("Unk3100_OIOIEMJMNNI" in data && data.Unk3100_OIOIEMJMNNI != undefined) {
                this.Unk3100_OIOIEMJMNNI = data.Unk3100_OIOIEMJMNNI;
            }
        }
    }
    get Unk3100_HFOHBJOGEPJ() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set Unk3100_HFOHBJOGEPJ(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get Unk3100_CDJOHNPJAAB() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set Unk3100_CDJOHNPJAAB(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk3100_MPJOMKKCHKC() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set Unk3100_MPJOMKKCHKC(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get Unk3100_KAKJMGFBOOH() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set Unk3100_KAKJMGFBOOH(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get Unk3100_EDMNOAPJIDC() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set Unk3100_EDMNOAPJIDC(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get Unk3100_CHEKINPIFFM() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set Unk3100_CHEKINPIFFM(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk3100_CHGHHBNGNHH() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set Unk3100_CHGHHBNGNHH(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get Unk3100_OIOIEMJMNNI() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set Unk3100_OIOIEMJMNNI(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        Unk3100_HFOHBJOGEPJ?: number;
        Unk3100_CDJOHNPJAAB?: number;
        Unk3100_MPJOMKKCHKC?: number;
        Unk3100_KAKJMGFBOOH?: number;
        Unk3100_EDMNOAPJIDC?: number;
        Unk3100_CHEKINPIFFM?: number;
        Unk3100_CHGHHBNGNHH?: number;
        Unk3100_OIOIEMJMNNI?: number;
    }): SceneGalleryWindFieldInfo {
        const message = new SceneGalleryWindFieldInfo({});
        if (data.Unk3100_HFOHBJOGEPJ != null) {
            message.Unk3100_HFOHBJOGEPJ = data.Unk3100_HFOHBJOGEPJ;
        }
        if (data.Unk3100_CDJOHNPJAAB != null) {
            message.Unk3100_CDJOHNPJAAB = data.Unk3100_CDJOHNPJAAB;
        }
        if (data.Unk3100_MPJOMKKCHKC != null) {
            message.Unk3100_MPJOMKKCHKC = data.Unk3100_MPJOMKKCHKC;
        }
        if (data.Unk3100_KAKJMGFBOOH != null) {
            message.Unk3100_KAKJMGFBOOH = data.Unk3100_KAKJMGFBOOH;
        }
        if (data.Unk3100_EDMNOAPJIDC != null) {
            message.Unk3100_EDMNOAPJIDC = data.Unk3100_EDMNOAPJIDC;
        }
        if (data.Unk3100_CHEKINPIFFM != null) {
            message.Unk3100_CHEKINPIFFM = data.Unk3100_CHEKINPIFFM;
        }
        if (data.Unk3100_CHGHHBNGNHH != null) {
            message.Unk3100_CHGHHBNGNHH = data.Unk3100_CHGHHBNGNHH;
        }
        if (data.Unk3100_OIOIEMJMNNI != null) {
            message.Unk3100_OIOIEMJMNNI = data.Unk3100_OIOIEMJMNNI;
        }
        return message;
    }
    toObject() {
        const data: {
            Unk3100_HFOHBJOGEPJ?: number;
            Unk3100_CDJOHNPJAAB?: number;
            Unk3100_MPJOMKKCHKC?: number;
            Unk3100_KAKJMGFBOOH?: number;
            Unk3100_EDMNOAPJIDC?: number;
            Unk3100_CHEKINPIFFM?: number;
            Unk3100_CHGHHBNGNHH?: number;
            Unk3100_OIOIEMJMNNI?: number;
        } = {};
        if (this.Unk3100_HFOHBJOGEPJ != null) {
            data.Unk3100_HFOHBJOGEPJ = this.Unk3100_HFOHBJOGEPJ;
        }
        if (this.Unk3100_CDJOHNPJAAB != null) {
            data.Unk3100_CDJOHNPJAAB = this.Unk3100_CDJOHNPJAAB;
        }
        if (this.Unk3100_MPJOMKKCHKC != null) {
            data.Unk3100_MPJOMKKCHKC = this.Unk3100_MPJOMKKCHKC;
        }
        if (this.Unk3100_KAKJMGFBOOH != null) {
            data.Unk3100_KAKJMGFBOOH = this.Unk3100_KAKJMGFBOOH;
        }
        if (this.Unk3100_EDMNOAPJIDC != null) {
            data.Unk3100_EDMNOAPJIDC = this.Unk3100_EDMNOAPJIDC;
        }
        if (this.Unk3100_CHEKINPIFFM != null) {
            data.Unk3100_CHEKINPIFFM = this.Unk3100_CHEKINPIFFM;
        }
        if (this.Unk3100_CHGHHBNGNHH != null) {
            data.Unk3100_CHGHHBNGNHH = this.Unk3100_CHGHHBNGNHH;
        }
        if (this.Unk3100_OIOIEMJMNNI != null) {
            data.Unk3100_OIOIEMJMNNI = this.Unk3100_OIOIEMJMNNI;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk3100_HFOHBJOGEPJ != 0)
            writer.writeUint32(5, this.Unk3100_HFOHBJOGEPJ);
        if (this.Unk3100_CDJOHNPJAAB != 0)
            writer.writeUint32(12, this.Unk3100_CDJOHNPJAAB);
        if (this.Unk3100_MPJOMKKCHKC != 0)
            writer.writeUint32(15, this.Unk3100_MPJOMKKCHKC);
        if (this.Unk3100_KAKJMGFBOOH != 0)
            writer.writeUint32(4, this.Unk3100_KAKJMGFBOOH);
        if (this.Unk3100_EDMNOAPJIDC != 0)
            writer.writeUint32(9, this.Unk3100_EDMNOAPJIDC);
        if (this.Unk3100_CHEKINPIFFM != 0)
            writer.writeUint32(1, this.Unk3100_CHEKINPIFFM);
        if (this.Unk3100_CHGHHBNGNHH != 0)
            writer.writeUint32(13, this.Unk3100_CHGHHBNGNHH);
        if (this.Unk3100_OIOIEMJMNNI != 0)
            writer.writeUint32(10, this.Unk3100_OIOIEMJMNNI);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SceneGalleryWindFieldInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryWindFieldInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.Unk3100_HFOHBJOGEPJ = reader.readUint32();
                    break;
                case 12:
                    message.Unk3100_CDJOHNPJAAB = reader.readUint32();
                    break;
                case 15:
                    message.Unk3100_MPJOMKKCHKC = reader.readUint32();
                    break;
                case 4:
                    message.Unk3100_KAKJMGFBOOH = reader.readUint32();
                    break;
                case 9:
                    message.Unk3100_EDMNOAPJIDC = reader.readUint32();
                    break;
                case 1:
                    message.Unk3100_CHEKINPIFFM = reader.readUint32();
                    break;
                case 13:
                    message.Unk3100_CHGHHBNGNHH = reader.readUint32();
                    break;
                case 10:
                    message.Unk3100_OIOIEMJMNNI = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SceneGalleryWindFieldInfo {
        return SceneGalleryWindFieldInfo.deserialize(bytes);
    }
}
