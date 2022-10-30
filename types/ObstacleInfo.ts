/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ObstacleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./MathQuaternion";
import * as dependency_2 from "./Vector";
import * as dependency_3 from "./Vector3Int";
import * as pb_1 from "google-protobuf";
export class ObstacleInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        rotation?: dependency_1.MathQuaternion;
        obstacle_id?: number;
        center?: dependency_2.Vector;
        shape?: ObstacleInfo.ShapeType;
        extents?: dependency_3.Vector3Int;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("rotation" in data && data.rotation != undefined) {
                this.rotation = data.rotation;
            }
            if ("obstacle_id" in data && data.obstacle_id != undefined) {
                this.obstacle_id = data.obstacle_id;
            }
            if ("center" in data && data.center != undefined) {
                this.center = data.center;
            }
            if ("shape" in data && data.shape != undefined) {
                this.shape = data.shape;
            }
            if ("extents" in data && data.extents != undefined) {
                this.extents = data.extents;
            }
        }
    }
    get rotation() {
        return pb_1.Message.getWrapperField(this, dependency_1.MathQuaternion, 4) as dependency_1.MathQuaternion;
    }
    set rotation(value: dependency_1.MathQuaternion) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_rotation() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get obstacle_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set obstacle_id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get center() {
        return pb_1.Message.getWrapperField(this, dependency_2.Vector, 14) as dependency_2.Vector;
    }
    set center(value: dependency_2.Vector) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_center() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get shape() {
        return pb_1.Message.getFieldWithDefault(this, 6, ObstacleInfo.ShapeType.SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE) as ObstacleInfo.ShapeType;
    }
    set shape(value: ObstacleInfo.ShapeType) {
        pb_1.Message.setField(this, 6, value);
    }
    get extents() {
        return pb_1.Message.getWrapperField(this, dependency_3.Vector3Int, 12) as dependency_3.Vector3Int;
    }
    set extents(value: dependency_3.Vector3Int) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_extents() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data: {
        rotation?: ReturnType<typeof dependency_1.MathQuaternion.prototype.toObject>;
        obstacle_id?: number;
        center?: ReturnType<typeof dependency_2.Vector.prototype.toObject>;
        shape?: ObstacleInfo.ShapeType;
        extents?: ReturnType<typeof dependency_3.Vector3Int.prototype.toObject>;
    }): ObstacleInfo {
        const message = new ObstacleInfo({});
        if (data.rotation != null) {
            message.rotation = dependency_1.MathQuaternion.fromObject(data.rotation);
        }
        if (data.obstacle_id != null) {
            message.obstacle_id = data.obstacle_id;
        }
        if (data.center != null) {
            message.center = dependency_2.Vector.fromObject(data.center);
        }
        if (data.shape != null) {
            message.shape = data.shape;
        }
        if (data.extents != null) {
            message.extents = dependency_3.Vector3Int.fromObject(data.extents);
        }
        return message;
    }
    toObject() {
        const data: {
            rotation?: ReturnType<typeof dependency_1.MathQuaternion.prototype.toObject>;
            obstacle_id?: number;
            center?: ReturnType<typeof dependency_2.Vector.prototype.toObject>;
            shape?: ObstacleInfo.ShapeType;
            extents?: ReturnType<typeof dependency_3.Vector3Int.prototype.toObject>;
        } = {};
        if (this.rotation != null) {
            data.rotation = this.rotation.toObject();
        }
        if (this.obstacle_id != null) {
            data.obstacle_id = this.obstacle_id;
        }
        if (this.center != null) {
            data.center = this.center.toObject();
        }
        if (this.shape != null) {
            data.shape = this.shape;
        }
        if (this.extents != null) {
            data.extents = this.extents.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_rotation)
            writer.writeMessage(4, this.rotation, () => this.rotation.serialize(writer));
        if (this.obstacle_id != 0)
            writer.writeInt32(2, this.obstacle_id);
        if (this.has_center)
            writer.writeMessage(14, this.center, () => this.center.serialize(writer));
        if (this.shape != ObstacleInfo.ShapeType.SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE)
            writer.writeEnum(6, this.shape);
        if (this.has_extents)
            writer.writeMessage(12, this.extents, () => this.extents.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ObstacleInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ObstacleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.rotation, () => message.rotation = dependency_1.MathQuaternion.deserialize(reader));
                    break;
                case 2:
                    message.obstacle_id = reader.readInt32();
                    break;
                case 14:
                    reader.readMessage(message.center, () => message.center = dependency_2.Vector.deserialize(reader));
                    break;
                case 6:
                    message.shape = reader.readEnum();
                    break;
                case 12:
                    reader.readMessage(message.extents, () => message.extents = dependency_3.Vector3Int.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ObstacleInfo {
        return ObstacleInfo.deserialize(bytes);
    }
}
export namespace ObstacleInfo {
    export enum ShapeType {
        SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE = 0,
        SHAPE_TYPE_OBSTACLE_SHAPE_BOX = 1
    }
}
