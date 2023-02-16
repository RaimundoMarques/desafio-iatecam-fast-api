import uvicorn
from fastapi import FastAPI
from bd import Product
from bd import Category

app = FastAPI()

@app.get("/")
def home():
    return "Seja Bem-vindo a API de Produtos"


@app.get("/product")
def home_product():
    return Product

@app.get("/category")
def home_category():
    return Category

@app.get("/product/{id}")
def product_id(id:int):
    return Product[id]