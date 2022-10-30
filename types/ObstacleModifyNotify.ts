/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ObstacleModifyNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ObstacleInfo";
import * as pb_1 from "google-protobuf";
export class ObstacleModifyNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        remove_obstacle_ids?: number[];
        add_obstacles?: dependency_1.ObstacleInfo[];
        scene_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9, 6], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("remove_obstacle_ids" in data && data.remove_obstacle_ids != undefined) {
                this.remove_obstacle_ids = data.remove_obstacle_ids;
            }
            if ("add_obstacles" in data && data.add_obstacles != undefined) {
                this.add_obstacles = data.add_obstacles;
            }
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
        }
    }
    get remove_obstacle_ids() {
        return pb_1.Message.getFieldWithDefault(this, 9, []) as number[];
    }
    set remove_obstacle_ids(value: number[]) {
        pb_1.Message.setField(this, 9, value);
    }
    get add_obstacles() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ObstacleInfo, 6) as dependency_1.ObstacleInfo[];
    }
    set add_obstacles(value: dependency_1.ObstacleInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set scene_id(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        remove_obstacle_ids?: number[];
        add_obstacles?: ReturnType<typeof dependency_1.ObstacleInfo.prototype.toObject>[];
        scene_id?: number;
    }): ObstacleModifyNotify {
        const message = new ObstacleModifyNotify({});
        if (data.remove_obstacle_ids != null) {
            message.remove_obstacle_ids = data.remove_obstacle_ids;
        }
        if (data.add_obstacles != null) {
            message.add_obstacles = data.add_obstacles.map(item => dependency_1.ObstacleInfo.fromObject(item));
        }
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        return message;
    }
    toObject() {
        const data: {
            remove_obstacle_ids?: number[];
            add_obstacles?: ReturnType<typeof dependency_1.ObstacleInfo.prototype.toObject>[];
            scene_id?: number;
        } = {};
        if (this.remove_obstacle_ids != null) {
            data.remove_obstacle_ids = this.remove_obstacle_ids;
        }
        if (this.add_obstacles != null) {
            data.add_obstacles = this.add_obstacles.map((item: dependency_1.ObstacleInfo) => item.toObject());
        }
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.remove_obstacle_ids.length)
            writer.writePackedInt32(9, this.remove_obstacle_ids);
        if (this.add_obstacles.length)
            writer.writeRepeatedMessage(6, this.add_obstacles, (item: dependency_1.ObstacleInfo) => item.serialize(writer));
        if (this.scene_id != 0)
            writer.writeUint32(5, this.scene_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ObstacleModifyNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ObstacleModifyNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.remove_obstacle_ids = reader.readPackedInt32();
                    break;
                case 6:
                    reader.readMessage(message.add_obstacles, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_1.ObstacleInfo.deserialize(reader), dependency_1.ObstacleInfo));
                    break;
                case 5:
                    message.scene_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ObstacleModifyNotify {
        return ObstacleModifyNotify.deserialize(bytes);
    }
}
