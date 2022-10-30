/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeGetOnlineStatusRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./OnlinePlayerInfo";
import * as pb_1 from "google-protobuf";
export class HomeGetOnlineStatusRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        player_info_list?: dependency_1.OnlinePlayerInfo[];
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [13], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("player_info_list" in data && data.player_info_list != undefined) {
                this.player_info_list = data.player_info_list;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get player_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.OnlinePlayerInfo, 13) as dependency_1.OnlinePlayerInfo[];
    }
    set player_info_list(value: dependency_1.OnlinePlayerInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 13, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        player_info_list?: ReturnType<typeof dependency_1.OnlinePlayerInfo.prototype.toObject>[];
        retcode?: number;
    }): HomeGetOnlineStatusRsp {
        const message = new HomeGetOnlineStatusRsp({});
        if (data.player_info_list != null) {
            message.player_info_list = data.player_info_list.map(item => dependency_1.OnlinePlayerInfo.fromObject(item));
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            player_info_list?: ReturnType<typeof dependency_1.OnlinePlayerInfo.prototype.toObject>[];
            retcode?: number;
        } = {};
        if (this.player_info_list != null) {
            data.player_info_list = this.player_info_list.map((item: dependency_1.OnlinePlayerInfo) => item.toObject());
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
        if (this.player_info_list.length)
            writer.writeRepeatedMessage(13, this.player_info_list, (item: dependency_1.OnlinePlayerInfo) => item.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(7, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HomeGetOnlineStatusRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeGetOnlineStatusRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    reader.readMessage(message.player_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 13, dependency_1.OnlinePlayerInfo.deserialize(reader), dependency_1.OnlinePlayerInfo));
                    break;
                case 7:
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
    static deserializeBinary(bytes: Uint8Array): HomeGetOnlineStatusRsp {
        return HomeGetOnlineStatusRsp.deserialize(bytes);
    }
}
