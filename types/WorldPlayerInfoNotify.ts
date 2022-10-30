/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WorldPlayerInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./OnlinePlayerInfo";
import * as dependency_2 from "./Unk3000_HKHFFDEMNKN";
import * as pb_1 from "google-protobuf";
export class WorldPlayerInfoNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk3000_GCJLJCJAADG?: dependency_2.Unk3000_HKHFFDEMNKN[];
        player_info_list?: dependency_1.OnlinePlayerInfo[];
        player_uid_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8, 14, 11], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk3000_GCJLJCJAADG" in data && data.Unk3000_GCJLJCJAADG != undefined) {
                this.Unk3000_GCJLJCJAADG = data.Unk3000_GCJLJCJAADG;
            }
            if ("player_info_list" in data && data.player_info_list != undefined) {
                this.player_info_list = data.player_info_list;
            }
            if ("player_uid_list" in data && data.player_uid_list != undefined) {
                this.player_uid_list = data.player_uid_list;
            }
        }
    }
    get Unk3000_GCJLJCJAADG() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.Unk3000_HKHFFDEMNKN, 8) as dependency_2.Unk3000_HKHFFDEMNKN[];
    }
    set Unk3000_GCJLJCJAADG(value: dependency_2.Unk3000_HKHFFDEMNKN[]) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get player_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.OnlinePlayerInfo, 14) as dependency_1.OnlinePlayerInfo[];
    }
    set player_info_list(value: dependency_1.OnlinePlayerInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    get player_uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 11, []) as number[];
    }
    set player_uid_list(value: number[]) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        Unk3000_GCJLJCJAADG?: ReturnType<typeof dependency_2.Unk3000_HKHFFDEMNKN.prototype.toObject>[];
        player_info_list?: ReturnType<typeof dependency_1.OnlinePlayerInfo.prototype.toObject>[];
        player_uid_list?: number[];
    }): WorldPlayerInfoNotify {
        const message = new WorldPlayerInfoNotify({});
        if (data.Unk3000_GCJLJCJAADG != null) {
            message.Unk3000_GCJLJCJAADG = data.Unk3000_GCJLJCJAADG.map(item => dependency_2.Unk3000_HKHFFDEMNKN.fromObject(item));
        }
        if (data.player_info_list != null) {
            message.player_info_list = data.player_info_list.map(item => dependency_1.OnlinePlayerInfo.fromObject(item));
        }
        if (data.player_uid_list != null) {
            message.player_uid_list = data.player_uid_list;
        }
        return message;
    }
    toObject() {
        const data: {
            Unk3000_GCJLJCJAADG?: ReturnType<typeof dependency_2.Unk3000_HKHFFDEMNKN.prototype.toObject>[];
            player_info_list?: ReturnType<typeof dependency_1.OnlinePlayerInfo.prototype.toObject>[];
            player_uid_list?: number[];
        } = {};
        if (this.Unk3000_GCJLJCJAADG != null) {
            data.Unk3000_GCJLJCJAADG = this.Unk3000_GCJLJCJAADG.map((item: dependency_2.Unk3000_HKHFFDEMNKN) => item.toObject());
        }
        if (this.player_info_list != null) {
            data.player_info_list = this.player_info_list.map((item: dependency_1.OnlinePlayerInfo) => item.toObject());
        }
        if (this.player_uid_list != null) {
            data.player_uid_list = this.player_uid_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk3000_GCJLJCJAADG.length)
            writer.writeRepeatedMessage(8, this.Unk3000_GCJLJCJAADG, (item: dependency_2.Unk3000_HKHFFDEMNKN) => item.serialize(writer));
        if (this.player_info_list.length)
            writer.writeRepeatedMessage(14, this.player_info_list, (item: dependency_1.OnlinePlayerInfo) => item.serialize(writer));
        if (this.player_uid_list.length)
            writer.writePackedUint32(11, this.player_uid_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WorldPlayerInfoNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WorldPlayerInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    reader.readMessage(message.Unk3000_GCJLJCJAADG, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_2.Unk3000_HKHFFDEMNKN.deserialize(reader), dependency_2.Unk3000_HKHFFDEMNKN));
                    break;
                case 14:
                    reader.readMessage(message.player_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.OnlinePlayerInfo.deserialize(reader), dependency_1.OnlinePlayerInfo));
                    break;
                case 11:
                    message.player_uid_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): WorldPlayerInfoNotify {
        return WorldPlayerInfoNotify.deserialize(bytes);
    }
}
