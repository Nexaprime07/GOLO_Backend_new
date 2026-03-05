import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MobileDocument = Mobile & Document;

@Schema({ _id: false, timestamps: false })
export class Mobile {
  @Prop()
  brand?: string;

  @Prop()
  model?: string;

  @Prop()
  storage?: string;

  @Prop()
  ram?: string;

  @Prop()
  color?: string;

  @Prop({ enum: ['New', 'Like New', 'Good', 'Fair', 'Broken'] })
  condition?: string;

  @Prop()
  batteryHealth?: string;

  @Prop()
  screenSize?: string;

  @Prop()
  processor?: string;

  @Prop()
  rearCamera?: string;

  @Prop()
  frontCamera?: string;

  @Prop()
  warranty?: string;

  @Prop()
  warrantyExpiry?: Date;

  @Prop()
  boxIncluded?: boolean;

  @Prop({ type: [String] })
  accessories?: string[];

  @Prop()
  price?: number;

  @Prop()
  originalPrice?: number;

  @Prop()
  imeiNumber?: string;

  @Prop()
  dualSim?: boolean;

  @Prop()
  hashas5G?: boolean;

  @Prop()
  waterResistant?: boolean;

  @Prop()
  fastCharging?: boolean;

  @Prop()
  negotiable?: boolean;
}

export const MobileSchema = SchemaFactory.createForClass(Mobile);