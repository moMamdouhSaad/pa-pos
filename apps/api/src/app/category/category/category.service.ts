import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  public constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>
  ) {}

  //   insert category
  public async insertCategory(category): Promise<Category> {
    const newCategory = new this.categoryModel(category);
    const result = await newCategory.save();
    return result;
  }
  // ##########################

  //   Get all categories
  public async getCategories(
    pageNo: string,
    limit: string
  ): Promise<Category[]> {
    const pageOptions = {
      page: parseInt(pageNo, 10) || 0,
      limit: parseInt(limit, 10) || 8,
    };
    const categories = await this.categoryModel
      .find()
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .exec();
    return categories;
  }

  // ##########################

  //   get one category
  public async getSingleCategory(categoryId: string): Promise<Category> {
    const category = await this.findCategory(categoryId);
    return category;
    // return {
    //   id: book.id,
    //   title: book.title,
    //   description: book.description,
    //   price: book.price,
    // };
  }

  // ##########################

  //   update category

  public async updateCategory(
    category: Category,
    categoryId: string
  ): Promise<Category> {
    const updatedCategory = await this.categoryModel.findOneAndUpdate(
      { _id: categoryId },
      category
    );

    return updatedCategory;
  }
  //  delete category

  public async deleteCategory(categoryId: string): Promise<boolean> {
    const result = await this.categoryModel
      .deleteOne({ _id: categoryId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find category.');
    }
    return true;
  }
  // ##########################

  // ##########################

  //   find category

  private async findCategory(id: string): Promise<Category> {
    let category;
    try {
      category = await this.categoryModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find category.');
    }
    if (!category) {
      throw new NotFoundException('Could not find category.');
    }
    return category;
  }
}
