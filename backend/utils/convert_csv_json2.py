import csv
import json
import os

# Caminho do diretório de entrada contendo os arquivos CSV
input_directory = '../dados/convert/'
# Caminho do diretório de saída para os arquivos JSON
output_directory = '../dados/convert/output/'

# Criar o diretório de saída se não existir
os.makedirs(output_directory, exist_ok=True)

# Percorrer todos os arquivos no diretório de entrada
for file_name in os.listdir(input_directory):
    if file_name.endswith('.csv'):
        csv_file_path = os.path.join(input_directory, file_name)

        # Extrair a sigla do estado do nome do arquivo
        # Assumimos que o nome do arquivo segue o padrão 'consulta_cand_2024_SIGLA.csv'
        file_parts = file_name.split('_')
        estado_sigla = file_parts[-1].replace('.csv', '').lower()

        # Gerar o novo nome para o arquivo JSON no formato 'cand_rs.json'
        json_file_name = f'cand_{estado_sigla}.json'
        json_file_path = os.path.join(output_directory, json_file_name)

        # Ler o arquivo CSV
        with open(csv_file_path, mode='r') as csv_file:
            csv_reader = csv.DictReader(csv_file, delimiter=';', quotechar='"')
            data = list(csv_reader)

        # Escrever os dados no formato JSON com UTF-8
        with open(json_file_path, mode='w', encoding='utf-8') as json_file:
            json.dump(data, json_file, indent=4, ensure_ascii=False)

        print(f'Conversão completa: {file_name} para {json_file_name}')
