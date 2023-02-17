import uvicorn

from fastapi import FastAPI
from bd import Product
from bd import Category

app = FastAPI()

@app.get("/")
async def home():
    return "API Está no AR"

# lista os produtos
@app.get("/product")
async def home_product():
    return Product

# lista um produto por id
@app.get("/product/{id_prod}")
async def product_id(id_prod: int):
    return Product[id_prod]


# lista as categorias
@app.get("/category")
async def home_category():
    return Category

# lista uma categoria por id
@app.get("/category/{id_cat}")
async def category_id(id_cat: int):
    return Category[id_cat]


# editar
@app.put("product/{id_prod}")
async def editar_produto(id_prod:int):
    return Product[id_prod]