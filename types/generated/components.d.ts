import type { Schema, Struct } from '@strapi/strapi';

export interface BlockImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_block_image_blocks';
  info: {
    description: '';
    displayName: 'image-block';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlockQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_block_quote_blocks';
  info: {
    displayName: 'quote-block';
  };
  attributes: {
    quote: Schema.Attribute.String;
  };
}

export interface BlockTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_block_text_blocks';
  info: {
    description: '';
    displayName: 'text-block';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.image-block': BlockImageBlock;
      'block.quote-block': BlockQuoteBlock;
      'block.text-block': BlockTextBlock;
    }
  }
}
