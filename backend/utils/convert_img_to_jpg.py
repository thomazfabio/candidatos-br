import os
from PIL import Image

def converter_para_jpg(pasta_origem):
    for arquivo in os.listdir(pasta_origem):
        caminho_completo = os.path.join(pasta_origem, arquivo)
        nome_arquivo, extensao = os.path.splitext(arquivo)

        # Verifica se o arquivo já é um .jpg
        if extensao.lower() == '.jpg':
            print(f"{arquivo} já é um arquivo JPG, ignorado.")
            continue  # Se já for .jpg, não faz nada

        # Verifica se o arquivo é uma imagem (baseado na extensão)
        if extensao.lower() in ['.png', '.jpeg', '.gif', '.bmp', '.tiff']:  # Adicione outras extensões se necessário
            try:
                # Abre a imagem
                img = Image.open(caminho_completo)
                # Converte para RGB (se necessário, pois PNG pode ter canal alpha)
                img = img.convert('RGB')
                # Define o caminho do arquivo convertido (mesmo nome, extensão .jpg)
                caminho_jpg = os.path.join(pasta_origem, nome_arquivo + '.jpg')
                # Salva como JPG
                img.save(caminho_jpg, 'JPEG')
                print(f"Convertido: {arquivo} -> {nome_arquivo}.jpg")
                # Opcionalmente, remova o arquivo original após a conversão:
                # os.remove(caminho_completo)
            except Exception as e:
                print(f"Erro ao converter {arquivo}: {e}")
        else:
            print(f"Arquivo {arquivo} não é uma imagem suportada.")

# Exemplo de uso:
pasta_origem = '../public/images/'

converter_para_jpg(pasta_origem)
