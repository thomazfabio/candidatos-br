import csv
import json

# Caminho do arquivo CSV
csv_file_path = '../dados/convert/convert_in.csv'
# Caminho do arquivo JSON de saída
json_file_path = '../dados/convert/convert_out.json'

# Abrir o CSV e ler os dados
with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
    # Usando ';' como delimitador
    csv_reader = csv.DictReader(csv_file, delimiter=';', quotechar='"')
    # Criar uma lista para armazenar os dados
    data = list(csv_reader)

# Escrever os dados no formato JSON
with open(json_file_path, mode='w', encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=4, ensure_ascii=False)

print("Conversão completa!")
