
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Thu Jun 06 2019 14:16:39 GMT+0200 (GMT+02:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class ArticleExampleContentType extends ContentItem {
    public body!: Fields.RichTextField;
    public title!: Fields.TextField;
    public url!: Fields.UrlSlugField;
}