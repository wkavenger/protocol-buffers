/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AchievementUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Achievement";
import * as pb_1 from "google-protobuf";
export class AchievementUpdateNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        achievement_list?: dependency_1.Achievement[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("achievement_list" in data && data.achievement_list != undefined) {
                this.achievement_list = data.achievement_list;
            }
        }
    }
    get achievement_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Achievement, 14) as dependency_1.Achievement[];
    }
    set achievement_list(value: dependency_1.Achievement[]) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    static fromObject(data: {
        achievement_list?: ReturnType<typeof dependency_1.Achievement.prototype.toObject>[];
    }): AchievementUpdateNotify {
        const message = new AchievementUpdateNotify({});
        if (data.achievement_list != null) {
            message.achievement_list = data.achievement_list.map(item => dependency_1.Achievement.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            achievement_list?: ReturnType<typeof dependency_1.Achievement.prototype.toObject>[];
        } = {};
        if (this.achievement_list != null) {
            data.achievement_list = this.achievement_list.map((item: dependency_1.Achievement) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.achievement_list.length)
            writer.writeRepeatedMessage(14, this.achievement_list, (item: dependency_1.Achievement) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AchievementUpdateNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AchievementUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    reader.readMessage(message.achievement_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.Achievement.deserialize(reader), dependency_1.Achievement));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AchievementUpdateNotify {
        return AchievementUpdateNotify.deserialize(bytes);
    }
}
