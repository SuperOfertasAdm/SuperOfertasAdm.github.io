import pandas as pd
import json

# Substitua o caminho pelo caminho para sua planilha do Excel
excel_file = '/Users/joaopessoadias/Desktop/Site GitHub/Atualizacao_Web_Site.xlsx'

# Carregar a planilha do Excel
df = pd.read_excel(excel_file)

# Converter o DataFrame em uma lista de dicionários
products = df.to_dict(orient='records')

# Substitua 'products.json' pelo nome e caminho desejados para o arquivo JSON
json_file = 'products.json'

# Salvar a lista de produtos em um arquivo JSON
with open(json_file, 'w') as f:
    json.dump(products, f, indent=4, ensure_ascii=False)

print("Produtos atualizados com sucesso!")