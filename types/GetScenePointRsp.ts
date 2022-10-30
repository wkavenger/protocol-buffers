/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetScenePointRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class GetScenePointRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        not_explored_dungeon_entry_list?: number[];
        to_be_explore_dungeon_entry_list?: number[];
        locked_point_list?: number[];
        unhide_point_list?: number[];
        retcode?: number;
        belong_uid?: number;
        unlocked_point_list?: number[];
        unlock_area_list?: number[];
        hide_point_list?: number[];
        scene_id?: number;
        not_interact_dungeon_entry_list?: number[];
        group_unlimit_point_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11, 15, 2, 5, 13, 1, 4, 6, 10], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("not_explored_dungeon_entry_list" in data && data.not_explored_dungeon_entry_list != undefined) {
                this.not_explored_dungeon_entry_list = data.not_explored_dungeon_entry_list;
            }
            if ("to_be_explore_dungeon_entry_list" in data && data.to_be_explore_dungeon_entry_list != undefined) {
                this.to_be_explore_dungeon_entry_list = data.to_be_explore_dungeon_entry_list;
            }
            if ("locked_point_list" in data && data.locked_point_list != undefined) {
                this.locked_point_list = data.locked_point_list;
            }
            if ("unhide_point_list" in data && data.unhide_point_list != undefined) {
                this.unhide_point_list = data.unhide_point_list;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("belong_uid" in data && data.belong_uid != undefined) {
                this.belong_uid = data.belong_uid;
            }
            if ("unlocked_point_list" in data && data.unlocked_point_list != undefined) {
                this.unlocked_point_list = data.unlocked_point_list;
            }
            if ("unlock_area_list" in data && data.unlock_area_list != undefined) {
                this.unlock_area_list = data.unlock_area_list;
            }
            if ("hide_point_list" in data && data.hide_point_list != undefined) {
                this.hide_point_list = data.hide_point_list;
            }
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("not_interact_dungeon_entry_list" in data && data.not_interact_dungeon_entry_list != undefined) {
                this.not_interact_dungeon_entry_list = data.not_interact_dungeon_entry_list;
            }
            if ("group_unlimit_point_list" in data && data.group_unlimit_point_list != undefined) {
                this.group_unlimit_point_list = data.group_unlimit_point_list;
            }
        }
    }
    get not_explored_dungeon_entry_list() {
        return pb_1.Message.getFieldWithDefault(this, 11, []) as number[];
    }
    set not_explored_dungeon_entry_list(value: number[]) {
        pb_1.Message.setField(this, 11, value);
    }
    get to_be_explore_dungeon_entry_list() {
        return pb_1.Message.getFieldWithDefault(this, 15, []) as number[];
    }
    set to_be_explore_dungeon_entry_list(value: number[]) {
        pb_1.Message.setField(this, 15, value);
    }
    get locked_point_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
    }
    set locked_point_list(value: number[]) {
        pb_1.Message.setField(this, 2, value);
    }
    get unhide_point_list() {
        return pb_1.Message.getFieldWithDefault(this, 5, []) as number[];
    }
    set unhide_point_list(value: number[]) {
        pb_1.Message.setField(this, 5, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get belong_uid() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set belong_uid(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get unlocked_point_list() {
        return pb_1.Message.getFieldWithDefault(this, 13, []) as number[];
    }
    set unlocked_point_list(value: number[]) {
        pb_1.Message.setField(this, 13, value);
    }
    get unlock_area_list() {
        return pb_1.Message.getFieldWithDefault(this, 1, []) as number[];
    }
    set unlock_area_list(value: number[]) {
        pb_1.Message.setField(this, 1, value);
    }
    get hide_point_list() {
        return pb_1.Message.getFieldWithDefault(this, 4, []) as number[];
    }
    set hide_point_list(value: number[]) {
        pb_1.Message.setField(this, 4, value);
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set scene_id(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get not_interact_dungeon_entry_list() {
        return pb_1.Message.getFieldWithDefault(this, 6, []) as number[];
    }
    set not_interact_dungeon_entry_list(value: number[]) {
        pb_1.Message.setField(this, 6, value);
    }
    get group_unlimit_point_list() {
        return pb_1.Message.getFieldWithDefault(this, 10, []) as number[];
    }
    set group_unlimit_point_list(value: number[]) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        not_explored_dungeon_entry_list?: number[];
        to_be_explore_dungeon_entry_list?: number[];
        locked_point_list?: number[];
        unhide_point_list?: number[];
        retcode?: number;
        belong_uid?: number;
        unlocked_point_list?: number[];
        unlock_area_list?: number[];
        hide_point_list?: number[];
        scene_id?: number;
        not_interact_dungeon_entry_list?: number[];
        group_unlimit_point_list?: number[];
    }): GetScenePointRsp {
        const message = new GetScenePointRsp({});
        if (data.not_explored_dungeon_entry_list != null) {
            message.not_explored_dungeon_entry_list = data.not_explored_dungeon_entry_list;
        }
        if (data.to_be_explore_dungeon_entry_list != null) {
            message.to_be_explore_dungeon_entry_list = data.to_be_explore_dungeon_entry_list;
        }
        if (data.locked_point_list != null) {
            message.locked_point_list = data.locked_point_list;
        }
        if (data.unhide_point_list != null) {
            message.unhide_point_list = data.unhide_point_list;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.belong_uid != null) {
            message.belong_uid = data.belong_uid;
        }
        if (data.unlocked_point_list != null) {
            message.unlocked_point_list = data.unlocked_point_list;
        }
        if (data.unlock_area_list != null) {
            message.unlock_area_list = data.unlock_area_list;
        }
        if (data.hide_point_list != null) {
            message.hide_point_list = data.hide_point_list;
        }
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.not_interact_dungeon_entry_list != null) {
            message.not_interact_dungeon_entry_list = data.not_interact_dungeon_entry_list;
        }
        if (data.group_unlimit_point_list != null) {
            message.group_unlimit_point_list = data.group_unlimit_point_list;
        }
        return message;
    }
    toObject() {
        const data: {
            not_explored_dungeon_entry_list?: number[];
            to_be_explore_dungeon_entry_list?: number[];
            locked_point_list?: number[];
            unhide_point_list?: number[];
            retcode?: number;
            belong_uid?: number;
            unlocked_point_list?: number[];
            unlock_area_list?: number[];
            hide_point_list?: number[];
            scene_id?: number;
            not_interact_dungeon_entry_list?: number[];
            group_unlimit_point_list?: number[];
        } = {};
        if (this.not_explored_dungeon_entry_list != null) {
            data.not_explored_dungeon_entry_list = this.not_explored_dungeon_entry_list;
        }
        if (this.to_be_explore_dungeon_entry_list != null) {
            data.to_be_explore_dungeon_entry_list = this.to_be_explore_dungeon_entry_list;
        }
        if (this.locked_point_list != null) {
            data.locked_point_list = this.locked_point_list;
        }
        if (this.unhide_point_list != null) {
            data.unhide_point_list = this.unhide_point_list;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.belong_uid != null) {
            data.belong_uid = this.belong_uid;
        }
        if (this.unlocked_point_list != null) {
            data.unlocked_point_list = this.unlocked_point_list;
        }
        if (this.unlock_area_list != null) {
            data.unlock_area_list = this.unlock_area_list;
        }
        if (this.hide_point_list != null) {
            data.hide_point_list = this.hide_point_list;
        }
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.not_interact_dungeon_entry_list != null) {
            data.not_interact_dungeon_entry_list = this.not_interact_dungeon_entry_list;
        }
        if (this.group_unlimit_point_list != null) {
            data.group_unlimit_point_list = this.group_unlimit_point_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.not_explored_dungeon_entry_list.length)
            writer.writePackedUint32(11, this.not_explored_dungeon_entry_list);
        if (this.to_be_explore_dungeon_entry_list.length)
            writer.writePackedUint32(15, this.to_be_explore_dungeon_entry_list);
        if (this.locked_point_list.length)
            writer.writePackedUint32(2, this.locked_point_list);
        if (this.unhide_point_list.length)
            writer.writePackedUint32(5, this.unhide_point_list);
        if (this.retcode != 0)
            writer.writeInt32(9, this.retcode);
        if (this.belong_uid != 0)
            writer.writeUint32(12, this.belong_uid);
        if (this.unlocked_point_list.length)
            writer.writePackedUint32(13, this.unlocked_point_list);
        if (this.unlock_area_list.length)
            writer.writePackedUint32(1, this.unlock_area_list);
        if (this.hide_point_list.length)
            writer.writePackedUint32(4, this.hide_point_list);
        if (this.scene_id != 0)
            writer.writeUint32(14, this.scene_id);
        if (this.not_interact_dungeon_entry_list.length)
            writer.writePackedUint32(6, this.not_interact_dungeon_entry_list);
        if (this.group_unlimit_point_list.length)
            writer.writePackedUint32(10, this.group_unlimit_point_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetScenePointRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetScenePointRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.not_explored_dungeon_entry_list = reader.readPackedUint32();
                    break;
                case 15:
                    message.to_be_explore_dungeon_entry_list = reader.readPackedUint32();
                    break;
                case 2:
                    message.locked_point_list = reader.readPackedUint32();
                    break;
                case 5:
                    message.unhide_point_list = reader.readPackedUint32();
                    break;
                case 9:
                    message.retcode = reader.readInt32();
                    break;
                case 12:
                    message.belong_uid = reader.readUint32();
                    break;
                case 13:
                    message.unlocked_point_list = reader.readPackedUint32();
                    break;
                case 1:
                    message.unlock_area_list = reader.readPackedUint32();
                    break;
                case 4:
                    message.hide_point_list = reader.readPackedUint32();
                    break;
                case 14:
                    message.scene_id = reader.readUint32();
                    break;
                case 6:
                    message.not_interact_dungeon_entry_list = reader.readPackedUint32();
                    break;
                case 10:
                    message.group_unlimit_point_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetScenePointRsp {
        return GetScenePointRsp.deserialize(bytes);
    }
}
