# customiza

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

# Selecionar a coluna NOME_DOCUMENTO
resultados = df['NOME_DOCUMENTO']
