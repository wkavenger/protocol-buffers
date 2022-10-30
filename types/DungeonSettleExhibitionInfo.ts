/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonSettleExhibitionInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ExhibitionDisplayInfo";
import * as dependency_2 from "./OnlinePlayerInfo";
import * as pb_1 from "google-protobuf";
export class DungeonSettleExhibitionInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        player_info?: dependency_2.OnlinePlayerInfo;
        card_list?: dependency_1.ExhibitionDisplayInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [13], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("player_info" in data && data.player_info != undefined) {
                this.player_info = data.player_info;
            }
            if ("card_list" in data && data.card_list != undefined) {
                this.card_list = data.card_list;
            }
        }
    }
    get player_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.OnlinePlayerInfo, 3) as dependency_2.OnlinePlayerInfo;
    }
    set player_info(value: dependency_2.OnlinePlayerInfo) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_player_info() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get card_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ExhibitionDisplayInfo, 13) as dependency_1.ExhibitionDisplayInfo[];
    }
    set card_list(value: dependency_1.ExhibitionDisplayInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 13, value);
    }
    static fromObject(data: {
        player_info?: ReturnType<typeof dependency_2.OnlinePlayerInfo.prototype.toObject>;
        card_list?: ReturnType<typeof dependency_1.ExhibitionDisplayInfo.prototype.toObject>[];
    }): DungeonSettleExhibitionInfo {
        const message = new DungeonSettleExhibitionInfo({});
        if (data.player_info != null) {
            message.player_info = dependency_2.OnlinePlayerInfo.fromObject(data.player_info);
        }
        if (data.card_list != null) {
            message.card_list = data.card_list.map(item => dependency_1.ExhibitionDisplayInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            player_info?: ReturnType<typeof dependency_2.OnlinePlayerInfo.prototype.toObject>;
            card_list?: ReturnType<typeof dependency_1.ExhibitionDisplayInfo.prototype.toObject>[];
        } = {};
        if (this.player_info != null) {
            data.player_info = this.player_info.toObject();
        }
        if (this.card_list != null) {
            data.card_list = this.card_list.map((item: dependency_1.ExhibitionDisplayInfo) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_player_info)
            writer.writeMessage(3, this.player_info, () => this.player_info.serialize(writer));
        if (this.card_list.length)
            writer.writeRepeatedMessage(13, this.card_list, (item: dependency_1.ExhibitionDisplayInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DungeonSettleExhibitionInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonSettleExhibitionInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.player_info, () => message.player_info = dependency_2.OnlinePlayerInfo.deserialize(reader));
                    break;
                case 13:
                    reader.readMessage(message.card_list, () => pb_1.Message.addToRepeatedWrapperField(message, 13, dependency_1.ExhibitionDisplayInfo.deserialize(reader), dependency_1.ExhibitionDisplayInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DungeonSettleExhibitionInfo {
        return DungeonSettleExhibitionInfo.deserialize(bytes);
    }
}
