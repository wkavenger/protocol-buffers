/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetScenePerformanceRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Vector";
import * as pb_1 from "google-protobuf";
export class GetScenePerformanceRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        monster_num?: number;
        gather_num_insight?: number;
        gadget_num?: number;
        retcode?: number;
        dynamic_group_num?: number;
        group_num?: number;
        pos?: dependency_1.Vector;
        entity_num?: number;
        gather_num?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("monster_num" in data && data.monster_num != undefined) {
                this.monster_num = data.monster_num;
            }
            if ("gather_num_insight" in data && data.gather_num_insight != undefined) {
                this.gather_num_insight = data.gather_num_insight;
            }
            if ("gadget_num" in data && data.gadget_num != undefined) {
                this.gadget_num = data.gadget_num;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("dynamic_group_num" in data && data.dynamic_group_num != undefined) {
                this.dynamic_group_num = data.dynamic_group_num;
            }
            if ("group_num" in data && data.group_num != undefined) {
                this.group_num = data.group_num;
            }
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
            if ("entity_num" in data && data.entity_num != undefined) {
                this.entity_num = data.entity_num;
            }
            if ("gather_num" in data && data.gather_num != undefined) {
                this.gather_num = data.gather_num;
            }
        }
    }
    get monster_num() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set monster_num(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get gather_num_insight() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set gather_num_insight(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get gadget_num() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set gadget_num(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get dynamic_group_num() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set dynamic_group_num(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get group_num() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set group_num(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 4) as dependency_1.Vector;
    }
    set pos(value: dependency_1.Vector) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get entity_num() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set entity_num(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get gather_num() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set gather_num(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data: {
        monster_num?: number;
        gather_num_insight?: number;
        gadget_num?: number;
        retcode?: number;
        dynamic_group_num?: number;
        group_num?: number;
        pos?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
        entity_num?: number;
        gather_num?: number;
    }): GetScenePerformanceRsp {
        const message = new GetScenePerformanceRsp({});
        if (data.monster_num != null) {
            message.monster_num = data.monster_num;
        }
        if (data.gather_num_insight != null) {
            message.gather_num_insight = data.gather_num_insight;
        }
        if (data.gadget_num != null) {
            message.gadget_num = data.gadget_num;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.dynamic_group_num != null) {
            message.dynamic_group_num = data.dynamic_group_num;
        }
        if (data.group_num != null) {
            message.group_num = data.group_num;
        }
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        if (data.entity_num != null) {
            message.entity_num = data.entity_num;
        }
        if (data.gather_num != null) {
            message.gather_num = data.gather_num;
        }
        return message;
    }
    toObject() {
        const data: {
            monster_num?: number;
            gather_num_insight?: number;
            gadget_num?: number;
            retcode?: number;
            dynamic_group_num?: number;
            group_num?: number;
            pos?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
            entity_num?: number;
            gather_num?: number;
        } = {};
        if (this.monster_num != null) {
            data.monster_num = this.monster_num;
        }
        if (this.gather_num_insight != null) {
            data.gather_num_insight = this.gather_num_insight;
        }
        if (this.gadget_num != null) {
            data.gadget_num = this.gadget_num;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.dynamic_group_num != null) {
            data.dynamic_group_num = this.dynamic_group_num;
        }
        if (this.group_num != null) {
            data.group_num = this.group_num;
        }
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        if (this.entity_num != null) {
            data.entity_num = this.entity_num;
        }
        if (this.gather_num != null) {
            data.gather_num = this.gather_num;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.monster_num != 0)
            writer.writeUint32(9, this.monster_num);
        if (this.gather_num_insight != 0)
            writer.writeUint32(1, this.gather_num_insight);
        if (this.gadget_num != 0)
            writer.writeUint32(6, this.gadget_num);
        if (this.retcode != 0)
            writer.writeInt32(7, this.retcode);
        if (this.dynamic_group_num != 0)
            writer.writeUint32(12, this.dynamic_group_num);
        if (this.group_num != 0)
            writer.writeUint32(2, this.group_num);
        if (this.has_pos)
            writer.writeMessage(4, this.pos, () => this.pos.serialize(writer));
        if (this.entity_num != 0)
            writer.writeUint32(8, this.entity_num);
        if (this.gather_num != 0)
            writer.writeUint32(13, this.gather_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetScenePerformanceRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetScenePerformanceRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.monster_num = reader.readUint32();
                    break;
                case 1:
                    message.gather_num_insight = reader.readUint32();
                    break;
                case 6:
                    message.gadget_num = reader.readUint32();
                    break;
                case 7:
                    message.retcode = reader.readInt32();
                    break;
                case 12:
                    message.dynamic_group_num = reader.readUint32();
                    break;
                case 2:
                    message.group_num = reader.readUint32();
                    break;
                case 4:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 8:
                    message.entity_num = reader.readUint32();
                    break;
                case 13:
                    message.gather_num = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetScenePerformanceRsp {
        return GetScenePerformanceRsp.deserialize(bytes);
    }
}
