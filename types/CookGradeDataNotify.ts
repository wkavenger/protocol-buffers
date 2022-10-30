/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CookGradeDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class CookGradeDataNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        grade?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("grade" in data && data.grade != undefined) {
                this.grade = data.grade;
            }
        }
    }
    get grade() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set grade(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data: {
        grade?: number;
    }): CookGradeDataNotify {
        const message = new CookGradeDataNotify({});
        if (data.grade != null) {
            message.grade = data.grade;
        }
        return message;
    }
    toObject() {
        const data: {
            grade?: number;
        } = {};
        if (this.grade != null) {
            data.grade = this.grade;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.grade != 0)
            writer.writeUint32(12, this.grade);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CookGradeDataNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CookGradeDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.grade = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CookGradeDataNotify {
        return CookGradeDataNotify.deserialize(bytes);
    }
}
