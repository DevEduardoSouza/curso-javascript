import os

diretorio = r'C:\Programação\curso-javascript'  # Substitua pelo caminho completo do diretório

for pasta in os.listdir(diretorio):
    if '#' in pasta:
        novo_nome = pasta.replace('#', '')
        os.rename(os.path.join(diretorio, pasta), os.path.join(diretorio, novo_nome))

