/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PolygonRegionSize.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./VectorPlane";
import * as pb_1 from "google-protobuf";
export class PolygonRegionSize extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        point_list?: dependency_1.VectorPlane[];
        height?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("point_list" in data && data.point_list != undefined) {
                this.point_list = data.point_list;
            }
            if ("height" in data && data.height != undefined) {
                this.height = data.height;
            }
        }
    }
    get point_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.VectorPlane, 5) as dependency_1.VectorPlane[];
    }
    set point_list(value: dependency_1.VectorPlane[]) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    get height() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set height(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data: {
        point_list?: ReturnType<typeof dependency_1.VectorPlane.prototype.toObject>[];
        height?: number;
    }): PolygonRegionSize {
        const message = new PolygonRegionSize({});
        if (data.point_list != null) {
            message.point_list = data.point_list.map(item => dependency_1.VectorPlane.fromObject(item));
        }
        if (data.height != null) {
            message.height = data.height;
        }
        return message;
    }
    toObject() {
        const data: {
            point_list?: ReturnType<typeof dependency_1.VectorPlane.prototype.toObject>[];
            height?: number;
        } = {};
        if (this.point_list != null) {
            data.point_list = this.point_list.map((item: dependency_1.VectorPlane) => item.toObject());
        }
        if (this.height != null) {
            data.height = this.height;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.point_list.length)
            writer.writeRepeatedMessage(5, this.point_list, (item: dependency_1.VectorPlane) => item.serialize(writer));
        if (this.height != 0)
            writer.writeFloat(9, this.height);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PolygonRegionSize {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PolygonRegionSize();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    reader.readMessage(message.point_list, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_1.VectorPlane.deserialize(reader), dependency_1.VectorPlane));
                    break;
                case 9:
                    message.height = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PolygonRegionSize {
        return PolygonRegionSize.deserialize(bytes);
    }
}
