// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "cmd_op_activity.proto" (package "com.midnights.game", syntax proto2)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.midnights.game.OpActivityInfo
 */
export interface OpActivityInfo {
    /**
     * @generated from protobuf field: optional uint32 activity_id = 2;
     */
    activityId?: number;
    /**
     * @generated from protobuf field: optional uint32 end_time = 6;
     */
    endTime?: number;
    /**
     * @generated from protobuf field: optional uint32 begin_time = 5;
     */
    beginTime?: number;
    /**
     * @generated from protobuf field: optional bool is_has_change = 1;
     */
    isHasChange?: boolean;
    /**
     * @generated from protobuf field: optional uint32 schedule_id = 13;
     */
    scheduleId?: number;
    /**
     * @generated from protobuf oneof: detail
     */
    detail: {
        oneofKind: "bonusInfo";
        /**
         * @generated from protobuf field: com.midnights.game.BonusOpActivityInfo bonus_info = 12;
         */
        bonusInfo: BonusOpActivityInfo;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message com.midnights.game.BonusOpActivityInfo
 */
export interface BonusOpActivityInfo {
    /**
     * @generated from protobuf field: optional uint32 left_bonus_count = 11;
     */
    leftBonusCount?: number;
}
/**
 * @generated from protobuf message com.midnights.game.GetOpActivityInfoReq
 */
export interface GetOpActivityInfoReq {
}
/**
 * @generated from protobuf enum com.midnights.game.GetOpActivityInfoReq.CmdId
 */
export enum GetOpActivityInfoReq_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 5172;
     */
    CMD_ID = 5172,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IS_ALLOW_CLIENT = 1
}
/**
 * @generated from protobuf message com.midnights.game.GetOpActivityInfoRsp
 */
export interface GetOpActivityInfoRsp {
    /**
     * @generated from protobuf field: optional int32 retcode = 10;
     */
    retcode?: number;
    /**
     * @generated from protobuf field: repeated com.midnights.game.OpActivityInfo op_activity_info_list = 7;
     */
    opActivityInfoList: OpActivityInfo[];
}
/**
 * @generated from protobuf enum com.midnights.game.GetOpActivityInfoRsp.CmdId
 */
export enum GetOpActivityInfoRsp_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 5198;
     */
    CMD_ID = 5198,
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
 * @generated from protobuf message com.midnights.game.OpActivityDataNotify
 */
export interface OpActivityDataNotify {
    /**
     * @generated from protobuf field: repeated com.midnights.game.OpActivityInfo op_activity_info_list = 15;
     */
    opActivityInfoList: OpActivityInfo[];
}
/**
 * @generated from protobuf enum com.midnights.game.OpActivityDataNotify.CmdId
 */
export enum OpActivityDataNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 5112;
     */
    CMD_ID = 5112,
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
 * @generated from protobuf message com.midnights.game.OpActivityUpdateNotify
 */
export interface OpActivityUpdateNotify {
    /**
     * @generated from protobuf field: optional com.midnights.game.OpActivityInfo op_activity_info = 6;
     */
    opActivityInfo?: OpActivityInfo;
}
/**
 * @generated from protobuf enum com.midnights.game.OpActivityUpdateNotify.CmdId
 */
export enum OpActivityUpdateNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 5135;
     */
    CMD_ID = 5135,
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
class OpActivityInfo$Type extends MessageType<OpActivityInfo> {
    constructor() {
        super("com.midnights.game.OpActivityInfo", [
            { no: 2, name: "activity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_has_change", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "bonus_info", kind: "message", oneof: "detail", T: () => BonusOpActivityInfo }
        ]);
    }
    create(value?: PartialMessage<OpActivityInfo>): OpActivityInfo {
        const message = { detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OpActivityInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpActivityInfo): OpActivityInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 activity_id */ 2:
                    message.activityId = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 6:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 5:
                    message.beginTime = reader.uint32();
                    break;
                case /* optional bool is_has_change */ 1:
                    message.isHasChange = reader.bool();
                    break;
                case /* optional uint32 schedule_id */ 13:
                    message.scheduleId = reader.uint32();
                    break;
                case /* com.midnights.game.BonusOpActivityInfo bonus_info */ 12:
                    message.detail = {
                        oneofKind: "bonusInfo",
                        bonusInfo: BonusOpActivityInfo.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).bonusInfo)
                    };
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
    internalBinaryWrite(message: OpActivityInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 activity_id = 2; */
        if (message.activityId !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.activityId);
        /* optional uint32 end_time = 6; */
        if (message.endTime !== undefined)
            writer.tag(6, WireType.Varint).uint32(message.endTime);
        /* optional uint32 begin_time = 5; */
        if (message.beginTime !== undefined)
            writer.tag(5, WireType.Varint).uint32(message.beginTime);
        /* optional bool is_has_change = 1; */
        if (message.isHasChange !== undefined)
            writer.tag(1, WireType.Varint).bool(message.isHasChange);
        /* optional uint32 schedule_id = 13; */
        if (message.scheduleId !== undefined)
            writer.tag(13, WireType.Varint).uint32(message.scheduleId);
        /* com.midnights.game.BonusOpActivityInfo bonus_info = 12; */
        if (message.detail.oneofKind === "bonusInfo")
            BonusOpActivityInfo.internalBinaryWrite(message.detail.bonusInfo, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpActivityInfo
 */
export const OpActivityInfo = new OpActivityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BonusOpActivityInfo$Type extends MessageType<BonusOpActivityInfo> {
    constructor() {
        super("com.midnights.game.BonusOpActivityInfo", [
            { no: 11, name: "left_bonus_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BonusOpActivityInfo>): BonusOpActivityInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BonusOpActivityInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BonusOpActivityInfo): BonusOpActivityInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 left_bonus_count */ 11:
                    message.leftBonusCount = reader.uint32();
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
    internalBinaryWrite(message: BonusOpActivityInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 left_bonus_count = 11; */
        if (message.leftBonusCount !== undefined)
            writer.tag(11, WireType.Varint).uint32(message.leftBonusCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BonusOpActivityInfo
 */
export const BonusOpActivityInfo = new BonusOpActivityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOpActivityInfoReq$Type extends MessageType<GetOpActivityInfoReq> {
    constructor() {
        super("com.midnights.game.GetOpActivityInfoReq", []);
    }
    create(value?: PartialMessage<GetOpActivityInfoReq>): GetOpActivityInfoReq {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetOpActivityInfoReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOpActivityInfoReq): GetOpActivityInfoReq {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetOpActivityInfoReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetOpActivityInfoReq
 */
export const GetOpActivityInfoReq = new GetOpActivityInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOpActivityInfoRsp$Type extends MessageType<GetOpActivityInfoRsp> {
    constructor() {
        super("com.midnights.game.GetOpActivityInfoRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "op_activity_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => OpActivityInfo }
        ]);
    }
    create(value?: PartialMessage<GetOpActivityInfoRsp>): GetOpActivityInfoRsp {
        const message = { opActivityInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetOpActivityInfoRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOpActivityInfoRsp): GetOpActivityInfoRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.OpActivityInfo op_activity_info_list */ 7:
                    message.opActivityInfoList.push(OpActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GetOpActivityInfoRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.OpActivityInfo op_activity_info_list = 7; */
        for (let i = 0; i < message.opActivityInfoList.length; i++)
            OpActivityInfo.internalBinaryWrite(message.opActivityInfoList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetOpActivityInfoRsp
 */
export const GetOpActivityInfoRsp = new GetOpActivityInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityDataNotify$Type extends MessageType<OpActivityDataNotify> {
    constructor() {
        super("com.midnights.game.OpActivityDataNotify", [
            { no: 15, name: "op_activity_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => OpActivityInfo }
        ]);
    }
    create(value?: PartialMessage<OpActivityDataNotify>): OpActivityDataNotify {
        const message = { opActivityInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OpActivityDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpActivityDataNotify): OpActivityDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.OpActivityInfo op_activity_info_list */ 15:
                    message.opActivityInfoList.push(OpActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: OpActivityDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated com.midnights.game.OpActivityInfo op_activity_info_list = 15; */
        for (let i = 0; i < message.opActivityInfoList.length; i++)
            OpActivityInfo.internalBinaryWrite(message.opActivityInfoList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpActivityDataNotify
 */
export const OpActivityDataNotify = new OpActivityDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityUpdateNotify$Type extends MessageType<OpActivityUpdateNotify> {
    constructor() {
        super("com.midnights.game.OpActivityUpdateNotify", [
            { no: 6, name: "op_activity_info", kind: "message", T: () => OpActivityInfo }
        ]);
    }
    create(value?: PartialMessage<OpActivityUpdateNotify>): OpActivityUpdateNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OpActivityUpdateNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpActivityUpdateNotify): OpActivityUpdateNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.OpActivityInfo op_activity_info */ 6:
                    message.opActivityInfo = OpActivityInfo.internalBinaryRead(reader, reader.uint32(), options, message.opActivityInfo);
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
    internalBinaryWrite(message: OpActivityUpdateNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional com.midnights.game.OpActivityInfo op_activity_info = 6; */
        if (message.opActivityInfo)
            OpActivityInfo.internalBinaryWrite(message.opActivityInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpActivityUpdateNotify
 */
export const OpActivityUpdateNotify = new OpActivityUpdateNotify$Type();
