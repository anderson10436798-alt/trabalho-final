CREATE DATABASE IF NOT EXISTS carlos_chagas_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE carlos_chagas_db;

-- Tabela 1: Informações Gerais e História da Cidade
CREATE TABLE cidade_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    categoria ENUM('historia', 'cidade_do_boi', 'geografia', 'cultura') NOT NULL,
    resumo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela 2: Pontos Turísticos, Natureza e Lendas
CREATE TABLE atrativos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    tipo ENUM('natureza', 'patrimonio', 'lenda', 'gastronomia') NOT NULL,
    descricao TEXT NOT NULL,
    localizacao VARCHAR(150)
);

-- Tabela 3: Calendário de Eventos e Exposições
CREATE TABLE eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_evento VARCHAR(150) NOT NULL,
    mes_ocorrencia VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    destaque BOOLEAN DEFAULT FALSE
);

-- Tabela 4: Perguntas do Quiz Interativo
CREATE TABLE quiz_perguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pergunta VARCHAR(255) NOT NULL,
    opcao_a VARCHAR(120) NOT NULL,
    opcao_b VARCHAR(120) NOT NULL,
    opcao_c VARCHAR(120) NOT NULL,
    opcao_d VARCHAR(120) NOT NULL,
    resposta_correta CHAR(1) NOT NULL,
    explicacao TEXT NOT NULL
);

-- Inserindo dados iniciais
INSERT INTO cidade_info (titulo, categoria, resumo, conteudo) VALUES
('De Urucu a Carlos Chagas', 'historia', 'A evolução histórica do município emancipado em 1938.', 'Originalmente chamada de Urucu, a região cresceu às margens do Rio Mucuri e ganhou impulso com a Estrada de Ferro Bahia e Minas. Em 17 de dezembro de 1938, foi emancipada e batizada em homenagem ao cientista mineiro Carlos Chagas.'),
('Por que Cidade do Boi?', 'cidade_do_boi', 'A força da pecuária no Vale do Mucuri.', 'Carlos Chagas possui um dos maiores e mais produtivos rebanhos bovinos de Minas Gerais. A combinação de extensas pastagens, genética de ponta na pecuária de corte e leite e feiras agropecuárias consolidou o título de Capital do Boi.');

INSERT INTO atrativos (nome, tipo, descricao, localizacao) VALUES
('Rio Mucuri e Pedras Monumentais', 'natureza', 'Formações rochosas grandiosas de granito que cercam a cidade e acompanham o curso do Rio Mucuri.', 'Zona Rural / Entorno Urbano'),
('Antiga Estação Ferroviária', 'patrimonio', 'Marco histórico da extinta Estrada de Ferro Bahia e Minas, responsável pelo povoamento e escoamento do gado.', 'Centro'),
('Mistérios e Causos do Vale', 'lenda', 'Histórias passadas de geração em geração sobre luzes nas serras, tropeiros antigos e tesouros escondidos nas fazendas.', 'Região do Mucuri');

INSERT INTO eventos (nome_evento, mes_ocorrencia, descricao, destaque) VALUES
('Exposição Agropecuária de Carlos Chagas', 'Julho / Agosto', 'Maior festa da cidade, com julgamento de raças bovinas, torneio leiteiro, rodeios e shows nacionais.', TRUE),
('Aniversário da Cidade', 'Dezembro', 'Comemorações cívicas, culturais e festivais gastronômicos celebrando a emancipação em 17 de dezembro.', TRUE);
