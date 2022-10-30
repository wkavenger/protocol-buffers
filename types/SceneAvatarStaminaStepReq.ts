/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneAvatarStaminaStepReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Vector";
import * as pb_1 from "google-protobuf";
export class SceneAvatarStaminaStepReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        use_client_rot?: boolean;
        rot?: dependency_1.Vector;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("use_client_rot" in data && data.use_client_rot != undefined) {
                this.use_client_rot = data.use_client_rot;
            }
            if ("rot" in data && data.rot != undefined) {
                this.rot = data.rot;
            }
        }
    }
    get use_client_rot() {
        return pb_1.Message.getFieldWithDefault(this, 15, false) as boolean;
    }
    set use_client_rot(value: boolean) {
        pb_1.Message.setField(this, 15, value);
    }
    get rot() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 7) as dependency_1.Vector;
    }
    set rot(value: dependency_1.Vector) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get has_rot() {
        return pb_1.Message.getField(this, 7) != null;
    }
    static fromObject(data: {
        use_client_rot?: boolean;
        rot?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
    }): SceneAvatarStaminaStepReq {
        const message = new SceneAvatarStaminaStepReq({});
        if (data.use_client_rot != null) {
            message.use_client_rot = data.use_client_rot;
        }
        if (data.rot != null) {
            message.rot = dependency_1.Vector.fromObject(data.rot);
        }
        return message;
    }
    toObject() {
        const data: {
            use_client_rot?: boolean;
            rot?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
        } = {};
        if (this.use_client_rot != null) {
            data.use_client_rot = this.use_client_rot;
        }
        if (this.rot != null) {
            data.rot = this.rot.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.use_client_rot != false)
            writer.writeBool(15, this.use_client_rot);
        if (this.has_rot)
            writer.writeMessage(7, this.rot, () => this.rot.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SceneAvatarStaminaStepReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneAvatarStaminaStepReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.use_client_rot = reader.readBool();
                    break;
                case 7:
                    reader.readMessage(message.rot, () => message.rot = dependency_1.Vector.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SceneAvatarStaminaStepReq {
        return SceneAvatarStaminaStepReq.deserialize(bytes);
    }
}
