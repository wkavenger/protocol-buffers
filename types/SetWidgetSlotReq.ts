/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SetWidgetSlotReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./WidgetSlotOp";
import * as dependency_2 from "./WidgetSlotTag";
import * as pb_1 from "google-protobuf";
export class SetWidgetSlotReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        tag_list?: dependency_2.WidgetSlotTag[];
        material_id?: number;
        op?: dependency_1.WidgetSlotOp;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("tag_list" in data && data.tag_list != undefined) {
                this.tag_list = data.tag_list;
            }
            if ("material_id" in data && data.material_id != undefined) {
                this.material_id = data.material_id;
            }
            if ("op" in data && data.op != undefined) {
                this.op = data.op;
            }
        }
    }
    get tag_list() {
        return pb_1.Message.getFieldWithDefault(this, 15, dependency_2.WidgetSlotTag.WIDGET_SLOT_TAG_QUICK_USE) as dependency_2.WidgetSlotTag[];
    }
    set tag_list(value: dependency_2.WidgetSlotTag[]) {
        pb_1.Message.setField(this, 15, value);
    }
    get material_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set material_id(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get op() {
        return pb_1.Message.getFieldWithDefault(this, 2, dependency_1.WidgetSlotOp.WIDGET_SLOT_OP_ATTACH) as dependency_1.WidgetSlotOp;
    }
    set op(value: dependency_1.WidgetSlotOp) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        tag_list?: dependency_2.WidgetSlotTag[];
        material_id?: number;
        op?: dependency_1.WidgetSlotOp;
    }): SetWidgetSlotReq {
        const message = new SetWidgetSlotReq({});
        if (data.tag_list != null) {
            message.tag_list = data.tag_list;
        }
        if (data.material_id != null) {
            message.material_id = data.material_id;
        }
        if (data.op != null) {
            message.op = data.op;
        }
        return message;
    }
    toObject() {
        const data: {
            tag_list?: dependency_2.WidgetSlotTag[];
            material_id?: number;
            op?: dependency_1.WidgetSlotOp;
        } = {};
        if (this.tag_list != null) {
            data.tag_list = this.tag_list;
        }
        if (this.material_id != null) {
            data.material_id = this.material_id;
        }
        if (this.op != null) {
            data.op = this.op;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.tag_list.length)
            writer.writePackedEnum(15, this.tag_list);
        if (this.material_id != 0)
            writer.writeUint32(6, this.material_id);
        if (this.op != dependency_1.WidgetSlotOp.WIDGET_SLOT_OP_ATTACH)
            writer.writeEnum(2, this.op);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SetWidgetSlotReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SetWidgetSlotReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.tag_list = reader.readPackedEnum();
                    break;
                case 6:
                    message.material_id = reader.readUint32();
                    break;
                case 2:
                    message.op = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SetWidgetSlotReq {
        return SetWidgetSlotReq.deserialize(bytes);
    }
}
