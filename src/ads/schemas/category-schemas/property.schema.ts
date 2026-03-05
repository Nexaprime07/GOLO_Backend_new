import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PropertyDocument = Property & Document;

@Schema({ _id: false, timestamps: false })
export class Property {
  @Prop({ enum: ['Rent', 'Sell'] })
  type?: string;

  @Prop({ enum: ['Rent', 'Sell'] })
  listingType?: string;

  @Prop({ enum: ['Apartment', 'House', 'Villa', 'Commercial', 'Land', 'Office'] })
  propertyType?: string;

  @Prop()
  rent?: number;

  @Prop()
  bhk?: string;

  @Prop({ required: true })
  area?: number;

  @Prop({ required: true })
  areaUnit?: string;

  @Prop()
  bedrooms?: number;

  @Prop()
  bathrooms?: number;

  @Prop()
  balconies?: number;

  @Prop()
  furnishing?: string;

  @Prop()
  price?: number;

  @Prop()
  maintenanceCharges?: number;

  @Prop()
  floorNumber?: number;

  @Prop()
  totalFloors?: number;

  @Prop()
  facing?: string;

  @Prop()
  parking?: string;

  @Prop({ type: [String] })
  amenities?: string[];

  @Prop()
  possessionDate?: Date;

  @Prop()
  ageOfProperty?: number;

  @Prop()
  gatedCommunity?: boolean;

  @Prop()
  powerBackup?: boolean;
}

export const PropertySchema = SchemaFactory.createForClass(Property);