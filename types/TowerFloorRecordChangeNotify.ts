/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TowerFloorRecordChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./TowerFloorRecord";
import * as pb_1 from "google-protobuf";
export class TowerFloorRecordChangeNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_finished_entrance_floor?: boolean;
        tower_floor_record_list?: dependency_1.TowerFloorRecord[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_finished_entrance_floor" in data && data.is_finished_entrance_floor != undefined) {
                this.is_finished_entrance_floor = data.is_finished_entrance_floor;
            }
            if ("tower_floor_record_list" in data && data.tower_floor_record_list != undefined) {
                this.tower_floor_record_list = data.tower_floor_record_list;
            }
        }
    }
    get is_finished_entrance_floor() {
        return pb_1.Message.getFieldWithDefault(this, 11, false) as boolean;
    }
    set is_finished_entrance_floor(value: boolean) {
        pb_1.Message.setField(this, 11, value);
    }
    get tower_floor_record_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.TowerFloorRecord, 8) as dependency_1.TowerFloorRecord[];
    }
    set tower_floor_record_list(value: dependency_1.TowerFloorRecord[]) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    static fromObject(data: {
        is_finished_entrance_floor?: boolean;
        tower_floor_record_list?: ReturnType<typeof dependency_1.TowerFloorRecord.prototype.toObject>[];
    }): TowerFloorRecordChangeNotify {
        const message = new TowerFloorRecordChangeNotify({});
        if (data.is_finished_entrance_floor != null) {
            message.is_finished_entrance_floor = data.is_finished_entrance_floor;
        }
        if (data.tower_floor_record_list != null) {
            message.tower_floor_record_list = data.tower_floor_record_list.map(item => dependency_1.TowerFloorRecord.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            is_finished_entrance_floor?: boolean;
            tower_floor_record_list?: ReturnType<typeof dependency_1.TowerFloorRecord.prototype.toObject>[];
        } = {};
        if (this.is_finished_entrance_floor != null) {
            data.is_finished_entrance_floor = this.is_finished_entrance_floor;
        }
        if (this.tower_floor_record_list != null) {
            data.tower_floor_record_list = this.tower_floor_record_list.map((item: dependency_1.TowerFloorRecord) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_finished_entrance_floor != false)
            writer.writeBool(11, this.is_finished_entrance_floor);
        if (this.tower_floor_record_list.length)
            writer.writeRepeatedMessage(8, this.tower_floor_record_list, (item: dependency_1.TowerFloorRecord) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TowerFloorRecordChangeNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TowerFloorRecordChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.is_finished_entrance_floor = reader.readBool();
                    break;
                case 8:
                    reader.readMessage(message.tower_floor_record_list, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_1.TowerFloorRecord.deserialize(reader), dependency_1.TowerFloorRecord));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TowerFloorRecordChangeNotify {
        return TowerFloorRecordChangeNotify.deserialize(bytes);
    }
}
