import uvicorn
from fastapi import FastAPI, Request
from bd import Livros

app = FastAPI()


@app.get("/")
def home():
    return Livros

# Criar uma api para:


# - Consultar por id
@app.get("/livros/{id_livro}")
def obter_livros(id_livro: int):
    return Livros[id_livro]

# # - Editar


@app.put("/livros/{id_livro}")
def editar_livro(id_livro: int):
    return Livros[id_livro]

# # - Criar


@app.post('/livros')
def criar_livro():
    novo_livro = Request
    Livros.append(novo_livro)
    return Livros


# # - Excluir
# @app.route('/livros/<int:id>', methods=['DELETE'])
# def excluir_livro(id):
#     for indice, livro in enumerate(Livros):
#         if livro.get('id') == id:
#             del Livros[indice]

#     return jsonify(Livros)


# # app.run(port=8000, host='localhost', debug=True)
