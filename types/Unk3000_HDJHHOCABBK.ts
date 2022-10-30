/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk3000_HDJHHOCABBK.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Vector";
import * as pb_1 from "google-protobuf";
export class Unk3000_HDJHHOCABBK extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_done?: boolean;
        Unk3000_LIHPABKOAIP?: number;
        Unk3000_AEGHMLLEOJF?: number;
        region_radius?: number;
        is_open?: boolean;
        open_time?: number;
        region_center_pos?: dependency_1.Vector;
        scene_id?: number;
        Unk3000_KNNPMAMOCOM?: number;
        region_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_done" in data && data.is_done != undefined) {
                this.is_done = data.is_done;
            }
            if ("Unk3000_LIHPABKOAIP" in data && data.Unk3000_LIHPABKOAIP != undefined) {
                this.Unk3000_LIHPABKOAIP = data.Unk3000_LIHPABKOAIP;
            }
            if ("Unk3000_AEGHMLLEOJF" in data && data.Unk3000_AEGHMLLEOJF != undefined) {
                this.Unk3000_AEGHMLLEOJF = data.Unk3000_AEGHMLLEOJF;
            }
            if ("region_radius" in data && data.region_radius != undefined) {
                this.region_radius = data.region_radius;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("region_center_pos" in data && data.region_center_pos != undefined) {
                this.region_center_pos = data.region_center_pos;
            }
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("Unk3000_KNNPMAMOCOM" in data && data.Unk3000_KNNPMAMOCOM != undefined) {
                this.Unk3000_KNNPMAMOCOM = data.Unk3000_KNNPMAMOCOM;
            }
            if ("region_id" in data && data.region_id != undefined) {
                this.region_id = data.region_id;
            }
        }
    }
    get is_done() {
        return pb_1.Message.getFieldWithDefault(this, 12, false) as boolean;
    }
    set is_done(value: boolean) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk3000_LIHPABKOAIP() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set Unk3000_LIHPABKOAIP(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get Unk3000_AEGHMLLEOJF() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set Unk3000_AEGHMLLEOJF(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get region_radius() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set region_radius(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
    }
    set is_open(value: boolean) {
        pb_1.Message.setField(this, 9, value);
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set open_time(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get region_center_pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 11) as dependency_1.Vector;
    }
    set region_center_pos(value: dependency_1.Vector) {
        pb_1.Message.setWrapperField(this, 11, value);
    }
    get has_region_center_pos() {
        return pb_1.Message.getField(this, 11) != null;
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set scene_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get Unk3000_KNNPMAMOCOM() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set Unk3000_KNNPMAMOCOM(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get region_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set region_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        is_done?: boolean;
        Unk3000_LIHPABKOAIP?: number;
        Unk3000_AEGHMLLEOJF?: number;
        region_radius?: number;
        is_open?: boolean;
        open_time?: number;
        region_center_pos?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
        scene_id?: number;
        Unk3000_KNNPMAMOCOM?: number;
        region_id?: number;
    }): Unk3000_HDJHHOCABBK {
        const message = new Unk3000_HDJHHOCABBK({});
        if (data.is_done != null) {
            message.is_done = data.is_done;
        }
        if (data.Unk3000_LIHPABKOAIP != null) {
            message.Unk3000_LIHPABKOAIP = data.Unk3000_LIHPABKOAIP;
        }
        if (data.Unk3000_AEGHMLLEOJF != null) {
            message.Unk3000_AEGHMLLEOJF = data.Unk3000_AEGHMLLEOJF;
        }
        if (data.region_radius != null) {
            message.region_radius = data.region_radius;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.region_center_pos != null) {
            message.region_center_pos = dependency_1.Vector.fromObject(data.region_center_pos);
        }
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.Unk3000_KNNPMAMOCOM != null) {
            message.Unk3000_KNNPMAMOCOM = data.Unk3000_KNNPMAMOCOM;
        }
        if (data.region_id != null) {
            message.region_id = data.region_id;
        }
        return message;
    }
    toObject() {
        const data: {
            is_done?: boolean;
            Unk3000_LIHPABKOAIP?: number;
            Unk3000_AEGHMLLEOJF?: number;
            region_radius?: number;
            is_open?: boolean;
            open_time?: number;
            region_center_pos?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
            scene_id?: number;
            Unk3000_KNNPMAMOCOM?: number;
            region_id?: number;
        } = {};
        if (this.is_done != null) {
            data.is_done = this.is_done;
        }
        if (this.Unk3000_LIHPABKOAIP != null) {
            data.Unk3000_LIHPABKOAIP = this.Unk3000_LIHPABKOAIP;
        }
        if (this.Unk3000_AEGHMLLEOJF != null) {
            data.Unk3000_AEGHMLLEOJF = this.Unk3000_AEGHMLLEOJF;
        }
        if (this.region_radius != null) {
            data.region_radius = this.region_radius;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.region_center_pos != null) {
            data.region_center_pos = this.region_center_pos.toObject();
        }
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.Unk3000_KNNPMAMOCOM != null) {
            data.Unk3000_KNNPMAMOCOM = this.Unk3000_KNNPMAMOCOM;
        }
        if (this.region_id != null) {
            data.region_id = this.region_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_done != false)
            writer.writeBool(12, this.is_done);
        if (this.Unk3000_LIHPABKOAIP != 0)
            writer.writeUint32(6, this.Unk3000_LIHPABKOAIP);
        if (this.Unk3000_AEGHMLLEOJF != 0)
            writer.writeUint32(10, this.Unk3000_AEGHMLLEOJF);
        if (this.region_radius != 0)
            writer.writeFloat(7, this.region_radius);
        if (this.is_open != false)
            writer.writeBool(9, this.is_open);
        if (this.open_time != 0)
            writer.writeUint32(8, this.open_time);
        if (this.has_region_center_pos)
            writer.writeMessage(11, this.region_center_pos, () => this.region_center_pos.serialize(writer));
        if (this.scene_id != 0)
            writer.writeUint32(13, this.scene_id);
        if (this.Unk3000_KNNPMAMOCOM != 0)
            writer.writeUint32(15, this.Unk3000_KNNPMAMOCOM);
        if (this.region_id != 0)
            writer.writeUint32(1, this.region_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Unk3000_HDJHHOCABBK {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk3000_HDJHHOCABBK();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.is_done = reader.readBool();
                    break;
                case 6:
                    message.Unk3000_LIHPABKOAIP = reader.readUint32();
                    break;
                case 10:
                    message.Unk3000_AEGHMLLEOJF = reader.readUint32();
                    break;
                case 7:
                    message.region_radius = reader.readFloat();
                    break;
                case 9:
                    message.is_open = reader.readBool();
                    break;
                case 8:
                    message.open_time = reader.readUint32();
                    break;
                case 11:
                    reader.readMessage(message.region_center_pos, () => message.region_center_pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 13:
                    message.scene_id = reader.readUint32();
                    break;
                case 15:
                    message.Unk3000_KNNPMAMOCOM = reader.readUint32();
                    break;
                case 1:
                    message.region_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Unk3000_HDJHHOCABBK {
        return Unk3000_HDJHHOCABBK.deserialize(bytes);
    }
}
