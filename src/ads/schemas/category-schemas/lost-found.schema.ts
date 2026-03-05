import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LostFoundDocument = LostFound & Document;

@Schema({ _id: false, timestamps: false })
export class LostFound {
  @Prop({ enum: ['Lost', 'Found'] })
  type?: string;

  @Prop({ enum: ['Lost', 'Found'] })
  status?: string;

  @Prop()
  itemName?: string;

  @Prop()
  itemType?: string;

  @Prop()
  description?: string;

  @Prop()
  location?: string;

  @Prop()
  category?: string;

  @Prop()
  brand?: string;

  @Prop()
  color?: string;

  @Prop()
  distinctiveFeatures?: string;

  @Prop()
  lostFoundLocation?: string;

  @Prop()
  lostFoundDate?: Date;

  @Prop()
  reward?: string;

  @Prop()
  contactName?: string;

  @Prop()
  contactNumber?: string;

  @Prop()
  email?: string;

  @Prop({ type: [String] })
  images?: string[];
}

export const LostFoundSchema = SchemaFactory.createForClass(LostFound);