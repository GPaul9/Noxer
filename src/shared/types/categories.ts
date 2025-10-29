export type Category = {
  Category_ID: number;
  Category_Image: string;
  Category_Name: string;
  category_images: string[] | null;
  parent_category_id: number | null;
  sort_order: number;
};
