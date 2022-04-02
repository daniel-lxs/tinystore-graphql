import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './inputs/create-product.input';
import { ProductType } from './models/product.model';
import { ProductService } from './product.service';

@Resolver((of) => ProductType)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query((returns) => [ProductType])
  async products() {
    return this.productService.getProducts();
  }

  @Mutation((returns) => ProductType)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.createProduct(createProductInput);
  }
}
