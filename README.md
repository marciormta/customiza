import matplotlib.pyplot as plt

# Filtrar apenas as linhas com FRENTE_EXECUTIVA igual a 'REPERFORMANCE' ou 'DEMANDA_PASSIVA'
df = df[df['FRENTE_EXECUTIVA'].isin(['REPERFORMANCE', 'DEMANDA_PASSIVA'])]

# Ordenar os valores por CHAVE e BAIXA_DEMANDA
df = df.sort_values(by=['CHAVE', 'BAIXA_DEMANDA'])

# Criar uma coluna para identificar a primeira ocorrência de REPERFORMANCE para cada CHAVE
df['primeira_reperformance'] = (df['FRENTE_EXECUTIVA'] == 'REPERFORMANCE').groupby(df['CHAVE']).cumsum() == 1

# Filtrar apenas as linhas após a primeira ocorrência de REPERFORMANCE para cada CHAVE
df = df[df.groupby('CHAVE')['primeira_reperformance'].cumsum() > 0]

# Filtrar apenas as linhas com FRENTE_EXECUTIVA igual a 'DEMANDA_PASSIVA'
df = df[df['FRENTE_EXECUTIVA'] == 'DEMANDA_PASSIVA']

# Agrupar por CHAVE e contar o número de documentos de demanda passiva incluídos após a primeira entrada de reperformance
contagem = df.groupby('CHAVE').size()

# Criar um gráfico de barras
contagem.plot(kind='bar')
plt.xlabel('CHAVE')
plt.ylabel('Contagem de documentos de demanda passiva')
plt.show()
