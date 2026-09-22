package itzjb.ex06.service;

import itzjb.ex06.dto.ProductRequestDto;
import itzjb.ex06.entity.Product;
import itzjb.ex06.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long productId) {
        return productRepository.findById(productId).orElse(null);
    }

    public void saveProduct(ProductRequestDto productRequest) {
        Product newProduct = new Product(productRequest.getName(), productRequest.getDescription(), productRequest.getPrice());
        productRepository.save(newProduct);
    }

    public Product updateProduct(Long id, ProductRequestDto request) throws Exception {
        Product product = getProductById(id);
        if (product != null) {
            product.setName(request.getName());
            product.setDescription(request.getDescription());
            product.setPrice(request.getPrice());
            productRepository.save(product);
        } else {
            throw new Exception("해당 id를 가진 제품이 없습니다. id: " + id);
        }
        return product;
    }

    public boolean deleteProduct(Long id) throws Exception {
        Product product = productRepository
                .findById(id)
                .orElseThrow(() -> new Exception("해당 id를 가진 제품이 없습니다. id: " + id));
        productRepository.delete(product);
        return  true;
    }
}
