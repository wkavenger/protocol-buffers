// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "RegionSimpleInfo.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
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
 * @generated from protobuf message RegionSimpleInfo
 */
export interface RegionSimpleInfo {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string title = 2;
     */
    title: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
    /**
     * @generated from protobuf field: string dispatch_url = 4;
     */
    dispatchUrl: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class RegionSimpleInfo$Type extends MessageType<RegionSimpleInfo> {
    constructor() {
        super("RegionSimpleInfo", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "dispatch_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RegionSimpleInfo>): RegionSimpleInfo {
        const message = { name: "", title: "", type: "", dispatchUrl: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegionSimpleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegionSimpleInfo): RegionSimpleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string title */ 2:
                    message.title = reader.string();
                    break;
                case /* string type */ 3:
                    message.type = reader.string();
                    break;
                case /* string dispatch_url */ 4:
                    message.dispatchUrl = reader.string();
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
    internalBinaryWrite(message: RegionSimpleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string title = 2; */
        if (message.title !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.title);
        /* string type = 3; */
        if (message.type !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.type);
        /* string dispatch_url = 4; */
        if (message.dispatchUrl !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.dispatchUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionSimpleInfo
 */
export const RegionSimpleInfo = new RegionSimpleInfo$Type();
