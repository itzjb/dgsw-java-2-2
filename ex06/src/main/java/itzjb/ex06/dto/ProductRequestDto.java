package itzjb.ex06.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProductRequestDto {
    private String name;
    private String description;
    private Integer price;
}
