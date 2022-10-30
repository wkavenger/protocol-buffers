/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarWearFlycloakRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AvatarWearFlycloakRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        flycloak_id?: number;
        avatar_guid?: number;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("flycloak_id" in data && data.flycloak_id != undefined) {
                this.flycloak_id = data.flycloak_id;
            }
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get flycloak_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set flycloak_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set avatar_guid(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        flycloak_id?: number;
        avatar_guid?: number;
        retcode?: number;
    }): AvatarWearFlycloakRsp {
        const message = new AvatarWearFlycloakRsp({});
        if (data.flycloak_id != null) {
            message.flycloak_id = data.flycloak_id;
        }
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            flycloak_id?: number;
            avatar_guid?: number;
            retcode?: number;
        } = {};
        if (this.flycloak_id != null) {
            data.flycloak_id = this.flycloak_id;
        }
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.flycloak_id != 0)
            writer.writeUint32(13, this.flycloak_id);
        if (this.avatar_guid != 0)
            writer.writeUint64(7, this.avatar_guid);
        if (this.retcode != 0)
            writer.writeInt32(6, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AvatarWearFlycloakRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarWearFlycloakRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.flycloak_id = reader.readUint32();
                    break;
                case 7:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 6:
                    message.retcode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AvatarWearFlycloakRsp {
        return AvatarWearFlycloakRsp.deserialize(bytes);
    }
}
