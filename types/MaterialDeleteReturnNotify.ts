/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MaterialDeleteReturnNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./MaterialDeleteReturnType";
import * as pb_1 from "google-protobuf";
export class MaterialDeleteReturnNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        return_item_map?: Map<number, number>;
        type?: dependency_1.MaterialDeleteReturnType;
        delete_material_map?: Map<number, number>;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("return_item_map" in data && data.return_item_map != undefined) {
                this.return_item_map = data.return_item_map;
            }
            if ("type" in data && data.type != undefined) {
                this.type = data.type;
            }
            if ("delete_material_map" in data && data.delete_material_map != undefined) {
                this.delete_material_map = data.delete_material_map;
            }
        }
        if (!this.return_item_map)
            this.return_item_map = new Map();
        if (!this.delete_material_map)
            this.delete_material_map = new Map();
    }
    get return_item_map() {
        return pb_1.Message.getField(this, 5) as any as Map<number, number>;
    }
    set return_item_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 5, value as any);
    }
    get type() {
        return pb_1.Message.getFieldWithDefault(this, 8, dependency_1.MaterialDeleteReturnType.MATERIAL_DELETE_RETURN_TYPE_BAG) as dependency_1.MaterialDeleteReturnType;
    }
    set type(value: dependency_1.MaterialDeleteReturnType) {
        pb_1.Message.setField(this, 8, value);
    }
    get delete_material_map() {
        return pb_1.Message.getField(this, 6) as any as Map<number, number>;
    }
    set delete_material_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 6, value as any);
    }
    static fromObject(data: {
        return_item_map?: {
            [key: number]: number;
        };
        type?: dependency_1.MaterialDeleteReturnType;
        delete_material_map?: {
            [key: number]: number;
        };
    }): MaterialDeleteReturnNotify {
        const message = new MaterialDeleteReturnNotify({});
        if (typeof data.return_item_map == "object") {
            message.return_item_map = new Map(Object.entries(data.return_item_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.type != null) {
            message.type = data.type;
        }
        if (typeof data.delete_material_map == "object") {
            message.delete_material_map = new Map(Object.entries(data.delete_material_map).map(([key, value]) => [Number(key), value]));
        }
        return message;
    }
    toObject() {
        const data: {
            return_item_map?: {
                [key: number]: number;
            };
            type?: dependency_1.MaterialDeleteReturnType;
            delete_material_map?: {
                [key: number]: number;
            };
        } = {};
        if (this.return_item_map.size > 0) {
            data.return_item_map = (Object.fromEntries)(this.return_item_map);
        }
        if (this.type != null) {
            data.type = this.type;
        }
        if (this.delete_material_map.size > 0) {
            data.delete_material_map = (Object.fromEntries)(this.delete_material_map);
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.return_item_map) {
            writer.writeMessage(5, this.return_item_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (this.type != dependency_1.MaterialDeleteReturnType.MATERIAL_DELETE_RETURN_TYPE_BAG)
            writer.writeEnum(8, this.type);
        for (const [key, value] of this.delete_material_map) {
            writer.writeMessage(6, this.delete_material_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MaterialDeleteReturnNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MaterialDeleteReturnNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.return_item_map as any, reader, reader.readUint32, reader.readUint32));
                    break;
                case 8:
                    message.type = reader.readEnum();
                    break;
                case 6:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.delete_material_map as any, reader, reader.readUint32, reader.readUint32));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MaterialDeleteReturnNotify {
        return MaterialDeleteReturnNotify.deserialize(bytes);
    }
}
