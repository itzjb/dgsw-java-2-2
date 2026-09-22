package itzjb.ex06.controller;

import io.swagger.v3.oas.annotations.Operation;
import itzjb.ex06.dto.ProductRequestDto;
import itzjb.ex06.entity.Product;
import itzjb.ex06.repository.ProductRepository;
import itzjb.ex06.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {

    private final ProductService productService;
    private final ProductRepository productRepository;

    @GetMapping("/products")
    @Operation(summary = "제품 조회", description = "모든 제품 정보를 조회합니다.")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/products/{id}")
    @Operation(summary = "제품 조회", description = "제품 아이디를 통해 제품 정보를 조회합니다.")
    public Product getProductById(@PathVariable Long id) {
        return  productService.getProductById(id);
    }

    @PostMapping("/products")
    @Operation(summary = "제품 등록", description = "제품 정보를 등록합니다.")
    public Product saveProduct(@RequestBody ProductRequestDto productRequest) {
        Product newProduct = new Product(productRequest.getName(), productRequest.getDescription(), productRequest.getPrice());
        productRepository.save(newProduct);
        return newProduct;
    }

    @PutMapping("/products/{id}")
    @Operation(summary = "제품 수정", description = "제품 아이디를 통해 제품 정보를 수정합니다.")
    public Product updateProduct(@PathVariable Long id, @RequestBody ProductRequestDto productRequest) throws Exception {
        return productService.updateProduct(id, productRequest);
    }

    @DeleteMapping("/products/{id}")
    @Operation(summary = "제품 삭제", description = "제품 아이디를 통해 제품 정보를 삭제합니다.")
    public boolean deleteProduct(@PathVariable Long id) throws Exception {
        return productService.deleteProduct(id);
    }
}
