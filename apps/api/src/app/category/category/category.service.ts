import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.model';
import paginate from 'jw-paginate';
import { PagerResponse } from '@pa-pos/api-interfaces';
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
  public async getCategories(queryObj): Promise<PagerResponse> {
    let allCategories: Category[];
    const match = { search: [] };
    let sortByName: string | null;
    const page = parseInt(queryObj.page, 10) || 1;
    const pageSize = 8;

    // search
    switch (true) {
      case queryObj.search !== 'undefined':
        match.search = [
          {
            name: {
              $regex: queryObj.search,
            },
          },
          {
            description: {
              $regex: queryObj.search,
            },
          },
        ];
        break;

      default:
        match.search = [
          {
            name: {
              $regex: '',
            },
          },
          {
            description: {
              $regex: '',
            },
          },
        ];
        break;
    }
    switch (true) {
      case queryObj.sort === 'asc':
        sortByName = 'name';
        break;
      case queryObj.sort === 'desc':
        sortByName = '-name';
        break;

      default:
        sortByName = '-created_at';
        break;
    }

    allCategories = await this.categoryModel
      .find()
      .or(match.search)
      .sort(sortByName)
      .exec();

    const pager = paginate(allCategories.length, page, pageSize);
    const categories = allCategories.slice(
      pager.startIndex,
      pager.endIndex + 1
    );
    return { pager, data: categories };
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
