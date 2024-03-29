// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "cmd_reminder.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.midnights.game.NormalUidOpNotify
 */
export interface NormalUidOpNotify {
    /**
     * @generated from protobuf field: optional uint32 duration = 6;
     */
    duration?: number;
    /**
     * @generated from protobuf field: repeated uint32 param_list = 4;
     */
    paramList: number[];
    /**
     * @generated from protobuf field: repeated uint32 param_uid_list = 5;
     */
    paramUidList: number[];
    /**
     * @generated from protobuf field: optional uint32 param_index = 8;
     */
    paramIndex?: number;
}
/**
 * @generated from protobuf enum com.midnights.game.NormalUidOpNotify.CmdId
 */
export enum NormalUidOpNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 5726;
     */
    CMD_ID = 5726,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1
}
/**
 * @generated from protobuf message com.midnights.game.ServerMessageNotify
 */
export interface ServerMessageNotify {
    /**
     * @generated from protobuf field: optional uint32 index = 1;
     */
    index?: number;
}
/**
 * @generated from protobuf enum com.midnights.game.ServerMessageNotify.CmdId
 */
export enum ServerMessageNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 5718;
     */
    CMD_ID = 5718,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class NormalUidOpNotify$Type extends MessageType<NormalUidOpNotify> {
    constructor() {
        super("com.midnights.game.NormalUidOpNotify", [
            { no: 6, name: "duration", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "param_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "param_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<NormalUidOpNotify>): NormalUidOpNotify {
        const message = { paramList: [], paramUidList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<NormalUidOpNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NormalUidOpNotify): NormalUidOpNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 duration */ 6:
                    message.duration = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* repeated uint32 param_uid_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramUidList.push(reader.uint32());
                    else
                        message.paramUidList.push(reader.uint32());
                    break;
                case /* optional uint32 param_index */ 8:
                    message.paramIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: NormalUidOpNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 duration = 6; */
        if (message.duration !== undefined)
            writer.tag(6, WireType.Varint).uint32(message.duration);
        /* repeated uint32 param_list = 4; */
        if (message.paramList.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* repeated uint32 param_uid_list = 5; */
        if (message.paramUidList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramUidList.length; i++)
                writer.uint32(message.paramUidList[i]);
            writer.join();
        }
        /* optional uint32 param_index = 8; */
        if (message.paramIndex !== undefined)
            writer.tag(8, WireType.Varint).uint32(message.paramIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NormalUidOpNotify
 */
export const NormalUidOpNotify = new NormalUidOpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerMessageNotify$Type extends MessageType<ServerMessageNotify> {
    constructor() {
        super("com.midnights.game.ServerMessageNotify", [
            { no: 1, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ServerMessageNotify>): ServerMessageNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ServerMessageNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServerMessageNotify): ServerMessageNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 index */ 1:
                    message.index = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ServerMessageNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 index = 1; */
        if (message.index !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerMessageNotify
 */
export const ServerMessageNotify = new ServerMessageNotify$Type();
