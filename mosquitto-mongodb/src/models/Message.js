import { Document } from 'camo';

export default class Message extends Document {
  constructor() {
    super();

    this.topic = String;
    this.message = String;
    this.time = {
      type: Date,
      default: Date.now,
    };
  }

  static collectionName() {
    return 'messages';
  }
}
