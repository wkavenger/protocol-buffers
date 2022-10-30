/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ProfilePictureChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ProfilePicture";
import * as pb_1 from "google-protobuf";
export class ProfilePictureChangeNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        profile_picture?: dependency_1.ProfilePicture;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("profile_picture" in data && data.profile_picture != undefined) {
                this.profile_picture = data.profile_picture;
            }
        }
    }
    get profile_picture() {
        return pb_1.Message.getWrapperField(this, dependency_1.ProfilePicture, 12) as dependency_1.ProfilePicture;
    }
    set profile_picture(value: dependency_1.ProfilePicture) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_profile_picture() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data: {
        profile_picture?: ReturnType<typeof dependency_1.ProfilePicture.prototype.toObject>;
    }): ProfilePictureChangeNotify {
        const message = new ProfilePictureChangeNotify({});
        if (data.profile_picture != null) {
            message.profile_picture = dependency_1.ProfilePicture.fromObject(data.profile_picture);
        }
        return message;
    }
    toObject() {
        const data: {
            profile_picture?: ReturnType<typeof dependency_1.ProfilePicture.prototype.toObject>;
        } = {};
        if (this.profile_picture != null) {
            data.profile_picture = this.profile_picture.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_profile_picture)
            writer.writeMessage(12, this.profile_picture, () => this.profile_picture.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProfilePictureChangeNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProfilePictureChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    reader.readMessage(message.profile_picture, () => message.profile_picture = dependency_1.ProfilePicture.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ProfilePictureChangeNotify {
        return ProfilePictureChangeNotify.deserialize(bytes);
    }
}
